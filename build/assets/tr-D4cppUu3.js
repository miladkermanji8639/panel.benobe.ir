var d = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var u = d((n, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, a) {
  typeof n == 'object' && typeof i < 'u'
   ? a(n)
   : typeof define == 'function' && define.amd
     ? define(['exports'], a)
     : a((e.tr = {}));
 })(void 0, function (e) {
  var a =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   r = {
    weekdays: {
     shorthand: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
     longhand: [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
     ],
    },
    months: {
     shorthand: [
      'Oca',
      'Şub',
      'Mar',
      'Nis',
      'May',
      'Haz',
      'Tem',
      'Ağu',
      'Eyl',
      'Eki',
      'Kas',
      'Ara',
     ],
     longhand: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
    rangeSeparator: ' - ',
    weekAbbreviation: 'Hf',
    scrollTitle: 'Artırmak için kaydırın',
    toggleTitle: 'Aç/Kapa',
    amPM: ['ÖÖ', 'ÖS'],
   };
  a.l10ns.tr = r;
  var t = a.l10ns;
  (e.Turkish = r),
   (e.default = t),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default u();
