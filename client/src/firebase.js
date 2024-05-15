// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cdbb8.firebaseapp.com",
  projectId: "mern-blog-cdbb8",
  storageBucket: "mern-blog-cdbb8.appspot.com",
  messagingSenderId: "1088104800422",
  appId: "1:1088104800422:web:d2bea4ae43f73e8ccb9467"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);