document.addEventListener('DOMContentLoaded', function () {
     // Datos predeterminados para los campos del formulario
     var datosPredeterminados = {
          email: 'ricardonieto@live.cl',
          password: '58931645'
     };

     // Obtener el formulario de inicio de sesión
     var loginForm = document.getElementById('login-form');

     // Asignar los valores predeterminados a los campos del formulario
     loginForm.email.value = datosPredeterminados.email;
     loginForm.password.value = datosPredeterminados.password;
});


// Importar la instancia de autenticación y el método signInWithEmailAndPassword desde firebase-init.js
import { auth } from '/workspaces/PrompTest/login/firebase-init.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
     signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {

               // Mostrar un mensaje de confirmación antes de la redirección
               alert('Inicio de sesión exitoso! Redirigiendo a la página principal...');

               // Limpiar los campos del formulario después del inicio de sesión exitoso (opcional)
               emailInput.value = '';
               passwordInput.value = '';

               // Redirigir a la página principal después del inicio de sesión exitoso
               window.location.href = 'main/main.html';
          })
          .catch((error) => {

               // Manejar errores de inicio de sesión (puedes mostrar un mensaje de error al usuario)
               console.error('Error al iniciar sesión:', error.message);
               alert('Error al iniciar sesión: ' + error.message); // Mostrar mensaje de error
          });
});





//Redirigir a la página principal después del inicio de sesión exitoso
// document.getElementById("Entrar").onclick = function() {
//      window.location.href = "main/main.html";
// };