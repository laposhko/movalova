// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true, // Enable looping
  // autoplay: {
  //   delay: 3000,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  modules: [Navigation, Pagination, Scrollbar],

  slidesPerView: 1, // Number of slides visible at once
  spaceBetween: 30, // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, // Show 3 items on large screens
    },
    768: {
      slidesPerView: 2, // Show 2 items on medium screens
    },
    480: {
      slidesPerView: 1, // Show 1 item on small screens
    },
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiper.slideNext();
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  swiper.slidePrev();
});
