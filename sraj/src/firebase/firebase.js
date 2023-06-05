// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdOMdWnjPiXw8YsEmmagcm5KiYUwPYI3o",
    authDomain: "sraj-fc4e3.firebaseapp.com",
    databaseURL: "https://sraj-fc4e3-default-rtdb.firebaseio.com",
    projectId: "sraj-fc4e3",
    storageBucket: "sraj-fc4e3.appspot.com",
    messagingSenderId: "299898917974",
    appId: "1:299898917974:web:d3a82a2a3c1df3e38257f7",
    measurementId: "G-EC68DC0GRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);