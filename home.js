var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    preloadImages: true, // Ensures images are preloaded
    lazy: {
        loadPrevNext: true, // Preloads nearby slides
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});
// Add hover effect for the main active slide
const swiperContainer = document.querySelector('.swiper');

// Add event listeners after Swiper is initialized
swiperContainer.addEventListener('mouseover', (event) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        activeSlide.style.transform = 'scale(1.02) translateY(1px)';
        activeSlide.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
        activeSlide.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
    }
});

swiperContainer.addEventListener('mouseout', (event) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        activeSlide.style.transform = 'scale(1)';
        activeSlide.style.boxShadow = 'none';
    }
});
  
