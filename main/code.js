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
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ' + err);
    });
}