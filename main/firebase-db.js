// firebase-db.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkDsufRf61kUxDFzC6TW8Q6WreYYObcYI",
    authDomain: "promptest-f540a.firebaseapp.com",
    projectId: "promptest-f540a",
    storageBucket: "promptest-f540a.appspot.com",
    messagingSenderId: "970757592350",
    appId: "1:970757592350:web:c56e72227acfb3b34de50f",
    measurementId: "G-M155PL62SH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };