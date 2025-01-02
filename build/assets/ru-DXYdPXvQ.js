var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var a = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof f < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.ru = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
     ],
    },
    months: {
     shorthand: [
      'Янв',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
     ],
     longhand: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
     ],
    },
    rangeSeparator: ' — ',
    scrollTitle: 'Прокрутите для увеличения',
    toggleTitle: 'Нажмите для переключения',
   };
  e.l10ns.ru = i;
  var t = e.l10ns;
  (n.Russian = i),
   (n.default = t),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default a();
