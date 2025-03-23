// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMchdGt2s1p9SaIaFwniVDaTA5pa2tAcg",
    authDomain: "authentication-app-8d8bb.firebaseapp.com",
    projectId: "authentication-app-8d8bb",
    storageBucket: "authentication-app-8d8bb.firebasestorage.app",
    messagingSenderId: "470284430194",
    appId: "1:470284430194:web:808a24fe711cad0fe18beb",
    measurementId: "G-DZFCQQ27HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth };