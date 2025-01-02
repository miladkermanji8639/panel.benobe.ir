var a = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var r = a((n, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (i, e) {
  typeof n == 'object' && typeof t < 'u'
   ? e(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((i.pl = {}));
 })(void 0, function (i) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   d = {
    weekdays: {
     shorthand: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
     longhand: [
      'Niedziela',
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Sty',
      'Lut',
      'Mar',
      'Kwi',
      'Maj',
      'Cze',
      'Lip',
      'Sie',
      'Wrz',
      'Paź',
      'Lis',
      'Gru',
     ],
     longhand: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
   };
  e.l10ns.pl = d;
  var o = e.l10ns;
  (i.Polish = d),
   (i.default = o),
   Object.defineProperty(i, '__esModule', { value: !0 });
 });
});
export default r();
