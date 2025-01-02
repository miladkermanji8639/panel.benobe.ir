$('.card-header').on('click', function () {
 $('#moshavere_setting_body').toggleClass('d-none');

 // بررسی وضعیت مخفی یا نمایش بودن
 if ($('#moshavere_setting_body').hasClass('d-none')) {
  $('.txt-toggle-header').text('بیشتر');
  $('.drdr-icon').css({
   transform: 'rotate(0deg)',
   transition: 'transform 0.3s',
  }); // بازگشت به حالت اولیه
 } else {
  $('.txt-toggle-header').text('کمتر');
  $('.drdr-icon').css({
   transform: 'rotate(180deg)',
   transition: 'transform 0.3s',
  }); // چرخش آیکون
 }
});
