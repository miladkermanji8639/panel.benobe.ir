var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var a = t((d, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof i < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.he = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   f = {
    weekdays: {
     shorthand: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז'],
     longhand: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    },
    months: {
     shorthand: [
      'ינו׳',
      'פבר׳',
      'מרץ',
      'אפר׳',
      'מאי',
      'יוני',
      'יולי',
      'אוג׳',
      'ספט׳',
      'אוק׳',
      'נוב׳',
      'דצמ׳',
     ],
     longhand: [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
     ],
    },
   };
  e.l10ns.he = f;
  var o = e.l10ns;
  (n.Hebrew = f),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default a();
