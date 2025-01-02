var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = o((a, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof i < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.ms = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   d = {
    weekdays: {
     shorthand: ['Min', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
     longhand: [
      'Minggu',
      'Isnin',
      'Selasa',
      'Rabu',
      'Khamis',
      'Jumaat',
      'Sabtu',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mac',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Ogo',
      'Sep',
      'Okt',
      'Nov',
      'Dis',
     ],
     longhand: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   },
   u = e.l10ns;
  (n.Malaysian = d),
   (n.default = u),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
