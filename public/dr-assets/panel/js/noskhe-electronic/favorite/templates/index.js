$(document).ready(function () {
 $('#drop-btn-toggler').on('click', function (e) {
  e.stopPropagation(); // Prevent event from bubbling up to the document
  $('.my-dropdown').slideToggle(100).toggleClass('d-none');
 });

 $(document).on('click', function () {
  if (!$('.my-dropdown').hasClass('d-none')) {
   $('.my-dropdown').slideUp(100).addClass('d-none');
  }
 });
});
