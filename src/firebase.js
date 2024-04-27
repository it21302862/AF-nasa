/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhASL10rDzuMLk4mS1nigbVxfjodzkM3Y",
  authDomain: "af-nasa.firebaseapp.com",
  projectId: "af-nasa",
  storageBucket: "af-nasa.appspot.com",
  messagingSenderId: "668731993191",
  appId: "1:668731993191:web:1d00827a16f97a1f41f8c2",
  measurementId: "G-C916452V40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
