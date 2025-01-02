var d = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var o = d((r, a) => {
 /* flatpickr v4.3.2, @license MIT */ (function (n, e) {
  typeof r == 'object' && typeof a < 'u'
   ? e(r)
   : typeof define == 'function' && define.amd
     ? define(['exports'], e)
     : e((n.default = {}));
 })(void 0, function (n) {
  var e = {
   weekdays: {
    shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longhand: [
     'Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday',
    ],
   },
   months: {
    shorthand: [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
     'Jun',
     'Jul',
     'Aug',
     'Sep',
     'Oct',
     'Nov',
     'Dec',
    ],
    longhand: [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',
    ],
   },
   daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
   firstDayOfWeek: 0,
   ordinal: function (u) {
    var t = u % 100;
    if (t > 3 && t < 21) return 'th';
    switch (t % 10) {
     case 1:
      return 'st';
     case 2:
      return 'nd';
     case 3:
      return 'rd';
     default:
      return 'th';
    }
   },
   rangeSeparator: ' to ',
   weekAbbreviation: 'Wk',
   scrollTitle: 'Scroll to increment',
   toggleTitle: 'Click to toggle',
   amPM: ['AM', 'PM'],
  };
  (n.english = e),
   (n.default = e),
   Object.defineProperty(n, '__esModule', { value: !0 });
 });
});
export default o();
