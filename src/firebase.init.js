// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKcGP5cFE98xIFVRpMq8E2ukp1f0vCwSY",
    authDomain: "ema-john-simple-553ca.firebaseapp.com",
    projectId: "ema-john-simple-553ca",
    storageBucket: "ema-john-simple-553ca.appspot.com",
    messagingSenderId: "917185878570",
    appId: "1:917185878570:web:f232efb9f4f0222316c153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;

