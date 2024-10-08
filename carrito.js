// Cargar el carrito al iniciar
window.onload = function() {
    updateCart();
};

// Array que almacena los productos en el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* Función para agregar productos al carrito */
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = ''; // Limpia la lista actual del carrito

    // Recorrer cada producto en el carrito
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = 
            `${product.name} - $${product.price.toFixed(2)} 
            <div>
                <button onclick="decreaseCartItem(${index})">-</button>
                <input type="text" value="${product.quantity}" readonly>
                <button class="mas" onclick="increaseCartItem(${index})" style="margin-right: 15px">+</button>
                <button class="borrar" onclick="removeFromCart(${index})"><img src="img/basura.png" class="imgBasura"></button>
            </div>`;
        cartItems.appendChild(li);
        total += product.price * product.quantity; // Calcula el total
    });

    // Actualiza el precio total
    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
}

/* Función para aumentar la cantidad de un producto en el carrito */
function increaseCartItem(index) {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Actualiza el carrito
}

/* Función para disminuir la cantidad de un producto en el carrito */
function decreaseCartItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Actualiza el carrito
}

/* Función para eliminar productos del carrito */
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el producto del array del carrito
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Actualiza el carrito
}

/*funcion del botón para cancelar*/
// Selecciona el botón mediante su ID y añade un evento de clic
document.getElementById('cancelar').addEventListener('click', function() {
    // Selecciona la lista de productos mediante su ID
    const listaProductos = document.getElementById('cartItems');
    
    // Elimina todos los elementos de la lista estableciendo el contenido HTML a una cadena vacía
    cartItems.innerHTML = '';
});