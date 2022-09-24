
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCBUApBNHv9Dqw2fmTK74s9_Rp7FsXAXA",
    authDomain: "jamesdev-5cba7.firebaseapp.com",
    projectId: "jamesdev-5cba7",
    storageBucket: "jamesdev-5cba7.appspot.com",
    messagingSenderId: "730047929440",
    appId: "1:730047929440:web:f533bd8ef175323d14b705",
    measurementId: "G-M2T1XHM8HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);