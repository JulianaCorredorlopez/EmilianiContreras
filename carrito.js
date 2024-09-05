// Array que almacena los productos en el carrito
let cart = [];

/* Función para agregar productos al carrito */
function addToCart(productName, productPrice, quantityId) {
    // Obtener el tamaño seleccionado del menú desplegable
    const size = document.getElementById(sizeId).value;
    // Obtener la cantidad seleccionada
    const quantity = parseInt(document.getElementById(quantityId).value);

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName && item.size === size);

    if (existingProduct) {
        // Si ya existe, incrementar la cantidad
        existingProduct.quantity += quantity;
    } else {
        // Si no existe, agregar al carrito
        cart.push({ name: productName, price: productPrice, size: size, quantity: quantity });
    }

    updateCart(); // Actualizar la visualización del carrito
}

/* Función para eliminar productos del carrito */
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el producto del array del carrito
    updateCart(); // Actualizar la visualización del carrito
}

/* Función para actualizar la visualización del carrito */
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = ''; // Limpia la lista actual del carrito

    // Recorrer cada producto en el carrito
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} (${product.size}) - $${product.price.toFixed(2)} 
            <div>
                <button onclick="decreaseCartItem(${index})">-</button>
                <input type="text" value="${product.quantity}" readonly>
                <button onclick="increaseCartItem(${index})">+</button>
                <select onchange="changeSize(${index}, this.value)">
                    <option value="Pequeño" ${product.size === 'Pequeño' ? 'selected' : ''}>Pequeño</option>
                    <option value="Medio" ${product.size === 'Medio' ? 'selected' : ''}>Medio</option>
                    <option value="Grande" ${product.size === 'Grande' ? 'selected' : ''}>Grande</option>
                </select>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(li);
        total += product.price * product.quantity; // Calcula el total
    });

    // Actualiza el precio total
    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
}

/* Función para aumentar la cantidad de un producto en el carrito */
function increaseCartItem(index) {
    cart[index].quantity++;
    updateCart(); // Actualiza el carrito
}

/* Función para disminuir la cantidad de un producto en el carrito */
function decreaseCartItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    updateCart(); // Actualiza el carrito
}

/* Función para cambiar el tamaño de un producto en el carrito */
function changeSize(index, newSize) {
    cart[index].size = newSize;
    updateCart(); // Actualiza el carrito
}