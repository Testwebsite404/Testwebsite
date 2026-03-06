// carousel.js
let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide");
let dots = document.querySelectorAll(".dot");

// Функция для показа слайдов
function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Автоматическая смена слайдов
setInterval(showSlides, 5000);

// Функции для кнопок навигации
document.querySelector(".prev-btn").addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
});

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlides();
  });
});

// Инициализация слайдера
showSlides();

