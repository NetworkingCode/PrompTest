// Importar las funciones que necesitas de los SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración de Firebase
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
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Exportar la instancia de autenticación
export { auth };
