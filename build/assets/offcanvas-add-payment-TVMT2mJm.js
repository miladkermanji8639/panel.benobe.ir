(function () {
 const e = document.querySelector('.invoice-amount');
 e && new Cleave(e, { numeral: !0 });
 const n = new Date(),
  t = document.querySelectorAll('.invoice-date');
 t &&
  t.forEach(function (o) {
   o.flatpickr({ monthSelectorType: 'static', locale: 'fa', defaultDate: n });
  });
})();
