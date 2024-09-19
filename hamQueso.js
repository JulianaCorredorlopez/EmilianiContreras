// Botones incremento y decremento
let count = 1;

function incre() {
    count++;
    document.getElementById('quantity1').innerText = count;
}

function decre() {
    if (count > 1) {
        count--;
    }
    document.getElementById('quantity1').innerText = count;
}

// Carrusel de imágenes
let currentIndex = 1;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    currentIndex += direction;

    if (currentIndex < 1) {
        currentIndex = items.length - 2;
    } else if (currentIndex >= items.length) {
        currentIndex = 1;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Función para agregar al carrito
function addToCar(productName, productPrice, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).innerText);
    // Guarda el producto en localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

/*aviso*/
document.getElementById('botonAgregar').addEventListener('click', function() {
    const aviso = document.getElementById('aviso');
    aviso.style.display = 'block';
    setTimeout(function() {
        aviso.style.display = 'none';
    }, 2000); // El aviso se mostrará por 3 segundos
});