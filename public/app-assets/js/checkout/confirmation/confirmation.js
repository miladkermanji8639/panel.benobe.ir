let count_top_copon = 0;
$('.s-h-c').click(function (e) {
 count_top_copon += 1;
 if (count_top_copon % 2 == 1) {
  // $(".top-copon").addClass("h-14vh");
  $('.rotate').css({
   transform: 'rotate(270deg)',
  });
  $('.copon-show-hide').removeClass('d-none');
 } else {
  // $(".top-copon").removeClass("h-14vh").addClass();
  $('.rotate').css({
   transform: 'rotate(90deg)',
  });
  $('.copon-show-hide').addClass('d-none');
 }
});
