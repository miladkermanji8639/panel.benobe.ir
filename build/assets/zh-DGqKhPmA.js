var t = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var f = t((d, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof a < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.zh = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     longhand: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
     ],
    },
    months: {
     shorthand: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     longhand: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
    },
    rangeSeparator: ' 至 ',
    weekAbbreviation: '周',
    scrollTitle: '滚动切换',
    toggleTitle: '点击切换 12/24 小时时制',
   };
  e.l10ns.zh = i;
  var o = e.l10ns;
  (n.Mandarin = i),
   (n.default = o),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default f();
