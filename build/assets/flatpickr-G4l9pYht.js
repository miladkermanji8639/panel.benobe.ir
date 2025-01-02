var rn = (H, w) => () => (w || H((w = { exports: {} }).exports, w), w.exports);
var on = rn((me, _e) => {
 /* flatpickr v4.3.2, @license MIT */ (function (H, w) {
  typeof me == 'object' && typeof _e < 'u'
   ? w(me)
   : typeof define == 'function' && define.amd
     ? define(['exports'], w)
     : w((H.flatpickr = {}));
 })(void 0, function (H) {
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var w =
    Object.assign ||
    function (r) {
     for (var e, d = 1, v = arguments.length; d < v; d++) {
      e = arguments[d];
      for (var c in e)
       Object.prototype.hasOwnProperty.call(e, c) && (r[c] = e[c]);
     }
     return r;
    },
   C = function (i) {
    return ('0' + i).slice(-2);
   },
   I = function (i) {
    return i === !0 ? 1 : 0;
   };
  function pe(i, r, e) {
   e === void 0 && (e = !1);
   var d;
   return function () {
    var v = this,
     c = arguments;
    d !== null && clearTimeout(d),
     (d = window.setTimeout(function () {
      (d = null), e || i.apply(v, c);
     }, r)),
     e && !d && i.apply(v, c);
   };
  }
  var he = function (i) {
    return i instanceof Array ? i : [i];
   },
   ae = function () {},
   ie = function (i, r, e) {
    return e.months[r ? 'shorthand' : 'longhand'][i];
   },
   Ne = {
    D: ae,
    F: function (i, r, e) {
     i.setMonth(e.months.longhand.indexOf(r));
    },
    G: function (i, r) {
     i.setHours(parseFloat(r));
    },
    H: function (i, r) {
     i.setHours(parseFloat(r));
    },
    J: function (i, r) {
     i.setDate(parseFloat(r));
    },
    K: function (i, r, e) {
     i.setHours(
      (i.getHours() % 12) + 12 * I(new RegExp(e.amPM[1], 'i').test(r)),
     );
    },
    M: function (i, r, e) {
     i.setMonth(e.months.shorthand.indexOf(r));
    },
    S: function (i, r) {
     i.setSeconds(parseFloat(r));
    },
    U: function (i, r) {
     return new JDate(parseFloat(r) * 1e3);
    },
    W: function (i, r) {
     var e = parseInt(r);
     return new JDate(i.getFullYear(), 0, 2 + (e - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (i, r) {
     i.setFullYear(parseFloat(r));
    },
    Z: function (i, r) {
     return new JDate(r);
    },
    d: function (i, r) {
     i.setDate(parseFloat(r));
    },
    h: function (i, r) {
     i.setHours(parseFloat(r));
    },
    i: function (i, r) {
     i.setMinutes(parseFloat(r));
    },
    j: function (i, r) {
     i.setDate(parseFloat(r));
    },
    l: ae,
    m: function (i, r) {
     i.setMonth(parseFloat(r) - 1);
    },
    n: function (i, r) {
     i.setMonth(parseFloat(r) - 1);
    },
    s: function (i, r) {
     i.setSeconds(parseFloat(r));
    },
    w: ae,
    y: function (i, r) {
     i.setFullYear(2e3 + parseFloat(r));
    },
   },
   re = {
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
    Z: function (i) {
     return i.toISOString();
    },
    D: function (i, r, e) {
     return r.weekdays.shorthand[K.w(i, r, e)];
    },
    F: function (i, r, e) {
     return ie(K.n(i, r, e) - 1, !1, r);
    },
    G: function (i, r, e) {
     return C(K.h(i, r, e));
    },
    H: function (i) {
     return C(i.getHours());
    },
    J: function (i, r) {
     return r.ordinal !== void 0
      ? i.getDate() + r.ordinal(i.getDate())
      : i.getDate();
    },
    K: function (i, r) {
     return r.amPM[I(i.getHours() > 11)];
    },
    M: function (i, r) {
     return ie(i.getMonth(), !0, r);
    },
    S: function (i) {
     return C(i.getSeconds());
    },
    U: function (i) {
     return i.getTime() / 1e3;
    },
    W: function (i, r, e) {
     return e.getWeek(i);
    },
    Y: function (i) {
     return i.getFullYear();
    },
    d: function (i) {
     return C(i.getDate());
    },
    h: function (i) {
     return i.getHours() % 12 ? i.getHours() % 12 : 12;
    },
    i: function (i) {
     return C(i.getMinutes());
    },
    j: function (i) {
     return i.getDate();
    },
    l: function (i, r) {
     return r.weekdays.longhand[i.getDay()];
    },
    m: function (i) {
     return C(i.getMonth() + 1);
    },
    n: function (i) {
     return i.getMonth() + 1;
    },
    s: function (i) {
     return i.getSeconds();
    },
    w: function (i) {
     return i.getDay();
    },
    y: function (i) {
     return String(i.getFullYear()).substring(2);
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
    ordinal: function (i) {
     var r = i % 100;
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
   De = function (i) {
    var r = i.config,
     e = r === void 0 ? G : r,
     d = i.l10n,
     v = d === void 0 ? B : d;
    return function (c, M, _) {
     if (e.formatDate !== void 0) return e.formatDate(c, M);
     var h = _ || v;
     return M.split('')
      .map(function (x, E, O) {
       return K[x] && O[E - 1] !== '\\' ? K[x](c, h, e) : x !== '\\' ? x : '';
      })
      .join('');
    };
   },
   ve = function (i) {
    var r = i.config,
     e = r === void 0 ? G : r,
     d = i.l10n,
     v = d === void 0 ? B : d;
    return function (c, M, _) {
     if (!(c !== 0 && !c)) {
      var h,
       x = c;
      if (c instanceof Date) h = new JDate(c.getTime());
      else if (typeof c != 'string' && c.toFixed !== void 0) h = new JDate(c);
      else if (typeof c == 'string') {
       var E = M || (e || G).dateFormat,
        O = String(c).trim();
       if (O === 'today') (h = new JDate()), (_ = !0);
       else if (/Z$/.test(O) || /GMT$/.test(O)) h = new JDate(c);
       else if (e && e.parseDate) h = e.parseDate(c, E);
       else {
        h =
         !e || !e.noCalendar
          ? new JDate(new JDate().getFullYear(), 0, 1, 0, 0, 0, 0)
          : new JDate(new JDate().setHours(0, 0, 0, 0));
        for (var Q = void 0, p = [], S = 0, $ = 0, U = ''; S < E.length; S++) {
         var P = E[S],
          X = P === '\\',
          q = E[S - 1] === '\\' || X;
         if (re[P] && !q) {
          U += re[P];
          var ee = new RegExp(U).exec(c);
          ee &&
           (Q = !0) &&
           p[P !== 'Y' ? 'push' : 'unshift']({ fn: Ne[P], val: ee[++$] });
         } else X || (U += '.');
         p.forEach(function (R) {
          var Y = R.fn,
           L = R.val;
          return (h = Y(h, L, v) || h);
         });
        }
        h = Q ? h : void 0;
       }
      }
      if (!(h instanceof Date)) {
       e.errorHandler(new Error('Invalid date provided: ' + x));
       return;
      }
      return _ === !0 && h.setHours(0, 0, 0, 0), h;
     }
    };
   };
  function y(i, r, e) {
   return (
    e === void 0 && (e = !0),
    e !== !1
     ? new JDate(i.getTime()).setHours(0, 0, 0, 0) -
       new JDate(r.getTime()).setHours(0, 0, 0, 0)
     : i.getTime() - r.getTime()
   );
  }
  var Oe = function (i) {
    var r = new JDate(i.getTime());
    r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + 3 - ((r.getDay() + 6) % 7));
    var e = new JDate(r.getFullYear(), 0, 4);
    return (
     1 +
     Math.round(
      ((r.getTime() - e.getTime()) / 864e5 - 3 + ((e.getDay() + 6) % 7)) / 7,
     )
    );
   },
   Pe = { DAY: 864e5 },
   G = {
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
    getWeek: Oe,
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
  function F(i, r, e) {
   if (e === !0) return i.classList.add(r);
   i.classList.remove(r);
  }
  function m(i, r, e) {
   var d = window.document.createElement(i);
   return (
    (r = r || ''),
    (e = e || ''),
    (d.className = r),
    e !== void 0 && (d.textContent = e),
    d
   );
  }
  function Ae(i) {
   for (; i.firstChild; ) i.removeChild(i.firstChild);
  }
  function be(i, r) {
   if (r(i)) return i;
   if (i.parentNode) return be(i.parentNode, r);
  }
  function Z(i, r) {
   var e = m('div', 'numInputWrapper'),
    d = m('input', 'numInput ' + i),
    v = m('span', 'arrowUp'),
    c = m('span', 'arrowDown');
   if (((d.type = 'text'), (d.pattern = '\\d*'), r !== void 0))
    for (var M in r) d.setAttribute(M, r[M]);
   return e.appendChild(d), e.appendChild(v), e.appendChild(c), e;
  }
  typeof Object.assign != 'function' &&
   (Object.assign = function (i) {
    for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
    if (!i) throw TypeError('Cannot convert undefined or null to object');
    for (
     var d = function (_) {
       _ &&
        Object.keys(_).forEach(function (h) {
         return (i[h] = _[h]);
        });
      },
      v = 0,
      c = r;
     v < c.length;
     v++
    ) {
     var M = c[v];
     d(M);
    }
    return i;
   });
  var we = 300;
  function Fe(i, r) {
   var e = { config: w({}, D.defaultConfig), l10n: B };
   (e.parseDate = ve({ config: e.config, l10n: e.l10n })),
    (e._handlers = []),
    (e._bind = p),
    (e._setHoursFromDate = E),
    (e.changeMonth = oe),
    (e.changeYear = fe),
    (e.clear = Le),
    (e.close = Je),
    (e._createElement = m),
    (e.destroy = We),
    (e.isEnabled = V),
    (e.jumpToDate = P),
    (e.open = Be),
    (e.redraw = Ee),
    (e.set = qe),
    (e.setDate = Ve),
    (e.toggle = Qe);
   function d() {
    e.utils = {
     getDaysInMonth: function (n, t) {
      if (
       (n === void 0 && (n = e.currentMonth),
       t === void 0 && (t = e.currentYear),
       e.config.locale === 'fa')
      ) {
       var a = t - Math.floor(n / 12),
        o = n - Math.floor(n / 12) * 12;
       return (
        o < 0 ? ((o += 12), (a -= 1)) : o === 0 && (o = 12),
        o < 6
         ? 31
         : o < 11 ||
             ((((a - (a > 0 ? 474 : 473)) % 2820) + 474 + 38) * 682) % 2816 <
              682
           ? 30
           : 29
       );
      }
      return n === 1 && ((t % 4 === 0 && t % 100 !== 0) || t % 400 === 0)
       ? 29
       : e.l10n.daysInMonth[n];
     },
    };
   }
   function v() {
    (e.element = e.input = i),
     (e.isOpen = !1),
     $e(),
     xe(),
     Ge(),
     ze(),
     d(),
     e.isMobile || ee(),
     U(),
     (e.selectedDates.length || e.config.noCalendar) &&
      (e.config.enableTime &&
       E(
        e.config.noCalendar
         ? e.latestSelectedDateObj || e.config.minDate
         : void 0,
       ),
      N(!1)),
     (e.showTimeInput = e.selectedDates.length > 0 || e.config.noCalendar),
     e.weekWrapper !== void 0 &&
      e.daysContainer !== void 0 &&
      ((e.calendarContainer.style.visibility = 'hidden'),
      (e.calendarContainer.style.display = 'block'),
      (e.calendarContainer.style.width =
       e.daysContainer.offsetWidth + e.weekWrapper.offsetWidth + 'px'),
      (e.calendarContainer.style.visibility = 'visible'),
      (e.calendarContainer.style.display = null));
    var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && n && ne(), b('onReady');
   }
   function c(n) {
    return n.bind(e);
   }
   function M(n) {
    e.config.noCalendar &&
     e.selectedDates.length === 0 &&
     (e.setDate(
      e.config.minDate !== void 0
       ? new JDate(e.config.minDate.getTime())
       : new JDate().setHours(
          e.config.defaultHour,
          e.config.defaultMinute,
          e.config.defaultSeconds,
          0,
         ),
      !1,
     ),
     x(),
     N()),
     nn(n),
     e.selectedDates.length !== 0 &&
      (n.type !== 'input'
       ? (x(), N())
       : setTimeout(function () {
          x(), N();
         }, we));
   }
   function _(n, t) {
    return (n % 12) + 12 * I(t === e.l10n.amPM[1]);
   }
   function h(n) {
    switch (n % 24) {
     case 0:
     case 12:
      return 12;
     default:
      return n % 12;
    }
   }
   function x() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
     var n = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24,
      t = (parseInt(e.minuteElement.value, 10) || 0) % 60,
      a =
       e.secondElement !== void 0
        ? (parseInt(e.secondElement.value, 10) || 0) % 60
        : 0;
     e.amPM !== void 0 && (n = _(n, e.amPM.textContent));
     var o =
       e.config.minTime !== void 0 ||
       (e.config.minDate &&
        e.minDateHasTime &&
        e.latestSelectedDateObj &&
        y(e.latestSelectedDateObj, e.config.minDate, !0) === 0),
      u =
       e.config.maxTime !== void 0 ||
       (e.config.maxDate &&
        e.maxDateHasTime &&
        e.latestSelectedDateObj &&
        y(e.latestSelectedDateObj, e.config.maxDate, !0) === 0);
     if (u) {
      var l = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
      (n = Math.min(n, l.getHours())),
       n === l.getHours() && (t = Math.min(t, l.getMinutes())),
       t === l.getMinutes() && (a = Math.min(a, l.getSeconds()));
     }
     if (o) {
      var f = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
      (n = Math.max(n, f.getHours())),
       n === f.getHours() && (t = Math.max(t, f.getMinutes())),
       t === f.getMinutes() && (a = Math.max(a, f.getSeconds()));
     }
     O(n, t, a);
    }
   }
   function E(n) {
    var t = n || e.latestSelectedDateObj;
    t && O(t.getHours(), t.getMinutes(), t.getSeconds());
   }
   function O(n, t, a) {
    e.latestSelectedDateObj !== void 0 &&
     e.latestSelectedDateObj.setHours(n % 24, t, a || 0, 0),
     !(!e.hourElement || !e.minuteElement || e.isMobile) &&
      ((e.hourElement.value = C(
       e.config.time_24hr ? n : ((12 + n) % 12) + 12 * I(n % 12 === 0),
      )),
      (e.minuteElement.value = C(t)),
      e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[I(n >= 12)]),
      e.secondElement !== void 0 && (e.secondElement.value = C(a)));
   }
   function Q(n) {
    var t = parseInt(n.target.value) + (n.delta || 0);
    (t.toString().length === 4 || n.key === 'Enter') &&
     (e.currentYearElement.blur(), /[^\d]/.test(t.toString()) || fe(t));
   }
   function p(n, t, a, o) {
    if (t instanceof Array)
     return t.forEach(function (u) {
      return p(n, u, a, o);
     });
    if (n instanceof Array)
     return n.forEach(function (u) {
      return p(u, t, a, o);
     });
    n.addEventListener(t, a, o),
     e._handlers.push({ element: n, event: t, handler: a });
   }
   function S(n) {
    return function (t) {
     t.which === 1 && n(t);
    };
   }
   function $() {
    b('onChange');
   }
   function U() {
    if (
     (e.config.wrap &&
      ['open', 'close', 'toggle', 'clear'].forEach(function (a) {
       Array.prototype.forEach.call(
        e.element.querySelectorAll('[data-' + a + ']'),
        function (o) {
         return p(o, 'click', e[a]);
        },
       );
      }),
     e.isMobile)
    ) {
     Ze();
     return;
    }
    var n = pe(Ke, 50);
    if (
     ((e._debouncedChange = pe($, we)),
     e.daysContainer &&
      !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      p(e.daysContainer, 'mouseover', function (a) {
       e.config.mode === 'range' && ce(a.target);
      }),
     p(window.document.body, 'keydown', Ce),
     e.config.static || p(e._input, 'keydown', Ce),
     !e.config.inline && !e.config.static && p(window, 'resize', n),
     window.ontouchstart !== void 0 && p(window.document, 'touchstart', ue),
     p(window.document, 'mousedown', S(ue)),
     p(window.document, 'focus', ue, { capture: !0 }),
     e.config.clickOpens === !0 &&
      (p(e._input, 'focus', e.open), p(e._input, 'mousedown', S(e.open))),
     e.daysContainer !== void 0 &&
      (p(e.monthNav, 'mousedown', S(en)),
      p(e.monthNav, ['keyup', 'increment'], Q),
      p(e.daysContainer, 'mousedown', S(Te))),
     e.timeContainer !== void 0 &&
      e.minuteElement !== void 0 &&
      e.hourElement !== void 0)
    ) {
     var t = function (a) {
      return a.target.select();
     };
     p(e.timeContainer, ['input', 'increment'], M),
      p(e.timeContainer, 'mousedown', S(X)),
      p(e.timeContainer, ['input', 'increment'], e._debouncedChange, {
       passive: !0,
      }),
      p([e.hourElement, e.minuteElement], ['focus', 'click'], t),
      e.secondElement !== void 0 &&
       p(e.secondElement, 'focus', function () {
        return e.secondElement && e.secondElement.select();
       }),
      e.amPM !== void 0 &&
       p(
        e.amPM,
        'mousedown',
        S(function (a) {
         M(a), $();
        }),
       );
    }
   }
   function P(n) {
    var t =
     n !== void 0
      ? e.parseDate(n)
      : e.latestSelectedDateObj ||
        (e.config.minDate && e.config.minDate > e.now
         ? e.config.minDate
         : e.config.maxDate && e.config.maxDate < e.now
           ? e.config.maxDate
           : e.now);
    try {
     t !== void 0 &&
      ((e.currentYear = t.getFullYear()), (e.currentMonth = t.getMonth()));
    } catch (a) {
     (a.message = 'Invalid date supplied: ' + t), e.config.errorHandler(a);
    }
    e.redraw();
   }
   function X(n) {
    ~n.target.className.indexOf('arrow') &&
     q(n, n.target.classList.contains('arrowUp') ? 1 : -1);
   }
   function q(n, t, a) {
    var o = n && n.target,
     u = a || (o && o.parentNode && o.parentNode.firstChild),
     l = de('increment');
    (l.delta = t), u && u.dispatchEvent(l);
   }
   function ee() {
    var n = window.document.createDocumentFragment();
    if (
     ((e.calendarContainer = m('div', 'flatpickr-calendar')),
     (e.calendarContainer.tabIndex = -1),
     !e.config.noCalendar)
    ) {
     if (
      (n.appendChild(He()),
      (e.innerContainer = m('div', 'flatpickr-innerContainer')),
      e.config.weekNumbers)
     ) {
      var t = Re(),
       a = t.weekWrapper,
       o = t.weekNumbers;
      e.innerContainer.appendChild(a), (e.weekNumbers = o), (e.weekWrapper = a);
     }
     (e.rContainer = m('div', 'flatpickr-rContainer')),
      e.rContainer.appendChild(Me()),
      e.daysContainer ||
       ((e.daysContainer = m('div', 'flatpickr-days')),
       (e.daysContainer.tabIndex = -1)),
      L(),
      e.rContainer.appendChild(e.daysContainer),
      e.innerContainer.appendChild(e.rContainer),
      n.appendChild(e.innerContainer);
    }
    e.config.enableTime && n.appendChild(je()),
     F(e.calendarContainer, 'rangeMode', e.config.mode === 'range'),
     e.calendarContainer.appendChild(n);
    var u =
     e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if (
     (e.config.inline || e.config.static) &&
     (e.calendarContainer.classList.add(e.config.inline ? 'inline' : 'static'),
     e.config.inline &&
      (!u && e.element.parentNode
       ? e.element.parentNode.insertBefore(
          e.calendarContainer,
          e._input.nextSibling,
         )
       : e.config.appendTo !== void 0 &&
         e.config.appendTo.appendChild(e.calendarContainer)),
     e.config.static)
    ) {
     var l = m('div', 'flatpickr-wrapper');
     e.element.parentNode && e.element.parentNode.insertBefore(l, e.element),
      l.appendChild(e.element),
      e.altInput && l.appendChild(e.altInput),
      l.appendChild(e.calendarContainer);
    }
    !e.config.static &&
     !e.config.inline &&
     (e.config.appendTo !== void 0
      ? e.config.appendTo
      : window.document.body
     ).appendChild(e.calendarContainer);
   }
   function R(n, t, a, o) {
    var u = V(t, !0),
     l = m('span', 'flatpickr-day ' + n, t.getDate().toString());
    return (
     (l.dateObj = t),
     (l.$i = o),
     l.setAttribute('aria-label', e.formatDate(t, e.config.ariaDateFormat)),
     y(t, e.now) === 0 && ((e.todayDateElem = l), l.classList.add('today')),
     u
      ? ((l.tabIndex = -1),
        se(t) &&
         (l.classList.add('selected'),
         (e.selectedDateElem = l),
         e.config.mode === 'range' &&
          (F(
           l,
           'startRange',
           e.selectedDates[0] && y(t, e.selectedDates[0]) === 0,
          ),
          F(
           l,
           'endRange',
           e.selectedDates[1] && y(t, e.selectedDates[1]) === 0,
          ))))
      : (l.classList.add('disabled'),
        e.selectedDates[0] &&
        e.minRangeDate &&
        t > e.minRangeDate &&
        t < e.selectedDates[0]
         ? (e.minRangeDate = t)
         : e.selectedDates[0] &&
           e.maxRangeDate &&
           t < e.maxRangeDate &&
           t > e.selectedDates[0] &&
           (e.maxRangeDate = t)),
     e.config.mode === 'range' &&
      (Xe(t) && !se(t) && l.classList.add('inRange'),
      e.selectedDates.length === 1 &&
       e.minRangeDate !== void 0 &&
       e.maxRangeDate !== void 0 &&
       (t < e.minRangeDate || t > e.maxRangeDate) &&
       l.classList.add('notAllowed')),
     e.weekNumbers &&
      n !== 'prevMonthDay' &&
      a % 7 === 1 &&
      e.weekNumbers.insertAdjacentHTML(
       'beforeend',
       "<span class='flatpickr-day'>" + e.config.getWeek(t) + '</span>',
      ),
     b('onDayCreate', l),
     l
    );
   }
   function Y(n, t) {
    var a = n + t || 0,
     o =
      n !== void 0
       ? e.days.childNodes[a]
       : e.selectedDateElem || e.todayDateElem || e.days.childNodes[0],
     u = function () {
      (o = o || e.days.childNodes[a]),
       o.focus(),
       e.config.mode === 'range' && ce(o);
     };
    o === void 0 &&
     t !== 0 &&
     (t > 0
      ? (e.changeMonth(1, !0, !0), (a = a % 42))
      : t < 0 && (e.changeMonth(-1, !0, !0), (a += 42))),
     u();
   }
   function L() {
    if (e.daysContainer !== void 0) {
     var n =
       (new JDate(e.currentYear, e.currentMonth, 1).getDay() -
        e.l10n.firstDayOfWeek +
        7) %
       7,
      t = e.config.mode === 'range',
      a = e.utils.getDaysInMonth((e.currentMonth - 1 + 12) % 12),
      o = e.utils.getDaysInMonth(),
      u = window.document.createDocumentFragment(),
      l = a + 1 - n,
      f = 0;
     for (
      e.weekNumbers &&
       e.weekNumbers.firstChild &&
       (e.weekNumbers.textContent = ''),
       t &&
        ((e.minRangeDate = new JDate(e.currentYear, e.currentMonth - 1, l)),
        (e.maxRangeDate = new JDate(
         e.currentYear,
         e.currentMonth + 1,
         (42 - n) % o,
        )));
      l <= a;
      l++, f++
     )
      u.appendChild(
       R('prevMonthDay', new JDate(e.currentYear, e.currentMonth - 1, l), l, f),
      );
     for (l = 1; l <= o; l++, f++)
      u.appendChild(R('', new JDate(e.currentYear, e.currentMonth, l), l, f));
     for (var g = o + 1; g <= 42 - n; g++, f++)
      u.appendChild(
       R(
        'nextMonthDay',
        new JDate(e.currentYear, e.currentMonth + 1, g % o),
        g,
        f,
       ),
      );
     t && e.selectedDates.length === 1 && u.childNodes[0]
      ? ((e._hidePrevMonthArrow =
         e._hidePrevMonthArrow ||
         (!!e.minRangeDate && e.minRangeDate > u.childNodes[0].dateObj)),
        (e._hideNextMonthArrow =
         e._hideNextMonthArrow ||
         (!!e.maxRangeDate &&
          e.maxRangeDate < new JDate(e.currentYear, e.currentMonth + 1, 1))))
      : z();
     var s = m('div', 'dayContainer');
     s.appendChild(u),
      Ae(e.daysContainer),
      e.daysContainer.insertBefore(s, e.daysContainer.firstChild),
      (e.days = e.daysContainer.firstChild);
    }
   }
   function He() {
    var n = window.document.createDocumentFragment();
    (e.monthNav = m('div', 'flatpickr-month')),
     (e.prevMonthNav = m('span', 'flatpickr-prev-month')),
     (e.prevMonthNav.innerHTML = e.config.prevArrow),
     (e.currentMonthElement = m('span', 'cur-month'));
    var t = Z('cur-year', { tabindex: '-1' });
    return (
     (e.currentYearElement = t.childNodes[0]),
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
       e.config.minDate.getFullYear() === e.config.maxDate.getFullYear())),
     (e.nextMonthNav = m('span', 'flatpickr-next-month')),
     (e.nextMonthNav.innerHTML = e.config.nextArrow),
     (e.navigationCurrentMonth = m('div', 'flatpickr-current-month')),
     e.navigationCurrentMonth.appendChild(e.currentMonthElement),
     e.navigationCurrentMonth.appendChild(t),
     n.appendChild(e.prevMonthNav),
     n.appendChild(e.navigationCurrentMonth),
     n.appendChild(e.nextMonthNav),
     e.monthNav.appendChild(n),
     Object.defineProperty(e, '_hidePrevMonthArrow', {
      get: function () {
       return e.__hidePrevMonthArrow;
      },
      set: function (a) {
       e.__hidePrevMonthArrow !== a &&
        (e.prevMonthNav.style.display = a ? 'none' : 'block'),
        (e.__hidePrevMonthArrow = a);
      },
     }),
     Object.defineProperty(e, '_hideNextMonthArrow', {
      get: function () {
       return e.__hideNextMonthArrow;
      },
      set: function (a) {
       e.__hideNextMonthArrow !== a &&
        (e.nextMonthNav.style.display = a ? 'none' : 'block'),
        (e.__hideNextMonthArrow = a);
      },
     }),
     z(),
     e.monthNav
    );
   }
   function je() {
    e.calendarContainer.classList.add('hasTime'),
     e.config.noCalendar && e.calendarContainer.classList.add('noCalendar'),
     (e.timeContainer = m('div', 'flatpickr-time')),
     (e.timeContainer.tabIndex = -1);
    var n = m('span', 'flatpickr-time-separator', ':'),
     t = Z('flatpickr-hour');
    e.hourElement = t.childNodes[0];
    var a = Z('flatpickr-minute');
    if (
     ((e.minuteElement = a.childNodes[0]),
     (e.hourElement.tabIndex = e.minuteElement.tabIndex = -1),
     (e.hourElement.value = C(
      e.latestSelectedDateObj
       ? e.latestSelectedDateObj.getHours()
       : e.config.time_24hr
         ? e.config.defaultHour
         : h(e.config.defaultHour),
     )),
     (e.minuteElement.value = C(
      e.latestSelectedDateObj
       ? e.latestSelectedDateObj.getMinutes()
       : e.config.defaultMinute,
     )),
     e.hourElement.setAttribute('data-step', e.config.hourIncrement.toString()),
     e.minuteElement.setAttribute(
      'data-step',
      e.config.minuteIncrement.toString(),
     ),
     e.hourElement.setAttribute('data-min', e.config.time_24hr ? '0' : '1'),
     e.hourElement.setAttribute('data-max', e.config.time_24hr ? '23' : '12'),
     e.minuteElement.setAttribute('data-min', '0'),
     e.minuteElement.setAttribute('data-max', '59'),
     e.timeContainer.appendChild(t),
     e.timeContainer.appendChild(n),
     e.timeContainer.appendChild(a),
     e.config.time_24hr && e.timeContainer.classList.add('time24hr'),
     e.config.enableSeconds)
    ) {
     e.timeContainer.classList.add('hasSeconds');
     var o = Z('flatpickr-second');
     (e.secondElement = o.childNodes[0]),
      (e.secondElement.value = C(
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
      e.timeContainer.appendChild(m('span', 'flatpickr-time-separator', ':')),
      e.timeContainer.appendChild(o);
    }
    return (
     e.config.time_24hr ||
      ((e.amPM = m(
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
   }
   function Me() {
    e.weekdayContainer || (e.weekdayContainer = m('div', 'flatpickr-weekdays'));
    var n = e.l10n.firstDayOfWeek,
     t = e.l10n.weekdays.shorthand.slice();
    return (
     n > 0 &&
      n < t.length &&
      (t = t.splice(n, t.length).concat(t.splice(0, n))),
     (e.weekdayContainer.innerHTML =
      `
    <span class=flatpickr-weekday>
      ` +
      t.join('</span><span class=flatpickr-weekday>') +
      `
    </span>
    `),
     e.weekdayContainer
    );
   }
   function Re() {
    e.calendarContainer.classList.add('hasWeeks');
    var n = m('div', 'flatpickr-weekwrapper');
    n.appendChild(m('span', 'flatpickr-weekday', e.l10n.weekAbbreviation));
    var t = m('div', 'flatpickr-weeks');
    return n.appendChild(t), { weekWrapper: n, weekNumbers: t };
   }
   function oe(n, t, a) {
    t === void 0 && (t = !0), a === void 0 && (a = !1);
    var o = t ? n : n - e.currentMonth;
    if (
     !((o < 0 && e._hidePrevMonthArrow) || (o > 0 && e._hideNextMonthArrow)) &&
     ((e.currentMonth += o),
     (e.currentMonth < 0 || e.currentMonth > 11) &&
      ((e.currentYear += e.currentMonth > 11 ? 1 : -1),
      (e.currentMonth = (e.currentMonth + 12) % 12),
      b('onYearChange')),
     L(),
     b('onMonthChange'),
     z(),
     a && document.activeElement && document.activeElement.$i)
    ) {
     var u = document.activeElement.$i;
     Y(u, 0);
    }
   }
   function Le(n) {
    n === void 0 && (n = !0),
     (e.input.value = ''),
     e.altInput && (e.altInput.value = ''),
     e.mobileInput && (e.mobileInput.value = ''),
     (e.selectedDates = []),
     (e.latestSelectedDateObj = void 0),
     (e.showTimeInput = !1),
     e.config.enableTime &&
      (e.config.minDate !== void 0
       ? E(e.config.minDate)
       : O(
          e.config.defaultHour,
          e.config.defaultMinute,
          e.config.defaultSeconds,
         )),
     e.redraw(),
     n && b('onChange');
   }
   function Je() {
    (e.isOpen = !1),
     e.isMobile ||
      (e.calendarContainer.classList.remove('open'),
      e._input.classList.remove('active')),
     b('onClose');
   }
   function We() {
    e.config !== void 0 && b('onDestroy');
    for (var n = e._handlers.length; n--; ) {
     var t = e._handlers[n];
     t.element.removeEventListener(t.event, t.handler);
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
     ].forEach(function (a) {
      try {
       delete e[a];
      } catch {}
     });
   }
   function le(n) {
    return e.config.appendTo && e.config.appendTo.contains(n)
     ? !0
     : e.calendarContainer.contains(n);
   }
   function ue(n) {
    if (e.isOpen && !e.config.inline) {
     var t = le(n.target),
      a =
       n.target === e.input ||
       n.target === e.altInput ||
       e.element.contains(n.target) ||
       (n.path &&
        n.path.indexOf &&
        (~n.path.indexOf(e.input) || ~n.path.indexOf(e.altInput))),
      o =
       n.type === 'blur'
        ? a && n.relatedTarget && !le(n.relatedTarget)
        : !a && !t,
      u = !e.config.ignoredFocusElements.some(function (l) {
       return l.contains(n.target);
      });
     o &&
      u &&
      (e.close(),
      e.config.mode === 'range' &&
       e.selectedDates.length === 1 &&
       (e.clear(!1), e.redraw()));
    }
   }
   function fe(n) {
    if (
     !(
      !n ||
      (e.currentYearElement.getAttribute('data-min') &&
       n < parseInt(e.currentYearElement.getAttribute('data-min'))) ||
      (e.currentYearElement.getAttribute('data-max') &&
       n > parseInt(e.currentYearElement.getAttribute('data-max')))
     )
    ) {
     var t = n,
      a = e.currentYear !== t;
     (e.currentYear = t || e.currentYear),
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
      a && (e.redraw(), b('onYearChange'));
    }
   }
   function V(n, t) {
    t === void 0 && (t = !0);
    var a = e.parseDate(n, void 0, t);
    if (
     (e.config.minDate &&
      a &&
      y(a, e.config.minDate, t !== void 0 ? t : !e.minDateHasTime) < 0) ||
     (e.config.maxDate &&
      a &&
      y(a, e.config.maxDate, t !== void 0 ? t : !e.maxDateHasTime) > 0)
    )
     return !1;
    if (!e.config.enable.length && !e.config.disable.length) return !0;
    if (a === void 0) return !1;
    for (
     var o = e.config.enable.length > 0,
      u = o ? e.config.enable : e.config.disable,
      l = 0,
      f = void 0;
     l < u.length;
     l++
    ) {
     if (((f = u[l]), typeof f == 'function' && f(a))) return o;
     if (f instanceof Date && a !== void 0 && f.getTime() === a.getTime())
      return o;
     if (typeof f == 'string' && a !== void 0) {
      var g = e.parseDate(f, void 0, !0);
      return g && g.getTime() === a.getTime() ? o : !o;
     } else if (
      typeof f == 'object' &&
      a !== void 0 &&
      f.from &&
      f.to &&
      a.getTime() >= f.from.getTime() &&
      a.getTime() <= f.to.getTime()
     )
      return o;
    }
    return !o;
   }
   function Ce(n) {
    var t = n.target === e._input,
     a = le(n.target),
     o = e.config.allowInput,
     u = e.isOpen && (!o || !t),
     l = e.config.inline && t && !o;
    if (n.keyCode === 13 && t) {
     if (o)
      return (
       e.setDate(
        e._input.value,
        !0,
        n.target === e.altInput ? e.config.altFormat : e.config.dateFormat,
       ),
       n.target.blur()
      );
     e.open();
    } else if (a || u || l) {
     var f = !!e.timeContainer && e.timeContainer.contains(n.target);
     switch (n.keyCode) {
      case 13:
       f ? N() : Te(n);
       break;
      case 27:
       n.preventDefault(), e.close();
       break;
      case 8:
      case 46:
       t && !e.config.allowInput && (n.preventDefault(), e.clear());
       break;
      case 37:
      case 39:
       if (f) e.hourElement && e.hourElement.focus();
       else if ((n.preventDefault(), e.daysContainer)) {
        var g = n.keyCode === 39 ? 1 : -1;
        n.ctrlKey ? oe(g, !0, !0) : Y(n.target.$i, g);
       }
       break;
      case 38:
      case 40:
       n.preventDefault();
       var s = n.keyCode === 40 ? 1 : -1;
       e.daysContainer && n.target.$i !== void 0
        ? n.ctrlKey
          ? (fe(e.currentYear - s), Y(n.target.$i, 0))
          : f || Y(n.target.$i, s * 7)
        : e.config.enableTime &&
          (!f && e.hourElement && e.hourElement.focus(),
          M(n),
          e._debouncedChange());
       break;
      case 9:
       n.target === e.hourElement
        ? (n.preventDefault(), e.minuteElement.select())
        : n.target === e.minuteElement && (e.secondElement || e.amPM)
          ? (n.preventDefault(),
            e.secondElement !== void 0
             ? e.secondElement.focus()
             : e.amPM !== void 0 && e.amPM.focus())
          : n.target === e.secondElement &&
            e.amPM &&
            (n.preventDefault(), e.amPM.focus());
       break;
     }
     switch (n.key) {
      case e.l10n.amPM[0].charAt(0):
      case e.l10n.amPM[0].charAt(0).toLowerCase():
       e.amPM !== void 0 &&
        n.target === e.amPM &&
        ((e.amPM.textContent = e.l10n.amPM[0]), x(), N());
       break;
      case e.l10n.amPM[1].charAt(0):
      case e.l10n.amPM[1].charAt(0).toLowerCase():
       e.amPM !== void 0 &&
        n.target === e.amPM &&
        ((e.amPM.textContent = e.l10n.amPM[1]), x(), N());
       break;
     }
     b('onKeyDown', n);
    }
   }
   function ce(n) {
    if (
     !(
      e.selectedDates.length !== 1 ||
      !n.classList.contains('flatpickr-day') ||
      n.classList.contains('disabled') ||
      e.minRangeDate === void 0 ||
      e.maxRangeDate === void 0
     )
    ) {
     for (
      var t = n.dateObj,
       a = e.parseDate(e.selectedDates[0], void 0, !0),
       o = Math.min(t.getTime(), e.selectedDates[0].getTime()),
       u = Math.max(t.getTime(), e.selectedDates[0].getTime()),
       l = !1,
       f = o;
      f < u;
      f += Pe.DAY
     )
      if (!V(new JDate(f))) {
       l = !0;
       break;
      }
     for (
      var g = function (k, J) {
        var A = J.getTime(),
         te = A < e.minRangeDate.getTime() || A > e.maxRangeDate.getTime(),
         W = e.days.childNodes[k];
        if (te)
         return (
          W.classList.add('notAllowed'),
          ['inRange', 'startRange', 'endRange'].forEach(function (ge) {
           W.classList.remove(ge);
          }),
          'continue'
         );
        if (l && !te) return 'continue';
        ['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(
         function (ge) {
          W.classList.remove(ge);
         },
        );
        var tn = Math.max(e.minRangeDate.getTime(), o),
         an = Math.min(e.maxRangeDate.getTime(), u);
        n.classList.add(t < e.selectedDates[0] ? 'startRange' : 'endRange'),
         a < t && A === a.getTime()
          ? W.classList.add('startRange')
          : a > t && A === a.getTime() && W.classList.add('endRange'),
         A >= tn && A <= an && W.classList.add('inRange');
       },
       s = 0,
       T = e.days.childNodes[s].dateObj;
      s < 42;
      s++, T = e.days.childNodes[s] && e.days.childNodes[s].dateObj
     )
      g(s, T);
    }
   }
   function Ke() {
    e.isOpen && !e.config.static && !e.config.inline && ne();
   }
   function Be(n, t) {
    if ((t === void 0 && (t = e._input), e.isMobile)) {
     n && (n.preventDefault(), n.target && n.target.blur()),
      setTimeout(function () {
       e.mobileInput !== void 0 && e.mobileInput.click();
      }, 0),
      b('onOpen');
     return;
    }
    if (!(e._input.disabled || e.config.inline)) {
     var a = e.isOpen;
     (e.isOpen = !0),
      a ||
       (e.calendarContainer.classList.add('open'),
       e._input.classList.add('active'),
       b('onOpen'),
       ne(t));
    }
   }
   function ye(n) {
    return function (t) {
     var a = (e.config['_' + n + 'Date'] = e.parseDate(t, e.config.dateFormat)),
      o = e.config['_' + (n === 'min' ? 'max' : 'min') + 'Date'];
     a !== void 0 &&
      (e[n === 'min' ? 'minDateHasTime' : 'maxDateHasTime'] =
       a.getHours() > 0 || a.getMinutes() > 0 || a.getSeconds() > 0),
      e.selectedDates &&
       ((e.selectedDates = e.selectedDates.filter(function (u) {
        return V(u);
       })),
       !e.selectedDates.length && n === 'min' && E(a),
       N()),
      e.daysContainer &&
       (Ee(),
       a !== void 0
        ? (e.currentYearElement[n] = a.getFullYear().toString())
        : e.currentYearElement.removeAttribute(n),
       (e.currentYearElement.disabled =
        !!o && a !== void 0 && o.getFullYear() === a.getFullYear()));
    };
   }
   function $e() {
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
     t = [
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
     a = w({}, r, JSON.parse(JSON.stringify(i.dataset || {}))),
     o = {};
    (e.config.parseDate = a.parseDate),
     (e.config.formatDate = a.formatDate),
     Object.defineProperty(e.config, 'enable', {
      get: function () {
       return e.config._enable || [];
      },
      set: function (s) {
       e.config._enable = Se(s);
      },
     }),
     Object.defineProperty(e.config, 'disable', {
      get: function () {
       return e.config._disable || [];
      },
      set: function (s) {
       e.config._disable = Se(s);
      },
     }),
     !a.dateFormat &&
      a.enableTime &&
      (o.dateFormat = a.noCalendar
       ? 'H:i' + (a.enableSeconds ? ':S' : '')
       : D.defaultConfig.dateFormat + ' H:i' + (a.enableSeconds ? ':S' : '')),
     a.altInput &&
      a.enableTime &&
      !a.altFormat &&
      (o.altFormat = a.noCalendar
       ? 'h:i' + (a.enableSeconds ? ':S K' : ' K')
       : D.defaultConfig.altFormat +
         (' h:i' + (a.enableSeconds ? ':S' : '') + ' K')),
     Object.defineProperty(e.config, 'minDate', {
      get: function () {
       return e.config._minDate;
      },
      set: ye('min'),
     }),
     Object.defineProperty(e.config, 'maxDate', {
      get: function () {
       return e.config._maxDate;
      },
      set: ye('max'),
     });
    var u = function (s) {
     return function (T) {
      e.config[s === 'min' ? '_minTime' : '_maxTime'] = e.parseDate(T, 'H:i');
     };
    };
    Object.defineProperty(e.config, 'minTime', {
     get: function () {
      return e.config._minTime;
     },
     set: u('min'),
    }),
     Object.defineProperty(e.config, 'maxTime', {
      get: function () {
       return e.config._maxTime;
      },
      set: u('max'),
     }),
     Object.assign(e.config, o, a);
    for (var l = 0; l < n.length; l++)
     e.config[n[l]] = e.config[n[l]] === !0 || e.config[n[l]] === 'true';
    for (var l = t.length; l--; )
     e.config[t[l]] !== void 0 &&
      (e.config[t[l]] = he(e.config[t[l]] || []).map(c));
    e.config.mode === 'time' &&
     ((e.config.noCalendar = !0), (e.config.enableTime = !0));
    for (var l = 0; l < e.config.plugins.length; l++) {
     var f = e.config.plugins[l](e) || {};
     for (var g in f)
      ~t.indexOf(g)
       ? (e.config[g] = he(f[g]).map(c).concat(e.config[g]))
       : typeof a[g] > 'u' && (e.config[g] = f[g]);
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
     b('onParseConfig');
   }
   function xe() {
    typeof e.config.locale != 'object' &&
     typeof D.l10ns[e.config.locale] > 'u' &&
     e.config.errorHandler(
      new Error('flatpickr: invalid locale ' + e.config.locale),
     ),
     (e.l10n = w(
      {},
      D.l10ns.default,
      typeof e.config.locale == 'object'
       ? e.config.locale
       : e.config.locale !== 'default'
         ? D.l10ns[e.config.locale]
         : void 0,
     )),
     (re.K =
      '(' +
      e.l10n.amPM[0] +
      '|' +
      e.l10n.amPM[1] +
      '|' +
      e.l10n.amPM[0].toLowerCase() +
      '|' +
      e.l10n.amPM[1].toLowerCase() +
      ')'),
     (e.formatDate = De(e));
   }
   function ne(n) {
    if (e.calendarContainer !== void 0) {
     b('onPreCalendarPosition');
     var t = n || e._positionElement,
      a = Array.prototype.reduce.call(
       e.calendarContainer.children,
       function (A, te) {
        return A + te.offsetHeight;
       },
       0,
      ),
      o = e.calendarContainer.offsetWidth,
      u = e.config.position,
      l = t.getBoundingClientRect(),
      f = window.innerHeight - l.bottom,
      g = u === 'above' || (u !== 'below' && f < a && l.top > a),
      s = window.pageYOffset + l.top + (g ? -a - 2 : t.offsetHeight + 2);
     if (
      (F(e.calendarContainer, 'arrowTop', !g),
      F(e.calendarContainer, 'arrowBottom', g),
      !e.config.inline)
     ) {
      var T = window.pageXOffset + l.left,
       k = window.document.body.offsetWidth - l.right,
       J = T + o > window.document.body.offsetWidth;
      F(e.calendarContainer, 'rightMost', J),
       !e.config.static &&
        ((e.calendarContainer.style.top = s + 'px'),
        J
         ? ((e.calendarContainer.style.left = 'auto'),
           (e.calendarContainer.style.right = k + 'px'))
         : ((e.calendarContainer.style.left = T + 'px'),
           (e.calendarContainer.style.right = 'auto')));
     }
    }
   }
   function Ee() {
    e.config.noCalendar || e.isMobile || (Me(), z(), L());
   }
   function Ue() {
    e._input.focus(),
     window.navigator.userAgent.indexOf('MSIE') !== -1 ||
     navigator.msMaxTouchPoints !== void 0
      ? setTimeout(e.close, 0)
      : e.close();
   }
   function Te(n) {
    n.preventDefault(), n.stopPropagation();
    var t = function (k) {
      return (
       k.classList &&
       k.classList.contains('flatpickr-day') &&
       !k.classList.contains('disabled') &&
       !k.classList.contains('notAllowed')
      );
     },
     a = be(n.target, t);
    if (a !== void 0) {
     var o = a,
      u = (e.latestSelectedDateObj = new JDate(o.dateObj.getTime())),
      l = u.getMonth() !== e.currentMonth && e.config.mode !== 'range';
     if (((e.selectedDateElem = o), e.config.mode === 'single'))
      e.selectedDates = [u];
     else if (e.config.mode === 'multiple') {
      var f = se(u);
      f ? e.selectedDates.splice(parseInt(f), 1) : e.selectedDates.push(u);
     } else
      e.config.mode === 'range' &&
       (e.selectedDates.length === 2 && e.clear(),
       e.selectedDates.push(u),
       y(u, e.selectedDates[0], !0) !== 0 &&
        e.selectedDates.sort(function (k, J) {
         return k.getTime() - J.getTime();
        }));
     if ((x(), l)) {
      var g = e.currentYear !== u.getFullYear();
      (e.currentYear = u.getFullYear()),
       (e.currentMonth = u.getMonth()),
       g && b('onYearChange'),
       b('onMonthChange');
     }
     if (
      (L(),
      e.config.minDate &&
       e.minDateHasTime &&
       e.config.enableTime &&
       y(u, e.config.minDate) === 0 &&
       E(e.config.minDate),
      N(),
      e.config.enableTime &&
       setTimeout(function () {
        return (e.showTimeInput = !0);
       }, 50),
      e.config.mode === 'range' &&
       (e.selectedDates.length === 1
        ? (ce(o),
          (e._hidePrevMonthArrow =
           e._hidePrevMonthArrow ||
           (e.minRangeDate !== void 0 &&
            e.minRangeDate > e.days.childNodes[0].dateObj)),
          (e._hideNextMonthArrow =
           e._hideNextMonthArrow ||
           (e.maxRangeDate !== void 0 &&
            e.maxRangeDate < new JDate(e.currentYear, e.currentMonth + 1, 1))))
        : z()),
      l ? e.selectedDateElem && e.selectedDateElem.focus() : Y(o.$i, 0),
      e.hourElement !== void 0 &&
       setTimeout(function () {
        return e.hourElement !== void 0 && e.hourElement.select();
       }, 451),
      e.config.closeOnSelect)
     ) {
      var s = e.config.mode === 'single' && !e.config.enableTime,
       T =
        e.config.mode === 'range' &&
        e.selectedDates.length === 2 &&
        !e.config.enableTime;
      (s || T) && Ue();
     }
     $();
    }
   }
   var ke = { locale: [xe] };
   function qe(n, t) {
    n !== null && typeof n == 'object'
     ? Object.assign(e.config, n)
     : ((e.config[n] = t),
       ke[n] !== void 0 &&
        ke[n].forEach(function (a) {
         return a();
        })),
     e.redraw(),
     P();
   }
   function Ie(n, t) {
    var a = [];
    if (n instanceof Array)
     a = n.map(function (o) {
      return e.parseDate(o, t);
     });
    else if (n instanceof Date || typeof n == 'number') a = [e.parseDate(n, t)];
    else if (typeof n == 'string')
     switch (e.config.mode) {
      case 'single':
       a = [e.parseDate(n, t)];
       break;
      case 'multiple':
       a = n.split(e.config.conjunction).map(function (o) {
        return e.parseDate(o, t);
       });
       break;
      case 'range':
       a = n.split(e.l10n.rangeSeparator).map(function (o) {
        return e.parseDate(o, t);
       });
       break;
     }
    else
     e.config.errorHandler(
      new Error('Invalid date supplied: ' + JSON.stringify(n)),
     );
    (e.selectedDates = a.filter(function (o) {
     return o instanceof Date && V(o, !1);
    })),
     e.config.mode === 'range' &&
      e.selectedDates.sort(function (o, u) {
       return o.getTime() - u.getTime();
      });
   }
   function Ve(n, t, a) {
    if (
     (t === void 0 && (t = !1),
     a === void 0 && (a = e.config.dateFormat),
     n !== 0 && !n)
    )
     return e.clear(t);
    Ie(n, a),
     (e.showTimeInput = e.selectedDates.length > 0),
     (e.latestSelectedDateObj = e.selectedDates[0]),
     e.redraw(),
     P(),
     E(),
     N(t),
     t && b('onChange');
   }
   function Se(n) {
    return n
     .map(function (t) {
      return typeof t == 'string' || typeof t == 'number' || t instanceof Date
       ? e.parseDate(t, void 0, !0)
       : t && typeof t == 'object' && t.from && t.to
         ? { from: e.parseDate(t.from, void 0), to: e.parseDate(t.to, void 0) }
         : t;
     })
     .filter(function (t) {
      return t;
     });
   }
   function ze() {
    (e.selectedDates = []), (e.now = new JDate());
    var n = e.config.defaultDate || e.input.value;
    n && Ie(n, e.config.dateFormat);
    var t = e.selectedDates.length
     ? e.selectedDates[0]
     : e.config.minDate && e.config.minDate.getTime() > e.now.getTime()
       ? e.config.minDate
       : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime()
         ? e.config.maxDate
         : e.now;
    (e.currentYear = t.getFullYear()),
     (e.currentMonth = t.getMonth()),
     e.selectedDates.length && (e.latestSelectedDateObj = e.selectedDates[0]),
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
      set: function (a) {
       (e._showTimeInput = a),
        e.calendarContainer && F(e.calendarContainer, 'showTimeInput', a),
        e.isOpen && ne();
      },
     });
   }
   function Ge() {
    if (
     ((e.input = e.config.wrap ? i.querySelector('[data-input]') : i), !e.input)
    ) {
     e.config.errorHandler(new Error('Invalid input element specified'));
     return;
    }
    (e.input._type = e.input.type),
     (e.input.type = 'text'),
     e.input.classList.add('flatpickr-input'),
     (e._input = e.input),
     e.config.altInput &&
      ((e.altInput = m(
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
     (e._positionElement = e.config.positionElement || e._input);
   }
   function Ze() {
    var n = e.config.enableTime
     ? e.config.noCalendar
       ? 'time'
       : 'datetime-local'
     : 'date';
    (e.mobileInput = m('input', e.input.className + ' flatpickr-mobile')),
     (e.mobileInput.step = e.input.getAttribute('step') || 'any'),
     (e.mobileInput.tabIndex = 1),
     (e.mobileInput.type = n),
     (e.mobileInput.disabled = e.input.disabled),
     (e.mobileInput.required = e.input.required),
     (e.mobileInput.placeholder = e.input.placeholder),
     (e.mobileFormatStr =
      n === 'datetime-local'
       ? 'Y-m-d\\TH:i:S'
       : n === 'date'
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
    p(e.mobileInput, 'change', function (t) {
     e.setDate(t.target.value, !1, e.mobileFormatStr),
      b('onChange'),
      b('onClose');
    });
   }
   function Qe() {
    if (e.isOpen) return e.close();
    e.open();
   }
   function b(n, t) {
    var a = e.config[n];
    if (a !== void 0 && a.length > 0)
     for (var o = 0; a[o] && o < a.length; o++)
      a[o](e.selectedDates, e.input.value, e, t);
    n === 'onChange' &&
     (e.input.dispatchEvent(de('change')), e.input.dispatchEvent(de('input')));
   }
   function de(n) {
    var t = document.createEvent('Event');
    return t.initEvent(n, !0, !0), t;
   }
   function se(n) {
    for (var t = 0; t < e.selectedDates.length; t++)
     if (y(e.selectedDates[t], n) === 0) return '' + t;
    return !1;
   }
   function Xe(n) {
    return e.config.mode !== 'range' || e.selectedDates.length < 2
     ? !1
     : y(n, e.selectedDates[0]) >= 0 && y(n, e.selectedDates[1]) <= 0;
   }
   function z() {
    e.config.noCalendar ||
     e.isMobile ||
     !e.monthNav ||
     ((e.currentMonthElement.textContent =
      ie(e.currentMonth, e.config.shorthandCurrentMonth, e.l10n) + ' '),
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
   function N(n) {
    if ((n === void 0 && (n = !0), !e.selectedDates.length)) return e.clear(n);
    e.mobileInput !== void 0 &&
     e.mobileFormatStr &&
     (e.mobileInput.value =
      e.latestSelectedDateObj !== void 0
       ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr)
       : '');
    var t =
     e.config.mode !== 'range' ? e.config.conjunction : e.l10n.rangeSeparator;
    (e.input.value = e.selectedDates
     .map(function (a) {
      return e.formatDate(a, e.config.dateFormat);
     })
     .join(t)),
     e.altInput !== void 0 &&
      (e.altInput.value = e.selectedDates
       .map(function (a) {
        return e.formatDate(a, e.config.altFormat);
       })
       .join(t)),
     n !== !1 && b('onValueUpdate');
   }
   function en(n) {
    n.preventDefault();
    var t = e.prevMonthNav.contains(n.target),
     a = e.nextMonthNav.contains(n.target);
    t || a
     ? oe(t ? -1 : 1)
     : n.target === e.currentYearElement
       ? e.currentYearElement.select()
       : n.target.classList.contains('arrowUp')
         ? e.changeYear(e.currentYear + 1)
         : n.target.classList.contains('arrowDown') &&
           e.changeYear(e.currentYear - 1);
   }
   function nn(n) {
    n.preventDefault();
    var t = n.type === 'keydown',
     a = n.target;
    e.amPM !== void 0 &&
     n.target === e.amPM &&
     (e.amPM.textContent =
      e.l10n.amPM[I(e.amPM.textContent === e.l10n.amPM[0])]);
    var o = parseFloat(a.getAttribute('data-min')),
     u = parseFloat(a.getAttribute('data-max')),
     l = parseFloat(a.getAttribute('data-step')),
     f = parseInt(a.value, 10),
     g = n.delta || (t ? (n.which === 38 ? 1 : -1) : 0),
     s = f + l * g;
    if (typeof a.value < 'u' && a.value.length === 2) {
     var T = a === e.hourElement,
      k = a === e.minuteElement;
     s < o
      ? ((s = u + s + I(!T) + (I(T) && I(!e.amPM))),
        k && q(void 0, -1, e.hourElement))
      : s > u &&
        ((s = a === e.hourElement ? s - u - I(!e.amPM) : o),
        k && q(void 0, 1, e.hourElement)),
      e.amPM &&
       T &&
       (l === 1 ? s + f === 23 : Math.abs(s - f) > l) &&
       (e.amPM.textContent =
        e.l10n.amPM[I(e.amPM.textContent === e.l10n.amPM[0])]),
      (a.value = C(s));
    }
   }
   return v(), e;
  }
  function j(i, r) {
   for (
    var e = Array.prototype.slice.call(i), d = [], v = 0;
    v < e.length;
    v++
   ) {
    var c = e[v];
    try {
     if (c.getAttribute('data-fp-omit') !== null) continue;
     c._flatpickr !== void 0 &&
      (c._flatpickr.destroy(), (c._flatpickr = void 0)),
      (c._flatpickr = Fe(c, r || {})),
      d.push(c._flatpickr);
    } catch (M) {
     console.error(M);
    }
   }
   return d.length === 1 ? d[0] : d;
  }
  typeof HTMLElement < 'u' &&
   ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
    function (i) {
     return j(this, i);
    }),
   (HTMLElement.prototype.flatpickr = function (i) {
    return j([this], i);
   }));
  var D;
  (D = function (i, r) {
   return i instanceof NodeList
    ? j(i, r)
    : j(typeof i == 'string' ? window.document.querySelectorAll(i) : [i], r);
  }),
   typeof window == 'object' && (window.flatpickr = D),
   (D.defaultConfig = G),
   (D.l10ns = { en: w({}, B), default: w({}, B) }),
   (D.localize = function (i) {
    D.l10ns.default = w({}, D.l10ns.default, i);
   }),
   (D.setDefaults = function (i) {
    D.defaultConfig = w({}, D.defaultConfig, i);
   }),
   (D.parseDate = ve({})),
   (D.formatDate = De({})),
   (D.compareDates = y),
   typeof jQuery < 'u' &&
    (jQuery.fn.flatpickr = function (i) {
     return j(this, i);
    }),
   (Date.prototype.fp_incr = function (i) {
    return new JDate(
     this.getFullYear(),
     this.getMonth(),
     this.getDate() + (typeof i == 'string' ? parseInt(i, 10) : i),
    );
   });
  var Ye = D;
  (H.default = Ye), Object.defineProperty(H, '__esModule', { value: !0 });
 });
});
export default on();
