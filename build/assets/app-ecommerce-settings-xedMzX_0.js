$(function () {
 var e = $('.select2');
 e.length &&
  e.each(function () {
   var n = $(this);
   n.wrap('<div class="position-relative"></div>').select2({
    dropdownParent: n.parent(),
    placeholder: n.data('placeholder'),
   });
  });
});
(function () {
 const e = document.querySelectorAll('.phone-mask');
 e &&
  e.forEach(function (n) {
   new Cleave(n, { phone: !0, phoneRegionCode: 'US' });
  });
})();