var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var a = o((d, i) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof i < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.th = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   t = {
    weekdays: {
     shorthand: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
     longhand: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
     ],
    },
    months: {
     shorthand: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.',
     ],
     longhand: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
     ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' ถึง ',
    scrollTitle: 'เลื่อนเพื่อเพิ่มหรือลด',
    toggleTitle: 'คลิกเพื่อเปลี่ยน',
    ordinal: function () {
     return '';
    },
   };
  e.l10ns.th = t;
  var f = e.l10ns;
  (n.Thai = t),
   (n.default = f),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default a();
