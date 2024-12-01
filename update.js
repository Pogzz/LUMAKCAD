let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.wrapper-holder div');
    const totalSlides = slides.length;

    // Update the current index based on the direction (prev/next)
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;  // Loop back to the first slide
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;  // Loop back to the last slide
    }

    // Adjust the animation of the wrapper-holder by changing the transform property
    const wrapperHolder = document.querySelector('.wrapper-holder');
    wrapperHolder.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Automatically move to the next slide every 5 seconds
setInterval(() => moveSlide(1), 5000);  // Automatically move to the next slide
