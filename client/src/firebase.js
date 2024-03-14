// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wad-project-9310e.firebaseapp.com",
  projectId: "wad-project-9310e",
  storageBucket: "wad-project-9310e.appspot.com",
  messagingSenderId: "998636739474",
  appId: "1:998636739474:web:253e54a4682968a6523f4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);