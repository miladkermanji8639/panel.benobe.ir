var d = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = d((r, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof r == 'object' && typeof i < 'u'
   ? e(r)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.no = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
     longhand: [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Des',
     ],
     longhand: [
      'Januar',
      'Februar',
      'Mars',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Desember',
     ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' til ',
    weekAbbreviation: 'Uke',
    scrollTitle: 'Scroll for å endre',
    toggleTitle: 'Klikk for å veksle',
    ordinal: function () {
     return '.';
    },
   };
  e.l10ns.no = a;
  var o = e.l10ns;
  (n.Norwegian = a),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
