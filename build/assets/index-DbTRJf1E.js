var dt = (l, o) => () => (o || l((o = { exports: {} }).exports, o), o.exports);
var bt = dt((I, m) => {
 (function (l, o) {
  typeof I == 'object' && typeof m < 'u'
   ? (m.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : ((l = typeof globalThis < 'u' ? globalThis : l || self),
       (l.FormValidation = l.FormValidation || {}),
       (l.FormValidation.validators = l.FormValidation.validators || {}),
       (l.FormValidation.validators.vat = o(l.FormValidation)));
 })(void 0, function (l) {
  function o(n) {
   var t = n.replace('-', '');
   if ((/^AR[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 10; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return (
    (e = 11 - (e % 11)),
    e === 11 && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.substr(10) }
   );
  }
  function $(n) {
   var t = n;
   if ((/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   t = t.substr(1);
   for (var r = [1, 2, 1, 2, 1, 2, 1], e = 0, a = 0, s = 0; s < 7; s++)
    (a = parseInt(t.charAt(s), 10) * r[s]),
     a > 9 && (a = Math.floor(a / 10) + (a % 10)),
     (e += a);
   return (
    (e = 10 - ((e + 4) % 10)),
    e === 10 && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.substr(7, 1) }
   );
  }
  function g(n) {
   var t = n;
   if (
    (/^BE[0]?[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0]?[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if ((t.length === 9 && (t = '0'.concat(t)), t.substr(1, 1) === '0'))
    return { meta: {}, valid: !1 };
   var r = parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10);
   return { meta: {}, valid: r % 97 === 0 };
  }
  var V = l.utils.isValidDate;
  function p(n) {
   var t = n;
   if (
    (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9,10}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = 0,
    e = 0;
   if (t.length === 9) {
    for (e = 0; e < 8; e++) r += parseInt(t.charAt(e), 10) * (e + 1);
    if (((r = r % 11), r === 10)) {
     for (r = 0, e = 0; e < 8; e++) r += parseInt(t.charAt(e), 10) * (e + 3);
     r = r % 11;
    }
    return (r = r % 10), { meta: {}, valid: ''.concat(r) === t.substr(8) };
   } else {
    var a = function (i) {
      var f = parseInt(i.substr(0, 2), 10) + 1900,
       u = parseInt(i.substr(2, 2), 10),
       c = parseInt(i.substr(4, 2), 10);
      if (
       (u > 40 ? ((f += 100), (u -= 40)) : u > 20 && ((f -= 100), (u -= 20)),
       !V(f, u, c))
      )
       return !1;
      for (var b = [2, 4, 8, 5, 10, 9, 7, 3, 6], d = 0, h = 0; h < 9; h++)
       d += parseInt(i.charAt(h), 10) * b[h];
      return (d = (d % 11) % 10), ''.concat(d) === i.substr(9, 1);
     },
     s = function (i) {
      for (var f = [21, 19, 17, 13, 11, 9, 7, 3, 1], u = 0, c = 0; c < 9; c++)
       u += parseInt(i.charAt(c), 10) * f[c];
      return (u = u % 10), ''.concat(u) === i.substr(9, 1);
     },
     v = function (i) {
      for (var f = [4, 3, 2, 7, 6, 5, 4, 3, 2], u = 0, c = 0; c < 9; c++)
       u += parseInt(i.charAt(c), 10) * f[c];
      return (
       (u = 11 - (u % 11)),
       u === 10 ? !1 : (u === 11 && (u = 0), ''.concat(u) === i.substr(9, 1))
      );
     };
    return { meta: {}, valid: a(t) || s(t) || v(t) };
   }
  }
  function k(n) {
   if (n === '') return { meta: {}, valid: !0 };
   var t = n.replace(/[^\d]+/g, '');
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
   var r = t.length - 2,
    e = t.substring(0, r),
    a = t.substring(r),
    s = 0,
    v = r - 7,
    i;
   for (i = r; i >= 1; i--)
    (s += parseInt(e.charAt(r - i), 10) * v--), v < 2 && (v = 9);
   var f = s % 11 < 2 ? 0 : 11 - (s % 11);
   if (f !== parseInt(a.charAt(0), 10)) return { meta: {}, valid: !1 };
   for (r = r + 1, e = t.substring(0, r), s = 0, v = r - 7, i = r; i >= 1; i--)
    (s += parseInt(e.charAt(r - i), 10) * v--), v < 2 && (v = 9);
   return (
    (f = s % 11 < 2 ? 0 : 11 - (s % 11)),
    { meta: {}, valid: f === parseInt(a.charAt(1), 10) }
   );
  }
  function E(n) {
   var t = n;
   if (
    (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t) && (t = t.substr(2)),
    !/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t))
   )
    return { meta: {}, valid: !1 };
   t = t.substr(1);
   for (var r = [5, 4, 3, 2, 7, 6, 5, 4], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return (
    (e = 11 - (e % 11)),
    e === 10
     ? { meta: {}, valid: !1 }
     : (e === 11 && (e = 0),
       { meta: {}, valid: ''.concat(e) === t.substr(8, 1) })
   );
  }
  function D(n) {
   var t = n;
   if (
    (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(t) && (t = t.substr(2)),
    !/^[0-5|9][0-9]{7}[A-Z]$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (t.substr(0, 2) === '12') return { meta: {}, valid: !1 };
   for (
    var r = 0,
     e = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 },
     a = 0;
    a < 8;
    a++
   ) {
    var s = parseInt(t.charAt(a), 10);
    a % 2 === 0 && (s = e[''.concat(s)]), (r += s);
   }
   return {
    meta: {},
    valid: ''.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[r % 26]) === t.substr(8, 1),
   };
  }
  var G = l.utils.isValidDate;
  function T(n) {
   var t = n;
   if (
    (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8,10}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = 0,
    e = 0;
   if (t.length === 8) {
    if (''.concat(t.charAt(0)) === '9') return { meta: {}, valid: !1 };
    for (r = 0, e = 0; e < 7; e++) r += parseInt(t.charAt(e), 10) * (8 - e);
    return (
     (r = 11 - (r % 11)),
     r === 10 && (r = 0),
     r === 11 && (r = 1),
     { meta: {}, valid: ''.concat(r) === t.substr(7, 1) }
    );
   } else if (t.length === 9 && ''.concat(t.charAt(0)) === '6') {
    for (r = 0, e = 0; e < 7; e++) r += parseInt(t.charAt(e + 1), 10) * (8 - e);
    return (
     (r = 11 - (r % 11)),
     r === 10 && (r = 0),
     r === 11 && (r = 1),
     (r = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][r - 1]),
     { meta: {}, valid: ''.concat(r) === t.substr(8, 1) }
    );
   } else if (t.length === 9 || t.length === 10) {
    var a = 1900 + parseInt(t.substr(0, 2), 10),
     s = (parseInt(t.substr(2, 2), 10) % 50) % 20,
     v = parseInt(t.substr(4, 2), 10);
    if (t.length === 9) {
     if ((a >= 1980 && (a -= 100), a > 1953)) return { meta: {}, valid: !1 };
    } else a < 1954 && (a += 100);
    if (!G(a, s, v)) return { meta: {}, valid: !1 };
    if (t.length === 10) {
     var i = parseInt(t.substr(0, 9), 10) % 11;
     return (
      a < 1985 && (i = i % 10),
      { meta: {}, valid: ''.concat(i) === t.substr(9, 1) }
     );
    }
    return { meta: {}, valid: !0 };
   }
   return { meta: {}, valid: !1 };
  }
  var R = l.algorithms.mod11And10;
  function Z(n) {
   var t = n;
   return (
    /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)),
    /^[1-9][0-9]{8}$/.test(t)
     ? { meta: {}, valid: R(t) }
     : { meta: {}, valid: !1 }
   );
  }
  function C(n) {
   var t = n;
   if ((/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = 0, e = [2, 7, 6, 5, 4, 3, 2, 1], a = 0; a < 8; a++)
    r += parseInt(t.charAt(a), 10) * e[a];
   return { meta: {}, valid: r % 11 === 0 };
  }
  function S(n) {
   var t = n;
   if ((/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = 0, e = [3, 7, 1, 3, 7, 1, 3, 7, 1], a = 0; a < 9; a++)
    r += parseInt(t.charAt(a), 10) * e[a];
   return { meta: {}, valid: r % 10 === 0 };
  }
  function B(n) {
   var t = n;
   if (
    (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)),
    !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = function (v) {
     var i = parseInt(v.substr(0, 8), 10);
     return ''.concat('TRWAGMYFPDXBNJZSQVHLCKE'[i % 23]) === v.substr(8, 1);
    },
    e = function (v) {
     var i = ['XYZ'.indexOf(v.charAt(0)), v.substr(1)].join(''),
      f = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(i, 10) % 23];
     return ''.concat(f) === v.substr(8, 1);
    },
    a = function (v) {
     var i = v.charAt(0),
      f;
     if ('KLM'.indexOf(i) !== -1)
      return (
       (f = parseInt(v.substr(1, 8), 10)),
       (f = 'TRWAGMYFPDXBNJZSQVHLCKE'[f % 23]),
       ''.concat(f) === v.substr(8, 1)
      );
     if ('ABCDEFGHJNPQRSUVW'.indexOf(i) !== -1) {
      for (var u = [2, 1, 2, 1, 2, 1, 2], c = 0, b = 0, d = 0; d < 7; d++)
       (b = parseInt(v.charAt(d + 1), 10) * u[d]),
        b > 9 && (b = Math.floor(b / 10) + (b % 10)),
        (c += b);
      return (
       (c = 10 - (c % 10)),
       c === 10 && (c = 0),
       ''.concat(c) === v.substr(8, 1) || 'JABCDEFGHI'[c] === v.substr(8, 1)
      );
     }
     return !1;
    },
    s = t.charAt(0);
   return /^[0-9]$/.test(s)
    ? { meta: { type: 'DNI' }, valid: r(t) }
    : /^[XYZ]$/.test(s)
      ? { meta: { type: 'NIE' }, valid: e(t) }
      : { meta: { type: 'CIF' }, valid: a(t) };
  }
  function H(n) {
   var t = n;
   if ((/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [7, 9, 10, 5, 8, 4, 2, 1], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return { meta: {}, valid: e % 11 === 0 };
  }
  var L = l.algorithms.luhn;
  function w(n) {
   var t = n;
   if (
    (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)),
    !/^[0-9A-Z]{2}[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (t.substr(2, 4) !== '000') return { meta: {}, valid: L(t.substr(2)) };
   if (/^[0-9]{2}$/.test(t.substr(0, 2)))
    return {
     meta: {},
     valid: t.substr(0, 2) === ''.concat(parseInt(t.substr(2) + '12', 10) % 97),
    };
   var r = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
    e = void 0;
   return (
    /^[0-9]$/.test(t.charAt(0))
     ? (e = r.indexOf(t.charAt(0)) * 24 + r.indexOf(t.charAt(1)) - 10)
     : (e = r.indexOf(t.charAt(0)) * 34 + r.indexOf(t.charAt(1)) - 100),
    {
     meta: {},
     valid:
      (parseInt(t.substr(2), 10) + 1 + Math.floor(e / 11)) % 11 === e % 11,
    }
   );
  }
  function O(n) {
   var t = n;
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
   var r = t.length;
   if (r === 5) {
    var e = t.substr(0, 2),
     a = parseInt(t.substr(2), 10);
    return {
     meta: {},
     valid: (e === 'GD' && a < 500) || (e === 'HA' && a >= 500),
    };
   } else {
    if (
     r === 11 &&
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
    if (r === 9 || r === 12) {
     for (var s = [8, 7, 6, 5, 4, 3, 2, 10, 1], v = 0, i = 0; i < 9; i++)
      v += parseInt(t.charAt(i), 10) * s[i];
     v = v % 97;
     var f =
      parseInt(t.substr(0, 3), 10) >= 100
       ? v === 0 || v === 42 || v === 55
       : v === 0;
     return { meta: {}, valid: f };
    }
   }
   return { meta: {}, valid: !0 };
  }
  function A(n) {
   var t = n;
   if (
    (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   t.length === 8 && (t = '0'.concat(t));
   for (var r = [256, 128, 64, 32, 16, 8, 4, 2], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return (
    (e = (e % 11) % 10), { meta: {}, valid: ''.concat(e) === t.substr(8, 1) }
   );
  }
  var F = l.algorithms.mod11And10;
  function U(n) {
   var t = n;
   return (
    /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)),
    /^[0-9]{11}$/.test(t) ? { meta: {}, valid: F(t) } : { meta: {}, valid: !1 }
   );
  }
  function P(n) {
   var t = n;
   if ((/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [9, 7, 3, 1, 9, 7, 3, 1], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return { meta: {}, valid: e % 10 === 0 };
  }
  function N(n) {
   var t = n;
   if (
    (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)),
    !/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = function (e) {
    for (var a = e; a.length < 7; ) a = '0'.concat(a);
    for (var s = 'WABCDEFGHIJKLMNOPQRSTUV', v = 0, i = 0; i < 7; i++)
     v += parseInt(a.charAt(i), 10) * (8 - i);
    return (v += 9 * s.indexOf(a.substr(7))), s[v % 23];
   };
   return /^[0-9]+$/.test(t.substr(0, 7))
    ? {
       meta: {},
       valid: t.charAt(7) === r(''.concat(t.substr(0, 7)).concat(t.substr(8))),
      }
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(t.charAt(1)) !== -1
      ? {
         meta: {},
         valid:
          t.charAt(7) === r(''.concat(t.substr(2, 5)).concat(t.substr(0, 1))),
        }
      : { meta: {}, valid: !0 };
  }
  function M(n) {
   var t = n;
   return (
    /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)),
    { meta: {}, valid: /^[0-9]{5,6}$/.test(t) }
   );
  }
  var J = l.algorithms.luhn;
  function K(n) {
   var t = n;
   if ((/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   if (parseInt(t.substr(0, 7), 10) === 0) return { meta: {}, valid: !1 };
   var r = parseInt(t.substr(7, 3), 10);
   return r < 1 || (r > 201 && r !== 999 && r !== 888)
    ? { meta: {}, valid: !1 }
    : { meta: {}, valid: J(t) };
  }
  function x(n) {
   var t = n;
   if (
    (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t) && (t = t.substr(2)),
    !/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = t.length,
    e = 0,
    a;
   for (a = 0; a < r - 1; a++) e += parseInt(t.charAt(a), 10) * (1 + (a % 9));
   var s = e % 11;
   if (s === 10)
    for (e = 0, a = 0; a < r - 1; a++)
     e += parseInt(t.charAt(a), 10) * (1 + ((a + 2) % 9));
   return (
    (s = (s % 11) % 10), { meta: {}, valid: ''.concat(s) === t.charAt(r - 1) }
   );
  }
  function Y(n) {
   var t = n;
   return (
    /^LU[0-9]{8}$/.test(t) && (t = t.substring(2)),
    /^[0-9]{8}$/.test(t)
     ? {
        meta: {},
        valid:
         parseInt(t.substring(0, 6), 10) % 89 ===
         parseInt(t.substring(6, 8), 10),
       }
     : { meta: {}, valid: !1 }
   );
  }
  var W = l.utils.isValidDate;
  function y(n) {
   var t = n;
   if ((/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t)))
    return { meta: {}, valid: !1 };
   var r = parseInt(t.charAt(0), 10),
    e = t.length,
    a = 0,
    s = [],
    v;
   if (r > 3) {
    for (a = 0, s = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], v = 0; v < e; v++)
     a += parseInt(t.charAt(v), 10) * s[v];
    return (a = a % 11), { meta: {}, valid: a === 3 };
   } else {
    var i = parseInt(t.substr(0, 2), 10),
     f = parseInt(t.substr(2, 2), 10),
     u = parseInt(t.substr(4, 2), 10);
    if (((u = u + 1800 + parseInt(t.charAt(6), 10) * 100), !W(u, f, i)))
     return { meta: {}, valid: !1 };
    for (a = 0, s = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], v = 0; v < e - 1; v++)
     a += parseInt(t.charAt(v), 10) * s[v];
    return (
     (a = ((a + 1) % 11) % 10),
     { meta: {}, valid: ''.concat(a) === t.charAt(e - 1) }
    );
   }
  }
  function Q(n) {
   var t = n;
   if ((/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [3, 4, 6, 7, 8, 9, 10, 1], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return { meta: {}, valid: e % 37 === 0 };
  }
  var X = l.algorithms.mod97And10;
  function z(n) {
   if (n.length < 8) return { meta: {}, valid: !1 };
   var t = n;
   if (
    (t.length === 8 && (t = '0'.concat(t)),
    !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   if (((t = t.replace(/\./g, '')), parseInt(t, 10) === 0))
    return { meta: {}, valid: !1 };
   for (var r = 0, e = t.length, a = 0; a < e - 1; a++)
    r += (9 - a) * parseInt(t.charAt(a), 10);
   return (
    (r = r % 11),
    r === 10 && (r = 0),
    { meta: {}, valid: ''.concat(r) === t.charAt(e - 1) }
   );
  }
  function q(n) {
   var t = n;
   if (
    (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)),
    !/^[0-9]{9}B[0-9]{2}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = t.substr(0, 9);
   return { meta: {}, valid: z(r).valid || X('NL'.concat(t)) };
  }
  function _(n) {
   var t = n;
   if ((/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [3, 2, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return (
    (e = 11 - (e % 11)),
    e === 11 && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.substr(8, 1) }
   );
  }
  function j(n) {
   var t = n;
   if ((/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], e = 0, a = 0; a < 10; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return { meta: {}, valid: e % 11 === 0 };
  }
  function tt(n) {
   var t = n;
   if ((/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = [9, 8, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 8; a++)
    e += parseInt(t.charAt(a), 10) * r[a];
   return (
    (e = 11 - (e % 11)),
    e > 9 && (e = 0),
    { meta: {}, valid: ''.concat(e) === t.substr(8, 1) }
   );
  }
  function rt(n) {
   var t = n;
   if (
    (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)),
    !/^[1-9][0-9]{1,9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   for (
    var r = t.length,
     e = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - r),
     a = 0,
     s = 0;
    s < r - 1;
    s++
   )
    a += parseInt(t.charAt(s), 10) * e[s];
   return (
    (a = ((10 * a) % 11) % 10),
    { meta: {}, valid: ''.concat(a) === t.substr(r - 1, 1) }
   );
  }
  function at(n) {
   var t = n;
   if ((/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)))
    return { meta: {}, valid: !1 };
   for (var r = 10, e = 0, a = 0; a < 8; a++)
    (e = (parseInt(t.charAt(a), 10) + r) % 10),
     e === 0 && (e = 10),
     (r = (2 * e) % 11);
   return { meta: {}, valid: (r + parseInt(t.substr(8, 1), 10)) % 10 === 1 };
  }
  function et(n) {
   var t = n;
   if (
    (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)),
    !/^([0-9]{10}|[0-9]{12})$/.test(t))
   )
    return { meta: {}, valid: !1 };
   var r = 0;
   if (t.length === 10) {
    var e = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     a = 0;
    for (r = 0; r < 10; r++) a += parseInt(t.charAt(r), 10) * e[r];
    return (
     (a = a % 11),
     a > 9 && (a = a % 10),
     { meta: {}, valid: ''.concat(a) === t.substr(9, 1) }
    );
   } else if (t.length === 12) {
    var s = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     v = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
     i = 0,
     f = 0;
    for (r = 0; r < 11; r++)
     (i += parseInt(t.charAt(r), 10) * s[r]),
      (f += parseInt(t.charAt(r), 10) * v[r]);
    return (
     (i = i % 11),
     i > 9 && (i = i % 10),
     (f = f % 11),
     f > 9 && (f = f % 10),
     {
      meta: {},
      valid:
       ''.concat(i) === t.substr(10, 1) && ''.concat(f) === t.substr(11, 1),
     }
    );
   }
   return { meta: {}, valid: !0 };
  }
  var st = l.algorithms.luhn;
  function nt(n) {
   var t = n;
   return (
    /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)),
    /^[0-9]{10}01$/.test(t)
     ? ((t = t.substr(0, 10)), { meta: {}, valid: st(t) })
     : { meta: {}, valid: !1 }
   );
  }
  function vt(n) {
   var t = n.match(/^(SI)?([1-9][0-9]{7})$/);
   if (!t) return { meta: {}, valid: !1 };
   for (
    var r = t[1] ? n.substr(2) : n, e = [8, 7, 6, 5, 4, 3, 2], a = 0, s = 0;
    s < 7;
    s++
   )
    a += parseInt(r.charAt(s), 10) * e[s];
   return (
    (a = 11 - (a % 11)),
    a === 10 && (a = 0),
    { meta: {}, valid: ''.concat(a) === r.substr(7, 1) }
   );
  }
  function it(n) {
   var t = n;
   return (
    /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)),
    /^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)
     ? { meta: {}, valid: parseInt(t, 10) % 11 === 0 }
     : { meta: {}, valid: !1 }
   );
  }
  function ft(n) {
   var t = n;
   if (
    (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)),
    !/^[VEJPG][0-9]{9}$/.test(t))
   )
    return { meta: {}, valid: !1 };
   for (
    var r = { E: 8, G: 20, J: 12, P: 16, V: 4 },
     e = [3, 2, 7, 6, 5, 4, 3, 2],
     a = r[t.charAt(0)],
     s = 0;
    s < 8;
    s++
   )
    a += parseInt(t.charAt(s + 1), 10) * e[s];
   return (
    (a = 11 - (a % 11)),
    (a === 11 || a === 10) && (a = 0),
    { meta: {}, valid: ''.concat(a) === t.substr(9, 1) }
   );
  }
  function ut(n) {
   var t = n;
   return (
    /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)),
    { meta: {}, valid: /^4[0-9]{9}$/.test(t) }
   );
  }
  var lt = l.utils.format,
   ct = l.utils.removeUndefined;
  function ot() {
   var n = [
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
    validate: function (t) {
     var r = t.value;
     if (r === '') return { valid: !0 };
     var e = Object.assign({}, { message: '' }, ct(t.options)),
      a = r.substr(0, 2);
     if (
      (typeof e.country == 'function'
       ? (a = e.country.call(this))
       : (a = e.country),
      n.indexOf(a) === -1)
     )
      return { valid: !0 };
     var s = { meta: {}, valid: !0 };
     switch (a.toLowerCase()) {
      case 'ar':
       s = o(r);
       break;
      case 'at':
       s = $(r);
       break;
      case 'be':
       s = g(r);
       break;
      case 'bg':
       s = p(r);
       break;
      case 'br':
       s = k(r);
       break;
      case 'ch':
       s = E(r);
       break;
      case 'cy':
       s = D(r);
       break;
      case 'cz':
       s = T(r);
       break;
      case 'de':
       s = Z(r);
       break;
      case 'dk':
       s = C(r);
       break;
      case 'ee':
       s = S(r);
       break;
      case 'el':
       s = A(r);
       break;
      case 'es':
       s = B(r);
       break;
      case 'fi':
       s = H(r);
       break;
      case 'fr':
       s = w(r);
       break;
      case 'gb':
       s = O(r);
       break;
      case 'gr':
       s = A(r);
       break;
      case 'hr':
       s = U(r);
       break;
      case 'hu':
       s = P(r);
       break;
      case 'ie':
       s = N(r);
       break;
      case 'is':
       s = M(r);
       break;
      case 'it':
       s = K(r);
       break;
      case 'lt':
       s = x(r);
       break;
      case 'lu':
       s = Y(r);
       break;
      case 'lv':
       s = y(r);
       break;
      case 'mt':
       s = Q(r);
       break;
      case 'nl':
       s = q(r);
       break;
      case 'no':
       s = _(r);
       break;
      case 'pl':
       s = j(r);
       break;
      case 'pt':
       s = tt(r);
       break;
      case 'ro':
       s = rt(r);
       break;
      case 'rs':
       s = at(r);
       break;
      case 'ru':
       s = et(r);
       break;
      case 'se':
       s = nt(r);
       break;
      case 'si':
       s = vt(r);
       break;
      case 'sk':
       s = it(r);
       break;
      case 've':
       s = ft(r);
       break;
      case 'za':
       s = ut(r);
       break;
     }
     var v = lt(
      t.l10n && t.l10n.vat ? e.message || t.l10n.vat.country : e.message,
      t.l10n && t.l10n.vat && t.l10n.vat.countries
       ? t.l10n.vat.countries[a.toUpperCase()]
       : a.toUpperCase(),
     );
     return Object.assign({}, { message: v }, s);
    },
   };
  }
  return ot;
 });
});
export default bt();
