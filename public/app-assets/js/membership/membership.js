$(document).ready(function () {
 const toggleVisibility = (type) => {
  $('.markaz-cards-type').addClass('d-none');
  $('.choose-nurse-or-clinic-cards').removeClass('d-none');
  $('.clinic-register-content, .nurse-register-content').addClass('d-none');

  if (type === 'clinic') {
   $('.clinic-register-content').removeClass('d-none');
   $('.clinic-card-chooser').addClass('my-select');
   $('.nurse-card-chooser').removeClass('my-select');
  } else if (type === 'nurse') {
   $('.nurse-register-content').removeClass('d-none');
   $('.nurse-card-chooser').addClass('my-select');
   $('.clinic-card-chooser').removeClass('my-select');
  }
 };

 $('#btn-marakez').click(() => toggleVisibility('clinic'));
 $('#btn-doctor').click(() => toggleVisibility('nurse'));

 $('.clinic-card-chooser').click(() => {
  $('.clinic-card-chooser').addClass('my-select');
  $('.nurse-card-chooser').removeClass('my-select');
  $('.nurse-register-content').addClass('d-none');
  $('.clinic-register-content').removeClass('d-none');
 });

 $('.nurse-card-chooser').click(() => {
  $('.nurse-card-chooser').addClass('my-select');
  $('.clinic-card-chooser').removeClass('my-select');
  $('.clinic-register-content').addClass('d-none');
  $('.nurse-register-content').removeClass('d-none');
 });

 $('.nurse-card-chooser, .clinic-card-chooser').addClass('cursor-pointer');

 $('main').css({
  position: 'relative',
  top: '70px',
  'min-height': '55vh',
 });
});
