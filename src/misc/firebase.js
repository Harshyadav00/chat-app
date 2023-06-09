// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' ;
import { getDatabase } from 'firebase/database' ;




// Added SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBTFnOkUeY6y8M3Spr8AcGABMv8X5Rz4U",
  authDomain: "chat-web-app-4959a.firebaseapp.com",
  projectId: "chat-web-app-4959a",
  storageBucket: "chat-web-app-4959a.appspot.com",
  messagingSenderId: "1003986825722",
  appId: "1:1003986825722:web:cf286ac133fa49b097b443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app) ;
export const database = getDatabase(app) ;