var o = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.si = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
     longhand: [
      'ඉරිදා',
      'සඳුදා',
      'අඟහරුවාදා',
      'බදාදා',
      'බ්‍රහස්පතින්දා',
      'සිකුරාදා',
      'සෙනසුරාදා',
     ],
    },
    months: {
     shorthand: [
      'ජන',
      'පෙබ',
      'මාර්',
      'අප්‍රේ',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝ',
      'සැප්',
      'ඔක්',
      'නොවැ',
      'දෙසැ',
     ],
     longhand: [
      'ජනවාරි',
      'පෙබරවාරි',
      'මාර්තු',
      'අප්‍රේල්',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝස්තු',
      'සැප්තැම්බර්',
      'ඔක්තෝබර්',
      'නොවැම්බර්',
      'දෙසැම්බර්',
     ],
    },
   };
  n.l10ns.si = i;
  var a = n.l10ns;
  (e.Sinhala = i),
   (e.default = a),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
