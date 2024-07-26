// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKaUEgE6bDqlHX3O0e8iCd08XdoGD7uZI",
  authDomain: "react-streamflix.firebaseapp.com",
  projectId: "react-streamflix",
  storageBucket: "react-streamflix.appspot.com",
  messagingSenderId: "1024583102334",
  appId: "1:1024583102334:web:e4fcfc62afdb73b7c54d2f",
  measurementId: "G-W4XZFJKN13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
