var z = (r, o) => () => (o || r((o = { exports: {} }).exports, o), o.exports);
var B = z((q, j) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-date
  * @version 2.4.0
  */ (function (r, o) {
  typeof q == 'object' && typeof j < 'u'
   ? (j.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((r = typeof globalThis < 'u' ? globalThis : r || self).FormValidation =
        r.FormValidation || {}),
       (r.FormValidation.validators = r.FormValidation.validators || {}),
       (r.FormValidation.validators.date = o(r.FormValidation)));
 })(void 0, function (r) {
  var o = r.utils.format,
   A = r.utils.isValidDate,
   k = r.utils.removeUndefined,
   C = function (t, n, m) {
    var e = n.indexOf('YYYY'),
     d = n.indexOf('MM'),
     g = n.indexOf('DD');
    if (e === -1 || d === -1 || g === -1) return null;
    var p = t.split(' '),
     l = p[0].split(m);
    if (l.length < 3) return null;
    var c = new Date(
      parseInt(l[e], 10),
      parseInt(l[d], 10) - 1,
      parseInt(l[g], 10),
     ),
     h = p.length > 2 ? p[2] : null;
    if (p.length > 1) {
     var u = p[1].split(':'),
      a = u.length > 0 ? parseInt(u[0], 10) : 0;
     c.setHours(h && h.toUpperCase() === 'PM' && a < 12 ? a + 12 : a),
      c.setMinutes(u.length > 1 ? parseInt(u[1], 10) : 0),
      c.setSeconds(u.length > 2 ? parseInt(u[2], 10) : 0);
    }
    return c;
   },
   H = function (t, n) {
    var m = n
      .replace(/Y/g, 'y')
      .replace(/M/g, 'm')
      .replace(/D/g, 'd')
      .replace(/:m/g, ':M')
      .replace(/:mm/g, ':MM')
      .replace(/:S/, ':s')
      .replace(/:SS/, ':ss'),
     e = t.getDate(),
     d = e < 10 ? '0'.concat(e) : e,
     g = t.getMonth() + 1,
     p = g < 10 ? '0'.concat(g) : g,
     l = ''.concat(t.getFullYear()).substr(2),
     c = t.getFullYear(),
     h = t.getHours() % 12 || 12,
     u = h < 10 ? '0'.concat(h) : h,
     a = t.getHours(),
     y = a < 10 ? '0'.concat(a) : a,
     f = t.getMinutes(),
     I = f < 10 ? '0'.concat(f) : f,
     v = t.getSeconds(),
     O = v < 10 ? '0'.concat(v) : v,
     T = {
      H: ''.concat(a),
      HH: ''.concat(y),
      M: ''.concat(f),
      MM: ''.concat(I),
      d: ''.concat(e),
      dd: ''.concat(d),
      h: ''.concat(h),
      hh: ''.concat(u),
      m: ''.concat(g),
      mm: ''.concat(p),
      s: ''.concat(v),
      ss: ''.concat(O),
      yy: ''.concat(l),
      yyyy: ''.concat(c),
     };
    return m.replace(
     /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
     function (M) {
      return T[M] ? T[M] : M.slice(1, M.length - 1);
     },
    );
   };
  return function () {
   return {
    validate: function (t) {
     if (t.value === '') return { meta: { date: null }, valid: !0 };
     var n = Object.assign(
       {},
       {
        format:
         t.element && t.element.getAttribute('type') === 'date'
          ? 'YYYY-MM-DD'
          : 'MM/DD/YYYY',
        message: '',
       },
       k(t.options),
      ),
      m = t.l10n ? t.l10n.date.default : n.message,
      e = { message: ''.concat(m), meta: { date: null }, valid: !1 },
      d = n.format.split(' '),
      g = d.length > 1 ? d[1] : null,
      p = d.length > 2 ? d[2] : null,
      l = t.value.split(' '),
      c = l[0],
      h = l.length > 1 ? l[1] : null,
      u = l.length > 2 ? l[2] : null;
     if (d.length !== l.length) return e;
     var a =
      n.separator ||
      (c.indexOf('/') !== -1
       ? '/'
       : c.indexOf('-') !== -1
         ? '-'
         : c.indexOf('.') !== -1
           ? '.'
           : '/');
     if (a === null || c.indexOf(a) === -1) return e;
     var y = c.split(a),
      f = d[0].split(a);
     if (y.length !== f.length) return e;
     var I = y[f.indexOf('YYYY')],
      v = y[f.indexOf('MM')],
      O = y[f.indexOf('DD')];
     if (
      !/^\d+$/.test(I) ||
      !/^\d+$/.test(v) ||
      !/^\d+$/.test(O) ||
      I.length > 4 ||
      v.length > 2 ||
      O.length > 2
     )
      return e;
     var T = parseInt(I, 10),
      M = parseInt(v, 10),
      P = parseInt(O, 10);
     if (!A(T, M, P)) return e;
     var i = new Date(T, M - 1, P);
     if (g) {
      var s = h.split(':');
      if (g.split(':').length !== s.length) return e;
      var Y =
        s.length > 0
         ? s[0].length <= 2 && /^\d+$/.test(s[0])
           ? parseInt(s[0], 10)
           : -1
         : 0,
       w =
        s.length > 1
         ? s[1].length <= 2 && /^\d+$/.test(s[1])
           ? parseInt(s[1], 10)
           : -1
         : 0,
       U =
        s.length > 2
         ? s[2].length <= 2 && /^\d+$/.test(s[2])
           ? parseInt(s[2], 10)
           : -1
         : 0;
      if (
       Y === -1 ||
       w === -1 ||
       U === -1 ||
       U < 0 ||
       U > 60 ||
       Y < 0 ||
       Y >= 24 ||
       (p && Y > 12) ||
       w < 0 ||
       w > 59
      )
       return e;
      i.setHours(u && u.toUpperCase() === 'PM' && Y < 12 ? Y + 12 : Y),
       i.setMinutes(w),
       i.setSeconds(U);
     }
     var D = typeof n.min == 'function' ? n.min() : n.min,
      V = D instanceof Date ? D : D ? C(D, f, a) : i,
      x = typeof n.max == 'function' ? n.max() : n.max,
      b = x instanceof Date ? x : x ? C(x, f, a) : i,
      S = D instanceof Date ? H(V, n.format) : D,
      $ = x instanceof Date ? H(b, n.format) : x;
     switch (!0) {
      case !!S && !$:
       return {
        message: o(t.l10n ? t.l10n.date.min : m, S),
        meta: { date: i },
        valid: i.getTime() >= V.getTime(),
       };
      case !!$ && !S:
       return {
        message: o(t.l10n ? t.l10n.date.max : m, $),
        meta: { date: i },
        valid: i.getTime() <= b.getTime(),
       };
      case !!$ && !!S:
       return {
        message: o(t.l10n ? t.l10n.date.range : m, [S, $]),
        meta: { date: i },
        valid: i.getTime() <= b.getTime() && i.getTime() >= V.getTime(),
       };
      default:
       return { message: ''.concat(m), meta: { date: i }, valid: !0 };
     }
    },
   };
  };
 });
});
export default B();
