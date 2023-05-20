// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlDiM4REWcLtehEiWFEEIBLqbPiYpEc3w",
  authDomain: "kits-car.firebaseapp.com",
  projectId: "kits-car",
  storageBucket: "kits-car.appspot.com",
  messagingSenderId: "221998844869",
  appId: "1:221998844869:web:7b6e2a32d35339c6fe99ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;