// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrGwGZ7vYhxkOZfI8Y4lwRzJJFg-FbpAM",
  authDomain: "muzamil-b908e.firebaseapp.com",
  projectId: "muzamil-b908e",
  storageBucket: "muzamil-b908e.appspot.com",
  messagingSenderId: "302859469123",
  appId: "1:302859469123:web:e72cedf52084ebecba6ff6",
  measurementId: "G-NXDV2WZ8G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);