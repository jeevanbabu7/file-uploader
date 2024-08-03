
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtwfSPQ0wXSsTXUF9ISry3VPXrTS_-rys",
  authDomain: "image-uploader-842b5.firebaseapp.com",
  projectId: "image-uploader-842b5",
  storageBucket: "image-uploader-842b5.appspot.com",
  messagingSenderId: "637510386516",
  appId: "1:637510386516:web:a6780d18e6be2a60a8fec1",
  measurementId: "G-CKFDLHS0LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default app;
