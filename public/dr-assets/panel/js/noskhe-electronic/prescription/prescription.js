$(document).ready(function () {
 $('#top-modal-div span').on('click', function (event) {
  event.stopPropagation();
  $(this).toggleClass('border border-primary');
 });
 /*$(document).on("click", function (event) {
  if (
   !$(event.target).closest("#top-modal-div span").length
  ) {
   $("#top-modal-div span").removeClass("border border-primary");
  }
 });*/

 $('#top-modal-div span').on('click', function () {
  $('#top-modal-div span').removeClass('border border-primary');
  $(this).addClass('border border-primary');
 });
});
