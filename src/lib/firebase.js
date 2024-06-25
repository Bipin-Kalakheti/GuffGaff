// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUfIVC6RaSQ8-30JFxOi6o166DLcFRMM",
  authDomain: "chatapp-e9717.firebaseapp.com",
  projectId: "chatapp-e9717",
  storageBucket: "chatapp-e9717.appspot.com",
  messagingSenderId: "629197170848",
  appId: "1:629197170848:web:35e7d1b1757297bfe241c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
