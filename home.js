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
  