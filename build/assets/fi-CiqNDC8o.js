var t = (i, u) => () => (u || i((u = { exports: {} }).exports, u), u.exports);
var d = t((n, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (i, u) {
  typeof n == 'object' && typeof a < 'u'
   ? u(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], u)
     : u((i.fi = {}));
 })(void 0, function (i) {
  var u =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   e = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
     longhand: [
      'Sunnuntai',
      'Maanantai',
      'Tiistai',
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai',
     ],
    },
    months: {
     shorthand: [
      'Tammi',
      'Helmi',
      'Maalis',
      'Huhti',
      'Touko',
      'Kesä',
      'Heinä',
      'Elo',
      'Syys',
      'Loka',
      'Marras',
      'Joulu',
     ],
     longhand: [
      'Tammikuu',
      'Helmikuu',
      'Maaliskuu',
      'Huhtikuu',
      'Toukokuu',
      'Kesäkuu',
      'Heinäkuu',
      'Elokuu',
      'Syyskuu',
      'Lokakuu',
      'Marraskuu',
      'Joulukuu',
     ],
    },
    ordinal: function () {
     return '.';
    },
   };
  u.l10ns.fi = e;
  var o = u.l10ns;
  (i.Finnish = e),
   (i.default = o),
   Object.defineProperty(i, '__esModule', { value: !0 });
 });
});
export default d();
