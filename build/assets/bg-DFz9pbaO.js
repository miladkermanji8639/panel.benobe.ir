var o = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var t = o((d, f) => {
 /* flatpickr v4.3.2, @license MIT */ (function (e, n) {
  typeof d == 'object' && typeof f < 'u'
   ? n(d)
   : typeof define == 'function' && define.amd
     ? define(['exports'], n)
     : n((e.bg = {}));
 })(void 0, function (e) {
  var n =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   i = {
    weekdays: {
     shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Неделя',
      'Понеделник',
      'Вторник',
      'Сряда',
      'Четвъртък',
      'Петък',
      'Събота',
     ],
    },
    months: {
     shorthand: [
      'Яну',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Юни',
      'Юли',
      'Авг',
      'Сеп',
      'Окт',
      'Ное',
      'Дек',
     ],
     longhand: [
      'Януари',
      'Февруари',
      'Март',
      'Април',
      'Май',
      'Юни',
      'Юли',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
     ],
    },
   };
  n.l10ns.bg = i;
  var a = n.l10ns;
  (e.Bulgarian = i),
   (e.default = a),
   Object.defineProperty(e, '__esModule', { value: !0 });
 });
});
export default t();
