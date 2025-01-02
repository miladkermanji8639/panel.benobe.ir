var a = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = a((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.mn = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   o = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя', 'Ня'],
     longhand: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
    },
    months: {
     shorthand: [
      '1-р сар',
      '2-р сар',
      '3-р сар',
      '4-р сар',
      '5-р сар',
      '6-р сар',
      '7-р сар',
      '8-р сар',
      '9-р сар',
      '10-р сар',
      '11-р сар',
      '12-р сар',
     ],
     longhand: [
      'Нэгдүгээр сар',
      'Хоёрдугаар сар',
      'Гуравдугаар сар',
      'Дөрөвдүгээр сар',
      'Тавдугаар сар',
      'Зургаадугаар сар',
      'Долдугаар сар',
      'Наймдугаар сар',
      'Есдүгээр сар',
      'Аравдугаар сар',
      'Арваннэгдүгээр сар',
      'Арванхоёрдугаар сар',
     ],
    },
    rangeSeparator: '-с ',
   };
  n.l10ns.mn = o;
  var i = n.l10ns;
  (e.Mongolian = o),
   (e.default = i),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
