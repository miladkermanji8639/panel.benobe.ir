var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var o = t((a, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof a == 'object' && typeof r < 'u'
   ? e(a)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.da = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   d = {
    weekdays: {
     shorthand: ['søn', 'man', 'tir', 'ons', 'tors', 'fre', 'lør'],
     longhand: [
      'søndag',
      'mandag',
      'tirsdag',
      'onsdag',
      'torsdag',
      'fredag',
      'lørdag',
     ],
    },
    months: {
     shorthand: [
      'jan',
      'feb',
      'mar',
      'apr',
      'maj',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec',
     ],
     longhand: [
      'januar',
      'februar',
      'marts',
      'april',
      'maj',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'december',
     ],
    },
    ordinal: function () {
     return '.';
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' til ',
    weekAbbreviation: 'uge',
   };
  e.l10ns.da = d;
  var i = e.l10ns;
  (n.Danish = d),
   (n.default = i),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default o();
