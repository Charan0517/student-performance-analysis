// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABx_SalH1PiDndLfLbSFb22JAmecg3RzQ",
  authDomain: "email-auth-ec35c.firebaseapp.com",
  projectId: "email-auth-ec35c",
  storageBucket: "email-auth-ec35c.appspot.com",
  messagingSenderId: "1069447106400",
  appId: "1:1069447106400:web:61f9e1ab8fa7ac75d1d805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firestore = getFirestore();

export {auth, firestore}