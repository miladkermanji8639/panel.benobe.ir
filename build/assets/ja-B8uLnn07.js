var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof f < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.ja = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   a = {
    weekdays: {
     shorthand: ['日', '月', '火', '水', '木', '金', '土'],
     longhand: [
      '日曜日',
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日',
     ],
    },
    months: {
     shorthand: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
     ],
     longhand: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
     ],
    },
   };
  e.l10ns.ja = a;
  var i = e.l10ns;
  (n.Japanese = a),
   (n.default = i),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
