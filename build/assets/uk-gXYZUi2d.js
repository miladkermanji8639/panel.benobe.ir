var o = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.uk = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Неділя',
      'Понеділок',
      'Вівторок',
      'Середа',
      'Четвер',
      "П'ятниця",
      'Субота',
     ],
    },
    months: {
     shorthand: [
      'Січ',
      'Лют',
      'Бер',
      'Кві',
      'Тра',
      'Чер',
      'Лип',
      'Сер',
      'Вер',
      'Жов',
      'Лис',
      'Гру',
     ],
     longhand: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
     ],
    },
   };
  n.l10ns.uk = i;
  var a = n.l10ns;
  (e.Ukrainian = i),
   (e.default = a),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
