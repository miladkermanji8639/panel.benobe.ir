var i = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var f = i((d, o) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof o < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.cs = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   t = {
    weekdays: {
     shorthand: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
     longhand: [
      'Neděle',
      'Pondělí',
      'Úterý',
      'Středa',
      'Čtvrtek',
      'Pátek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Led',
      'Ún',
      'Bře',
      'Dub',
      'Kvě',
      'Čer',
      'Čvc',
      'Srp',
      'Zář',
      'Říj',
      'Lis',
      'Pro',
     ],
     longhand: [
      'Leden',
      'Únor',
      'Březen',
      'Duben',
      'Květen',
      'Červen',
      'Červenec',
      'Srpen',
      'Září',
      'Říjen',
      'Listopad',
      'Prosinec',
     ],
    },
    rangeSeparator: ' do ',
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
   };
  e.l10ns.cs = t;
  var r = e.l10ns;
  (n.Czech = t),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default f();
