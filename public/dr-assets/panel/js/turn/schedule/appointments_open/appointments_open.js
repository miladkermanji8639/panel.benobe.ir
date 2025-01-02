$(document).ready(function () {
 $('.js-example-basic-multiple').select2();
});
$('#BarnameOne').change(function () {
 $('.card-barname').removeClass('active');
 $('#BarnameOne').addClass('active');
});

$('#barname_two').change(function () {
 $('.card-barname').removeClass('active');
 $('#BarnameTwo').addClass('active');
});

$('#barname_three').change(function () {
 $('.card-barname').removeClass('active');
 $('#BarnameThree').addClass('active');
});

$(document).ready(function (e) {
 $('#savebarname').submit(function (e) {
  $.ajax({
   type: 'POST',
   url: 'https://benobe.ir/index.php?mod=users&action=save_barname_appointments&ajax=1',
   data: $(this).serialize(), // serializes the form's elements.
   beforeSend: function () {
    waitMe_show('body');
   },
   success: function (data) {
    console.log(data);
    waitMe_hide('body');
    toast_success('ثبت و ذخیره شد');
   },
   error: function () {
    waitMe_hide('body');
   },
  });
  e.preventDefault();
 });
});
