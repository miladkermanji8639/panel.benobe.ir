var a = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var i = a((o, d) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof o == 'object' && typeof d < 'u'
   ? e(o)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.sk = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   t = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Ut', 'Str', 'Štv', 'Pia', 'Sob'],
     longhand: [
      'Nedeľa',
      'Pondelok',
      'Utorok',
      'Streda',
      'Štvrtok',
      'Piatok',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Máj',
      'Jún',
      'Júl',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'Január',
      'Február',
      'Marec',
      'Apríl',
      'Máj',
      'Jún',
      'Júl',
      'August',
      'September',
      'Október',
      'November',
      'December',
     ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' do ',
    ordinal: function () {
     return '.';
    },
   };
  e.l10ns.sk = t;
  var r = e.l10ns;
  (n.Slovak = t),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default i();
