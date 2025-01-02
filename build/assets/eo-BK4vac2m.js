var i = (o, e) => () => (e || o((e = { exports: {} }).exports, e), e.exports);
var t = i((n, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (o, e) {
  typeof n == 'object' && typeof r < 'u'
   ? e(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((o.eo = {}));
 })(void 0, function (o) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    firstDayOfWeek: 1,
    rangeSeparator: ' ĝis ',
    weekAbbreviation: 'Sem',
    scrollTitle: 'Rulumu por pligrandigi la valoron',
    toggleTitle: 'Klaku por ŝalti',
    weekdays: {
     shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Ĵaŭ', 'Ven', 'Sab'],
     longhand: [
      'dimanĉo',
      'lundo',
      'mardo',
      'merkredo',
      'ĵaŭdo',
      'vendredo',
      'sabato',
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
      'Aŭg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'januaro',
      'februaro',
      'marto',
      'aprilo',
      'majo',
      'junio',
      'julio',
      'aŭgusto',
      'septembro',
      'oktobro',
      'novembro',
      'decembro',
     ],
    },
    ordinal: function () {
     return '-a';
    },
   };
  e.l10ns.eo = a;
  var d = e.l10ns;
  (o.Esperanto = a),
   (o.default = d),
   Object.defineProperty(o, '__esModule', { value: !0 });
 });
});
export default t();
