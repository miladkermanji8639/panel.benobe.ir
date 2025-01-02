var Ye = (H, y) => () => (y || H((y = { exports: {} }).exports, y), y.exports);
var Ae = Ye((de, ye) => {
 /* flatpickr v4.3.2,, @license MIT */ (function (H, y) {
  typeof de == 'object' && typeof ye < 'u'
   ? y(de)
   : typeof define == 'function' && define.amd
     ? define(['exports'], y)
     : y((H.flatpickr = {}));
 })(void 0, function (H) {
  var y =
    Object.assign ||
    function (a) {
     for (var r, e = 1, g = arguments.length; e < g; e++)
      for (var v in (r = arguments[e]))
       Object.prototype.hasOwnProperty.call(r, v) && (a[v] = r[v]);
     return a;
    },
   x = function (a) {
    return ('0' + a).slice(-2);
   },
   I = function (a) {
    return a === !0 ? 1 : 0;
   };
  function se(a, r, e) {
   var g;
   return (
    e === void 0 && (e = !1),
    function () {
     var v = this,
      f = arguments;
     g !== null && clearTimeout(g),
      (g = window.setTimeout(function () {
       (g = null), e || a.apply(v, f);
      }, r)),
      e && !g && a.apply(v, f);
    }
   );
  }
  var ue = function (a) {
    return a instanceof Array ? a : [a];
   },
   ne = function () {},
   ae = function (a, r, e) {
    return e.months[r ? 'shorthand' : 'longhand'][a];
   },
   xe = {
    D: ne,
    F: function (a, r, e) {
     a.setMonth(e.months.longhand.indexOf(r));
    },
    G: function (a, r) {
     a.setHours(parseFloat(r));
    },
    H: function (a, r) {
     a.setHours(parseFloat(r));
    },
    J: function (a, r) {
     a.setDate(parseFloat(r));
    },
    K: function (a, r, e) {
     a.setHours(
      (a.getHours() % 12) + 12 * I(new RegExp(e.amPM[1], 'i').test(r)),
     );
    },
    M: function (a, r, e) {
     a.setMonth(e.months.shorthand.indexOf(r));
    },
    S: function (a, r) {
     a.setSeconds(parseFloat(r));
    },
    U: function (a, r) {
     return new Date(1e3 * parseFloat(r));
    },
    W: function (a, r) {
     var e = parseInt(r);
     return new Date(a.getFullYear(), 0, 2 + 7 * (e - 1), 0, 0, 0, 0);
    },
    Y: function (a, r) {
     a.setFullYear(parseFloat(r));
    },
    Z: function (a, r) {
     return new Date(r);
    },
    d: function (a, r) {
     a.setDate(parseFloat(r));
    },
    h: function (a, r) {
     a.setHours(parseFloat(r));
    },
    i: function (a, r) {
     a.setMinutes(parseFloat(r));
    },
    j: function (a, r) {
     a.setDate(parseFloat(r));
    },
    l: ne,
    m: function (a, r) {
     a.setMonth(parseFloat(r) - 1);
    },
    n: function (a, r) {
     a.setMonth(parseFloat(r) - 1);
    },
    s: function (a, r) {
     a.setSeconds(parseFloat(r));
    },
    w: ne,
    y: function (a, r) {
     a.setFullYear(2e3 + parseFloat(r));
    },
   },
   ie = {
    D: '(\\w+)',
    F: '(\\w+)',
    G: '(\\d\\d|\\d)',
    H: '(\\d\\d|\\d)',
    J: '(\\d\\d|\\d)\\w+',
    K: '',
    M: '(\\w+)',
    S: '(\\d\\d|\\d)',
    U: '(.+)',
    W: '(\\d\\d|\\d)',
    Y: '(\\d{4})',
    Z: '(.+)',
    d: '(\\d\\d|\\d)',
    h: '(\\d\\d|\\d)',
    i: '(\\d\\d|\\d)',
    j: '(\\d\\d|\\d)',
    l: '(\\w+)',
    m: '(\\d\\d|\\d)',
    n: '(\\d\\d|\\d)',
    s: '(\\d\\d|\\d)',
    w: '(\\d\\d|\\d)',
    y: '(\\d{2})',
   },
   K = {
    Z: function (a) {
     return a.toISOString();
    },
    D: function (a, r, e) {
     return r.weekdays.shorthand[K.w(a, r, e)];
    },
    F: function (a, r, e) {
     return ae(K.n(a, r, e) - 1, !1, r);
    },
    G: function (a, r, e) {
     return x(K.h(a, r, e));
    },
    H: function (a) {
     return x(a.getHours());
    },
    J: function (a, r) {
     return r.ordinal !== void 0
      ? a.getDate() + r.ordinal(a.getDate())
      : a.getDate();
    },
    K: function (a, r) {
     return r.amPM[I(a.getHours() > 11)];
    },
    M: function (a, r) {
     return ae(a.getMonth(), !0, r);
    },
    S: function (a) {
     return x(a.getSeconds());
    },
    U: function (a) {
     return a.getTime() / 1e3;
    },
    W: function (a, r, e) {
     return e.getWeek(a);
    },
    Y: function (a) {
     return a.getFullYear();
    },
    d: function (a) {
     return x(a.getDate());
    },
    h: function (a) {
     return a.getHours() % 12 ? a.getHours() % 12 : 12;
    },
    i: function (a) {
     return x(a.getMinutes());
    },
    j: function (a) {
     return a.getDate();
    },
    l: function (a, r) {
     return r.weekdays.longhand[a.getDay()];
    },
    m: function (a) {
     return x(a.getMonth() + 1);
    },
    n: function (a) {
     return a.getMonth() + 1;
    },
    s: function (a) {
     return a.getSeconds();
    },
    w: function (a) {
     return a.getDay();
    },
    y: function (a) {
     return String(a.getFullYear()).substring(2);
    },
   },
   B = {
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
    ordinal: function (a) {
     var r = a % 100;
     if (r > 3 && r < 21) return 'th';
     switch (r % 10) {
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
   fe = function (a) {
    var r = a.config,
     e = r === void 0 ? Z : r,
     g = a.l10n,
     v = g === void 0 ? B : g;
    return function (f, b, S) {
     if (e.formatDate !== void 0) return e.formatDate(f, b);
     var C = S || v;
     return b
      .split('')
      .map(function (p, T, Y) {
       return K[p] && Y[T - 1] !== '\\' ? K[p](f, C, e) : p !== '\\' ? p : '';
      })
      .join('');
    };
   },
   me = function (a) {
    var r = a.config,
     e = r === void 0 ? Z : r,
     g = a.l10n,
     v = g === void 0 ? B : g;
    return function (f, b, S) {
     if (f === 0 || f) {
      var C,
       p = f;
      if (f instanceof Date) C = new Date(f.getTime());
      else if (typeof f != 'string' && f.toFixed !== void 0) C = new Date(f);
      else if (typeof f == 'string') {
       var T = b || (e || Z).dateFormat,
        Y = String(f).trim();
       if (Y === 'today') (C = new Date()), (S = !0);
       else if (/Z$/.test(Y) || /GMT$/.test(Y)) C = new Date(f);
       else if (e && e.parseDate) C = e.parseDate(f, T);
       else {
        C =
         e && e.noCalendar
          ? new Date(new Date().setHours(0, 0, 0, 0))
          : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
        for (var L = void 0, X = [], O = 0, U = 0, A = ''; O < T.length; O++) {
         var _ = T[O],
          q = _ === '\\',
          z = T[O - 1] === '\\' || q;
         if (ie[_] && !z) {
          A += ie[_];
          var R = new RegExp(A).exec(f);
          R &&
           (L = !0) &&
           X[_ !== 'Y' ? 'push' : 'unshift']({ fn: xe[_], val: R[++U] });
         } else q || (A += '.');
         X.forEach(function (W) {
          var G = W.fn,
           j = W.val;
          return (C = G(C, j, v) || C);
         });
        }
        C = L ? C : void 0;
       }
      }
      if (C instanceof Date) return S === !0 && C.setHours(0, 0, 0, 0), C;
      e.errorHandler(new Error('Invalid date provided: ' + p));
     }
    };
   };
  function E(a, r, e) {
   return (
    e === void 0 && (e = !0),
    e !== !1
     ? new Date(a.getTime()).setHours(0, 0, 0, 0) -
       new Date(r.getTime()).setHours(0, 0, 0, 0)
     : a.getTime() - r.getTime()
   );
  }
  var Ee = { DAY: 864e5 },
   Z = {
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
    getWeek: function (a) {
     var r = new Date(a.getTime());
     r.setHours(0, 0, 0, 0),
      r.setDate(r.getDate() + 3 - ((r.getDay() + 6) % 7));
     var e = new Date(r.getFullYear(), 0, 4);
     return (
      1 +
      Math.round(
       ((r.getTime() - e.getTime()) / 864e5 - 3 + ((e.getDay() + 6) % 7)) / 7,
      )
     );
    },
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
   };
  function F(a, r, e) {
   if (e === !0) return a.classList.add(r);
   a.classList.remove(r);
  }
  function h(a, r, e) {
   var g = window.document.createElement(a);
   return (
    (r = r || ''),
    (e = e || ''),
    (g.className = r),
    e !== void 0 && (g.textContent = e),
    g
   );
  }
  function Q(a, r) {
   var e = h('div', 'numInputWrapper'),
    g = h('input', 'numInput ' + a),
    v = h('span', 'arrowUp'),
    f = h('span', 'arrowDown');
   if (((g.type = 'text'), (g.pattern = '\\d*'), r !== void 0))
    for (var b in r) g.setAttribute(b, r[b]);
   return e.appendChild(g), e.appendChild(v), e.appendChild(f), e;
  }
  typeof Object.assign != 'function' &&
   (Object.assign = function (a) {
    for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
    if (!a) throw TypeError('Cannot convert undefined or null to object');
    for (
     var g = function (b) {
       b &&
        Object.keys(b).forEach(function (S) {
         return (a[S] = b[S]);
        });
      },
      v = 0,
      f = r;
     v < f.length;
     v++
    )
     g(f[v]);
    return a;
   });
  var D,
   ge = 300;
  function Te(a, r) {
   var e = { config: y({}, D.defaultConfig), l10n: B };
   function g(t) {
    return t.bind(e);
   }
   function v(t) {
    e.config.noCalendar &&
     e.selectedDates.length === 0 &&
     (e.setDate(
      e.config.minDate !== void 0
       ? new Date(e.config.minDate.getTime())
       : new Date().setHours(
          e.config.defaultHour,
          e.config.defaultMinute,
          e.config.defaultSeconds,
          0,
         ),
      !1,
     ),
     f(),
     P()),
     (function (n) {
      n.preventDefault();
      var i = n.type === 'keydown',
       o = n.target;
      e.amPM !== void 0 &&
       n.target === e.amPM &&
       (e.amPM.textContent =
        e.l10n.amPM[I(e.amPM.textContent === e.l10n.amPM[0])]);
      var c = parseFloat(o.getAttribute('data-min')),
       d = parseFloat(o.getAttribute('data-max')),
       l = parseFloat(o.getAttribute('data-step')),
       u = parseInt(o.value, 10),
       m = n.delta || (i ? (n.which === 38 ? 1 : -1) : 0),
       s = u + l * m;
      if (o.value !== void 0 && o.value.length === 2) {
       var M = o === e.hourElement,
        k = o === e.minuteElement;
       s < c
        ? ((s = d + s + I(!M) + (I(M) && I(!e.amPM))),
          k && O(void 0, -1, e.hourElement))
        : s > d &&
          ((s = o === e.hourElement ? s - d - I(!e.amPM) : c),
          k && O(void 0, 1, e.hourElement)),
        e.amPM &&
         M &&
         (l === 1 ? s + u === 23 : Math.abs(s - u) > l) &&
         (e.amPM.textContent =
          e.l10n.amPM[I(e.amPM.textContent === e.l10n.amPM[0])]),
        (o.value = x(s));
      }
     })(t),
     e.selectedDates.length !== 0 &&
      (t.type !== 'input'
       ? (f(), P())
       : setTimeout(function () {
          f(), P();
         }, ge));
   }
   function f() {
    if (e.hourElement !== void 0 && e.minuteElement !== void 0) {
     var t,
      n,
      i = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24,
      o = (parseInt(e.minuteElement.value, 10) || 0) % 60,
      c =
       e.secondElement !== void 0
        ? (parseInt(e.secondElement.value, 10) || 0) % 60
        : 0;
     e.amPM !== void 0 &&
      ((t = i),
      (n = e.amPM.textContent),
      (i = (t % 12) + 12 * I(n === e.l10n.amPM[1])));
     var d =
      e.config.minTime !== void 0 ||
      (e.config.minDate &&
       e.minDateHasTime &&
       e.latestSelectedDateObj &&
       E(e.latestSelectedDateObj, e.config.minDate, !0) === 0);
     if (
      e.config.maxTime !== void 0 ||
      (e.config.maxDate &&
       e.maxDateHasTime &&
       e.latestSelectedDateObj &&
       E(e.latestSelectedDateObj, e.config.maxDate, !0) === 0)
     ) {
      var l = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
      (i = Math.min(i, l.getHours())) === l.getHours() &&
       (o = Math.min(o, l.getMinutes())),
       o === l.getMinutes() && (c = Math.min(c, l.getSeconds()));
     }
     if (d) {
      var u = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
      (i = Math.max(i, u.getHours())) === u.getHours() &&
       (o = Math.max(o, u.getMinutes())),
       o === u.getMinutes() && (c = Math.max(c, u.getSeconds()));
     }
     S(i, o, c);
    }
   }
   function b(t) {
    var n = t || e.latestSelectedDateObj;
    n && S(n.getHours(), n.getMinutes(), n.getSeconds());
   }
   function S(t, n, i) {
    e.latestSelectedDateObj !== void 0 &&
     e.latestSelectedDateObj.setHours(t % 24, n, i || 0, 0),
     e.hourElement &&
      e.minuteElement &&
      !e.isMobile &&
      ((e.hourElement.value = x(
       e.config.time_24hr ? t : ((12 + t) % 12) + 12 * I(t % 12 == 0),
      )),
      (e.minuteElement.value = x(n)),
      e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[I(t >= 12)]),
      e.secondElement !== void 0 && (e.secondElement.value = x(i)));
   }
   function C(t) {
    var n = parseInt(t.target.value) + (t.delta || 0);
    (n.toString().length !== 4 && t.key !== 'Enter') ||
     (e.currentYearElement.blur(), /[^\d]/.test(n.toString()) || G(n));
   }
   function p(t, n, i, o) {
    return n instanceof Array
     ? n.forEach(function (c) {
        return p(t, c, i, o);
       })
     : t instanceof Array
       ? t.forEach(function (c) {
          return p(c, n, i, o);
         })
       : (t.addEventListener(n, i, o),
         void e._handlers.push({ element: t, event: n, handler: i }));
   }
   function T(t) {
    return function (n) {
     n.which === 1 && t(n);
    };
   }
   function Y() {
    w('onChange');
   }
   function L(t) {
    var n =
     t !== void 0
      ? e.parseDate(t)
      : e.latestSelectedDateObj ||
        (e.config.minDate && e.config.minDate > e.now
         ? e.config.minDate
         : e.config.maxDate && e.config.maxDate < e.now
           ? e.config.maxDate
           : e.now);
    try {
     n !== void 0 &&
      ((e.currentYear = n.getFullYear()), (e.currentMonth = n.getMonth()));
    } catch (i) {
     (i.message = 'Invalid date supplied: ' + n), e.config.errorHandler(i);
    }
    e.redraw();
   }
   function X(t) {
    ~t.target.className.indexOf('arrow') &&
     O(t, t.target.classList.contains('arrowUp') ? 1 : -1);
   }
   function O(t, n, i) {
    var o = t && t.target,
     c = i || (o && o.parentNode && o.parentNode.firstChild),
     d = re('increment');
    (d.delta = n), c && c.dispatchEvent(d);
   }
   function U(t, n, i, o) {
    var c,
     d = j(n, !0),
     l = h('span', 'flatpickr-day ' + t, n.getDate().toString());
    return (
     (l.dateObj = n),
     (l.$i = o),
     l.setAttribute('aria-label', e.formatDate(n, e.config.ariaDateFormat)),
     E(n, e.now) === 0 && ((e.todayDateElem = l), l.classList.add('today')),
     d
      ? ((l.tabIndex = -1),
        le(n) &&
         (l.classList.add('selected'),
         (e.selectedDateElem = l),
         e.config.mode === 'range' &&
          (F(
           l,
           'startRange',
           e.selectedDates[0] && E(n, e.selectedDates[0]) === 0,
          ),
          F(
           l,
           'endRange',
           e.selectedDates[1] && E(n, e.selectedDates[1]) === 0,
          ))))
      : (l.classList.add('disabled'),
        e.selectedDates[0] &&
        e.minRangeDate &&
        n > e.minRangeDate &&
        n < e.selectedDates[0]
         ? (e.minRangeDate = n)
         : e.selectedDates[0] &&
           e.maxRangeDate &&
           n < e.maxRangeDate &&
           n > e.selectedDates[0] &&
           (e.maxRangeDate = n)),
     e.config.mode === 'range' &&
      ((c = n),
      !(e.config.mode !== 'range' || e.selectedDates.length < 2) &&
       E(c, e.selectedDates[0]) >= 0 &&
       E(c, e.selectedDates[1]) <= 0 &&
       !le(n) &&
       l.classList.add('inRange'),
      e.selectedDates.length === 1 &&
       e.minRangeDate !== void 0 &&
       e.maxRangeDate !== void 0 &&
       (n < e.minRangeDate || n > e.maxRangeDate) &&
       l.classList.add('notAllowed')),
     e.weekNumbers &&
      t !== 'prevMonthDay' &&
      i % 7 == 1 &&
      e.weekNumbers.insertAdjacentHTML(
       'beforeend',
       "<span class='flatpickr-day'>" + e.config.getWeek(n) + '</span>',
      ),
     w('onDayCreate', l),
     l
    );
   }
   function A(t, n) {
    var i = t + n || 0,
     o =
      t !== void 0
       ? e.days.childNodes[i]
       : e.selectedDateElem || e.todayDateElem || e.days.childNodes[0];
    o === void 0 &&
     n !== 0 &&
     (n > 0
      ? (e.changeMonth(1, !0, !0), (i %= 42))
      : n < 0 && (e.changeMonth(-1, !0, !0), (i += 42))),
     (o = o || e.days.childNodes[i]).focus(),
     e.config.mode === 'range' && oe(o);
   }
   function _() {
    if (e.daysContainer !== void 0) {
     var t =
       (new Date(e.currentYear, e.currentMonth, 1).getDay() -
        e.l10n.firstDayOfWeek +
        7) %
       7,
      n = e.config.mode === 'range',
      i = e.utils.getDaysInMonth((e.currentMonth - 1 + 12) % 12),
      o = e.utils.getDaysInMonth(),
      c = window.document.createDocumentFragment(),
      d = i + 1 - t,
      l = 0;
     for (
      e.weekNumbers &&
       e.weekNumbers.firstChild &&
       (e.weekNumbers.textContent = ''),
       n &&
        ((e.minRangeDate = new Date(e.currentYear, e.currentMonth - 1, d)),
        (e.maxRangeDate = new Date(
         e.currentYear,
         e.currentMonth + 1,
         (42 - t) % o,
        )));
      d <= i;
      d++, l++
     )
      c.appendChild(
       U('prevMonthDay', new Date(e.currentYear, e.currentMonth - 1, d), d, l),
      );
     for (d = 1; d <= o; d++, l++)
      c.appendChild(U('', new Date(e.currentYear, e.currentMonth, d), d, l));
     for (var u = o + 1; u <= 42 - t; u++, l++)
      c.appendChild(
       U(
        'nextMonthDay',
        new Date(e.currentYear, e.currentMonth + 1, u % o),
        u,
        l,
       ),
      );
     n && e.selectedDates.length === 1 && c.childNodes[0]
      ? ((e._hidePrevMonthArrow =
         e._hidePrevMonthArrow ||
         (!!e.minRangeDate && e.minRangeDate > c.childNodes[0].dateObj)),
        (e._hideNextMonthArrow =
         e._hideNextMonthArrow ||
         (!!e.maxRangeDate &&
          e.maxRangeDate < new Date(e.currentYear, e.currentMonth + 1, 1))))
      : V();
     var m = h('div', 'dayContainer');
     m.appendChild(c),
      (function (s) {
       for (; s.firstChild; ) s.removeChild(s.firstChild);
      })(e.daysContainer),
      e.daysContainer.insertBefore(m, e.daysContainer.firstChild),
      (e.days = e.daysContainer.firstChild);
    }
   }
   function q() {
    e.weekdayContainer || (e.weekdayContainer = h('div', 'flatpickr-weekdays'));
    var t = e.l10n.firstDayOfWeek,
     n = e.l10n.weekdays.shorthand.slice();
    return (
     t > 0 &&
      t < n.length &&
      (n = n.splice(t, n.length).concat(n.splice(0, t))),
     (e.weekdayContainer.innerHTML =
      `
    <span class=flatpickr-weekday>
      ` +
      n.join('</span><span class=flatpickr-weekday>') +
      `
    </span>
    `),
     e.weekdayContainer
    );
   }
   function z(t, n, i) {
    n === void 0 && (n = !0), i === void 0 && (i = !1);
    var o = n ? t : t - e.currentMonth;
    (o < 0 && e._hidePrevMonthArrow) ||
     (o > 0 && e._hideNextMonthArrow) ||
     ((e.currentMonth += o),
     (e.currentMonth < 0 || e.currentMonth > 11) &&
      ((e.currentYear += e.currentMonth > 11 ? 1 : -1),
      (e.currentMonth = (e.currentMonth + 12) % 12),
      w('onYearChange')),
     _(),
     w('onMonthChange'),
     V(),
     i &&
      document.activeElement &&
      document.activeElement.$i &&
      A(document.activeElement.$i, 0));
   }
   function R(t) {
    return (
     !(!e.config.appendTo || !e.config.appendTo.contains(t)) ||
     e.calendarContainer.contains(t)
    );
   }
   function W(t) {
    if (e.isOpen && !e.config.inline) {
     var n = R(t.target),
      i =
       t.target === e.input ||
       t.target === e.altInput ||
       e.element.contains(t.target) ||
       (t.path &&
        t.path.indexOf &&
        (~t.path.indexOf(e.input) || ~t.path.indexOf(e.altInput))),
      o =
       t.type === 'blur'
        ? i && t.relatedTarget && !R(t.relatedTarget)
        : !i && !n,
      c = !e.config.ignoredFocusElements.some(function (d) {
       return d.contains(t.target);
      });
     o &&
      c &&
      (e.close(),
      e.config.mode === 'range' &&
       e.selectedDates.length === 1 &&
       (e.clear(!1), e.redraw()));
    }
   }
   function G(t) {
    if (
     !(
      !t ||
      (e.currentYearElement.getAttribute('data-min') &&
       t < parseInt(e.currentYearElement.getAttribute('data-min'))) ||
      (e.currentYearElement.getAttribute('data-max') &&
       t > parseInt(e.currentYearElement.getAttribute('data-max')))
     )
    ) {
     var n = t,
      i = e.currentYear !== n;
     (e.currentYear = n || e.currentYear),
      e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear()
       ? (e.currentMonth = Math.min(
          e.config.maxDate.getMonth(),
          e.currentMonth,
         ))
       : e.config.minDate &&
         e.currentYear === e.config.minDate.getFullYear() &&
         (e.currentMonth = Math.max(
          e.config.minDate.getMonth(),
          e.currentMonth,
         )),
      i && (e.redraw(), w('onYearChange'));
    }
   }
   function j(t, n) {
    n === void 0 && (n = !0);
    var i = e.parseDate(t, void 0, n);
    if (
     (e.config.minDate &&
      i &&
      E(i, e.config.minDate, n !== void 0 ? n : !e.minDateHasTime) < 0) ||
     (e.config.maxDate &&
      i &&
      E(i, e.config.maxDate, n !== void 0 ? n : !e.maxDateHasTime) > 0)
    )
     return !1;
    if (!e.config.enable.length && !e.config.disable.length) return !0;
    if (i === void 0) return !1;
    for (
     var o = e.config.enable.length > 0,
      c = o ? e.config.enable : e.config.disable,
      d = 0,
      l = void 0;
     d < c.length;
     d++
    ) {
     if (
      (typeof (l = c[d]) == 'function' && l(i)) ||
      (l instanceof Date && i !== void 0 && l.getTime() === i.getTime())
     )
      return o;
     if (typeof l == 'string' && i !== void 0) {
      var u = e.parseDate(l, void 0, !0);
      return u && u.getTime() === i.getTime() ? o : !o;
     }
     if (
      typeof l == 'object' &&
      i !== void 0 &&
      l.from &&
      l.to &&
      i.getTime() >= l.from.getTime() &&
      i.getTime() <= l.to.getTime()
     )
      return o;
    }
    return !o;
   }
   function pe(t) {
    var n = t.target === e._input,
     i = R(t.target),
     o = e.config.allowInput,
     c = e.isOpen && (!o || !n),
     d = e.config.inline && n && !o;
    if (t.keyCode === 13 && n) {
     if (o)
      return (
       e.setDate(
        e._input.value,
        !0,
        t.target === e.altInput ? e.config.altFormat : e.config.dateFormat,
       ),
       t.target.blur()
      );
     e.open();
    } else if (i || c || d) {
     var l = !!e.timeContainer && e.timeContainer.contains(t.target);
     switch (t.keyCode) {
      case 13:
       l ? P() : be(t);
       break;
      case 27:
       t.preventDefault(), e.close();
       break;
      case 8:
      case 46:
       n && !e.config.allowInput && (t.preventDefault(), e.clear());
       break;
      case 37:
      case 39:
       if (l) e.hourElement && e.hourElement.focus();
       else if ((t.preventDefault(), e.daysContainer)) {
        var u = t.keyCode === 39 ? 1 : -1;
        t.ctrlKey ? z(u, !0, !0) : A(t.target.$i, u);
       }
       break;
      case 38:
      case 40:
       t.preventDefault();
       var m = t.keyCode === 40 ? 1 : -1;
       e.daysContainer && t.target.$i !== void 0
        ? t.ctrlKey
          ? (G(e.currentYear - m), A(t.target.$i, 0))
          : l || A(t.target.$i, 7 * m)
        : e.config.enableTime &&
          (!l && e.hourElement && e.hourElement.focus(),
          v(t),
          e._debouncedChange());
       break;
      case 9:
       t.target === e.hourElement
        ? (t.preventDefault(), e.minuteElement.select())
        : t.target === e.minuteElement && (e.secondElement || e.amPM)
          ? (t.preventDefault(),
            e.secondElement !== void 0
             ? e.secondElement.focus()
             : e.amPM !== void 0 && e.amPM.focus())
          : t.target === e.secondElement &&
            e.amPM &&
            (t.preventDefault(), e.amPM.focus());
     }
     switch (t.key) {
      case e.l10n.amPM[0].charAt(0):
      case e.l10n.amPM[0].charAt(0).toLowerCase():
       e.amPM !== void 0 &&
        t.target === e.amPM &&
        ((e.amPM.textContent = e.l10n.amPM[0]), f(), P());
       break;
      case e.l10n.amPM[1].charAt(0):
      case e.l10n.amPM[1].charAt(0).toLowerCase():
       e.amPM !== void 0 &&
        t.target === e.amPM &&
        ((e.amPM.textContent = e.l10n.amPM[1]), f(), P());
     }
     w('onKeyDown', t);
    }
   }
   function oe(t) {
    if (
     e.selectedDates.length === 1 &&
     t.classList.contains('flatpickr-day') &&
     !t.classList.contains('disabled') &&
     e.minRangeDate !== void 0 &&
     e.maxRangeDate !== void 0
    ) {
     for (
      var n = t.dateObj,
       i = e.parseDate(e.selectedDates[0], void 0, !0),
       o = Math.min(n.getTime(), e.selectedDates[0].getTime()),
       c = Math.max(n.getTime(), e.selectedDates[0].getTime()),
       d = !1,
       l = o;
      l < c;
      l += Ee.DAY
     )
      if (!j(new Date(l))) {
       d = !0;
       break;
      }
     for (
      var u = function (M, k) {
        var N = k.getTime(),
         te = N < e.minRangeDate.getTime() || N > e.maxRangeDate.getTime(),
         J = e.days.childNodes[M];
        if (te)
         return (
          J.classList.add('notAllowed'),
          ['inRange', 'startRange', 'endRange'].forEach(function (ce) {
           J.classList.remove(ce);
          }),
          'continue'
         );
        if (d && !te) return 'continue';
        ['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(
         function (ce) {
          J.classList.remove(ce);
         },
        );
        var _e = Math.max(e.minRangeDate.getTime(), o),
         Pe = Math.min(e.maxRangeDate.getTime(), c);
        t.classList.add(n < e.selectedDates[0] ? 'startRange' : 'endRange'),
         i < n && N === i.getTime()
          ? J.classList.add('startRange')
          : i > n && N === i.getTime() && J.classList.add('endRange'),
         N >= _e && N <= Pe && J.classList.add('inRange');
       },
       m = 0,
       s = e.days.childNodes[m].dateObj;
      m < 42;
      m++, s = e.days.childNodes[m] && e.days.childNodes[m].dateObj
     )
      u(m, s);
    }
   }
   function Ie() {
    !e.isOpen || e.config.static || e.config.inline || ee();
   }
   function he(t) {
    return function (n) {
     var i = (e.config['_' + t + 'Date'] = e.parseDate(n, e.config.dateFormat)),
      o = e.config['_' + (t === 'min' ? 'max' : 'min') + 'Date'];
     i !== void 0 &&
      (e[t === 'min' ? 'minDateHasTime' : 'maxDateHasTime'] =
       i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0),
      e.selectedDates &&
       ((e.selectedDates = e.selectedDates.filter(function (c) {
        return j(c);
       })),
       e.selectedDates.length || t !== 'min' || b(i),
       P()),
      e.daysContainer &&
       (De(),
       i !== void 0
        ? (e.currentYearElement[t] = i.getFullYear().toString())
        : e.currentYearElement.removeAttribute(t),
       (e.currentYearElement.disabled =
        !!o && i !== void 0 && o.getFullYear() === i.getFullYear()));
    };
   }
   function ve() {
    typeof e.config.locale != 'object' &&
     D.l10ns[e.config.locale] === void 0 &&
     e.config.errorHandler(
      new Error('flatpickr: invalid locale ' + e.config.locale),
     ),
     (e.l10n = y(
      {},
      D.l10ns.default,
      typeof e.config.locale == 'object'
       ? e.config.locale
       : e.config.locale !== 'default'
         ? D.l10ns[e.config.locale]
         : void 0,
     )),
     (ie.K =
      '(' +
      e.l10n.amPM[0] +
      '|' +
      e.l10n.amPM[1] +
      '|' +
      e.l10n.amPM[0].toLowerCase() +
      '|' +
      e.l10n.amPM[1].toLowerCase() +
      ')'),
     (e.formatDate = fe(e));
   }
   function ee(t) {
    if (e.calendarContainer !== void 0) {
     w('onPreCalendarPosition');
     var n = t || e._positionElement,
      i = Array.prototype.reduce.call(
       e.calendarContainer.children,
       function (N, te) {
        return N + te.offsetHeight;
       },
       0,
      ),
      o = e.calendarContainer.offsetWidth,
      c = e.config.position,
      d = n.getBoundingClientRect(),
      l = window.innerHeight - d.bottom,
      u = c === 'above' || (c !== 'below' && l < i && d.top > i),
      m = window.pageYOffset + d.top + (u ? -i - 2 : n.offsetHeight + 2);
     if (
      (F(e.calendarContainer, 'arrowTop', !u),
      F(e.calendarContainer, 'arrowBottom', u),
      !e.config.inline)
     ) {
      var s = window.pageXOffset + d.left,
       M = window.document.body.offsetWidth - d.right,
       k = s + o > window.document.body.offsetWidth;
      F(e.calendarContainer, 'rightMost', k),
       e.config.static ||
        ((e.calendarContainer.style.top = m + 'px'),
        k
         ? ((e.calendarContainer.style.left = 'auto'),
           (e.calendarContainer.style.right = M + 'px'))
         : ((e.calendarContainer.style.left = s + 'px'),
           (e.calendarContainer.style.right = 'auto')));
     }
    }
   }
   function De() {
    e.config.noCalendar || e.isMobile || (q(), V(), _());
   }
   function be(t) {
    t.preventDefault(), t.stopPropagation();
    var n = (function s(M, k) {
     return k(M) ? M : M.parentNode ? s(M.parentNode, k) : void 0;
    })(t.target, function (s) {
     return (
      s.classList &&
      s.classList.contains('flatpickr-day') &&
      !s.classList.contains('disabled') &&
      !s.classList.contains('notAllowed')
     );
    });
    if (n !== void 0) {
     var i = n,
      o = (e.latestSelectedDateObj = new Date(i.dateObj.getTime())),
      c = o.getMonth() !== e.currentMonth && e.config.mode !== 'range';
     if (((e.selectedDateElem = i), e.config.mode === 'single'))
      e.selectedDates = [o];
     else if (e.config.mode === 'multiple') {
      var d = le(o);
      d ? e.selectedDates.splice(parseInt(d), 1) : e.selectedDates.push(o);
     } else
      e.config.mode === 'range' &&
       (e.selectedDates.length === 2 && e.clear(),
       e.selectedDates.push(o),
       E(o, e.selectedDates[0], !0) !== 0 &&
        e.selectedDates.sort(function (s, M) {
         return s.getTime() - M.getTime();
        }));
     if ((f(), c)) {
      var l = e.currentYear !== o.getFullYear();
      (e.currentYear = o.getFullYear()),
       (e.currentMonth = o.getMonth()),
       l && w('onYearChange'),
       w('onMonthChange');
     }
     if (
      (_(),
      e.config.minDate &&
       e.minDateHasTime &&
       e.config.enableTime &&
       E(o, e.config.minDate) === 0 &&
       b(e.config.minDate),
      P(),
      e.config.enableTime &&
       setTimeout(function () {
        return (e.showTimeInput = !0);
       }, 50),
      e.config.mode === 'range' &&
       (e.selectedDates.length === 1
        ? (oe(i),
          (e._hidePrevMonthArrow =
           e._hidePrevMonthArrow ||
           (e.minRangeDate !== void 0 &&
            e.minRangeDate > e.days.childNodes[0].dateObj)),
          (e._hideNextMonthArrow =
           e._hideNextMonthArrow ||
           (e.maxRangeDate !== void 0 &&
            e.maxRangeDate < new Date(e.currentYear, e.currentMonth + 1, 1))))
        : V()),
      c ? e.selectedDateElem && e.selectedDateElem.focus() : A(i.$i, 0),
      e.hourElement !== void 0 &&
       setTimeout(function () {
        return e.hourElement !== void 0 && e.hourElement.select();
       }, 451),
      e.config.closeOnSelect)
     ) {
      var u = e.config.mode === 'single' && !e.config.enableTime,
       m =
        e.config.mode === 'range' &&
        e.selectedDates.length === 2 &&
        !e.config.enableTime;
      (u || m) &&
       (e._input.focus(),
       window.navigator.userAgent.indexOf('MSIE') !== -1 ||
       navigator.msMaxTouchPoints !== void 0
        ? setTimeout(e.close, 0)
        : e.close());
     }
     Y();
    }
   }
   (e.parseDate = me({ config: e.config, l10n: e.l10n })),
    (e._handlers = []),
    (e._bind = p),
    (e._setHoursFromDate = b),
    (e.changeMonth = z),
    (e.changeYear = G),
    (e.clear = function (t) {
     t === void 0 && (t = !0),
      (e.input.value = ''),
      e.altInput && (e.altInput.value = ''),
      e.mobileInput && (e.mobileInput.value = ''),
      (e.selectedDates = []),
      (e.latestSelectedDateObj = void 0),
      (e.showTimeInput = !1),
      e.config.enableTime &&
       (e.config.minDate !== void 0
        ? b(e.config.minDate)
        : S(
           e.config.defaultHour,
           e.config.defaultMinute,
           e.config.defaultSeconds,
          )),
      e.redraw(),
      t && w('onChange');
    }),
    (e.close = function () {
     (e.isOpen = !1),
      e.isMobile ||
       (e.calendarContainer.classList.remove('open'),
       e._input.classList.remove('active')),
      w('onClose');
    }),
    (e._createElement = h),
    (e.destroy = function () {
     e.config !== void 0 && w('onDestroy');
     for (var t = e._handlers.length; t--; ) {
      var n = e._handlers[t];
      n.element.removeEventListener(n.event, n.handler);
     }
     (e._handlers = []),
      e.mobileInput
       ? (e.mobileInput.parentNode &&
          e.mobileInput.parentNode.removeChild(e.mobileInput),
         (e.mobileInput = void 0))
       : e.calendarContainer &&
         e.calendarContainer.parentNode &&
         e.calendarContainer.parentNode.removeChild(e.calendarContainer),
      e.altInput &&
       ((e.input.type = 'text'),
       e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput),
       delete e.altInput),
      e.input &&
       ((e.input.type = e.input._type),
       e.input.classList.remove('flatpickr-input'),
       e.input.removeAttribute('readonly'),
       (e.input.value = '')),
      [
       '_showTimeInput',
       'latestSelectedDateObj',
       '_hideNextMonthArrow',
       '_hidePrevMonthArrow',
       '__hideNextMonthArrow',
       '__hidePrevMonthArrow',
       'isMobile',
       'isOpen',
       'selectedDateElem',
       'minDateHasTime',
       'maxDateHasTime',
       'days',
       'daysContainer',
       '_input',
       '_positionElement',
       'innerContainer',
       'rContainer',
       'monthNav',
       'todayDateElem',
       'calendarContainer',
       'weekdayContainer',
       'prevMonthNav',
       'nextMonthNav',
       'currentMonthElement',
       'currentYearElement',
       'navigationCurrentMonth',
       'selectedDateElem',
       'config',
      ].forEach(function (i) {
       try {
        delete e[i];
       } catch {}
      });
    }),
    (e.isEnabled = j),
    (e.jumpToDate = L),
    (e.open = function (t, n) {
     if ((n === void 0 && (n = e._input), e.isMobile))
      return (
       t && (t.preventDefault(), t.target && t.target.blur()),
       setTimeout(function () {
        e.mobileInput !== void 0 && e.mobileInput.click();
       }, 0),
       void w('onOpen')
      );
     if (!(e._input.disabled || e.config.inline)) {
      var i = e.isOpen;
      (e.isOpen = !0),
       i ||
        (e.calendarContainer.classList.add('open'),
        e._input.classList.add('active'),
        w('onOpen'),
        ee(n));
     }
    }),
    (e.redraw = De),
    (e.set = function (t, n) {
     t !== null && typeof t == 'object'
      ? Object.assign(e.config, t)
      : ((e.config[t] = n),
        we[t] !== void 0 &&
         we[t].forEach(function (i) {
          return i();
         })),
      e.redraw(),
      L();
    }),
    (e.setDate = function (t, n, i) {
     if (
      (n === void 0 && (n = !1),
      i === void 0 && (i = e.config.dateFormat),
      t !== 0 && !t)
     )
      return e.clear(n);
     Me(t, i),
      (e.showTimeInput = e.selectedDates.length > 0),
      (e.latestSelectedDateObj = e.selectedDates[0]),
      e.redraw(),
      L(),
      b(),
      P(n),
      n && w('onChange');
    }),
    (e.toggle = function () {
     if (e.isOpen) return e.close();
     e.open();
    });
   var we = { locale: [ve] };
   function Me(t, n) {
    var i = [];
    if (t instanceof Array)
     i = t.map(function (o) {
      return e.parseDate(o, n);
     });
    else if (t instanceof Date || typeof t == 'number') i = [e.parseDate(t, n)];
    else if (typeof t == 'string')
     switch (e.config.mode) {
      case 'single':
       i = [e.parseDate(t, n)];
       break;
      case 'multiple':
       i = t.split(e.config.conjunction).map(function (o) {
        return e.parseDate(o, n);
       });
       break;
      case 'range':
       i = t.split(e.l10n.rangeSeparator).map(function (o) {
        return e.parseDate(o, n);
       });
     }
    else
     e.config.errorHandler(
      new Error('Invalid date supplied: ' + JSON.stringify(t)),
     );
    (e.selectedDates = i.filter(function (o) {
     return o instanceof Date && j(o, !1);
    })),
     e.config.mode === 'range' &&
      e.selectedDates.sort(function (o, c) {
       return o.getTime() - c.getTime();
      });
   }
   function Ce(t) {
    return t
     .map(function (n) {
      return typeof n == 'string' || typeof n == 'number' || n instanceof Date
       ? e.parseDate(n, void 0, !0)
       : n && typeof n == 'object' && n.from && n.to
         ? { from: e.parseDate(n.from, void 0), to: e.parseDate(n.to, void 0) }
         : n;
     })
     .filter(function (n) {
      return n;
     });
   }
   function w(t, n) {
    var i = e.config[t];
    if (i !== void 0 && i.length > 0)
     for (var o = 0; i[o] && o < i.length; o++)
      i[o](e.selectedDates, e.input.value, e, n);
    t === 'onChange' &&
     (e.input.dispatchEvent(re('change')), e.input.dispatchEvent(re('input')));
   }
   function re(t) {
    var n = document.createEvent('Event');
    return n.initEvent(t, !0, !0), n;
   }
   function le(t) {
    for (var n = 0; n < e.selectedDates.length; n++)
     if (E(e.selectedDates[n], t) === 0) return '' + n;
    return !1;
   }
   function V() {
    e.config.noCalendar ||
     e.isMobile ||
     !e.monthNav ||
     ((e.currentMonthElement.textContent =
      ae(e.currentMonth, e.config.shorthandCurrentMonth, e.l10n) + ' '),
     (e.currentYearElement.value = e.currentYear.toString()),
     (e._hidePrevMonthArrow =
      e.config.minDate !== void 0 &&
      (e.currentYear === e.config.minDate.getFullYear()
       ? e.currentMonth <= e.config.minDate.getMonth()
       : e.currentYear < e.config.minDate.getFullYear())),
     (e._hideNextMonthArrow =
      e.config.maxDate !== void 0 &&
      (e.currentYear === e.config.maxDate.getFullYear()
       ? e.currentMonth + 1 > e.config.maxDate.getMonth()
       : e.currentYear > e.config.maxDate.getFullYear())));
   }
   function P(t) {
    if ((t === void 0 && (t = !0), !e.selectedDates.length)) return e.clear(t);
    e.mobileInput !== void 0 &&
     e.mobileFormatStr &&
     (e.mobileInput.value =
      e.latestSelectedDateObj !== void 0
       ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr)
       : '');
    var n =
     e.config.mode !== 'range' ? e.config.conjunction : e.l10n.rangeSeparator;
    (e.input.value = e.selectedDates
     .map(function (i) {
      return e.formatDate(i, e.config.dateFormat);
     })
     .join(n)),
     e.altInput !== void 0 &&
      (e.altInput.value = e.selectedDates
       .map(function (i) {
        return e.formatDate(i, e.config.altFormat);
       })
       .join(n)),
     t !== !1 && w('onValueUpdate');
   }
   function Se(t) {
    t.preventDefault();
    var n = e.prevMonthNav.contains(t.target),
     i = e.nextMonthNav.contains(t.target);
    n || i
     ? z(n ? -1 : 1)
     : t.target === e.currentYearElement
       ? e.currentYearElement.select()
       : t.target.classList.contains('arrowUp')
         ? e.changeYear(e.currentYear + 1)
         : t.target.classList.contains('arrowDown') &&
           e.changeYear(e.currentYear - 1);
   }
   return (
    (function () {
     (e.element = e.input = a),
      (e.isOpen = !1),
      (function () {
       var n = [
         'wrap',
         'weekNumbers',
         'allowInput',
         'clickOpens',
         'time_24hr',
         'enableTime',
         'noCalendar',
         'altInput',
         'shorthandCurrentMonth',
         'inline',
         'static',
         'enableSeconds',
         'disableMobile',
        ],
        i = [
         'onChange',
         'onClose',
         'onDayCreate',
         'onDestroy',
         'onKeyDown',
         'onMonthChange',
         'onOpen',
         'onParseConfig',
         'onReady',
         'onValueUpdate',
         'onYearChange',
         'onPreCalendarPosition',
        ],
        o = y({}, r, JSON.parse(JSON.stringify(a.dataset || {}))),
        c = {};
       (e.config.parseDate = o.parseDate),
        (e.config.formatDate = o.formatDate),
        Object.defineProperty(e.config, 'enable', {
         get: function () {
          return e.config._enable || [];
         },
         set: function (s) {
          e.config._enable = Ce(s);
         },
        }),
        Object.defineProperty(e.config, 'disable', {
         get: function () {
          return e.config._disable || [];
         },
         set: function (s) {
          e.config._disable = Ce(s);
         },
        }),
        !o.dateFormat &&
         o.enableTime &&
         (c.dateFormat = o.noCalendar
          ? 'H:i' + (o.enableSeconds ? ':S' : '')
          : D.defaultConfig.dateFormat +
            ' H:i' +
            (o.enableSeconds ? ':S' : '')),
        o.altInput &&
         o.enableTime &&
         !o.altFormat &&
         (c.altFormat = o.noCalendar
          ? 'h:i' + (o.enableSeconds ? ':S K' : ' K')
          : D.defaultConfig.altFormat +
            ' h:i' +
            (o.enableSeconds ? ':S' : '') +
            ' K'),
        Object.defineProperty(e.config, 'minDate', {
         get: function () {
          return e.config._minDate;
         },
         set: he('min'),
        }),
        Object.defineProperty(e.config, 'maxDate', {
         get: function () {
          return e.config._maxDate;
         },
         set: he('max'),
        });
       var d = function (s) {
        return function (M) {
         e.config[s === 'min' ? '_minTime' : '_maxTime'] = e.parseDate(
          M,
          'H:i',
         );
        };
       };
       Object.defineProperty(e.config, 'minTime', {
        get: function () {
         return e.config._minTime;
        },
        set: d('min'),
       }),
        Object.defineProperty(e.config, 'maxTime', {
         get: function () {
          return e.config._maxTime;
         },
         set: d('max'),
        }),
        Object.assign(e.config, c, o);
       for (var l = 0; l < n.length; l++)
        e.config[n[l]] = e.config[n[l]] === !0 || e.config[n[l]] === 'true';
       for (var l = i.length; l--; )
        e.config[i[l]] !== void 0 &&
         (e.config[i[l]] = ue(e.config[i[l]] || []).map(g));
       e.config.mode === 'time' &&
        ((e.config.noCalendar = !0), (e.config.enableTime = !0));
       for (var l = 0; l < e.config.plugins.length; l++) {
        var u = e.config.plugins[l](e) || {};
        for (var m in u)
         ~i.indexOf(m)
          ? (e.config[m] = ue(u[m]).map(g).concat(e.config[m]))
          : o[m] === void 0 && (e.config[m] = u[m]);
       }
       (e.isMobile =
        !e.config.disableMobile &&
        !e.config.inline &&
        e.config.mode === 'single' &&
        !e.config.disable.length &&
        !e.config.enable.length &&
        !e.config.weekNumbers &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
         navigator.userAgent,
        )),
        w('onParseConfig');
      })(),
      ve(),
      (e.input = e.config.wrap ? a.querySelector('[data-input]') : a),
      e.input
       ? ((e.input._type = e.input.type),
         (e.input.type = 'text'),
         e.input.classList.add('flatpickr-input'),
         (e._input = e.input),
         e.config.altInput &&
          ((e.altInput = h(
           e.input.nodeName,
           e.input.className + ' ' + e.config.altInputClass,
          )),
          (e._input = e.altInput),
          (e.altInput.placeholder = e.input.placeholder),
          (e.altInput.disabled = e.input.disabled),
          (e.altInput.required = e.input.required),
          (e.altInput.tabIndex = e.input.tabIndex),
          (e.altInput.type = 'text'),
          (e.input.type = 'hidden'),
          !e.config.static &&
           e.input.parentNode &&
           e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)),
         e.config.allowInput || e._input.setAttribute('readonly', 'readonly'),
         (e._positionElement = e.config.positionElement || e._input))
       : e.config.errorHandler(new Error('Invalid input element specified')),
      (function () {
       (e.selectedDates = []), (e.now = new Date());
       var n = e.config.defaultDate || e.input.value;
       n && Me(n, e.config.dateFormat);
       var i = e.selectedDates.length
        ? e.selectedDates[0]
        : e.config.minDate && e.config.minDate.getTime() > e.now.getTime()
          ? e.config.minDate
          : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime()
            ? e.config.maxDate
            : e.now;
       (e.currentYear = i.getFullYear()),
        (e.currentMonth = i.getMonth()),
        e.selectedDates.length &&
         (e.latestSelectedDateObj = e.selectedDates[0]),
        e.config.minTime !== void 0 &&
         (e.config.minTime = e.parseDate(e.config.minTime, 'H:i')),
        e.config.maxTime !== void 0 &&
         (e.config.maxTime = e.parseDate(e.config.maxTime, 'H:i')),
        (e.minDateHasTime =
         !!e.config.minDate &&
         (e.config.minDate.getHours() > 0 ||
          e.config.minDate.getMinutes() > 0 ||
          e.config.minDate.getSeconds() > 0)),
        (e.maxDateHasTime =
         !!e.config.maxDate &&
         (e.config.maxDate.getHours() > 0 ||
          e.config.maxDate.getMinutes() > 0 ||
          e.config.maxDate.getSeconds() > 0)),
        Object.defineProperty(e, 'showTimeInput', {
         get: function () {
          return e._showTimeInput;
         },
         set: function (o) {
          (e._showTimeInput = o),
           e.calendarContainer && F(e.calendarContainer, 'showTimeInput', o),
           e.isOpen && ee();
         },
        });
      })(),
      (e.utils = {
       getDaysInMonth: function (n, i) {
        if (
         (n === void 0 && (n = e.currentMonth),
         i === void 0 && (i = e.currentYear),
         e.config.locale === 'fa')
        ) {
         var o = i - Math.floor(n / 12),
          c = n - 12 * Math.floor(n / 12);
         return (
          c < 0 ? ((c += 12), (o -= 1)) : c === 0 && (c = 12),
          c < 6
           ? 31
           : c < 11 ||
               (682 * (((o - (o > 0 ? 474 : 473)) % 2820) + 474 + 38)) % 2816 <
                682
             ? 30
             : 29
         );
        }
        return n === 1 && ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0)
         ? 29
         : e.l10n.daysInMonth[n];
       },
      }),
      e.isMobile ||
       (function () {
        var n = window.document.createDocumentFragment();
        if (
         ((e.calendarContainer = h('div', 'flatpickr-calendar')),
         (e.calendarContainer.tabIndex = -1),
         !e.config.noCalendar)
        ) {
         if (
          (n.appendChild(
           (function () {
            var u = window.document.createDocumentFragment();
            (e.monthNav = h('div', 'flatpickr-month')),
             (e.prevMonthNav = h('span', 'flatpickr-prev-month')),
             (e.prevMonthNav.innerHTML = e.config.prevArrow),
             (e.currentMonthElement = h('span', 'cur-month'));
            var m = Q('cur-year', { tabindex: '-1' });
            return (
             (e.currentYearElement = m.childNodes[0]),
             e.config.minDate &&
              e.currentYearElement.setAttribute(
               'data-min',
               e.config.minDate.getFullYear().toString(),
              ),
             e.config.maxDate &&
              (e.currentYearElement.setAttribute(
               'data-max',
               e.config.maxDate.getFullYear().toString(),
              ),
              (e.currentYearElement.disabled =
               !!e.config.minDate &&
               e.config.minDate.getFullYear() ===
                e.config.maxDate.getFullYear())),
             (e.nextMonthNav = h('span', 'flatpickr-next-month')),
             (e.nextMonthNav.innerHTML = e.config.nextArrow),
             (e.navigationCurrentMonth = h('div', 'flatpickr-current-month')),
             e.navigationCurrentMonth.appendChild(e.currentMonthElement),
             e.navigationCurrentMonth.appendChild(m),
             u.appendChild(e.prevMonthNav),
             u.appendChild(e.navigationCurrentMonth),
             u.appendChild(e.nextMonthNav),
             e.monthNav.appendChild(u),
             Object.defineProperty(e, '_hidePrevMonthArrow', {
              get: function () {
               return e.__hidePrevMonthArrow;
              },
              set: function (s) {
               e.__hidePrevMonthArrow !== s &&
                (e.prevMonthNav.style.display = s ? 'none' : 'block'),
                (e.__hidePrevMonthArrow = s);
              },
             }),
             Object.defineProperty(e, '_hideNextMonthArrow', {
              get: function () {
               return e.__hideNextMonthArrow;
              },
              set: function (s) {
               e.__hideNextMonthArrow !== s &&
                (e.nextMonthNav.style.display = s ? 'none' : 'block'),
                (e.__hideNextMonthArrow = s);
              },
             }),
             V(),
             e.monthNav
            );
           })(),
          ),
          (e.innerContainer = h('div', 'flatpickr-innerContainer')),
          e.config.weekNumbers)
         ) {
          var i = (function () {
            e.calendarContainer.classList.add('hasWeeks');
            var u = h('div', 'flatpickr-weekwrapper');
            u.appendChild(
             h('span', 'flatpickr-weekday', e.l10n.weekAbbreviation),
            );
            var m = h('div', 'flatpickr-weeks');
            return u.appendChild(m), { weekWrapper: u, weekNumbers: m };
           })(),
           o = i.weekWrapper,
           c = i.weekNumbers;
          e.innerContainer.appendChild(o),
           (e.weekNumbers = c),
           (e.weekWrapper = o);
         }
         (e.rContainer = h('div', 'flatpickr-rContainer')),
          e.rContainer.appendChild(q()),
          e.daysContainer ||
           ((e.daysContainer = h('div', 'flatpickr-days')),
           (e.daysContainer.tabIndex = -1)),
          _(),
          e.rContainer.appendChild(e.daysContainer),
          e.innerContainer.appendChild(e.rContainer),
          n.appendChild(e.innerContainer);
        }
        e.config.enableTime &&
         n.appendChild(
          (function () {
           e.calendarContainer.classList.add('hasTime'),
            e.config.noCalendar &&
             e.calendarContainer.classList.add('noCalendar'),
            (e.timeContainer = h('div', 'flatpickr-time')),
            (e.timeContainer.tabIndex = -1);
           var u = h('span', 'flatpickr-time-separator', ':'),
            m = Q('flatpickr-hour');
           e.hourElement = m.childNodes[0];
           var s = Q('flatpickr-minute');
           if (
            ((e.minuteElement = s.childNodes[0]),
            (e.hourElement.tabIndex = e.minuteElement.tabIndex = -1),
            (e.hourElement.value = x(
             e.latestSelectedDateObj
              ? e.latestSelectedDateObj.getHours()
              : e.config.time_24hr
                ? e.config.defaultHour
                : (function (k) {
                   switch (k % 24) {
                    case 0:
                    case 12:
                     return 12;
                    default:
                     return k % 12;
                   }
                  })(e.config.defaultHour),
            )),
            (e.minuteElement.value = x(
             e.latestSelectedDateObj
              ? e.latestSelectedDateObj.getMinutes()
              : e.config.defaultMinute,
            )),
            e.hourElement.setAttribute(
             'data-step',
             e.config.hourIncrement.toString(),
            ),
            e.minuteElement.setAttribute(
             'data-step',
             e.config.minuteIncrement.toString(),
            ),
            e.hourElement.setAttribute(
             'data-min',
             e.config.time_24hr ? '0' : '1',
            ),
            e.hourElement.setAttribute(
             'data-max',
             e.config.time_24hr ? '23' : '12',
            ),
            e.minuteElement.setAttribute('data-min', '0'),
            e.minuteElement.setAttribute('data-max', '59'),
            e.timeContainer.appendChild(m),
            e.timeContainer.appendChild(u),
            e.timeContainer.appendChild(s),
            e.config.time_24hr && e.timeContainer.classList.add('time24hr'),
            e.config.enableSeconds)
           ) {
            e.timeContainer.classList.add('hasSeconds');
            var M = Q('flatpickr-second');
            (e.secondElement = M.childNodes[0]),
             (e.secondElement.value = x(
              e.latestSelectedDateObj
               ? e.latestSelectedDateObj.getSeconds()
               : e.config.defaultSeconds,
             )),
             e.secondElement.setAttribute(
              'data-step',
              e.minuteElement.getAttribute('data-step'),
             ),
             e.secondElement.setAttribute(
              'data-min',
              e.minuteElement.getAttribute('data-min'),
             ),
             e.secondElement.setAttribute(
              'data-max',
              e.minuteElement.getAttribute('data-max'),
             ),
             e.timeContainer.appendChild(
              h('span', 'flatpickr-time-separator', ':'),
             ),
             e.timeContainer.appendChild(M);
           }
           return (
            e.config.time_24hr ||
             ((e.amPM = h(
              'span',
              'flatpickr-am-pm',
              e.l10n.amPM[
               I(
                (e.latestSelectedDateObj
                 ? e.hourElement.value
                 : e.config.defaultHour) > 11,
               )
              ],
             )),
             (e.amPM.title = e.l10n.toggleTitle),
             (e.amPM.tabIndex = -1),
             e.timeContainer.appendChild(e.amPM)),
            e.timeContainer
           );
          })(),
         ),
         F(e.calendarContainer, 'rangeMode', e.config.mode === 'range'),
         e.calendarContainer.appendChild(n);
        var d =
         e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
        if (
         (e.config.inline || e.config.static) &&
         (e.calendarContainer.classList.add(
          e.config.inline ? 'inline' : 'static',
         ),
         e.config.inline &&
          (!d && e.element.parentNode
           ? e.element.parentNode.insertBefore(
              e.calendarContainer,
              e._input.nextSibling,
             )
           : e.config.appendTo !== void 0 &&
             e.config.appendTo.appendChild(e.calendarContainer)),
         e.config.static)
        ) {
         var l = h('div', 'flatpickr-wrapper');
         e.element.parentNode &&
          e.element.parentNode.insertBefore(l, e.element),
          l.appendChild(e.element),
          e.altInput && l.appendChild(e.altInput),
          l.appendChild(e.calendarContainer);
        }
        e.config.static ||
         e.config.inline ||
         (e.config.appendTo !== void 0
          ? e.config.appendTo
          : window.document.body
         ).appendChild(e.calendarContainer);
       })(),
      (function () {
       if (
        (e.config.wrap &&
         ['open', 'close', 'toggle', 'clear'].forEach(function (i) {
          Array.prototype.forEach.call(
           e.element.querySelectorAll('[data-' + i + ']'),
           function (o) {
            return p(o, 'click', e[i]);
           },
          );
         }),
        e.isMobile)
       )
        (function () {
         var i = e.config.enableTime
          ? e.config.noCalendar
            ? 'time'
            : 'datetime-local'
          : 'date';
         (e.mobileInput = h('input', e.input.className + ' flatpickr-mobile')),
          (e.mobileInput.step = e.input.getAttribute('step') || 'any'),
          (e.mobileInput.tabIndex = 1),
          (e.mobileInput.type = i),
          (e.mobileInput.disabled = e.input.disabled),
          (e.mobileInput.required = e.input.required),
          (e.mobileInput.placeholder = e.input.placeholder),
          (e.mobileFormatStr =
           i === 'datetime-local'
            ? 'Y-m-d\\TH:i:S'
            : i === 'date'
              ? 'Y-m-d'
              : 'H:i:S'),
          e.selectedDates.length &&
           (e.mobileInput.defaultValue = e.mobileInput.value =
            e.formatDate(e.selectedDates[0], e.mobileFormatStr)),
          e.config.minDate &&
           (e.mobileInput.min = e.formatDate(e.config.minDate, 'Y-m-d')),
          e.config.maxDate &&
           (e.mobileInput.max = e.formatDate(e.config.maxDate, 'Y-m-d')),
          (e.input.type = 'hidden'),
          e.altInput !== void 0 && (e.altInput.type = 'hidden');
         try {
          e.input.parentNode &&
           e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
         } catch {}
         p(e.mobileInput, 'change', function (o) {
          e.setDate(o.target.value, !1, e.mobileFormatStr),
           w('onChange'),
           w('onClose');
         });
        })();
       else {
        var n = se(Ie, 50);
        (e._debouncedChange = se(Y, ge)),
         e.daysContainer &&
          !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
          p(e.daysContainer, 'mouseover', function (i) {
           e.config.mode === 'range' && oe(i.target);
          }),
         p(window.document.body, 'keydown', pe),
         e.config.static || p(e._input, 'keydown', pe),
         e.config.inline || e.config.static || p(window, 'resize', n),
         window.ontouchstart !== void 0 && p(window.document, 'touchstart', W),
         p(window.document, 'mousedown', T(W)),
         p(window.document, 'focus', W, { capture: !0 }),
         e.config.clickOpens === !0 &&
          (p(e._input, 'focus', e.open), p(e._input, 'mousedown', T(e.open))),
         e.daysContainer !== void 0 &&
          (p(e.monthNav, 'mousedown', T(Se)),
          p(e.monthNav, ['keyup', 'increment'], C),
          p(e.daysContainer, 'mousedown', T(be))),
         e.timeContainer !== void 0 &&
          e.minuteElement !== void 0 &&
          e.hourElement !== void 0 &&
          (p(e.timeContainer, ['input', 'increment'], v),
          p(e.timeContainer, 'mousedown', T(X)),
          p(e.timeContainer, ['input', 'increment'], e._debouncedChange, {
           passive: !0,
          }),
          p([e.hourElement, e.minuteElement], ['focus', 'click'], function (i) {
           return i.target.select();
          }),
          e.secondElement !== void 0 &&
           p(e.secondElement, 'focus', function () {
            return e.secondElement && e.secondElement.select();
           }),
          e.amPM !== void 0 &&
           p(
            e.amPM,
            'mousedown',
            T(function (i) {
             v(i), Y();
            }),
           ));
       }
      })(),
      (e.selectedDates.length || e.config.noCalendar) &&
       (e.config.enableTime &&
        b(
         e.config.noCalendar
          ? e.latestSelectedDateObj || e.config.minDate
          : void 0,
        ),
       P(!1)),
      (e.showTimeInput = e.selectedDates.length > 0 || e.config.noCalendar),
      e.weekWrapper !== void 0 &&
       e.daysContainer !== void 0 &&
       ((e.calendarContainer.style.visibility = 'hidden'),
       (e.calendarContainer.style.display = 'block'),
       (e.calendarContainer.style.width =
        e.daysContainer.offsetWidth + e.weekWrapper.offsetWidth + 'px'),
       (e.calendarContainer.style.visibility = 'visible'),
       (e.calendarContainer.style.display = null));
     var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
     !e.isMobile && t && ee(), w('onReady');
    })(),
    e
   );
  }
  function $(a, r) {
   for (
    var e = Array.prototype.slice.call(a), g = [], v = 0;
    v < e.length;
    v++
   ) {
    var f = e[v];
    try {
     if (f.getAttribute('data-fp-omit') !== null) continue;
     f._flatpickr !== void 0 &&
      (f._flatpickr.destroy(), (f._flatpickr = void 0)),
      (f._flatpickr = Te(f, r || {})),
      g.push(f._flatpickr);
    } catch (b) {
     console.error(b);
    }
   }
   return g.length === 1 ? g[0] : g;
  }
  typeof HTMLElement < 'u' &&
   ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
    function (a) {
     return $(this, a);
    }),
   (HTMLElement.prototype.flatpickr = function (a) {
    return $([this], a);
   })),
   (D = function (a, r) {
    return a instanceof NodeList
     ? $(a, r)
     : $(typeof a == 'string' ? window.document.querySelectorAll(a) : [a], r);
   }),
   typeof window == 'object' && (window.flatpickr = D),
   (D.defaultConfig = Z),
   (D.l10ns = { en: y({}, B), default: y({}, B) }),
   (D.localize = function (a) {
    D.l10ns.default = y({}, D.l10ns.default, a);
   }),
   (D.setDefaults = function (a) {
    D.defaultConfig = y({}, D.defaultConfig, a);
   }),
   (D.parseDate = me({})),
   (D.formatDate = fe({})),
   (D.compareDates = E),
   typeof jQuery < 'u' &&
    (jQuery.fn.flatpickr = function (a) {
     return $(this, a);
    }),
   (Date.prototype.fp_incr = function (a) {
    return new Date(
     this.getFullYear(),
     this.getMonth(),
     this.getDate() + (typeof a == 'string' ? parseInt(a, 10) : a),
    );
   });
  var ke = D;
  (H.default = ke), Object.defineProperty(H, '__esModule', { value: !0 });
 });
});
export default Ae();
