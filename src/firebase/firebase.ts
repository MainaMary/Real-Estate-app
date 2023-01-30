// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "real-estate-web-app-a8ee6.firebaseapp.com",
  projectId: "real-estate-web-app-a8ee6",
  storageBucket: "real-estate-web-app-a8ee6.appspot.com",
  messagingSenderId: "53676506308",
  appId: "1:53676506308:web:5dafa6667f21a8136e5d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()
export {db, auth}