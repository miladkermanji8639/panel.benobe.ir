var r = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var d = r((i, o) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof i == 'object' && typeof o < 'u'
   ? e(i)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.it = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
     longhand: [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
     ],
    },
    months: {
     shorthand: [
      'Gen',
      'Feb',
      'Mar',
      'Apr',
      'Mag',
      'Giu',
      'Lug',
      'Ago',
      'Set',
      'Ott',
      'Nov',
      'Dic',
     ],
     longhand: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '°';
    },
    rangeSeparator: ' al ',
    weekAbbreviation: 'Se',
    scrollTitle: 'Scrolla per aumentare',
    toggleTitle: 'Clicca per cambiare',
   };
  e.l10ns.it = a;
  var t = e.l10ns;
  (n.Italian = a),
   (n.default = t),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default d();
