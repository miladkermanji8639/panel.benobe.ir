var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var l = t((a, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof i < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.nl = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   o = {
    weekdays: {
     shorthand: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
     longhand: [
      'zondag',
      'maandag',
      'dinsdag',
      'woensdag',
      'donderdag',
      'vrijdag',
      'zaterdag',
     ],
    },
    months: {
     shorthand: [
      'jan',
      'feb',
      'mrt',
      'apr',
      'mei',
      'jun',
      'jul',
      'aug',
      'sept',
      'okt',
      'nov',
      'dec',
     ],
     longhand: [
      'januari',
      'februari',
      'maart',
      'april',
      'mei',
      'juni',
      'juli',
      'augustus',
      'september',
      'oktober',
      'november',
      'december',
     ],
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'wk',
    rangeSeparator: ' tot ',
    scrollTitle: 'Scroll voor volgende / vorige',
    toggleTitle: 'Klik om te wisselen',
    ordinal: function (d) {
     return d === 1 || d === 8 || d >= 20 ? 'ste' : 'de';
    },
   };
  e.l10ns.nl = o;
  var r = e.l10ns;
  (n.Dutch = o),
   (n.default = r),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default l();
