const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const dots = document.querySelectorAll('.carousel-dots .dot');

let currentIndex = 0;

function updateCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  const width = slides[0].clientWidth;
  carouselImages.style.transform = `translateX(-${width * currentIndex}px)`;

  // обновляем активную точку
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// кнопки вперед/назад
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// клик по точкам
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// автоперелистывание каждые 7 секунд
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 6500);

// начальная инициализация
updateCarousel();