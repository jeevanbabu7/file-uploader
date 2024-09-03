# File Uploader

A simple and efficient file uploader application built with TypeScript, React, Tailwind CSS, and Firebase. This application allows users to upload any type of file and generates a sharable link that can be used to access the file.

## Features

- **File Upload:** Users can upload any file type.
- **Sharable Link:** After uploading, a unique URL is generated for each file, allowing easy sharing.
- **Responsive Design:** Built with Tailwind CSS to ensure the application looks great on all devices.
- **Firebase Storage:** Files are securely stored using Firebase, ensuring scalability and reliability.

## Tech Stack

- **TypeScript:** Provides static typing, which helps in catching errors early during development.
- **React:** A powerful JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Firebase:** Used for file storage, authentication, and real-time database functionality.

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/file-uploader.git
   cd file-uploader
2. Install dependencies:
   
   npm install
3. Set up Firebase:

  Create a Firebase project in the Firebase Console.
  Enable Firebase Storage.
  Copy the Firebase config object from your Firebase project settings and paste it in firebase.js
4. Start the development server:
  npm start
  The app will be available at http://localhost:3000.


  
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
