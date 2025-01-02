var d = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var a = d((t, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof t == 'object' && typeof r < 'u'
   ? e(t)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.hu = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Szo'],
     longhand: [
      'Vasárnap',
      'Hétfő',
      'Kedd',
      'Szerda',
      'Csütörtök',
      'Péntek',
      'Szombat',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Már',
      'Ápr',
      'Máj',
      'Jún',
      'Júl',
      'Aug',
      'Szep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'Január',
      'Február',
      'Március',
      'Április',
      'Május',
      'Június',
      'Július',
      'Augusztus',
      'Szeptember',
      'Október',
      'November',
      'December',
     ],
    },
    ordinal: function () {
     return '.';
    },
    weekAbbreviation: 'Hét',
    scrollTitle: 'Görgessen',
    toggleTitle: 'Kattintson a váltáshoz',
   };
  e.l10ns.hu = i;
  var u = e.l10ns;
  (n.Hungarian = i),
   (n.default = u),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default a();
