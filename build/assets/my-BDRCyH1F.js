var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var u = t((d, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof i < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.my = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   f = {
    weekdays: {
     shorthand: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
     longhand: [
      'တနင်္ဂနွေ',
      'တနင်္လာ',
      'အင်္ဂါ',
      'ဗုဒ္ဓဟူး',
      'ကြာသပတေး',
      'သောကြာ',
      'စနေ',
     ],
    },
    months: {
     shorthand: [
      'ဇန်',
      'ဖေ',
      'မတ်',
      'ပြီ',
      'မေ',
      'ဇွန်',
      'လိုင်',
      'သြ',
      'စက်',
      'အောက်',
      'နို',
      'ဒီ',
     ],
     longhand: [
      'ဇန်နဝါရီ',
      'ဖေဖော်ဝါရီ',
      'မတ်',
      'ဧပြီ',
      'မေ',
      'ဇွန်',
      'ဇူလိုင်',
      'သြဂုတ်',
      'စက်တင်ဘာ',
      'အောက်တိုဘာ',
      'နိုဝင်ဘာ',
      'ဒီဇင်ဘာ',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  e.l10ns.my = f;
  var o = e.l10ns;
  (n.Burmese = f),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default u();
