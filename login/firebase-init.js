// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase app initialized:", app);
console.log("Auth instance:", auth);

// Exportar la instancia de autenticación para usarla en otros archivos
export { auth };
