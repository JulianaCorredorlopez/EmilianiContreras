//boton incremento y decremento
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

//carrusel de imagenes
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
