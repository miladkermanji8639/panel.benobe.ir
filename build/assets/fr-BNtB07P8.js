var u = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var o = u((r, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof r == 'object' && typeof a < 'u'
   ? e(r)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.fr = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
     longhand: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
     ],
    },
    months: {
     shorthand: [
      'Janv',
      'Févr',
      'Mars',
      'Avr',
      'Mai',
      'Juin',
      'Juil',
      'Août',
      'Sept',
      'Oct',
      'Nov',
      'Déc',
     ],
     longhand: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
     ],
    },
    ordinal: function (t) {
     return t > 1 ? 'ème' : 'er';
    },
    rangeSeparator: ' au ',
    weekAbbreviation: 'Sem',
    scrollTitle: 'Défiler pour augmenter la valeur',
    toggleTitle: 'Cliquer pour basculer',
   };
  e.l10ns.fr = i;
  var d = e.l10ns;
  (n.French = i),
   (n.default = d),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default o();
