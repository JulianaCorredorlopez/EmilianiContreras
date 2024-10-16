function eliminarProducto(boton) {
    const producto = boton.parentElement; // Selecciona el div que contiene todo el producto
    producto.remove(); // Elimina todo el contenedor del producto
}