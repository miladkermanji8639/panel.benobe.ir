var o = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.pa = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨਿੱਚਰ'],
     longhand: [
      'ਐਤਵਾਰ',
      'ਸੋਮਵਾਰ',
      'ਮੰਗਲਵਾਰ',
      'ਬੁੱਧਵਾਰ',
      'ਵੀਰਵਾਰ',
      'ਸ਼ੁੱਕਰਵਾਰ',
      'ਸ਼ਨਿੱਚਰਵਾਰ',
     ],
    },
    months: {
     shorthand: [
      'ਜਨ',
      'ਫ਼ਰ',
      'ਮਾਰ',
      'ਅਪ੍ਰੈ',
      'ਮਈ',
      'ਜੂਨ',
      'ਜੁਲਾ',
      'ਅਗ',
      'ਸਤੰ',
      'ਅਕ',
      'ਨਵੰ',
      'ਦਸੰ',
     ],
     longhand: [
      'ਜਨਵਰੀ',
      'ਫ਼ਰਵਰੀ',
      'ਮਾਰਚ',
      'ਅਪ੍ਰੈਲ',
      'ਮਈ',
      'ਜੂਨ',
      'ਜੁਲਾਈ',
      'ਅਗਸਤ',
      'ਸਤੰਬਰ',
      'ਅਕਤੂਬਰ',
      'ਨਵੰਬਰ',
      'ਦਸੰਬਰ',
     ],
    },
   };
  n.l10ns.pa = i;
  var a = n.l10ns;
  (e.Punjabi = i),
   (e.default = a),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
