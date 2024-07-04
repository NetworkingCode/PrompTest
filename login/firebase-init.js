// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkDsufRf61kUxDFzC6TW8Q6WreYYObcYI",
  authDomain: "promptest-f540a.firebaseapp.com",
  projectId: "promptest-f540a",
  storageBucket: "promptest-f540a.appspot.com",
  messagingSenderId: "970757592350",
  appId: "1:970757592350:web:c56e72227acfb3b34de50f",
  measurementId: "G-M155PL62SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);