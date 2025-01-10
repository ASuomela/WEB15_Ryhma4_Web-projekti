
// Suositus elokuvat -kuvakaruselli

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.top-films .slide');
    const totalSlides = slides.length;

    slides[currentSlide].style.display = 'none'; // Piilota nykyinen dia

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].style.display = 'block'; // Näytä seuraava dia
}

// Näytä vain ensimmäinen dia aluksi
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.top-films .slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
});
