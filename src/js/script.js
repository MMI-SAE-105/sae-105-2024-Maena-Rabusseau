
/*menu*/

// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}





/*carousel*/
const carousel = document.querySelector('.carousel');

const images = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentIndex = 0;


function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});





prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});



/*lightbox*/



document.addEventListener("DOMContentLoaded", () => {
    const lightBox = document.querySelector("#lightbox");
    const thumbnails = document.querySelectorAll("img[data-full-img]");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const fullImgSrc = thumbnail.dataset.fullImg;
            const lightBoxImg = lightBox.querySelector("img");
            lightBoxImg.src = fullImgSrc;
            lightBox.showModal();
        });
    });


    lightBox.addEventListener("click", (event) => {
        if (event.target === lightBox) {
            lightBox.close();
        }
    });
});