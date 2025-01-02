var o = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.ar = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     longhand: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
    },
    months: {
     shorthand: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
     longhand: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
    },
   };
  n.l10ns.ar = i;
  var a = n.l10ns;
  (e.Arabic = i),
   (e.default = a),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
