function detectarPantalla() {
    if (window.innerWidth > 768) {
        // Mostrar mensaje de error si la pantalla es mayor a 768px (pantallas grandes)
        document.getElementById('mensajeError').style.display = 'block';
        document.querySelector('.solo-celular').style.display = 'none';
    } else {
        // Mostrar contenido móvil si la pantalla es de tamaño móvil
        document.getElementById('mensajeError').style.display = 'none';
        document.querySelector('.solo-celular').style.display = 'block';
    }
}

// Ejecutar al cargar la página
detectarPantalla();

// Ejecutar cada vez que se redimensiona la ventana
window.addEventListener('resize', detectarPantalla);
