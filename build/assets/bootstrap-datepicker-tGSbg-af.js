import { r as G } from './jquery-Czc5UB_B.js';
import './_commonjsHelpers-BosuxZz1.js';
/*!
 * Datepicker for Bootstrap v1.10.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */ (function (Q) {
 (function (a) {
  a(G());
 })(function (a, C) {
  function A() {
   return new Date(Date.UTC.apply(Date, arguments));
  }
  function F() {
   var e = new Date();
   return A(e.getFullYear(), e.getMonth(), e.getDate());
  }
  function W(e, t) {
   return (
    e.getUTCFullYear() === t.getUTCFullYear() &&
    e.getUTCMonth() === t.getUTCMonth() &&
    e.getUTCDate() === t.getUTCDate()
   );
  }
  function N(e, t) {
   return function () {
    return (
     t !== C && a.fn.datepicker.deprecated(t), this[e].apply(this, arguments)
    );
   };
  }
  function R(e) {
   return e && !isNaN(e.getTime());
  }
  var z = (function () {
    var e = {
     get: function (t) {
      return this.slice(t)[0];
     },
     contains: function (t) {
      for (var i = t && t.valueOf(), s = 0, n = this.length; s < n; s++)
       if (0 <= this[s].valueOf() - i && this[s].valueOf() - i < 864e5)
        return s;
      return -1;
     },
     remove: function (t) {
      this.splice(t, 1);
     },
     replace: function (t) {
      t &&
       (Array.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t));
     },
     clear: function () {
      this.length = 0;
     },
     copy: function () {
      var t = new z();
      return t.replace(this), t;
     },
    };
    return function () {
     var t = [];
     return t.push.apply(t, arguments), a.extend(t, e), t;
    };
   })(),
   x = function (e, t) {
    a.data(e, 'datepicker', this),
     (this._events = []),
     (this._secondaryEvents = []),
     this._process_options(t),
     (this.dates = new z()),
     (this.viewDate = this.o.defaultViewDate),
     (this.focusDate = null),
     (this.element = a(e)),
     (this.isInput = this.element.is('input')),
     (this.inputField = this.isInput
      ? this.element
      : this.element.find('input')),
     (this.component = this.element.hasClass('date')
      ? this.element.find(
         '.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn',
        )
      : !1),
     this.component && this.component.length === 0 && (this.component = !1),
     this.o.isInline === null
      ? (this.isInline = !this.component && !this.isInput)
      : (this.isInline = this.o.isInline),
     (this.picker = a(d.template)),
     this._check_template(this.o.templates.leftArrow) &&
      this.picker.find('.prev').html(this.o.templates.leftArrow),
     this._check_template(this.o.templates.rightArrow) &&
      this.picker.find('.next').html(this.o.templates.rightArrow),
     this._buildEvents(),
     this._attachEvents(),
     this.isInline
      ? this.picker.addClass('datepicker-inline').appendTo(this.element)
      : this.picker.addClass('datepicker-dropdown dropdown-menu'),
     this.o.rtl && this.picker.addClass('datepicker-rtl'),
     this.o.calendarWeeks &&
      this.picker
       .find(
        '.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear',
       )
       .attr('colspan', function (i, s) {
        return Number(s) + 1;
       }),
     this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled,
     }),
     (this._allow_update = !1),
     this.setViewMode(this.o.startView),
     (this._allow_update = !0),
     this.fillDow(),
     this.fillMonths(),
     this.update(),
     this.isInline && this.show();
   };
  x.prototype = {
   constructor: x,
   _resolveViewName: function (e) {
    return (
     a.each(d.viewModes, function (t, i) {
      if (e === t || a.inArray(e, i.names) !== -1) return (e = t), !1;
     }),
     e
    );
   },
   _resolveDaysOfWeek: function (e) {
    return Array.isArray(e) || (e = e.split(/[,\s]*/)), a.map(e, Number);
   },
   _check_template: function (e) {
    try {
     if (e === C || e === '') return !1;
     if ((e.match(/[<>]/g) || []).length <= 0) return !0;
     var t = a(e);
     return t.length > 0;
    } catch {
     return !1;
    }
   },
   _process_options: function (e) {
    this._o = a.extend({}, this._o, e);
    var t = (this.o = a.extend({}, this._o)),
     i = t.language;
    y[i] || ((i = i.split('-')[0]), y[i] || (i = I.language)),
     (t.language = i),
     (t.startView = this._resolveViewName(t.startView)),
     (t.minViewMode = this._resolveViewName(t.minViewMode)),
     (t.maxViewMode = this._resolveViewName(t.maxViewMode)),
     (t.startView = Math.max(
      this.o.minViewMode,
      Math.min(this.o.maxViewMode, t.startView),
     )),
     t.multidate !== !0 &&
      ((t.multidate = Number(t.multidate) || !1),
      t.multidate !== !1 && (t.multidate = Math.max(0, t.multidate))),
     (t.multidateSeparator = String(t.multidateSeparator)),
     (t.weekStart %= 7),
     (t.weekEnd = (t.weekStart + 6) % 7);
    var s = d.parseFormat(t.format);
    t.startDate !== -1 / 0 &&
     (t.startDate
      ? t.startDate instanceof Date
        ? (t.startDate = this._local_to_utc(this._zero_time(t.startDate)))
        : (t.startDate = d.parseDate(
           t.startDate,
           s,
           t.language,
           t.assumeNearbyYear,
          ))
      : (t.startDate = -1 / 0)),
     t.endDate !== 1 / 0 &&
      (t.endDate
       ? t.endDate instanceof Date
         ? (t.endDate = this._local_to_utc(this._zero_time(t.endDate)))
         : (t.endDate = d.parseDate(
            t.endDate,
            s,
            t.language,
            t.assumeNearbyYear,
           ))
       : (t.endDate = 1 / 0)),
     (t.daysOfWeekDisabled = this._resolveDaysOfWeek(
      t.daysOfWeekDisabled || [],
     )),
     (t.daysOfWeekHighlighted = this._resolveDaysOfWeek(
      t.daysOfWeekHighlighted || [],
     )),
     (t.datesDisabled = t.datesDisabled || []),
     Array.isArray(t.datesDisabled) ||
      (t.datesDisabled = t.datesDisabled.split(',')),
     (t.datesDisabled = a.map(t.datesDisabled, function (r) {
      return d.parseDate(r, s, t.language, t.assumeNearbyYear);
     }));
    var n = String(t.orientation).toLowerCase().split(/\s+/g),
     o = t.orientation.toLowerCase();
    if (
     ((n = a.grep(n, function (r) {
      return /^auto|left|right|top|bottom$/.test(r);
     })),
     (t.orientation = { x: 'auto', y: 'auto' }),
     !(!o || o === 'auto'))
    )
     if (n.length === 1)
      switch (n[0]) {
       case 'top':
       case 'bottom':
        t.orientation.y = n[0];
        break;
       case 'left':
       case 'right':
        t.orientation.x = n[0];
        break;
      }
     else
      (o = a.grep(n, function (r) {
       return /^left|right$/.test(r);
      })),
       (t.orientation.x = o[0] || 'auto'),
       (o = a.grep(n, function (r) {
        return /^top|bottom$/.test(r);
       })),
       (t.orientation.y = o[0] || 'auto');
    if (
     t.defaultViewDate instanceof Date ||
     typeof t.defaultViewDate == 'string'
    )
     t.defaultViewDate = d.parseDate(
      t.defaultViewDate,
      s,
      t.language,
      t.assumeNearbyYear,
     );
    else if (t.defaultViewDate) {
     var h = t.defaultViewDate.year || new Date().getFullYear(),
      f = t.defaultViewDate.month || 0,
      u = t.defaultViewDate.day || 1;
     t.defaultViewDate = A(h, f, u);
    } else t.defaultViewDate = F();
   },
   _applyEvents: function (e) {
    for (var t = 0, i, s, n; t < e.length; t++)
     (i = e[t][0]),
      e[t].length === 2
       ? ((s = C), (n = e[t][1]))
       : e[t].length === 3 && ((s = e[t][1]), (n = e[t][2])),
      i.on(n, s);
   },
   _unapplyEvents: function (e) {
    for (var t = 0, i, s, n; t < e.length; t++)
     (i = e[t][0]),
      e[t].length === 2
       ? ((n = C), (s = e[t][1]))
       : e[t].length === 3 && ((n = e[t][1]), (s = e[t][2])),
      i.off(s, n);
   },
   _buildEvents: function () {
    var e = {
     keyup: a.proxy(function (t) {
      a.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 &&
       this.update();
     }, this),
     keydown: a.proxy(this.keydown, this),
     paste: a.proxy(this.paste, this),
    };
    this.o.showOnFocus === !0 && (e.focus = a.proxy(this.show, this)),
     this.isInput
      ? (this._events = [[this.element, e]])
      : this.component && this.inputField.length
        ? (this._events = [
           [this.inputField, e],
           [this.component, { click: a.proxy(this.show, this) }],
          ])
        : (this._events = [
           [
            this.element,
            {
             click: a.proxy(this.show, this),
             keydown: a.proxy(this.keydown, this),
            },
           ],
          ]),
     this._events.push(
      [
       this.element,
       '*',
       {
        blur: a.proxy(function (t) {
         this._focused_from = t.target;
        }, this),
       },
      ],
      [
       this.element,
       {
        blur: a.proxy(function (t) {
         this._focused_from = t.target;
        }, this),
       },
      ],
     ),
     this.o.immediateUpdates &&
      this._events.push([
       this.element,
       {
        'changeYear changeMonth': a.proxy(function (t) {
         this.update(t.date);
        }, this),
       },
      ]),
     (this._secondaryEvents = [
      [this.picker, { click: a.proxy(this.click, this) }],
      [
       this.picker,
       '.prev, .next',
       { click: a.proxy(this.navArrowsClick, this) },
      ],
      [
       this.picker,
       '.day:not(.disabled)',
       { click: a.proxy(this.dayCellClick, this) },
      ],
      [a(window), { resize: a.proxy(this.place, this) }],
      [
       a(document),
       {
        'mousedown touchstart': a.proxy(function (t) {
         this.element.is(t.target) ||
          this.element.find(t.target).length ||
          this.picker.is(t.target) ||
          this.picker.find(t.target).length ||
          this.isInline ||
          this.hide();
        }, this),
       },
      ],
     ]);
   },
   _attachEvents: function () {
    this._detachEvents(), this._applyEvents(this._events);
   },
   _detachEvents: function () {
    this._unapplyEvents(this._events);
   },
   _attachSecondaryEvents: function () {
    this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
   },
   _detachSecondaryEvents: function () {
    this._unapplyEvents(this._secondaryEvents);
   },
   _trigger: function (e, t) {
    var i = t || this.dates.get(-1),
     s = this._utc_to_local(i);
    this.element.trigger({
     type: e,
     date: s,
     viewMode: this.viewMode,
     dates: a.map(this.dates, this._utc_to_local),
     format: a.proxy(function (n, o) {
      arguments.length === 0
       ? ((n = this.dates.length - 1), (o = this.o.format))
       : typeof n == 'string' && ((o = n), (n = this.dates.length - 1)),
       (o = o || this.o.format);
      var h = this.dates.get(n);
      return d.formatDate(h, o, this.o.language);
     }, this),
    });
   },
   show: function () {
    if (
     !(
      this.inputField.is(':disabled') ||
      (this.inputField.prop('readonly') && this.o.enableOnReadonly === !1)
     )
    )
     return (
      this.isInline || this.picker.appendTo(this.o.container),
      this.place(),
      this.picker.show(),
      this._attachSecondaryEvents(),
      this._trigger('show'),
      (window.navigator.msMaxTouchPoints || 'ontouchstart' in document) &&
       this.o.disableTouchKeyboard &&
       a(this.element).blur(),
      this
     );
   },
   hide: function () {
    return this.isInline || !this.picker.is(':visible')
     ? this
     : ((this.focusDate = null),
       this.picker.hide().detach(),
       this._detachSecondaryEvents(),
       this.setViewMode(this.o.startView),
       this.o.forceParse && this.inputField.val() && this.setValue(),
       this._trigger('hide'),
       this);
   },
   destroy: function () {
    return (
     this.hide(),
     this._detachEvents(),
     this._detachSecondaryEvents(),
     this.picker.remove(),
     delete this.element.data().datepicker,
     this.isInput || delete this.element.data().date,
     this
    );
   },
   paste: function (e) {
    var t;
    if (
     e.originalEvent.clipboardData &&
     e.originalEvent.clipboardData.types &&
     a.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1
    )
     t = e.originalEvent.clipboardData.getData('text/plain');
    else if (window.clipboardData) t = window.clipboardData.getData('Text');
    else return;
    this.setDate(t), this.update(), e.preventDefault();
   },
   _utc_to_local: function (e) {
    if (!e) return e;
    var t = new Date(e.getTime() + e.getTimezoneOffset() * 6e4);
    return (
     t.getTimezoneOffset() !== e.getTimezoneOffset() &&
      (t = new Date(e.getTime() + t.getTimezoneOffset() * 6e4)),
     t
    );
   },
   _local_to_utc: function (e) {
    return e && new Date(e.getTime() - e.getTimezoneOffset() * 6e4);
   },
   _zero_time: function (e) {
    return e && new Date(e.getFullYear(), e.getMonth(), e.getDate());
   },
   _zero_utc_time: function (e) {
    return e && A(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
   },
   getDates: function () {
    return a.map(this.dates, this._utc_to_local);
   },
   getUTCDates: function () {
    return a.map(this.dates, function (e) {
     return new Date(e);
    });
   },
   getDate: function () {
    return this._utc_to_local(this.getUTCDate());
   },
   getUTCDate: function () {
    var e = this.dates.get(-1);
    return e !== C ? new Date(e) : null;
   },
   clearDates: function () {
    this.inputField.val(''),
     this._trigger('changeDate'),
     this.update(),
     this.o.autoclose && this.hide();
   },
   setDates: function () {
    var e = Array.isArray(arguments[0]) ? arguments[0] : arguments;
    return (
     this.update.apply(this, e),
     this._trigger('changeDate'),
     this.setValue(),
     this
    );
   },
   setUTCDates: function () {
    var e = Array.isArray(arguments[0]) ? arguments[0] : arguments;
    return this.setDates.apply(this, a.map(e, this._utc_to_local)), this;
   },
   setDate: N('setDates'),
   setUTCDate: N('setUTCDates'),
   remove: N(
    'destroy',
    'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead',
   ),
   setValue: function () {
    var e = this.getFormattedDate();
    return this.inputField.val(e), this;
   },
   getFormattedDate: function (e) {
    e === C && (e = this.o.format);
    var t = this.o.language;
    return a
     .map(this.dates, function (i) {
      return d.formatDate(i, e, t);
     })
     .join(this.o.multidateSeparator);
   },
   getStartDate: function () {
    return this.o.startDate;
   },
   setStartDate: function (e) {
    return (
     this._process_options({ startDate: e }),
     this.update(),
     this.updateNavArrows(),
     this
    );
   },
   getEndDate: function () {
    return this.o.endDate;
   },
   setEndDate: function (e) {
    return (
     this._process_options({ endDate: e }),
     this.update(),
     this.updateNavArrows(),
     this
    );
   },
   setDaysOfWeekDisabled: function (e) {
    return (
     this._process_options({ daysOfWeekDisabled: e }), this.update(), this
    );
   },
   setDaysOfWeekHighlighted: function (e) {
    return (
     this._process_options({ daysOfWeekHighlighted: e }), this.update(), this
    );
   },
   setDatesDisabled: function (e) {
    return this._process_options({ datesDisabled: e }), this.update(), this;
   },
   place: function () {
    if (this.isInline) return this;
    var e = this.picker.outerWidth(),
     t = this.picker.outerHeight(),
     i = 10,
     s = a(this.o.container),
     n = s.width(),
     o = this.o.container === 'body' ? a(document).scrollTop() : s.scrollTop(),
     h = s.offset(),
     f = [0];
    this.element.parents().each(function () {
     var g = a(this).css('z-index');
     g !== 'auto' && Number(g) !== 0 && f.push(Number(g));
    });
    var u = Math.max.apply(Math, f) + this.o.zIndexOffset,
     r = this.component
      ? this.component.parent().offset()
      : this.element.offset(),
     k = this.component
      ? this.component.outerHeight(!0)
      : this.element.outerHeight(!1),
     T = this.component
      ? this.component.outerWidth(!0)
      : this.element.outerWidth(!1),
     m = r.left - h.left,
     c = r.top - h.top;
    this.o.container !== 'body' && (c += o),
     this.picker.removeClass(
      'datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left',
     ),
     this.o.orientation.x !== 'auto'
      ? (this.picker.addClass('datepicker-orient-' + this.o.orientation.x),
        this.o.orientation.x === 'right' && (m -= e - T))
      : r.left < 0
        ? (this.picker.addClass('datepicker-orient-left'), (m -= r.left - i))
        : m + e > n
          ? (this.picker.addClass('datepicker-orient-right'), (m += T - e))
          : this.o.rtl
            ? this.picker.addClass('datepicker-orient-right')
            : this.picker.addClass('datepicker-orient-left');
    var l = this.o.orientation.y,
     w;
    if (
     (l === 'auto' && ((w = -o + c - t), (l = w < 0 ? 'bottom' : 'top')),
     this.picker.addClass('datepicker-orient-' + l),
     l === 'top'
      ? (c -= t + parseInt(this.picker.css('padding-top')))
      : (c += k),
     this.o.rtl)
    ) {
     var p = n - (m + T);
     this.picker.css({ top: c, right: p, zIndex: u });
    } else this.picker.css({ top: c, left: m, zIndex: u });
    return this;
   },
   _allow_update: !0,
   update: function () {
    if (!this._allow_update) return this;
    var e = this.dates.copy(),
     t = [],
     i = !1;
    return (
     arguments.length
      ? (a.each(
         arguments,
         a.proxy(function (s, n) {
          n instanceof Date && (n = this._local_to_utc(n)), t.push(n);
         }, this),
        ),
        (i = !0))
      : ((t = this.isInput
         ? this.element.val()
         : this.element.data('date') || this.inputField.val()),
        t && this.o.multidate
         ? (t = t.split(this.o.multidateSeparator))
         : (t = [t]),
        delete this.element.data().date),
     (t = a.map(
      t,
      a.proxy(function (s) {
       return d.parseDate(
        s,
        this.o.format,
        this.o.language,
        this.o.assumeNearbyYear,
       );
      }, this),
     )),
     (t = a.grep(
      t,
      a.proxy(function (s) {
       return !this.dateWithinRange(s) || !s;
      }, this),
      !0,
     )),
     this.dates.replace(t),
     this.o.updateViewDate &&
      (this.dates.length
       ? (this.viewDate = new Date(this.dates.get(-1)))
       : this.viewDate < this.o.startDate
         ? (this.viewDate = new Date(this.o.startDate))
         : this.viewDate > this.o.endDate
           ? (this.viewDate = new Date(this.o.endDate))
           : (this.viewDate = this.o.defaultViewDate)),
     i
      ? (this.setValue(), this.element.change())
      : this.dates.length &&
        String(e) !== String(this.dates) &&
        i &&
        (this._trigger('changeDate'), this.element.change()),
     !this.dates.length &&
      e.length &&
      (this._trigger('clearDate'), this.element.change()),
     this.fill(),
     this
    );
   },
   fillDow: function () {
    if (this.o.showWeekDays) {
     var e = this.o.weekStart,
      t = '<tr>';
     for (
      this.o.calendarWeeks && (t += '<th class="cw">&#160;</th>');
      e < this.o.weekStart + 7;

     )
      (t += '<th class="dow'),
       a.inArray(e, this.o.daysOfWeekDisabled) !== -1 && (t += ' disabled'),
       (t += '">' + y[this.o.language].daysMin[e++ % 7] + '</th>');
     (t += '</tr>'), this.picker.find('.datepicker-days thead').append(t);
    }
   },
   fillMonths: function () {
    for (
     var e = this._utc_to_local(this.viewDate), t = '', i, s = 0;
     s < 12;
     s++
    )
     (i = e && e.getMonth() === s ? ' focused' : ''),
      (t +=
       '<span class="month' +
       i +
       '">' +
       y[this.o.language].monthsShort[s] +
       '</span>');
    this.picker.find('.datepicker-months td').html(t);
   },
   setRange: function (e) {
    !e || !e.length
     ? delete this.range
     : (this.range = a.map(e, function (t) {
        return t.valueOf();
       })),
     this.fill();
   },
   getClassNames: function (e) {
    var t = [],
     i = this.viewDate.getUTCFullYear(),
     s = this.viewDate.getUTCMonth(),
     n = F();
    return (
     e.getUTCFullYear() < i || (e.getUTCFullYear() === i && e.getUTCMonth() < s)
      ? t.push('old')
      : (e.getUTCFullYear() > i ||
         (e.getUTCFullYear() === i && e.getUTCMonth() > s)) &&
        t.push('new'),
     this.focusDate &&
      e.valueOf() === this.focusDate.valueOf() &&
      t.push('focused'),
     this.o.todayHighlight && W(e, n) && t.push('today'),
     this.dates.contains(e) !== -1 && t.push('active'),
     this.dateWithinRange(e) || t.push('disabled'),
     this.dateIsDisabled(e) && t.push('disabled', 'disabled-date'),
     a.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 &&
      t.push('highlighted'),
     this.range &&
      (e > this.range[0] &&
       e < this.range[this.range.length - 1] &&
       t.push('range'),
      a.inArray(e.valueOf(), this.range) !== -1 && t.push('selected'),
      e.valueOf() === this.range[0] && t.push('range-start'),
      e.valueOf() === this.range[this.range.length - 1] && t.push('range-end')),
     t
    );
   },
   _fill_yearsView: function (e, t, i, s, n, o, h) {
    for (
     var f = '',
      u = i / 10,
      r = this.picker.find(e),
      k = Math.floor(s / i) * i,
      T = k + u * 9,
      m = Math.floor(this.viewDate.getFullYear() / u) * u,
      c = a.map(this.dates, function (M) {
       return Math.floor(M.getUTCFullYear() / u) * u;
      }),
      l,
      w,
      p,
      g = k - u;
     g <= T + u;
     g += u
    )
     (l = [t]),
      (w = null),
      g === k - u ? l.push('old') : g === T + u && l.push('new'),
      a.inArray(g, c) !== -1 && l.push('active'),
      (g < n || g > o) && l.push('disabled'),
      g === m && l.push('focused'),
      h !== a.noop &&
       ((p = h(new Date(g, 0, 1))),
       p === C
        ? (p = {})
        : typeof p == 'boolean'
          ? (p = { enabled: p })
          : typeof p == 'string' && (p = { classes: p }),
       p.enabled === !1 && l.push('disabled'),
       p.classes && (l = l.concat(p.classes.split(/\s+/))),
       p.tooltip && (w = p.tooltip)),
      (f +=
       '<span class="' +
       l.join(' ') +
       '"' +
       (w ? ' title="' + w + '"' : '') +
       '>' +
       g +
       '</span>');
    r.find('.datepicker-switch').text(k + '-' + T), r.find('td').html(f);
   },
   fill: function () {
    var e = new Date(this.viewDate),
     t = e.getUTCFullYear(),
     i = e.getUTCMonth(),
     s =
      this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
     n = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
     o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
     h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
     f = y[this.o.language].today || y.en.today || '',
     u = y[this.o.language].clear || y.en.clear || '',
     r = y[this.o.language].titleFormat || y.en.titleFormat,
     k = F(),
     T =
      (this.o.todayBtn === !0 || this.o.todayBtn === 'linked') &&
      k >= this.o.startDate &&
      k <= this.o.endDate &&
      !this.weekOfDateIsDisabled(k),
     m,
     c;
    if (!(isNaN(t) || isNaN(i))) {
     this.picker
      .find('.datepicker-days .datepicker-switch')
      .text(d.formatDate(e, r, this.o.language)),
      this.picker
       .find('tfoot .today')
       .text(f)
       .css('display', T ? 'table-cell' : 'none'),
      this.picker
       .find('tfoot .clear')
       .text(u)
       .css('display', this.o.clearBtn === !0 ? 'table-cell' : 'none'),
      this.picker
       .find('thead .datepicker-title')
       .text(this.o.title)
       .css(
        'display',
        typeof this.o.title == 'string' && this.o.title !== ''
         ? 'table-cell'
         : 'none',
       ),
      this.updateNavArrows(),
      this.fillMonths();
     var l = A(t, i, 0),
      w = l.getUTCDate();
     l.setUTCDate(w - ((l.getUTCDay() - this.o.weekStart + 7) % 7));
     var p = new Date(l);
     l.getUTCFullYear() < 100 && p.setUTCFullYear(l.getUTCFullYear()),
      p.setUTCDate(p.getUTCDate() + 42),
      (p = p.valueOf());
     for (var g = [], M, _; l.valueOf() < p; ) {
      if (
       ((M = l.getUTCDay()),
       M === this.o.weekStart && (g.push('<tr>'), this.o.calendarWeeks))
      ) {
       var S = new Date(+l + ((this.o.weekStart - M - 7) % 7) * 864e5),
        U = new Date(Number(S) + ((11 - S.getUTCDay()) % 7) * 864e5),
        D = new Date(
         Number((D = A(U.getUTCFullYear(), 0, 1))) +
          ((11 - D.getUTCDay()) % 7) * 864e5,
        ),
        v = (U - D) / 864e5 / 7 + 1;
       g.push('<td class="cw">' + v + '</td>');
      }
      (_ = this.getClassNames(l)), _.push('day');
      var P = l.getUTCDate();
      this.o.beforeShowDay !== a.noop &&
       ((c = this.o.beforeShowDay(this._utc_to_local(l))),
       c === C
        ? (c = {})
        : typeof c == 'boolean'
          ? (c = { enabled: c })
          : typeof c == 'string' && (c = { classes: c }),
       c.enabled === !1 && _.push('disabled'),
       c.classes && (_ = _.concat(c.classes.split(/\s+/))),
       c.tooltip && (m = c.tooltip),
       c.content && (P = c.content)),
       typeof a.uniqueSort == 'function'
        ? (_ = a.uniqueSort(_))
        : (_ = a.unique(_)),
       g.push(
        '<td class="' +
         _.join(' ') +
         '"' +
         (m ? ' title="' + m + '"' : '') +
         ' data-date="' +
         l.getTime().toString() +
         '">' +
         P +
         '</td>',
       ),
       (m = null),
       M === this.o.weekEnd && g.push('</tr>'),
       l.setUTCDate(l.getUTCDate() + 1);
     }
     this.picker.find('.datepicker-days tbody').html(g.join(''));
     var J = y[this.o.language].monthsTitle || y.en.monthsTitle || 'Months',
      Y = this.picker
       .find('.datepicker-months')
       .find('.datepicker-switch')
       .text(this.o.maxViewMode < 2 ? J : t)
       .end()
       .find('tbody span')
       .removeClass('active');
     if (
      (a.each(this.dates, function (H, V) {
       V.getUTCFullYear() === t && Y.eq(V.getUTCMonth()).addClass('active');
      }),
      (t < s || t > o) && Y.addClass('disabled'),
      t === s && Y.slice(0, n).addClass('disabled'),
      t === o && Y.slice(h + 1).addClass('disabled'),
      this.o.beforeShowMonth !== a.noop)
     ) {
      var K = this;
      a.each(Y, function (H, V) {
       var Z = new Date(t, H, 1),
        b = K.o.beforeShowMonth(Z);
       b === C
        ? (b = {})
        : typeof b == 'boolean'
          ? (b = { enabled: b })
          : typeof b == 'string' && (b = { classes: b }),
        b.enabled === !1 &&
         !a(V).hasClass('disabled') &&
         a(V).addClass('disabled'),
        b.classes && a(V).addClass(b.classes),
        b.tooltip && a(V).prop('title', b.tooltip);
      });
     }
     this._fill_yearsView(
      '.datepicker-years',
      'year',
      10,
      t,
      s,
      o,
      this.o.beforeShowYear,
     ),
      this._fill_yearsView(
       '.datepicker-decades',
       'decade',
       100,
       t,
       s,
       o,
       this.o.beforeShowDecade,
      ),
      this._fill_yearsView(
       '.datepicker-centuries',
       'century',
       1e3,
       t,
       s,
       o,
       this.o.beforeShowCentury,
      );
    }
   },
   updateNavArrows: function () {
    if (this._allow_update) {
     var e = new Date(this.viewDate),
      t = e.getUTCFullYear(),
      i = e.getUTCMonth(),
      s =
       this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
      n = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
      o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
      h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
      f,
      u,
      r = 1;
     switch (this.viewMode) {
      case 4:
       r *= 10;
      case 3:
       r *= 10;
      case 2:
       r *= 10;
      case 1:
       (f = Math.floor(t / r) * r <= s), (u = Math.floor(t / r) * r + r > o);
       break;
      case 0:
       (f = t <= s && i <= n), (u = t >= o && i >= h);
       break;
     }
     this.picker.find('.prev').toggleClass('disabled', f),
      this.picker.find('.next').toggleClass('disabled', u);
    }
   },
   click: function (e) {
    e.preventDefault(), e.stopPropagation();
    var t, i, s, n;
    (t = a(e.target)),
     t.hasClass('datepicker-switch') &&
      this.viewMode !== this.o.maxViewMode &&
      this.setViewMode(this.viewMode + 1),
     t.hasClass('today') &&
      !t.hasClass('day') &&
      (this.setViewMode(0),
      this._setDate(F(), this.o.todayBtn === 'linked' ? null : 'view')),
     t.hasClass('clear') && this.clearDates(),
     t.hasClass('disabled') ||
      ((t.hasClass('month') ||
       t.hasClass('year') ||
       t.hasClass('decade') ||
       t.hasClass('century')) &&
       (this.viewDate.setUTCDate(1),
       (i = 1),
       this.viewMode === 1
        ? ((n = t.parent().find('span').index(t)),
          (s = this.viewDate.getUTCFullYear()),
          this.viewDate.setUTCMonth(n))
        : ((n = 0), (s = Number(t.text())), this.viewDate.setUTCFullYear(s)),
       this._trigger(d.viewModes[this.viewMode - 1].e, this.viewDate),
       this.viewMode === this.o.minViewMode
        ? this._setDate(A(s, n, i))
        : (this.setViewMode(this.viewMode - 1), this.fill()))),
     this.picker.is(':visible') &&
      this._focused_from &&
      this._focused_from.focus(),
     delete this._focused_from;
   },
   dayCellClick: function (e) {
    var t = a(e.currentTarget),
     i = t.data('date'),
     s = new Date(i);
    this.o.updateViewDate &&
     (s.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
      this._trigger('changeYear', this.viewDate),
     s.getUTCMonth() !== this.viewDate.getUTCMonth() &&
      this._trigger('changeMonth', this.viewDate)),
     this._setDate(s);
   },
   navArrowsClick: function (e) {
    var t = a(e.currentTarget),
     i = t.hasClass('prev') ? -1 : 1;
    this.viewMode !== 0 && (i *= d.viewModes[this.viewMode].navStep * 12),
     (this.viewDate = this.moveMonth(this.viewDate, i)),
     this._trigger(d.viewModes[this.viewMode].e, this.viewDate),
     this.fill();
   },
   _toggle_multidate: function (e) {
    var t = this.dates.contains(e);
    if (
     (e || this.dates.clear(),
     t !== -1
      ? (this.o.multidate === !0 ||
         this.o.multidate > 1 ||
         this.o.toggleActive) &&
        this.dates.remove(t)
      : this.o.multidate === !1
        ? (this.dates.clear(), this.dates.push(e))
        : this.dates.push(e),
     typeof this.o.multidate == 'number')
    )
     for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
   },
   _setDate: function (e, t) {
    (!t || t === 'date') && this._toggle_multidate(e && new Date(e)),
     ((!t && this.o.updateViewDate) || t === 'view') &&
      (this.viewDate = e && new Date(e)),
     this.fill(),
     this.setValue(),
     (!t || t !== 'view') && this._trigger('changeDate'),
     this.inputField.trigger('change'),
     this.o.autoclose && (!t || t === 'date') && this.hide();
   },
   moveDay: function (e, t) {
    var i = new Date(e);
    return i.setUTCDate(e.getUTCDate() + t), i;
   },
   moveWeek: function (e, t) {
    return this.moveDay(e, t * 7);
   },
   moveMonth: function (e, t) {
    if (!R(e)) return this.o.defaultViewDate;
    if (!t) return e;
    var i = new Date(e.valueOf()),
     s = i.getUTCDate(),
     n = i.getUTCMonth(),
     o = Math.abs(t),
     h,
     f;
    if (((t = t > 0 ? 1 : -1), o === 1))
     (f =
      t === -1
       ? function () {
          return i.getUTCMonth() === n;
         }
       : function () {
          return i.getUTCMonth() !== h;
         }),
      (h = n + t),
      i.setUTCMonth(h),
      (h = (h + 12) % 12);
    else {
     for (var u = 0; u < o; u++) i = this.moveMonth(i, t);
     (h = i.getUTCMonth()),
      i.setUTCDate(s),
      (f = function () {
       return h !== i.getUTCMonth();
      });
    }
    for (; f(); ) i.setUTCDate(--s), i.setUTCMonth(h);
    return i;
   },
   moveYear: function (e, t) {
    return this.moveMonth(e, t * 12);
   },
   moveAvailableDate: function (e, t, i) {
    do {
     if (((e = this[i](e, t)), !this.dateWithinRange(e))) return !1;
     i = 'moveDay';
    } while (this.dateIsDisabled(e));
    return e;
   },
   weekOfDateIsDisabled: function (e) {
    return a.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
   },
   dateIsDisabled: function (e) {
    return (
     this.weekOfDateIsDisabled(e) ||
     a.grep(this.o.datesDisabled, function (t) {
      return W(e, t);
     }).length > 0
    );
   },
   dateWithinRange: function (e) {
    return e >= this.o.startDate && e <= this.o.endDate;
   },
   keydown: function (e) {
    if (!this.picker.is(':visible')) {
     (e.keyCode === 40 || e.keyCode === 27) &&
      (this.show(), e.stopPropagation());
     return;
    }
    var t = !1,
     i,
     s,
     n = this.focusDate || this.viewDate;
    switch (e.keyCode) {
     case 27:
      this.focusDate
       ? ((this.focusDate = null),
         (this.viewDate = this.dates.get(-1) || this.viewDate),
         this.fill())
       : this.hide(),
       e.preventDefault(),
       e.stopPropagation();
      break;
     case 37:
     case 38:
     case 39:
     case 40:
      if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
       break;
      (i = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1),
       this.viewMode === 0
        ? e.ctrlKey
          ? ((s = this.moveAvailableDate(n, i, 'moveYear')),
            s && this._trigger('changeYear', this.viewDate))
          : e.shiftKey
            ? ((s = this.moveAvailableDate(n, i, 'moveMonth')),
              s && this._trigger('changeMonth', this.viewDate))
            : e.keyCode === 37 || e.keyCode === 39
              ? (s = this.moveAvailableDate(n, i, 'moveDay'))
              : this.weekOfDateIsDisabled(n) ||
                (s = this.moveAvailableDate(n, i, 'moveWeek'))
        : this.viewMode === 1
          ? ((e.keyCode === 38 || e.keyCode === 40) && (i = i * 4),
            (s = this.moveAvailableDate(n, i, 'moveMonth')))
          : this.viewMode === 2 &&
            ((e.keyCode === 38 || e.keyCode === 40) && (i = i * 4),
            (s = this.moveAvailableDate(n, i, 'moveYear'))),
       s &&
        ((this.focusDate = this.viewDate = s),
        this.setValue(),
        this.fill(),
        e.preventDefault());
      break;
     case 13:
      if (!this.o.forceParse) break;
      (n = this.focusDate || this.dates.get(-1) || this.viewDate),
       this.o.keyboardNavigation && (this._toggle_multidate(n), (t = !0)),
       (this.focusDate = null),
       (this.viewDate = this.dates.get(-1) || this.viewDate),
       this.setValue(),
       this.fill(),
       this.picker.is(':visible') &&
        (e.preventDefault(),
        e.stopPropagation(),
        this.o.autoclose && this.hide());
      break;
     case 9:
      (this.focusDate = null),
       (this.viewDate = this.dates.get(-1) || this.viewDate),
       this.fill(),
       this.hide();
      break;
    }
    t &&
     (this.dates.length
      ? this._trigger('changeDate')
      : this._trigger('clearDate'),
     this.inputField.trigger('change'));
   },
   setViewMode: function (e) {
    (this.viewMode = e),
     this.picker
      .children('div')
      .hide()
      .filter('.datepicker-' + d.viewModes[this.viewMode].clsName)
      .show(),
     this.updateNavArrows(),
     this._trigger('changeViewMode', new Date(this.viewDate));
   },
  };
  var E = function (e, t) {
   a.data(e, 'datepicker', this),
    (this.element = a(e)),
    (this.inputs = a.map(t.inputs, function (i) {
     return i.jquery ? i[0] : i;
    })),
    delete t.inputs,
    (this.keepEmptyValues = t.keepEmptyValues),
    delete t.keepEmptyValues,
    O.call(a(this.inputs), t).on('changeDate', a.proxy(this.dateUpdated, this)),
    (this.pickers = a.map(this.inputs, function (i) {
     return a.data(i, 'datepicker');
    })),
    this.updateDates();
  };
  E.prototype = {
   updateDates: function () {
    (this.dates = a.map(this.pickers, function (e) {
     return e.getUTCDate();
    })),
     this.updateRanges();
   },
   updateRanges: function () {
    var e = a.map(this.dates, function (t) {
     return t.valueOf();
    });
    a.each(this.pickers, function (t, i) {
     i.setRange(e);
    });
   },
   clearDates: function () {
    a.each(this.pickers, function (e, t) {
     t.clearDates();
    });
   },
   dateUpdated: function (e) {
    if (!this.updating) {
     this.updating = !0;
     var t = a.data(e.target, 'datepicker');
     if (t !== C) {
      var i = t.getUTCDate(),
       s = this.keepEmptyValues,
       n = a.inArray(e.target, this.inputs),
       o = n - 1,
       h = n + 1,
       f = this.inputs.length;
      if (n !== -1) {
       if (
        (a.each(this.pickers, function (u, r) {
         !r.getUTCDate() && (r === t || !s) && r.setUTCDate(i);
        }),
        i < this.dates[o])
       )
        for (
         ;
         o >= 0 &&
         i < this.dates[o] &&
         (this.pickers[o].element.val() || '').length > 0;

        )
         this.pickers[o--].setUTCDate(i);
       else if (i > this.dates[h])
        for (
         ;
         h < f &&
         i > this.dates[h] &&
         (this.pickers[h].element.val() || '').length > 0;

        )
         this.pickers[h++].setUTCDate(i);
       this.updateDates(), delete this.updating;
      }
     }
    }
   },
   destroy: function () {
    a.map(this.pickers, function (e) {
     e.destroy();
    }),
     a(this.inputs).off('changeDate', this.dateUpdated),
     delete this.element.data().datepicker;
   },
   remove: N(
    'destroy',
    'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead',
   ),
  };
  function B(e, t) {
   var i = a(e).data(),
    s = {},
    n,
    o = new RegExp('^' + t.toLowerCase() + '([A-Z])');
   t = new RegExp('^' + t.toLowerCase());
   function h(u, r) {
    return r.toLowerCase();
   }
   for (var f in i) t.test(f) && ((n = f.replace(o, h)), (s[n] = i[f]));
   return s;
  }
  function j(e) {
   var t = {};
   if (!(!y[e] && ((e = e.split('-')[0]), !y[e]))) {
    var i = y[e];
    return (
     a.each(L, function (s, n) {
      n in i && (t[n] = i[n]);
     }),
     t
    );
   }
  }
  var q = a.fn.datepicker,
   O = function (e) {
    var t = Array.apply(null, arguments);
    t.shift();
    var i;
    if (
     (this.each(function () {
      var s = a(this),
       n = s.data('datepicker'),
       o = typeof e == 'object' && e;
      if (!n) {
       var h = B(this, 'date'),
        f = a.extend({}, I, h, o),
        u = j(f.language),
        r = a.extend({}, I, u, h, o);
       s.hasClass('input-daterange') || r.inputs
        ? (a.extend(r, { inputs: r.inputs || s.find('input').toArray() }),
          (n = new E(this, r)))
        : (n = new x(this, r)),
        s.data('datepicker', n);
      }
      typeof e == 'string' &&
       typeof n[e] == 'function' &&
       (i = n[e].apply(n, t));
     }),
     i === C || i instanceof x || i instanceof E)
    )
     return this;
    if (this.length > 1)
     throw new Error(
      'Using only allowed for the collection of a single element (' +
       e +
       ' function)',
     );
    return i;
   };
  a.fn.datepicker = O;
  var I = (a.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: a.noop,
    beforeShowMonth: a.noop,
    beforeShowYear: a.noop,
    beforeShowDecade: a.noop,
    beforeShowCentury: a.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: 'mm/dd/yyyy',
    isInline: null,
    keepEmptyValues: !1,
    keyboardNavigation: !0,
    language: 'en',
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ',',
    orientation: 'auto',
    rtl: !1,
    startDate: -1 / 0,
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    updateViewDate: !0,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: 'body',
    immediateUpdates: !1,
    title: '',
    templates: { leftArrow: '&#x00AB;', rightArrow: '&#x00BB;' },
    showWeekDays: !0,
   }),
   L = (a.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart']);
  a.fn.datepicker.Constructor = x;
  var y = (a.fn.datepicker.dates = {
    en: {
     days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
     ],
     daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
     daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
     months: [
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
     monthsShort: [
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
     today: 'Today',
     clear: 'Clear',
     titleFormat: 'MM yyyy',
    },
   }),
   d = {
    viewModes: [
     { names: ['days', 'month'], clsName: 'days', e: 'changeMonth' },
     {
      names: ['months', 'year'],
      clsName: 'months',
      e: 'changeYear',
      navStep: 1,
     },
     {
      names: ['years', 'decade'],
      clsName: 'years',
      e: 'changeDecade',
      navStep: 10,
     },
     {
      names: ['decades', 'century'],
      clsName: 'decades',
      e: 'changeCentury',
      navStep: 100,
     },
     {
      names: ['centuries', 'millennium'],
      clsName: 'centuries',
      e: 'changeMillennium',
      navStep: 1e3,
     },
    ],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function (e) {
     if (typeof e.toValue == 'function' && typeof e.toDisplay == 'function')
      return e;
     var t = e.replace(this.validParts, '\0').split('\0'),
      i = e.match(this.validParts);
     if (!t || !t.length || !i || i.length === 0)
      throw new Error('Invalid date format.');
     return { separators: t, parts: i };
    },
    parseDate: function (e, t, i, s) {
     if (!e) return C;
     if (e instanceof Date) return e;
     if ((typeof t == 'string' && (t = d.parseFormat(t)), t.toValue))
      return t.toValue(e, t, i);
     var n = { d: 'moveDay', m: 'moveMonth', w: 'moveWeek', y: 'moveYear' },
      o = { yesterday: '-1d', today: '+0d', tomorrow: '+1d' },
      h,
      f,
      u,
      r,
      k;
     if (
      (e in o && (e = o[e]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(e))
     ) {
      for (
       h = e.match(/([\-+]\d+)([dmwy])/gi), e = new Date(), r = 0;
       r < h.length;
       r++
      )
       (f = h[r].match(/([\-+]\d+)([dmwy])/i)),
        (u = Number(f[1])),
        (k = n[f[2].toLowerCase()]),
        (e = x.prototype[k](e, u));
      return x.prototype._zero_utc_time(e);
     }
     h = (e && e.match(this.nonpunctuation)) || [];
     function T(D, v) {
      return (
       v === !0 && (v = 10),
       D < 100 && ((D += 2e3), D > new Date().getFullYear() + v && (D -= 100)),
       D
      );
     }
     var m = {},
      c = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
      l = {
       yyyy: function (D, v) {
        return D.setUTCFullYear(s ? T(v, s) : v);
       },
       m: function (D, v) {
        if (isNaN(D)) return D;
        for (v -= 1; v < 0; ) v += 12;
        for (v %= 12, D.setUTCMonth(v); D.getUTCMonth() !== v; )
         D.setUTCDate(D.getUTCDate() - 1);
        return D;
       },
       d: function (D, v) {
        return D.setUTCDate(v);
       },
      },
      w,
      p;
     (l.yy = l.yyyy), (l.M = l.MM = l.mm = l.m), (l.dd = l.d), (e = F());
     var g = t.parts.slice();
     h.length !== g.length &&
      (g = a(g)
       .filter(function (D, v) {
        return a.inArray(v, c) !== -1;
       })
       .toArray());
     function M() {
      var D = this.slice(0, h[r].length),
       v = h[r].slice(0, D.length);
      return D.toLowerCase() === v.toLowerCase();
     }
     if (h.length === g.length) {
      var _;
      for (r = 0, _ = g.length; r < _; r++) {
       if (((w = parseInt(h[r], 10)), (f = g[r]), isNaN(w)))
        switch (f) {
         case 'MM':
          (p = a(y[i].months).filter(M)),
           (w = a.inArray(p[0], y[i].months) + 1);
          break;
         case 'M':
          (p = a(y[i].monthsShort).filter(M)),
           (w = a.inArray(p[0], y[i].monthsShort) + 1);
          break;
        }
       m[f] = w;
      }
      var S, U;
      for (r = 0; r < c.length; r++)
       (U = c[r]),
        U in m &&
         !isNaN(m[U]) &&
         ((S = new Date(e)), l[U](S, m[U]), isNaN(S) || (e = S));
     }
     return e;
    },
    formatDate: function (e, t, i) {
     if (!e) return '';
     if ((typeof t == 'string' && (t = d.parseFormat(t)), t.toDisplay))
      return t.toDisplay(e, t, i);
     var s = {
      d: e.getUTCDate(),
      D: y[i].daysShort[e.getUTCDay()],
      DD: y[i].days[e.getUTCDay()],
      m: e.getUTCMonth() + 1,
      M: y[i].monthsShort[e.getUTCMonth()],
      MM: y[i].months[e.getUTCMonth()],
      yy: e.getUTCFullYear().toString().substring(2),
      yyyy: e.getUTCFullYear(),
     };
     (s.dd = (s.d < 10 ? '0' : '') + s.d),
      (s.mm = (s.m < 10 ? '0' : '') + s.m),
      (e = []);
     for (
      var n = a.extend([], t.separators), o = 0, h = t.parts.length;
      o <= h;
      o++
     )
      n.length && e.push(n.shift()), e.push(s[t.parts[o]]);
     return e.join('');
    },
    headTemplate:
     '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
     I.templates.leftArrow +
     '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
     I.templates.rightArrow +
     '</th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate:
     '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
   };
  (d.template =
   '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
   d.headTemplate +
   '<tbody></tbody>' +
   d.footTemplate +
   '</table></div><div class="datepicker-months"><table class="table-condensed">' +
   d.headTemplate +
   d.contTemplate +
   d.footTemplate +
   '</table></div><div class="datepicker-years"><table class="table-condensed">' +
   d.headTemplate +
   d.contTemplate +
   d.footTemplate +
   '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
   d.headTemplate +
   d.contTemplate +
   d.footTemplate +
   '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
   d.headTemplate +
   d.contTemplate +
   d.footTemplate +
   '</table></div></div>'),
   (a.fn.datepicker.DPGlobal = d),
   (a.fn.datepicker.noConflict = function () {
    return (a.fn.datepicker = q), this;
   }),
   (a.fn.datepicker.version = '1.10.0'),
   (a.fn.datepicker.deprecated = function (e) {
    var t = window.console;
    t && t.warn && t.warn('DEPRECATED: ' + e);
   }),
   a(document).on(
    'focus.datepicker.data-api click.datepicker.data-api',
    '[data-provide="datepicker"]',
    function (e) {
     var t = a(this);
     t.data('datepicker') || (e.preventDefault(), O.call(t, 'show'));
    },
   ),
   a(function () {
    O.call(a('[data-provide="datepicker-inline"]'));
   });
 });
})();