// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1z_ysSfzHTGZmupaQSfmJqxylpWwK_ig",
  authDomain: "chatapp-6ec94.firebaseapp.com",
  projectId: "chatapp-6ec94",
  storageBucket: "chatapp-6ec94.appspot.com",
  messagingSenderId: "722573713234",
  appId: "1:722573713234:web:2c4664271699aea086648b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
