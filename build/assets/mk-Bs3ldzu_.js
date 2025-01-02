var o = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var t = o((d, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof d == 'object' && typeof a < 'u'
   ? e(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.mk = {}));
 })(void 0, function (n) {
  var e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Са'],
     longhand: [
      'Недела',
      'Понеделник',
      'Вторник',
      'Среда',
      'Четврток',
      'Петок',
      'Сабота',
     ],
    },
    months: {
     shorthand: [
      'Јан',
      'Фев',
      'Мар',
      'Апр',
      'Мај',
      'Јун',
      'Јул',
      'Авг',
      'Сеп',
      'Окт',
      'Ное',
      'Дек',
     ],
     longhand: [
      'Јануари',
      'Февруари',
      'Март',
      'Април',
      'Мај',
      'Јуни',
      'Јули',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
     ],
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'Нед.',
    rangeSeparator: ' до ',
   };
  e.l10ns.mk = i;
  var f = e.l10ns;
  (n.Macedonian = i),
   (n.default = f),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default t();
