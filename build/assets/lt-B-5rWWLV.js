var s = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var l = s((n, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, i) {
  typeof n == 'object' && typeof t < 'u'
   ? i(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], i)
     : i((e.lt = {}));
 })(void 0, function (e) {
  var i =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
     longhand: [
      'Sekmadienis',
      'Pirmadienis',
      'Antradienis',
      'Trečiadienis',
      'Ketvirtadienis',
      'Penktadienis',
      'Šeštadienis',
     ],
    },
    months: {
     shorthand: [
      'Sau',
      'Vas',
      'Kov',
      'Bal',
      'Geg',
      'Bir',
      'Lie',
      'Rgp',
      'Rgs',
      'Spl',
      'Lap',
      'Grd',
     ],
     longhand: [
      'Sausis',
      'Vasaris',
      'Kovas',
      'Balandis',
      'Gegužė',
      'Birželis',
      'Liepa',
      'Rugpjūtis',
      'Rugsėjis',
      'Spalis',
      'Lapkritis',
      'Gruodis',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '-a';
    },
    weekAbbreviation: 'Sav',
    scrollTitle: 'Keisti laiką pelės rateliu',
    toggleTitle: 'Perjungti laiko formatą',
   };
  i.l10ns.lt = a;
  var d = i.l10ns;
  (e.Lithuanian = a),
   (e.default = d),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default l();
