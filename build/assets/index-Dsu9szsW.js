var z = (n, d) => () => (d || n((d = { exports: {} }).exports, d), d.exports);
var B = z((q, U) => {
 (function (n, d) {
  typeof q == 'object' && typeof U < 'u'
   ? (U.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.date = d(n.FormValidation)));
 })(void 0, function (n) {
  var d = n.utils.format,
   A = n.utils.isValidDate,
   R = n.utils.removeUndefined,
   w = function (e, a, g) {
    var t = a.indexOf('YYYY'),
     c = a.indexOf('MM'),
     m = a.indexOf('DD');
    if (t === -1 || c === -1 || m === -1) return null;
    var u = e.split(' '),
     l = u[0].split(g);
    if (l.length < 3) return null;
    var o = new Date(
      parseInt(l[t], 10),
      parseInt(l[c], 10) - 1,
      parseInt(l[m], 10),
     ),
     p = u.length > 2 ? u[2] : null;
    if (u.length > 1) {
     var v = u[1].split(':'),
      r = v.length > 0 ? parseInt(v[0], 10) : 0;
     o.setHours(p && p.toUpperCase() === 'PM' && r < 12 ? r + 12 : r),
      o.setMinutes(v.length > 1 ? parseInt(v[1], 10) : 0),
      o.setSeconds(v.length > 2 ? parseInt(v[2], 10) : 0);
    }
    return o;
   },
   j = function (e, a) {
    var g = a
      .replace(/Y/g, 'y')
      .replace(/M/g, 'm')
      .replace(/D/g, 'd')
      .replace(/:m/g, ':M')
      .replace(/:mm/g, ':MM')
      .replace(/:S/, ':s')
      .replace(/:SS/, ':ss'),
     t = e.getDate(),
     c = t < 10 ? '0'.concat(t) : t,
     m = e.getMonth() + 1,
     u = m < 10 ? '0'.concat(m) : m,
     l = ''.concat(e.getFullYear()).substr(2),
     o = e.getFullYear(),
     p = e.getHours() % 12 || 12,
     v = p < 10 ? '0'.concat(p) : p,
     r = e.getHours(),
     D = r < 10 ? '0'.concat(r) : r,
     f = e.getMinutes(),
     O = f < 10 ? '0'.concat(f) : f,
     y = e.getSeconds(),
     I = y < 10 ? '0'.concat(y) : y,
     S = {
      H: ''.concat(r),
      HH: ''.concat(D),
      M: ''.concat(f),
      MM: ''.concat(O),
      d: ''.concat(t),
      dd: ''.concat(c),
      h: ''.concat(p),
      hh: ''.concat(v),
      m: ''.concat(m),
      mm: ''.concat(u),
      s: ''.concat(y),
      ss: ''.concat(I),
      yy: ''.concat(l),
      yyyy: ''.concat(o),
     };
    return g.replace(
     /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
     function (M) {
      return S[M] ? S[M] : M.slice(1, M.length - 1);
     },
    );
   },
   k = function () {
    return {
     validate: function (e) {
      if (e.value === '') return { meta: { date: null }, valid: !0 };
      var a = Object.assign(
        {},
        {
         format:
          e.element && e.element.getAttribute('type') === 'date'
           ? 'YYYY-MM-DD'
           : 'MM/DD/YYYY',
         message: '',
        },
        R(e.options),
       ),
       g = e.l10n ? e.l10n.date.default : a.message,
       t = { message: ''.concat(g), meta: { date: null }, valid: !1 },
       c = a.format.split(' '),
       m = c.length > 1 ? c[1] : null,
       u = c.length > 2 ? c[2] : null,
       l = e.value.split(' '),
       o = l[0],
       p = l.length > 1 ? l[1] : null,
       v = l.length > 2 ? l[2] : null;
      if (c.length !== l.length) return t;
      var r =
       a.separator ||
       (o.indexOf('/') !== -1
        ? '/'
        : o.indexOf('-') !== -1
          ? '-'
          : o.indexOf('.') !== -1
            ? '.'
            : '/');
      if (r === null || o.indexOf(r) === -1) return t;
      var D = o.split(r),
       f = c[0].split(r);
      if (D.length !== f.length) return t;
      var O = D[f.indexOf('YYYY')],
       y = D[f.indexOf('MM')],
       I = D[f.indexOf('DD')];
      if (
       !/^\d+$/.test(O) ||
       !/^\d+$/.test(y) ||
       !/^\d+$/.test(I) ||
       O.length > 4 ||
       y.length > 2 ||
       I.length > 2
      )
       return t;
      var S = parseInt(O, 10),
       M = parseInt(y, 10),
       C = parseInt(I, 10);
      if (!A(S, M, C)) return t;
      var i = new Date(S, M - 1, C);
      if (m) {
       var s = p.split(':');
       if (m.split(':').length !== s.length) return t;
       var x =
         s.length > 0
          ? s[0].length <= 2 && /^\d+$/.test(s[0])
            ? parseInt(s[0], 10)
            : -1
          : 0,
        F =
         s.length > 1
          ? s[1].length <= 2 && /^\d+$/.test(s[1])
            ? parseInt(s[1], 10)
            : -1
          : 0,
        V =
         s.length > 2
          ? s[2].length <= 2 && /^\d+$/.test(s[2])
            ? parseInt(s[2], 10)
            : -1
          : 0;
       if (
        x === -1 ||
        F === -1 ||
        V === -1 ||
        V < 0 ||
        V > 60 ||
        x < 0 ||
        x >= 24 ||
        (u && x > 12) ||
        F < 0 ||
        F > 59
       )
        return t;
       i.setHours(v && v.toUpperCase() === 'PM' && x < 12 ? x + 12 : x),
        i.setMinutes(F),
        i.setSeconds(V);
      }
      var Y = typeof a.min == 'function' ? a.min() : a.min,
       $ = Y instanceof Date ? Y : Y ? w(Y, f, r) : i,
       h = typeof a.max == 'function' ? a.max() : a.max,
       P = h instanceof Date ? h : h ? w(h, f, r) : i,
       H = Y instanceof Date ? j($, a.format) : Y,
       T = h instanceof Date ? j(P, a.format) : h;
      switch (!0) {
       case !!H && !T:
        return {
         message: d(e.l10n ? e.l10n.date.min : g, H),
         meta: { date: i },
         valid: i.getTime() >= $.getTime(),
        };
       case !!T && !H:
        return {
         message: d(e.l10n ? e.l10n.date.max : g, T),
         meta: { date: i },
         valid: i.getTime() <= P.getTime(),
        };
       case !!T && !!H:
        return {
         message: d(e.l10n ? e.l10n.date.range : g, [H, T]),
         meta: { date: i },
         valid: i.getTime() <= P.getTime() && i.getTime() >= $.getTime(),
        };
       default:
        return { message: ''.concat(g), meta: { date: i }, valid: !0 };
      }
     },
    };
   };
  return k;
 });
});
export default B();
