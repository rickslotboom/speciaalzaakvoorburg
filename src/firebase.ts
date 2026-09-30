import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM6ipnE45G2R6blJaXyj-i0pu5XC79ONw",
  authDomain: "speciaalzaak-website.firebaseapp.com",
  projectId: "speciaalzaak-website",
  storageBucket: "speciaalzaak-website.firebasestorage.app",
  messagingSenderId: "235734040476",
  appId: "1:235734040476:web:4505d88979f80e3eba1259",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);