var D = (o, e) => () => (e || o((e = { exports: {} }).exports, e), e.exports);
var w = D((v, r) => {
 /* flatpickr v4.3.2, @license MIT */ (function (o, e) {
  typeof v == 'object' && typeof r < 'u'
   ? (r.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : (o.weekSelect = e());
 })(void 0, function () {
  function o() {
   return function (e) {
    function s(a) {
     var n = a.target;
     if (n.classList.contains('flatpickr-day'))
      for (
       var t = e.days.childNodes,
        h = n.$i,
        c = h / 7,
        m = t[7 * Math.floor(c)].dateObj,
        k = t[7 * Math.ceil(c + 0.01) - 1].dateObj,
        l = t.length;
       l--;

      ) {
       var i = t[l],
        y = i.dateObj;
       y > k || y < m
        ? i.classList.remove('inRange')
        : i.classList.add('inRange');
      }
    }
    function d() {
     e.selectedDateElem &&
      ((e.weekStartDay =
       e.days.childNodes[7 * Math.floor(e.selectedDateElem.$i / 7)].dateObj),
      (e.weekEndDay =
       e.days.childNodes[
        7 * Math.ceil(e.selectedDateElem.$i / 7 + 0.01) - 1
       ].dateObj));
     for (var a = e.days.childNodes, n = a.length; n--; ) {
      var t = a[n].dateObj;
      t >= e.weekStartDay &&
       t <= e.weekEndDay &&
       a[n].classList.add('week', 'selected');
     }
    }
    function u() {
     for (var a = e.days.childNodes, n = a.length; n--; )
      a[n].classList.remove('inRange');
    }
    function g() {
     e.daysContainer !== void 0 &&
      e.daysContainer.addEventListener('mouseover', s);
    }
    function f() {
     e.daysContainer !== void 0 &&
      e.daysContainer.removeEventListener('mouseover', s);
    }
    return {
     onValueUpdate: d,
     onMonthChange: d,
     onYearChange: d,
     onClose: u,
     onParseConfig: function () {
      (e.config.mode = 'single'),
       (e.config.enableTime = !1),
       (e.config.dateFormat = e.config.dateFormat
        ? e.config.dateFormat
        : '\\W\\e\\e\\k #W, Y'),
       (e.config.altFormat = e.config.altFormat
        ? e.config.altFormat
        : '\\W\\e\\e\\k #W, Y');
     },
     onReady: [g, d],
     onDestroy: f,
    };
   };
  }
  return o;
 });
});
export default w();
