(function () {
 const t = document.querySelector('#html5-datetime-local-input'),
  e = document.querySelector('#html5-date-input'),
  a = document.querySelector('#html5-month-input');
 t && t.flatpickr({ enableTime: !0, locale: 'fa', dateFormat: 'Y/m/d H:i' }),
  e &&
   e.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    dateFormat: 'Y/m/d',
   }),
  a &&
   a.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    dateFormat: 'Y/m',
   });
 const c = document.getElementById('defaultCheck2');
 c.indeterminate = !0;
})();
