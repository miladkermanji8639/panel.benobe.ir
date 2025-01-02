(function () {
 const c = document.querySelectorAll('.invoice-item-price'),
  o = document.querySelectorAll('.invoice-item-qty'),
  n = new Date(),
  l = document.querySelector('.invoice-date'),
  i = document.querySelector('.due-date');
 c &&
  c.forEach(function (a) {
   new Cleave(a, { delimiter: '', numeral: !0 });
  }),
  o &&
   o.forEach(function (a) {
    new Cleave(a, { delimiter: '', numeral: !0 });
   }),
  l &&
   l.flatpickr({ monthSelectorType: 'static', locale: 'fa', defaultDate: n }),
  i &&
   i.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    defaultDate: new Date(n.getFullYear(), n.getMonth(), n.getDate() + 5),
   });
})();
$(function () {
 var c = $('.btn-apply-changes'),
  o,
  n,
  l,
  i,
  a,
  r,
  p = $('.source-item'),
  s = {
   'App Design': 'Designed UI kit & app pages.',
   'App Customization': 'Customization & Bug Fixes.',
   'ABC Template': 'Bootstrap 4 admin template.',
   'App Development': 'Native App Development.',
  };
 $(document).on('click', '.tax-select', function (e) {
  e.stopPropagation();
 });
 function u(e, t) {
  e.closest('.repeater-wrapper').find(t).text(e.val());
 }
 c.length &&
  $(document).on('click', '.btn-apply-changes', function (e) {
   var t = $(this);
   (a = t.closest('.dropdown-menu').find('#taxInput1')),
    (r = t.closest('.dropdown-menu').find('#taxInput2')),
    (i = t.closest('.dropdown-menu').find('#discountInput')),
    (n = t.closest('.repeater-wrapper').find('.tax-1')),
    (l = t.closest('.repeater-wrapper').find('.tax-2')),
    (o = $('.discount')),
    a.val() !== null && u(a, n),
    r.val() !== null && u(r, l),
    i.val().length &&
     t
      .closest('.repeater-wrapper')
      .find(o)
      .text(i.val() + '%');
  }),
  p.length &&
   (p.on('submit', function (e) {
    e.preventDefault();
   }),
   p.repeater({
    show: function () {
     $(this).slideDown(),
      [].slice
       .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
       .map(function (t) {
        return new bootstrap.Tooltip(t);
       });
    },
    hide: function (e) {
     $(this).slideUp();
    },
   })),
  $(document).on('change', '.item-details', function () {
   var e = $(this),
    t = s[e.val()];
   e.next('textarea').length
    ? e.next('textarea').val(t)
    : e.after('<textarea class="form-control" rows="2">' + t + '</textarea>');
  });
});
