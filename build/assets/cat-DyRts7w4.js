var s = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var f = s((t, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof t == 'object' && typeof i < 'u'
   ? e(t)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.cat = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
     longhand: [
      'Diumenge',
      'Dilluns',
      'Dimarts',
      'Dimecres',
      'Dijous',
      'Divendres',
      'Dissabte',
     ],
    },
    months: {
     shorthand: [
      'Gen',
      'Febr',
      'Març',
      'Abr',
      'Maig',
      'Juny',
      'Jul',
      'Ag',
      'Set',
      'Oct',
      'Nov',
      'Des',
     ],
     longhand: [
      'Gener',
      'Febrer',
      'Març',
      'Abril',
      'Maig',
      'Juny',
      'Juliol',
      'Agost',
      'Setembre',
      'Octubre',
      'Novembre',
      'Desembre',
     ],
    },
    ordinal: function (d) {
     var r = d % 100;
     if (r > 3 && r < 21) return 'è';
     switch (r % 10) {
      case 1:
       return 'r';
      case 2:
       return 'n';
      case 3:
       return 'r';
      case 4:
       return 't';
      default:
       return 'è';
     }
    },
    firstDayOfWeek: 1,
   };
  e.l10ns.cat = a;
  var u = e.l10ns;
  (n.Catalan = a),
   (n.default = u),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default f();
