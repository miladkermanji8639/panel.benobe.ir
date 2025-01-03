(function () {
 const a = document.querySelectorAll('.invoice-item-price'),
  i = document.querySelectorAll('.invoice-item-qty'),
  o = document.querySelectorAll('.date-picker');
 a &&
  a.forEach(function (n) {
   new Cleave(n, { delimiter: '', numeral: !0 });
  }),
  i &&
   i.forEach(function (n) {
    new Cleave(n, { delimiter: '', numeral: !0 });
   }),
  o &&
   o.forEach(function (n) {
    n.flatpickr({ locale: 'fa', monthSelectorType: 'static' });
   });
})();
$(function () {
 var a = $('.btn-apply-changes'),
  i,
  o,
  n,
  l,
  c,
  r,
  p = $('.source-item'),
  u = {
   'App Design': 'Designed UI kit & app pages.',
   'App Customization': 'Customization & Bug Fixes.',
   'ABC Template': 'Bootstrap 4 admin template.',
   'App Development': 'Native App Development.',
  };
 $(document).on('click', '.tax-select', function (t) {
  t.stopPropagation();
 });
 function s(t, e) {
  t.closest('.repeater-wrapper').find(e).text(t.val());
 }
 a.length &&
  $(document).on('click', '.btn-apply-changes', function (t) {
   var e = $(this);
   (c = e.closest('.dropdown-menu').find('#taxInput1')),
    (r = e.closest('.dropdown-menu').find('#taxInput2')),
    (l = e.closest('.dropdown-menu').find('#discountInput')),
    (o = e.closest('.repeater-wrapper').find('.tax-1')),
    (n = e.closest('.repeater-wrapper').find('.tax-2')),
    (i = $('.discount')),
    c.val() !== null && s(c, o),
    r.val() !== null && s(r, n),
    l.val().length &&
     e
      .closest('.repeater-wrapper')
      .find(i)
      .text(l.val() + '%');
  }),
  p.length &&
   (p.on('submit', function (t) {
    t.preventDefault();
   }),
   p.repeater({
    show: function () {
     $(this).slideDown(),
      [].slice
       .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
       .map(function (e) {
        return new bootstrap.Tooltip(e);
       });
    },
    hide: function (t) {
     $(this).slideUp();
    },
   })),
  $(document).on('change', '.item-details', function () {
   var t = $(this),
    e = u[t.val()];
   t.next('textarea').length
    ? t.next('textarea').val(e)
    : t.after('<textarea class="form-control" rows="2">' + e + '</textarea>');
  });
});
