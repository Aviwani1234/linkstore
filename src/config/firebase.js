import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXqt_2HJfoZ4vSDwd7QguHQBYuVXrXVyI",
  authDomain: "linkstore-7edfe.firebaseapp.com",
  databaseURL: "https://linkstore-7edfe-default-rtdb.firebaseio.com",
  projectId: "linkstore-7edfe",
  storageBucket: "linkstore-7edfe.appspot.com",
  messagingSenderId: "656898707578",
  appId: "1:656898707578:web:1a4e9fbb5104b93642ebc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();