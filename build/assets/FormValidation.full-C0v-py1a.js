var lr = ($, A) => () => (A || $((A = { exports: {} }).exports, A), A.exports);
var or = lr((te, ve) => {
 (function ($, A) {
  typeof te == 'object' && typeof ve < 'u'
   ? A(te)
   : typeof define == 'function' && define.amd
     ? define(['exports'], A)
     : (($ = typeof globalThis < 'u' ? globalThis : $ || self),
       A(($.FormValidation = {})));
 })(void 0, function ($) {
  function A(s) {
   for (
    var t = s.length,
     a = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
     ],
     r = 0,
     e = 0;
    t--;

   )
    (e += a[r][parseInt(s.charAt(t), 10)]), (r = 1 - r);
   return e % 10 === 0 && e > 0;
  }
  function P(s) {
   for (var t = s.length, a = 5, r = 0; r < t; r++)
    a = ((((a || 10) * 2) % 11) + parseInt(s.charAt(r), 10)) % 10;
   return a === 1;
  }
  function ae(s) {
   for (
    var t =
      arguments.length > 1 && arguments[1] !== void 0
       ? arguments[1]
       : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     a = s.length,
     r = t.length,
     e = Math.floor(r / 2),
     n = 0;
    n < a;
    n++
   )
    e = ((((e || r) * 2) % (r + 1)) + t.indexOf(s.charAt(n))) % r;
   return e === 1;
  }
  function re(s) {
   for (
    var t = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
     ],
     a = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
     ],
     r = s.reverse(),
     e = 0,
     n = 0;
    n < r.length;
    n++
   )
    e = t[e][a[n % 8][r[n]]];
   return e === 0;
  }
  var fe = { luhn: A, mod11And10: P, mod37And36: ae, verhoeff: re };
  function k(s, t) {
   if (!(s instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function ne(s, t) {
   for (var a = 0; a < t.length; a++) {
    var r = t[a];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(s, r.key, r);
   }
  }
  function y(s, t, a) {
   return (
    t && ne(s.prototype, t),
    a && ne(s, a),
    Object.defineProperty(s, 'prototype', { writable: !1 }),
    s
   );
  }
  function p(s, t, a) {
   return (
    t in s
     ? Object.defineProperty(s, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (s[t] = a),
    s
   );
  }
  function V(s, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (s.prototype = Object.create(t && t.prototype, {
    constructor: { value: s, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(s, 'prototype', { writable: !1 }),
    t && z(s, t);
  }
  function U(s) {
   return (
    (U = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
       }),
    U(s)
   );
  }
  function z(s, t) {
   return (
    (z = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, e) {
        return (r.__proto__ = e), r;
       }),
    z(s, t)
   );
  }
  function he() {
   if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
   if (typeof Proxy == 'function') return !0;
   try {
    return (
     Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
     ),
     !0
    );
   } catch {
    return !1;
   }
  }
  function h(s) {
   if (s === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return s;
  }
  function me(s, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return h(s);
  }
  function O(s) {
   var t = he();
   return function () {
    var r = U(s),
     e;
    if (t) {
     var n = U(this).constructor;
     e = Reflect.construct(r, arguments, n);
    } else e = r.apply(this, arguments);
    return me(this, e);
   };
  }
  function pe(s, t) {
   if (s) {
    if (typeof s == 'string') return ie(s, t);
    var a = Object.prototype.toString.call(s).slice(8, -1);
    if (
     (a === 'Object' && s.constructor && (a = s.constructor.name),
     a === 'Map' || a === 'Set')
    )
     return Array.from(s);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
     return ie(s, t);
   }
  }
  function ie(s, t) {
   (t == null || t > s.length) && (t = s.length);
   for (var a = 0, r = new Array(t); a < t; a++) r[a] = s[a];
   return r;
  }
  function J(s, t) {
   var a = (typeof Symbol < 'u' && s[Symbol.iterator]) || s['@@iterator'];
   if (!a) {
    if (
     Array.isArray(s) ||
     (a = pe(s)) ||
     (t && s && typeof s.length == 'number')
    ) {
     a && (s = a);
     var r = 0,
      e = function () {};
     return {
      s: e,
      n: function () {
       return r >= s.length ? { done: !0 } : { done: !1, value: s[r++] };
      },
      e: function (o) {
       throw o;
      },
      f: e,
     };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
   }
   var n = !0,
    i = !1,
    l;
   return {
    s: function () {
     a = a.call(s);
    },
    n: function () {
     var o = a.next();
     return (n = o.done), o;
    },
    e: function (o) {
     (i = !0), (l = o);
    },
    f: function () {
     try {
      !n && a.return != null && a.return();
     } finally {
      if (i) throw l;
     }
    },
   };
  }
  function ge() {
   return {
    fns: {},
    clear: function () {
     this.fns = {};
    },
    emit: function (t) {
     for (
      var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), e = 1;
      e < a;
      e++
     )
      r[e - 1] = arguments[e];
     (this.fns[t] || []).map(function (n) {
      return n.apply(n, r);
     });
    },
    off: function (t, a) {
     if (this.fns[t]) {
      var r = this.fns[t].indexOf(a);
      r >= 0 && this.fns[t].splice(r, 1);
     }
    },
    on: function (t, a) {
     (this.fns[t] = this.fns[t] || []).push(a);
    },
   };
  }
  function be() {
   return {
    filters: {},
    add: function (t, a) {
     (this.filters[t] = this.filters[t] || []).push(a);
    },
    clear: function () {
     this.filters = {};
    },
    execute: function (t, a, r) {
     if (!this.filters[t] || !this.filters[t].length) return a;
     for (var e = a, n = this.filters[t], i = n.length, l = 0; l < i; l++)
      e = n[l].apply(e, r);
     return e;
    },
    remove: function (t, a) {
     this.filters[t] &&
      (this.filters[t] = this.filters[t].filter(function (r) {
       return r !== a;
      }));
    },
   };
  }
  function se(s, t, a, r) {
   var e = (a.getAttribute('type') || '').toLowerCase(),
    n = a.tagName.toLowerCase();
   if (n === 'textarea') return a.value;
   if (n === 'select') {
    var i = a,
     l = i.selectedIndex;
    return l >= 0 ? i.options.item(l).value : '';
   }
   if (n === 'input')
    if (e === 'radio' || e === 'checkbox') {
     var o = r.filter(function (d) {
      return d.checked;
     }).length;
     return o === 0 ? '' : o + '';
    } else return a.value;
   return '';
  }
  function b(s, t) {
   var a = Array.isArray(t) ? t : [t],
    r = s;
   return (
    a.forEach(function (e) {
     r = r.replace('%s', e);
    }),
    r
   );
  }
  function Ae() {
   var s = function (a) {
    return parseFloat(''.concat(a).replace(',', '.'));
   };
   return {
    validate: function (a) {
     var r = a.value;
     if (r === '') return { valid: !0 };
     var e = Object.assign({}, { inclusive: !0, message: '' }, a.options),
      n = s(e.min),
      i = s(e.max);
     return e.inclusive
      ? {
         message: b(a.l10n ? e.message || a.l10n.between.default : e.message, [
          ''.concat(n),
          ''.concat(i),
         ]),
         valid: parseFloat(r) >= n && parseFloat(r) <= i,
        }
      : {
         message: b(
          a.l10n ? e.message || a.l10n.between.notInclusive : e.message,
          [''.concat(n), ''.concat(i)],
         ),
         valid: parseFloat(r) > n && parseFloat(r) < i,
        };
    },
   };
  }
  function Ie() {
   return {
    validate: function (t) {
     return { valid: !0 };
    },
   };
  }
  function X(s, t) {
   if (typeof s == 'function') return s.apply(this, t);
   if (typeof s == 'string') {
    var a = s;
    a.substring(a.length - 2) === '()' && (a = a.substring(0, a.length - 2));
    var r = a.split('.'),
     e = r.pop(),
     n = window,
     i = J(r),
     l;
    try {
     for (i.s(); !(l = i.n()).done; ) {
      var o = l.value;
      n = n[o];
     }
    } catch (d) {
     i.e(d);
    } finally {
     i.f();
    }
    return typeof n[e] > 'u' ? null : n[e].apply(this, t);
   }
  }
  function Ee() {
   return {
    validate: function (t) {
     var a = X(t.options.callback, [t]);
     return typeof a == 'boolean' ? { valid: a } : a;
    },
   };
  }
  function ke() {
   return {
    validate: function (t) {
     var a =
       t.element.tagName.toLowerCase() === 'select'
        ? t.element.querySelectorAll('option:checked').length
        : t.elements.filter(function (l) {
           return l.checked;
          }).length,
      r = t.options.min ? ''.concat(t.options.min) : '',
      e = t.options.max ? ''.concat(t.options.max) : '',
      n = t.l10n
       ? t.options.message || t.l10n.choice.default
       : t.options.message,
      i = !((r && a < parseInt(r, 10)) || (e && a > parseInt(e, 10)));
     switch (!0) {
      case !!r && !!e:
       n = b(t.l10n ? t.l10n.choice.between : t.options.message, [r, e]);
       break;
      case !!r:
       n = b(t.l10n ? t.l10n.choice.more : t.options.message, r);
       break;
      case !!e:
       n = b(t.l10n ? t.l10n.choice.less : t.options.message, e);
       break;
     }
     return { message: n, valid: i };
    },
   };
  }
  var T = {
   AMERICAN_EXPRESS: { length: [15], prefix: ['34', '37'] },
   DANKORT: { length: [16], prefix: ['5019'] },
   DINERS_CLUB: {
    length: [14],
    prefix: ['300', '301', '302', '303', '304', '305', '36'],
   },
   DINERS_CLUB_US: { length: [16], prefix: ['54', '55'] },
   DISCOVER: {
    length: [16],
    prefix: [
     '6011',
     '622126',
     '622127',
     '622128',
     '622129',
     '62213',
     '62214',
     '62215',
     '62216',
     '62217',
     '62218',
     '62219',
     '6222',
     '6223',
     '6224',
     '6225',
     '6226',
     '6227',
     '6228',
     '62290',
     '62291',
     '622920',
     '622921',
     '622922',
     '622923',
     '622924',
     '622925',
     '644',
     '645',
     '646',
     '647',
     '648',
     '649',
     '65',
    ],
   },
   ELO: {
    length: [16],
    prefix: [
     '4011',
     '4312',
     '4389',
     '4514',
     '4573',
     '4576',
     '5041',
     '5066',
     '5067',
     '509',
     '6277',
     '6362',
     '6363',
     '650',
     '6516',
     '6550',
    ],
   },
   FORBRUGSFORENINGEN: { length: [16], prefix: ['600722'] },
   JCB: {
    length: [16],
    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
   },
   LASER: {
    length: [16, 17, 18, 19],
    prefix: ['6304', '6706', '6771', '6709'],
   },
   MAESTRO: {
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    prefix: [
     '5018',
     '5020',
     '5038',
     '5868',
     '6304',
     '6759',
     '6761',
     '6762',
     '6763',
     '6764',
     '6765',
     '6766',
    ],
   },
   MASTERCARD: { length: [16], prefix: ['51', '52', '53', '54', '55'] },
   SOLO: { length: [16, 18, 19], prefix: ['6334', '6767'] },
   UNIONPAY: {
    length: [16, 17, 18, 19],
    prefix: [
     '622126',
     '622127',
     '622128',
     '622129',
     '62213',
     '62214',
     '62215',
     '62216',
     '62217',
     '62218',
     '62219',
     '6222',
     '6223',
     '6224',
     '6225',
     '6226',
     '6227',
     '6228',
     '62290',
     '62291',
     '622920',
     '622921',
     '622922',
     '622923',
     '622924',
     '622925',
    ],
   },
   VISA: { length: [16], prefix: ['4'] },
   VISA_ELECTRON: {
    length: [16],
    prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
   },
  };
  function ye() {
   return {
    validate: function (t) {
     if (t.value === '') return { meta: { type: null }, valid: !0 };
     if (/[^0-9-\s]+/.test(t.value)) return { meta: { type: null }, valid: !1 };
     var a = t.value.replace(/\D/g, '');
     if (!A(a)) return { meta: { type: null }, valid: !1 };
     for (var r = 0, e = Object.keys(T); r < e.length; r++) {
      var n = e[r];
      for (var i in T[n].prefix)
       if (
        t.value.substr(0, T[n].prefix[i].length) === T[n].prefix[i] &&
        T[n].length.indexOf(a.length) !== -1
       )
        return { meta: { type: n }, valid: !0 };
     }
     return { meta: { type: null }, valid: !1 };
    },
   };
  }
  function I(s, t, a, r) {
   if (
    isNaN(s) ||
    isNaN(t) ||
    isNaN(a) ||
    s < 1e3 ||
    s > 9999 ||
    t <= 0 ||
    t > 12
   )
    return !1;
   var e = [
    31,
    s % 400 === 0 || (s % 100 !== 0 && s % 4 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
   ];
   if (a <= 0 || a > e[t - 1]) return !1;
   if (r === !0) {
    var n = new Date(),
     i = n.getFullYear(),
     l = n.getMonth(),
     o = n.getDate();
    return s < i || (s === i && t - 1 < l) || (s === i && t - 1 === l && a < o);
   }
   return !0;
  }
  function $e() {
   var s = function (r, e, n) {
     var i = e.indexOf('YYYY'),
      l = e.indexOf('MM'),
      o = e.indexOf('DD');
     if (i === -1 || l === -1 || o === -1) return null;
     var d = r.split(' '),
      u = d[0].split(n);
     if (u.length < 3) return null;
     var c = new Date(
      parseInt(u[i], 10),
      parseInt(u[l], 10) - 1,
      parseInt(u[o], 10),
     );
     if (d.length > 1) {
      var v = d[1].split(':');
      c.setHours(v.length > 0 ? parseInt(v[0], 10) : 0),
       c.setMinutes(v.length > 1 ? parseInt(v[1], 10) : 0),
       c.setSeconds(v.length > 2 ? parseInt(v[2], 10) : 0);
     }
     return c;
    },
    t = function (r, e) {
     var n = e
       .replace(/Y/g, 'y')
       .replace(/M/g, 'm')
       .replace(/D/g, 'd')
       .replace(/:m/g, ':M')
       .replace(/:mm/g, ':MM')
       .replace(/:S/, ':s')
       .replace(/:SS/, ':ss'),
      i = r.getDate(),
      l = i < 10 ? '0'.concat(i) : i,
      o = r.getMonth() + 1,
      d = o < 10 ? '0'.concat(o) : o,
      u = ''.concat(r.getFullYear()).substr(2),
      c = r.getFullYear(),
      v = r.getHours() % 12 || 12,
      f = v < 10 ? '0'.concat(v) : v,
      m = r.getHours(),
      g = m < 10 ? '0'.concat(m) : m,
      F = r.getMinutes(),
      M = F < 10 ? '0'.concat(F) : F,
      N = r.getSeconds(),
      K = N < 10 ? '0'.concat(N) : N,
      Z = {
       H: ''.concat(m),
       HH: ''.concat(g),
       M: ''.concat(F),
       MM: ''.concat(M),
       d: ''.concat(i),
       dd: ''.concat(l),
       h: ''.concat(v),
       hh: ''.concat(f),
       m: ''.concat(o),
       mm: ''.concat(d),
       s: ''.concat(N),
       ss: ''.concat(K),
       yy: ''.concat(u),
       yyyy: ''.concat(c),
      };
     return n.replace(
      /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
      function (w) {
       return Z[w] ? Z[w] : w.slice(1, w.length - 1);
      },
     );
    };
   return {
    validate: function (r) {
     if (r.value === '') return { meta: { date: null }, valid: !0 };
     var e = Object.assign(
       {},
       {
        format:
         r.element && r.element.getAttribute('type') === 'date'
          ? 'YYYY-MM-DD'
          : 'MM/DD/YYYY',
        message: '',
       },
       r.options,
      ),
      n = r.l10n ? r.l10n.date.default : e.message,
      i = { message: ''.concat(n), meta: { date: null }, valid: !1 },
      l = e.format.split(' '),
      o = l.length > 1 ? l[1] : null,
      d = l.length > 2 ? l[2] : null,
      u = r.value.split(' '),
      c = u[0],
      v = u.length > 1 ? u[1] : null;
     if (l.length !== u.length) return i;
     var f =
      e.separator ||
      (c.indexOf('/') !== -1
       ? '/'
       : c.indexOf('-') !== -1
         ? '-'
         : c.indexOf('.') !== -1
           ? '.'
           : '/');
     if (f === null || c.indexOf(f) === -1) return i;
     var m = c.split(f),
      g = l[0].split(f);
     if (m.length !== g.length) return i;
     var F = m[g.indexOf('YYYY')],
      M = m[g.indexOf('MM')],
      N = m[g.indexOf('DD')];
     if (
      !/^\d+$/.test(F) ||
      !/^\d+$/.test(M) ||
      !/^\d+$/.test(N) ||
      F.length > 4 ||
      M.length > 2 ||
      N.length > 2
     )
      return i;
     var K = parseInt(F, 10),
      Z = parseInt(M, 10),
      w = parseInt(N, 10);
     if (!I(K, Z, w)) return i;
     var S = new Date(K, Z - 1, w);
     if (o) {
      var H = v.split(':');
      if (o.split(':').length !== H.length) return i;
      var B =
        H.length > 0
         ? H[0].length <= 2 && /^\d+$/.test(H[0])
           ? parseInt(H[0], 10)
           : -1
         : 0,
       j =
        H.length > 1
         ? H[1].length <= 2 && /^\d+$/.test(H[1])
           ? parseInt(H[1], 10)
           : -1
         : 0,
       Y =
        H.length > 2
         ? H[2].length <= 2 && /^\d+$/.test(H[2])
           ? parseInt(H[2], 10)
           : -1
         : 0;
      if (
       B === -1 ||
       j === -1 ||
       Y === -1 ||
       Y < 0 ||
       Y > 60 ||
       B < 0 ||
       B >= 24 ||
       (d && B > 12) ||
       j < 0 ||
       j > 59
      )
       return i;
      S.setHours(B), S.setMinutes(j), S.setSeconds(Y);
     }
     var L = typeof e.min == 'function' ? e.min() : e.min,
      _ = L instanceof Date ? L : L ? s(L, g, f) : S,
      R = typeof e.max == 'function' ? e.max() : e.max,
      ee = R instanceof Date ? R : R ? s(R, g, f) : S,
      D = L instanceof Date ? t(_, e.format) : L,
      G = R instanceof Date ? t(ee, e.format) : R;
     switch (!0) {
      case !!D && !G:
       return {
        message: b(r.l10n ? r.l10n.date.min : n, D),
        meta: { date: S },
        valid: S.getTime() >= _.getTime(),
       };
      case !!G && !D:
       return {
        message: b(r.l10n ? r.l10n.date.max : n, G),
        meta: { date: S },
        valid: S.getTime() <= ee.getTime(),
       };
      case !!G && !!D:
       return {
        message: b(r.l10n ? r.l10n.date.range : n, [D, G]),
        meta: { date: S },
        valid: S.getTime() <= ee.getTime() && S.getTime() >= _.getTime(),
       };
      default:
       return { message: ''.concat(n), meta: { date: S }, valid: !0 };
     }
    },
   };
  }
  function Ce() {
   return {
    validate: function (t) {
     var a =
      typeof t.options.compare == 'function'
       ? t.options.compare.call(this)
       : t.options.compare;
     return { valid: a === '' || t.value !== a };
    },
   };
  }
  function Fe() {
   return {
    validate: function (t) {
     return { valid: t.value === '' || /^\d+$/.test(t.value) };
    },
   };
  }
  function Ve() {
   var s = function (a, r) {
    for (var e = a.split(/"/), n = e.length, i = [], l = '', o = 0; o < n; o++)
     if (o % 2 === 0) {
      var d = e[o].split(r),
       u = d.length;
      if (u === 1) l += d[0];
      else {
       i.push(l + d[0]);
       for (var c = 1; c < u - 1; c++) i.push(d[c]);
       l = d[u - 1];
      }
     } else (l += '"' + e[o]), o < n - 1 && (l += '"');
    return i.push(l), i;
   };
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var r = Object.assign({}, { multiple: !1, separator: /[,;]/ }, a.options),
      e =
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      n = r.multiple === !0 || ''.concat(r.multiple) === 'true';
     if (n) {
      for (
       var i = r.separator || /[,;]/, l = s(a.value, i), o = l.length, d = 0;
       d < o;
       d++
      )
       if (!e.test(l[d])) return { valid: !1 };
      return { valid: !0 };
     } else return { valid: e.test(a.value) };
    },
   };
  }
  function Oe() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a,
      r = t.options.extension
       ? t.options.extension.toLowerCase().split(',')
       : null,
      e = t.options.type ? t.options.type.toLowerCase().split(',') : null,
      n = window.File && window.FileList && window.FileReader;
     if (n) {
      var i = t.element.files,
       l = i.length,
       o = 0;
      if (t.options.maxFiles && l > parseInt(''.concat(t.options.maxFiles), 10))
       return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
      if (t.options.minFiles && l < parseInt(''.concat(t.options.minFiles), 10))
       return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
      for (var d = {}, u = 0; u < l; u++) {
       if (
        ((o += i[u].size),
        (a = i[u].name.substr(i[u].name.lastIndexOf('.') + 1)),
        (d = { ext: a, file: i[u], size: i[u].size, type: i[u].type }),
        t.options.minSize &&
         i[u].size < parseInt(''.concat(t.options.minSize), 10))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, d),
         valid: !1,
        };
       if (
        t.options.maxSize &&
        i[u].size > parseInt(''.concat(t.options.maxSize), 10)
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, d),
         valid: !1,
        };
       if (r && r.indexOf(a.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, d),
         valid: !1,
        };
       if (i[u].type && e && e.indexOf(i[u].type.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_TYPE' }, d),
         valid: !1,
        };
      }
      if (
       t.options.maxTotalSize &&
       o > parseInt(''.concat(t.options.maxTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MAX_TOTAL_SIZE', totalSize: o },
         d,
        ),
        valid: !1,
       };
      if (
       t.options.minTotalSize &&
       o < parseInt(''.concat(t.options.minTotalSize), 10)
      )
       return {
        meta: Object.assign(
         {},
         { error: 'INVALID_MIN_TOTAL_SIZE', totalSize: o },
         d,
        ),
        valid: !1,
       };
     } else if (
      ((a = t.value.substr(t.value.lastIndexOf('.') + 1)),
      r && r.indexOf(a.toLowerCase()) === -1)
     )
      return { meta: { error: 'INVALID_EXTENSION', ext: a }, valid: !1 };
     return { valid: !0 };
    },
   };
  }
  function Se() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { inclusive: !0, message: '' }, t.options),
      r = parseFloat(''.concat(a.min).replace(',', '.'));
     return a.inclusive
      ? {
         message: b(
          t.l10n ? a.message || t.l10n.greaterThan.default : a.message,
          ''.concat(r),
         ),
         valid: parseFloat(t.value) >= r,
        }
      : {
         message: b(
          t.l10n ? a.message || t.l10n.greaterThan.notInclusive : a.message,
          ''.concat(r),
         ),
         valid: parseFloat(t.value) > r,
        };
    },
   };
  }
  function He() {
   return {
    validate: function (t) {
     var a =
      typeof t.options.compare == 'function'
       ? t.options.compare.call(this)
       : t.options.compare;
     return { valid: a === '' || t.value === a };
    },
   };
  }
  function Ne() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       t.options,
      ),
      r = a.decimalSeparator === '.' ? '\\.' : a.decimalSeparator,
      e = a.thousandsSeparator === '.' ? '\\.' : a.thousandsSeparator,
      n = new RegExp(
       '^-?[0-9]{1,3}('.concat(e, '[0-9]{3})*(').concat(r, '[0-9]+)?$'),
      ),
      i = new RegExp(e, 'g'),
      l = ''.concat(t.value);
     if (!n.test(l)) return { valid: !1 };
     e && (l = l.replace(i, '')), r && (l = l.replace(r, '.'));
     var o = parseFloat(l);
     return { valid: !isNaN(o) && isFinite(o) && Math.floor(o) === o };
    },
   };
  }
  function Me() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { ipv4: !0, ipv6: !0 }, t.options),
      r =
       /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      e =
       /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
     switch (!0) {
      case a.ipv4 && !a.ipv6:
       return {
        message: t.l10n ? a.message || t.l10n.ip.ipv4 : a.message,
        valid: r.test(t.value),
       };
      case !a.ipv4 && a.ipv6:
       return {
        message: t.l10n ? a.message || t.l10n.ip.ipv6 : a.message,
        valid: e.test(t.value),
       };
      case a.ipv4 && a.ipv6:
      default:
       return {
        message: t.l10n ? a.message || t.l10n.ip.default : a.message,
        valid: r.test(t.value) || e.test(t.value),
       };
     }
    },
   };
  }
  function we() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { inclusive: !0, message: '' }, t.options),
      r = parseFloat(''.concat(a.max).replace(',', '.'));
     return a.inclusive
      ? {
         message: b(
          t.l10n ? a.message || t.l10n.lessThan.default : a.message,
          ''.concat(r),
         ),
         valid: parseFloat(t.value) <= r,
        }
      : {
         message: b(
          t.l10n ? a.message || t.l10n.lessThan.notInclusive : a.message,
          ''.concat(r),
         ),
         valid: parseFloat(t.value) < r,
        };
    },
   };
  }
  function Le() {
   return {
    validate: function (t) {
     var a = !!t.options && !!t.options.trim,
      r = t.value;
     return { valid: (!a && r !== '') || (a && r !== '' && r.trim() !== '') };
    },
   };
  }
  function Re() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       t.options,
      ),
      r = ''.concat(t.value);
     r.substr(0, 1) === a.decimalSeparator
      ? (r = '0'.concat(a.decimalSeparator).concat(r.substr(1)))
      : r.substr(0, 2) === '-'.concat(a.decimalSeparator) &&
        (r = '-0'.concat(a.decimalSeparator).concat(r.substr(2)));
     var e = a.decimalSeparator === '.' ? '\\.' : a.decimalSeparator,
      n = a.thousandsSeparator === '.' ? '\\.' : a.thousandsSeparator,
      i = new RegExp(
       '^-?[0-9]{1,3}('.concat(n, '[0-9]{3})*(').concat(e, '[0-9]+)?$'),
      ),
      l = new RegExp(n, 'g');
     if (!i.test(r)) return { valid: !1 };
     n && (r = r.replace(l, '')), e && (r = r.replace(e, '.'));
     var o = parseFloat(r);
     return { valid: !isNaN(o) && isFinite(o) };
    },
   };
  }
  function Te() {
   return {
    validate: function (t) {
     return X(t.options.promise, [t]);
    },
   };
  }
  function xe() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = t.options.regexp;
     if (a instanceof RegExp) return { valid: a.test(t.value) };
     var r = a.toString(),
      e = t.options.flags ? new RegExp(r, t.options.flags) : new RegExp(r);
     return { valid: e.test(t.value) };
    },
   };
  }
  var Ze = function (t) {
   return Array(t)
    .fill('')
    .map(function (a) {
     return Math.random().toString(36).charAt(2);
    })
    .join('');
  };
  function le(s, t) {
   var a = function (e) {
    return Object.keys(e)
     .map(function (n) {
      return ''
       .concat(encodeURIComponent(n), '=')
       .concat(encodeURIComponent(e[n]));
     })
     .join('&');
   };
   return new Promise(function (r, e) {
    var n = Object.assign(
      {},
      { crossDomain: !1, headers: {}, method: 'GET', params: {} },
      t,
     ),
     i = Object.keys(n.params)
      .map(function (v) {
       return ''
        .concat(encodeURIComponent(v), '=')
        .concat(encodeURIComponent(n.params[v]));
      })
      .join('&'),
     l = s.indexOf('?'),
     o =
      n.method === 'GET'
       ? ''
          .concat(s)
          .concat(l ? '?' : '&')
          .concat(i)
       : s;
    if (n.crossDomain) {
     var d = document.createElement('script'),
      u = '___FormValidationFetch_'.concat(Ze(12), '___');
     (window[u] = function (v) {
      delete window[u], r(v);
     }),
      (d.src = ''
       .concat(o)
       .concat(l ? '&' : '?', 'callback=')
       .concat(u)),
      (d.async = !0),
      d.addEventListener('load', function () {
       d.parentNode.removeChild(d);
      }),
      d.addEventListener('error', function () {
       return e;
      }),
      document.head.appendChild(d);
    } else {
     var c = new XMLHttpRequest();
     c.open(n.method, o),
      c.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
      n.method === 'POST' &&
       c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
      Object.keys(n.headers).forEach(function (v) {
       return c.setRequestHeader(v, n.headers[v]);
      }),
      c.addEventListener('load', function () {
       r(JSON.parse(this.responseText));
      }),
      c.addEventListener('error', function () {
       return e;
      }),
      c.send(a(n.params));
    }
   });
  }
  function Be() {
   var s = {
    crossDomain: !1,
    data: {},
    headers: {},
    method: 'GET',
    validKey: 'valid',
   };
   return {
    validate: function (a) {
     if (a.value === '') return Promise.resolve({ valid: !0 });
     var r = Object.assign({}, s, a.options),
      e = r.data;
     typeof r.data == 'function' && (e = r.data.call(this, a)),
      typeof e == 'string' && (e = JSON.parse(e)),
      (e[r.name || a.field] = a.value);
     var n = typeof r.url == 'function' ? r.url.call(this, a) : r.url;
     return le(n, {
      crossDomain: r.crossDomain,
      headers: r.headers,
      method: r.method,
      params: e,
     })
      .then(function (i) {
       return Promise.resolve({
        message: i.message,
        meta: i,
        valid: ''.concat(i[r.validKey]) === 'true',
       });
      })
      .catch(function (i) {
       return Promise.reject({ valid: !1 });
      });
    },
   };
  }
  function De() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { case: 'lower' }, t.options),
      r = (a.case || 'lower').toLowerCase();
     return {
      message:
       a.message ||
       (t.l10n
        ? r === 'upper'
          ? t.l10n.stringCase.upper
          : t.l10n.stringCase.default
        : a.message),
      valid:
       r === 'upper'
        ? t.value === t.value.toUpperCase()
        : t.value === t.value.toLowerCase(),
     };
    },
   };
  }
  function Ge() {
   var s = function (a) {
    for (var r = a.length, e = a.length - 1; e >= 0; e--) {
     var n = a.charCodeAt(e);
     n > 127 && n <= 2047 ? r++ : n > 2047 && n <= 65535 && (r += 2),
      n >= 56320 && n <= 57343 && e--;
    }
    return ''.concat(r);
   };
   return {
    validate: function (a) {
     var r = Object.assign(
       {},
       { message: '', trim: !1, utf8Bytes: !1 },
       a.options,
      ),
      e =
       r.trim === !0 || ''.concat(r.trim) === 'true' ? a.value.trim() : a.value;
     if (e === '') return { valid: !0 };
     var n = r.min ? ''.concat(r.min) : '',
      i = r.max ? ''.concat(r.max) : '',
      l = r.utf8Bytes ? s(e) : e.length,
      o = !0,
      d = a.l10n ? r.message || a.l10n.stringLength.default : r.message;
     switch (
      (((n && l < parseInt(n, 10)) || (i && l > parseInt(i, 10))) && (o = !1),
      !0)
     ) {
      case !!n && !!i:
       d = b(a.l10n ? r.message || a.l10n.stringLength.between : r.message, [
        n,
        i,
       ]);
       break;
      case !!n:
       d = b(
        a.l10n ? r.message || a.l10n.stringLength.more : r.message,
        ''.concat(parseInt(n, 10)),
       );
       break;
      case !!i:
       d = b(
        a.l10n ? r.message || a.l10n.stringLength.less : r.message,
        ''.concat(parseInt(i, 10)),
       );
       break;
     }
     return { message: d, valid: o };
    },
   };
  }
  function Pe() {
   var s = {
    allowEmptyProtocol: !1,
    allowLocal: !1,
    protocol: 'http, https, ftp',
   };
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var r = Object.assign({}, s, a.options),
      e = r.allowLocal === !0 || ''.concat(r.allowLocal) === 'true',
      n =
       r.allowEmptyProtocol === !0 ||
       ''.concat(r.allowEmptyProtocol) === 'true',
      i = r.protocol.split(',').join('|').replace(/\s/g, ''),
      l = new RegExp(
       '^(?:(?:' +
        i +
        ')://)' +
        (n ? '?' : '') +
        '(?:\\S+(?::\\S*)?@)?(?:' +
        (e
         ? ''
         : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        (e ? '?' : '') +
        ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
       'i',
      );
     return { valid: l.test(a.value) };
    },
   };
  }
  function Ue() {
   return {
    validate: function (t) {
     return {
      valid:
       t.value === '' ||
       /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
        t.value,
       ),
     };
    },
   };
  }
  function Ke() {
   return {
    validate: function (t) {
     return {
      valid:
       t.value === '' ||
       /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(t.value),
     };
    },
   };
  }
  function je() {
   var s = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
    t = [
     'aliceblue',
     'antiquewhite',
     'aqua',
     'aquamarine',
     'azure',
     'beige',
     'bisque',
     'black',
     'blanchedalmond',
     'blue',
     'blueviolet',
     'brown',
     'burlywood',
     'cadetblue',
     'chartreuse',
     'chocolate',
     'coral',
     'cornflowerblue',
     'cornsilk',
     'crimson',
     'cyan',
     'darkblue',
     'darkcyan',
     'darkgoldenrod',
     'darkgray',
     'darkgreen',
     'darkgrey',
     'darkkhaki',
     'darkmagenta',
     'darkolivegreen',
     'darkorange',
     'darkorchid',
     'darkred',
     'darksalmon',
     'darkseagreen',
     'darkslateblue',
     'darkslategray',
     'darkslategrey',
     'darkturquoise',
     'darkviolet',
     'deeppink',
     'deepskyblue',
     'dimgray',
     'dimgrey',
     'dodgerblue',
     'firebrick',
     'floralwhite',
     'forestgreen',
     'fuchsia',
     'gainsboro',
     'ghostwhite',
     'gold',
     'goldenrod',
     'gray',
     'green',
     'greenyellow',
     'grey',
     'honeydew',
     'hotpink',
     'indianred',
     'indigo',
     'ivory',
     'khaki',
     'lavender',
     'lavenderblush',
     'lawngreen',
     'lemonchiffon',
     'lightblue',
     'lightcoral',
     'lightcyan',
     'lightgoldenrodyellow',
     'lightgray',
     'lightgreen',
     'lightgrey',
     'lightpink',
     'lightsalmon',
     'lightseagreen',
     'lightskyblue',
     'lightslategray',
     'lightslategrey',
     'lightsteelblue',
     'lightyellow',
     'lime',
     'limegreen',
     'linen',
     'magenta',
     'maroon',
     'mediumaquamarine',
     'mediumblue',
     'mediumorchid',
     'mediumpurple',
     'mediumseagreen',
     'mediumslateblue',
     'mediumspringgreen',
     'mediumturquoise',
     'mediumvioletred',
     'midnightblue',
     'mintcream',
     'mistyrose',
     'moccasin',
     'navajowhite',
     'navy',
     'oldlace',
     'olive',
     'olivedrab',
     'orange',
     'orangered',
     'orchid',
     'palegoldenrod',
     'palegreen',
     'paleturquoise',
     'palevioletred',
     'papayawhip',
     'peachpuff',
     'peru',
     'pink',
     'plum',
     'powderblue',
     'purple',
     'red',
     'rosybrown',
     'royalblue',
     'saddlebrown',
     'salmon',
     'sandybrown',
     'seagreen',
     'seashell',
     'sienna',
     'silver',
     'skyblue',
     'slateblue',
     'slategray',
     'slategrey',
     'snow',
     'springgreen',
     'steelblue',
     'tan',
     'teal',
     'thistle',
     'tomato',
     'transparent',
     'turquoise',
     'violet',
     'wheat',
     'white',
     'whitesmoke',
     'yellow',
     'yellowgreen',
    ],
    a = function (d) {
     return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(d);
    },
    r = function (d) {
     return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
      d,
     );
    },
    e = function (d) {
     return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
      d,
     );
    },
    n = function (d) {
     return t.indexOf(d) >= 0;
    },
    i = function (d) {
     return (
      /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(
       d,
      ) ||
      /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
       d,
      )
     );
    },
    l = function (d) {
     return (
      /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
       d,
      ) ||
      /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
       d,
      )
     );
    };
   return {
    validate: function (d) {
     if (d.value === '') return { valid: !0 };
     var u =
       typeof d.options.type == 'string'
        ? d.options.type.toString().replace(/s/g, '').split(',')
        : d.options.type || s,
      c = J(u),
      v;
     try {
      for (c.s(); !(v = c.n()).done; ) {
       var f = v.value,
        m = f.toLowerCase();
       if (s.indexOf(m) !== -1) {
        var g = !0;
        switch (m) {
         case 'hex':
          g = a(d.value);
          break;
         case 'hsl':
          g = r(d.value);
          break;
         case 'hsla':
          g = e(d.value);
          break;
         case 'keyword':
          g = n(d.value);
          break;
         case 'rgb':
          g = i(d.value);
          break;
         case 'rgba':
          g = l(d.value);
          break;
        }
        if (g) return { valid: !0 };
       }
      }
     } catch (F) {
      c.e(F);
     } finally {
      c.f();
     }
     return { valid: !1 };
    },
   };
  }
  function Ye() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = t.value.toUpperCase();
     if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(a))
      return { valid: !1 };
     var r = a.split(''),
      e = r.pop(),
      n = r.map(function (o) {
       var d = o.charCodeAt(0);
       switch (!0) {
        case o === '*':
         return 36;
        case o === '@':
         return 37;
        case o === '#':
         return 38;
        case d >= 65 && d <= 90:
         return d - 65 + 10;
        default:
         return parseInt(o, 10);
       }
      }),
      i = n
       .map(function (o, d) {
        var u = d % 2 === 0 ? o : 2 * o;
        return Math.floor(u / 10) + (u % 10);
       })
       .reduce(function (o, d) {
        return o + d;
       }, 0),
      l = (10 - (i % 10)) % 10;
     return { valid: e === ''.concat(l) };
    },
   };
  }
  function ze() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(t.value)) return { valid: !1 };
     for (
      var a = t.value.length, r = 0, e = a === 8 ? [3, 1] : [1, 3], n = 0;
      n < a - 1;
      n++
     )
      r += parseInt(t.value.charAt(n), 10) * e[n % 2];
     return (
      (r = (10 - (r % 10)) % 10),
      { valid: ''.concat(r) === t.value.charAt(a - 1) }
     );
    },
   };
  }
  function Je() {
   var s = {
    ANDOVER: ['10', '12'],
    ATLANTA: ['60', '67'],
    AUSTIN: ['50', '53'],
    BROOKHAVEN: [
     '01',
     '02',
     '03',
     '04',
     '05',
     '06',
     '11',
     '13',
     '14',
     '16',
     '21',
     '22',
     '23',
     '25',
     '34',
     '51',
     '52',
     '54',
     '55',
     '56',
     '57',
     '58',
     '59',
     '65',
    ],
    CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
    FRESNO: ['15', '24'],
    INTERNET: ['20', '26', '27', '45', '46', '47'],
    KANSAS_CITY: ['40', '44'],
    MEMPHIS: ['94', '95'],
    OGDEN: ['80', '90'],
    PHILADELPHIA: [
     '33',
     '39',
     '41',
     '42',
     '43',
     '48',
     '62',
     '63',
     '64',
     '66',
     '68',
     '71',
     '72',
     '73',
     '74',
     '75',
     '76',
     '77',
     '81',
     '82',
     '83',
     '84',
     '85',
     '86',
     '87',
     '88',
     '91',
     '92',
     '93',
     '98',
     '99',
    ],
    SMALL_BUSINESS_ADMINISTRATION: ['31'],
   };
   return {
    validate: function (a) {
     if (a.value === '') return { meta: null, valid: !0 };
     if (!/^[0-9]{2}-?[0-9]{7}$/.test(a.value))
      return { meta: null, valid: !1 };
     var r = ''.concat(a.value.substr(0, 2));
     for (var e in s)
      if (s[e].indexOf(r) !== -1) return { meta: { campus: e }, valid: !0 };
     return { meta: null, valid: !1 };
    },
   };
  }
  function Xe() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = t.value.toUpperCase();
     return /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
      a,
     )
      ? ((a = a.replace(/\s/g, '').replace(/-/g, '')),
        a.substr(0, 5) === 'GRID:' && (a = a.substr(5)),
        { valid: ae(a) })
      : { valid: !1 };
    },
   };
  }
  function We() {
   return {
    validate: function (t) {
     return { valid: t.value === '' || /^[0-9a-fA-F]+$/.test(t.value) };
    },
   };
  }
  function Qe() {
   var s = {
     AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
     AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
     AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
     AO: 'AO[0-9]{2}[0-9]{21}',
     AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
     AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
     BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
     BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
     BF: 'BF[0-9]{2}[0-9]{23}',
     BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
     BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
     BI: 'BI[0-9]{2}[0-9]{12}',
     BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
     BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
     CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
     CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
     CM: 'CM[0-9]{2}[0-9]{23}',
     CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
     CV: 'CV[0-9]{2}[0-9]{21}',
     CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
     CZ: 'CZ[0-9]{2}[0-9]{20}',
     DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
     DK: 'DK[0-9]{2}[0-9]{14}',
     DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
     DZ: 'DZ[0-9]{2}[0-9]{20}',
     EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
     ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
     FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
     FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
     FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
     GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
     GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
     GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
     GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
     GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
     GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
     HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
     HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
     IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
     IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
     IR: 'IR[0-9]{2}[0-9]{22}',
     IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
     IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
     JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
     KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
     KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
     LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
     LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
     LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
     LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
     LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
     MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
     MD: 'MD[0-9]{2}[A-Z0-9]{20}',
     ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     MG: 'MG[0-9]{2}[0-9]{23}',
     MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
     ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
     MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
     MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
     MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
     MZ: 'MZ[0-9]{2}[0-9]{21}',
     NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
     NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
     PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
     PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
     PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
     PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
     QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
     RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
     RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
     SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
     SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
     SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
     SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
     SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
     TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
     TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
     VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
     XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}',
    },
    t = [
     'AT',
     'BE',
     'BG',
     'CH',
     'CY',
     'CZ',
     'DE',
     'DK',
     'EE',
     'ES',
     'FI',
     'FR',
     'GB',
     'GI',
     'GR',
     'HR',
     'HU',
     'IE',
     'IS',
     'IT',
     'LI',
     'LT',
     'LU',
     'LV',
     'MC',
     'MT',
     'NL',
     'NO',
     'PL',
     'PT',
     'RO',
     'SE',
     'SI',
     'SK',
     'SM',
    ];
   return {
    validate: function (r) {
     if (r.value === '') return { valid: !0 };
     var e = Object.assign({}, { message: '' }, r.options),
      n = r.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
      i = e.country || n.substr(0, 2);
     if (!s[i]) return { message: e.message, valid: !1 };
     if (e.sepa !== void 0) {
      var l = t.indexOf(i) !== -1;
      if (
       ((e.sepa === 'true' || e.sepa === !0) && !l) ||
       ((e.sepa === 'false' || e.sepa === !1) && l)
      )
       return { message: e.message, valid: !1 };
     }
     var o = b(
      r.l10n ? e.message || r.l10n.iban.country : e.message,
      r.l10n ? r.l10n.iban.countries[i] : i,
     );
     if (!new RegExp('^'.concat(s[i], '$')).test(r.value))
      return { message: o, valid: !1 };
     (n = ''.concat(n.substr(4)).concat(n.substr(0, 4))),
      (n = n
       .split('')
       .map(function (v) {
        var f = v.charCodeAt(0);
        return f >= 65 && f <= 90 ? f - 65 + 10 : v;
       })
       .join(''));
     for (var d = parseInt(n.substr(0, 1), 10), u = n.length, c = 1; c < u; ++c)
      d = (d * 10 + parseInt(n.substr(c, 1), 10)) % 97;
     return { message: o, valid: d === 1 };
    },
   };
  }
  function qe(s) {
   var t = s.replace(/\./g, '');
   return { meta: {}, valid: /^\d{7,8}$/.test(t) };
  }
  function x(s, t) {
   if (!/^\d{13}$/.test(s)) return !1;
   var a = parseInt(s.substr(0, 2), 10),
    r = parseInt(s.substr(2, 2), 10),
    e = parseInt(s.substr(7, 2), 10),
    n = parseInt(s.substr(12, 1), 10);
   if (a > 31 || r > 12) return !1;
   for (var i = 0, l = 0; l < 6; l++)
    i += (7 - l) * (parseInt(s.charAt(l), 10) + parseInt(s.charAt(l + 6), 10));
   if (((i = 11 - (i % 11)), (i === 10 || i === 11) && (i = 0), i !== n))
    return !1;
   switch (t.toUpperCase()) {
    case 'BA':
     return 10 <= e && e <= 19;
    case 'MK':
     return 41 <= e && e <= 49;
    case 'ME':
     return 20 <= e && e <= 29;
    case 'RS':
     return 70 <= e && e <= 99;
    case 'SI':
     return 50 <= e && e <= 59;
    default:
     return !0;
   }
  }
  function _e(s) {
   return { meta: {}, valid: x(s, 'BA') };
  }
  function et(s) {
   if (!/^\d{10}$/.test(s) && !/^\d{6}\s\d{3}\s\d{1}$/.test(s))
    return { meta: {}, valid: !1 };
   var t = s.replace(/\s/g, ''),
    a = parseInt(t.substr(0, 2), 10) + 1900,
    r = parseInt(t.substr(2, 2), 10),
    e = parseInt(t.substr(4, 2), 10);
   if (
    (r > 40 ? ((a += 100), (r -= 40)) : r > 20 && ((a -= 100), (r -= 20)),
    !I(a, r, e))
   )
    return { meta: {}, valid: !1 };
   for (var n = 0, i = [2, 4, 8, 5, 10, 9, 7, 3, 6], l = 0; l < 9; l++)
    n += parseInt(t.charAt(l), 10) * i[l];
   return (
    (n = (n % 11) % 10), { meta: {}, valid: ''.concat(n) === t.substr(9, 1) }
   );
  }
  function tt(s) {
   var t = s.replace(/\D/g, '');
   if (
    !/^\d{11}$/.test(t) ||
    /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)
   )
    return { meta: {}, valid: !1 };
   var a = 0,
    r;
   for (r = 0; r < 9; r++) a += (10 - r) * parseInt(t.charAt(r), 10);
   if (
    ((a = 11 - (a % 11)),
    (a === 10 || a === 11) && (a = 0),
    ''.concat(a) !== t.charAt(9))
   )
    return { meta: {}, valid: !1 };
   var e = 0;
   for (r = 0; r < 10; r++) e += (11 - r) * parseInt(t.charAt(r), 10);
   return (
    (e = 11 - (e % 11)),
    (e === 10 || e === 11) && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.charAt(10) }
   );
  }
  function at(s) {
   if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(s))
    return { meta: {}, valid: !1 };
   for (
    var t = s.replace(/\D/g, '').substr(3),
     a = t.length,
     r = a === 8 ? [3, 1] : [1, 3],
     e = 0,
     n = 0;
    n < a - 1;
    n++
   )
    e += parseInt(t.charAt(n), 10) * r[n % 2];
   return (
    (e = 10 - (e % 10)), { meta: {}, valid: ''.concat(e) === t.charAt(a - 1) }
   );
  }
  function rt(s) {
   if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(s)) return { meta: {}, valid: !1 };
   for (var t = s.replace(/-/g, ''); t.length < 9; ) t = '0'.concat(t);
   for (var a = [3, 2, 7, 6, 5, 4, 3, 2], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   r = 11 - (r % 11);
   var n = ''.concat(r);
   return (
    r === 11 ? (n = '0') : r === 10 && (n = 'K'),
    { meta: {}, valid: n === t.charAt(8).toUpperCase() }
   );
  }
  function nt(s) {
   var t = s.trim();
   if (!/^\d{15}$/.test(t) && !/^\d{17}[\dXx]{1}$/.test(t))
    return { meta: {}, valid: !1 };
   var a = {
     11: {
      0: [0],
      1: [
       [0, 9],
       [11, 17],
      ],
      2: [0, 28, 29],
     },
     12: { 0: [0], 1: [[0, 16]], 2: [0, 21, 23, 25] },
     13: {
      0: [0],
      1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
      2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
      3: [
       [0, 4],
       [21, 24],
      ],
      4: [[0, 4], 6, 21, [23, 35], 81],
      5: [[0, 3], [21, 35], 81, 82],
      6: [
       [0, 4],
       [21, 38],
       [81, 84],
      ],
      7: [[0, 3], 5, 6, [21, 33]],
      8: [
       [0, 4],
       [21, 28],
      ],
      9: [
       [0, 3],
       [21, 30],
       [81, 84],
      ],
      10: [[0, 3], [22, 26], 28, 81, 82],
      11: [[0, 2], [21, 28], 81, 82],
     },
     14: {
      0: [0],
      1: [0, 1, [5, 10], [21, 23], 81],
      2: [[0, 3], 11, 12, [21, 27]],
      3: [[0, 3], 11, 21, 22],
      4: [[0, 2], 11, 21, [23, 31], 81],
      5: [[0, 2], 21, 22, 24, 25, 81],
      6: [
       [0, 3],
       [21, 24],
      ],
      7: [[0, 2], [21, 29], 81],
      8: [[0, 2], [21, 30], 81, 82],
      9: [[0, 2], [21, 32], 81],
      10: [[0, 2], [21, 34], 81, 82],
      11: [[0, 2], [21, 30], 81, 82],
      23: [[0, 3], 22, 23, [25, 30], 32, 33],
     },
     15: {
      0: [0],
      1: [
       [0, 5],
       [21, 25],
      ],
      2: [
       [0, 7],
       [21, 23],
      ],
      3: [[0, 4]],
      4: [
       [0, 4],
       [21, 26],
       [28, 30],
      ],
      5: [[0, 2], [21, 26], 81],
      6: [
       [0, 2],
       [21, 27],
      ],
      7: [
       [0, 3],
       [21, 27],
       [81, 85],
      ],
      8: [
       [0, 2],
       [21, 26],
      ],
      9: [[0, 2], [21, 29], 81],
      22: [
       [0, 2],
       [21, 24],
      ],
      25: [
       [0, 2],
       [22, 31],
      ],
      26: [[0, 2], [24, 27], [29, 32], 34],
      28: [0, 1, [22, 27]],
      29: [0, [21, 23]],
     },
     21: {
      0: [0],
      1: [[0, 6], [11, 14], [22, 24], 81],
      2: [[0, 4], [11, 13], 24, [81, 83]],
      3: [[0, 4], 11, 21, 23, 81],
      4: [[0, 4], 11, [21, 23]],
      5: [[0, 5], 21, 22],
      6: [[0, 4], 24, 81, 82],
      7: [[0, 3], 11, 26, 27, 81, 82],
      8: [[0, 4], 11, 81, 82],
      9: [[0, 5], 11, 21, 22],
      10: [[0, 5], 11, 21, 81],
      11: [[0, 3], 21, 22],
      12: [[0, 2], 4, 21, 23, 24, 81, 82],
      13: [[0, 3], 21, 22, 24, 81, 82],
      14: [[0, 4], 21, 22, 81],
     },
     22: {
      0: [0],
      1: [[0, 6], 12, 22, [81, 83]],
      2: [[0, 4], 11, 21, [81, 84]],
      3: [[0, 3], 22, 23, 81, 82],
      4: [[0, 3], 21, 22],
      5: [[0, 3], 21, 23, 24, 81, 82],
      6: [[0, 2], 4, 5, [21, 23], 25, 81],
      7: [[0, 2], [21, 24], 81],
      8: [[0, 2], 21, 22, 81, 82],
      24: [[0, 6], 24, 26],
     },
     23: {
      0: [0],
      1: [[0, 12], 21, [23, 29], [81, 84]],
      2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
      3: [[0, 7], 21, 81, 82],
      4: [[0, 7], 21, 22],
      5: [[0, 3], 5, 6, [21, 24]],
      6: [
       [0, 6],
       [21, 24],
      ],
      7: [[0, 16], 22, 81],
      8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
      9: [[0, 4], 21],
      10: [[0, 5], 24, 25, 81, [83, 85]],
      11: [[0, 2], 21, 23, 24, 81, 82],
      12: [
       [0, 2],
       [21, 26],
       [81, 83],
      ],
      27: [
       [0, 4],
       [21, 23],
      ],
     },
     31: { 0: [0], 1: [0, 1, [3, 10], [12, 20]], 2: [0, 30] },
     32: {
      0: [0],
      1: [[0, 7], 11, [13, 18], 24, 25],
      2: [[0, 6], 11, 81, 82],
      3: [[0, 5], 11, 12, [21, 24], 81, 82],
      4: [[0, 2], 4, 5, 11, 12, 81, 82],
      5: [
       [0, 9],
       [81, 85],
      ],
      6: [[0, 2], 11, 12, 21, 23, [81, 84]],
      7: [0, 1, 3, 5, 6, [21, 24]],
      8: [[0, 4], 11, 26, [29, 31]],
      9: [[0, 3], [21, 25], 28, 81, 82],
      10: [[0, 3], 11, 12, 23, 81, 84, 88],
      11: [[0, 2], 11, 12, [81, 83]],
      12: [
       [0, 4],
       [81, 84],
      ],
      13: [[0, 2], 11, [21, 24]],
     },
     33: {
      0: [0],
      1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
      2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
      3: [[0, 4], 22, 24, [26, 29], 81, 82],
      4: [[0, 2], 11, 21, 24, [81, 83]],
      5: [
       [0, 3],
       [21, 23],
      ],
      6: [[0, 2], 21, 24, [81, 83]],
      7: [[0, 3], 23, 26, 27, [81, 84]],
      8: [[0, 3], 22, 24, 25, 81],
      9: [[0, 3], 21, 22],
      10: [[0, 4], [21, 24], 81, 82],
      11: [[0, 2], [21, 27], 81],
     },
     34: {
      0: [0],
      1: [[0, 4], 11, [21, 24], 81],
      2: [[0, 4], 7, 8, [21, 23], 25],
      3: [[0, 4], 11, [21, 23]],
      4: [[0, 6], 21],
      5: [[0, 4], 6, [21, 23]],
      6: [[0, 4], 21],
      7: [[0, 3], 11, 21],
      8: [[0, 3], 11, [22, 28], 81],
      10: [
       [0, 4],
       [21, 24],
      ],
      11: [[0, 3], 22, [24, 26], 81, 82],
      12: [[0, 4], 21, 22, 25, 26, 82],
      13: [
       [0, 2],
       [21, 24],
      ],
      14: [
       [0, 2],
       [21, 24],
      ],
      15: [
       [0, 3],
       [21, 25],
      ],
      16: [
       [0, 2],
       [21, 23],
      ],
      17: [
       [0, 2],
       [21, 23],
      ],
      18: [[0, 2], [21, 25], 81],
     },
     35: {
      0: [0],
      1: [[0, 5], 11, [21, 25], 28, 81, 82],
      2: [
       [0, 6],
       [11, 13],
      ],
      3: [[0, 5], 22],
      4: [[0, 3], 21, [23, 30], 81],
      5: [[0, 5], 21, [24, 27], [81, 83]],
      6: [[0, 3], [22, 29], 81],
      7: [
       [0, 2],
       [21, 25],
       [81, 84],
      ],
      8: [[0, 2], [21, 25], 81],
      9: [[0, 2], [21, 26], 81, 82],
     },
     36: {
      0: [0],
      1: [[0, 5], 11, [21, 24]],
      2: [[0, 3], 22, 81],
      3: [[0, 2], 13, [21, 23]],
      4: [[0, 3], 21, [23, 30], 81, 82],
      5: [[0, 2], 21],
      6: [[0, 2], 22, 81],
      7: [[0, 2], [21, 35], 81, 82],
      8: [[0, 3], [21, 30], 81],
      9: [
       [0, 2],
       [21, 26],
       [81, 83],
      ],
      10: [
       [0, 2],
       [21, 30],
      ],
      11: [[0, 2], [21, 30], 81],
     },
     37: {
      0: [0],
      1: [[0, 5], 12, 13, [24, 26], 81],
      2: [[0, 3], 5, [11, 14], [81, 85]],
      3: [
       [0, 6],
       [21, 23],
      ],
      4: [[0, 6], 81],
      5: [
       [0, 3],
       [21, 23],
      ],
      6: [[0, 2], [11, 13], 34, [81, 87]],
      7: [[0, 5], 24, 25, [81, 86]],
      8: [[0, 2], 11, [26, 32], [81, 83]],
      9: [[0, 3], 11, 21, 23, 82, 83],
      10: [
       [0, 2],
       [81, 83],
      ],
      11: [[0, 3], 21, 22],
      12: [[0, 3]],
      13: [[0, 2], 11, 12, [21, 29]],
      14: [[0, 2], [21, 28], 81, 82],
      15: [[0, 2], [21, 26], 81],
      16: [
       [0, 2],
       [21, 26],
      ],
      17: [
       [0, 2],
       [21, 28],
      ],
     },
     41: {
      0: [0],
      1: [[0, 6], 8, 22, [81, 85]],
      2: [[0, 5], 11, [21, 25]],
      3: [[0, 7], 11, [22, 29], 81],
      4: [[0, 4], 11, [21, 23], 25, 81, 82],
      5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
      6: [[0, 3], 11, 21, 22],
      7: [[0, 4], 11, 21, [24, 28], 81, 82],
      8: [[0, 4], 11, [21, 23], 25, [81, 83]],
      9: [[0, 2], 22, 23, [26, 28]],
      10: [[0, 2], [23, 25], 81, 82],
      11: [
       [0, 4],
       [21, 23],
      ],
      12: [[0, 2], 21, 22, 24, 81, 82],
      13: [[0, 3], [21, 30], 81],
      14: [[0, 3], [21, 26], 81],
      15: [
       [0, 3],
       [21, 28],
      ],
      16: [[0, 2], [21, 28], 81],
      17: [
       [0, 2],
       [21, 29],
      ],
      90: [0, 1],
     },
     42: {
      0: [0],
      1: [
       [0, 7],
       [11, 17],
      ],
      2: [[0, 5], 22, 81],
      3: [[0, 3], [21, 25], 81],
      5: [
       [0, 6],
       [25, 29],
       [81, 83],
      ],
      6: [[0, 2], 6, 7, [24, 26], [82, 84]],
      7: [[0, 4]],
      8: [[0, 2], 4, 21, 22, 81],
      9: [[0, 2], [21, 23], 81, 82, 84],
      10: [[0, 3], [22, 24], 81, 83, 87],
      11: [[0, 2], [21, 27], 81, 82],
      12: [[0, 2], [21, 24], 81],
      13: [[0, 3], 21, 81],
      28: [[0, 2], 22, 23, [25, 28]],
      90: [0, [4, 6], 21],
     },
     43: {
      0: [0],
      1: [[0, 5], 11, 12, 21, 22, 24, 81],
      2: [[0, 4], 11, 21, [23, 25], 81],
      3: [[0, 2], 4, 21, 81, 82],
      4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
      5: [[0, 3], 11, [21, 25], [27, 29], 81],
      6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
      7: [[0, 3], [21, 26], 81],
      8: [[0, 2], 11, 21, 22],
      9: [[0, 3], [21, 23], 81],
      10: [[0, 3], [21, 28], 81],
      11: [
       [0, 3],
       [21, 29],
      ],
      12: [[0, 2], [21, 30], 81],
      13: [[0, 2], 21, 22, 81, 82],
      31: [0, 1, [22, 27], 30],
     },
     44: {
      0: [0],
      1: [[0, 7], [11, 16], 83, 84],
      2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
      3: [0, 1, [3, 8]],
      4: [[0, 4]],
      5: [0, 1, [6, 15], 23, 82, 83],
      6: [0, 1, [4, 8]],
      7: [0, 1, [3, 5], 81, [83, 85]],
      8: [[0, 4], 11, 23, 25, [81, 83]],
      9: [[0, 3], 23, [81, 83]],
      12: [[0, 3], [23, 26], 83, 84],
      13: [[0, 3], [22, 24], 81],
      14: [[0, 2], [21, 24], 26, 27, 81],
      15: [[0, 2], 21, 23, 81],
      16: [
       [0, 2],
       [21, 25],
      ],
      17: [[0, 2], 21, 23, 81],
      18: [[0, 3], 21, 23, [25, 27], 81, 82],
      19: [0],
      20: [0],
      51: [[0, 3], 21, 22],
      52: [[0, 3], 21, 22, 24, 81],
      53: [[0, 2], [21, 23], 81],
     },
     45: {
      0: [0],
      1: [
       [0, 9],
       [21, 27],
      ],
      2: [
       [0, 5],
       [21, 26],
      ],
      3: [[0, 5], 11, 12, [21, 32]],
      4: [0, 1, [3, 6], 11, [21, 23], 81],
      5: [[0, 3], 12, 21],
      6: [[0, 3], 21, 81],
      7: [[0, 3], 21, 22],
      8: [[0, 4], 21, 81],
      9: [[0, 3], [21, 24], 81],
      10: [
       [0, 2],
       [21, 31],
      ],
      11: [
       [0, 2],
       [21, 23],
      ],
      12: [[0, 2], [21, 29], 81],
      13: [[0, 2], [21, 24], 81],
      14: [[0, 2], [21, 25], 81],
     },
     46: {
      0: [0],
      1: [0, 1, [5, 8]],
      2: [0, 1],
      3: [0, [21, 23]],
      90: [
       [0, 3],
       [5, 7],
       [21, 39],
      ],
     },
     50: { 0: [0], 1: [[0, 19]], 2: [0, [22, 38], [40, 43]], 3: [0, [81, 84]] },
     51: {
      0: [0],
      1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
      3: [[0, 4], 11, 21, 22],
      4: [[0, 3], 11, 21, 22],
      5: [[0, 4], 21, 22, 24, 25],
      6: [0, 1, 3, 23, 26, [81, 83]],
      7: [0, 1, 3, 4, [22, 27], 81],
      8: [[0, 2], 11, 12, [21, 24]],
      9: [
       [0, 4],
       [21, 23],
      ],
      10: [[0, 2], 11, 24, 25, 28],
      11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
      13: [[0, 4], [21, 25], 81],
      14: [
       [0, 2],
       [21, 25],
      ],
      15: [
       [0, 3],
       [21, 29],
      ],
      16: [[0, 3], [21, 23], 81],
      17: [[0, 3], [21, 25], 81],
      18: [
       [0, 3],
       [21, 27],
      ],
      19: [
       [0, 3],
       [21, 23],
      ],
      20: [[0, 2], 21, 22, 81],
      32: [0, [21, 33]],
      33: [0, [21, 38]],
      34: [0, 1, [22, 37]],
     },
     52: {
      0: [0],
      1: [[0, 3], [11, 15], [21, 23], 81],
      2: [0, 1, 3, 21, 22],
      3: [[0, 3], [21, 30], 81, 82],
      4: [
       [0, 2],
       [21, 25],
      ],
      5: [
       [0, 2],
       [21, 27],
      ],
      6: [
       [0, 3],
       [21, 28],
      ],
      22: [0, 1, [22, 30]],
      23: [0, 1, [22, 28]],
      24: [0, 1, [22, 28]],
      26: [0, 1, [22, 36]],
      27: [[0, 2], 22, 23, [25, 32]],
     },
     53: {
      0: [0],
      1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
      3: [[0, 2], [21, 26], 28, 81],
      4: [
       [0, 2],
       [21, 28],
      ],
      5: [
       [0, 2],
       [21, 24],
      ],
      6: [
       [0, 2],
       [21, 30],
      ],
      7: [
       [0, 2],
       [21, 24],
      ],
      8: [
       [0, 2],
       [21, 29],
      ],
      9: [
       [0, 2],
       [21, 27],
      ],
      23: [0, 1, [22, 29], 31],
      25: [
       [0, 4],
       [22, 32],
      ],
      26: [0, 1, [21, 28]],
      27: [0, 1, [22, 30]],
      28: [0, 1, 22, 23],
      29: [0, 1, [22, 32]],
      31: [0, 2, 3, [22, 24]],
      34: [0, [21, 23]],
      33: [0, 21, [23, 25]],
      35: [0, [21, 28]],
     },
     54: {
      0: [0],
      1: [
       [0, 2],
       [21, 27],
      ],
      21: [0, [21, 29], 32, 33],
      22: [0, [21, 29], [31, 33]],
      23: [0, 1, [22, 38]],
      24: [0, [21, 31]],
      25: [0, [21, 27]],
      26: [0, [21, 27]],
     },
     61: {
      0: [0],
      1: [[0, 4], [11, 16], 22, [24, 26]],
      2: [[0, 4], 22],
      3: [
       [0, 4],
       [21, 24],
       [26, 31],
      ],
      4: [[0, 4], [22, 31], 81],
      5: [[0, 2], [21, 28], 81, 82],
      6: [
       [0, 2],
       [21, 32],
      ],
      7: [
       [0, 2],
       [21, 30],
      ],
      8: [
       [0, 2],
       [21, 31],
      ],
      9: [
       [0, 2],
       [21, 29],
      ],
      10: [
       [0, 2],
       [21, 26],
      ],
     },
     62: {
      0: [0],
      1: [[0, 5], 11, [21, 23]],
      2: [0, 1],
      3: [[0, 2], 21],
      4: [
       [0, 3],
       [21, 23],
      ],
      5: [
       [0, 3],
       [21, 25],
      ],
      6: [
       [0, 2],
       [21, 23],
      ],
      7: [
       [0, 2],
       [21, 25],
      ],
      8: [
       [0, 2],
       [21, 26],
      ],
      9: [[0, 2], [21, 24], 81, 82],
      10: [
       [0, 2],
       [21, 27],
      ],
      11: [
       [0, 2],
       [21, 26],
      ],
      12: [
       [0, 2],
       [21, 28],
      ],
      24: [0, 21, [24, 29]],
      26: [0, 21, [23, 30]],
      29: [0, 1, [21, 27]],
      30: [0, 1, [21, 27]],
     },
     63: {
      0: [0],
      1: [
       [0, 5],
       [21, 23],
      ],
      2: [0, 2, [21, 25]],
      21: [0, [21, 23], [26, 28]],
      22: [0, [21, 24]],
      23: [0, [21, 24]],
      25: [0, [21, 25]],
      26: [0, [21, 26]],
      27: [0, 1, [21, 26]],
      28: [
       [0, 2],
       [21, 23],
      ],
     },
     64: {
      0: [0],
      1: [0, 1, [4, 6], 21, 22, 81],
      2: [[0, 3], 5, [21, 23]],
      3: [[0, 3], [21, 24], 81],
      4: [
       [0, 2],
       [21, 25],
      ],
      5: [[0, 2], 21, 22],
     },
     65: {
      0: [0],
      1: [[0, 9], 21],
      2: [[0, 5]],
      21: [0, 1, 22, 23],
      22: [0, 1, 22, 23],
      23: [[0, 3], [23, 25], 27, 28],
      28: [0, 1, [22, 29]],
      29: [0, 1, [22, 29]],
      30: [0, 1, [22, 24]],
      31: [0, 1, [21, 31]],
      32: [0, 1, [21, 27]],
      40: [0, 2, 3, [21, 28]],
      42: [[0, 2], 21, [23, 26]],
      43: [0, 1, [21, 26]],
      90: [[0, 4]],
      27: [[0, 2], 22, 23],
     },
     71: { 0: [0] },
     81: { 0: [0] },
     82: { 0: [0] },
    },
    r = parseInt(t.substr(0, 2), 10),
    e = parseInt(t.substr(2, 2), 10),
    n = parseInt(t.substr(4, 2), 10);
   if (!a[r] || !a[r][e]) return { meta: {}, valid: !1 };
   var i = !1,
    l = a[r][e],
    o;
   for (o = 0; o < l.length; o++)
    if (
     (Array.isArray(l[o]) && l[o][0] <= n && n <= l[o][1]) ||
     (!Array.isArray(l[o]) && n === l[o])
    ) {
     i = !0;
     break;
    }
   if (!i) return { meta: {}, valid: !1 };
   var d;
   t.length === 18 ? (d = t.substr(6, 8)) : (d = '19'.concat(t.substr(6, 6)));
   var u = parseInt(d.substr(0, 4), 10),
    c = parseInt(d.substr(4, 2), 10),
    v = parseInt(d.substr(6, 2), 10);
   if (!I(u, c, v)) return { meta: {}, valid: !1 };
   if (t.length === 18) {
    var f = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
     m = 0;
    for (o = 0; o < 17; o++) m += parseInt(t.charAt(o), 10) * f[o];
    m = (12 - (m % 11)) % 11;
    var g =
     t.charAt(17).toUpperCase() !== 'X' ? parseInt(t.charAt(17), 10) : 10;
    return { meta: {}, valid: g === m };
   }
   return { meta: {}, valid: !0 };
  }
  function it(s) {
   var t = s.replace(/\./g, '').replace('-', '');
   if (!/^\d{8,16}$/.test(t)) return { meta: {}, valid: !1 };
   for (
    var a = t.length,
     r = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
     e = 0,
     n = a - 2;
    n >= 0;
    n--
   )
    e += parseInt(t.charAt(n), 10) * r[n];
   return (
    (e = e % 11),
    e >= 2 && (e = 11 - e),
    { meta: {}, valid: ''.concat(e) === t.substr(a - 1) }
   );
  }
  function oe(s) {
   if (!/^\d{9,10}$/.test(s)) return { meta: {}, valid: !1 };
   var t = 1900 + parseInt(s.substr(0, 2), 10),
    a = (parseInt(s.substr(2, 2), 10) % 50) % 20,
    r = parseInt(s.substr(4, 2), 10);
   if (s.length === 9) {
    if ((t >= 1980 && (t -= 100), t > 1953)) return { meta: {}, valid: !1 };
   } else t < 1954 && (t += 100);
   if (!I(t, a, r)) return { meta: {}, valid: !1 };
   if (s.length === 10) {
    var e = parseInt(s.substr(0, 9), 10) % 11;
    return (
     t < 1985 && (e = e % 10),
     { meta: {}, valid: ''.concat(e) === s.substr(9, 1) }
    );
   }
   return { meta: {}, valid: !0 };
  }
  function st(s) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(s)) return { meta: {}, valid: !1 };
   var t = s.replace(/-/g, ''),
    a = parseInt(t.substr(0, 2), 10),
    r = parseInt(t.substr(2, 2), 10),
    e = parseInt(t.substr(4, 2), 10);
   switch (!0) {
    case '5678'.indexOf(t.charAt(6)) !== -1 && e >= 58:
     e += 1800;
     break;
    case '0123'.indexOf(t.charAt(6)) !== -1:
    case '49'.indexOf(t.charAt(6)) !== -1 && e >= 37:
     e += 1900;
     break;
    default:
     e += 2e3;
     break;
   }
   return { meta: {}, valid: I(e, r, a) };
  }
  function lt(s) {
   var t = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(s),
    a = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(s),
    r = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(s);
   if (!t && !a && !r) return { meta: {}, valid: !1 };
   var e = s.replace(/-/g, ''),
    n,
    i,
    l = !0;
   if (t || a) {
    i = 'DNI';
    var o = 'XYZ'.indexOf(e.charAt(0));
    return (
     o !== -1 && ((e = o + e.substr(1) + ''), (i = 'NIE')),
     (n = parseInt(e.substr(0, 8), 10)),
     (n = 'TRWAGMYFPDXBNJZSQVHLCKE'[n % 23]),
     { meta: { type: i }, valid: n === e.substr(8, 1) }
    );
   } else {
    (n = e.substr(1, 7)), (i = 'CIF');
    for (var d = e[0], u = e.substr(-1), c = 0, v = 0; v < n.length; v++)
     if (v % 2 !== 0) c += parseInt(n[v], 10);
     else {
      var f = '' + parseInt(n[v], 10) * 2;
      (c += parseInt(f[0], 10)), f.length === 2 && (c += parseInt(f[1], 10));
     }
    var m = c - Math.floor(c / 10) * 10;
    return (
     m !== 0 && (m = 10 - m),
     'KQS'.indexOf(d) !== -1
      ? (l = u === 'JABCDEFGHI'[m])
      : 'ABEH'.indexOf(d) !== -1
        ? (l = u === '' + m)
        : (l = u === '' + m || u === 'JABCDEFGHI'[m]),
     { meta: { type: i }, valid: l }
    );
   }
  }
  function ot(s) {
   if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(s))
    return { meta: {}, valid: !1 };
   var t = parseInt(s.substr(0, 2), 10),
    a = parseInt(s.substr(2, 2), 10),
    r = parseInt(s.substr(4, 2), 10),
    e = { '+': 1800, '-': 1900, A: 2e3 };
   if (((r = e[s.charAt(6)] + r), !I(r, a, t))) return { meta: {}, valid: !1 };
   var n = parseInt(s.substr(7, 3), 10);
   if (n < 2) return { meta: {}, valid: !1 };
   var i = parseInt(s.substr(0, 6) + s.substr(7, 3) + '', 10);
   return {
    meta: {},
    valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(i % 31) === s.charAt(10),
   };
  }
  function dt(s) {
   var t = s.toUpperCase();
   if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(t))
    return { meta: {}, valid: !1 };
   var a = t.substr(5, 2);
   switch (!0) {
    case /^\d{2}$/.test(a):
     t = s;
     break;
    case a === '2A':
     t = ''.concat(s.substr(0, 5), '19').concat(s.substr(7));
     break;
    case a === '2B':
     t = ''.concat(s.substr(0, 5), '18').concat(s.substr(7));
     break;
    default:
     return { meta: {}, valid: !1 };
   }
   var r = 97 - (parseInt(t.substr(0, 13), 10) % 97),
    e = r < 10 ? '0'.concat(r) : ''.concat(r);
   return { meta: {}, valid: e === t.substr(13) };
  }
  function ut(s) {
   var t = s.toUpperCase();
   if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(t)) return { meta: {}, valid: !1 };
   var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    r = t.charAt(0),
    e = t.charAt(1),
    n = 0,
    i = t;
   /^[A-Z]$/.test(e)
    ? ((n += 9 * (10 + a.indexOf(r))),
      (n += 8 * (10 + a.indexOf(e))),
      (i = t.substr(2)))
    : ((n += 9 * 36), (n += 8 * (10 + a.indexOf(r))), (i = t.substr(1)));
   for (var l = i.length, o = 0; o < l - 1; o++)
    n += (7 - o) * parseInt(i.charAt(o), 10);
   var d = n % 11,
    u = d === 0 ? '0' : 11 - d === 10 ? 'A' : ''.concat(11 - d);
   return { meta: {}, valid: u === i.charAt(l - 1) };
  }
  function ct(s) {
   return { meta: {}, valid: /^[0-9]{11}$/.test(s) && P(s) };
  }
  function vt(s) {
   if (!/^[2-9]\d{11}$/.test(s)) return { meta: {}, valid: !1 };
   var t = s.split('').map(function (a) {
    return parseInt(a, 10);
   });
   return { meta: {}, valid: re(t) };
  }
  function ft(s) {
   if (!/^\d{7}[A-W][AHWTX]?$/.test(s)) return { meta: {}, valid: !1 };
   var t = function (e) {
     for (var n = e; n.length < 7; ) n = '0'.concat(n);
     for (var i = 'WABCDEFGHIJKLMNOPQRSTUV', l = 0, o = 0; o < 7; o++)
      l += parseInt(n.charAt(o), 10) * (8 - o);
     return (l += 9 * i.indexOf(n.substr(7))), i[l % 23];
    },
    a =
     s.length === 9 && (s.charAt(8) === 'A' || s.charAt(8) === 'H')
      ? s.charAt(7) === t(s.substr(0, 7) + s.substr(8) + '')
      : s.charAt(7) === t(s.substr(0, 7));
   return { meta: {}, valid: a };
  }
  function ht(s) {
   return /^\d{1,9}$/.test(s)
    ? { meta: {}, valid: A(s) }
    : { meta: {}, valid: !1 };
  }
  function mt(s) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(s)) return { meta: {}, valid: !1 };
   var t = s.replace(/-/g, ''),
    a = parseInt(t.substr(0, 2), 10),
    r = parseInt(t.substr(2, 2), 10),
    e = parseInt(t.substr(4, 2), 10),
    n = parseInt(t.charAt(9), 10);
   if (((e = n === 9 ? 1900 + e : (20 + n) * 100 + e), !I(e, r, a, !0)))
    return { meta: {}, valid: !1 };
   for (var i = [3, 2, 7, 6, 5, 4, 3, 2], l = 0, o = 0; o < 8; o++)
    l += parseInt(t.charAt(o), 10) * i[o];
   return (
    (l = 11 - (l % 11)), { meta: {}, valid: ''.concat(l) === t.charAt(8) }
   );
  }
  function pt(s) {
   var t = s.replace('-', '');
   if (!/^\d{13}$/.test(t)) return { meta: {}, valid: !1 };
   var a = t.charAt(6),
    r = parseInt(t.substr(0, 2), 10),
    e = parseInt(t.substr(2, 2), 10),
    n = parseInt(t.substr(4, 2), 10);
   switch (a) {
    case '1':
    case '2':
    case '5':
    case '6':
     r += 1900;
     break;
    case '3':
    case '4':
    case '7':
    case '8':
     r += 2e3;
     break;
    default:
     r += 1800;
     break;
   }
   if (!I(r, e, n)) return { meta: {}, valid: !1 };
   for (
    var i = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5], l = t.length, o = 0, d = 0;
    d < l - 1;
    d++
   )
    o += i[d] * parseInt(t.charAt(d), 10);
   var u = (11 - (o % 11)) % 10;
   return { meta: {}, valid: ''.concat(u) === t.charAt(l - 1) };
  }
  function de(s) {
   if (!/^[0-9]{11}$/.test(s)) return { meta: {}, valid: !1 };
   var t = parseInt(s.charAt(0), 10),
    a = parseInt(s.substr(1, 2), 10),
    r = parseInt(s.substr(3, 2), 10),
    e = parseInt(s.substr(5, 2), 10),
    n = t % 2 === 0 ? 17 + t / 2 : 17 + (t + 1) / 2;
   if (((a = n * 100 + a), !I(a, r, e, !0))) return { meta: {}, valid: !1 };
   var i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    l = 0,
    o;
   for (o = 0; o < 10; o++) l += parseInt(s.charAt(o), 10) * i[o];
   if (((l = l % 11), l !== 10))
    return { meta: {}, valid: ''.concat(l) === s.charAt(10) };
   for (l = 0, i = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], o = 0; o < 10; o++)
    l += parseInt(s.charAt(o), 10) * i[o];
   return (
    (l = l % 11),
    l === 10 && (l = 0),
    { meta: {}, valid: ''.concat(l) === s.charAt(10) }
   );
  }
  function gt(s) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(s)) return { meta: {}, valid: !1 };
   var t = s.replace(/\D/g, ''),
    a = parseInt(t.substr(0, 2), 10),
    r = parseInt(t.substr(2, 2), 10),
    e = parseInt(t.substr(4, 2), 10);
   if (((e = e + 1800 + parseInt(t.charAt(6), 10) * 100), !I(e, r, a, !0)))
    return { meta: {}, valid: !1 };
   for (var n = 0, i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], l = 0; l < 10; l++)
    n += parseInt(t.charAt(l), 10) * i[l];
   return (
    (n = ((n + 1) % 11) % 10),
    { meta: {}, valid: ''.concat(n) === t.charAt(10) }
   );
  }
  function bt(s) {
   return { meta: {}, valid: x(s, 'ME') };
  }
  function At(s) {
   return { meta: {}, valid: x(s, 'MK') };
  }
  function It(s) {
   var t = s.toUpperCase();
   if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(t))
    return { meta: {}, valid: !1 };
   var a = [
     'BACA',
     'BAKA',
     'BUEI',
     'BUEY',
     'CACA',
     'CACO',
     'CAGA',
     'CAGO',
     'CAKA',
     'CAKO',
     'COGE',
     'COGI',
     'COJA',
     'COJE',
     'COJI',
     'COJO',
     'COLA',
     'CULO',
     'FALO',
     'FETO',
     'GETA',
     'GUEI',
     'GUEY',
     'JETA',
     'JOTO',
     'KACA',
     'KACO',
     'KAGA',
     'KAGO',
     'KAKA',
     'KAKO',
     'KOGE',
     'KOGI',
     'KOJA',
     'KOJE',
     'KOJI',
     'KOJO',
     'KOLA',
     'KULO',
     'LILO',
     'LOCA',
     'LOCO',
     'LOKA',
     'LOKO',
     'MAME',
     'MAMO',
     'MEAR',
     'MEAS',
     'MEON',
     'MIAR',
     'MION',
     'MOCO',
     'MOKO',
     'MULA',
     'MULO',
     'NACA',
     'NACO',
     'PEDA',
     'PEDO',
     'PENE',
     'PIPI',
     'PITO',
     'POPO',
     'PUTA',
     'PUTO',
     'QULO',
     'RATA',
     'ROBA',
     'ROBE',
     'ROBO',
     'RUIN',
     'SENO',
     'TETA',
     'VACA',
     'VAGA',
     'VAGO',
     'VAKA',
     'VUEI',
     'VUEY',
     'WUEI',
     'WUEY',
    ],
    r = t.substr(0, 4);
   if (a.indexOf(r) >= 0) return { meta: {}, valid: !1 };
   var e = parseInt(t.substr(4, 2), 10),
    n = parseInt(t.substr(6, 2), 10),
    i = parseInt(t.substr(6, 2), 10);
   if ((/^[0-9]$/.test(t.charAt(16)) ? (e += 1900) : (e += 2e3), !I(e, n, i)))
    return { meta: {}, valid: !1 };
   var l = t.charAt(10);
   if (l !== 'H' && l !== 'M') return { meta: {}, valid: !1 };
   var o = t.substr(11, 2),
    d = [
     'AS',
     'BC',
     'BS',
     'CC',
     'CH',
     'CL',
     'CM',
     'CS',
     'DF',
     'DG',
     'GR',
     'GT',
     'HG',
     'JC',
     'MC',
     'MN',
     'MS',
     'NE',
     'NL',
     'NT',
     'OC',
     'PL',
     'QR',
     'QT',
     'SL',
     'SP',
     'SR',
     'TC',
     'TL',
     'TS',
     'VZ',
     'YN',
     'ZS',
    ];
   if (d.indexOf(o) === -1) return { meta: {}, valid: !1 };
   for (
    var u = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ', c = 0, v = t.length, f = 0;
    f < v - 1;
    f++
   )
    c += (18 - f) * u.indexOf(t.charAt(f));
   return (
    (c = (10 - (c % 10)) % 10),
    { meta: {}, valid: ''.concat(c) === t.charAt(v - 1) }
   );
  }
  function Et(s) {
   if (!/^\d{12}$/.test(s)) return { meta: {}, valid: !1 };
   var t = parseInt(s.substr(0, 2), 10),
    a = parseInt(s.substr(2, 2), 10),
    r = parseInt(s.substr(4, 2), 10);
   if (!I(t + 1900, a, r) && !I(t + 2e3, a, r)) return { meta: {}, valid: !1 };
   var e = s.substr(6, 2),
    n = [
     '17',
     '18',
     '19',
     '20',
     '69',
     '70',
     '73',
     '80',
     '81',
     '94',
     '95',
     '96',
     '97',
    ];
   return { meta: {}, valid: n.indexOf(e) === -1 };
  }
  function ue(s) {
   if (s.length < 8) return { meta: {}, valid: !1 };
   var t = s;
   if (
    (t.length === 8 && (t = '0'.concat(t)),
    !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (((t = t.replace(/\./g, '')), parseInt(t, 10) === 0))
    return { meta: {}, valid: !1 };
   for (var a = 0, r = t.length, e = 0; e < r - 1; e++)
    a += (9 - e) * parseInt(t.charAt(e), 10);
   return (
    (a = a % 11),
    a === 10 && (a = 0),
    { meta: {}, valid: ''.concat(a) === t.charAt(r - 1) }
   );
  }
  function kt(s) {
   if (!/^\d{11}$/.test(s)) return { meta: {}, valid: !1 };
   var t = function (e) {
     for (var n = [3, 7, 6, 1, 8, 9, 4, 5, 2], i = 0, l = 0; l < 9; l++)
      i += n[l] * parseInt(e.charAt(l), 10);
     return 11 - (i % 11);
    },
    a = function (e) {
     for (var n = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], i = 0, l = 0; l < 10; l++)
      i += n[l] * parseInt(e.charAt(l), 10);
     return 11 - (i % 11);
    };
   return {
    meta: {},
    valid:
     ''.concat(t(s)) === s.substr(-2, 1) && ''.concat(a(s)) === s.substr(-1),
   };
  }
  function yt(s) {
   if (!/^\d{8}[0-9A-Z]*$/.test(s)) return { meta: {}, valid: !1 };
   if (s.length === 8) return { meta: {}, valid: !0 };
   for (var t = [3, 2, 7, 6, 5, 4, 3, 2], a = 0, r = 0; r < 8; r++)
    a += t[r] * parseInt(s.charAt(r), 10);
   var e = a % 11,
    n = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][e],
    i = 'KJIHGFEDCBA'.charAt(e);
   return {
    meta: {},
    valid: s.charAt(8) === ''.concat(n) || s.charAt(8) === i,
   };
  }
  function $t(s) {
   if (!/^[0-9]{11}$/.test(s)) return { meta: {}, valid: !1 };
   for (
    var t = 0, a = s.length, r = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], e = 0;
    e < a - 1;
    e++
   )
    t += r[e] * parseInt(s.charAt(e), 10);
   return (
    (t = t % 10),
    t === 0 && (t = 10),
    (t = 10 - t),
    { meta: {}, valid: ''.concat(t) === s.charAt(a - 1) }
   );
  }
  function Ct(s) {
   if (!/^[0-9]{13}$/.test(s)) return { meta: {}, valid: !1 };
   var t = parseInt(s.charAt(0), 10);
   if (t === 0 || t === 7 || t === 8) return { meta: {}, valid: !1 };
   var a = parseInt(s.substr(1, 2), 10),
    r = parseInt(s.substr(3, 2), 10),
    e = parseInt(s.substr(5, 2), 10),
    n = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 };
   if (e > 31 && r > 12) return { meta: {}, valid: !1 };
   if (t !== 9 && ((a = n[t + ''] + a), !I(a, r, e)))
    return { meta: {}, valid: !1 };
   for (
    var i = 0, l = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], o = s.length, d = 0;
    d < o - 1;
    d++
   )
    i += parseInt(s.charAt(d), 10) * l[d];
   return (
    (i = i % 11),
    i === 10 && (i = 1),
    { meta: {}, valid: ''.concat(i) === s.charAt(o - 1) }
   );
  }
  function Ft(s) {
   return { meta: {}, valid: x(s, 'RS') };
  }
  function Vt(s) {
   if (!/^[0-9]{10}$/.test(s) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(s))
    return { meta: {}, valid: !1 };
   var t = s.replace(/[^0-9]/g, ''),
    a = parseInt(t.substr(0, 2), 10) + 1900,
    r = parseInt(t.substr(2, 2), 10),
    e = parseInt(t.substr(4, 2), 10);
   return I(a, r, e) ? { meta: {}, valid: A(t) } : { meta: {}, valid: !1 };
  }
  function Ot(s) {
   return { meta: {}, valid: x(s, 'SI') };
  }
  function St(s) {
   return { meta: {}, valid: /^\d{5}$/.test(s) };
  }
  function Ht(s) {
   if (s.length !== 13) return { meta: {}, valid: !1 };
   for (var t = 0, a = 0; a < 12; a++)
    t += parseInt(s.charAt(a), 10) * (13 - a);
   return {
    meta: {},
    valid: (11 - (t % 11)) % 10 === parseInt(s.charAt(12), 10),
   };
  }
  function Nt(s) {
   if (s.length !== 11) return { meta: {}, valid: !1 };
   for (var t = 0, a = 0; a < 10; a++) t += parseInt(s.charAt(a), 10);
   return { meta: {}, valid: t % 10 === parseInt(s.charAt(10), 10) };
  }
  function Mt(s) {
   var t = s.toUpperCase();
   if (!/^[A-Z][12][0-9]{8}$/.test(t)) return { meta: {}, valid: !1 };
   for (
    var a = t.length,
     r = 'ABCDEFGHJKLMNPQRSTUVXYWZIO',
     e = r.indexOf(t.charAt(0)) + 10,
     n = Math.floor(e / 10) + (e % 10) * (a - 1),
     i = 0,
     l = 1;
    l < a - 1;
    l++
   )
    i += parseInt(t.charAt(l), 10) * (a - 1 - l);
   return {
    meta: {},
    valid: (n + i + parseInt(t.charAt(a - 1), 10)) % 10 === 0,
   };
  }
  function wt(s) {
   if (!/^\d{8}$/.test(s)) return { meta: {}, valid: !1 };
   for (var t = [2, 9, 8, 7, 6, 3, 4], a = 0, r = 0; r < 7; r++)
    a += parseInt(s.charAt(r), 10) * t[r];
   return (
    (a = a % 10),
    a > 0 && (a = 10 - a),
    { meta: {}, valid: ''.concat(a) === s.charAt(7) }
   );
  }
  function Lt(s) {
   if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(s)) return { meta: {}, valid: !1 };
   var t = parseInt(s.substr(0, 2), 10),
    a = new Date().getFullYear() % 100,
    r = parseInt(s.substr(2, 2), 10),
    e = parseInt(s.substr(4, 2), 10);
   return (
    (t = t >= a ? t + 1900 : t + 2e3),
    I(t, r, e) ? { meta: {}, valid: A(s) } : { meta: {}, valid: !1 }
   );
  }
  function Rt() {
   var s = [
    'AR',
    'BA',
    'BG',
    'BR',
    'CH',
    'CL',
    'CN',
    'CO',
    'CZ',
    'DK',
    'EE',
    'ES',
    'FI',
    'FR',
    'HK',
    'HR',
    'ID',
    'IE',
    'IL',
    'IS',
    'KR',
    'LT',
    'LV',
    'ME',
    'MK',
    'MX',
    'MY',
    'NL',
    'NO',
    'PE',
    'PL',
    'RO',
    'RS',
    'SE',
    'SI',
    'SK',
    'SM',
    'TH',
    'TR',
    'TW',
    'UY',
    'ZA',
   ];
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var r = Object.assign({}, { message: '' }, a.options),
      e = a.value.substr(0, 2);
     if (
      (typeof r.country == 'function'
       ? (e = r.country.call(this))
       : (e = r.country),
      s.indexOf(e) === -1)
     )
      return { valid: !0 };
     var n = { meta: {}, valid: !0 };
     switch (e.toLowerCase()) {
      case 'ar':
       n = qe(a.value);
       break;
      case 'ba':
       n = _e(a.value);
       break;
      case 'bg':
       n = et(a.value);
       break;
      case 'br':
       n = tt(a.value);
       break;
      case 'ch':
       n = at(a.value);
       break;
      case 'cl':
       n = rt(a.value);
       break;
      case 'cn':
       n = nt(a.value);
       break;
      case 'co':
       n = it(a.value);
       break;
      case 'cz':
       n = oe(a.value);
       break;
      case 'dk':
       n = st(a.value);
       break;
      case 'ee':
       n = de(a.value);
       break;
      case 'es':
       n = lt(a.value);
       break;
      case 'fi':
       n = ot(a.value);
       break;
      case 'fr':
       n = dt(a.value);
       break;
      case 'hk':
       n = ut(a.value);
       break;
      case 'hr':
       n = ct(a.value);
       break;
      case 'id':
       n = vt(a.value);
       break;
      case 'ie':
       n = ft(a.value);
       break;
      case 'il':
       n = ht(a.value);
       break;
      case 'is':
       n = mt(a.value);
       break;
      case 'kr':
       n = pt(a.value);
       break;
      case 'lt':
       n = de(a.value);
       break;
      case 'lv':
       n = gt(a.value);
       break;
      case 'me':
       n = bt(a.value);
       break;
      case 'mk':
       n = At(a.value);
       break;
      case 'mx':
       n = It(a.value);
       break;
      case 'my':
       n = Et(a.value);
       break;
      case 'nl':
       n = ue(a.value);
       break;
      case 'no':
       n = kt(a.value);
       break;
      case 'pe':
       n = yt(a.value);
       break;
      case 'pl':
       n = $t(a.value);
       break;
      case 'ro':
       n = Ct(a.value);
       break;
      case 'rs':
       n = Ft(a.value);
       break;
      case 'se':
       n = Vt(a.value);
       break;
      case 'si':
       n = Ot(a.value);
       break;
      case 'sk':
       n = oe(a.value);
       break;
      case 'sm':
       n = St(a.value);
       break;
      case 'th':
       n = Ht(a.value);
       break;
      case 'tr':
       n = Nt(a.value);
       break;
      case 'tw':
       n = Mt(a.value);
       break;
      case 'uy':
       n = wt(a.value);
       break;
      case 'za':
       n = Lt(a.value);
       break;
     }
     var i = b(
      a.l10n && a.l10n.id ? r.message || a.l10n.id.country : r.message,
      a.l10n && a.l10n.id && a.l10n.id.countries
       ? a.l10n.id.countries[e.toUpperCase()]
       : e.toUpperCase(),
     );
     return Object.assign({}, { message: i }, n);
    },
   };
  }
  function Tt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     switch (!0) {
      case /^\d{15}$/.test(t.value):
      case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(t.value):
      case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(t.value):
       return { valid: A(t.value.replace(/[^0-9]/g, '')) };
      case /^\d{14}$/.test(t.value):
      case /^\d{16}$/.test(t.value):
      case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(t.value):
      case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(t.value):
       return { valid: !0 };
      default:
       return { valid: !1 };
     }
    },
   };
  }
  function xt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     if (!/^IMO \d{7}$/i.test(t.value)) return { valid: !1 };
     for (
      var a = t.value.replace(/^.*(\d{7})$/, '$1'), r = 0, e = 6;
      e >= 1;
      e--
     )
      r += parseInt(a.slice(6 - e, -e), 10) * (e + 1);
     return { valid: r % 10 === parseInt(a.charAt(6), 10) };
    },
   };
  }
  function Zt() {
   return {
    validate: function (t) {
     if (t.value === '') return { meta: { type: null }, valid: !0 };
     var a;
     switch (!0) {
      case /^\d{9}[\dX]$/.test(t.value):
      case t.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(t.value):
      case t.value.length === 13 &&
       /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(t.value):
       a = 'ISBN10';
       break;
      case /^(978|979)\d{9}[\dX]$/.test(t.value):
      case t.value.length === 17 &&
       /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(t.value):
      case t.value.length === 17 &&
       /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(t.value):
       a = 'ISBN13';
       break;
      default:
       return { meta: { type: null }, valid: !1 };
     }
     var r = t.value.replace(/[^0-9X]/gi, '').split(''),
      e = r.length,
      n = 0,
      i,
      l;
     switch (a) {
      case 'ISBN10':
       for (n = 0, i = 0; i < e - 1; i++) n += parseInt(r[i], 10) * (10 - i);
       return (
        (l = 11 - (n % 11)),
        l === 11 ? (l = 0) : l === 10 && (l = 'X'),
        { meta: { type: a }, valid: ''.concat(l) === r[e - 1] }
       );
      case 'ISBN13':
       for (n = 0, i = 0; i < e - 1; i++)
        n += i % 2 === 0 ? parseInt(r[i], 10) : parseInt(r[i], 10) * 3;
       return (
        (l = 10 - (n % 10)),
        l === 10 && (l = '0'),
        { meta: { type: a }, valid: ''.concat(l) === r[e - 1] }
       );
     }
    },
   };
  }
  function Bt() {
   var s =
    'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW';
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var r = a.value.toUpperCase(),
      e = new RegExp('^(' + s + ')[0-9A-Z]{10}$');
     if (!e.test(a.value)) return { valid: !1 };
     var n = r.length,
      i = '',
      l;
     for (l = 0; l < n - 1; l++) {
      var o = r.charCodeAt(l);
      i += o > 57 ? (o - 55).toString() : r.charAt(l);
     }
     var d = '',
      u = i.length,
      c = u % 2 !== 0 ? 0 : 1;
     for (l = 0; l < u; l++)
      d += parseInt(i[l], 10) * (l % 2 === c ? 2 : 1) + '';
     var v = 0;
     for (l = 0; l < d.length; l++) v += parseInt(d.charAt(l), 10);
     return (
      (v = (10 - (v % 10)) % 10), { valid: ''.concat(v) === r.charAt(n - 1) }
     );
    },
   };
  }
  function Dt() {
   return {
    validate: function (t) {
     if (t.value === '') return { meta: null, valid: !0 };
     var a;
     switch (!0) {
      case /^M\d{9}$/.test(t.value):
      case /^M-\d{4}-\d{4}-\d{1}$/.test(t.value):
      case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(t.value):
       a = 'ISMN10';
       break;
      case /^9790\d{9}$/.test(t.value):
      case /^979-0-\d{4}-\d{4}-\d{1}$/.test(t.value):
      case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(t.value):
       a = 'ISMN13';
       break;
      default:
       return { meta: null, valid: !1 };
     }
     var r = t.value;
     a === 'ISMN10' && (r = '9790'.concat(r.substr(1))),
      (r = r.replace(/[^0-9]/gi, ''));
     for (var e = 0, n = r.length, i = [1, 3], l = 0; l < n - 1; l++)
      e += parseInt(r.charAt(l), 10) * i[l % 2];
     return (
      (e = (10 - (e % 10)) % 10),
      { meta: { type: a }, valid: ''.concat(e) === r.charAt(n - 1) }
     );
    },
   };
  }
  function Gt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     if (!/^\d{4}-\d{3}[\dX]$/.test(t.value)) return { valid: !1 };
     var a = t.value.replace(/[^0-9X]/gi, '').split(''),
      r = a.length,
      e = 0;
     a[7] === 'X' && (a[7] = '10');
     for (var n = 0; n < r; n++) e += parseInt(a[n], 10) * (8 - n);
     return { valid: e % 11 === 0 };
    },
   };
  }
  function Pt() {
   return {
    validate: function (t) {
     return {
      valid:
       t.value === '' ||
       /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(t.value) ||
       /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(t.value),
     };
    },
   };
  }
  function Ut() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = t.value;
     if (
      /^[0-9A-F]{15}$/i.test(a) ||
      /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(a) ||
      /^\d{19}$/.test(a) ||
      /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(a)
     ) {
      var r = a.charAt(a.length - 1).toUpperCase();
      if (((a = a.replace(/[- ]/g, '')), a.match(/^\d*$/i)))
       return { valid: A(a) };
      a = a.slice(0, -1);
      var e = '',
       n;
      for (n = 1; n <= 13; n += 2)
       e += (parseInt(a.charAt(n), 16) * 2).toString(16);
      var i = 0;
      for (n = 0; n < e.length; n++) i += parseInt(e.charAt(n), 16);
      return {
       valid:
        i % 10 === 0
         ? r === '0'
         : r ===
           ((Math.floor((i + 10) / 10) * 10 - i) * 2)
            .toString(16)
            .toUpperCase(),
      };
     }
     return /^[0-9A-F]{14}$/i.test(a) ||
      /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(a) ||
      /^\d{18}$/.test(a) ||
      /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(a)
      ? { valid: !0 }
      : { valid: !1 };
    },
   };
  }
  function Kt() {
   var s = [
    'AE',
    'BG',
    'BR',
    'CN',
    'CZ',
    'DE',
    'DK',
    'ES',
    'FR',
    'GB',
    'IN',
    'MA',
    'NL',
    'PK',
    'RO',
    'RU',
    'SK',
    'TH',
    'US',
    'VE',
   ];
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var r = Object.assign({}, { message: '' }, a.options),
      e = a.value.trim(),
      n = e.substr(0, 2);
     if (
      (typeof r.country == 'function'
       ? (n = r.country.call(this))
       : (n = r.country),
      !n || s.indexOf(n.toUpperCase()) === -1)
     )
      return { valid: !0 };
     var i = !0;
     switch (n.toUpperCase()) {
      case 'AE':
       i =
        /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(
         e,
        );
       break;
      case 'BG':
       i =
        /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(
         e.replace(/\+|\s|-|\/|\(|\)/gi, ''),
        );
       break;
      case 'BR':
       i =
        /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(
         e,
        );
       break;
      case 'CN':
       i =
        /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(
         e,
        );
       break;
      case 'CZ':
       i = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
        e,
       );
       break;
      case 'DE':
       i =
        /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(
         e,
        );
       break;
      case 'DK':
       i = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(e);
       break;
      case 'ES':
       i = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(e);
       break;
      case 'FR':
       i =
        /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(
         e,
        );
       break;
      case 'GB':
       i =
        /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(
         e,
        );
       break;
      case 'IN':
       i = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(e);
       break;
      case 'MA':
       i =
        /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(
         e,
        );
       break;
      case 'NL':
       i =
        /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(
         e,
        );
       break;
      case 'PK':
       i = /^0?3[0-9]{2}[0-9]{7}$/.test(e);
       break;
      case 'RO':
       i =
        /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(
         e,
        );
       break;
      case 'RU':
       i =
        /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(
         e,
        );
       break;
      case 'SK':
       i = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
        e,
       );
       break;
      case 'TH':
       i = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(e);
       break;
      case 'VE':
       i =
        /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(
         e,
        );
       break;
      case 'US':
      default:
       i = /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(e);
       break;
     }
     return {
      message: b(
       a.l10n && a.l10n.phone ? r.message || a.l10n.phone.country : r.message,
       a.l10n && a.l10n.phone && a.l10n.phone.countries
        ? a.l10n.phone.countries[n]
        : n,
      ),
      valid: i,
     };
    },
   };
  }
  function jt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     if (!/^\d{9}$/.test(t.value)) return { valid: !1 };
     for (var a = 0, r = 0; r < t.value.length; r += 3)
      a +=
       parseInt(t.value.charAt(r), 10) * 3 +
       parseInt(t.value.charAt(r + 1), 10) * 7 +
       parseInt(t.value.charAt(r + 2), 10);
     return { valid: a !== 0 && a % 10 === 0 };
    },
   };
  }
  function Yt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = t.value.toUpperCase();
     if (!/^[0-9A-Z]{7}$/.test(a)) return { valid: !1 };
     for (
      var r = [1, 3, 1, 7, 3, 9, 1], e = a.length, n = 0, i = 0;
      i < e - 1;
      i++
     )
      n += r[i] * parseInt(a.charAt(i), 36);
     return (
      (n = (10 - (n % 10)) % 10), { valid: ''.concat(n) === a.charAt(e - 1) }
     );
    },
   };
  }
  function zt() {
   return {
    validate: function (t) {
     return {
      valid: t.value === '' || (/^\d{9}$/.test(t.value) && A(t.value)),
     };
    },
   };
  }
  function Jt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     for (var a = t.value.length, r = 0, e, n = 0; n < a; n++)
      (e = parseInt(t.value.charAt(n), 10)),
       n % 2 === 0 && ((e = e * 2), e > 9 && (e -= 9)),
       (r += e);
     return { valid: r % 10 === 0 };
    },
   };
  }
  function Xt() {
   var s = function (r, e) {
     var n = Math.pow(10, e),
      i = r * n,
      l;
     switch (!0) {
      case i === 0:
       l = 0;
       break;
      case i > 0:
       l = 1;
       break;
      case i < 0:
       l = -1;
       break;
     }
     var o = i % 1 === 0.5 * l;
     return o ? (Math.floor(i) + (l > 0 ? 1 : 0)) / n : Math.round(i) / n;
    },
    t = function (r, e) {
     if (e === 0) return 1;
     var n = ''.concat(r).split('.'),
      i = ''.concat(e).split('.'),
      l =
       (n.length === 1 ? 0 : n[1].length) + (i.length === 1 ? 0 : i[1].length);
     return s(r - e * Math.floor(r / e), l);
    };
   return {
    validate: function (r) {
     if (r.value === '') return { valid: !0 };
     var e = parseFloat(r.value);
     if (isNaN(e) || !isFinite(e)) return { valid: !1 };
     var n = Object.assign(
       {},
       { baseValue: 0, message: '', step: 1 },
       r.options,
      ),
      i = t(e - n.baseValue, n.step);
     return {
      message: b(
       r.l10n ? n.message || r.l10n.step.default : n.message,
       ''.concat(n.step),
      ),
      valid: i === 0 || i === n.step,
     };
    },
   };
  }
  function Wt() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { message: '' }, t.options),
      r = {
       3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
       4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      },
      e = a.version ? ''.concat(a.version) : 'all';
     return {
      message: a.version
       ? b(t.l10n ? a.message || t.l10n.uuid.version : a.message, a.version)
       : t.l10n
         ? t.l10n.uuid.default
         : a.message,
      valid: r[e] === null ? !0 : r[e].test(t.value),
     };
    },
   };
  }
  function Qt(s) {
   var t = s.replace('-', '');
   if ((/^AR[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], r = 0, e = 0; e < 10; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return (
    (r = 11 - (r % 11)),
    r === 11 && (r = 0),
    { meta: {}, valid: ''.concat(r) === t.substr(10) }
   );
  }
  function qt(s) {
   var t = s;
   if ((/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   t = t.substr(1);
   for (var a = [1, 2, 1, 2, 1, 2, 1], r = 0, e = 0, n = 0; n < 7; n++)
    (e = parseInt(t.charAt(n), 10) * a[n]),
     e > 9 && (e = Math.floor(e / 10) + (e % 10)),
     (r += e);
   return (
    (r = 10 - ((r + 4) % 10)),
    r === 10 && (r = 0),
    { meta: {}, valid: ''.concat(r) === t.substr(7, 1) }
   );
  }
  function _t(s) {
   var t = s;
   if (
    (/^BE[0]?[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0]?[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if ((t.length === 9 && (t = '0'.concat(t)), t.substr(1, 1) === '0'))
    return { meta: {}, valid: !1 };
   var a = parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10);
   return { meta: {}, valid: a % 97 === 0 };
  }
  function ea(s) {
   var t = s;
   if (
    (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9,10}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = 0,
    r = 0;
   if (t.length === 9) {
    for (r = 0; r < 8; r++) a += parseInt(t.charAt(r), 10) * (r + 1);
    if (((a = a % 11), a === 10)) {
     for (a = 0, r = 0; r < 8; r++) a += parseInt(t.charAt(r), 10) * (r + 3);
     a = a % 11;
    }
    return (a = a % 10), { meta: {}, valid: ''.concat(a) === t.substr(8) };
   } else {
    var e = function (o) {
      var d = parseInt(o.substr(0, 2), 10) + 1900,
       u = parseInt(o.substr(2, 2), 10),
       c = parseInt(o.substr(4, 2), 10);
      if (
       (u > 40 ? ((d += 100), (u -= 40)) : u > 20 && ((d -= 100), (u -= 20)),
       !I(d, u, c))
      )
       return !1;
      for (var v = [2, 4, 8, 5, 10, 9, 7, 3, 6], f = 0, m = 0; m < 9; m++)
       f += parseInt(o.charAt(m), 10) * v[m];
      return (f = (f % 11) % 10), ''.concat(f) === o.substr(9, 1);
     },
     n = function (o) {
      for (var d = [21, 19, 17, 13, 11, 9, 7, 3, 1], u = 0, c = 0; c < 9; c++)
       u += parseInt(o.charAt(c), 10) * d[c];
      return (u = u % 10), ''.concat(u) === o.substr(9, 1);
     },
     i = function (o) {
      for (var d = [4, 3, 2, 7, 6, 5, 4, 3, 2], u = 0, c = 0; c < 9; c++)
       u += parseInt(o.charAt(c), 10) * d[c];
      return (
       (u = 11 - (u % 11)),
       u === 10 ? !1 : (u === 11 && (u = 0), ''.concat(u) === o.substr(9, 1))
      );
     };
    return { meta: {}, valid: e(t) || n(t) || i(t) };
   }
  }
  function ta(s) {
   if (s === '') return { meta: {}, valid: !0 };
   var t = s.replace(/[^\d]+/g, '');
   if (t === '' || t.length !== 14) return { meta: {}, valid: !1 };
   if (
    t === '00000000000000' ||
    t === '11111111111111' ||
    t === '22222222222222' ||
    t === '33333333333333' ||
    t === '44444444444444' ||
    t === '55555555555555' ||
    t === '66666666666666' ||
    t === '77777777777777' ||
    t === '88888888888888' ||
    t === '99999999999999'
   )
    return { meta: {}, valid: !1 };
   var a = t.length - 2,
    r = t.substring(0, a),
    e = t.substring(a),
    n = 0,
    i = a - 7,
    l;
   for (l = a; l >= 1; l--)
    (n += parseInt(r.charAt(a - l), 10) * i--), i < 2 && (i = 9);
   var o = n % 11 < 2 ? 0 : 11 - (n % 11);
   if (o !== parseInt(e.charAt(0), 10)) return { meta: {}, valid: !1 };
   for (a = a + 1, r = t.substring(0, a), n = 0, i = a - 7, l = a; l >= 1; l--)
    (n += parseInt(r.charAt(a - l), 10) * i--), i < 2 && (i = 9);
   return (
    (o = n % 11 < 2 ? 0 : 11 - (n % 11)),
    { meta: {}, valid: o === parseInt(e.charAt(1), 10) }
   );
  }
  function aa(s) {
   var t = s;
   if (
    (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t) && (t = t.substr(2)),
    !/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t))
   )
    return { meta: {}, valid: !1 };
   t = t.substr(1);
   for (var a = [5, 4, 3, 2, 7, 6, 5, 4], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return (
    (r = 11 - (r % 11)),
    r === 10
     ? { meta: {}, valid: !1 }
     : (r === 11 && (r = 0),
       { meta: {}, valid: ''.concat(r) === t.substr(8, 1) })
   );
  }
  function ra(s) {
   var t = s;
   if (
    (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(t) && (t = t.substr(2)),
    !/^[0-5|9][0-9]{7}[A-Z]$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (t.substr(0, 2) === '12') return { meta: {}, valid: !1 };
   for (
    var a = 0,
     r = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 },
     e = 0;
    e < 8;
    e++
   ) {
    var n = parseInt(t.charAt(e), 10);
    e % 2 === 0 && (n = r[''.concat(n)]), (a += n);
   }
   return {
    meta: {},
    valid: ''.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[a % 26]) === t.substr(8, 1),
   };
  }
  function na(s) {
   var t = s;
   if (
    (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8,10}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = 0,
    r = 0;
   if (t.length === 8) {
    if (''.concat(t.charAt(0)) === '9') return { meta: {}, valid: !1 };
    for (a = 0, r = 0; r < 7; r++) a += parseInt(t.charAt(r), 10) * (8 - r);
    return (
     (a = 11 - (a % 11)),
     a === 10 && (a = 0),
     a === 11 && (a = 1),
     { meta: {}, valid: ''.concat(a) === t.substr(7, 1) }
    );
   } else if (t.length === 9 && ''.concat(t.charAt(0)) === '6') {
    for (a = 0, r = 0; r < 7; r++) a += parseInt(t.charAt(r + 1), 10) * (8 - r);
    return (
     (a = 11 - (a % 11)),
     a === 10 && (a = 0),
     a === 11 && (a = 1),
     (a = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][a - 1]),
     { meta: {}, valid: ''.concat(a) === t.substr(8, 1) }
    );
   } else if (t.length === 9 || t.length === 10) {
    var e = 1900 + parseInt(t.substr(0, 2), 10),
     n = (parseInt(t.substr(2, 2), 10) % 50) % 20,
     i = parseInt(t.substr(4, 2), 10);
    if (t.length === 9) {
     if ((e >= 1980 && (e -= 100), e > 1953)) return { meta: {}, valid: !1 };
    } else e < 1954 && (e += 100);
    if (!I(e, n, i)) return { meta: {}, valid: !1 };
    if (t.length === 10) {
     var l = parseInt(t.substr(0, 9), 10) % 11;
     return (
      e < 1985 && (l = l % 10),
      { meta: {}, valid: ''.concat(l) === t.substr(9, 1) }
     );
    }
    return { meta: {}, valid: !0 };
   }
   return { meta: {}, valid: !1 };
  }
  function ia(s) {
   var t = s;
   return (
    /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)),
    /^[0-9]{9}$/.test(t) ? { meta: {}, valid: P(t) } : { meta: {}, valid: !1 }
   );
  }
  function sa(s) {
   var t = s;
   if ((/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = 0, r = [2, 7, 6, 5, 4, 3, 2, 1], e = 0; e < 8; e++)
    a += parseInt(t.charAt(e), 10) * r[e];
   return { meta: {}, valid: a % 11 === 0 };
  }
  function la(s) {
   var t = s;
   if ((/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = 0, r = [3, 7, 1, 3, 7, 1, 3, 7, 1], e = 0; e < 9; e++)
    a += parseInt(t.charAt(e), 10) * r[e];
   return { meta: {}, valid: a % 10 === 0 };
  }
  function oa(s) {
   var t = s;
   if (
    (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)),
    !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = function (l) {
     var o = parseInt(l.substr(0, 8), 10);
     return ''.concat('TRWAGMYFPDXBNJZSQVHLCKE'[o % 23]) === l.substr(8, 1);
    },
    r = function (l) {
     var o = ['XYZ'.indexOf(l.charAt(0)), l.substr(1)].join(''),
      d = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(o, 10) % 23];
     return ''.concat(d) === l.substr(8, 1);
    },
    e = function (l) {
     var o = l.charAt(0),
      d;
     if ('KLM'.indexOf(o) !== -1)
      return (
       (d = parseInt(l.substr(1, 8), 10)),
       (d = 'TRWAGMYFPDXBNJZSQVHLCKE'[d % 23]),
       ''.concat(d) === l.substr(8, 1)
      );
     if ('ABCDEFGHJNPQRSUVW'.indexOf(o) !== -1) {
      for (var u = [2, 1, 2, 1, 2, 1, 2], c = 0, v = 0, f = 0; f < 7; f++)
       (v = parseInt(l.charAt(f + 1), 10) * u[f]),
        v > 9 && (v = Math.floor(v / 10) + (v % 10)),
        (c += v);
      return (
       (c = 10 - (c % 10)),
       c === 10 && (c = 0),
       ''.concat(c) === l.substr(8, 1) || 'JABCDEFGHI'[c] === l.substr(8, 1)
      );
     }
     return !1;
    },
    n = t.charAt(0);
   return /^[0-9]$/.test(n)
    ? { meta: { type: 'DNI' }, valid: a(t) }
    : /^[XYZ]$/.test(n)
      ? { meta: { type: 'NIE' }, valid: r(t) }
      : { meta: { type: 'CIF' }, valid: e(t) };
  }
  function da(s) {
   var t = s;
   if ((/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [7, 9, 10, 5, 8, 4, 2, 1], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return { meta: {}, valid: r % 11 === 0 };
  }
  function ua(s) {
   var t = s;
   if (
    (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)),
    !/^[0-9A-Z]{2}[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (t.substr(2, 4) !== '000') return { meta: {}, valid: A(t.substr(2)) };
   if (/^[0-9]{2}$/.test(t.substr(0, 2)))
    return {
     meta: {},
     valid: t.substr(0, 2) === ''.concat(parseInt(t.substr(2) + '12', 10) % 97),
    };
   var a = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
    r;
   return (
    /^[0-9]$/.test(t.charAt(0))
     ? (r = a.indexOf(t.charAt(0)) * 24 + a.indexOf(t.charAt(1)) - 10)
     : (r = a.indexOf(t.charAt(0)) * 34 + a.indexOf(t.charAt(1)) - 100),
    {
     meta: {},
     valid:
      (parseInt(t.substr(2), 10) + 1 + Math.floor(r / 11)) % 11 === r % 11,
    }
   );
  }
  function ca(s) {
   var t = s;
   if (
    ((/^GB[0-9]{9}$/.test(t) ||
     /^GB[0-9]{12}$/.test(t) ||
     /^GBGD[0-9]{3}$/.test(t) ||
     /^GBHA[0-9]{3}$/.test(t) ||
     /^GB(GD|HA)8888[0-9]{5}$/.test(t)) &&
     (t = t.substr(2)),
    !/^[0-9]{9}$/.test(t) &&
     !/^[0-9]{12}$/.test(t) &&
     !/^GD[0-9]{3}$/.test(t) &&
     !/^HA[0-9]{3}$/.test(t) &&
     !/^(GD|HA)8888[0-9]{5}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = t.length;
   if (a === 5) {
    var r = t.substr(0, 2),
     e = parseInt(t.substr(2), 10);
    return {
     meta: {},
     valid: (r === 'GD' && e < 500) || (r === 'HA' && e >= 500),
    };
   } else {
    if (
     a === 11 &&
     (t.substr(0, 6) === 'GD8888' || t.substr(0, 6) === 'HA8888')
    )
     return (t.substr(0, 2) === 'GD' && parseInt(t.substr(6, 3), 10) >= 500) ||
      (t.substr(0, 2) === 'HA' && parseInt(t.substr(6, 3), 10) < 500)
      ? { meta: {}, valid: !1 }
      : {
         meta: {},
         valid:
          parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10),
        };
    if (a === 9 || a === 12) {
     for (var n = [8, 7, 6, 5, 4, 3, 2, 10, 1], i = 0, l = 0; l < 9; l++)
      i += parseInt(t.charAt(l), 10) * n[l];
     i = i % 97;
     var o =
      parseInt(t.substr(0, 3), 10) >= 100
       ? i === 0 || i === 42 || i === 55
       : i === 0;
     return { meta: {}, valid: o };
    }
   }
   return { meta: {}, valid: !0 };
  }
  function ce(s) {
   var t = s;
   if (
    (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   t.length === 8 && (t = '0'.concat(t));
   for (var a = [256, 128, 64, 32, 16, 8, 4, 2], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return (
    (r = (r % 11) % 10), { meta: {}, valid: ''.concat(r) === t.substr(8, 1) }
   );
  }
  function va(s) {
   var t = s;
   return (
    /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)),
    /^[0-9]{11}$/.test(t) ? { meta: {}, valid: P(t) } : { meta: {}, valid: !1 }
   );
  }
  function fa(s) {
   var t = s;
   if ((/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [9, 7, 3, 1, 9, 7, 3, 1], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return { meta: {}, valid: r % 10 === 0 };
  }
  function ha(s) {
   var t = s;
   if (
    (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)),
    !/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = function (e) {
    for (var n = e; n.length < 7; ) n = '0'.concat(n);
    for (var i = 'WABCDEFGHIJKLMNOPQRSTUV', l = 0, o = 0; o < 7; o++)
     l += parseInt(n.charAt(o), 10) * (8 - o);
    return (l += 9 * i.indexOf(n.substr(7))), i[l % 23];
   };
   return /^[0-9]+$/.test(t.substr(0, 7))
    ? {
       meta: {},
       valid: t.charAt(7) === a(''.concat(t.substr(0, 7)).concat(t.substr(8))),
      }
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(t.charAt(1)) !== -1
      ? {
         meta: {},
         valid:
          t.charAt(7) === a(''.concat(t.substr(2, 5)).concat(t.substr(0, 1))),
        }
      : { meta: {}, valid: !0 };
  }
  function ma(s) {
   var t = s;
   return (
    /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)),
    { meta: {}, valid: /^[0-9]{5,6}$/.test(t) }
   );
  }
  function pa(s) {
   var t = s;
   if ((/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   if (parseInt(t.substr(0, 7), 10) === 0) return { meta: {}, valid: !1 };
   var a = parseInt(t.substr(7, 3), 10);
   return a < 1 || (a > 201 && a !== 999 && a !== 888)
    ? { meta: {}, valid: !1 }
    : { meta: {}, valid: A(t) };
  }
  function ga(s) {
   var t = s;
   if (
    (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t) && (t = t.substr(2)),
    !/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = t.length,
    r = 0,
    e;
   for (e = 0; e < a - 1; e++) r += parseInt(t.charAt(e), 10) * (1 + (e % 9));
   var n = r % 11;
   if (n === 10)
    for (r = 0, e = 0; e < a - 1; e++)
     r += parseInt(t.charAt(e), 10) * (1 + ((e + 2) % 9));
   return (
    (n = (n % 11) % 10), { meta: {}, valid: ''.concat(n) === t.charAt(a - 1) }
   );
  }
  function ba(s) {
   var t = s;
   return (
    /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)),
    /^[0-9]{8}$/.test(t)
     ? {
        meta: {},
        valid: ''.concat(parseInt(t.substr(0, 6), 10) % 89) === t.substr(6, 2),
       }
     : { meta: {}, valid: !1 }
   );
  }
  function Aa(s) {
   var t = s;
   if ((/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   var a = parseInt(t.charAt(0), 10),
    r = t.length,
    e = 0,
    n = [],
    i;
   if (a > 3) {
    for (e = 0, n = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], i = 0; i < r; i++)
     e += parseInt(t.charAt(i), 10) * n[i];
    return (e = e % 11), { meta: {}, valid: e === 3 };
   } else {
    var l = parseInt(t.substr(0, 2), 10),
     o = parseInt(t.substr(2, 2), 10),
     d = parseInt(t.substr(4, 2), 10);
    if (((d = d + 1800 + parseInt(t.charAt(6), 10) * 100), !I(d, o, l)))
     return { meta: {}, valid: !1 };
    for (e = 0, n = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], i = 0; i < r - 1; i++)
     e += parseInt(t.charAt(i), 10) * n[i];
    return (
     (e = ((e + 1) % 11) % 10),
     { meta: {}, valid: ''.concat(e) === t.charAt(r - 1) }
    );
   }
  }
  function Ia(s) {
   var t = s;
   if ((/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [3, 4, 6, 7, 8, 9, 10, 1], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return { meta: {}, valid: r % 37 === 0 };
  }
  function Ea(s) {
   return s
    .split('')
    .map(function (t) {
     var a = t.charCodeAt(0);
     return a >= 65 && a <= 90 ? a - 55 : t;
    })
    .join('')
    .split('')
    .map(function (t) {
     return parseInt(t, 10);
    });
  }
  function ka(s) {
   for (var t = Ea(s), a = 0, r = t.length, e = 0; e < r - 1; ++e)
    a = ((a + t[e]) * 10) % 97;
   return (a += t[r - 1]), a % 97 === 1;
  }
  function ya(s) {
   var t = s;
   if (
    (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)),
    !/^[0-9]{9}B[0-9]{2}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = t.substr(0, 9);
   return { meta: {}, valid: ue(a).valid || ka('NL'.concat(t)) };
  }
  function $a(s) {
   var t = s;
   if ((/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [3, 2, 7, 6, 5, 4, 3, 2], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return (
    (r = 11 - (r % 11)),
    r === 11 && (r = 0),
    { meta: {}, valid: ''.concat(r) === t.substr(8, 1) }
   );
  }
  function Ca(s) {
   var t = s;
   if ((/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], r = 0, e = 0; e < 10; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return { meta: {}, valid: r % 11 === 0 };
  }
  function Fa(s) {
   var t = s;
   if ((/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = [9, 8, 7, 6, 5, 4, 3, 2], r = 0, e = 0; e < 8; e++)
    r += parseInt(t.charAt(e), 10) * a[e];
   return (
    (r = 11 - (r % 11)),
    r > 9 && (r = 0),
    { meta: {}, valid: ''.concat(r) === t.substr(8, 1) }
   );
  }
  function Va(s) {
   var t = s;
   if (
    (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)),
    !/^[1-9][0-9]{1,9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   for (
    var a = t.length,
     r = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - a),
     e = 0,
     n = 0;
    n < a - 1;
    n++
   )
    e += parseInt(t.charAt(n), 10) * r[n];
   return (
    (e = ((10 * e) % 11) % 10),
    { meta: {}, valid: ''.concat(e) === t.substr(a - 1, 1) }
   );
  }
  function Oa(s) {
   var t = s;
   if ((/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var a = 10, r = 0, e = 0; e < 8; e++)
    (r = (parseInt(t.charAt(e), 10) + a) % 10),
     r === 0 && (r = 10),
     (a = (2 * r) % 11);
   return { meta: {}, valid: (a + parseInt(t.substr(8, 1), 10)) % 10 === 1 };
  }
  function Sa(s) {
   var t = s;
   if (
    (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)),
    !/^([0-9]{10}|[0-9]{12})$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var a = 0;
   if (t.length === 10) {
    var r = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     e = 0;
    for (a = 0; a < 10; a++) e += parseInt(t.charAt(a), 10) * r[a];
    return (
     (e = e % 11),
     e > 9 && (e = e % 10),
     { meta: {}, valid: ''.concat(e) === t.substr(9, 1) }
    );
   } else if (t.length === 12) {
    var n = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     i = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     l = 0,
     o = 0;
    for (a = 0; a < 11; a++)
     (l += parseInt(t.charAt(a), 10) * n[a]),
      (o += parseInt(t.charAt(a), 10) * i[a]);
    return (
     (l = l % 11),
     l > 9 && (l = l % 10),
     (o = o % 11),
     o > 9 && (o = o % 10),
     {
      meta: {},
      valid:
       ''.concat(l) === t.substr(10, 1) && ''.concat(o) === t.substr(11, 1),
     }
    );
   }
   return { meta: {}, valid: !0 };
  }
  function Ha(s) {
   var t = s;
   return (
    /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)),
    /^[0-9]{10}01$/.test(t)
     ? ((t = t.substr(0, 10)), { meta: {}, valid: A(t) })
     : { meta: {}, valid: !1 }
   );
  }
  function Na(s) {
   var t = s.match(/^(SI)?([1-9][0-9]{7})$/);
   if (!t) return { meta: {}, valid: !1 };
   for (
    var a = t[1] ? s.substr(2) : s, r = [8, 7, 6, 5, 4, 3, 2], e = 0, n = 0;
    n < 7;
    n++
   )
    e += parseInt(a.charAt(n), 10) * r[n];
   return (
    (e = 11 - (e % 11)),
    e === 10 && (e = 0),
    { meta: {}, valid: ''.concat(e) === a.substr(7, 1) }
   );
  }
  function Ma(s) {
   var t = s;
   return (
    /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)),
    /^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)
     ? { meta: {}, valid: parseInt(t, 10) % 11 === 0 }
     : { meta: {}, valid: !1 }
   );
  }
  function wa(s) {
   var t = s;
   if (
    (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)),
    !/^[VEJPG][0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   for (
    var a = { E: 8, G: 20, J: 12, P: 16, V: 4 },
     r = [3, 2, 7, 6, 5, 4, 3, 2],
     e = a[t.charAt(0)],
     n = 0;
    n < 8;
    n++
   )
    e += parseInt(t.charAt(n + 1), 10) * r[n];
   return (
    (e = 11 - (e % 11)),
    (e === 11 || e === 10) && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.substr(9, 1) }
   );
  }
  function La(s) {
   var t = s;
   return (
    /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)),
    { meta: {}, valid: /^4[0-9]{9}$/.test(t) }
   );
  }
  function Ra() {
   var s = [
    'AR',
    'AT',
    'BE',
    'BG',
    'BR',
    'CH',
    'CY',
    'CZ',
    'DE',
    'DK',
    'EE',
    'EL',
    'ES',
    'FI',
    'FR',
    'GB',
    'GR',
    'HR',
    'HU',
    'IE',
    'IS',
    'IT',
    'LT',
    'LU',
    'LV',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'RU',
    'RS',
    'SE',
    'SK',
    'SI',
    'VE',
    'ZA',
   ];
   return {
    validate: function (a) {
     var r = a.value;
     if (r === '') return { valid: !0 };
     var e = Object.assign({}, { message: '' }, a.options),
      n = r.substr(0, 2);
     if (
      (typeof e.country == 'function'
       ? (n = e.country.call(this))
       : (n = e.country),
      s.indexOf(n) === -1)
     )
      return { valid: !0 };
     var i = { meta: {}, valid: !0 };
     switch (n.toLowerCase()) {
      case 'ar':
       i = Qt(r);
       break;
      case 'at':
       i = qt(r);
       break;
      case 'be':
       i = _t(r);
       break;
      case 'bg':
       i = ea(r);
       break;
      case 'br':
       i = ta(r);
       break;
      case 'ch':
       i = aa(r);
       break;
      case 'cy':
       i = ra(r);
       break;
      case 'cz':
       i = na(r);
       break;
      case 'de':
       i = ia(r);
       break;
      case 'dk':
       i = sa(r);
       break;
      case 'ee':
       i = la(r);
       break;
      case 'el':
       i = ce(r);
       break;
      case 'es':
       i = oa(r);
       break;
      case 'fi':
       i = da(r);
       break;
      case 'fr':
       i = ua(r);
       break;
      case 'gb':
       i = ca(r);
       break;
      case 'gr':
       i = ce(r);
       break;
      case 'hr':
       i = va(r);
       break;
      case 'hu':
       i = fa(r);
       break;
      case 'ie':
       i = ha(r);
       break;
      case 'is':
       i = ma(r);
       break;
      case 'it':
       i = pa(r);
       break;
      case 'lt':
       i = ga(r);
       break;
      case 'lu':
       i = ba(r);
       break;
      case 'lv':
       i = Aa(r);
       break;
      case 'mt':
       i = Ia(r);
       break;
      case 'nl':
       i = ya(r);
       break;
      case 'no':
       i = $a(r);
       break;
      case 'pl':
       i = Ca(r);
       break;
      case 'pt':
       i = Fa(r);
       break;
      case 'ro':
       i = Va(r);
       break;
      case 'rs':
       i = Oa(r);
       break;
      case 'ru':
       i = Sa(r);
       break;
      case 'se':
       i = Ha(r);
       break;
      case 'si':
       i = Na(r);
       break;
      case 'sk':
       i = Ma(r);
       break;
      case 've':
       i = wa(r);
       break;
      case 'za':
       i = La(r);
       break;
     }
     var l = b(
      a.l10n && a.l10n.vat ? e.message || a.l10n.vat.country : e.message,
      a.l10n && a.l10n.vat && a.l10n.vat.countries
       ? a.l10n.vat.countries[n.toUpperCase()]
       : n.toUpperCase(),
     );
     return Object.assign({}, { message: l }, i);
    },
   };
  }
  function Ta() {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(t.value))
      return { valid: !1 };
     for (
      var a = t.value.toUpperCase(),
       r = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        P: 7,
        R: 9,
        S: 2,
        T: 3,
        U: 4,
        V: 5,
        W: 6,
        X: 7,
        Y: 8,
        Z: 9,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
       },
       e = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
       n = a.length,
       i = 0,
       l = 0;
      l < n;
      l++
     )
      i += r[''.concat(a.charAt(l))] * e[l];
     var o = ''.concat(i % 11);
     return o === '10' && (o = 'X'), { valid: o === a.charAt(8) };
    },
   };
  }
  function xa() {
   var s = [
     'AT',
     'BG',
     'BR',
     'CA',
     'CH',
     'CZ',
     'DE',
     'DK',
     'ES',
     'FR',
     'GB',
     'IE',
     'IN',
     'IT',
     'MA',
     'NL',
     'PL',
     'PT',
     'RO',
     'RU',
     'SE',
     'SG',
     'SK',
     'US',
    ],
    t = function (r) {
     for (
      var e = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
       n = '[ABCDEFGHKLMNOPQRSTUVWXY]',
       i = '[ABCDEFGHJKPMNRSTUVWXY]',
       l = '[ABEHMNPRVWXY]',
       o = '[ABDEFGHJLNPQRSTUWXYZ]',
       d = [
        new RegExp(
         '^('
          .concat(e, '{1}')
          .concat(n, '?[0-9]{1,2})(\\s*)([0-9]{1}')
          .concat(o, '{2})$'),
         'i',
        ),
        new RegExp(
         '^('
          .concat(e, '{1}[0-9]{1}')
          .concat(i, '{1})(\\s*)([0-9]{1}')
          .concat(o, '{2})$'),
         'i',
        ),
        new RegExp(
         '^('
          .concat(e, '{1}')
          .concat(n, '{1}?[0-9]{1}')
          .concat(l, '{1})(\\s*)([0-9]{1}')
          .concat(o, '{2})$'),
         'i',
        ),
        new RegExp(
         '^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$',
         'i',
        ),
        /^(GIR)(\s*)(0AA)$/i,
        /^(BFPO)(\s*)([0-9]{1,4})$/i,
        /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
        /^([A-Z]{4})(\s*)(1ZZ)$/i,
        /^(AI-2640)$/i,
       ],
       u = 0,
       c = d;
      u < c.length;
      u++
     ) {
      var v = c[u];
      if (v.test(r)) return !0;
     }
     return !1;
    };
   return {
    validate: function (r) {
     var e = Object.assign({}, { message: '' }, r.options);
     if (r.value === '' || !e.country) return { valid: !0 };
     var n = r.value.substr(0, 2);
     if (
      (typeof e.country == 'function'
       ? (n = e.country.call(this))
       : (n = e.country),
      !n || s.indexOf(n.toUpperCase()) === -1)
     )
      return { valid: !0 };
     var i = !1;
     switch (((n = n.toUpperCase()), n)) {
      case 'AT':
       i = /^([1-9]{1})(\d{3})$/.test(r.value);
       break;
      case 'BG':
       i = /^([1-9]{1}[0-9]{3})$/.test(r.value);
       break;
      case 'BR':
       i = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(r.value);
       break;
      case 'CA':
       i =
        /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
         r.value,
        );
       break;
      case 'CH':
       i = /^([1-9]{1})(\d{3})$/.test(r.value);
       break;
      case 'CZ':
       i = /^(\d{3})([ ]?)(\d{2})$/.test(r.value);
       break;
      case 'DE':
       i = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(r.value);
       break;
      case 'DK':
       i = /^(DK(-|\s)?)?\d{4}$/i.test(r.value);
       break;
      case 'ES':
       i = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(r.value);
       break;
      case 'FR':
       i = /^[0-9]{5}$/i.test(r.value);
       break;
      case 'GB':
       i = t(r.value);
       break;
      case 'IN':
       i = /^\d{3}\s?\d{3}$/.test(r.value);
       break;
      case 'IE':
       i = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(
        r.value,
       );
       break;
      case 'IT':
       i = /^(I-|IT-)?\d{5}$/i.test(r.value);
       break;
      case 'MA':
       i = /^[1-9][0-9]{4}$/i.test(r.value);
       break;
      case 'NL':
       i = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r.value);
       break;
      case 'PL':
       i = /^[0-9]{2}-[0-9]{3}$/.test(r.value);
       break;
      case 'PT':
       i = /^[1-9]\d{3}-\d{3}$/.test(r.value);
       break;
      case 'RO':
       i = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(r.value);
       break;
      case 'RU':
       i = /^[0-9]{6}$/i.test(r.value);
       break;
      case 'SE':
       i = /^(S-)?\d{3}\s?\d{2}$/i.test(r.value);
       break;
      case 'SG':
       i = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
        r.value,
       );
       break;
      case 'SK':
       i = /^(\d{3})([ ]?)(\d{2})$/.test(r.value);
       break;
      case 'US':
      default:
       i = /^\d{4,5}([-]?\d{4})?$/.test(r.value);
       break;
     }
     return {
      message: b(
       r.l10n && r.l10n.zipCode
        ? e.message || r.l10n.zipCode.country
        : e.message,
       r.l10n && r.l10n.zipCode && r.l10n.zipCode.countries
        ? r.l10n.zipCode.countries[n]
        : n,
      ),
      valid: i,
     };
    },
   };
  }
  var W = {
    between: Ae,
    blank: Ie,
    callback: Ee,
    choice: ke,
    creditCard: ye,
    date: $e,
    different: Ce,
    digits: Fe,
    emailAddress: Ve,
    file: Oe,
    greaterThan: Se,
    identical: He,
    integer: Ne,
    ip: Me,
    lessThan: we,
    notEmpty: Le,
    numeric: Re,
    promise: Te,
    regexp: xe,
    remote: Be,
    stringCase: De,
    stringLength: Ge,
    uri: Pe,
    base64: Ue,
    bic: Ke,
    color: je,
    cusip: Ye,
    ean: ze,
    ein: Je,
    grid: Xe,
    hex: We,
    iban: Qe,
    id: Rt,
    imei: Tt,
    imo: xt,
    isbn: Zt,
    isin: Bt,
    ismn: Dt,
    issn: Gt,
    mac: Pt,
    meid: Ut,
    phone: Kt,
    rtn: jt,
    sedol: Yt,
    siren: zt,
    siret: Jt,
    step: Xt,
    uuid: Wt,
    vat: Ra,
    vin: Ta,
    zipCode: xa,
   },
   Za = (function () {
    function s(t, a) {
     k(this, s),
      (this.elements = {}),
      (this.ee = ge()),
      (this.filter = be()),
      (this.plugins = {}),
      (this.results = new Map()),
      (this.validators = {}),
      (this.form = t),
      (this.fields = a);
    }
    return (
     y(s, [
      {
       key: 'on',
       value: function (a, r) {
        return this.ee.on(a, r), this;
       },
      },
      {
       key: 'off',
       value: function (a, r) {
        return this.ee.off(a, r), this;
       },
      },
      {
       key: 'emit',
       value: function (a) {
        for (
         var r, e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
         i < e;
         i++
        )
         n[i - 1] = arguments[i];
        return (r = this.ee).emit.apply(r, [a].concat(n)), this;
       },
      },
      {
       key: 'registerPlugin',
       value: function (a, r) {
        if (this.plugins[a])
         throw new Error('The plguin '.concat(a, ' is registered'));
        return r.setCore(this), r.install(), (this.plugins[a] = r), this;
       },
      },
      {
       key: 'deregisterPlugin',
       value: function (a) {
        var r = this.plugins[a];
        return r && r.uninstall(), delete this.plugins[a], this;
       },
      },
      {
       key: 'registerValidator',
       value: function (a, r) {
        if (this.validators[a])
         throw new Error('The validator '.concat(a, ' is registered'));
        return (this.validators[a] = r), this;
       },
      },
      {
       key: 'registerFilter',
       value: function (a, r) {
        return this.filter.add(a, r), this;
       },
      },
      {
       key: 'deregisterFilter',
       value: function (a, r) {
        return this.filter.remove(a, r), this;
       },
      },
      {
       key: 'executeFilter',
       value: function (a, r, e) {
        return this.filter.execute(a, r, e);
       },
      },
      {
       key: 'addField',
       value: function (a, r) {
        var e = Object.assign({}, { selector: '', validators: {} }, r);
        return (
         (this.fields[a] = this.fields[a]
          ? {
             selector: e.selector || this.fields[a].selector,
             validators: Object.assign(
              {},
              this.fields[a].validators,
              e.validators,
             ),
            }
          : e),
         (this.elements[a] = this.queryElements(a)),
         this.emit('core.field.added', {
          elements: this.elements[a],
          field: a,
          options: this.fields[a],
         }),
         this
        );
       },
      },
      {
       key: 'removeField',
       value: function (a) {
        if (!this.fields[a])
         throw new Error(
          'The field '.concat(
           a,
           ' validators are not defined. Please ensure the field is added first',
          ),
         );
        var r = this.elements[a],
         e = this.fields[a];
        return (
         delete this.elements[a],
         delete this.fields[a],
         this.emit('core.field.removed', { elements: r, field: a, options: e }),
         this
        );
       },
      },
      {
       key: 'validate',
       value: function () {
        var a = this;
        return (
         this.emit('core.form.validating', { formValidation: this }),
         this.filter
          .execute('validate-pre', Promise.resolve(), [])
          .then(function () {
           return Promise.all(
            Object.keys(a.fields).map(function (r) {
             return a.validateField(r);
            }),
           ).then(function (r) {
            switch (!0) {
             case r.indexOf('Invalid') !== -1:
              return (
               a.emit('core.form.invalid', { formValidation: a }),
               Promise.resolve('Invalid')
              );
             case r.indexOf('NotValidated') !== -1:
              return (
               a.emit('core.form.notvalidated', { formValidation: a }),
               Promise.resolve('NotValidated')
              );
             default:
              return (
               a.emit('core.form.valid', { formValidation: a }),
               Promise.resolve('Valid')
              );
            }
           });
          })
        );
       },
      },
      {
       key: 'validateField',
       value: function (a) {
        var r = this,
         e = this.results.get(a);
        if (e === 'Valid' || e === 'Invalid') return Promise.resolve(e);
        this.emit('core.field.validating', a);
        var n = this.elements[a];
        if (n.length === 0)
         return this.emit('core.field.valid', a), Promise.resolve('Valid');
        var i = n[0].getAttribute('type');
        return i === 'radio' || i === 'checkbox' || n.length === 1
         ? this.validateElement(a, n[0])
         : Promise.all(
            n.map(function (l) {
             return r.validateElement(a, l);
            }),
           ).then(function (l) {
            switch (!0) {
             case l.indexOf('Invalid') !== -1:
              return (
               r.emit('core.field.invalid', a),
               r.results.set(a, 'Invalid'),
               Promise.resolve('Invalid')
              );
             case l.indexOf('NotValidated') !== -1:
              return (
               r.emit('core.field.notvalidated', a),
               r.results.delete(a),
               Promise.resolve('NotValidated')
              );
             default:
              return (
               r.emit('core.field.valid', a),
               r.results.set(a, 'Valid'),
               Promise.resolve('Valid')
              );
            }
           });
       },
      },
      {
       key: 'validateElement',
       value: function (a, r) {
        var e = this;
        this.results.delete(a);
        var n = this.elements[a],
         i = this.filter.execute('element-ignored', !1, [a, r, n]);
        if (i)
         return (
          this.emit('core.element.ignored', {
           element: r,
           elements: n,
           field: a,
          }),
          Promise.resolve('Ignored')
         );
        var l = this.fields[a].validators;
        this.emit('core.element.validating', {
         element: r,
         elements: n,
         field: a,
        });
        var o = Object.keys(l).map(function (d) {
         return function () {
          return e.executeValidator(a, r, d, l[d]);
         };
        });
        return this.waterfall(o)
         .then(function (d) {
          var u = d.indexOf('Invalid') === -1;
          e.emit('core.element.validated', {
           element: r,
           elements: n,
           field: a,
           valid: u,
          });
          var c = r.getAttribute('type');
          return (
           (c === 'radio' || c === 'checkbox' || n.length === 1) &&
            e.emit(u ? 'core.field.valid' : 'core.field.invalid', a),
           Promise.resolve(u ? 'Valid' : 'Invalid')
          );
         })
         .catch(function (d) {
          return (
           e.emit('core.element.notvalidated', {
            element: r,
            elements: n,
            field: a,
           }),
           Promise.resolve(d)
          );
         });
       },
      },
      {
       key: 'executeValidator',
       value: function (a, r, e, n) {
        var i = this,
         l = this.elements[a],
         o = this.filter.execute('validator-name', e, [e, a]);
        if (
         ((n.message = this.filter.execute('validator-message', n.message, [
          this.locale,
          a,
          o,
         ])),
         !this.validators[o] || n.enabled === !1)
        )
         return (
          this.emit('core.validator.validated', {
           element: r,
           elements: l,
           field: a,
           result: this.normalizeResult(a, o, { valid: !0 }),
           validator: o,
          }),
          Promise.resolve('Valid')
         );
        var d = this.validators[o],
         u = this.getElementValue(a, r, o),
         c = this.filter.execute('field-should-validate', !0, [a, r, u, e]);
        if (!c)
         return (
          this.emit('core.validator.notvalidated', {
           element: r,
           elements: l,
           field: a,
           validator: e,
          }),
          Promise.resolve('NotValidated')
         );
        this.emit('core.validator.validating', {
         element: r,
         elements: l,
         field: a,
         validator: e,
        });
        var v = d().validate({
          element: r,
          elements: l,
          field: a,
          l10n: this.localization,
          options: n,
          value: u,
         }),
         f = typeof v.then == 'function';
        if (f)
         return v.then(function (g) {
          var F = i.normalizeResult(a, e, g);
          return (
           i.emit('core.validator.validated', {
            element: r,
            elements: l,
            field: a,
            result: F,
            validator: e,
           }),
           F.valid ? 'Valid' : 'Invalid'
          );
         });
        var m = this.normalizeResult(a, e, v);
        return (
         this.emit('core.validator.validated', {
          element: r,
          elements: l,
          field: a,
          result: m,
          validator: e,
         }),
         Promise.resolve(m.valid ? 'Valid' : 'Invalid')
        );
       },
      },
      {
       key: 'getElementValue',
       value: function (a, r, e) {
        var n = se(this.form, a, r, this.elements[a]);
        return this.filter.execute('field-value', n, [n, a, r, e]);
       },
      },
      {
       key: 'getElements',
       value: function (a) {
        return this.elements[a];
       },
      },
      {
       key: 'getFields',
       value: function () {
        return this.fields;
       },
      },
      {
       key: 'getFormElement',
       value: function () {
        return this.form;
       },
      },
      {
       key: 'getLocale',
       value: function () {
        return this.locale;
       },
      },
      {
       key: 'getPlugin',
       value: function (a) {
        return this.plugins[a];
       },
      },
      {
       key: 'updateFieldStatus',
       value: function (a, r, e) {
        var n = this,
         i = this.elements[a],
         l = i[0].getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? [i[0]] : i;
        if (
         (o.forEach(function (d) {
          return n.updateElementStatus(a, d, r, e);
         }),
         e)
        )
         r === 'Invalid' &&
          (this.emit('core.field.invalid', a), this.results.set(a, 'Invalid'));
        else
         switch (r) {
          case 'NotValidated':
           this.emit('core.field.notvalidated', a), this.results.delete(a);
           break;
          case 'Validating':
           this.emit('core.field.validating', a), this.results.delete(a);
           break;
          case 'Valid':
           this.emit('core.field.valid', a), this.results.set(a, 'Valid');
           break;
          case 'Invalid':
           this.emit('core.field.invalid', a), this.results.set(a, 'Invalid');
           break;
         }
        return this;
       },
      },
      {
       key: 'updateElementStatus',
       value: function (a, r, e, n) {
        var i = this,
         l = this.elements[a],
         o = this.fields[a].validators,
         d = n ? [n] : Object.keys(o);
        switch (e) {
         case 'NotValidated':
          d.forEach(function (u) {
           return i.emit('core.validator.notvalidated', {
            element: r,
            elements: l,
            field: a,
            validator: u,
           });
          }),
           this.emit('core.element.notvalidated', {
            element: r,
            elements: l,
            field: a,
           });
          break;
         case 'Validating':
          d.forEach(function (u) {
           return i.emit('core.validator.validating', {
            element: r,
            elements: l,
            field: a,
            validator: u,
           });
          }),
           this.emit('core.element.validating', {
            element: r,
            elements: l,
            field: a,
           });
          break;
         case 'Valid':
          d.forEach(function (u) {
           return i.emit('core.validator.validated', {
            element: r,
            elements: l,
            field: a,
            result: { message: o[u].message, valid: !0 },
            validator: u,
           });
          }),
           this.emit('core.element.validated', {
            element: r,
            elements: l,
            field: a,
            valid: !0,
           });
          break;
         case 'Invalid':
          d.forEach(function (u) {
           return i.emit('core.validator.validated', {
            element: r,
            elements: l,
            field: a,
            result: { message: o[u].message, valid: !1 },
            validator: u,
           });
          }),
           this.emit('core.element.validated', {
            element: r,
            elements: l,
            field: a,
            valid: !1,
           });
          break;
        }
        return this;
       },
      },
      {
       key: 'resetForm',
       value: function (a) {
        var r = this;
        return (
         Object.keys(this.fields).forEach(function (e) {
          return r.resetField(e, a);
         }),
         this.emit('core.form.reset', { formValidation: this, reset: a }),
         this
        );
       },
      },
      {
       key: 'resetField',
       value: function (a, r) {
        if (r) {
         var e = this.elements[a],
          n = e[0].getAttribute('type');
         e.forEach(function (i) {
          n === 'radio' || n === 'checkbox'
           ? (i.removeAttribute('selected'),
             i.removeAttribute('checked'),
             (i.checked = !1))
           : (i.setAttribute('value', ''),
             (i instanceof HTMLInputElement ||
              i instanceof HTMLTextAreaElement) &&
              (i.value = ''));
         });
        }
        return (
         this.updateFieldStatus(a, 'NotValidated'),
         this.emit('core.field.reset', { field: a, reset: r }),
         this
        );
       },
      },
      {
       key: 'revalidateField',
       value: function (a) {
        return this.fields[a]
         ? (this.updateFieldStatus(a, 'NotValidated'), this.validateField(a))
         : Promise.resolve('Ignored');
       },
      },
      {
       key: 'disableValidator',
       value: function (a, r) {
        if (!this.fields[a]) return this;
        var e = this.elements[a];
        return (
         this.toggleValidator(!1, a, r),
         this.emit('core.validator.disabled', {
          elements: e,
          field: a,
          formValidation: this,
          validator: r,
         }),
         this
        );
       },
      },
      {
       key: 'enableValidator',
       value: function (a, r) {
        if (!this.fields[a]) return this;
        var e = this.elements[a];
        return (
         this.toggleValidator(!0, a, r),
         this.emit('core.validator.enabled', {
          elements: e,
          field: a,
          formValidation: this,
          validator: r,
         }),
         this
        );
       },
      },
      {
       key: 'updateValidatorOption',
       value: function (a, r, e, n) {
        return (
         this.fields[a] &&
          this.fields[a].validators &&
          this.fields[a].validators[r] &&
          (this.fields[a].validators[r][e] = n),
         this
        );
       },
      },
      {
       key: 'setFieldOptions',
       value: function (a, r) {
        return (this.fields[a] = r), this;
       },
      },
      {
       key: 'destroy',
       value: function () {
        var a = this;
        return (
         Object.keys(this.plugins).forEach(function (r) {
          return a.plugins[r].uninstall();
         }),
         this.ee.clear(),
         this.filter.clear(),
         this.results.clear(),
         (this.plugins = {}),
         this
        );
       },
      },
      {
       key: 'setLocale',
       value: function (a, r) {
        return (this.locale = a), (this.localization = r), this;
       },
      },
      {
       key: 'waterfall',
       value: function (a) {
        return a.reduce(function (r, e) {
         return r.then(function (n) {
          return e().then(function (i) {
           return n.push(i), n;
          });
         });
        }, Promise.resolve([]));
       },
      },
      {
       key: 'queryElements',
       value: function (a) {
        var r = this.fields[a].selector
         ? this.fields[a].selector.charAt(0) === '#'
           ? '[id="'.concat(this.fields[a].selector.substring(1), '"]')
           : this.fields[a].selector
         : '[name="'.concat(a, '"]');
        return [].slice.call(this.form.querySelectorAll(r));
       },
      },
      {
       key: 'normalizeResult',
       value: function (a, r, e) {
        var n = this.fields[a].validators[r];
        return Object.assign({}, e, {
         message:
          e.message ||
          (n ? n.message : '') ||
          (this.localization &&
          this.localization[r] &&
          this.localization[r].default
           ? this.localization[r].default
           : '') ||
          'The field '.concat(a, ' is not valid'),
        });
       },
      },
      {
       key: 'toggleValidator',
       value: function (a, r, e) {
        var n = this,
         i = this.fields[r].validators;
        return (
         e && i && i[e]
          ? (this.fields[r].validators[e].enabled = a)
          : e ||
            Object.keys(i).forEach(function (l) {
             return (n.fields[r].validators[l].enabled = a);
            }),
         this.updateFieldStatus(r, 'NotValidated', e)
        );
       },
      },
     ]),
     s
    );
   })();
  function Ba(s, t) {
   var a = Object.assign(
     {},
     { fields: {}, locale: 'en_US', plugins: {}, init: function (n) {} },
     t,
    ),
    r = new Za(s, a.fields);
   return (
    r.setLocale(a.locale, a.localization),
    Object.keys(a.plugins).forEach(function (e) {
     return r.registerPlugin(e, a.plugins[e]);
    }),
    Object.keys(W).forEach(function (e) {
     return r.registerValidator(e, W[e]);
    }),
    a.init(r),
    Object.keys(a.fields).forEach(function (e) {
     return r.addField(e, a.fields[e]);
    }),
    r
   );
  }
  var C = (function () {
    function s(t) {
     k(this, s), (this.opts = t);
    }
    return (
     y(s, [
      {
       key: 'setCore',
       value: function (a) {
        return (this.core = a), this;
       },
      },
      { key: 'install', value: function () {} },
      { key: 'uninstall', value: function () {} },
     ]),
     s
    );
   })(),
   Da = { getFieldValue: se },
   Ga = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.opts = r || {}),
      (e.validatorNameFilter = e.getValidatorName.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core.registerFilter('validator-name', this.validatorNameFilter);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
       },
      },
      {
       key: 'getValidatorName',
       value: function (e, n) {
        return this.opts[e] || e;
       },
      },
     ]),
     a
    );
   })(C),
   Pa = (function (s) {
    V(a, s);
    var t = O(a);
    function a() {
     var r;
     return (
      k(this, a),
      (r = t.call(this, {})),
      (r.elementValidatedHandler = r.onElementValidated.bind(h(r))),
      (r.fieldValidHandler = r.onFieldValid.bind(h(r))),
      (r.fieldInvalidHandler = r.onFieldInvalid.bind(h(r))),
      (r.messageDisplayedHandler = r.onMessageDisplayed.bind(h(r))),
      r
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.field.valid', this.fieldValidHandler)
         .on('core.field.invalid', this.fieldInvalidHandler)
         .on('core.element.validated', this.elementValidatedHandler)
         .on('plugins.message.displayed', this.messageDisplayedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core
         .off('core.field.valid', this.fieldValidHandler)
         .off('core.field.invalid', this.fieldInvalidHandler)
         .off('core.element.validated', this.elementValidatedHandler)
         .off('plugins.message.displayed', this.messageDisplayedHandler);
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        e.valid &&
         (e.element.setAttribute('aria-invalid', 'false'),
         e.element.removeAttribute('aria-describedby'));
       },
      },
      {
       key: 'onFieldValid',
       value: function (e) {
        var n = this.core.getElements(e);
        n &&
         n.forEach(function (i) {
          i.setAttribute('aria-invalid', 'false'),
           i.removeAttribute('aria-describedby');
         });
       },
      },
      {
       key: 'onFieldInvalid',
       value: function (e) {
        var n = this.core.getElements(e);
        n &&
         n.forEach(function (i) {
          return i.setAttribute('aria-invalid', 'true');
         });
       },
      },
      {
       key: 'onMessageDisplayed',
       value: function (e) {
        e.messageElement.setAttribute('role', 'alert'),
         e.messageElement.setAttribute('aria-hidden', 'false');
        var n = this.core.getElements(e.field),
         i = n.indexOf(e.element),
         l = 'js-fv-'
          .concat(e.field, '-')
          .concat(i, '-')
          .concat(Date.now(), '-message');
        e.messageElement.setAttribute('id', l),
         e.element.setAttribute('aria-describedby', l);
        var o = e.element.getAttribute('type');
        (o === 'radio' || o === 'checkbox') &&
         n.forEach(function (d) {
          return d.setAttribute('aria-describedby', l);
         });
       },
      },
     ]),
     a
    );
   })(C),
   Ua = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.addedFields = new Map()),
      (e.opts = Object.assign(
       {},
       { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
       r,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        var e = this;
        this.parsePlugins();
        var n = this.parseOptions();
        Object.keys(n).forEach(function (i) {
         e.addedFields.has(i) || e.addedFields.set(i, !0),
          e.core.addField(i, n[i]);
        }),
         this.core
          .on('core.field.added', this.fieldAddedHandler)
          .on('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.addedFields.clear(),
         this.core
          .off('core.field.added', this.fieldAddedHandler)
          .off('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        var n = this,
         i = e.elements;
        !i ||
         i.length === 0 ||
         this.addedFields.has(e.field) ||
         (this.addedFields.set(e.field, !0),
         i.forEach(function (l) {
          var o = n.parseElement(l);
          if (!n.isEmptyOption(o)) {
           var d = {
            selector: e.options.selector,
            validators: Object.assign(
             {},
             e.options.validators || {},
             o.validators,
            ),
           };
           n.core.setFieldOptions(e.field, d);
          }
         }));
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        e.field &&
         this.addedFields.has(e.field) &&
         this.addedFields.delete(e.field);
       },
      },
      {
       key: 'parseOptions',
       value: function () {
        var e = this,
         n = this.opts.prefix,
         i = {},
         l = this.core.getFields(),
         o = this.core.getFormElement(),
         d = [].slice.call(o.querySelectorAll('[name], ['.concat(n, 'field]')));
        return (
         d.forEach(function (u) {
          var c = e.parseElement(u);
          if (!e.isEmptyOption(c)) {
           var v =
            u.getAttribute('name') || u.getAttribute(''.concat(n, 'field'));
           i[v] = Object.assign({}, i[v], c);
          }
         }),
         Object.keys(i).forEach(function (u) {
          Object.keys(i[u].validators).forEach(function (c) {
           (i[u].validators[c].enabled = i[u].validators[c].enabled || !1),
            l[u] &&
             l[u].validators &&
             l[u].validators[c] &&
             Object.assign(i[u].validators[c], l[u].validators[c]);
          });
         }),
         Object.assign({}, l, i)
        );
       },
      },
      {
       key: 'createPluginInstance',
       value: function (e, n) {
        for (
         var i = e.split('.'), l = window || this, o = 0, d = i.length;
         o < d;
         o++
        )
         l = l[i[o]];
        if (typeof l != 'function')
         throw new Error('the plugin '.concat(e, " doesn't exist"));
        return new l(n);
       },
      },
      {
       key: 'parsePlugins',
       value: function () {
        for (
         var e = this,
          n = this.core.getFormElement(),
          i = new RegExp(
           '^'.concat(
            this.opts.pluginPrefix,
            '([a-z0-9-]+)(___)*([a-z0-9-]+)*$',
           ),
          ),
          l = n.attributes.length,
          o = {},
          d = 0;
         d < l;
         d++
        ) {
         var u = n.attributes[d].name,
          c = n.attributes[d].value,
          v = i.exec(u);
         if (v && v.length === 4) {
          var f = this.toCamelCase(v[1]);
          o[f] = Object.assign(
           {},
           v[3]
            ? p({}, this.toCamelCase(v[3]), c)
            : { enabled: c === '' || c === 'true' },
           o[f],
          );
         }
        }
        Object.keys(o).forEach(function (m) {
         var g = o[m],
          F = g.enabled,
          M = g.class;
         if (F && M) {
          delete g.enabled, delete g.clazz;
          var N = e.createPluginInstance(M, g);
          e.core.registerPlugin(m, N);
         }
        });
       },
      },
      {
       key: 'isEmptyOption',
       value: function (e) {
        var n = e.validators;
        return Object.keys(n).length === 0 && n.constructor === Object;
       },
      },
      {
       key: 'parseElement',
       value: function (e) {
        for (
         var n = new RegExp(
           '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
          ),
          i = e.attributes.length,
          l = {},
          o = e.getAttribute('type'),
          d = 0;
         d < i;
         d++
        ) {
         var u = e.attributes[d].name,
          c = e.attributes[d].value;
         if (this.opts.html5Input)
          switch (!0) {
           case u === 'minlength':
            l.stringLength = Object.assign(
             {},
             { enabled: !0, min: parseInt(c, 10) },
             l.stringLength,
            );
            break;
           case u === 'maxlength':
            l.stringLength = Object.assign(
             {},
             { enabled: !0, max: parseInt(c, 10) },
             l.stringLength,
            );
            break;
           case u === 'pattern':
            l.regexp = Object.assign({}, { enabled: !0, regexp: c }, l.regexp);
            break;
           case u === 'required':
            l.notEmpty = Object.assign({}, { enabled: !0 }, l.notEmpty);
            break;
           case u === 'type' && c === 'color':
            l.color = Object.assign({}, { enabled: !0, type: 'hex' }, l.color);
            break;
           case u === 'type' && c === 'email':
            l.emailAddress = Object.assign({}, { enabled: !0 }, l.emailAddress);
            break;
           case u === 'type' && c === 'url':
            l.uri = Object.assign({}, { enabled: !0 }, l.uri);
            break;
           case u === 'type' && c === 'range':
            l.between = Object.assign(
             {},
             {
              enabled: !0,
              max: parseFloat(e.getAttribute('max')),
              min: parseFloat(e.getAttribute('min')),
             },
             l.between,
            );
            break;
           case u === 'min' && o !== 'date' && o !== 'range':
            l.greaterThan = Object.assign(
             {},
             { enabled: !0, min: parseFloat(c) },
             l.greaterThan,
            );
            break;
           case u === 'max' && o !== 'date' && o !== 'range':
            l.lessThan = Object.assign(
             {},
             { enabled: !0, max: parseFloat(c) },
             l.lessThan,
            );
            break;
          }
         var v = n.exec(u);
         if (v && v.length === 4) {
          var f = this.toCamelCase(v[1]);
          l[f] = Object.assign(
           {},
           v[3]
            ? p({}, this.toCamelCase(v[3]), this.normalizeValue(c))
            : { enabled: c === '' || c === 'true' },
           l[f],
          );
         }
        }
        return { validators: l };
       },
      },
      {
       key: 'normalizeValue',
       value: function (e) {
        return e === 'true' ? !0 : e === 'false' ? !1 : e;
       },
      },
      {
       key: 'toUpperCase',
       value: function (e) {
        return e.charAt(1).toUpperCase();
       },
      },
      {
       key: 'toCamelCase',
       value: function (e) {
        return e.replace(/-./g, this.toUpperCase);
       },
      },
     ]),
     a
    );
   })(C),
   Ka = (function (s) {
    V(a, s);
    var t = O(a);
    function a() {
     var r;
     return (
      k(this, a),
      (r = t.call(this, {})),
      (r.onValidHandler = r.onFormValid.bind(h(r))),
      r
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        var e = this.core.getFormElement();
        if (e.querySelectorAll('[type="submit"][name="submit"]').length)
         throw new Error(
          'Do not use `submit` for the name attribute of submit button',
         );
        this.core.on('core.form.valid', this.onValidHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.off('core.form.valid', this.onValidHandler);
       },
      },
      {
       key: 'onFormValid',
       value: function () {
        var e = this.core.getFormElement();
        e instanceof HTMLFormElement && e.submit();
       },
      },
     ]),
     a
    );
   })(C),
   ja = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.opts = r || {}),
      (e.triggerExecutedHandler = e.onTriggerExecuted.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
       },
      },
      {
       key: 'onTriggerExecuted',
       value: function (e) {
        if (this.opts[e.field]) {
         var n = this.opts[e.field].split(' '),
          i = J(n),
          l;
         try {
          for (i.s(); !(l = i.n()).done; ) {
           var o = l.value,
            d = o.trim();
           this.opts[d] && this.core.revalidateField(d);
          }
         } catch (u) {
          i.e(u);
         } finally {
          i.f();
         }
        }
       },
      },
     ]),
     a
    );
   })(C),
   Ya = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.opts = Object.assign({}, { excluded: a.defaultIgnore }, r)),
      (e.ignoreValidationFilter = e.ignoreValidation.bind(h(e))),
      e
     );
    }
    return (
     y(
      a,
      [
       {
        key: 'install',
        value: function () {
         this.core.registerFilter(
          'element-ignored',
          this.ignoreValidationFilter,
         );
        },
       },
       {
        key: 'uninstall',
        value: function () {
         this.core.deregisterFilter(
          'element-ignored',
          this.ignoreValidationFilter,
         );
        },
       },
       {
        key: 'ignoreValidation',
        value: function (e, n, i) {
         return this.opts.excluded.apply(this, [e, n, i]);
        },
       },
      ],
      [
       {
        key: 'defaultIgnore',
        value: function (e, n, i) {
         var l = !!(
           n.offsetWidth ||
           n.offsetHeight ||
           n.getClientRects().length
          ),
          o = n.getAttribute('disabled');
         return (
          o === '' ||
          o === 'disabled' ||
          n.getAttribute('type') === 'hidden' ||
          !l
         );
        },
       },
      ],
     ),
     a
    );
   })(C),
   za = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.statuses = new Map()),
      (e.opts = Object.assign({}, { onStatusChanged: function () {} }, r)),
      (e.elementValidatingHandler = e.onElementValidating.bind(h(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(h(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(h(e))),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(h(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.element.validating', this.elementValidatingHandler)
         .on('core.element.validated', this.elementValidatedHandler)
         .on('core.element.notvalidated', this.elementNotValidatedHandler)
         .on('core.element.ignored', this.elementIgnoredHandler)
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.statuses.clear(),
         this.core
          .off('core.element.validating', this.elementValidatingHandler)
          .off('core.element.validated', this.elementValidatedHandler)
          .off('core.element.notvalidated', this.elementNotValidatedHandler)
          .off('core.element.ignored', this.elementIgnoredHandler)
          .off('core.field.added', this.fieldAddedHandler)
          .off('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'areFieldsValid',
       value: function () {
        return Array.from(this.statuses.values()).every(function (e) {
         return e === 'Valid' || e === 'NotValidated' || e === 'Ignored';
        });
       },
      },
      {
       key: 'getStatuses',
       value: function () {
        return this.statuses;
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        this.statuses.set(e.field, 'NotValidated');
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        this.statuses.has(e.field) && this.statuses.delete(e.field),
         this.opts.onStatusChanged(this.areFieldsValid());
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        this.statuses.set(e.field, 'Validating'), this.opts.onStatusChanged(!1);
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid'),
         e.valid
          ? this.opts.onStatusChanged(this.areFieldsValid())
          : this.opts.onStatusChanged(!1);
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (e) {
        this.statuses.set(e.field, 'NotValidated'),
         this.opts.onStatusChanged(!1);
       },
      },
      {
       key: 'onElementIgnored',
       value: function (e) {
        this.statuses.set(e.field, 'Ignored'),
         this.opts.onStatusChanged(this.areFieldsValid());
       },
      },
     ]),
     a
    );
   })(C);
  function Ja(s, t) {
   t.split(' ').forEach(function (a) {
    s.classList
     ? s.classList.add(a)
     : ' '.concat(s.className, ' ').indexOf(' '.concat(a, ' ')) &&
       (s.className += ' '.concat(a));
   });
  }
  function Xa(s, t) {
   t.split(' ').forEach(function (a) {
    s.classList
     ? s.classList.remove(a)
     : (s.className = s.className.replace(a, ''));
   });
  }
  function E(s, t) {
   var a = [],
    r = [];
   Object.keys(t).forEach(function (e) {
    e && (t[e] ? a.push(e) : r.push(e));
   }),
    r.forEach(function (e) {
     return Xa(s, e);
    }),
    a.forEach(function (e) {
     return Ja(s, e);
    });
  }
  function Wa(s, t) {
   var a =
    s.matches ||
    s.webkitMatchesSelector ||
    s.mozMatchesSelector ||
    s.msMatchesSelector;
   if (a) return a.call(s, t);
   var r = [].slice.call(s.parentElement.querySelectorAll(t));
   return r.indexOf(s) >= 0;
  }
  function Q(s, t) {
   for (var a = s; a && !Wa(a, t); ) a = a.parentElement;
   return a;
  }
  var q = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.useDefaultContainer = !1),
      (e.messages = new Map()),
      (e.defaultContainer = document.createElement('div')),
      (e.useDefaultContainer = !r || !r.container),
      (e.opts = Object.assign(
       {},
       {
        container: function (i, l) {
         return e.defaultContainer;
        },
       },
       r,
      )),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(h(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(h(e))),
      (e.validatorValidatedHandler = e.onValidatorValidated.bind(h(e))),
      (e.validatorNotValidatedHandler = e.onValidatorNotValidated.bind(h(e))),
      e
     );
    }
    return (
     y(
      a,
      [
       {
        key: 'install',
        value: function () {
         this.useDefaultContainer &&
          this.core.getFormElement().appendChild(this.defaultContainer),
          this.core
           .on('core.element.ignored', this.elementIgnoredHandler)
           .on('core.field.added', this.fieldAddedHandler)
           .on('core.field.removed', this.fieldRemovedHandler)
           .on('core.validator.validated', this.validatorValidatedHandler)
           .on(
            'core.validator.notvalidated',
            this.validatorNotValidatedHandler,
           );
        },
       },
       {
        key: 'uninstall',
        value: function () {
         this.useDefaultContainer &&
          this.core.getFormElement().removeChild(this.defaultContainer),
          this.messages.forEach(function (e) {
           return e.parentNode.removeChild(e);
          }),
          this.messages.clear(),
          this.core
           .off('core.element.ignored', this.elementIgnoredHandler)
           .off('core.field.added', this.fieldAddedHandler)
           .off('core.field.removed', this.fieldRemovedHandler)
           .off('core.validator.validated', this.validatorValidatedHandler)
           .off(
            'core.validator.notvalidated',
            this.validatorNotValidatedHandler,
           );
        },
       },
       {
        key: 'onFieldAdded',
        value: function (e) {
         var n = this,
          i = e.elements;
         i &&
          (i.forEach(function (l) {
           var o = n.messages.get(l);
           o && (o.parentNode.removeChild(o), n.messages.delete(l));
          }),
          this.prepareFieldContainer(e.field, i));
        },
       },
       {
        key: 'onFieldRemoved',
        value: function (e) {
         var n = this;
         if (!(!e.elements.length || !e.field)) {
          var i = e.elements[0].getAttribute('type'),
           l = i === 'radio' || i === 'checkbox' ? [e.elements[0]] : e.elements;
          l.forEach(function (o) {
           if (n.messages.has(o)) {
            var d = n.messages.get(o);
            d.parentNode.removeChild(d), n.messages.delete(o);
           }
          });
         }
        },
       },
       {
        key: 'prepareFieldContainer',
        value: function (e, n) {
         var i = this;
         if (n.length) {
          var l = n[0].getAttribute('type');
          l === 'radio' || l === 'checkbox'
           ? this.prepareElementContainer(e, n[0], n)
           : n.forEach(function (o) {
              return i.prepareElementContainer(e, o, n);
             });
         }
        },
       },
       {
        key: 'prepareElementContainer',
        value: function (e, n, i) {
         var l;
         if (typeof this.opts.container == 'string') {
          var o =
           this.opts.container.charAt(0) === '#'
            ? '[id="'.concat(this.opts.container.substring(1), '"]')
            : this.opts.container;
          l = this.core.getFormElement().querySelector(o);
         } else l = this.opts.container(e, n);
         var d = document.createElement('div');
         l.appendChild(d),
          E(d, { 'fv-plugins-message-container': !0 }),
          this.core.emit('plugins.message.placed', {
           element: n,
           elements: i,
           field: e,
           messageElement: d,
          }),
          this.messages.set(n, d);
        },
       },
       {
        key: 'getMessage',
        value: function (e) {
         return typeof e.message == 'string'
          ? e.message
          : e.message[this.core.getLocale()];
        },
       },
       {
        key: 'onValidatorValidated',
        value: function (e) {
         var n = e.elements,
          i = e.element.getAttribute('type'),
          l =
           (i === 'radio' || i === 'checkbox') && n.length > 0
            ? n[0]
            : e.element;
         if (this.messages.has(l)) {
          var o = this.messages.get(l),
           d = o.querySelector(
            '[data-field="'
             .concat(e.field, '"][data-validator="')
             .concat(e.validator, '"]'),
           );
          if (!d && !e.result.valid) {
           var u = document.createElement('div');
           (u.innerHTML = this.getMessage(e.result)),
            u.setAttribute('data-field', e.field),
            u.setAttribute('data-validator', e.validator),
            this.opts.clazz && E(u, p({}, this.opts.clazz, !0)),
            o.appendChild(u),
            this.core.emit('plugins.message.displayed', {
             element: e.element,
             field: e.field,
             message: e.result.message,
             messageElement: u,
             meta: e.result.meta,
             validator: e.validator,
            });
          } else
           d && !e.result.valid
            ? ((d.innerHTML = this.getMessage(e.result)),
              this.core.emit('plugins.message.displayed', {
               element: e.element,
               field: e.field,
               message: e.result.message,
               messageElement: d,
               meta: e.result.meta,
               validator: e.validator,
              }))
            : d && e.result.valid && o.removeChild(d);
         }
        },
       },
       {
        key: 'onValidatorNotValidated',
        value: function (e) {
         var n = e.elements,
          i = e.element.getAttribute('type'),
          l = i === 'radio' || i === 'checkbox' ? n[0] : e.element;
         if (this.messages.has(l)) {
          var o = this.messages.get(l),
           d = o.querySelector(
            '[data-field="'
             .concat(e.field, '"][data-validator="')
             .concat(e.validator, '"]'),
           );
          d && o.removeChild(d);
         }
        },
       },
       {
        key: 'onElementIgnored',
        value: function (e) {
         var n = e.elements,
          i = e.element.getAttribute('type'),
          l = i === 'radio' || i === 'checkbox' ? n[0] : e.element;
         if (this.messages.has(l)) {
          var o = this.messages.get(l),
           d = [].slice.call(
            o.querySelectorAll('[data-field="'.concat(e.field, '"]')),
           );
          d.forEach(function (u) {
           o.removeChild(u);
          });
         }
        },
       },
      ],
      [
       {
        key: 'getClosestContainer',
        value: function (e, n, i) {
         for (
          var l = e;
          l && !(l === n || ((l = l.parentElement), i.test(l.className)));

         );
         return l;
        },
       },
      ],
     ),
     a
    );
   })(C),
   Qa = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.results = new Map()),
      (e.containers = new Map()),
      (e.MESSAGE_PLUGIN = '___frameworkMessage'),
      (e.opts = Object.assign(
       {},
       {
        defaultMessageContainer: !0,
        eleInvalidClass: '',
        eleValidClass: '',
        rowClasses: '',
        rowValidatingClass: '',
       },
       r,
      )),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(h(e))),
      (e.elementValidatingHandler = e.onElementValidating.bind(h(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(h(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(h(e))),
      (e.iconPlacedHandler = e.onIconPlaced.bind(h(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(h(e))),
      (e.messagePlacedHandler = e.onMessagePlaced.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        var e,
         n = this;
        E(
         this.core.getFormElement(),
         ((e = {}),
         p(e, this.opts.formClass, !0),
         p(e, 'fv-plugins-framework', !0),
         e),
        ),
         this.core
          .on('core.element.ignored', this.elementIgnoredHandler)
          .on('core.element.validating', this.elementValidatingHandler)
          .on('core.element.validated', this.elementValidatedHandler)
          .on('core.element.notvalidated', this.elementNotValidatedHandler)
          .on('plugins.icon.placed', this.iconPlacedHandler)
          .on('core.field.added', this.fieldAddedHandler)
          .on('core.field.removed', this.fieldRemovedHandler),
         this.opts.defaultMessageContainer &&
          (this.core.registerPlugin(
           this.MESSAGE_PLUGIN,
           new q({
            clazz: this.opts.messageClass,
            container: function (l, o) {
             var d =
               typeof n.opts.rowSelector == 'string'
                ? n.opts.rowSelector
                : n.opts.rowSelector(l, o),
              u = Q(o, d);
             return q.getClosestContainer(o, u, n.opts.rowPattern);
            },
           }),
          ),
          this.core.on('plugins.message.placed', this.messagePlacedHandler));
       },
      },
      {
       key: 'uninstall',
       value: function () {
        var e;
        this.results.clear(),
         this.containers.clear(),
         E(
          this.core.getFormElement(),
          ((e = {}),
          p(e, this.opts.formClass, !1),
          p(e, 'fv-plugins-framework', !1),
          e),
         ),
         this.core
          .off('core.element.ignored', this.elementIgnoredHandler)
          .off('core.element.validating', this.elementValidatingHandler)
          .off('core.element.validated', this.elementValidatedHandler)
          .off('core.element.notvalidated', this.elementNotValidatedHandler)
          .off('plugins.icon.placed', this.iconPlacedHandler)
          .off('core.field.added', this.fieldAddedHandler)
          .off('core.field.removed', this.fieldRemovedHandler),
         this.opts.defaultMessageContainer &&
          (this.core.deregisterPlugin(this.MESSAGE_PLUGIN),
          this.core.off('plugins.message.placed', this.messagePlacedHandler));
       },
      },
      { key: 'onIconPlaced', value: function (e) {} },
      { key: 'onMessagePlaced', value: function (e) {} },
      {
       key: 'onFieldAdded',
       value: function (e) {
        var n = this,
         i = e.elements;
        i &&
         (i.forEach(function (l) {
          var o = n.containers.get(l);
          if (o) {
           var d;
           E(
            o,
            ((d = {}),
            p(d, n.opts.rowInvalidClass, !1),
            p(d, n.opts.rowValidatingClass, !1),
            p(d, n.opts.rowValidClass, !1),
            p(d, 'fv-plugins-icon-container', !1),
            d),
           ),
            n.containers.delete(l);
          }
         }),
         this.prepareFieldContainer(e.field, i));
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        var n = this;
        e.elements.forEach(function (i) {
         var l = n.containers.get(i);
         if (l) {
          var o;
          E(
           l,
           ((o = {}),
           p(o, n.opts.rowInvalidClass, !1),
           p(o, n.opts.rowValidatingClass, !1),
           p(o, n.opts.rowValidClass, !1),
           o),
          );
         }
        });
       },
      },
      {
       key: 'prepareFieldContainer',
       value: function (e, n) {
        var i = this;
        if (n.length) {
         var l = n[0].getAttribute('type');
         l === 'radio' || l === 'checkbox'
          ? this.prepareElementContainer(e, n[0])
          : n.forEach(function (o) {
             return i.prepareElementContainer(e, o);
            });
        }
       },
      },
      {
       key: 'prepareElementContainer',
       value: function (e, n) {
        var i =
          typeof this.opts.rowSelector == 'string'
           ? this.opts.rowSelector
           : this.opts.rowSelector(e, n),
         l = Q(n, i);
        if (l !== n) {
         var o;
         E(
          l,
          ((o = {}),
          p(o, this.opts.rowClasses, !0),
          p(o, 'fv-plugins-icon-container', !0),
          o),
         ),
          this.containers.set(n, l);
        }
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        var n = e.elements,
         i = e.element.getAttribute('type'),
         l = i === 'radio' || i === 'checkbox' ? n[0] : e.element,
         o = this.containers.get(l);
        if (o) {
         var d;
         E(
          o,
          ((d = {}),
          p(d, this.opts.rowInvalidClass, !1),
          p(d, this.opts.rowValidatingClass, !0),
          p(d, this.opts.rowValidClass, !1),
          d),
         );
        }
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (e) {
        this.removeClasses(e.element, e.elements);
       },
      },
      {
       key: 'onElementIgnored',
       value: function (e) {
        this.removeClasses(e.element, e.elements);
       },
      },
      {
       key: 'removeClasses',
       value: function (e, n) {
        var i = this,
         l = e.getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? n[0] : e;
        n.forEach(function (c) {
         var v;
         E(
          c,
          ((v = {}),
          p(v, i.opts.eleValidClass, !1),
          p(v, i.opts.eleInvalidClass, !1),
          v),
         );
        });
        var d = this.containers.get(o);
        if (d) {
         var u;
         E(
          d,
          ((u = {}),
          p(u, this.opts.rowInvalidClass, !1),
          p(u, this.opts.rowValidatingClass, !1),
          p(u, this.opts.rowValidClass, !1),
          u),
         );
        }
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        var n = this,
         i = e.elements,
         l = e.element.getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? i[0] : e.element;
        i.forEach(function (f) {
         var m;
         E(
          f,
          ((m = {}),
          p(m, n.opts.eleValidClass, e.valid),
          p(m, n.opts.eleInvalidClass, !e.valid),
          m),
         );
        });
        var d = this.containers.get(o);
        if (d)
         if (e.valid) {
          this.results.delete(o);
          var c = !0;
          if (
           (this.containers.forEach(function (f, m) {
            f === d && n.results.get(m) === !1 && (c = !1);
           }),
           c)
          ) {
           var v;
           E(
            d,
            ((v = {}),
            p(v, this.opts.rowInvalidClass, !1),
            p(v, this.opts.rowValidatingClass, !1),
            p(v, this.opts.rowValidClass, !0),
            v),
           );
          }
         } else {
          var u;
          this.results.set(o, !1),
           E(
            d,
            ((u = {}),
            p(u, this.opts.rowInvalidClass, !0),
            p(u, this.opts.rowValidatingClass, !1),
            p(u, this.opts.rowValidClass, !1),
            u),
           );
         }
       },
      },
     ]),
     a
    );
   })(C),
   qa = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.icons = new Map()),
      (e.opts = Object.assign(
       {},
       {
        invalid: 'fv-plugins-icon--invalid',
        onPlaced: function () {},
        onSet: function () {},
        valid: 'fv-plugins-icon--valid',
        validating: 'fv-plugins-icon--validating',
       },
       r,
      )),
      (e.elementValidatingHandler = e.onElementValidating.bind(h(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(h(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(h(e))),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(h(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.element.validating', this.elementValidatingHandler)
         .on('core.element.validated', this.elementValidatedHandler)
         .on('core.element.notvalidated', this.elementNotValidatedHandler)
         .on('core.element.ignored', this.elementIgnoredHandler)
         .on('core.field.added', this.fieldAddedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.icons.forEach(function (e) {
         return e.parentNode.removeChild(e);
        }),
         this.icons.clear(),
         this.core
          .off('core.element.validating', this.elementValidatingHandler)
          .off('core.element.validated', this.elementValidatedHandler)
          .off('core.element.notvalidated', this.elementNotValidatedHandler)
          .off('core.element.ignored', this.elementIgnoredHandler)
          .off('core.field.added', this.fieldAddedHandler);
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        var n = this,
         i = e.elements;
        i &&
         (i.forEach(function (l) {
          var o = n.icons.get(l);
          o && (o.parentNode.removeChild(o), n.icons.delete(l));
         }),
         this.prepareFieldIcon(e.field, i));
       },
      },
      {
       key: 'prepareFieldIcon',
       value: function (e, n) {
        var i = this;
        if (n.length) {
         var l = n[0].getAttribute('type');
         l === 'radio' || l === 'checkbox'
          ? this.prepareElementIcon(e, n[0])
          : n.forEach(function (o) {
             return i.prepareElementIcon(e, o);
            });
        }
       },
      },
      {
       key: 'prepareElementIcon',
       value: function (e, n) {
        var i = document.createElement('i');
        i.setAttribute('data-field', e),
         n.parentNode.insertBefore(i, n.nextSibling),
         E(i, { 'fv-plugins-icon': !0 });
        var l = {
         classes: {
          invalid: this.opts.invalid,
          valid: this.opts.valid,
          validating: this.opts.validating,
         },
         element: n,
         field: e,
         iconElement: i,
        };
        this.core.emit('plugins.icon.placed', l),
         this.opts.onPlaced(l),
         this.icons.set(n, i);
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        var n,
         i = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((n = {}),
          p(n, this.opts.invalid, !1),
          p(n, this.opts.valid, !1),
          p(n, this.opts.validating, !0),
          n),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: i,
          status: 'Validating',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        var n,
         i = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((n = {}),
          p(n, this.opts.invalid, !e.valid),
          p(n, this.opts.valid, e.valid),
          p(n, this.opts.validating, !1),
          n),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: i,
          status: e.valid ? 'Valid' : 'Invalid',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (e) {
        var n,
         i = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((n = {}),
          p(n, this.opts.invalid, !1),
          p(n, this.opts.valid, !1),
          p(n, this.opts.validating, !1),
          n),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: i,
          status: 'NotValidated',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementIgnored',
       value: function (e) {
        var n,
         i = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((n = {}),
          p(n, this.opts.invalid, !1),
          p(n, this.opts.valid, !1),
          p(n, this.opts.validating, !1),
          n),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: i,
          status: 'Ignored',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'setClasses',
       value: function (e, n, i, l) {
        var o = n.getAttribute('type'),
         d = o === 'radio' || o === 'checkbox' ? i[0] : n;
        if (this.icons.has(d)) {
         var u = this.icons.get(d);
         return E(u, l), u;
        } else return null;
       },
      },
     ]),
     a
    );
   })(C),
   _a = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.invalidFields = new Map()),
      (e.opts = Object.assign({}, { enabled: !0 }, r)),
      (e.validatorHandler = e.onValidatorValidated.bind(h(e))),
      (e.shouldValidateFilter = e.shouldValidate.bind(h(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(h(e))),
      (e.elementValidatingHandler = e.onElementValidating.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.validator.validated', this.validatorHandler)
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.element.notvalidated', this.elementNotValidatedHandler)
         .on('core.element.validating', this.elementValidatingHandler)
         .registerFilter('field-should-validate', this.shouldValidateFilter);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.invalidFields.clear(),
         this.core
          .off('core.validator.validated', this.validatorHandler)
          .off('core.field.added', this.fieldAddedHandler)
          .off('core.element.notvalidated', this.elementNotValidatedHandler)
          .off('core.element.validating', this.elementValidatingHandler)
          .deregisterFilter('field-should-validate', this.shouldValidateFilter);
       },
      },
      {
       key: 'shouldValidate',
       value: function (e, n, i, l) {
        var o =
         (this.opts.enabled === !0 || this.opts.enabled[e] === !0) &&
         this.invalidFields.has(n) &&
         !!this.invalidFields.get(n).length &&
         this.invalidFields.get(n).indexOf(l) === -1;
        return !o;
       },
      },
      {
       key: 'onValidatorValidated',
       value: function (e) {
        var n = this.invalidFields.has(e.element)
          ? this.invalidFields.get(e.element)
          : [],
         i = n.indexOf(e.validator);
        e.result.valid && i >= 0
         ? n.splice(i, 1)
         : !e.result.valid && i === -1 && n.push(e.validator),
         this.invalidFields.set(e.element, n);
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        e.elements && this.clearInvalidFields(e.elements);
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (e) {
        this.clearInvalidFields(e.elements);
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        this.clearInvalidFields(e.elements);
       },
      },
      {
       key: 'clearInvalidFields',
       value: function (e) {
        var n = this;
        e.forEach(function (i) {
         return n.invalidFields.delete(i);
        });
       },
      },
     ]),
     a
    );
   })(C),
   er = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.isFormValid = !1),
      (e.opts = Object.assign(
       {},
       {
        aspNetButton: !1,
        buttons: function (i) {
         return [].slice.call(
          i.querySelectorAll('[type="submit"]:not([formnovalidate])'),
         );
        },
       },
       r,
      )),
      (e.submitHandler = e.handleSubmitEvent.bind(h(e))),
      (e.buttonClickHandler = e.handleClickEvent.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        var e = this;
        if (this.core.getFormElement() instanceof HTMLFormElement) {
         var n = this.core.getFormElement();
         (this.submitButtons = this.opts.buttons(n)),
          n.setAttribute('novalidate', 'novalidate'),
          n.addEventListener('submit', this.submitHandler),
          (this.hiddenClickedEle = document.createElement('input')),
          this.hiddenClickedEle.setAttribute('type', 'hidden'),
          n.appendChild(this.hiddenClickedEle),
          this.submitButtons.forEach(function (i) {
           i.addEventListener('click', e.buttonClickHandler);
          });
        }
       },
      },
      {
       key: 'uninstall',
       value: function () {
        var e = this,
         n = this.core.getFormElement();
        n instanceof HTMLFormElement &&
         n.removeEventListener('submit', this.submitHandler),
         this.submitButtons.forEach(function (i) {
          i.removeEventListener('click', e.buttonClickHandler);
         }),
         this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
       },
      },
      {
       key: 'handleSubmitEvent',
       value: function (e) {
        this.validateForm(e);
       },
      },
      {
       key: 'handleClickEvent',
       value: function (e) {
        var n = e.currentTarget;
        if (
         n instanceof HTMLElement &&
         !(this.opts.aspNetButton && this.isFormValid === !0)
        ) {
         var i = this.core.getFormElement();
         i.removeEventListener('submit', this.submitHandler),
          (this.clickedButton = e.target);
         var l = this.clickedButton.getAttribute('name'),
          o = this.clickedButton.getAttribute('value');
         l &&
          o &&
          (this.hiddenClickedEle.setAttribute('name', l),
          this.hiddenClickedEle.setAttribute('value', o)),
          this.validateForm(e);
        }
       },
      },
      {
       key: 'validateForm',
       value: function (e) {
        var n = this;
        e.preventDefault(),
         this.core.validate().then(function (i) {
          i === 'Valid' &&
           n.opts.aspNetButton &&
           !n.isFormValid &&
           n.clickedButton &&
           ((n.isFormValid = !0),
           n.clickedButton.removeEventListener('click', n.buttonClickHandler),
           n.clickedButton.click());
         });
       },
      },
     ]),
     a
    );
   })(C),
   tr = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     return (
      k(this, a),
      (e = t.call(this, r)),
      (e.messages = new Map()),
      (e.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, r)),
      (e.iconPlacedHandler = e.onIconPlaced.bind(h(e))),
      (e.validatorValidatedHandler = e.onValidatorValidated.bind(h(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(h(e))),
      (e.documentClickHandler = e.onDocumentClicked.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        (this.tip = document.createElement('div')),
         E(
          this.tip,
          p(
           { 'fv-plugins-tooltip': !0 },
           'fv-plugins-tooltip--'.concat(this.opts.placement),
           !0,
          ),
         ),
         document.body.appendChild(this.tip),
         this.core
          .on('plugins.icon.placed', this.iconPlacedHandler)
          .on('core.validator.validated', this.validatorValidatedHandler)
          .on('core.element.validated', this.elementValidatedHandler),
         this.opts.trigger === 'click' &&
          document.addEventListener('click', this.documentClickHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.messages.clear(),
         document.body.removeChild(this.tip),
         this.core
          .off('plugins.icon.placed', this.iconPlacedHandler)
          .off('core.validator.validated', this.validatorValidatedHandler)
          .off('core.element.validated', this.elementValidatedHandler),
         this.opts.trigger === 'click' &&
          document.removeEventListener('click', this.documentClickHandler);
       },
      },
      {
       key: 'onIconPlaced',
       value: function (e) {
        var n = this;
        switch (
         (E(e.iconElement, { 'fv-plugins-tooltip-icon': !0 }),
         this.opts.trigger)
        ) {
         case 'hover':
          e.iconElement.addEventListener('mouseenter', function (i) {
           return n.show(e.element, i);
          }),
           e.iconElement.addEventListener('mouseleave', function (i) {
            return n.hide();
           });
          break;
         case 'click':
         default:
          e.iconElement.addEventListener('click', function (i) {
           return n.show(e.element, i);
          });
          break;
        }
       },
      },
      {
       key: 'onValidatorValidated',
       value: function (e) {
        if (!e.result.valid) {
         var n = e.elements,
          i = e.element.getAttribute('type'),
          l = i === 'radio' || i === 'checkbox' ? n[0] : e.element,
          o =
           typeof e.result.message == 'string'
            ? e.result.message
            : e.result.message[this.core.getLocale()];
         this.messages.set(l, o);
        }
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        if (e.valid) {
         var n = e.elements,
          i = e.element.getAttribute('type'),
          l = i === 'radio' || i === 'checkbox' ? n[0] : e.element;
         this.messages.delete(l);
        }
       },
      },
      {
       key: 'onDocumentClicked',
       value: function (e) {
        this.hide();
       },
      },
      {
       key: 'show',
       value: function (e, n) {
        if ((n.preventDefault(), n.stopPropagation(), !!this.messages.has(e))) {
         E(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
          (this.tip.innerHTML =
           '<div class="fv-plugins-tooltip__content">'.concat(
            this.messages.get(e),
            '</div>',
           ));
         var i = n.target,
          l = i.getBoundingClientRect(),
          o = this.tip.getBoundingClientRect(),
          d = o.height,
          u = o.width,
          c = 0,
          v = 0;
         switch (this.opts.placement) {
          case 'bottom':
           (c = l.top + l.height), (v = l.left + l.width / 2 - u / 2);
           break;
          case 'bottom-left':
           (c = l.top + l.height), (v = l.left);
           break;
          case 'bottom-right':
           (c = l.top + l.height), (v = l.left + l.width - u);
           break;
          case 'left':
           (c = l.top + l.height / 2 - d / 2), (v = l.left - u);
           break;
          case 'right':
           (c = l.top + l.height / 2 - d / 2), (v = l.left + l.width);
           break;
          case 'top-left':
           (c = l.top - d), (v = l.left);
           break;
          case 'top-right':
           (c = l.top - d), (v = l.left + l.width - u);
           break;
          case 'top':
          default:
           (c = l.top - d), (v = l.left + l.width / 2 - u / 2);
           break;
         }
         var f =
           window.pageYOffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop ||
           0,
          m =
           window.pageXOffset ||
           document.documentElement.scrollLeft ||
           document.body.scrollLeft ||
           0;
         (c = c + f),
          (v = v + m),
          this.tip.setAttribute(
           'style',
           'top: '.concat(c, 'px; left: ').concat(v, 'px'),
          );
        }
       },
      },
      {
       key: 'hide',
       value: function () {
        E(this.tip, { 'fv-plugins-tooltip--hide': !0 });
       },
      },
     ]),
     a
    );
   })(C),
   ar = (function (s) {
    V(a, s);
    var t = O(a);
    function a(r) {
     var e;
     k(this, a),
      (e = t.call(this, r)),
      (e.handlers = []),
      (e.timers = new Map());
     var n = document.createElement('div');
     return (
      (e.defaultEvent = 'oninput' in n ? 'input' : 'keyup'),
      (e.opts = Object.assign(
       {},
       { delay: 0, event: e.defaultEvent, threshold: 0 },
       r,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(h(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(h(e))),
      e
     );
    }
    return (
     y(a, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.field.added', this.fieldAddedHandler)
         .on('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.handlers.forEach(function (e) {
         return e.element.removeEventListener(e.event, e.handler);
        }),
         (this.handlers = []),
         this.timers.forEach(function (e) {
          return window.clearTimeout(e);
         }),
         this.timers.clear(),
         this.core
          .off('core.field.added', this.fieldAddedHandler)
          .off('core.field.removed', this.fieldRemovedHandler);
       },
      },
      {
       key: 'prepareHandler',
       value: function (e, n) {
        var i = this;
        n.forEach(function (l) {
         var o = [];
         if (i.opts.event && i.opts.event[e] === !1) o = [];
         else if (
          i.opts.event &&
          i.opts.event[e] &&
          typeof i.opts.event[e] != 'function'
         )
          o = i.opts.event[e].split(' ');
         else if (
          typeof i.opts.event == 'string' &&
          i.opts.event !== i.defaultEvent
         )
          o = i.opts.event.split(' ');
         else {
          var d = l.getAttribute('type'),
           u = l.tagName.toLowerCase(),
           c =
            d === 'radio' || d === 'checkbox' || d === 'file' || u === 'select'
             ? 'change'
             : i.ieVersion >= 10 && l.getAttribute('placeholder')
               ? 'keyup'
               : i.defaultEvent;
          o = [c];
         }
         o.forEach(function (v) {
          var f = function (g) {
           return i.handleEvent(g, e, l);
          };
          i.handlers.push({ element: l, event: v, field: e, handler: f }),
           l.addEventListener(v, f);
         });
        });
       },
      },
      {
       key: 'handleEvent',
       value: function (e, n, i) {
        var l = this;
        if (
         this.exceedThreshold(n, i) &&
         this.core.executeFilter('plugins-trigger-should-validate', !0, [n, i])
        ) {
         var o = function () {
           return l.core.validateElement(n, i).then(function (v) {
            l.core.emit('plugins.trigger.executed', {
             element: i,
             event: e,
             field: n,
            });
           });
          },
          d = this.opts.delay[n] || this.opts.delay;
         if (d === 0) o();
         else {
          var u = this.timers.get(i);
          u && window.clearTimeout(u),
           this.timers.set(i, window.setTimeout(o, d * 1e3));
         }
        }
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        this.handlers
         .filter(function (n) {
          return n.field === e.field;
         })
         .forEach(function (n) {
          return n.element.removeEventListener(n.event, n.handler);
         }),
         this.prepareHandler(e.field, e.elements);
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        this.handlers
         .filter(function (n) {
          return n.field === e.field && e.elements.indexOf(n.element) >= 0;
         })
         .forEach(function (n) {
          return n.element.removeEventListener(n.event, n.handler);
         });
       },
      },
      {
       key: 'exceedThreshold',
       value: function (e, n) {
        var i =
         this.opts.threshold[e] === 0 || this.opts.threshold === 0
          ? !1
          : this.opts.threshold[e] || this.opts.threshold;
        if (!i) return !0;
        var l = n.getAttribute('type');
        if (
         [
          'button',
          'checkbox',
          'file',
          'hidden',
          'image',
          'radio',
          'reset',
          'submit',
         ].indexOf(l) !== -1
        )
         return !0;
        var o = this.core.getElementValue(e, n);
        return o.length >= i;
       },
      },
     ]),
     a
    );
   })(C),
   rr = {
    Alias: Ga,
    Aria: Pa,
    Declarative: Ua,
    DefaultSubmit: Ka,
    Dependency: ja,
    Excluded: Ya,
    FieldStatus: za,
    Framework: Qa,
    Icon: qa,
    Message: q,
    Sequence: _a,
    SubmitButton: er,
    Tooltip: tr,
    Trigger: ar,
   };
  function nr(s, t) {
   return s.classList
    ? s.classList.contains(t)
    : new RegExp('(^| )'.concat(t, '( |$)'), 'gi').test(s.className);
  }
  var ir = {
    call: X,
    classSet: E,
    closest: Q,
    fetch: le,
    format: b,
    hasClass: nr,
    isValidDate: I,
   },
   sr = {};
  ($.Plugin = C),
   ($.algorithms = fe),
   ($.filters = Da),
   ($.formValidation = Ba),
   ($.locales = sr),
   ($.plugins = rr),
   ($.utils = ir),
   ($.validators = W),
   Object.defineProperty($, '__esModule', { value: !0 });
 });
});
export default or();