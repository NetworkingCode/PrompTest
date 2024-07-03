function grabarPrompt() {
    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    if (titulo && comentario) {
        const listaPrompts = document.getElementById('listaPrompts');

        const promptEntry = document.createElement('div');
        promptEntry.className = 'prompt-entry';

        const promptTitle = document.createElement('h3');
        promptTitle.innerText = titulo;

        const promptText = document.createElement('p');
        promptText.innerText = comentario;

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerText = 'Copiar';
        copyButton.onclick = () => copiarTexto(promptText.innerText);

        promptEntry.appendChild(promptTitle);
        promptEntry.appendChild(promptText);
        promptEntry.appendChild(copyButton);

        listaPrompts.prepend(promptEntry);


        limpiarCampos();
    } else {
        alert('Por favor, llena ambos campos antes de grabar.');
    }
}

function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('comentario').value = '';
}


function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        mostrarMensajeCopiado();
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function mostrarMensajeCopiado() {
    const mensaje = document.getElementById('mensajeCopiado');
    mensaje.classList.add('visible');

    setTimeout(() => {
        mensaje.classList.remove('visible');
    }, 2000); // El mensaje desaparecerá después de 2 segundos
}