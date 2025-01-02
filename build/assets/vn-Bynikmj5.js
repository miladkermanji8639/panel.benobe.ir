var t = (h, n) => () => (n || h((n = { exports: {} }).exports, n), n.exports);
var f = t((e, d) => {
 /* flatpickr v4.3.2, @license MIT */ (function (h, n) {
  typeof e == 'object' && typeof d < 'u'
   ? n(e)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((h.vn = {}));
 })(void 0, function (h) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   T = {
    weekdays: {
     shorthand: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
     longhand: [
      'Chủ nhật',
      'Thứ hai',
      'Thứ ba',
      'Thứ tư',
      'Thứ năm',
      'Thứ sáu',
      'Thứ bảy',
     ],
    },
    months: {
     shorthand: [
      'Th1',
      'Th2',
      'Th3',
      'Th4',
      'Th5',
      'Th6',
      'Th7',
      'Th8',
      'Th9',
      'Th10',
      'Th11',
      'Th12',
     ],
     longhand: [
      'Tháng một',
      'Tháng hai',
      'Tháng ba',
      'Tháng tư',
      'Tháng năm',
      'Tháng sáu',
      'Tháng bảy',
      'Tháng tám',
      'Tháng chín',
      'Tháng mười',
      'Tháng 11',
      'Tháng 12',
     ],
    },
    firstDayOfWeek: 1,
   };
  n.l10ns.vn = T;
  var i = n.l10ns;
  (h.Vietnamese = T),
   (h.default = i),
   Object.defineProperty(h, '__esModule', { value: !0 });
 });
});
export default f();
