(function () {
 const p = document.querySelector('.layout-navbar'),
  i = document.getElementById('hero-animation'),
  r = document.querySelectorAll('.hero-dashboard-img'),
  o = document.querySelectorAll('.hero-elements-img'),
  l = document.getElementById('swiper-clients-logos'),
  c = document.getElementById('swiper-reviews'),
  w = document.getElementById('reviews-previous-btn'),
  y = document.getElementById('reviews-next-btn'),
  f = document.querySelector('.swiper-button-prev'),
  v = document.querySelector('.swiper-button-next'),
  d = document.querySelector('.price-duration-toggler'),
  u = [].slice.call(document.querySelectorAll('.price-monthly')),
  m = [].slice.call(document.querySelectorAll('.price-yearly'));
 screen.width >= '1200' &&
  i &&
  (i.addEventListener('mousemove', function (t) {
   o.forEach((e) => {
    e.style.transform = 'translateZ(1rem)';
   }),
    r.forEach((e) => {
     let s = (window.innerWidth - t.pageX * 2) / 100,
      a = (window.innerHeight - t.pageY * 2) / 100;
     e.style.transform = `perspective(1200px) rotateX(${a}deg) rotateY(${s}deg) scale3d(1, 1, 1)`;
    });
  }),
  p.addEventListener('mousemove', function (t) {
   o.forEach((e) => {
    e.style.transform = 'translateZ(1rem)';
   }),
    r.forEach((e) => {
     let s = (window.innerWidth - t.pageX * 2) / 100,
      a = (window.innerHeight - t.pageY * 2) / 100;
     e.style.transform = `perspective(1200px) rotateX(${a}deg) rotateY(${s}deg) scale3d(1, 1, 1)`;
    });
  }),
  i.addEventListener('mouseout', function () {
   o.forEach((n) => {
    n.style.transform = 'translateZ(0)';
   }),
    r.forEach((n) => {
     n.style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)';
    });
  })),
  c &&
   new Swiper(c, {
    slidesPerView: 1,
    spaceBetween: 5,
    grabCursor: !0,
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    loop: !0,
    loopAdditionalSlides: 1,
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     1200: { slidesPerView: 3, spaceBetween: 26 },
     992: { slidesPerView: 2, spaceBetween: 20 },
    },
   }),
  y.addEventListener('click', function () {
   v.click();
  }),
  w.addEventListener('click', function () {
   f.click();
  }),
  l &&
   new Swiper(l, {
    slidesPerView: 2,
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    breakpoints: { 992: { slidesPerView: 5 }, 768: { slidesPerView: 3 } },
   }),
  document.addEventListener('DOMContentLoaded', function (n) {
   function t() {
    d.checked
     ? (m.map(function (e) {
        e.classList.remove('d-none');
       }),
       u.map(function (e) {
        e.classList.add('d-none');
       }))
     : (m.map(function (e) {
        e.classList.add('d-none');
       }),
       u.map(function (e) {
        e.classList.remove('d-none');
       }));
   }
   t(),
    (d.onchange = function () {
     t();
    });
  });
})();