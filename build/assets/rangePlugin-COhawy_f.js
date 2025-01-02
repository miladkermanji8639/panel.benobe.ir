var h = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var y = h((D, _) => {
 /* flatpickr v4.3.2, @license MIT */ (function (a, n) {
  typeof D == 'object' && typeof _ < 'u'
   ? (_.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (a.rangePlugin = n());
 })(void 0, function () {
  function a(n) {
   return (
    n === void 0 && (n = {}),
    function (e) {
     var s = '',
      t,
      r,
      u,
      g = function () {
       if (
        (n.input
         ? (t =
            n.input instanceof Element
             ? n.input
             : window.document.querySelector(n.input))
         : ((t = e._input.cloneNode()),
           t.removeAttribute('id'),
           (t._flatpickr = void 0)),
        t.value)
       ) {
        var i = e.parseDate(t.value);
        i && e.selectedDates.push(i);
       }
       t.setAttribute('data-fp-omit', ''),
        e._bind(t, ['focus', 'click'], function () {
         e.selectedDates[1] &&
          ((e.latestSelectedDateObj = e.selectedDates[1]),
          e._setHoursFromDate(e.selectedDates[1]),
          e.jumpToDate(e.selectedDates[1])),
          (o = [!1, !0]),
          o[0],
          (r = o[1]),
          e.open(void 0, t);
         var o;
        }),
        e._bind(t, 'keydown', function (o) {
         o.key === 'Enter' &&
          (e.setDate([e.selectedDates[0], t.value], !0, s), t.click());
        }),
        n.input ||
         (e._input.parentNode &&
          e._input.parentNode.insertBefore(t, e._input.nextSibling));
      },
      m = {
       onParseConfig: function () {
        (e.config.mode = 'range'),
         (e.config.allowInput = !0),
         (s = e.config.altInput ? e.config.altFormat : e.config.dateFormat);
       },
       onReady: function () {
        g(),
         e.config.ignoredFocusElements.push(t),
         e._input.removeAttribute('readonly'),
         t.removeAttribute('readonly'),
         e._bind(e._input, 'focus', function () {
          (e.latestSelectedDateObj = e.selectedDates[0]),
           e._setHoursFromDate(e.selectedDates[0]),
           (i = [!0, !1]),
           i[0],
           (r = i[1]),
           e.jumpToDate(e.selectedDates[0]);
          var i;
         }),
         e._bind(e._input, 'keydown', function (i) {
          i.key === 'Enter' &&
           e.setDate([e._input.value, e.selectedDates[1]], !0, s);
         }),
         e.setDate(e.selectedDates, !1),
         m.onValueUpdate(e.selectedDates);
       },
       onPreCalendarPosition: function () {
        r &&
         ((e._positionElement = t),
         setTimeout(function () {
          e._positionElement = e._input;
         }, 0));
       },
       onChange: function () {
        e.selectedDates.length ||
         setTimeout(function () {
          e.selectedDates.length || ((t.value = ''), (u = []));
         }, 10),
         r &&
          setTimeout(function () {
           t.focus();
          }, 0);
       },
       onDestroy: function () {
        n.input || (t.parentNode && t.parentNode.removeChild(t));
       },
       onValueUpdate: function (i) {
        if (t) {
         if (
          ((u = !u || i.length >= u.length ? i.slice() : u),
          u.length > i.length)
         ) {
          var o = i[0],
           v = r ? [u[0], o] : [o, u[1]];
          e.setDate(v, !1), (u = v.slice());
         }
         (d = e.selectedDates.map(function (b) {
          return e.formatDate(b, s);
         })),
          (l = d[0]),
          (e._input.value = l === void 0 ? '' : l),
          (c = d[1]),
          (t.value = c === void 0 ? '' : c);
         var d, l, c;
        }
       },
      };
     return m;
    }
   );
  }
  return a;
 });
});
export default y();
