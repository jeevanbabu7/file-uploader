import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './App.css';
import { IoCloudUpload  } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../firebase.ts';

type downloadURLType = {
  name: string
  URL: string
};

type ProgressBarProps = {
  percentage: number;
};
const ProgressBar = ({percentage}:ProgressBarProps) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__inner" style={{ width: `${percentage}%` }}>
        <div className="progress-bar__inner__text">{percentage}%</div>
        </div>
    </div>
  )
}
function App() {
  const [downloadURLs, setDownloadURLs] = useState<downloadURLType[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [copy, setCopy] = useState(false);
  const [Uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const notify = () => toast("Link copied!!");


  const DragDrop = () => {
    
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        setUploadedFiles(acceptedFiles);
        
        
        acceptedFiles.forEach((file) => {
          console.log(`Preparing to upload: ${file.name}`);
          uploadFile(file);
        });
      },
    });

    return (
      <div {...getRootProps()} className="dropzone">
        <IoCloudUpload style={{ fontSize: '48px' }} />
        <input {...getInputProps()} />
        <p>Drag and drop files here or click to browse.</p>

      </div>
    );
  };

  function uploadFile(file: File) {
    console.log(file.type)
    console.log(file.type.slice(-3))
    
    const storage = getStorage(app); // Ensure you pass the app configuration if needed
    const storageRef = ref(storage, file.name);
    console.log(`Uploading file: ${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setUploading(() => true);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(Number(progress.toFixed(2)));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.error('Upload error:', error);
      },
      () => {
        setUploading(() => false);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDownloadURLs((prev) => [...prev, {name: file.name, URL: downloadURL}]);
        });
      }
      
    );

    
  }



  return (
    <>
      <main className='main'>
        <p className='app-name'>QuickUpload</p>
      <ToastContainer />
       { uploadedFiles.length == 0 && (<div className="main-container">
          <h3>Upload your file.</h3>
          <div>
            <DragDrop />
          </div>
        </div>)}
        {Uploading && <div className="progress-container">
          <ProgressBar percentage={progress}/>
        </div>}
        {downloadURLs.length != 0 && (
            <div className='uploaded-img-container'>
              {downloadURLs.map((image) => {
                return (
                  <div className='image'>
                    <img className='uploaded-img main-container' src={image.URL} alt={image.name}/>
                    <label htmlFor="URL">URL: </label>
                    <div className="url-field">
                      {!copy && <IoCopyOutline
                        style={{
                          position: 'relative',
                          left: "94%",
                          fontSize: "16px"
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(image.URL);
                          setCopy(true);
                          notify();
                          setTimeout(() => {
                            setCopy(false);
                          }, 4000);
                          
                        }}
                      />}
                      {copy && <TiTick 
                                style={{
                                  position: 'relative',
                                  left: "94%"
                                }}
                      />}
                      <input id="URL" type="text" value={image.URL} readOnly />
                    </div>
                  </div>
                )
              })}
            </div>
        )}
      </main>
    </>
  );
}

export default App;
