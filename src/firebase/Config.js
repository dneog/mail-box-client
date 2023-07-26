
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEYS,
  authDomain: "mail-box-client-5c3c3.firebaseapp.com",
  projectId: "mail-box-client-5c3c3",
  storageBucket: "mail-box-client-5c3c3.appspot.com",
  messagingSenderId: "1001289830600",
  appId: "1:1001289830600:web:12d90a7638c76c62e055fd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app;
