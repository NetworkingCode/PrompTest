// Importar la instancia de autenticación desde firebase-init.js
import { auth } from './firebase-init.js';

// Obtener referencia a los elementos del formulario
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Manejar el evento de submit del formulario
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const email = emailInput.value;
    const password = passwordInput.value;

    // Iniciar sesión con correo y contraseña usando Firebase Auth
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Limpiar los campos del formulario después del inicio de sesión exitoso (opcional)
            emailInput.value = '';
            passwordInput.value = '';

            // Redirigir a la página principal después del inicio de sesión exitoso
            window.location.href = '/main/main.html';
        })
        .catch((error) => {
            // Manejar errores de inicio de sesión (puedes mostrar un mensaje de error al usuario)
            console.error('Error al iniciar sesión:', error.message);
        });
});
