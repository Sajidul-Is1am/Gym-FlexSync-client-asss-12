import {
    getAuth
} from "firebase/auth";
// Import the functions you need from the SDKs you need

import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQSlOafEReeHhLQYnP1804qSscHbjJw3M",
    authDomain: "flexsync-ass-12.firebaseapp.com",
    projectId: "flexsync-ass-12",
    storageBucket: "flexsync-ass-12.appspot.com",
    messagingSenderId: "866329230801",
    appId: "1:866329230801:web:f992dbefa3fe4380f774f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);