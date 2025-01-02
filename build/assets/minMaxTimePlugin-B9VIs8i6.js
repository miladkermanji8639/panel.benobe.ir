var F = (a, o) => () => (o || a((o = { exports: {} }).exports, o), o.exports);
var H = F((w, c) => {
 /* flatpickr v4.3.2, @license MIT */ (function (a, o) {
  typeof w == 'object' && typeof c < 'u'
   ? (c.exports = o())
   : typeof define == 'function' && define.amd
     ? define(o)
     : (a.minMaxTimePlugin = o());
 })(void 0, function () {
  var a = function (e) {
    return ('0' + e).slice(-2);
   },
   o = function (e) {
    return e === !0 ? 1 : 0;
   },
   d = function (e, t, r) {
    return r.months[t ? 'shorthand' : 'longhand'][e];
   },
   g = {
    Z: function (e) {
     return e.toISOString();
    },
    D: function (e, t, r) {
     return t.weekdays.shorthand[g.w(e, t, r)];
    },
    F: function (e, t, r) {
     return d(g.n(e, t, r) - 1, !1, t);
    },
    G: function (e, t, r) {
     return a(g.h(e, t, r));
    },
    H: function (e) {
     return a(e.getHours());
    },
    J: function (e, t) {
     return t.ordinal !== void 0
      ? e.getDate() + t.ordinal(e.getDate())
      : e.getDate();
    },
    K: function (e, t) {
     return t.amPM[o(e.getHours() > 11)];
    },
    M: function (e, t) {
     return d(e.getMonth(), !0, t);
    },
    S: function (e) {
     return a(e.getSeconds());
    },
    U: function (e) {
     return e.getTime() / 1e3;
    },
    W: function (e, t, r) {
     return r.getWeek(e);
    },
    Y: function (e) {
     return e.getFullYear();
    },
    d: function (e) {
     return a(e.getDate());
    },
    h: function (e) {
     return e.getHours() % 12 ? e.getHours() % 12 : 12;
    },
    i: function (e) {
     return a(e.getMinutes());
    },
    j: function (e) {
     return e.getDate();
    },
    l: function (e, t) {
     return t.weekdays.longhand[e.getDay()];
    },
    m: function (e) {
     return a(e.getMonth() + 1);
    },
    n: function (e) {
     return e.getMonth() + 1;
    },
    s: function (e) {
     return e.getSeconds();
    },
    w: function (e) {
     return e.getDay();
    },
    y: function (e) {
     return String(e.getFullYear()).substring(2);
    },
   },
   T = {
    _disable: [],
    _enable: [],
    allowInput: !1,
    altFormat: 'F j, Y',
    altInput: !1,
    altInputClass: 'form-control input',
    animate:
     typeof window == 'object' &&
     window.navigator.userAgent.indexOf('MSIE') === -1,
    ariaDateFormat: 'F j, Y',
    clickOpens: !0,
    closeOnSelect: !0,
    conjunction: ', ',
    dateFormat: 'Y-m-d',
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: !1,
    enable: [],
    enableSeconds: !1,
    enableTime: !1,
    errorHandler: console.warn,
    getWeek: y,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: !1,
    locale: 'default',
    minuteIncrement: 5,
    mode: 'single',
    nextArrow:
     "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: !1,
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: 'auto',
    positionElement: void 0,
    prevArrow:
     "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: !1,
    static: !1,
    time_24hr: !1,
    weekNumbers: !1,
    wrap: !1,
   },
   v = {
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
    ordinal: function (e) {
     var t = e % 100;
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
   },
   M = function (e) {
    var t = e.config,
     r = t === void 0 ? T : t,
     n = e.l10n,
     i = n === void 0 ? v : n;
    return function (l, f, m) {
     if (r.formatDate !== void 0) return r.formatDate(l, f);
     var s = m || i;
     return f
      .split('')
      .map(function (u, S, x) {
       return g[u] && x[S - 1] !== '\\' ? g[u](l, s, r) : u !== '\\' ? u : '';
      })
      .join('');
    };
   };
  function h(e, t, r) {
   return (
    r === void 0 && (r = !0),
    r !== !1
     ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
       new Date(t.getTime()).setHours(0, 0, 0, 0)
     : e.getTime() - t.getTime()
   );
  }
  function D(e, t) {
   return (
    3600 * (e.getHours() - t.getHours()) +
    60 * (e.getMinutes() - t.getMinutes()) +
    e.getSeconds() -
    t.getSeconds()
   );
  }
  var y = function (e) {
   var t = new Date(e.getTime());
   t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
   var r = new Date(t.getFullYear(), 0, 4);
   return (
    1 +
    Math.round(
     ((t.getTime() - r.getTime()) / 864e5 - 3 + ((r.getDay() + 6) % 7)) / 7,
    )
   );
  };
  function b(e) {
   e === void 0 && (e = {});
   var t = {
    formatDate: M({}),
    tableDateFormat: e.tableDateFormat || 'Y-m-d',
    defaults: { minTime: void 0, maxTime: void 0 },
   };
   function r(n) {
    return e.table !== void 0
     ? e.table[t.formatDate(n, t.tableDateFormat)]
     : e.getTimeLimits && e.getTimeLimits(n);
   }
   return function (n) {
    return {
     onReady: function () {
      (t.formatDate = this.formatDate),
       (t.defaults = {
        minTime:
         this.config.minTime && t.formatDate(this.config.minTime, 'H:i'),
        maxTime:
         this.config.maxTime && t.formatDate(this.config.maxTime, 'H:i'),
       });
     },
     onChange: function () {
      var i = this.latestSelectedDateObj,
       l = i && r(i);
      if (i && l !== void 0)
       this.set(l),
        n.config.minTime.setFullYear(i.getFullYear()),
        n.config.maxTime.setFullYear(i.getFullYear()),
        n.config.minTime.setMonth(i.getMonth()),
        n.config.maxTime.setMonth(i.getMonth()),
        n.config.minTime.setDate(i.getDate()),
        n.config.maxTime.setDate(i.getDate()),
        h(i, n.config.maxTime, !1) > 0
         ? n.setDate(
            new Date(i.getTime()).setHours(
             n.config.maxTime.getHours(),
             n.config.maxTime.getMinutes(),
             0,
             0,
            ),
            !1,
           )
         : h(i, n.config.minTime, !1) < 0 &&
           n.setDate(
            new Date(i.getTime()).setHours(
             n.config.minTime.getHours(),
             n.config.minTime.getMinutes(),
             0,
             0,
            ),
            !1,
           );
      else {
       var f = t.defaults || { minTime: void 0, maxTime: void 0 };
       if ((this.set(f), !i)) return;
       var m = n.config,
        s = m.minTime,
        u = m.maxTime;
       s && D(i, s) < 0
        ? n.setDate(
           new Date(i.getTime()).setHours(
            s.getHours(),
            s.getMinutes(),
            s.getSeconds(),
           ),
           !1,
          )
        : u &&
          D(i, u) > 0 &&
          n.setDate(
           new Date(i.getTime()).setHours(
            u.getHours(),
            u.getMinutes(),
            u.getSeconds(),
           ),
          );
      }
     },
    };
   };
  }
  return b;
 });
});
export default H();
