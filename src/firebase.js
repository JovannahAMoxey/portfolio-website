// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAn5kgLx8npUuzGHDrTW9L2qVjEz8PJ00",
  authDomain: "joviportfolioblog.firebaseapp.com",
  projectId: "joviportfolioblog",
  storageBucket: "joviportfolioblog.firebasestorage.app",
  messagingSenderId: "852510280884",
  appId: "1:852510280884:web:8d59dca31d5ab761119be1",
  measurementId: "G-4KR66B2V9B"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add this line to initialize Firebase Auth
export const auth = getAuth(app);

// Optional: Keep analytics if you want

export const db = getFirestore(app);
