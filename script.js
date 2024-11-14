document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Oculta el formulario
    this.style.display = 'none';
    
    // Muestra el mensaje de éxito con animación
    const exitoMensaje = document.getElementById('exitoMensaje');
    exitoMensaje.classList.remove('hidden');
    setTimeout(() => exitoMensaje.classList.add('exito-visible'), 100); // Agrega clase después de un pequeño retraso
});
