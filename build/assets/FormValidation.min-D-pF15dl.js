var st = (V, x) => () => (x || V((x = { exports: {} }).exports, x), x.exports);
var ot = st((W, ne) => {
 (function (V, x) {
  typeof W == 'object' && typeof ne < 'u'
   ? x(W)
   : typeof define == 'function' && define.amd
     ? define(['exports'], x)
     : ((V = typeof globalThis < 'u' ? globalThis : V || self),
       x((V.FormValidation = {})));
 })(void 0, function (V) {
  function x(s) {
   for (
    var n = s.length,
     t = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
     ],
     a = 0,
     e = 0;
    n--;

   )
    (e += t[a][parseInt(s.charAt(n), 10)]), (a = 1 - a);
   return e % 10 === 0 && e > 0;
  }
  function re(s) {
   for (var n = s.length, t = 5, a = 0; a < n; a++)
    t = ((((t || 10) * 2) % 11) + parseInt(s.charAt(a), 10)) % 10;
   return t === 1;
  }
  function le(s) {
   for (
    var n =
      arguments.length > 1 && arguments[1] !== void 0
       ? arguments[1]
       : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     t = s.length,
     a = n.length,
     e = Math.floor(a / 2),
     i = 0;
    i < t;
    i++
   )
    e = ((((e || a) * 2) % (a + 1)) + n.indexOf(s.charAt(i))) % a;
   return e === 1;
  }
  function se(s) {
   for (
    var n = [
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
     t = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
     ],
     a = s.reverse(),
     e = 0,
     i = 0;
    i < a.length;
    i++
   )
    e = n[e][t[i % 8][a[i]]];
   return e === 0;
  }
  var oe = { luhn: x, mod11And10: re, mod37And36: le, verhoeff: se };
  function y(s, n) {
   if (!(s instanceof n))
    throw new TypeError('Cannot call a class as a function');
  }
  function Q(s, n) {
   for (var t = 0; t < n.length; t++) {
    var a = n[t];
    (a.enumerable = a.enumerable || !1),
     (a.configurable = !0),
     'value' in a && (a.writable = !0),
     Object.defineProperty(s, a.key, a);
   }
  }
  function E(s, n, t) {
   return (
    n && Q(s.prototype, n),
    t && Q(s, t),
    Object.defineProperty(s, 'prototype', { writable: !1 }),
    s
   );
  }
  function h(s, n, t) {
   return (
    n in s
     ? Object.defineProperty(s, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (s[n] = t),
    s
   );
  }
  function A(s, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError('Super expression must either be null or a function');
   (s.prototype = Object.create(n && n.prototype, {
    constructor: { value: s, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(s, 'prototype', { writable: !1 }),
    n && q(s, n);
  }
  function D(s) {
   return (
    (D = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
       }),
    D(s)
   );
  }
  function q(s, n) {
   return (
    (q = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (a, e) {
        return (a.__proto__ = e), a;
       }),
    q(s, n)
   );
  }
  function de() {
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
  function v(s) {
   if (s === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return s;
  }
  function ue(s, n) {
   if (n && (typeof n == 'object' || typeof n == 'function')) return n;
   if (n !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return v(s);
  }
  function I(s) {
   var n = de();
   return function () {
    var a = D(s),
     e;
    if (n) {
     var i = D(this).constructor;
     e = Reflect.construct(a, arguments, i);
    } else e = a.apply(this, arguments);
    return ue(this, e);
   };
  }
  function ce(s, n) {
   if (s) {
    if (typeof s == 'string') return _(s, n);
    var t = Object.prototype.toString.call(s).slice(8, -1);
    if (
     (t === 'Object' && s.constructor && (t = s.constructor.name),
     t === 'Map' || t === 'Set')
    )
     return Array.from(s);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
     return _(s, n);
   }
  }
  function _(s, n) {
   (n == null || n > s.length) && (n = s.length);
   for (var t = 0, a = new Array(n); t < n; t++) a[t] = s[t];
   return a;
  }
  function ee(s, n) {
   var t = (typeof Symbol < 'u' && s[Symbol.iterator]) || s['@@iterator'];
   if (!t) {
    if (
     Array.isArray(s) ||
     (t = ce(s)) ||
     (n && s && typeof s.length == 'number')
    ) {
     t && (s = t);
     var a = 0,
      e = function () {};
     return {
      s: e,
      n: function () {
       return a >= s.length ? { done: !0 } : { done: !1, value: s[a++] };
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
   var i = !0,
    r = !1,
    l;
   return {
    s: function () {
     t = t.call(s);
    },
    n: function () {
     var o = t.next();
     return (i = o.done), o;
    },
    e: function (o) {
     (r = !0), (l = o);
    },
    f: function () {
     try {
      !i && t.return != null && t.return();
     } finally {
      if (r) throw l;
     }
    },
   };
  }
  function fe() {
   return {
    fns: {},
    clear: function () {
     this.fns = {};
    },
    emit: function (n) {
     for (
      var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), e = 1;
      e < t;
      e++
     )
      a[e - 1] = arguments[e];
     (this.fns[n] || []).map(function (i) {
      return i.apply(i, a);
     });
    },
    off: function (n, t) {
     if (this.fns[n]) {
      var a = this.fns[n].indexOf(t);
      a >= 0 && this.fns[n].splice(a, 1);
     }
    },
    on: function (n, t) {
     (this.fns[n] = this.fns[n] || []).push(t);
    },
   };
  }
  function ve() {
   return {
    filters: {},
    add: function (n, t) {
     (this.filters[n] = this.filters[n] || []).push(t);
    },
    clear: function () {
     this.filters = {};
    },
    execute: function (n, t, a) {
     if (!this.filters[n] || !this.filters[n].length) return t;
     for (var e = t, i = this.filters[n], r = i.length, l = 0; l < r; l++)
      e = i[l].apply(e, a);
     return e;
    },
    remove: function (n, t) {
     this.filters[n] &&
      (this.filters[n] = this.filters[n].filter(function (a) {
       return a !== t;
      }));
    },
   };
  }
  function te(s, n, t, a) {
   var e = (t.getAttribute('type') || '').toLowerCase(),
    i = t.tagName.toLowerCase();
   if (i === 'textarea') return t.value;
   if (i === 'select') {
    var r = t,
     l = r.selectedIndex;
    return l >= 0 ? r.options.item(l).value : '';
   }
   if (i === 'input')
    if (e === 'radio' || e === 'checkbox') {
     var o = a.filter(function (d) {
      return d.checked;
     }).length;
     return o === 0 ? '' : o + '';
    } else return t.value;
   return '';
  }
  function k(s, n) {
   var t = Array.isArray(n) ? n : [n],
    a = s;
   return (
    t.forEach(function (e) {
     a = a.replace('%s', e);
    }),
    a
   );
  }
  function he() {
   var s = function (t) {
    return parseFloat(''.concat(t).replace(',', '.'));
   };
   return {
    validate: function (t) {
     var a = t.value;
     if (a === '') return { valid: !0 };
     var e = Object.assign({}, { inclusive: !0, message: '' }, t.options),
      i = s(e.min),
      r = s(e.max);
     return e.inclusive
      ? {
         message: k(t.l10n ? e.message || t.l10n.between.default : e.message, [
          ''.concat(i),
          ''.concat(r),
         ]),
         valid: parseFloat(a) >= i && parseFloat(a) <= r,
        }
      : {
         message: k(
          t.l10n ? e.message || t.l10n.between.notInclusive : e.message,
          [''.concat(i), ''.concat(r)],
         ),
         valid: parseFloat(a) > i && parseFloat(a) < r,
        };
    },
   };
  }
  function me() {
   return {
    validate: function (n) {
     return { valid: !0 };
    },
   };
  }
  function U(s, n) {
   if (typeof s == 'function') return s.apply(this, n);
   if (typeof s == 'string') {
    var t = s;
    t.substring(t.length - 2) === '()' && (t = t.substring(0, t.length - 2));
    var a = t.split('.'),
     e = a.pop(),
     i = window,
     r = ee(a),
     l;
    try {
     for (r.s(); !(l = r.n()).done; ) {
      var o = l.value;
      i = i[o];
     }
    } catch (d) {
     r.e(d);
    } finally {
     r.f();
    }
    return typeof i[e] > 'u' ? null : i[e].apply(this, n);
   }
  }
  function pe() {
   return {
    validate: function (n) {
     var t = U(n.options.callback, [n]);
     return typeof t == 'boolean' ? { valid: t } : t;
    },
   };
  }
  function ge() {
   return {
    validate: function (n) {
     var t =
       n.element.tagName.toLowerCase() === 'select'
        ? n.element.querySelectorAll('option:checked').length
        : n.elements.filter(function (l) {
           return l.checked;
          }).length,
      a = n.options.min ? ''.concat(n.options.min) : '',
      e = n.options.max ? ''.concat(n.options.max) : '',
      i = n.l10n
       ? n.options.message || n.l10n.choice.default
       : n.options.message,
      r = !((a && t < parseInt(a, 10)) || (e && t > parseInt(e, 10)));
     switch (!0) {
      case !!a && !!e:
       i = k(n.l10n ? n.l10n.choice.between : n.options.message, [a, e]);
       break;
      case !!a:
       i = k(n.l10n ? n.l10n.choice.more : n.options.message, a);
       break;
      case !!e:
       i = k(n.l10n ? n.l10n.choice.less : n.options.message, e);
       break;
     }
     return { message: i, valid: r };
    },
   };
  }
  var j = {
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
  function be() {
   return {
    validate: function (n) {
     if (n.value === '') return { meta: { type: null }, valid: !0 };
     if (/[^0-9-\s]+/.test(n.value)) return { meta: { type: null }, valid: !1 };
     var t = n.value.replace(/\D/g, '');
     if (!x(t)) return { meta: { type: null }, valid: !1 };
     for (var a = 0, e = Object.keys(j); a < e.length; a++) {
      var i = e[a];
      for (var r in j[i].prefix)
       if (
        n.value.substr(0, j[i].prefix[r].length) === j[i].prefix[r] &&
        j[i].length.indexOf(t.length) !== -1
       )
        return { meta: { type: i }, valid: !0 };
     }
     return { meta: { type: null }, valid: !1 };
    },
   };
  }
  function ae(s, n, t, a) {
   if (
    isNaN(s) ||
    isNaN(n) ||
    isNaN(t) ||
    s < 1e3 ||
    s > 9999 ||
    n <= 0 ||
    n > 12
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
   if (t <= 0 || t > e[n - 1]) return !1;
   if (a === !0) {
    var i = new Date(),
     r = i.getFullYear(),
     l = i.getMonth(),
     o = i.getDate();
    return s < r || (s === r && n - 1 < l) || (s === r && n - 1 === l && t < o);
   }
   return !0;
  }
  function ye() {
   var s = function (a, e, i) {
     var r = e.indexOf('YYYY'),
      l = e.indexOf('MM'),
      o = e.indexOf('DD');
     if (r === -1 || l === -1 || o === -1) return null;
     var d = a.split(' '),
      u = d[0].split(i);
     if (u.length < 3) return null;
     var c = new Date(
      parseInt(u[r], 10),
      parseInt(u[l], 10) - 1,
      parseInt(u[o], 10),
     );
     if (d.length > 1) {
      var f = d[1].split(':');
      c.setHours(f.length > 0 ? parseInt(f[0], 10) : 0),
       c.setMinutes(f.length > 1 ? parseInt(f[1], 10) : 0),
       c.setSeconds(f.length > 2 ? parseInt(f[2], 10) : 0);
     }
     return c;
    },
    n = function (a, e) {
     var i = e
       .replace(/Y/g, 'y')
       .replace(/M/g, 'm')
       .replace(/D/g, 'd')
       .replace(/:m/g, ':M')
       .replace(/:mm/g, ':MM')
       .replace(/:S/, ':s')
       .replace(/:SS/, ':ss'),
      r = a.getDate(),
      l = r < 10 ? '0'.concat(r) : r,
      o = a.getMonth() + 1,
      d = o < 10 ? '0'.concat(o) : o,
      u = ''.concat(a.getFullYear()).substr(2),
      c = a.getFullYear(),
      f = a.getHours() % 12 || 12,
      m = f < 10 ? '0'.concat(f) : f,
      p = a.getHours(),
      b = p < 10 ? '0'.concat(p) : p,
      w = a.getMinutes(),
      S = w < 10 ? '0'.concat(w) : w,
      O = a.getSeconds(),
      z = O < 10 ? '0'.concat(O) : O,
      R = {
       H: ''.concat(p),
       HH: ''.concat(b),
       M: ''.concat(w),
       MM: ''.concat(S),
       d: ''.concat(r),
       dd: ''.concat(l),
       h: ''.concat(f),
       hh: ''.concat(m),
       m: ''.concat(o),
       mm: ''.concat(d),
       s: ''.concat(O),
       ss: ''.concat(z),
       yy: ''.concat(u),
       yyyy: ''.concat(c),
      };
     return i.replace(
      /d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,
      function (N) {
       return R[N] ? R[N] : N.slice(1, N.length - 1);
      },
     );
    };
   return {
    validate: function (a) {
     if (a.value === '') return { meta: { date: null }, valid: !0 };
     var e = Object.assign(
       {},
       {
        format:
         a.element && a.element.getAttribute('type') === 'date'
          ? 'YYYY-MM-DD'
          : 'MM/DD/YYYY',
        message: '',
       },
       a.options,
      ),
      i = a.l10n ? a.l10n.date.default : e.message,
      r = { message: ''.concat(i), meta: { date: null }, valid: !1 },
      l = e.format.split(' '),
      o = l.length > 1 ? l[1] : null,
      d = l.length > 2 ? l[2] : null,
      u = a.value.split(' '),
      c = u[0],
      f = u.length > 1 ? u[1] : null;
     if (l.length !== u.length) return r;
     var m =
      e.separator ||
      (c.indexOf('/') !== -1
       ? '/'
       : c.indexOf('-') !== -1
         ? '-'
         : c.indexOf('.') !== -1
           ? '.'
           : '/');
     if (m === null || c.indexOf(m) === -1) return r;
     var p = c.split(m),
      b = l[0].split(m);
     if (p.length !== b.length) return r;
     var w = p[b.indexOf('YYYY')],
      S = p[b.indexOf('MM')],
      O = p[b.indexOf('DD')];
     if (
      !/^\d+$/.test(w) ||
      !/^\d+$/.test(S) ||
      !/^\d+$/.test(O) ||
      w.length > 4 ||
      S.length > 2 ||
      O.length > 2
     )
      return r;
     var z = parseInt(w, 10),
      R = parseInt(S, 10),
      N = parseInt(O, 10);
     if (!ae(z, R, N)) return r;
     var C = new Date(z, R - 1, N);
     if (o) {
      var H = f.split(':');
      if (o.split(':').length !== H.length) return r;
      var M =
        H.length > 0
         ? H[0].length <= 2 && /^\d+$/.test(H[0])
           ? parseInt(H[0], 10)
           : -1
         : 0,
       B =
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
       M === -1 ||
       B === -1 ||
       Y === -1 ||
       Y < 0 ||
       Y > 60 ||
       M < 0 ||
       M >= 24 ||
       (d && M > 12) ||
       B < 0 ||
       B > 59
      )
       return r;
      C.setHours(M), C.setMinutes(B), C.setSeconds(Y);
     }
     var L = typeof e.min == 'function' ? e.min() : e.min,
      J = L instanceof Date ? L : L ? s(L, b, m) : C,
      P = typeof e.max == 'function' ? e.max() : e.max,
      K = P instanceof Date ? P : P ? s(P, b, m) : C,
      T = L instanceof Date ? n(J, e.format) : L,
      $ = P instanceof Date ? n(K, e.format) : P;
     switch (!0) {
      case !!T && !$:
       return {
        message: k(a.l10n ? a.l10n.date.min : i, T),
        meta: { date: C },
        valid: C.getTime() >= J.getTime(),
       };
      case !!$ && !T:
       return {
        message: k(a.l10n ? a.l10n.date.max : i, $),
        meta: { date: C },
        valid: C.getTime() <= K.getTime(),
       };
      case !!$ && !!T:
       return {
        message: k(a.l10n ? a.l10n.date.range : i, [T, $]),
        meta: { date: C },
        valid: C.getTime() <= K.getTime() && C.getTime() >= J.getTime(),
       };
      default:
       return { message: ''.concat(i), meta: { date: C }, valid: !0 };
     }
    },
   };
  }
  function Ee() {
   return {
    validate: function (n) {
     var t =
      typeof n.options.compare == 'function'
       ? n.options.compare.call(this)
       : n.options.compare;
     return { valid: t === '' || n.value !== t };
    },
   };
  }
  function ke() {
   return {
    validate: function (n) {
     return { valid: n.value === '' || /^\d+$/.test(n.value) };
    },
   };
  }
  function Ve() {
   var s = function (t, a) {
    for (var e = t.split(/"/), i = e.length, r = [], l = '', o = 0; o < i; o++)
     if (o % 2 === 0) {
      var d = e[o].split(a),
       u = d.length;
      if (u === 1) l += d[0];
      else {
       r.push(l + d[0]);
       for (var c = 1; c < u - 1; c++) r.push(d[c]);
       l = d[u - 1];
      }
     } else (l += '"' + e[o]), o < i - 1 && (l += '"');
    return r.push(l), r;
   };
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, { multiple: !1, separator: /[,;]/ }, t.options),
      e =
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      i = a.multiple === !0 || ''.concat(a.multiple) === 'true';
     if (i) {
      for (
       var r = a.separator || /[,;]/, l = s(t.value, r), o = l.length, d = 0;
       d < o;
       d++
      )
       if (!e.test(l[d])) return { valid: !1 };
      return { valid: !0 };
     } else return { valid: e.test(t.value) };
    },
   };
  }
  function Fe() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t,
      a = n.options.extension
       ? n.options.extension.toLowerCase().split(',')
       : null,
      e = n.options.type ? n.options.type.toLowerCase().split(',') : null,
      i = window.File && window.FileList && window.FileReader;
     if (i) {
      var r = n.element.files,
       l = r.length,
       o = 0;
      if (n.options.maxFiles && l > parseInt(''.concat(n.options.maxFiles), 10))
       return { meta: { error: 'INVALID_MAX_FILES' }, valid: !1 };
      if (n.options.minFiles && l < parseInt(''.concat(n.options.minFiles), 10))
       return { meta: { error: 'INVALID_MIN_FILES' }, valid: !1 };
      for (var d = {}, u = 0; u < l; u++) {
       if (
        ((o += r[u].size),
        (t = r[u].name.substr(r[u].name.lastIndexOf('.') + 1)),
        (d = { ext: t, file: r[u], size: r[u].size, type: r[u].type }),
        n.options.minSize &&
         r[u].size < parseInt(''.concat(n.options.minSize), 10))
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, d),
         valid: !1,
        };
       if (
        n.options.maxSize &&
        r[u].size > parseInt(''.concat(n.options.maxSize), 10)
       )
        return {
         meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, d),
         valid: !1,
        };
       if (a && a.indexOf(t.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, d),
         valid: !1,
        };
       if (r[u].type && e && e.indexOf(r[u].type.toLowerCase()) === -1)
        return {
         meta: Object.assign({}, { error: 'INVALID_TYPE' }, d),
         valid: !1,
        };
      }
      if (
       n.options.maxTotalSize &&
       o > parseInt(''.concat(n.options.maxTotalSize), 10)
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
       n.options.minTotalSize &&
       o < parseInt(''.concat(n.options.minTotalSize), 10)
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
      ((t = n.value.substr(n.value.lastIndexOf('.') + 1)),
      a && a.indexOf(t.toLowerCase()) === -1)
     )
      return { meta: { error: 'INVALID_EXTENSION', ext: t }, valid: !1 };
     return { valid: !0 };
    },
   };
  }
  function Ae() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign({}, { inclusive: !0, message: '' }, n.options),
      a = parseFloat(''.concat(t.min).replace(',', '.'));
     return t.inclusive
      ? {
         message: k(
          n.l10n ? t.message || n.l10n.greaterThan.default : t.message,
          ''.concat(a),
         ),
         valid: parseFloat(n.value) >= a,
        }
      : {
         message: k(
          n.l10n ? t.message || n.l10n.greaterThan.notInclusive : t.message,
          ''.concat(a),
         ),
         valid: parseFloat(n.value) > a,
        };
    },
   };
  }
  function Ie() {
   return {
    validate: function (n) {
     var t =
      typeof n.options.compare == 'function'
       ? n.options.compare.call(this)
       : n.options.compare;
     return { valid: t === '' || n.value === t };
    },
   };
  }
  function we() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       n.options,
      ),
      a = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
      e = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
      i = new RegExp(
       '^-?[0-9]{1,3}('.concat(e, '[0-9]{3})*(').concat(a, '[0-9]+)?$'),
      ),
      r = new RegExp(e, 'g'),
      l = ''.concat(n.value);
     if (!i.test(l)) return { valid: !1 };
     e && (l = l.replace(r, '')), a && (l = l.replace(a, '.'));
     var o = parseFloat(l);
     return { valid: !isNaN(o) && isFinite(o) && Math.floor(o) === o };
    },
   };
  }
  function Ce() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign({}, { ipv4: !0, ipv6: !0 }, n.options),
      a =
       /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
      e =
       /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
     switch (!0) {
      case t.ipv4 && !t.ipv6:
       return {
        message: n.l10n ? t.message || n.l10n.ip.ipv4 : t.message,
        valid: a.test(n.value),
       };
      case !t.ipv4 && t.ipv6:
       return {
        message: n.l10n ? t.message || n.l10n.ip.ipv6 : t.message,
        valid: e.test(n.value),
       };
      case t.ipv4 && t.ipv6:
      default:
       return {
        message: n.l10n ? t.message || n.l10n.ip.default : t.message,
        valid: a.test(n.value) || e.test(n.value),
       };
     }
    },
   };
  }
  function He() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign({}, { inclusive: !0, message: '' }, n.options),
      a = parseFloat(''.concat(t.max).replace(',', '.'));
     return t.inclusive
      ? {
         message: k(
          n.l10n ? t.message || n.l10n.lessThan.default : t.message,
          ''.concat(a),
         ),
         valid: parseFloat(n.value) <= a,
        }
      : {
         message: k(
          n.l10n ? t.message || n.l10n.lessThan.notInclusive : t.message,
          ''.concat(a),
         ),
         valid: parseFloat(n.value) < a,
        };
    },
   };
  }
  function xe() {
   return {
    validate: function (n) {
     var t = !!n.options && !!n.options.trim,
      a = n.value;
     return { valid: (!t && a !== '') || (t && a !== '' && a.trim() !== '') };
    },
   };
  }
  function Oe() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       n.options,
      ),
      a = ''.concat(n.value);
     a.substr(0, 1) === t.decimalSeparator
      ? (a = '0'.concat(t.decimalSeparator).concat(a.substr(1)))
      : a.substr(0, 2) === '-'.concat(t.decimalSeparator) &&
        (a = '-0'.concat(t.decimalSeparator).concat(a.substr(2)));
     var e = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
      i = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
      r = new RegExp(
       '^-?[0-9]{1,3}('.concat(i, '[0-9]{3})*(').concat(e, '[0-9]+)?$'),
      ),
      l = new RegExp(i, 'g');
     if (!r.test(a)) return { valid: !1 };
     i && (a = a.replace(l, '')), e && (a = a.replace(e, '.'));
     var o = parseFloat(a);
     return { valid: !isNaN(o) && isFinite(o) };
    },
   };
  }
  function Se() {
   return {
    validate: function (n) {
     return U(n.options.promise, [n]);
    },
   };
  }
  function Ne() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = n.options.regexp;
     if (t instanceof RegExp) return { valid: t.test(n.value) };
     var a = t.toString(),
      e = n.options.flags ? new RegExp(a, n.options.flags) : new RegExp(a);
     return { valid: e.test(n.value) };
    },
   };
  }
  var Le = function (n) {
   return Array(n)
    .fill('')
    .map(function (t) {
     return Math.random().toString(36).charAt(2);
    })
    .join('');
  };
  function ie(s, n) {
   var t = function (e) {
    return Object.keys(e)
     .map(function (i) {
      return ''
       .concat(encodeURIComponent(i), '=')
       .concat(encodeURIComponent(e[i]));
     })
     .join('&');
   };
   return new Promise(function (a, e) {
    var i = Object.assign(
      {},
      { crossDomain: !1, headers: {}, method: 'GET', params: {} },
      n,
     ),
     r = Object.keys(i.params)
      .map(function (f) {
       return ''
        .concat(encodeURIComponent(f), '=')
        .concat(encodeURIComponent(i.params[f]));
      })
      .join('&'),
     l = s.indexOf('?'),
     o =
      i.method === 'GET'
       ? ''
          .concat(s)
          .concat(l ? '?' : '&')
          .concat(r)
       : s;
    if (i.crossDomain) {
     var d = document.createElement('script'),
      u = '___FormValidationFetch_'.concat(Le(12), '___');
     (window[u] = function (f) {
      delete window[u], a(f);
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
     c.open(i.method, o),
      c.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
      i.method === 'POST' &&
       c.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
      Object.keys(i.headers).forEach(function (f) {
       return c.setRequestHeader(f, i.headers[f]);
      }),
      c.addEventListener('load', function () {
       a(JSON.parse(this.responseText));
      }),
      c.addEventListener('error', function () {
       return e;
      }),
      c.send(t(i.params));
    }
   });
  }
  function Pe() {
   var s = {
    crossDomain: !1,
    data: {},
    headers: {},
    method: 'GET',
    validKey: 'valid',
   };
   return {
    validate: function (t) {
     if (t.value === '') return Promise.resolve({ valid: !0 });
     var a = Object.assign({}, s, t.options),
      e = a.data;
     typeof a.data == 'function' && (e = a.data.call(this, t)),
      typeof e == 'string' && (e = JSON.parse(e)),
      (e[a.name || t.field] = t.value);
     var i = typeof a.url == 'function' ? a.url.call(this, t) : a.url;
     return ie(i, {
      crossDomain: a.crossDomain,
      headers: a.headers,
      method: a.method,
      params: e,
     })
      .then(function (r) {
       return Promise.resolve({
        message: r.message,
        meta: r,
        valid: ''.concat(r[a.validKey]) === 'true',
       });
      })
      .catch(function (r) {
       return Promise.reject({ valid: !1 });
      });
    },
   };
  }
  function je() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign({}, { case: 'lower' }, n.options),
      a = (t.case || 'lower').toLowerCase();
     return {
      message:
       t.message ||
       (n.l10n
        ? a === 'upper'
          ? n.l10n.stringCase.upper
          : n.l10n.stringCase.default
        : t.message),
      valid:
       a === 'upper'
        ? n.value === n.value.toUpperCase()
        : n.value === n.value.toLowerCase(),
     };
    },
   };
  }
  function Re() {
   var s = function (t) {
    for (var a = t.length, e = t.length - 1; e >= 0; e--) {
     var i = t.charCodeAt(e);
     i > 127 && i <= 2047 ? a++ : i > 2047 && i <= 65535 && (a += 2),
      i >= 56320 && i <= 57343 && e--;
    }
    return ''.concat(a);
   };
   return {
    validate: function (t) {
     var a = Object.assign(
       {},
       { message: '', trim: !1, utf8Bytes: !1 },
       t.options,
      ),
      e =
       a.trim === !0 || ''.concat(a.trim) === 'true' ? t.value.trim() : t.value;
     if (e === '') return { valid: !0 };
     var i = a.min ? ''.concat(a.min) : '',
      r = a.max ? ''.concat(a.max) : '',
      l = a.utf8Bytes ? s(e) : e.length,
      o = !0,
      d = t.l10n ? a.message || t.l10n.stringLength.default : a.message;
     switch (
      (((i && l < parseInt(i, 10)) || (r && l > parseInt(r, 10))) && (o = !1),
      !0)
     ) {
      case !!i && !!r:
       d = k(t.l10n ? a.message || t.l10n.stringLength.between : a.message, [
        i,
        r,
       ]);
       break;
      case !!i:
       d = k(
        t.l10n ? a.message || t.l10n.stringLength.more : a.message,
        ''.concat(parseInt(i, 10)),
       );
       break;
      case !!r:
       d = k(
        t.l10n ? a.message || t.l10n.stringLength.less : a.message,
        ''.concat(parseInt(r, 10)),
       );
       break;
     }
     return { message: d, valid: o };
    },
   };
  }
  function Me() {
   var s = {
    allowEmptyProtocol: !1,
    allowLocal: !1,
    protocol: 'http, https, ftp',
   };
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     var a = Object.assign({}, s, t.options),
      e = a.allowLocal === !0 || ''.concat(a.allowLocal) === 'true',
      i =
       a.allowEmptyProtocol === !0 ||
       ''.concat(a.allowEmptyProtocol) === 'true',
      r = a.protocol.split(',').join('|').replace(/\s/g, ''),
      l = new RegExp(
       '^(?:(?:' +
        r +
        ')://)' +
        (i ? '?' : '') +
        '(?:\\S+(?::\\S*)?@)?(?:' +
        (e
         ? ''
         : '(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        (e ? '?' : '') +
        ')(?::\\d{2,5})?(?:/[^\\s]*)?$',
       'i',
      );
     return { valid: l.test(t.value) };
    },
   };
  }
  var G = {
    between: he,
    blank: me,
    callback: pe,
    choice: ge,
    creditCard: be,
    date: ye,
    different: Ee,
    digits: ke,
    emailAddress: Ve,
    file: Fe,
    greaterThan: Ae,
    identical: Ie,
    integer: we,
    ip: Ce,
    lessThan: He,
    notEmpty: xe,
    numeric: Oe,
    promise: Se,
    regexp: Ne,
    remote: Pe,
    stringCase: je,
    stringLength: Re,
    uri: Me,
   },
   Te = (function () {
    function s(n, t) {
     y(this, s),
      (this.elements = {}),
      (this.ee = fe()),
      (this.filter = ve()),
      (this.plugins = {}),
      (this.results = new Map()),
      (this.validators = {}),
      (this.form = n),
      (this.fields = t);
    }
    return (
     E(s, [
      {
       key: 'on',
       value: function (t, a) {
        return this.ee.on(t, a), this;
       },
      },
      {
       key: 'off',
       value: function (t, a) {
        return this.ee.off(t, a), this;
       },
      },
      {
       key: 'emit',
       value: function (t) {
        for (
         var a, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1;
         r < e;
         r++
        )
         i[r - 1] = arguments[r];
        return (a = this.ee).emit.apply(a, [t].concat(i)), this;
       },
      },
      {
       key: 'registerPlugin',
       value: function (t, a) {
        if (this.plugins[t])
         throw new Error('The plguin '.concat(t, ' is registered'));
        return a.setCore(this), a.install(), (this.plugins[t] = a), this;
       },
      },
      {
       key: 'deregisterPlugin',
       value: function (t) {
        var a = this.plugins[t];
        return a && a.uninstall(), delete this.plugins[t], this;
       },
      },
      {
       key: 'registerValidator',
       value: function (t, a) {
        if (this.validators[t])
         throw new Error('The validator '.concat(t, ' is registered'));
        return (this.validators[t] = a), this;
       },
      },
      {
       key: 'registerFilter',
       value: function (t, a) {
        return this.filter.add(t, a), this;
       },
      },
      {
       key: 'deregisterFilter',
       value: function (t, a) {
        return this.filter.remove(t, a), this;
       },
      },
      {
       key: 'executeFilter',
       value: function (t, a, e) {
        return this.filter.execute(t, a, e);
       },
      },
      {
       key: 'addField',
       value: function (t, a) {
        var e = Object.assign({}, { selector: '', validators: {} }, a);
        return (
         (this.fields[t] = this.fields[t]
          ? {
             selector: e.selector || this.fields[t].selector,
             validators: Object.assign(
              {},
              this.fields[t].validators,
              e.validators,
             ),
            }
          : e),
         (this.elements[t] = this.queryElements(t)),
         this.emit('core.field.added', {
          elements: this.elements[t],
          field: t,
          options: this.fields[t],
         }),
         this
        );
       },
      },
      {
       key: 'removeField',
       value: function (t) {
        if (!this.fields[t])
         throw new Error(
          'The field '.concat(
           t,
           ' validators are not defined. Please ensure the field is added first',
          ),
         );
        var a = this.elements[t],
         e = this.fields[t];
        return (
         delete this.elements[t],
         delete this.fields[t],
         this.emit('core.field.removed', { elements: a, field: t, options: e }),
         this
        );
       },
      },
      {
       key: 'validate',
       value: function () {
        var t = this;
        return (
         this.emit('core.form.validating', { formValidation: this }),
         this.filter
          .execute('validate-pre', Promise.resolve(), [])
          .then(function () {
           return Promise.all(
            Object.keys(t.fields).map(function (a) {
             return t.validateField(a);
            }),
           ).then(function (a) {
            switch (!0) {
             case a.indexOf('Invalid') !== -1:
              return (
               t.emit('core.form.invalid', { formValidation: t }),
               Promise.resolve('Invalid')
              );
             case a.indexOf('NotValidated') !== -1:
              return (
               t.emit('core.form.notvalidated', { formValidation: t }),
               Promise.resolve('NotValidated')
              );
             default:
              return (
               t.emit('core.form.valid', { formValidation: t }),
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
       value: function (t) {
        var a = this,
         e = this.results.get(t);
        if (e === 'Valid' || e === 'Invalid') return Promise.resolve(e);
        this.emit('core.field.validating', t);
        var i = this.elements[t];
        if (i.length === 0)
         return this.emit('core.field.valid', t), Promise.resolve('Valid');
        var r = i[0].getAttribute('type');
        return r === 'radio' || r === 'checkbox' || i.length === 1
         ? this.validateElement(t, i[0])
         : Promise.all(
            i.map(function (l) {
             return a.validateElement(t, l);
            }),
           ).then(function (l) {
            switch (!0) {
             case l.indexOf('Invalid') !== -1:
              return (
               a.emit('core.field.invalid', t),
               a.results.set(t, 'Invalid'),
               Promise.resolve('Invalid')
              );
             case l.indexOf('NotValidated') !== -1:
              return (
               a.emit('core.field.notvalidated', t),
               a.results.delete(t),
               Promise.resolve('NotValidated')
              );
             default:
              return (
               a.emit('core.field.valid', t),
               a.results.set(t, 'Valid'),
               Promise.resolve('Valid')
              );
            }
           });
       },
      },
      {
       key: 'validateElement',
       value: function (t, a) {
        var e = this;
        this.results.delete(t);
        var i = this.elements[t],
         r = this.filter.execute('element-ignored', !1, [t, a, i]);
        if (r)
         return (
          this.emit('core.element.ignored', {
           element: a,
           elements: i,
           field: t,
          }),
          Promise.resolve('Ignored')
         );
        var l = this.fields[t].validators;
        this.emit('core.element.validating', {
         element: a,
         elements: i,
         field: t,
        });
        var o = Object.keys(l).map(function (d) {
         return function () {
          return e.executeValidator(t, a, d, l[d]);
         };
        });
        return this.waterfall(o)
         .then(function (d) {
          var u = d.indexOf('Invalid') === -1;
          e.emit('core.element.validated', {
           element: a,
           elements: i,
           field: t,
           valid: u,
          });
          var c = a.getAttribute('type');
          return (
           (c === 'radio' || c === 'checkbox' || i.length === 1) &&
            e.emit(u ? 'core.field.valid' : 'core.field.invalid', t),
           Promise.resolve(u ? 'Valid' : 'Invalid')
          );
         })
         .catch(function (d) {
          return (
           e.emit('core.element.notvalidated', {
            element: a,
            elements: i,
            field: t,
           }),
           Promise.resolve(d)
          );
         });
       },
      },
      {
       key: 'executeValidator',
       value: function (t, a, e, i) {
        var r = this,
         l = this.elements[t],
         o = this.filter.execute('validator-name', e, [e, t]);
        if (
         ((i.message = this.filter.execute('validator-message', i.message, [
          this.locale,
          t,
          o,
         ])),
         !this.validators[o] || i.enabled === !1)
        )
         return (
          this.emit('core.validator.validated', {
           element: a,
           elements: l,
           field: t,
           result: this.normalizeResult(t, o, { valid: !0 }),
           validator: o,
          }),
          Promise.resolve('Valid')
         );
        var d = this.validators[o],
         u = this.getElementValue(t, a, o),
         c = this.filter.execute('field-should-validate', !0, [t, a, u, e]);
        if (!c)
         return (
          this.emit('core.validator.notvalidated', {
           element: a,
           elements: l,
           field: t,
           validator: e,
          }),
          Promise.resolve('NotValidated')
         );
        this.emit('core.validator.validating', {
         element: a,
         elements: l,
         field: t,
         validator: e,
        });
        var f = d().validate({
          element: a,
          elements: l,
          field: t,
          l10n: this.localization,
          options: i,
          value: u,
         }),
         m = typeof f.then == 'function';
        if (m)
         return f.then(function (b) {
          var w = r.normalizeResult(t, e, b);
          return (
           r.emit('core.validator.validated', {
            element: a,
            elements: l,
            field: t,
            result: w,
            validator: e,
           }),
           w.valid ? 'Valid' : 'Invalid'
          );
         });
        var p = this.normalizeResult(t, e, f);
        return (
         this.emit('core.validator.validated', {
          element: a,
          elements: l,
          field: t,
          result: p,
          validator: e,
         }),
         Promise.resolve(p.valid ? 'Valid' : 'Invalid')
        );
       },
      },
      {
       key: 'getElementValue',
       value: function (t, a, e) {
        var i = te(this.form, t, a, this.elements[t]);
        return this.filter.execute('field-value', i, [i, t, a, e]);
       },
      },
      {
       key: 'getElements',
       value: function (t) {
        return this.elements[t];
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
       value: function (t) {
        return this.plugins[t];
       },
      },
      {
       key: 'updateFieldStatus',
       value: function (t, a, e) {
        var i = this,
         r = this.elements[t],
         l = r[0].getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? [r[0]] : r;
        if (
         (o.forEach(function (d) {
          return i.updateElementStatus(t, d, a, e);
         }),
         e)
        )
         a === 'Invalid' &&
          (this.emit('core.field.invalid', t), this.results.set(t, 'Invalid'));
        else
         switch (a) {
          case 'NotValidated':
           this.emit('core.field.notvalidated', t), this.results.delete(t);
           break;
          case 'Validating':
           this.emit('core.field.validating', t), this.results.delete(t);
           break;
          case 'Valid':
           this.emit('core.field.valid', t), this.results.set(t, 'Valid');
           break;
          case 'Invalid':
           this.emit('core.field.invalid', t), this.results.set(t, 'Invalid');
           break;
         }
        return this;
       },
      },
      {
       key: 'updateElementStatus',
       value: function (t, a, e, i) {
        var r = this,
         l = this.elements[t],
         o = this.fields[t].validators,
         d = i ? [i] : Object.keys(o);
        switch (e) {
         case 'NotValidated':
          d.forEach(function (u) {
           return r.emit('core.validator.notvalidated', {
            element: a,
            elements: l,
            field: t,
            validator: u,
           });
          }),
           this.emit('core.element.notvalidated', {
            element: a,
            elements: l,
            field: t,
           });
          break;
         case 'Validating':
          d.forEach(function (u) {
           return r.emit('core.validator.validating', {
            element: a,
            elements: l,
            field: t,
            validator: u,
           });
          }),
           this.emit('core.element.validating', {
            element: a,
            elements: l,
            field: t,
           });
          break;
         case 'Valid':
          d.forEach(function (u) {
           return r.emit('core.validator.validated', {
            element: a,
            elements: l,
            field: t,
            result: { message: o[u].message, valid: !0 },
            validator: u,
           });
          }),
           this.emit('core.element.validated', {
            element: a,
            elements: l,
            field: t,
            valid: !0,
           });
          break;
         case 'Invalid':
          d.forEach(function (u) {
           return r.emit('core.validator.validated', {
            element: a,
            elements: l,
            field: t,
            result: { message: o[u].message, valid: !1 },
            validator: u,
           });
          }),
           this.emit('core.element.validated', {
            element: a,
            elements: l,
            field: t,
            valid: !1,
           });
          break;
        }
        return this;
       },
      },
      {
       key: 'resetForm',
       value: function (t) {
        var a = this;
        return (
         Object.keys(this.fields).forEach(function (e) {
          return a.resetField(e, t);
         }),
         this.emit('core.form.reset', { formValidation: this, reset: t }),
         this
        );
       },
      },
      {
       key: 'resetField',
       value: function (t, a) {
        if (a) {
         var e = this.elements[t],
          i = e[0].getAttribute('type');
         e.forEach(function (r) {
          i === 'radio' || i === 'checkbox'
           ? (r.removeAttribute('selected'),
             r.removeAttribute('checked'),
             (r.checked = !1))
           : (r.setAttribute('value', ''),
             (r instanceof HTMLInputElement ||
              r instanceof HTMLTextAreaElement) &&
              (r.value = ''));
         });
        }
        return (
         this.updateFieldStatus(t, 'NotValidated'),
         this.emit('core.field.reset', { field: t, reset: a }),
         this
        );
       },
      },
      {
       key: 'revalidateField',
       value: function (t) {
        return this.fields[t]
         ? (this.updateFieldStatus(t, 'NotValidated'), this.validateField(t))
         : Promise.resolve('Ignored');
       },
      },
      {
       key: 'disableValidator',
       value: function (t, a) {
        if (!this.fields[t]) return this;
        var e = this.elements[t];
        return (
         this.toggleValidator(!1, t, a),
         this.emit('core.validator.disabled', {
          elements: e,
          field: t,
          formValidation: this,
          validator: a,
         }),
         this
        );
       },
      },
      {
       key: 'enableValidator',
       value: function (t, a) {
        if (!this.fields[t]) return this;
        var e = this.elements[t];
        return (
         this.toggleValidator(!0, t, a),
         this.emit('core.validator.enabled', {
          elements: e,
          field: t,
          formValidation: this,
          validator: a,
         }),
         this
        );
       },
      },
      {
       key: 'updateValidatorOption',
       value: function (t, a, e, i) {
        return (
         this.fields[t] &&
          this.fields[t].validators &&
          this.fields[t].validators[a] &&
          (this.fields[t].validators[a][e] = i),
         this
        );
       },
      },
      {
       key: 'setFieldOptions',
       value: function (t, a) {
        return (this.fields[t] = a), this;
       },
      },
      {
       key: 'destroy',
       value: function () {
        var t = this;
        return (
         Object.keys(this.plugins).forEach(function (a) {
          return t.plugins[a].uninstall();
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
       value: function (t, a) {
        return (this.locale = t), (this.localization = a), this;
       },
      },
      {
       key: 'waterfall',
       value: function (t) {
        return t.reduce(function (a, e) {
         return a.then(function (i) {
          return e().then(function (r) {
           return i.push(r), i;
          });
         });
        }, Promise.resolve([]));
       },
      },
      {
       key: 'queryElements',
       value: function (t) {
        var a = this.fields[t].selector
         ? this.fields[t].selector.charAt(0) === '#'
           ? '[id="'.concat(this.fields[t].selector.substring(1), '"]')
           : this.fields[t].selector
         : '[name="'.concat(t, '"]');
        return [].slice.call(this.form.querySelectorAll(a));
       },
      },
      {
       key: 'normalizeResult',
       value: function (t, a, e) {
        var i = this.fields[t].validators[a];
        return Object.assign({}, e, {
         message:
          e.message ||
          (i ? i.message : '') ||
          (this.localization &&
          this.localization[a] &&
          this.localization[a].default
           ? this.localization[a].default
           : '') ||
          'The field '.concat(t, ' is not valid'),
        });
       },
      },
      {
       key: 'toggleValidator',
       value: function (t, a, e) {
        var i = this,
         r = this.fields[a].validators;
        return (
         e && r && r[e]
          ? (this.fields[a].validators[e].enabled = t)
          : e ||
            Object.keys(r).forEach(function (l) {
             return (i.fields[a].validators[l].enabled = t);
            }),
         this.updateFieldStatus(a, 'NotValidated', e)
        );
       },
      },
     ]),
     s
    );
   })();
  function $e(s, n) {
   var t = Object.assign(
     {},
     { fields: {}, locale: 'en_US', plugins: {}, init: function (i) {} },
     n,
    ),
    a = new Te(s, t.fields);
   return (
    a.setLocale(t.locale, t.localization),
    Object.keys(t.plugins).forEach(function (e) {
     return a.registerPlugin(e, t.plugins[e]);
    }),
    Object.keys(G).forEach(function (e) {
     return a.registerValidator(e, G[e]);
    }),
    t.init(a),
    Object.keys(t.fields).forEach(function (e) {
     return a.addField(e, t.fields[e]);
    }),
    a
   );
  }
  var F = (function () {
    function s(n) {
     y(this, s), (this.opts = n);
    }
    return (
     E(s, [
      {
       key: 'setCore',
       value: function (t) {
        return (this.core = t), this;
       },
      },
      { key: 'install', value: function () {} },
      { key: 'uninstall', value: function () {} },
     ]),
     s
    );
   })(),
   De = { getFieldValue: te },
   ze = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.opts = a || {}),
      (e.validatorNameFilter = e.getValidatorName.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
       value: function (e, i) {
        return this.opts[e] || e;
       },
      },
     ]),
     t
    );
   })(F),
   Be = (function (s) {
    A(t, s);
    var n = I(t);
    function t() {
     var a;
     return (
      y(this, t),
      (a = n.call(this, {})),
      (a.elementValidatedHandler = a.onElementValidated.bind(v(a))),
      (a.fieldValidHandler = a.onFieldValid.bind(v(a))),
      (a.fieldInvalidHandler = a.onFieldInvalid.bind(v(a))),
      (a.messageDisplayedHandler = a.onMessageDisplayed.bind(v(a))),
      a
     );
    }
    return (
     E(t, [
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
        var i = this.core.getElements(e);
        i &&
         i.forEach(function (r) {
          r.setAttribute('aria-invalid', 'false'),
           r.removeAttribute('aria-describedby');
         });
       },
      },
      {
       key: 'onFieldInvalid',
       value: function (e) {
        var i = this.core.getElements(e);
        i &&
         i.forEach(function (r) {
          return r.setAttribute('aria-invalid', 'true');
         });
       },
      },
      {
       key: 'onMessageDisplayed',
       value: function (e) {
        e.messageElement.setAttribute('role', 'alert'),
         e.messageElement.setAttribute('aria-hidden', 'false');
        var i = this.core.getElements(e.field),
         r = i.indexOf(e.element),
         l = 'js-fv-'
          .concat(e.field, '-')
          .concat(r, '-')
          .concat(Date.now(), '-message');
        e.messageElement.setAttribute('id', l),
         e.element.setAttribute('aria-describedby', l);
        var o = e.element.getAttribute('type');
        (o === 'radio' || o === 'checkbox') &&
         i.forEach(function (d) {
          return d.setAttribute('aria-describedby', l);
         });
       },
      },
     ]),
     t
    );
   })(F),
   Ye = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.addedFields = new Map()),
      (e.opts = Object.assign(
       {},
       { html5Input: !1, pluginPrefix: 'data-fvp-', prefix: 'data-fv-' },
       a,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
      {
       key: 'install',
       value: function () {
        var e = this;
        this.parsePlugins();
        var i = this.parseOptions();
        Object.keys(i).forEach(function (r) {
         e.addedFields.has(r) || e.addedFields.set(r, !0),
          e.core.addField(r, i[r]);
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
        var i = this,
         r = e.elements;
        !r ||
         r.length === 0 ||
         this.addedFields.has(e.field) ||
         (this.addedFields.set(e.field, !0),
         r.forEach(function (l) {
          var o = i.parseElement(l);
          if (!i.isEmptyOption(o)) {
           var d = {
            selector: e.options.selector,
            validators: Object.assign(
             {},
             e.options.validators || {},
             o.validators,
            ),
           };
           i.core.setFieldOptions(e.field, d);
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
         i = this.opts.prefix,
         r = {},
         l = this.core.getFields(),
         o = this.core.getFormElement(),
         d = [].slice.call(o.querySelectorAll('[name], ['.concat(i, 'field]')));
        return (
         d.forEach(function (u) {
          var c = e.parseElement(u);
          if (!e.isEmptyOption(c)) {
           var f =
            u.getAttribute('name') || u.getAttribute(''.concat(i, 'field'));
           r[f] = Object.assign({}, r[f], c);
          }
         }),
         Object.keys(r).forEach(function (u) {
          Object.keys(r[u].validators).forEach(function (c) {
           (r[u].validators[c].enabled = r[u].validators[c].enabled || !1),
            l[u] &&
             l[u].validators &&
             l[u].validators[c] &&
             Object.assign(r[u].validators[c], l[u].validators[c]);
          });
         }),
         Object.assign({}, l, r)
        );
       },
      },
      {
       key: 'createPluginInstance',
       value: function (e, i) {
        for (
         var r = e.split('.'), l = window || this, o = 0, d = r.length;
         o < d;
         o++
        )
         l = l[r[o]];
        if (typeof l != 'function')
         throw new Error('the plugin '.concat(e, " doesn't exist"));
        return new l(i);
       },
      },
      {
       key: 'parsePlugins',
       value: function () {
        for (
         var e = this,
          i = this.core.getFormElement(),
          r = new RegExp(
           '^'.concat(
            this.opts.pluginPrefix,
            '([a-z0-9-]+)(___)*([a-z0-9-]+)*$',
           ),
          ),
          l = i.attributes.length,
          o = {},
          d = 0;
         d < l;
         d++
        ) {
         var u = i.attributes[d].name,
          c = i.attributes[d].value,
          f = r.exec(u);
         if (f && f.length === 4) {
          var m = this.toCamelCase(f[1]);
          o[m] = Object.assign(
           {},
           f[3]
            ? h({}, this.toCamelCase(f[3]), c)
            : { enabled: c === '' || c === 'true' },
           o[m],
          );
         }
        }
        Object.keys(o).forEach(function (p) {
         var b = o[p],
          w = b.enabled,
          S = b.class;
         if (w && S) {
          delete b.enabled, delete b.clazz;
          var O = e.createPluginInstance(S, b);
          e.core.registerPlugin(p, O);
         }
        });
       },
      },
      {
       key: 'isEmptyOption',
       value: function (e) {
        var i = e.validators;
        return Object.keys(i).length === 0 && i.constructor === Object;
       },
      },
      {
       key: 'parseElement',
       value: function (e) {
        for (
         var i = new RegExp(
           '^'.concat(this.opts.prefix, '([a-z0-9-]+)(___)*([a-z0-9-]+)*$'),
          ),
          r = e.attributes.length,
          l = {},
          o = e.getAttribute('type'),
          d = 0;
         d < r;
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
         var f = i.exec(u);
         if (f && f.length === 4) {
          var m = this.toCamelCase(f[1]);
          l[m] = Object.assign(
           {},
           f[3]
            ? h({}, this.toCamelCase(f[3]), this.normalizeValue(c))
            : { enabled: c === '' || c === 'true' },
           l[m],
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
     t
    );
   })(F),
   qe = (function (s) {
    A(t, s);
    var n = I(t);
    function t() {
     var a;
     return (
      y(this, t),
      (a = n.call(this, {})),
      (a.onValidHandler = a.onFormValid.bind(v(a))),
      a
     );
    }
    return (
     E(t, [
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
     t
    );
   })(F),
   Ue = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.opts = a || {}),
      (e.triggerExecutedHandler = e.onTriggerExecuted.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
         var i = this.opts[e.field].split(' '),
          r = ee(i),
          l;
         try {
          for (r.s(); !(l = r.n()).done; ) {
           var o = l.value,
            d = o.trim();
           this.opts[d] && this.core.revalidateField(d);
          }
         } catch (u) {
          r.e(u);
         } finally {
          r.f();
         }
        }
       },
      },
     ]),
     t
    );
   })(F),
   Ge = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.opts = Object.assign({}, { excluded: t.defaultIgnore }, a)),
      (e.ignoreValidationFilter = e.ignoreValidation.bind(v(e))),
      e
     );
    }
    return (
     E(
      t,
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
        value: function (e, i, r) {
         return this.opts.excluded.apply(this, [e, i, r]);
        },
       },
      ],
      [
       {
        key: 'defaultIgnore',
        value: function (e, i, r) {
         var l = !!(
           i.offsetWidth ||
           i.offsetHeight ||
           i.getClientRects().length
          ),
          o = i.getAttribute('disabled');
         return (
          o === '' ||
          o === 'disabled' ||
          i.getAttribute('type') === 'hidden' ||
          !l
         );
        },
       },
      ],
     ),
     t
    );
   })(F),
   Xe = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.statuses = new Map()),
      (e.opts = Object.assign({}, { onStatusChanged: function () {} }, a)),
      (e.elementValidatingHandler = e.onElementValidating.bind(v(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(v(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(v(e))),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(v(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
     t
    );
   })(F);
  function Ze(s, n) {
   n.split(' ').forEach(function (t) {
    s.classList
     ? s.classList.add(t)
     : ' '.concat(s.className, ' ').indexOf(' '.concat(t, ' ')) &&
       (s.className += ' '.concat(t));
   });
  }
  function Je(s, n) {
   n.split(' ').forEach(function (t) {
    s.classList
     ? s.classList.remove(t)
     : (s.className = s.className.replace(t, ''));
   });
  }
  function g(s, n) {
   var t = [],
    a = [];
   Object.keys(n).forEach(function (e) {
    e && (n[e] ? t.push(e) : a.push(e));
   }),
    a.forEach(function (e) {
     return Je(s, e);
    }),
    t.forEach(function (e) {
     return Ze(s, e);
    });
  }
  function Ke(s, n) {
   var t =
    s.matches ||
    s.webkitMatchesSelector ||
    s.mozMatchesSelector ||
    s.msMatchesSelector;
   if (t) return t.call(s, n);
   var a = [].slice.call(s.parentElement.querySelectorAll(n));
   return a.indexOf(s) >= 0;
  }
  function X(s, n) {
   for (var t = s; t && !Ke(t, n); ) t = t.parentElement;
   return t;
  }
  var Z = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.useDefaultContainer = !1),
      (e.messages = new Map()),
      (e.defaultContainer = document.createElement('div')),
      (e.useDefaultContainer = !a || !a.container),
      (e.opts = Object.assign(
       {},
       {
        container: function (r, l) {
         return e.defaultContainer;
        },
       },
       a,
      )),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(v(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(v(e))),
      (e.validatorValidatedHandler = e.onValidatorValidated.bind(v(e))),
      (e.validatorNotValidatedHandler = e.onValidatorNotValidated.bind(v(e))),
      e
     );
    }
    return (
     E(
      t,
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
         var i = this,
          r = e.elements;
         r &&
          (r.forEach(function (l) {
           var o = i.messages.get(l);
           o && (o.parentNode.removeChild(o), i.messages.delete(l));
          }),
          this.prepareFieldContainer(e.field, r));
        },
       },
       {
        key: 'onFieldRemoved',
        value: function (e) {
         var i = this;
         if (!(!e.elements.length || !e.field)) {
          var r = e.elements[0].getAttribute('type'),
           l = r === 'radio' || r === 'checkbox' ? [e.elements[0]] : e.elements;
          l.forEach(function (o) {
           if (i.messages.has(o)) {
            var d = i.messages.get(o);
            d.parentNode.removeChild(d), i.messages.delete(o);
           }
          });
         }
        },
       },
       {
        key: 'prepareFieldContainer',
        value: function (e, i) {
         var r = this;
         if (i.length) {
          var l = i[0].getAttribute('type');
          l === 'radio' || l === 'checkbox'
           ? this.prepareElementContainer(e, i[0], i)
           : i.forEach(function (o) {
              return r.prepareElementContainer(e, o, i);
             });
         }
        },
       },
       {
        key: 'prepareElementContainer',
        value: function (e, i, r) {
         var l;
         if (typeof this.opts.container == 'string') {
          var o =
           this.opts.container.charAt(0) === '#'
            ? '[id="'.concat(this.opts.container.substring(1), '"]')
            : this.opts.container;
          l = this.core.getFormElement().querySelector(o);
         } else l = this.opts.container(e, i);
         var d = document.createElement('div');
         l.appendChild(d),
          g(d, { 'fv-plugins-message-container': !0 }),
          this.core.emit('plugins.message.placed', {
           element: i,
           elements: r,
           field: e,
           messageElement: d,
          }),
          this.messages.set(i, d);
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
         var i = e.elements,
          r = e.element.getAttribute('type'),
          l =
           (r === 'radio' || r === 'checkbox') && i.length > 0
            ? i[0]
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
            this.opts.clazz && g(u, h({}, this.opts.clazz, !0)),
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
         var i = e.elements,
          r = e.element.getAttribute('type'),
          l = r === 'radio' || r === 'checkbox' ? i[0] : e.element;
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
         var i = e.elements,
          r = e.element.getAttribute('type'),
          l = r === 'radio' || r === 'checkbox' ? i[0] : e.element;
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
        value: function (e, i, r) {
         for (
          var l = e;
          l && !(l === i || ((l = l.parentElement), r.test(l.className)));

         );
         return l;
        },
       },
      ],
     ),
     t
    );
   })(F),
   We = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
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
       a,
      )),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(v(e))),
      (e.elementValidatingHandler = e.onElementValidating.bind(v(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(v(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(v(e))),
      (e.iconPlacedHandler = e.onIconPlaced.bind(v(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(v(e))),
      (e.messagePlacedHandler = e.onMessagePlaced.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
      {
       key: 'install',
       value: function () {
        var e,
         i = this;
        g(
         this.core.getFormElement(),
         ((e = {}),
         h(e, this.opts.formClass, !0),
         h(e, 'fv-plugins-framework', !0),
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
           new Z({
            clazz: this.opts.messageClass,
            container: function (l, o) {
             var d =
               typeof i.opts.rowSelector == 'string'
                ? i.opts.rowSelector
                : i.opts.rowSelector(l, o),
              u = X(o, d);
             return Z.getClosestContainer(o, u, i.opts.rowPattern);
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
         g(
          this.core.getFormElement(),
          ((e = {}),
          h(e, this.opts.formClass, !1),
          h(e, 'fv-plugins-framework', !1),
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
        var i = this,
         r = e.elements;
        r &&
         (r.forEach(function (l) {
          var o = i.containers.get(l);
          if (o) {
           var d;
           g(
            o,
            ((d = {}),
            h(d, i.opts.rowInvalidClass, !1),
            h(d, i.opts.rowValidatingClass, !1),
            h(d, i.opts.rowValidClass, !1),
            h(d, 'fv-plugins-icon-container', !1),
            d),
           ),
            i.containers.delete(l);
          }
         }),
         this.prepareFieldContainer(e.field, r));
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        var i = this;
        e.elements.forEach(function (r) {
         var l = i.containers.get(r);
         if (l) {
          var o;
          g(
           l,
           ((o = {}),
           h(o, i.opts.rowInvalidClass, !1),
           h(o, i.opts.rowValidatingClass, !1),
           h(o, i.opts.rowValidClass, !1),
           o),
          );
         }
        });
       },
      },
      {
       key: 'prepareFieldContainer',
       value: function (e, i) {
        var r = this;
        if (i.length) {
         var l = i[0].getAttribute('type');
         l === 'radio' || l === 'checkbox'
          ? this.prepareElementContainer(e, i[0])
          : i.forEach(function (o) {
             return r.prepareElementContainer(e, o);
            });
        }
       },
      },
      {
       key: 'prepareElementContainer',
       value: function (e, i) {
        var r =
          typeof this.opts.rowSelector == 'string'
           ? this.opts.rowSelector
           : this.opts.rowSelector(e, i),
         l = X(i, r);
        if (l !== i) {
         var o;
         g(
          l,
          ((o = {}),
          h(o, this.opts.rowClasses, !0),
          h(o, 'fv-plugins-icon-container', !0),
          o),
         ),
          this.containers.set(i, l);
        }
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        var i = e.elements,
         r = e.element.getAttribute('type'),
         l = r === 'radio' || r === 'checkbox' ? i[0] : e.element,
         o = this.containers.get(l);
        if (o) {
         var d;
         g(
          o,
          ((d = {}),
          h(d, this.opts.rowInvalidClass, !1),
          h(d, this.opts.rowValidatingClass, !0),
          h(d, this.opts.rowValidClass, !1),
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
       value: function (e, i) {
        var r = this,
         l = e.getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? i[0] : e;
        i.forEach(function (c) {
         var f;
         g(
          c,
          ((f = {}),
          h(f, r.opts.eleValidClass, !1),
          h(f, r.opts.eleInvalidClass, !1),
          f),
         );
        });
        var d = this.containers.get(o);
        if (d) {
         var u;
         g(
          d,
          ((u = {}),
          h(u, this.opts.rowInvalidClass, !1),
          h(u, this.opts.rowValidatingClass, !1),
          h(u, this.opts.rowValidClass, !1),
          u),
         );
        }
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        var i = this,
         r = e.elements,
         l = e.element.getAttribute('type'),
         o = l === 'radio' || l === 'checkbox' ? r[0] : e.element;
        r.forEach(function (m) {
         var p;
         g(
          m,
          ((p = {}),
          h(p, i.opts.eleValidClass, e.valid),
          h(p, i.opts.eleInvalidClass, !e.valid),
          p),
         );
        });
        var d = this.containers.get(o);
        if (d)
         if (e.valid) {
          this.results.delete(o);
          var c = !0;
          if (
           (this.containers.forEach(function (m, p) {
            m === d && i.results.get(p) === !1 && (c = !1);
           }),
           c)
          ) {
           var f;
           g(
            d,
            ((f = {}),
            h(f, this.opts.rowInvalidClass, !1),
            h(f, this.opts.rowValidatingClass, !1),
            h(f, this.opts.rowValidClass, !0),
            f),
           );
          }
         } else {
          var u;
          this.results.set(o, !1),
           g(
            d,
            ((u = {}),
            h(u, this.opts.rowInvalidClass, !0),
            h(u, this.opts.rowValidatingClass, !1),
            h(u, this.opts.rowValidClass, !1),
            u),
           );
         }
       },
      },
     ]),
     t
    );
   })(F),
   Qe = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
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
       a,
      )),
      (e.elementValidatingHandler = e.onElementValidating.bind(v(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(v(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(v(e))),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(v(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
        var i = this,
         r = e.elements;
        r &&
         (r.forEach(function (l) {
          var o = i.icons.get(l);
          o && (o.parentNode.removeChild(o), i.icons.delete(l));
         }),
         this.prepareFieldIcon(e.field, r));
       },
      },
      {
       key: 'prepareFieldIcon',
       value: function (e, i) {
        var r = this;
        if (i.length) {
         var l = i[0].getAttribute('type');
         l === 'radio' || l === 'checkbox'
          ? this.prepareElementIcon(e, i[0])
          : i.forEach(function (o) {
             return r.prepareElementIcon(e, o);
            });
        }
       },
      },
      {
       key: 'prepareElementIcon',
       value: function (e, i) {
        var r = document.createElement('i');
        r.setAttribute('data-field', e),
         i.parentNode.insertBefore(r, i.nextSibling),
         g(r, { 'fv-plugins-icon': !0 });
        var l = {
         classes: {
          invalid: this.opts.invalid,
          valid: this.opts.valid,
          validating: this.opts.validating,
         },
         element: i,
         field: e,
         iconElement: r,
        };
        this.core.emit('plugins.icon.placed', l),
         this.opts.onPlaced(l),
         this.icons.set(i, r);
       },
      },
      {
       key: 'onElementValidating',
       value: function (e) {
        var i,
         r = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((i = {}),
          h(i, this.opts.invalid, !1),
          h(i, this.opts.valid, !1),
          h(i, this.opts.validating, !0),
          i),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: r,
          status: 'Validating',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementValidated',
       value: function (e) {
        var i,
         r = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((i = {}),
          h(i, this.opts.invalid, !e.valid),
          h(i, this.opts.valid, e.valid),
          h(i, this.opts.validating, !1),
          i),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: r,
          status: e.valid ? 'Valid' : 'Invalid',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (e) {
        var i,
         r = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((i = {}),
          h(i, this.opts.invalid, !1),
          h(i, this.opts.valid, !1),
          h(i, this.opts.validating, !1),
          i),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: r,
          status: 'NotValidated',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'onElementIgnored',
       value: function (e) {
        var i,
         r = this.setClasses(
          e.field,
          e.element,
          e.elements,
          ((i = {}),
          h(i, this.opts.invalid, !1),
          h(i, this.opts.valid, !1),
          h(i, this.opts.validating, !1),
          i),
         ),
         l = {
          element: e.element,
          field: e.field,
          iconElement: r,
          status: 'Ignored',
         };
        this.core.emit('plugins.icon.set', l), this.opts.onSet(l);
       },
      },
      {
       key: 'setClasses',
       value: function (e, i, r, l) {
        var o = i.getAttribute('type'),
         d = o === 'radio' || o === 'checkbox' ? r[0] : i;
        if (this.icons.has(d)) {
         var u = this.icons.get(d);
         return g(u, l), u;
        } else return null;
       },
      },
     ]),
     t
    );
   })(F),
   _e = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.invalidFields = new Map()),
      (e.opts = Object.assign({}, { enabled: !0 }, a)),
      (e.validatorHandler = e.onValidatorValidated.bind(v(e))),
      (e.shouldValidateFilter = e.shouldValidate.bind(v(e))),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(v(e))),
      (e.elementValidatingHandler = e.onElementValidating.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
       value: function (e, i, r, l) {
        var o =
         (this.opts.enabled === !0 || this.opts.enabled[e] === !0) &&
         this.invalidFields.has(i) &&
         !!this.invalidFields.get(i).length &&
         this.invalidFields.get(i).indexOf(l) === -1;
        return !o;
       },
      },
      {
       key: 'onValidatorValidated',
       value: function (e) {
        var i = this.invalidFields.has(e.element)
          ? this.invalidFields.get(e.element)
          : [],
         r = i.indexOf(e.validator);
        e.result.valid && r >= 0
         ? i.splice(r, 1)
         : !e.result.valid && r === -1 && i.push(e.validator),
         this.invalidFields.set(e.element, i);
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
        var i = this;
        e.forEach(function (r) {
         return i.invalidFields.delete(r);
        });
       },
      },
     ]),
     t
    );
   })(F),
   et = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.isFormValid = !1),
      (e.opts = Object.assign(
       {},
       {
        aspNetButton: !1,
        buttons: function (r) {
         return [].slice.call(
          r.querySelectorAll('[type="submit"]:not([formnovalidate])'),
         );
        },
       },
       a,
      )),
      (e.submitHandler = e.handleSubmitEvent.bind(v(e))),
      (e.buttonClickHandler = e.handleClickEvent.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
      {
       key: 'install',
       value: function () {
        var e = this;
        if (this.core.getFormElement() instanceof HTMLFormElement) {
         var i = this.core.getFormElement();
         (this.submitButtons = this.opts.buttons(i)),
          i.setAttribute('novalidate', 'novalidate'),
          i.addEventListener('submit', this.submitHandler),
          (this.hiddenClickedEle = document.createElement('input')),
          this.hiddenClickedEle.setAttribute('type', 'hidden'),
          i.appendChild(this.hiddenClickedEle),
          this.submitButtons.forEach(function (r) {
           r.addEventListener('click', e.buttonClickHandler);
          });
        }
       },
      },
      {
       key: 'uninstall',
       value: function () {
        var e = this,
         i = this.core.getFormElement();
        i instanceof HTMLFormElement &&
         i.removeEventListener('submit', this.submitHandler),
         this.submitButtons.forEach(function (r) {
          r.removeEventListener('click', e.buttonClickHandler);
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
        var i = e.currentTarget;
        if (
         i instanceof HTMLElement &&
         !(this.opts.aspNetButton && this.isFormValid === !0)
        ) {
         var r = this.core.getFormElement();
         r.removeEventListener('submit', this.submitHandler),
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
        var i = this;
        e.preventDefault(),
         this.core.validate().then(function (r) {
          r === 'Valid' &&
           i.opts.aspNetButton &&
           !i.isFormValid &&
           i.clickedButton &&
           ((i.isFormValid = !0),
           i.clickedButton.removeEventListener('click', i.buttonClickHandler),
           i.clickedButton.click());
         });
       },
      },
     ]),
     t
    );
   })(F),
   tt = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     return (
      y(this, t),
      (e = n.call(this, a)),
      (e.messages = new Map()),
      (e.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, a)),
      (e.iconPlacedHandler = e.onIconPlaced.bind(v(e))),
      (e.validatorValidatedHandler = e.onValidatorValidated.bind(v(e))),
      (e.elementValidatedHandler = e.onElementValidated.bind(v(e))),
      (e.documentClickHandler = e.onDocumentClicked.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
      {
       key: 'install',
       value: function () {
        (this.tip = document.createElement('div')),
         g(
          this.tip,
          h(
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
        var i = this;
        switch (
         (g(e.iconElement, { 'fv-plugins-tooltip-icon': !0 }),
         this.opts.trigger)
        ) {
         case 'hover':
          e.iconElement.addEventListener('mouseenter', function (r) {
           return i.show(e.element, r);
          }),
           e.iconElement.addEventListener('mouseleave', function (r) {
            return i.hide();
           });
          break;
         case 'click':
         default:
          e.iconElement.addEventListener('click', function (r) {
           return i.show(e.element, r);
          });
          break;
        }
       },
      },
      {
       key: 'onValidatorValidated',
       value: function (e) {
        if (!e.result.valid) {
         var i = e.elements,
          r = e.element.getAttribute('type'),
          l = r === 'radio' || r === 'checkbox' ? i[0] : e.element,
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
         var i = e.elements,
          r = e.element.getAttribute('type'),
          l = r === 'radio' || r === 'checkbox' ? i[0] : e.element;
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
       value: function (e, i) {
        if ((i.preventDefault(), i.stopPropagation(), !!this.messages.has(e))) {
         g(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
          (this.tip.innerHTML =
           '<div class="fv-plugins-tooltip__content">'.concat(
            this.messages.get(e),
            '</div>',
           ));
         var r = i.target,
          l = r.getBoundingClientRect(),
          o = this.tip.getBoundingClientRect(),
          d = o.height,
          u = o.width,
          c = 0,
          f = 0;
         switch (this.opts.placement) {
          case 'bottom':
           (c = l.top + l.height), (f = l.left + l.width / 2 - u / 2);
           break;
          case 'bottom-left':
           (c = l.top + l.height), (f = l.left);
           break;
          case 'bottom-right':
           (c = l.top + l.height), (f = l.left + l.width - u);
           break;
          case 'left':
           (c = l.top + l.height / 2 - d / 2), (f = l.left - u);
           break;
          case 'right':
           (c = l.top + l.height / 2 - d / 2), (f = l.left + l.width);
           break;
          case 'top-left':
           (c = l.top - d), (f = l.left);
           break;
          case 'top-right':
           (c = l.top - d), (f = l.left + l.width - u);
           break;
          case 'top':
          default:
           (c = l.top - d), (f = l.left + l.width / 2 - u / 2);
           break;
         }
         var m =
           window.pageYOffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop ||
           0,
          p =
           window.pageXOffset ||
           document.documentElement.scrollLeft ||
           document.body.scrollLeft ||
           0;
         (c = c + m),
          (f = f + p),
          this.tip.setAttribute(
           'style',
           'top: '.concat(c, 'px; left: ').concat(f, 'px'),
          );
        }
       },
      },
      {
       key: 'hide',
       value: function () {
        g(this.tip, { 'fv-plugins-tooltip--hide': !0 });
       },
      },
     ]),
     t
    );
   })(F),
   at = (function (s) {
    A(t, s);
    var n = I(t);
    function t(a) {
     var e;
     y(this, t),
      (e = n.call(this, a)),
      (e.handlers = []),
      (e.timers = new Map());
     var i = document.createElement('div');
     return (
      (e.defaultEvent = 'oninput' in i ? 'input' : 'keyup'),
      (e.opts = Object.assign(
       {},
       { delay: 0, event: e.defaultEvent, threshold: 0 },
       a,
      )),
      (e.fieldAddedHandler = e.onFieldAdded.bind(v(e))),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(v(e))),
      e
     );
    }
    return (
     E(t, [
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
       value: function (e, i) {
        var r = this;
        i.forEach(function (l) {
         var o = [];
         if (r.opts.event && r.opts.event[e] === !1) o = [];
         else if (
          r.opts.event &&
          r.opts.event[e] &&
          typeof r.opts.event[e] != 'function'
         )
          o = r.opts.event[e].split(' ');
         else if (
          typeof r.opts.event == 'string' &&
          r.opts.event !== r.defaultEvent
         )
          o = r.opts.event.split(' ');
         else {
          var d = l.getAttribute('type'),
           u = l.tagName.toLowerCase(),
           c =
            d === 'radio' || d === 'checkbox' || d === 'file' || u === 'select'
             ? 'change'
             : r.ieVersion >= 10 && l.getAttribute('placeholder')
               ? 'keyup'
               : r.defaultEvent;
          o = [c];
         }
         o.forEach(function (f) {
          var m = function (b) {
           return r.handleEvent(b, e, l);
          };
          r.handlers.push({ element: l, event: f, field: e, handler: m }),
           l.addEventListener(f, m);
         });
        });
       },
      },
      {
       key: 'handleEvent',
       value: function (e, i, r) {
        var l = this;
        if (
         this.exceedThreshold(i, r) &&
         this.core.executeFilter('plugins-trigger-should-validate', !0, [i, r])
        ) {
         var o = function () {
           return l.core.validateElement(i, r).then(function (f) {
            l.core.emit('plugins.trigger.executed', {
             element: r,
             event: e,
             field: i,
            });
           });
          },
          d = this.opts.delay[i] || this.opts.delay;
         if (d === 0) o();
         else {
          var u = this.timers.get(r);
          u && window.clearTimeout(u),
           this.timers.set(r, window.setTimeout(o, d * 1e3));
         }
        }
       },
      },
      {
       key: 'onFieldAdded',
       value: function (e) {
        this.handlers
         .filter(function (i) {
          return i.field === e.field;
         })
         .forEach(function (i) {
          return i.element.removeEventListener(i.event, i.handler);
         }),
         this.prepareHandler(e.field, e.elements);
       },
      },
      {
       key: 'onFieldRemoved',
       value: function (e) {
        this.handlers
         .filter(function (i) {
          return i.field === e.field && e.elements.indexOf(i.element) >= 0;
         })
         .forEach(function (i) {
          return i.element.removeEventListener(i.event, i.handler);
         });
       },
      },
      {
       key: 'exceedThreshold',
       value: function (e, i) {
        var r =
         this.opts.threshold[e] === 0 || this.opts.threshold === 0
          ? !1
          : this.opts.threshold[e] || this.opts.threshold;
        if (!r) return !0;
        var l = i.getAttribute('type');
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
        var o = this.core.getElementValue(e, i);
        return o.length >= r;
       },
      },
     ]),
     t
    );
   })(F),
   it = {
    Alias: ze,
    Aria: Be,
    Declarative: Ye,
    DefaultSubmit: qe,
    Dependency: Ue,
    Excluded: Ge,
    FieldStatus: Xe,
    Framework: We,
    Icon: Qe,
    Message: Z,
    Sequence: _e,
    SubmitButton: et,
    Tooltip: tt,
    Trigger: at,
   };
  function nt(s, n) {
   return s.classList
    ? s.classList.contains(n)
    : new RegExp('(^| )'.concat(n, '( |$)'), 'gi').test(s.className);
  }
  var rt = {
    call: U,
    classSet: g,
    closest: X,
    fetch: ie,
    format: k,
    hasClass: nt,
    isValidDate: ae,
   },
   lt = {};
  (V.Plugin = F),
   (V.algorithms = oe),
   (V.filters = De),
   (V.formValidation = $e),
   (V.locales = lt),
   (V.plugins = it),
   (V.utils = rt),
   (V.validators = G),
   Object.defineProperty(V, '__esModule', { value: !0 });
 });
});
export default ot();