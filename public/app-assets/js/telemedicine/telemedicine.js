$('main').css({
 position: 'relative',
 top: '110px',
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
