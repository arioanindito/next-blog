// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "food-app-bbc56.firebaseapp.com",
  projectId: "food-app-bbc56",
  storageBucket: "food-app-bbc56.appspot.com",
  messagingSenderId: "193678100222",
  appId: "1:193678100222:web:749593bc1b2fb0515187af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);