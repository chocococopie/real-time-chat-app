// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSZHuzTmSMNrnGdjAMatK3HXqvqjtotio",
  authDomain: "real-time-chat-app-b0600.firebaseapp.com",
  projectId: "real-time-chat-app-b0600",
  storageBucket: "real-time-chat-app-b0600.firebasestorage.app",
  messagingSenderId: "981703584711",
  appId: "1:981703584711:web:6dd24e965d0640f07c07e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };