var t = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var a = t((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.hi = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
     longhand: [
      'रविवार',
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरुवार',
      'शुक्रवार',
      'शनिवार',
     ],
    },
    months: {
     shorthand: [
      'जन',
      'फर',
      'मार्च',
      'अप्रेल',
      'मई',
      'जून',
      'जूलाई',
      'अग',
      'सित',
      'अक्ट',
      'नव',
      'दि',
     ],
     longhand: [
      'जनवरी ',
      'फरवरी',
      'मार्च',
      'अप्रेल',
      'मई',
      'जून',
      'जूलाई',
      'अगस्त ',
      'सितम्बर',
      'अक्टूबर',
      'नवम्बर',
      'दिसम्बर',
     ],
    },
   };
  n.l10ns.hi = i;
  var o = n.l10ns;
  (e.Hindi = i),
   (e.default = o),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default a();
