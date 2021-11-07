
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDLHS3tfPxqvMoEhEl0E3Sj9jnrlfqEvbs",
  authDomain: "event-organizer-69845.firebaseapp.com",
  projectId: "event-organizer-69845",
  storageBucket: "event-organizer-69845.appspot.com",
  messagingSenderId: "403606275199",
  appId: "1:403606275199:web:141fc8ed9cd082768bab4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const storage = getStorage(app);


export { db,auth,storage };