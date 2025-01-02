var u = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var d = u((t, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof t == 'object' && typeof i < 'u'
   ? e(t)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.et = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
     longhand: [
      'Pühapäev',
      'Esmaspäev',
      'Teisipäev',
      'Kolmapäev',
      'Neljapäev',
      'Reede',
      'Laupäev',
     ],
    },
    months: {
     shorthand: [
      'Jaan',
      'Veebr',
      'Märts',
      'Apr',
      'Mai',
      'Juuni',
      'Juuli',
      'Aug',
      'Sept',
      'Okt',
      'Nov',
      'Dets',
     ],
     longhand: [
      'Jaanuar',
      'Veebruar',
      'Märts',
      'Aprill',
      'Mai',
      'Juuni',
      'Juuli',
      'August',
      'September',
      'Oktoober',
      'November',
      'Detsember',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
    weekAbbreviation: 'Näd',
    rangeSeparator: ' kuni ',
    scrollTitle: 'Keri, et suurendada',
    toggleTitle: 'Klõpsa, et vahetada',
   };
  e.l10ns.et = a;
  var r = e.l10ns;
  (n.Estonian = a),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default d();
