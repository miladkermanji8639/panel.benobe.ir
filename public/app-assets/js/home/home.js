let takhasos_list = $('.takhasos-list');
// takhasos_list.addClass("h-50px");
let count_st = 0;
// close show modal
let close_modal = $('.close-modal');
let log_reg_modal = $('.log-reg-modal');
$('.open-log-reg-modal').click(function (e) {
 e.preventDefault();
 log_reg_modal.removeClass('d-none');
 log_reg_modal.css({
  transition: '2s',
 });
});
$('.open-log-reg-modal-up-991').click(function (e) {
 e.preventDefault();
 log_reg_modal.removeClass('d-none');
 log_reg_modal.css({
  transition: '2s',
 });
});
close_modal.click(function (e) {
 e.preventDefault();
 log_reg_modal.addClass('d-none');
 log_reg_modal.css({
  transition: '2s',
 });
 $('#overlay').css({
  filter: 'none',
 });
});
// takhasosha
// let m_a_p = document.getElementById("m-a-p");
$('#m-a-p').addClass('bg-gray');
let m_online_p_container = $('.m-online-p-container');
let t_container = $('.t-container');
let t_container_2 = $('.t-container-2');
let t_container_3 = $('.t-container-3');
let t_container_4 = $('.t-container-4');
let t_container_5 = $('.t-container-5');
let t_container_6 = $('.t-container-6');
let t_container_7 = $('.t-container-7');
let next_mega_menu = $('.next-mega-menu');
let prev_mega_menu = $('.prev-mega-menu');
let m_container = $('.m-container');
let m_s = $('#m-s');
let takhasosha = $('#takhasosha');
let m_a_p = $('#m-a-p');
let takhasos = $('#takhasos-open-show');
let category_mega_menu = $('.category-mega-menu');
let r_p_searches = $('.repeat-searches');
let search_click = $('#search_click');
let left_mega_menu_all = $('.left-mega-menu-all');
prev_mega_menu.addClass('d-none');
$('#m-a-p').click(function (e) {
 // e.preventDefault();
 m_online_p_container.removeClass('d-none');
 $('#m-a-p').addClass('bg-gray');
 $('#takhasosha').removeClass('bg-gray');
 m_s.removeClass('bg-gray');
 m_container.addClass('d-none');
 t_container.addClass('d-none');
 t_container_2.addClass('d-none');
 t_container_3.addClass('d-none');
 t_container_4.addClass('d-none');
 t_container_5.addClass('d-none');
 t_container_6.addClass('d-none');
 t_container_7.addClass('d-none');
 prev_mega_menu.addClass('d-none');
 next_mega_menu.addClass('d-none');
});
$('#takhasosha').click(function (e) {
 // e.preventDefault();
 m_s.removeClass('bg-gray');
 m_a_p.removeClass('bg-gray');
 next_mega_menu.removeClass('d-none');
 prev_mega_menu.addClass('d-none');
 m_container.addClass('d-none');
 // if (t_container.hasClass("d-none")) {
 //     prev_mega_menu.addClass("d-none");
 // }
 $('#m-a-p').removeClass('bg-gray');
 m_online_p_container.addClass('d-none');
 $('#takhasosha').addClass('bg-gray');
 t_container.removeClass('d-none');
});
let count = 0;
next_mega_menu.click(function () {
 count += 1;
 if (count === 1) {
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
  t_container_2.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
 } else if (count === 2) {
  m_online_p_container.addClass('d-none');
  t_container.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container_3.removeClass('d-none');
 } else if (count === 3) {
  t_container.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_4.removeClass('d-none');
 } else if (count === 4) {
  t_container.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_5.removeClass('d-none');
 } else if (count === 5) {
  t_container.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_6.removeClass('d-none');
 } else if (count === 6) {
  t_container.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.removeClass('d-none');
  next_mega_menu.addClass('d-none');
  prev_mega_menu.removeClass('d-none');
 }
});
prev_mega_menu.click(function () {
 count -= 1;
 if (count === 5) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
  t_container_6.removeClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
 } else if (count === 4) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.removeClass('d-none');
  t_container_4.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
 } else if (count === 3) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_4.removeClass('d-none');
  t_container_3.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
 } else if (count === 2) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_3.removeClass('d-none');
  t_container_2.addClass('d-none');
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
 } else if (count === 1) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.removeClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_2.removeClass('d-none');
  t_container.addClass('d-none');
  m_online_p_container.addClass('d-none');
 } else if (count === 0) {
  next_mega_menu.removeClass('d-none');
  prev_mega_menu.addClass('d-none');
  t_container_6.addClass('d-none');
  t_container_7.addClass('d-none');
  t_container_5.addClass('d-none');
  t_container_4.addClass('d-none');
  t_container_3.addClass('d-none');
  t_container_2.addClass('d-none');
  t_container.removeClass('d-none');
  m_online_p_container.addClass('d-none');
 }
});
m_s.click(function () {
 m_s.addClass('bg-gray');
 takhasosha.removeClass('bg-gray');
 m_a_p.removeClass('bg-gray');
 m_online_p_container.addClass('d-none');
 t_container.addClass('d-none');
 t_container_2.addClass('d-none');
 t_container_3.addClass('d-none');
 t_container_4.addClass('d-none');
 t_container_5.addClass('d-none');
 t_container_6.addClass('d-none');
 t_container_7.addClass('d-none');
 m_container.removeClass('d-none');
});
let hideTimer;
takhasos.hover(
 function () {
  // وقتی موس روی takhasos قرار می‌گیرد
  clearTimeout(hideTimer); // تایمر مخفی کردن را پاک می‌کنیم
  $('.takhasos').removeClass('d-none').css('opacity', '1');
  $('#drop-search-content-main').addClass('d-none');
  $('#drop-search-content-header').addClass('d-none');
 },
 function () {
  // وقتی موس از روی takhasos خارج می‌شود
  hideTimer = setTimeout(function () {
   if (!$('.takhasos').is(':hover')) {
    $('.takhasos').addClass('d-none').css('opacity', '0');
   }
  }, 300); // تأخیر 300 میلی‌ثانیه برای مخفی شدن
 },
);
$('.takhasos').hover(
 function () {
  // وقتی موس روی منو است، کلاس d-none را نگه داریم
  clearTimeout(hideTimer); // تایمر مخفی کردن را پاک می‌کنیم
  $(this).removeClass('d-none').css('opacity', '1');
 },
 function () {
  // وقتی موس از روی منو خارج شد
  hideTimer = setTimeout(
   function () {
    $(this).addClass('d-none').css('opacity', '0');
   }.bind(this),
   300,
  ); // تأخیر 300 میلی‌ثانیه برای مخفی شدن
 },
);
let se_counter = 0;
search_click.click(function (e) {
 se_counter += 1;
 if (se_counter % 2 == 1) {
  r_p_searches.removeClass('d-none');
 } else {
  r_p_searches.addClass('d-none');
 }
});
if ($(window).innerWidth() > 992) {
 $('.top-header-container').removeClass('container-fluid');
 $('.top-header-container').addClass('container');
 $('.change-main-container-js').removeClass('container-fluid');
 $('.change-main-container-js').addClass('container');
 $('.caret-left-in-services').addClass('d-none');
 $('.remove-container-all-takhasos-use-js').addClass('container');
 $('.remove-container-all-takhasos-use-js').removeClass('container-fluid');
 $('.n-r-c').addClass('container');
 $('.n-r-c').removeClass('container-fluid');
 $('.md-r-c').addClass('container');
 $('.md-r-c').removeClass('container-fluid');
 $('.gb-r-c').addClass('container');
 $('.gb-r-c').removeClass('container-fluid');
 $('.us-r-c').addClass('container');
 $('.us-r-c').removeClass('container-fluid');
 $('.tld-r-c').addClass('container');
 $('.tld-r-c').removeClass('container-fluid');
}
// takhasosha
// p sliders
$('.p-slide-0').click(function () {
 $('.p-slide-0').hasClass('bg-primary-70');
 $('.p-slide-0').removeClass('bg-ddd').addClass('bg-primary-70');
 $('.p-slide-1').hasClass('bg-primary-70');
 $('.p-slide-1').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-2').hasClass('bg-primary-70');
 $('.p-slide-2').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-3').hasClass('bg-primary-70');
 $('.p-slide-3').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-4').hasClass('bg-primary-70');
 $('.p-slide-4').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.mp-div-0').removeClass('d-none');
 $('.mp-div-1').addClass('d-none');
 $('.mp-div-2').addClass('d-none');
 $('.mp-div-3').addClass('d-none');
 $('.mp-div-4').addClass('d-none');
});
$('.p-slide-1').click(function () {
 $('.p-slide-0').hasClass('bg-primary-70');
 $('.p-slide-0').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-1').hasClass('bg-ddd');
 $('.p-slide-1').addClass('bg-primary-70').removeClass('bg-ddd');
 $('.p-slide-2').hasClass('bg-primary-70');
 $('.p-slide-2').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-3').hasClass('bg-primary-70');
 $('.p-slide-3').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-4').hasClass('bg-primary-70');
 $('.p-slide-4').removeClass('bg-primary-70').addClass('bg-ddd');
 let card_online_nurse_1 = $('.mp-div-1 > .card-online-nurse');
 $('.mp-div-0').addClass('d-none');
 $('.mp-div-1').removeClass('d-none');
 $('.mp-div-2').addClass('d-none');
 $('.mp-div-3').addClass('d-none');
 $('.mp-div-4').addClass('d-none');
});
$('.p-slide-2').click(function () {
 $('.p-slide-0').hasClass('bg-primary-70');
 $('.p-slide-0').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-1').hasClass('bg-primary-70');
 $('.p-slide-1').addClass('bg-ddd').removeClass('bg-primary-70');
 $('.p-slide-2').hasClass('bg-ddd');
 $('.p-slide-2').removeClass('bg-ddd').addClass('bg-primary-70');
 $('.p-slide-3').hasClass('bg-primary-70');
 $('.p-slide-3').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-4').hasClass('bg-primary-70');
 $('.p-slide-4').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.mp-div-0').addClass('d-none');
 $('.mp-div-1').addClass('d-none');
 $('.mp-div-2').removeClass('d-none');
 $('.mp-div-3').addClass('d-none');
 $('.mp-div-4').addClass('d-none');
});
$('.p-slide-3').click(function () {
 $('.p-slide-0').hasClass('bg-primary-70');
 $('.p-slide-0').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-1').hasClass('bg-primary-70');
 $('.p-slide-1').addClass('bg-ddd').removeClass('bg-primary-70');
 $('.p-slide-3').hasClass('bg-ddd');
 $('.p-slide-3').removeClass('bg-ddd').addClass('bg-primary-70');
 $('.p-slide-2').hasClass('bg-primary-70');
 $('.p-slide-2').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-4').hasClass('bg-primary-70');
 $('.p-slide-4').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.mp-div-0').addClass('d-none');
 $('.mp-div-1').addClass('d-none');
 $('.mp-div-2').addClass('d-none');
 $('.mp-div-3').removeClass('d-none');
 $('.mp-div-4').addClass('d-none');
});
$('.p-slide-4').click(function () {
 $('.p-slide-0').hasClass('bg-primary-70');
 $('.p-slide-0').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-1').hasClass('bg-primary-70');
 $('.p-slide-1').addClass('bg-ddd').removeClass('bg-primary-70');
 $('.p-slide-4').hasClass('bg-ddd');
 $('.p-slide-4').removeClass('bg-ddd').addClass('bg-primary-70');
 $('.p-slide-2').hasClass('bg-primary-70');
 $('.p-slide-2').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.p-slide-3').hasClass('bg-primary-70');
 $('.p-slide-3').removeClass('bg-primary-70').addClass('bg-ddd');
 $('.mp-div-0').addClass('d-none');
 $('.mp-div-1').addClass('d-none');
 $('.mp-div-2').addClass('d-none');
 $('.mp-div-3').addClass('d-none');
 $('.mp-div-4').removeClass('d-none');
});
// p sliders
// navbar show
let counter_t_ts = 0;
$('.t-ts').click(function (e) {
 counter_t_ts += 1;
 // $(".li-t-ts").addClass("bg-f4faff")
 if (counter_t_ts % 2 == 1) {
  $('.tl-ts').removeClass('d-none');
  $('.li-t-ts').addClass('bg-f4faff');
 } else {
  $('.tl-ts').addClass('d-none');
 }
});
let counter_tl_ts = 0;
$('.tl-ts').click(function () {
 counter_tl_ts += 1;
 if (counter_tl_ts % 2 == 1) {
  $('.tog-show-t-all').removeClass('d-none');
 } else {
  $('.tog-show-t-all').addClass('d-none');
 }
});
$('.top-nav-tog-close-icon').click(function () {
 $('.nav-tog-show').css({
  width: '0',
  transition: '0.5s',
 });
 $('#overlay').css({
  filter: 'none',
 });
 $('body').css({
  overflow: 'scroll',
 });
});
let counter_nav_ts = 0;
$('#overlay').click(function () {
 $('.nav-tog-show').css({
  width: '0',
 });
 $('#overlay').css({
  filter: 'none',
 });
 $('body').css({
  overflow: 'scroll',
 });
 $('#LoginRegisterModal').modal('hide');
});
$(document).ready(function () {
 function adjustNav() {
  if ($(window).innerWidth() > 993) {
   $('.nav-tog-show').css({
    width: '0',
   });
   $('#overlay').css({
    filter: 'none',
   });
   $('body').css({
    overflow: 'scroll',
   });
  }
 }
 // فراخوانی تابع در هنگام بارگذاری صفحه
 adjustNav();
 // فراخوانی تابع در هنگام تغییر اندازه پنجره
 $(window).resize(function () {
  adjustNav();
 });
});
$('#nv-t-sh-tog').addClass('cursor-pointer');
// sidebar 100% code
$('#nv-t-sh-tog').click(function () {
 counter_nav_ts += 1;
 if (counter_nav_ts % 2 == 1) {
  $('.nav-tog-show').css({
   width: '300px',
   transition: '0.5s',
  });
  $('#overlay').css({
   filter: 'blur(8px)',
  });
  // $('body').css({
  //     'overflow': 'hidden'
  // })
 } else {
  $('.nav-tog-show').css({
   width: '0',
   transition: '0.5s',
  });
  $('#overlay').css({
   filter: 'none',
  });
  $('body').css({
   overflow: 'scroll',
  });
 }
});
// sidebar 100% code
// $(document).on("click", function (e) {
//     if (!$(e.target).closest("#nv-t-sh-tog").length) {
//         $(".nav-tog-show").addClass('d-none').fadeOut(1200); // زمان ترانزیشن (ms) را می‌توانید تغییر دهید
//     }
// });
// end navbar show
// cardslider js
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper('#card__content', {
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 4500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 navigation: {
  nextEl: '.swiper-button-next-',
  prevEl: '.swiper-button-prev-',
 },
 breakpoints: {
  600: {
   slidesPerView: 2,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3,
  },
  994: {
   slidesPerView: 4,
  },
 },
});
let swiperCards_dr_similare = new Swiper('#card-content-dr-similare', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-dr-similare',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 8.8,
 speed: 20000,
 navigation: {
  nextEl: '.swiper-button-next-dr-similare',
  prevEl: '.swiper-button-prev-dr-similare',
 },
 breakpoints: {
  320: {
   slidesPerView: 1,
  },
  350: {
   slidesPerView: 6,
  },
  400: {
   slidesPerView: 6,
  },
  473: {
   slidesPerView: 6,
  },
  500: {
   slidesPerView: 6,
  },
  559: {
   slidesPerView: 6,
  },
  560: {
   slidesPerView: 6,
  },
  749: {
   slidesPerView: 6,
  },
  750: {
   slidesPerView: 6,
  },
  751: {
   slidesPerView: 6,
  },
  993: {
   slidesPerView: 6,
  },
  994: {
   slidesPerView: 6,
  },
 },
});
let swiperCards_1 = new Swiper('#card-content-1', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-1',
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
  nextEl: '.swiper-button-next-1',
  prevEl: '.swiper-button-prev-1',
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
   slidesPerView: 2,
  },
  750: {
   slidesPerView: 2.9,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3,
  },
  994: {
   slidesPerView: 4,
  },
 },
});
let swiperCards_2 = new Swiper('#card-content-2', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-2',
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
  nextEl: '.swiper-button-next-2',
  prevEl: '.swiper-button-prev-2',
 },
 breakpoints: {
  320: {
   slidesPerView: 1.1,
  },
  350: {
   slidesPerView: 1.3,
  },
  400: {
   slidesPerView: 1.5,
  },
  473: {
   slidesPerView: 1.7,
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
   slidesPerView: 2,
  },
  750: {
   slidesPerView: 3,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3,
  },
  994: {
   slidesPerView: 4,
  },
 },
});
let swiperCards_3 = new Swiper('#card-content-3', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-3',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 10.1,
 speed: 10000,
 navigation: {
  nextEl: '.swiper-button-next-3',
  prevEl: '.swiper-button-prev-3',
 },
 breakpoints: {
  320: {
   slidesPerView: 6,
  },
  400: {
   slidesPerView: 6,
  },
  599: {
   slidesPerView: 6,
  },
  600: {
   slidesPerView: 7,
  },
  751: {
   slidesPerView: 7,
  },
  900: {
   slidesPerView: 7,
  },
  901: {
   slidesPerView: 7,
  },
  993: {
   slidesPerView: 7,
  },
  994: {
   slidesPerView: 7,
  },
 },
});
let swiperCards_top = new Swiper('#card-content-4', {
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 pagination: {
  el: '.swiper-pagination-4',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 4500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 navigation: {
  nextEl: '.swiper-button-next-4',
  prevEl: '.swiper-button-prev-4',
 },
 breakpoints: {
  600: {
   slidesPerView: 2,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3,
  },
  994: {
   slidesPerView: 4,
  },
 },
});
let swiperCards_bottom = new Swiper('#card-content-5', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-5',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 6.6,
 speed: 10000,
 navigation: {
  nextEl: '.swiper-button-next-5',
  prevEl: '.swiper-button-prev-5',
 },
 breakpoints: {
  200: {
   slidesPerView: 1,
  },
  320: {
   slidesPerView: 1.8,
  },
  420: {
   slidesPerView: 2.5,
  },
  500: {
   slidesPerView: 3.2,
  },
  600: {
   slidesPerView: 3.6,
  },
  751: {
   slidesPerView: 4.3,
  },
  993: {
   slidesPerView: 4.7,
  },
  994: {
   slidesPerView: 4.8,
  },
  1199: {
   slidesPerView: 5,
  },
  1200: {
   slidesPerView: 6,
  },
 },
});
let swiperCards_majaleh = new Swiper('#card-content-6', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-6',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 10.1,
 speed: 10000,
 navigation: {
  nextEl: '.swiper-button-next-6',
  prevEl: '.swiper-button-prev-6',
 },
 breakpoints: {
  300: {
   slidesPerView: 1,
  },
  320: {
   slidesPerView: 1,
  },
  350: {
   slidesPerView: 1.5,
  },
  400: {
   slidesPerView: 1.7,
  },
  500: {
   slidesPerView: 2,
  },
  600: {
   slidesPerView: 2,
  },
  751: {
   slidesPerView: 3,
  },
  993: {
   slidesPerView: 3,
  },
  994: {
   slidesPerView: 4,
  },
 },
});
let swiperCards_7 = new Swiper('#card-content-7', {
 freeMode: true,
 loop: true,
 spaceBetween: 0,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-7',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 8.8,
 speed: 10000,
 navigation: {
  nextEl: '.swiper-button-next-7',
  prevEl: '.swiper-button-prev-7',
 },
 breakpoints: {
  320: {
   slidesPerView: 3,
  },
  400: {
   slidesPerView: 3,
  },
  599: {
   slidesPerView: 4,
  },
  600: {
   slidesPerView: 5,
  },
  630: {
   slidesPerView: 5,
  },
  751: {
   slidesPerView: 6,
  },
  752: {
   slidesPerView: 7,
  },
  900: {
   slidesPerView: 8,
  },
  901: {
   slidesPerView: 8,
  },
  993: {
   slidesPerView: 8,
  },
  994: {
   slidesPerView: 8,
  },
 },
});
let swiperCards_9 = new Swiper('#card-content-9', {
 freeMode: true,
 loop: true,
 spaceBetween: 10,
 grabCursor: true,
 slidesPerView: 'auto',
 pagination: {
  el: '.swiper-pagination-9',
  clickable: true,
  dynamicBullets: true,
 },
 autoplay: {
  delay: 1,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
 },
 slidesPerView: 8.8,
 speed: 10000,
 navigation: {
  nextEl: '.swiper-button-next-9',
  prevEl: '.swiper-button-prev-9',
 },
 breakpoints: {
  320: {
   slidesPerView: 2,
  },
  400: {
   slidesPerView: 3,
  },
  600: {
   slidesPerView: 4,
  },
  751: {
   slidesPerView: 5,
  },
  993: {
   slidesPerView: 6,
  },
  994: {
   slidesPerView: 6,
  },
  1100: {
   slidesPerView: 7,
  },
  1200: {
   slidesPerView: 7,
  },
  1201: {
   slidesPerView: 8,
  },
 },
});
// cardslider js
// drop search js
let drop_count = 0;
$('#drop-search-input-main').click(function (e) {
 drop_count += 1;
 if (drop_count % 2 == 0) {
  $('#drop-search-content-main').addClass('d-none');
 } else {
  $('#drop-search-content-main').removeClass('d-none');
 }
});
$(document).on('click', function (e) {
 if (!$(e.target).closest('#drop-search-input-main').length) {
  $('#drop-search-content-main').addClass('d-none');
 }
});
$(document).on('click', function (e) {
 if (!$(e.target).closest('#drop-search-input-main').length) {
  $('#drop-search-content-main').addClass('d-none');
 }
});
// drop search js
// drop search js header
let drop_count_header = 0;
$('#drop-search-input-header').click(function (e) {
 drop_count_header += 1;
 if (drop_count_header % 2 == 0) {
  $('#drop-search-content-header').addClass('d-none');
 } else {
  $('#drop-search-content-header').removeClass('d-none');
 }
});
$(document).on('click', function (e) {
 if (!$(e.target).closest('#drop-search-input-header').length) {
  $('#drop-search-content-header').addClass('d-none');
 }
});
$(document).on('click', function (e) {
 if (!$(e.target).closest('#drop-search-input-header').length) {
  $('#drop-search-content-header').addClass('d-none');
 }
});
// drop search js header
// add backdrop to modal
$('.close-modal').on('click', function () {
 $('#LoginRegisterModal').removeClass('show');
 $('#overlay').css({
  filter: 'none',
  opacity: '1',
 });
});
$('#LoginRegisterModal').on('hidden.bs.modal', function () {
 $('#overlay').css({
  filter: 'none',
  opacity: '1',
 });
});
$('#guestBtnMobile').on('click', function () {
 $('.nav-tog-show').css({
  width: '0',
 });
 // $("#LoginRegisterModal").modal('show');
});
$('registredBtn').on('hover', function () {
 $('registredBtn').css({
  color: '#fff',
 });
});
// add backdrop to modal
// footer
let counter_footer = 0;
$('#showMore').on('click', function () {
 counter_footer += 1;
 if (counter_footer % 2 == 1) {
  $('#showMoreContent').removeClass('d-none');
  $('#showMore').html('بستن');
 } else {
  $('#showMoreContent').addClass('d-none');
  $('#showMore').html('مشاهده بیشتر');
 }
});
// footer
$(document).ready(function () {
 function checkWindowSize() {
  if ($(window).innerWidth() < 994) {
   $('.top-nav-header').addClass('d-none');
   $('.btn-reg-log').css({
    padding: '8px 13px',
   });
   $('.my-style-prof-icon').removeClass('px-2');
   $('.top-regestration-header').addClass('mx-3');
  } else {
   $('.top-nav-header').removeClass('d-none');
   $('.my-style-prof-icon').addClass('px-2');
   $('.top-regestration-header').removeClass('mx-3');
  }
 }
 checkWindowSize();
 $(window).resize(function () {
  checkWindowSize();
 });
});
$(document).ready(function () {
 function checkWindowSize() {
  if ($(window).innerWidth() < 509) {
   $('.with-us-under-508').removeClass('d-none');
  } else {
   $('.with-us-under-508').addClass('d-none');
  }
 }
 checkWindowSize();
 $(window).resize(function () {
  checkWindowSize();
 });
});
// modal validation js
function validateInput(
 inputSelector,
 validLength,
 submitBtnSelector,
 feedbackSelector,
 feedbackMessages,
) {
 // Set the maxlength attribute for the input
 $(inputSelector).attr('maxlength', validLength);
 $(inputSelector).on('input', function () {
  let inputValue = $(this).val();
  const $submitBtn = $(submitBtnSelector);
  const $feedback = $(feedbackSelector);
  // Reset feedback and button classes
  $feedback.text('');
  $submitBtn.removeClass('btn-success btn-secondary disabled btn-primary');
  // Regex for phone number validation (optional)
  const phoneRegex =
   /^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/;
  // Check if input value length matches validLength
  if (inputValue.length === validLength) {
   // If it's the OTP input, no regex is needed, just check length
   if (inputSelector === '.user-otp-code') {
    $submitBtn.addClass('btn-success');
   }
   // If it's the phone number input, apply regex validation
   else if (phoneRegex.test(inputValue)) {
    $submitBtn.addClass('btn-success');
   }
  }
  // If the input is not valid or empty, show feedback and apply classes to the button
  if (inputValue.length < 1) {
   $feedback.text(feedbackMessages.empty);
   $submitBtn.addClass('btn-secondary disabled');
  } else if (
   inputValue.length < validLength ||
   (inputSelector === '.user-phone-number' && !phoneRegex.test(inputValue))
  ) {
   $feedback.text(feedbackMessages.invalid);
   $submitBtn.addClass('btn-secondary disabled');
  }
 });
 // Prevent form submission on Enter key press if the submit button is disabled
 $(inputSelector).on('keypress', function (e) {
  if (e.which === 13 && $(submitBtnSelector).hasClass('disabled')) {
   e.preventDefault();
  }
 });
}
validateInput(
 '.user-phone-number',
 11,
 '#submitFormBtn',
 '.my-invalid-feedback',
 {
  empty: 'شماره موبایل الزامی است',
  invalid: 'شماره موبایل وارد شده صحیح نمیباشد',
 },
);
validateInput(
 '.user-otp-code',
 4,
 '#submitFormBtnConfirm',
 '.my-invalid-feedback-confirm',
 {
  empty: 'کد  ارسالی را وارد کنید',
  invalid: 'کد  وارد شده صحیح نمیباشد',
 },
);
// jscode for loading modal btn
// jscode for loading modal btn
function toggleCaretVisibility() {
 const caretElements = document.querySelectorAll('.caret-left-in-services');
 caretElements.forEach((caretElement) => {
  if (window.innerWidth < 994) {
   caretElement.style.display = 'block'; // یا 'flex' یا هر مقدار دیگری که مناسب باشد
  } else {
   caretElement.style.display = 'none';
  }
 });
}
// برای اجرای تابع در بارگذاری صفحه و تغییر اندازه پنجره
window.addEventListener('load', toggleCaretVisibility);
window.addEventListener('resize', toggleCaretVisibility);
// modal validation js
// medical center js
$(document).ready(function () {
 $('#darmangah').on('click', function () {
  $('.top-header-curren-content-txt').text('برترین درمانگاه ها');
  $('#medical-center-content-div').removeClass('d-none');
  $('#labratory-content-div').addClass('d-none');
  $('#hospital-content-div').addClass('d-none');
  $('#clinic-content-div').addClass('d-none');
  $('#imaging-content-div').addClass('d-none');
  $('#azmayeshgah, #bimarestan, #clinic, #imaging').removeClass('active');
  $(this).addClass('active');
 });
 $('#azmayeshgah').on('click', function () {
  $('.top-header-curren-content-txt').text('برترین آزمایشگاه ها');
  $('#medical-center-content-div').addClass('d-none');
  $('#labratory-content-div').removeClass('d-none');
  $('#hospital-content-div').addClass('d-none');
  $('#clinic-content-div').addClass('d-none');
  $('#imaging-content-div').addClass('d-none');
  $('#darmangah, #bimarestan, #clinic, #imaging').removeClass('active');
  $(this).addClass('active');
 });
 $('#bimarestan').on('click', function () {
  $('.top-header-curren-content-txt').text('برترین بیمارستان ها');
  $('#medical-center-content-div').addClass('d-none');
  $('#labratory-content-div').addClass('d-none');
  $('#hospital-content-div').removeClass('d-none');
  $('#clinic-content-div').addClass('d-none');
  $('#imaging-content-div').addClass('d-none');
  $('#darmangah, #azmayeshgah, #clinic, #imaging').removeClass('active');
  $(this).addClass('active');
 });
 $('#clinic').on('click', function () {
  $('.top-header-curren-content-txt').text('برترین کلینیک ها');
  $('#medical-center-content-div').addClass('d-none');
  $('#labratory-content-div').addClass('d-none');
  $('#hospital-content-div').addClass('d-none');
  $('#clinic-content-div').removeClass('d-none');
  $('#imaging-content-div').addClass('d-none');
  $('#darmangah, #azmayeshgah, #bimarestan, #imaging').removeClass('active');
  $(this).addClass('active');
 });
 $('#imaging').on('click', function () {
  $('.top-header-curren-content-txt').text('برترین مراکز تصویربرداری');
  $('#medical-center-content-div').addClass('d-none');
  $('#labratory-content-div').addClass('d-none');
  $('#hospital-content-div').addClass('d-none');
  $('#clinic-content-div').addClass('d-none');
  $('#imaging-content-div').removeClass('d-none');
  $('#darmangah, #azmayeshgah, #bimarestan, #clinic').removeClass('active');
  $(this).addClass('active');
 });
});
// medical center js
// citymodal overlay loading
// Show the modal
// Show the modal
// $('.exampleModal-top-search-main').modal('show');
// Check if the modal is currently shown
// Show the modal
// $('.exampleModal-top-search-main').modal('show');
// Set up an event listener for when a button is clicked
$('.open-loading-modal').on('click', function () {
 // Check if the modal is currently shown
 // Show the loading overlay and hide town cards immediately
 $('.loading-city-overlay').removeClass('d-none'); // Show loading overlay
 $('#town-cards').addClass('d-none'); // Hide town cards
 $('#city-cards').addClass('d-none'); // Hide town cards
 // Set a timeout to hide the loading overlay and show town cards after 5 seconds
 setTimeout(function () {
  $('.loading-city-overlay').addClass('d-none'); // Hide loading overlay
  $('#town-cards').removeClass('d-none'); // Show town cards
 }, 2500);
 $('#city-cards').removeClass('d-none');
});
$('.town-card').on('click', function () {
 // Check if the modal is currently shown
 // Show the loading overlay and hide town cards immediately
 $('#city-cards').addClass('d-none');
 $('.loading-city-overlay').removeClass('d-none'); // Show loading overlay
 // Hide town cards
 // Hide town cards
 // Set a timeout to hide the loading overlay and show town cards after 5 seconds
 setTimeout(function () {
  $('.loading-city-overlay').addClass('d-none'); // Hide loading overlay
  // Show town cards
  $('#city-cards').removeClass('d-none'); // Show town cards
  // Show town cards
 }, 2500);
});
$('.back-to-town').on('click', function () {
 // Check if the modal is currently shown
 // Show the loading overlay and hide town cards immediately
 $('#city-cards').addClass('d-none');
 $('.loading-city-overlay').removeClass('d-none'); // Show loading overlay
 // Hide town cards
 // Hide town cards
 // Set a timeout to hide the loading overlay and show town cards after 5 seconds
 setTimeout(function () {
  $('.loading-city-overlay').addClass('d-none'); // Hide loading overlay
  // Show town cards
  $('#town-cards').removeClass('d-none'); // Show town cards
  $('#town-list-header').text(' لیست استان ها');
  // Show town cards
 }, 2500);
});
$('#drop-search-input-main').on('click', function () {
 $('.most-searches-container').addClass('d-none');
 $('.drop-content-loading-overlay').removeClass('d-none'); // Show loading overlay
 // Hide town cards
 // Hide town cards
 // Set a timeout to hide the loading overlay and show town cards after 5 seconds
 setTimeout(function () {
  $('.drop-content-loading-overlay').addClass('d-none'); // Hide loading overlay
  $('.most-searches-container').removeClass('d-none');
  // Show town cards
 }, 2500);
});
$('#drop-search-input-header').on('click', function () {
 $('.most-searches-container').addClass('d-none');
 $('.drop-content-loading-overlay').removeClass('d-none'); // Show loading overlay
 // Hide town cards
 // Hide town cards
 // Set a timeout to hide the loading overlay and show town cards after 5 seconds
 setTimeout(function () {
  $('.drop-content-loading-overlay').addClass('d-none'); // Hide loading overlay
  $('.most-searches-container').removeClass('d-none');
  // Show town cards
 }, 2500);
});
// citymodal overlay loading
