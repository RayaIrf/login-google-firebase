// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHj7CJBjR5VGc_gb8cnbjfyJEmwsYecq4",
    authDomain: "login-raya.firebaseapp.com",
    projectId: "login-raya",
    storageBucket: "login-raya.appspot.com",
    messagingSenderId: "82436166420",
    appId: "1:82436166420:web:ec81dbaeedcd192b636801",
    measurementId: "G-J372QH60TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
