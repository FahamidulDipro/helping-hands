// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr8jqep9_dyi05tI-6ICVJbvVrmvoEUhs",
  authDomain: "helping-hands-29e72.firebaseapp.com",
  projectId: "helping-hands-29e72",
  storageBucket: "helping-hands-29e72.appspot.com",
  messagingSenderId: "1088496229514",
  appId: "1:1088496229514:web:2178df45748fa3773d2173",
  measurementId: "G-9DJSZ9XK65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;