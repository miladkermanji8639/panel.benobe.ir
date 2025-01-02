let swiperCards_membership = new Swiper('#card-content-membership', {
 freeMode: true,
 loop: true,
 spaceBetween: 15,
 grabCursor: true,
 slidesPerView: 'auto',

 pagination: {
  el: '.swiper-pagination-membership',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 4.4,
 speed: 20000,

 navigation: {
  nextEl: '.swiper-button-next-membership',
  prevEl: '.swiper-button-prev-membership',
 },

 breakpoints: {
  320: {
   slidesPerView: 1,
  },
  350: {
   slidesPerView: 1.25,
  },
  400: {
   slidesPerView: 1.4,
  },
  473: {
   slidesPerView: 1.6,
  },
  500: {
   slidesPerView: 1.8,
  },
  559: {
   slidesPerView: 2,
  },
  560: {
   slidesPerView: 2,
  },
  749: {
   slidesPerView: 2.7,
  },
  750: {
   slidesPerView: 2.8,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3.2,
  },
  994: {
   slidesPerView: 3.4,
  },
  1058: {
   slidesPerView: 3.6,
  },
  1112: {
   slidesPerView: 3.8,
  },
  1113: {
   slidesPerView: 3.8,
  },
  1199: {
   slidesPerView: 4,
  },
  1200: {
   slidesPerView: 4,
  },
 },
});

$(document).ready(function () {
 $('.nobat-dehi .cards-online-nurses .card__div .card-online-nurse').css(
  'height',
  '258px',
 );
 $('.nobat-dehi').css({
  'min-height': '42vh',
 });
});

$(document).ready(function () {
 $(document).ready(function () {
  $('.card__container').css({
   'padding-block': '1rem',
   'min-height': '300px',
  });
 });

 $(document).ready(function () {
  $(
   '.nobat-dehi .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal',
  ).css('bottom', '141px');
 });
});
