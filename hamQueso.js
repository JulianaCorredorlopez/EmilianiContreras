//boton incremento y decremento
let count = 0;

function incre() {
    count++;
    document.getElementById('counter').innerText = count;
}

function decre() {
    if (count > 0) {
        count--;
    }
    document.getElementById('counter').innerText = count;
}

//carrusel de imagenes
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
