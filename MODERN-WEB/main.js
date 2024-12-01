// const leftButton = document.querySelector('.left-arrow');
// const rightButton = document.querySelector('.right-arrow');
// const exploreGrid = document.querySelector('.explore-grid');
// const cards = document.querySelectorAll('.explore-card');
// const cardsPerView = 4;
// let currentIndex = 0;

// function updateCarousel() {
//     exploreGrid.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function showCards() {
//     const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;

//     if (currentIndex < 0) currentIndex = 0;
//     if (currentIndex > maxIndex) currentIndex = maxIndex;

//     exploreGrid.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// leftButton.addEventListener('click', () => {
//     currentIndex--;
//     showCards();
// });

// rightButton.addEventListener('click', () => {
//     currentIndex++;
//     showCards();
// });
