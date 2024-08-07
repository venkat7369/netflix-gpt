// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYIlN51H2aYN8TAuQ7AWsPGf_kXi7tx2c",
  authDomain: "netflixgpt-c362a.firebaseapp.com",
  projectId: "netflixgpt-c362a",
  storageBucket: "netflixgpt-c362a.appspot.com",
  messagingSenderId: "75597693198",
  appId: "1:75597693198:web:e095625756792c2fe5575f",
  measurementId: "G-8NVK808XLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);