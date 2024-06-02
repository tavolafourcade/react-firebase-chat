import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactchatapp-451e3.firebaseapp.com",
  projectId: "reactchatapp-451e3",
  storageBucket: "reactchatapp-451e3.appspot.com",
  messagingSenderId: "298546726125",
  appId: "1:298546726125:web:9a2b127ca05fb066daf8e4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
