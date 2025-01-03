(function () {
 const e = document.querySelector('#swiper-default'),
  i = document.querySelector('#swiper-with-arrows'),
  r = document.querySelector('#swiper-with-pagination'),
  t = document.querySelector('#swiper-with-progress'),
  o = document.querySelector('#swiper-with-scrollbar'),
  n = document.querySelector('#swiper-vertical'),
  s = document.querySelector('#swiper-multiple-slides'),
  w = document.querySelector('#swiper-3d-coverflow-effect'),
  p = document.querySelector('#swiper-3d-cube-effect'),
  l = document.querySelector('#swiper-3d-flip-effect'),
  a = document.querySelector('.gallery-thumbs'),
  c = document.querySelector('.gallery-top');
 let u;
 e && new Swiper(e, { slidesPerView: 'auto' }),
  i &&
   new Swiper(i, {
    slidesPerView: 'auto',
    navigation: {
     prevEl: '.swiper-button-prev',
     nextEl: '.swiper-button-next',
    },
   }),
  r &&
   new Swiper(r, {
    slidesPerView: 'auto',
    pagination: { clickable: !0, el: '.swiper-pagination' },
   }),
  t &&
   new Swiper(t, {
    slidesPerView: 'auto',
    pagination: { type: 'progressbar', el: '.swiper-pagination' },
    navigation: {
     prevEl: '.swiper-button-prev',
     nextEl: '.swiper-button-next',
    },
   }),
  o && new Swiper(o, { scrollbar: { hide: !0, el: '.swiper-scrollbar' } }),
  n &&
   new Swiper(n, {
    direction: 'vertical',
    pagination: { clickable: !0, el: '.swiper-pagination' },
   }),
  s &&
   new Swiper(s, {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: { clickable: !0, el: '.swiper-pagination' },
   }),
  w &&
   new Swiper(w, {
    effect: 'coverflow',
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: 'auto',
    coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: !0,
    },
    pagination: { el: '.swiper-pagination' },
   }),
  p &&
   new Swiper(p, {
    effect: 'cube',
    grabCursor: !0,
    cubeEffect: {
     shadow: !0,
     slideShadows: !0,
     shadowScale: 0.94,
     shadowOffset: 20,
    },
    pagination: { el: '.swiper-pagination' },
   }),
  l &&
   new Swiper(l, {
    effect: 'flip',
    grabCursor: !0,
    pagination: { el: '.swiper-pagination' },
    navigation: {
     prevEl: '.swiper-button-prev',
     nextEl: '.swiper-button-next',
    },
   }),
  a &&
   (u = new Swiper(a, {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: !0,
    watchSlidesVisibility: !0,
    watchSlidesProgress: !0,
   })),
  c &&
   new Swiper(c, {
    spaceBetween: 10,
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
    thumbs: { swiper: u },
   });
})();
