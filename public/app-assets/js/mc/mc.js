$('.card-left-js').css({
 cursor: 'pointer',
});
$('.card-left-js-2').css({
 cursor: 'pointer',
});
let cl = 0;
$('.card-left-js').click(function (e) {
 cl += 1;
 if (cl % 2 == 1) {
  $('.radio').css({
   display: 'none',
  });
  $('.label').css({
   padding: '10px',
  });
  $('.chevron').css({
   rotate: '-90deg',
  });
  $('.change-txt').removeClass('d-none');
  $('.lccw').removeClass('d-none');
  $('.left-content-clininic-wrapper-content-2').addClass('d-none');
 } else {
  $('.radio').css({
   display: 'flex',
  });
  $('.label').css({
   padding: '0px',
  });
  $('.chevron').css({
   rotate: '0deg',
  });
  $('.change-txt').addClass('d-none');
  $('.lccw').addClass('d-none');
  $('.left-content-clininic-wrapper-content-2').addClass('d-none');
 }
});

let cl2 = 0;
$('.card-left-js-2').click(function (e) {
 cl2 += 1;
 if (cl2 % 2 == 1) {
  $('.radio-2').css({
   display: 'none',
  });
  $('.label-2').css({
   padding: '10px',
  });
  $('.chevron').css({
   rotate: '-90deg',
  });
  $('.change-txt-2').removeClass('d-none');
  $('.left-content-clininic-wrapper-content-2').removeClass('d-none');
  $('.lccw').addClass('d-none');
 } else {
  $('.radio-2').css({
   display: 'flex',
  });
  $('.label-2').css({
   padding: '0px',
  });
  $('.chevron').css({
   rotate: '0deg',
  });
  $('.change-txt-2').addClass('d-none');
  $('.left-content-clininic-wrapper-content-2').addClass('d-none');
  $('.lccw').addClass('d-none');
 }
});

$('.moarefi').click(function (e) {
 $('.moarefi').addClass('border-bottom-primary');
 $('.etelate-tamas').removeClass('border-bottom-primary');
 $('.nazarat').removeClass('border-bottom-primary');
 if (innerWidth < 992) {
  window.location.href = '#moarefi-link';
 }
});

$('.etelate-tamas').click(function (e) {
 $('.moarefi').removeClass('border-bottom-primary');
 $('.nazarat').removeClass('border-bottom-primary');

 $('.etelate-tamas').addClass('border-bottom-primary');
 window.location.href = '#etelate-tamas-morefi-link';
});
$('.etelate-tamas').css({
 cursor: 'pointer',
});
$('.moarefi').css({
 cursor: 'pointer',
});

$('main').css({
 position: 'relative',
 top: '153px',
 'padding-bottom': '140px',
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
