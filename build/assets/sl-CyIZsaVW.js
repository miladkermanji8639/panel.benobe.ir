var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var i = t((o, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof o == 'object' && typeof a < 'u'
   ? e(o)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.sl = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   r = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
     longhand: [
      'Nedelja',
      'Ponedeljek',
      'Torek',
      'Sreda',
      'Četrtek',
      'Petek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Avg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'Januar',
      'Februar',
      'Marec',
      'April',
      'Maj',
      'Junij',
      'Julij',
      'Avgust',
      'September',
      'Oktober',
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
  e.l10ns.sl = r;
  var d = e.l10ns;
  (n.Slovenian = r),
   (n.default = d),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default i();
