$('.edit-js').click(function (e) {
 $('.content-edit-modal').removeClass('d-none');
 $('.span-modal-js').text('ویرایش کاربر');
});
$('.close-etit-icon').click(function (e) {
 $('.close-etit-icon').css({
  cursor: 'pointer',
 });
 $('.content-edit-modal').addClass('d-none');
});
$('.add-some-user').click(function (e) {
 $('.content-edit-modal').removeClass('d-none');
 $('.span-modal-js').text('افزودن کاربر');
});
