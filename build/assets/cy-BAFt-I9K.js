var u = (r, d) => () => (d || r((d = { exports: {} }).exports, d), d.exports);
var o = u((f, n) => {
 /* flatpickr v4.3.2, @license MIT */ (function (r, d) {
  typeof f == 'object' && typeof n < 'u'
   ? d(f)
   : typeof define == 'function' && define.amd
     ? define(['exports'], d)
     : d((r.cy = {}));
 })(void 0, function (r) {
  var d =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
     longhand: [
      'Dydd Sul',
      'Dydd Llun',
      'Dydd Mawrth',
      'Dydd Mercher',
      'Dydd Iau',
      'Dydd Gwener',
      'Dydd Sadwrn',
     ],
    },
    months: {
     shorthand: [
      'Ion',
      'Chwef',
      'Maw',
      'Ebr',
      'Mai',
      'Meh',
      'Gorff',
      'Awst',
      'Medi',
      'Hyd',
      'Tach',
      'Rhag',
     ],
     longhand: [
      'Ionawr',
      'Chwefror',
      'Mawrth',
      'Ebrill',
      'Mai',
      'Mehefin',
      'Gorffennaf',
      'Awst',
      'Medi',
      'Hydref',
      'Tachwedd',
      'Rhagfyr',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function (e) {
     return e === 1
      ? 'af'
      : e === 2
        ? 'ail'
        : e === 3 || e === 4
          ? 'ydd'
          : e === 5 || e === 6
            ? 'ed'
            : (e >= 7 && e <= 10) || e == 12 || e == 15 || e == 18 || e == 20
              ? 'fed'
              : e == 11 || e == 13 || e == 14 || e == 16 || e == 17 || e == 19
                ? 'eg'
                : e >= 21 && e <= 39
                  ? 'ain'
                  : '';
    },
   };
  d.l10ns.cy = i;
  var a = d.l10ns;
  (r.Welsh = i),
   (r.default = a),
   Object.defineProperty(r, '__esModule', { value: !0 });
 });
});
export default o();
