// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCabe6zezUYcROatfROahnQDD8i57JBlw0",
  authDomain: "vite-contact-3b08f.firebaseapp.com",
  projectId: "vite-contact-3b08f",
  storageBucket: "vite-contact-3b08f.appspot.com",
  messagingSenderId: "1056310777665",
  appId: "1:1056310777665:web:370ea5a1a5970628b0f3c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
