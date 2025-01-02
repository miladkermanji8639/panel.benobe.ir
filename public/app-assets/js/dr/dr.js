let count_kb = 0;
$('.kam-bish').text('بیشتر');
$('.morefi-wrapper').css({
 height: '55vh',
 overflow: 'scroll',
});
// if (window.innerWidth < 992) {
//     $(".morefi-wrapper").css({
//         "height": "95vh",
//         "overflow": "hidden"
//     })
// }
$('.collaps-bottom-remove').removeClass('collaps-bottom');
$('.btn-and-tags-moarefi-content').css({
 display: 'flex',
 'justify-content': 'center',
 'flex-direction': 'column',
 'background-color': '#fff',
});
$('.main').css({
 // "min-height": "180vh"
});
$('.btnContent').click(function (e) {
 count_kb += 1;
 $('.kam-bish').text('بیشتر');
 if (count_kb % 2 == 1) {
  $('.morefi-wrapper').css({
   height: '55vh',
   // "overflow": "hidden"
  });

  $('.collaps-bottom-remove').removeClass('collaps-bottom');
  $('.btn-and-tags-moarefi-content').css({
   display: 'flex',
   'justify-content': 'center',
   'flex-direction': 'column',
   'background-color': '#fff',
  });
  $('.main').css({
   // "min-height": "180vh"
  });
 } else {
  $('.kam-bish').text('کمتر');
  $('.morefi-wrapper').css({
   height: '235vh',
  });
  // if (innerWidth < 992) {
  //     $(".morefi-wrapper").css({
  //         "min-height": "330vh",

  //     })
  // }
  $('.collaps-bottom-remove').addClass('collaps-bottom');

  $('.main').css({
   // "min-height": "346vh"
  });
 }
});
$('.question-hazineh-click').css({
 height: '65px',
});
$('.question-nazar-click').css({
 height: '65px',
});
$('.question-nazdik-click').css({
 height: '65px',
});
$('.question-tahsilat-click').css({
 height: '65px',
});
$('.plus-minues').text('+');
let count_q_hazineh = 0;
$('.question-hazineh-click').click(function (e) {
 count_q_hazineh += 1;
 if (count_q_hazineh % 2 == 1) {
  $('.plus-minues').text('-');
  $('.question-hazineh-click').css({
   height: '130px',
  });
  $('.Faq-content-hazineh').removeClass('d-none');
 } else {
  $('.plus-minues').text('+');
  $('.question-hazineh-click').css({
   height: '65px',
  });
  $('.Faq-content-hazineh').addClass('d-none');
 }
});
let count_q_nazar = 0;
$('.question-nazar-click').click(function (e) {
 count_q_nazar += 1;
 if (count_q_nazar % 2 == 1) {
  $('.plus-minues-nazar').text('-');
  $('.question-nazar-click').css({
   height: '175px',
  });
  $('.Faq-content-nazar').removeClass('d-none');
 } else {
  $('.plus-minues-nazar').text('+');
  $('.question-nazar-click').css({
   height: '65px',
  });
  $('.Faq-content-nazar').addClass('d-none');
 }
});

let count_q_nazdik = 0;
$('.question-nazdik-click').click(function (e) {
 count_q_nazdik += 1;
 if (count_q_nazdik % 2 == 1) {
  $('.plus-minues-nazdik').text('-');
  $('.question-nazdik-click').css({
   height: '180px',
  });
  $('.Faq-content-nazdik').removeClass('d-none');
 } else {
  $('.plus-minues-nazdik').text('+');
  $('.question-nazdik-click').css({
   height: '65px',
  });
  $('.Faq-content-nazdik').addClass('d-none');
 }
});

let count_q_tahsilat = 0;
$('.question-tahsilat-click').click(function (e) {
 count_q_tahsilat += 1;
 if (count_q_tahsilat % 2 == 1) {
  $('.plus-minues-tahsilat').text('-');
  $('.question-tahsilat-click').css({
   height: '130px',
  });
  $('.Faq-content-tahsilat').removeClass('d-none');
 } else {
  $('.plus-minues-tahsilat').text('+');
  $('.question-tahsilat-click').css({
   height: '65px',
  });
  $('.Faq-content-tahsilat').addClass('d-none');
 }
});

let count_t_city = 0;
$('.t-city').click(function (e) {
 count_t_city += 1;
 if (count_t_city % 2 == 1) {
  $('.carret-top-down-city').addClass('collaps-bottom');
  $('.city-takhasos-content-all').removeClass('d-none');
  $('.btnContent-city').text('بستن');
 } else {
  $('.carret-top-down-city').removeClass('collaps-bottom');
  $('.city-takhasos-content-all').addClass('d-none');
  $('.btnContent-city').text('مشاهده');
 }
});

let count_t_ostan = 0;
$('.t-ostan').click(function (e) {
 count_t_ostan += 1;
 if (count_t_ostan % 2 == 1) {
  $('.carret-top-down-ostan').addClass('collaps-bottom');
  $('.ostan-takhasos-content-all').removeClass('d-none');
  $('.btnContent-ostan').text('بستن');
 } else {
  $('.carret-top-down-ostan').removeClass('collaps-bottom');
  $('.ostan-takhasos-content-all').addClass('d-none');
  $('.btnContent-ostan').text('مشاهده');
 }
});
$('.moarefi').css({
 cursor: 'pointer',
});
$('.etelate-tamas').css({
 cursor: 'pointer',
});
$('.nazarat').css({
 cursor: 'pointer',
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
$('.nazarat').click(function (e) {
 $('.moarefi').removeClass('border-bottom-primary');
 $('.nazarat').addClass('border-bottom-primary');

 $('.etelate-tamas').removeClass('border-bottom-primary');
 window.location.href = '#nazarat-link';
});
$('main').css({
 position: 'relative',
 top: '153px',
 'padding-bottom': '133px',
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
