// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgjZvw1QoAR22igp_9Y6H-kJS4MHr939o",
  authDomain: "warehouse-client-side-de85b.firebaseapp.com",
  projectId: "warehouse-client-side-de85b",
  storageBucket: "warehouse-client-side-de85b.appspot.com",
  messagingSenderId: "58029591180",
  appId: "1:58029591180:web:acbc912c338642f39389a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
