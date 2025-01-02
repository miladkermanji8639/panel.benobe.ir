var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var i = o((a, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof t < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.sr = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   r = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
     longhand: [
      'Nedelja',
      'Ponedeljak',
      'Utorak',
      'Sreda',
      'Četvrtak',
      'Petak',
      'Subota',
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
      'Mart',
      'April',
      'Maj',
      'Jun',
      'Jul',
      'Avgust',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
     ],
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'Ned.',
    rangeSeparator: ' do ',
   };
  e.l10ns.sr = r;
  var d = e.l10ns;
  (n.Serbian = r),
   (n.default = d),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default i();
