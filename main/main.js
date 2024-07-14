import { db } from '../login/firebase-init.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Función para guardar un prompt en Firestore
async function grabarPrompt() {
    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    if (titulo && comentario) {
        // Guardar los datos en Firestore
        try {
            const docRef = await addDoc(collection(db, "prompttest_db"), {
                titulo_prompt: titulo,
                descrip_prompt: comentario,
                timestamp: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Prompt guardado exitosamente!");

            // Añadir el nuevo prompt a la interfaz de usuario
            mostrarPromptEnUI({ titulo_prompt: titulo, descrip_prompt: comentario });
            limpiarCampos();
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Error al guardar el prompt.");
        }
    } else {
        alert('Por favor, llena ambos campos antes de grabar.');
    }
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('comentario').value = '';
}

// Función para copiar texto al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        mostrarMensajeCopiado();
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para mostrar mensaje de "copiado"
function mostrarMensajeCopiado() {
    const mensaje = document.getElementById('mensajeCopiado');
    mensaje.classList.add('visible');

    setTimeout(() => {
        mensaje.classList.remove('visible');
    }, 2000); // El mensaje desaparecerá después de 2 segundos
}

// Función para mostrar un prompt en la interfaz de usuario
function mostrarPromptEnUI(prompt) {
    const listaPrompts = document.getElementById('listaPrompts');

    const promptEntry = document.createElement('div');
    promptEntry.className = 'prompt-entry';

    const promptTitle = document.createElement('h3');
    promptTitle.innerText = prompt.titulo_prompt;

    const promptText = document.createElement('p');
    promptText.innerText = prompt.descrip_prompt;

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerText = 'Copiar';
    copyButton.onclick = () => copiarTexto(prompt.descrip_prompt);

    promptEntry.appendChild(promptTitle);
    promptEntry.appendChild(promptText);
    promptEntry.appendChild(copyButton);

    listaPrompts.prepend(promptEntry);
}

// Función para cargar los prompts desde Firestore
async function cargarPrompts() {
    const querySnapshot = await getDocs(collection(db, "prompttest_db"));
    querySnapshot.forEach((doc) => {
        mostrarPromptEnUI(doc.data());
    });
}

// Cargar los prompts cuando se cargue la página
window.onload = function() {
    cargarPrompts();
};

window.grabarPrompt = grabarPrompt;
window.limpiarCampos = limpiarCampos;
