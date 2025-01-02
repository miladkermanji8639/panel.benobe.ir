$(document).ready(function () {
 // راه‌اندازی دیت پیکر
 $('.observer-example').persianDatepicker({
  observer: true,
  format: 'YYYY/MM/DD',
  altField: '.observer-example-alt',
  autoClose: true,
  initialValueType: 'persian',
  onSelect: function () {
   $(this).persianDatepicker('close');
  },
 });
});
