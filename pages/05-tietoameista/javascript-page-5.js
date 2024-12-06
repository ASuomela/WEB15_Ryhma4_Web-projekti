let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".carousel-slides .slide");
    const totalSlides = slides.length;

    // Piilota nykyinen dia
    slides[currentSlide].style.display = "none";

    // Päivitä nykyinen dia
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Näytä seuraava dia
    slides[currentSlide].style.display = "block";
}

function reserveMeal(mealName) {
    alert(`Olet varannut: ${mealName}`);
}

// Näytä vain ensimmäinen dia aluksi
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slides .slide");
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });
});
