var t = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var a = t((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.ko = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   o = {
    weekdays: {
     shorthand: ['일', '월', '화', '수', '목', '금', '토'],
     longhand: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
     ],
    },
    months: {
     shorthand: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
     ],
     longhand: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
     ],
    },
    ordinal: function () {
     return '일';
    },
   };
  n.l10ns.ko = o;
  var i = n.l10ns;
  (e.Korean = o),
   (e.default = i),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default a();
