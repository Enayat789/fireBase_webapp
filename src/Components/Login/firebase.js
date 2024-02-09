// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3np_wseNNM2IVREMfVZ3fh6uZb4jD8ng",
  authDomain: "react-login-auth-d94e2.firebaseapp.com",
  projectId: "react-login-auth-d94e2",
  storageBucket: "react-login-auth-d94e2.appspot.com",
  messagingSenderId: "23428200220",
  appId: "1:23428200220:web:146f7539830ec74b7facd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
