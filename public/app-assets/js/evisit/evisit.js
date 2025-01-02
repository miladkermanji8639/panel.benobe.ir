let mo_count = 0;
$('.mo-filter-toggler').click(function (e) {
 e.preventDefault();
 mo_count += 1;
 if (mo_count % 2 == 1) {
  $('.moratabsazi-filter-content').removeClass('d-none');
  $('.chev-mf-up').removeClass('d-none');
  $('.chev-mf-down').addClass('d-none');
 } else {
  $('.moratabsazi-filter-content').addClass('d-none');
  $('.chev-mf-up').addClass('d-none');
  $('.chev-mf-down').removeClass('d-none');
 }
});
let gt_count = 0;
$('.gt-filter-toggler').click(function (e) {
 e.preventDefault();
 gt_count += 1;
 if (gt_count % 2 == 1) {
  $('.goroh-takhasos-content').removeClass('d-none');
  $('.chev-gt-up').removeClass('d-none');
  $('.chev-gt-down').addClass('d-none');
 } else {
  $('.goroh-takhasos-content').addClass('d-none');
  $('.chev-gt-up').addClass('d-none');
  $('.chev-gt-down').removeClass('d-none');
 }
});
let t_count = 0;
$('.t-filter-toggler').click(function (e) {
 e.preventDefault();
 t_count += 1;
 if (t_count % 2 == 1) {
  $('.takhasosha-content').removeClass('d-none');
  $('.chev-t-up').removeClass('d-none');
  $('.chev-t-down').addClass('d-none');
 } else {
  $('.takhasosha-content').addClass('d-none');
  $('.chev-t-up').addClass('d-none');
  $('.chev-t-down').removeClass('d-none');
 }
});
let st_count = 0;
$('.st-filter-toggler').click(function (e) {
 e.preventDefault();
 st_count += 1;
 if (st_count % 2 == 1) {
  $('.sathetahsilat-filter-content').removeClass('d-none');
  $('.chev-st-up').removeClass('d-none');
  $('.chev-st-down').addClass('d-none');
 } else {
  $('.sathetahsilat-filter-content').addClass('d-none');
  $('.chev-st-up').addClass('d-none');
  $('.chev-st-down').removeClass('d-none');
 }
});
let khedmat_count = 0;
$('.khedmat-filter-toggler').click(function (e) {
 e.preventDefault();
 khedmat_count += 1;
 if (khedmat_count % 2 == 1) {
  $('.khedmat-content').removeClass('d-none');
  $('.chev-khedmat-up').removeClass('d-none');
  $('.chev-khedmat-down').addClass('d-none');
 } else {
  $('.khedmat-content').addClass('d-none');
  $('.chev-khedmat-up').addClass('d-none');
  $('.chev-khedmat-down').removeClass('d-none');
 }
});
let bimary_count = 0;
$('.bimary-filter-toggler').click(function (e) {
 e.preventDefault();
 bimary_count += 1;
 if (bimary_count % 2 == 1) {
  $('.bimary-content').removeClass('d-none');
  $('.chev-bimary-up').removeClass('d-none');
  $('.chev-bimary-down').addClass('d-none');
 } else {
  $('.bimary-content').addClass('d-none');
  $('.chev-bimary-up').addClass('d-none');
  $('.chev-bimary-down').removeClass('d-none');
 }
});
let rozkary_count = 0;
$('.rozkary-filter-toggler').click(function (e) {
 e.preventDefault();
 rozkary_count += 1;
 if (rozkary_count % 2 == 1) {
  $('.rozkary-content').removeClass('d-none');
  $('.chev-rozkary-up').removeClass('d-none');
  $('.chev-rozkary-down').addClass('d-none');
 } else {
  $('.rozkary-content').addClass('d-none');
  $('.chev-rozkary-up').addClass('d-none');
  $('.chev-rozkary-down').removeClass('d-none');
 }
});
let shift_count = 0;
$('.shift-filter-toggler').click(function (e) {
 e.preventDefault();
 shift_count += 1;
 if (shift_count % 2 == 1) {
  $('.shift-content').removeClass('d-none');
  $('.chev-shift-up').removeClass('d-none');
  $('.chev-shift-down').addClass('d-none');
 } else {
  $('.shift-content').addClass('d-none');
  $('.chev-shift-up').addClass('d-none');
  $('.chev-shift-down').removeClass('d-none');
 }
});
let zaman_count = 0;
$('.zaman-filter-toggler').click(function (e) {
 e.preventDefault();
 zaman_count += 1;
 if (zaman_count % 2 == 1) {
  $('.zaman-content').removeClass('d-none');
  $('.chev-zaman-up').removeClass('d-none');
  $('.chev-zaman-down').addClass('d-none');
 } else {
  $('.zaman-content').addClass('d-none');
  $('.chev-zaman-up').addClass('d-none');
  $('.chev-zaman-down').removeClass('d-none');
 }
});
let jensiat_count = 0;
$('.jensiat-filter-toggler').click(function (e) {
 e.preventDefault();
 jensiat_count += 1;
 if (jensiat_count % 2 == 1) {
  $('.jensiat-content').removeClass('d-none');
  $('.chev-jensiat-up').removeClass('d-none');
  $('.chev-jensiat-down').addClass('d-none');
 } else {
  $('.jensiat-content').addClass('d-none');
  $('.chev-jensiat-up').addClass('d-none');
  $('.chev-jensiat-down').removeClass('d-none');
 }
});
$('main').css({
 position: 'relative',
 top: '153px',
 'padding-bottom': '102px',
});

$(document).ready(function () {
 function applyStyles() {
  if ($(window).width() < 994) {
   // برای هدیر بالا
   $('header .top-header').css({
    'max-width': '100vw',
    height: '161px',
    display: 'flex',
    'padding-bottom': '15px',
    'align-items': 'end',
    'justify-content': 'center',
   });

   $('.top-main-search .drop-search').css('width', '95vw');
   $('.top-main-search form').css({
    width: '100vw',
    'margin-right': '22px',
   });
  } else {
   // اگر نیاز به بازگشت به حالت قبلی باشد، می‌توانیم اینجا استایل‌های قبلی را بازنشانی کنیم
   $('header .top-header').css({
    'max-width': '',
    height: '',
    display: '',
    'padding-bottom': '',
    'align-items': '',
    'justify-content': '',
   });

   $('.top-main-search .drop-search').css('width', '');
   $('.top-main-search form').css('width', '');
  }
 }

 // در هنگام لود صفحه
 applyStyles();

 // در هنگام تغییر اندازه پنجره
 $(window).resize(function () {
  applyStyles();
 });
});
