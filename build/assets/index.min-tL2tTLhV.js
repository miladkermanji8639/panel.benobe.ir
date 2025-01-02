var j = (v, m) => () => (m || v((m = { exports: {} }).exports, m), m.exports);
var z = j((M, $) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-id
  * @version 2.4.0
  */ (function (v, m) {
  typeof M == 'object' && typeof $ < 'u'
   ? ($.exports = m(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], m)
     : (((v = typeof globalThis < 'u' ? globalThis : v || self).FormValidation =
        v.FormValidation || {}),
       (v.FormValidation.validators = v.FormValidation.validators || {}),
       (v.FormValidation.validators.id = m(v.FormValidation)));
 })(void 0, function (v) {
  function m(d, s) {
   if (!/^\d{13}$/.test(d)) return !1;
   var I = parseInt(d.substr(0, 2), 10),
    O = parseInt(d.substr(2, 2), 10),
    A = parseInt(d.substr(7, 2), 10),
    p = parseInt(d.substr(12, 1), 10);
   if (I > 31 || O > 12) return !1;
   for (var c = 0, b = 0; b < 6; b++)
    c += (7 - b) * (parseInt(d.charAt(b), 10) + parseInt(d.charAt(b + 6), 10));
   if ((((c = 11 - (c % 11)) !== 10 && c !== 11) || (c = 0), c !== p))
    return !1;
   switch (s.toUpperCase()) {
    case 'BA':
     return 10 <= A && A <= 19;
    case 'MK':
     return 41 <= A && A <= 49;
    case 'ME':
     return 20 <= A && A <= 29;
    case 'RS':
     return 70 <= A && A <= 99;
    case 'SI':
     return 50 <= A && A <= 59;
    default:
     return !0;
   }
  }
  var V = v.utils.isValidDate,
   D = v.utils.isValidDate,
   L = v.utils.isValidDate;
  function U(d) {
   if (!/^\d{9,10}$/.test(d)) return { meta: {}, valid: !1 };
   var s = 1900 + parseInt(d.substr(0, 2), 10),
    I = (parseInt(d.substr(2, 2), 10) % 50) % 20,
    O = parseInt(d.substr(4, 2), 10);
   if (d.length === 9) {
    if ((s >= 1980 && (s -= 100), s > 1953)) return { meta: {}, valid: !1 };
   } else s < 1954 && (s += 100);
   if (!L(s, I, O)) return { meta: {}, valid: !1 };
   if (d.length === 10) {
    var A = parseInt(d.substr(0, 9), 10) % 11;
    return (
     s < 1985 && (A %= 10), { meta: {}, valid: ''.concat(A) === d.substr(9, 1) }
    );
   }
   return { meta: {}, valid: !0 };
  }
  var T = v.utils.isValidDate,
   S = v.utils.isValidDate,
   N = v.algorithms.mod11And10,
   R = v.algorithms.verhoeff,
   B = v.algorithms.luhn,
   G = v.utils.isValidDate,
   P = v.utils.isValidDate,
   J = v.utils.isValidDate;
  function F(d) {
   if (!/^[0-9]{11}$/.test(d)) return { meta: {}, valid: !1 };
   var s = parseInt(d.charAt(0), 10),
    I = parseInt(d.substr(1, 2), 10),
    O = parseInt(d.substr(3, 2), 10),
    A = parseInt(d.substr(5, 2), 10);
   if (
    !J((I = 100 * (s % 2 == 0 ? 17 + s / 2 : 17 + (s + 1) / 2) + I), O, A, !0)
   )
    return { meta: {}, valid: !1 };
   var p,
    c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    b = 0;
   for (p = 0; p < 10; p++) b += parseInt(d.charAt(p), 10) * c[p];
   if ((b %= 11) !== 10)
    return { meta: {}, valid: ''.concat(b) === d.charAt(10) };
   for (b = 0, c = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], p = 0; p < 10; p++)
    b += parseInt(d.charAt(p), 10) * c[p];
   return (
    (b %= 11) === 10 && (b = 0),
    { meta: {}, valid: ''.concat(b) === d.charAt(10) }
   );
  }
  var H = v.utils.isValidDate,
   Z = v.utils.isValidDate,
   K = v.utils.isValidDate,
   x = v.utils.isValidDate,
   y = v.algorithms.luhn,
   Y = v.utils.isValidDate,
   W = v.algorithms.luhn,
   X = v.utils.isValidDate,
   Q = v.utils.format,
   w = v.utils.removeUndefined;
  return function () {
   var d = [
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
    validate: function (s) {
     if (s.value === '') return { valid: !0 };
     var I = Object.assign({}, { message: '' }, w(s.options)),
      O = s.value.substr(0, 2);
     if (
      ((O = typeof I.country == 'function' ? I.country.call(this) : I.country),
      d.indexOf(O) === -1)
     )
      return { valid: !0 };
     var A,
      p,
      c = { meta: {}, valid: !0 };
     switch (O.toLowerCase()) {
      case 'ar':
       (A = s.value),
        (p = A.replace(/\./g, '')),
        (c = { meta: {}, valid: /^\d{7,8}$/.test(p) });
       break;
      case 'ba':
       c = (function (r) {
        return { meta: {}, valid: m(r, 'BA') };
       })(s.value);
       break;
      case 'bg':
       c = (function (r) {
        if (!/^\d{10}$/.test(r) && !/^\d{6}\s\d{3}\s\d{1}$/.test(r))
         return { meta: {}, valid: !1 };
        var t = r.replace(/\s/g, ''),
         e = parseInt(t.substr(0, 2), 10) + 1900,
         a = parseInt(t.substr(2, 2), 10),
         n = parseInt(t.substr(4, 2), 10);
        if (
         (a > 40 ? ((e += 100), (a -= 40)) : a > 20 && ((e -= 100), (a -= 20)),
         !V(e, a, n))
        )
         return { meta: {}, valid: !1 };
        for (var i = 0, u = [2, 4, 8, 5, 10, 9, 7, 3, 6], l = 0; l < 9; l++)
         i += parseInt(t.charAt(l), 10) * u[l];
        return {
         meta: {},
         valid: ''.concat((i = (i % 11) % 10)) === t.substr(9, 1),
        };
       })(s.value);
       break;
      case 'br':
       c = (function (r) {
        var t = r.replace(/\D/g, '');
        if (
         !/^\d{11}$/.test(t) ||
         /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)
        )
         return { meta: {}, valid: !1 };
        var e,
         a = 0;
        for (e = 0; e < 9; e++) a += (10 - e) * parseInt(t.charAt(e), 10);
        if (
         (((a = 11 - (a % 11)) != 10 && a !== 11) || (a = 0),
         ''.concat(a) !== t.charAt(9))
        )
         return { meta: {}, valid: !1 };
        var n = 0;
        for (e = 0; e < 10; e++) n += (11 - e) * parseInt(t.charAt(e), 10);
        return (
         ((n = 11 - (n % 11)) != 10 && n !== 11) || (n = 0),
         { meta: {}, valid: ''.concat(n) === t.charAt(10) }
        );
       })(s.value);
       break;
      case 'ch':
       c = (function (r) {
        if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(r))
         return { meta: {}, valid: !1 };
        for (
         var t = r.replace(/\D/g, '').substr(3),
          e = t.length,
          a = e === 8 ? [3, 1] : [1, 3],
          n = 0,
          i = 0;
         i < e - 1;
         i++
        )
         n += parseInt(t.charAt(i), 10) * a[i % 2];
        return {
         meta: {},
         valid: ''.concat((n = 10 - (n % 10))) === t.charAt(e - 1),
        };
       })(s.value);
       break;
      case 'cl':
       c = (function (r) {
        if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(r)) return { meta: {}, valid: !1 };
        for (var t = r.replace(/-/g, ''); t.length < 9; ) t = '0'.concat(t);
        for (var e = [3, 2, 7, 6, 5, 4, 3, 2], a = 0, n = 0; n < 8; n++)
         a += parseInt(t.charAt(n), 10) * e[n];
        var i = ''.concat((a = 11 - (a % 11)));
        return (
         a === 11 ? (i = '0') : a === 10 && (i = 'K'),
         { meta: {}, valid: i === t.charAt(8).toUpperCase() }
        );
       })(s.value);
       break;
      case 'cn':
       c = (function (r) {
        var t = r.trim();
        if (!/^\d{15}$/.test(t) && !/^\d{17}[\dXx]{1}$/.test(t))
         return { meta: {}, valid: !1 };
        var e = {
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
          50: {
           0: [0],
           1: [[0, 19]],
           2: [0, [22, 38], [40, 43]],
           3: [0, [81, 84]],
          },
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
         a = parseInt(t.substr(0, 2), 10),
         n = parseInt(t.substr(2, 2), 10),
         i = parseInt(t.substr(4, 2), 10);
        if (!e[a] || !e[a][n]) return { meta: {}, valid: !1 };
        var u,
         l,
         f = !1,
         o = e[a][n];
        for (u = 0; u < o.length; u++)
         if (
          (Array.isArray(o[u]) && o[u][0] <= i && i <= o[u][1]) ||
          (!Array.isArray(o[u]) && i === o[u])
         ) {
          f = !0;
          break;
         }
        if (!f) return { meta: {}, valid: !1 };
        l = t.length === 18 ? t.substr(6, 8) : '19'.concat(t.substr(6, 6));
        var h = parseInt(l.substr(0, 4), 10),
         k = parseInt(l.substr(4, 2), 10),
         g = parseInt(l.substr(6, 2), 10);
        if (!D(h, k, g)) return { meta: {}, valid: !1 };
        if (t.length === 18) {
         var C = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
          E = 0;
         for (u = 0; u < 17; u++) E += parseInt(t.charAt(u), 10) * C[u];
         return (
          (E = (12 - (E % 11)) % 11),
          {
           meta: {},
           valid:
            (t.charAt(17).toUpperCase() !== 'X'
             ? parseInt(t.charAt(17), 10)
             : 10) === E,
          }
         );
        }
        return { meta: {}, valid: !0 };
       })(s.value);
       break;
      case 'co':
       c = (function (r) {
        var t = r.replace(/\./g, '').replace('-', '');
        if (!/^\d{8,16}$/.test(t)) return { meta: {}, valid: !1 };
        for (
         var e = t.length,
          a = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
          n = 0,
          i = e - 2;
         i >= 0;
         i--
        )
         n += parseInt(t.charAt(i), 10) * a[i];
        return (
         (n %= 11) >= 2 && (n = 11 - n),
         { meta: {}, valid: ''.concat(n) === t.substr(e - 1) }
        );
       })(s.value);
       break;
      case 'cz':
      case 'sk':
       c = U(s.value);
       break;
      case 'dk':
       c = (function (r) {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(r))
         return { meta: {}, valid: !1 };
        var t = r.replace(/-/g, ''),
         e = parseInt(t.substr(0, 2), 10),
         a = parseInt(t.substr(2, 2), 10),
         n = parseInt(t.substr(4, 2), 10);
        switch (!0) {
         case '5678'.indexOf(t.charAt(6)) !== -1 && n >= 58:
          n += 1800;
          break;
         case '0123'.indexOf(t.charAt(6)) !== -1:
         case '49'.indexOf(t.charAt(6)) !== -1 && n >= 37:
          n += 1900;
          break;
         default:
          n += 2e3;
        }
        return { meta: {}, valid: T(n, a, e) };
       })(s.value);
       break;
      case 'ee':
      case 'lt':
       c = F(s.value);
       break;
      case 'es':
       c = (function (r) {
        var t = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(r),
         e = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(r),
         a = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(r);
        if (!t && !e && !a) return { meta: {}, valid: !1 };
        var n,
         i,
         u = r.replace(/-/g, '');
        if (t || e) {
         i = 'DNI';
         var l = 'XYZ'.indexOf(u.charAt(0));
         return (
          l !== -1 && ((u = l + u.substr(1) + ''), (i = 'NIE')),
          {
           meta: { type: i },
           valid:
            (n = 'TRWAGMYFPDXBNJZSQVHLCKE'[
             (n = parseInt(u.substr(0, 8), 10)) % 23
            ]) === u.substr(8, 1),
          }
         );
        }
        (n = u.substr(1, 7)), (i = 'CIF');
        for (var f = u[0], o = u.substr(-1), h = 0, k = 0; k < n.length; k++)
         if (k % 2 != 0) h += parseInt(n[k], 10);
         else {
          var g = '' + 2 * parseInt(n[k], 10);
          (h += parseInt(g[0], 10)),
           g.length === 2 && (h += parseInt(g[1], 10));
         }
        var C = h - 10 * Math.floor(h / 10);
        return (
         C !== 0 && (C = 10 - C),
         {
          meta: { type: i },
          valid:
           'KQS'.indexOf(f) !== -1
            ? o === 'JABCDEFGHI'[C]
            : 'ABEH'.indexOf(f) !== -1
              ? o === '' + C
              : o === '' + C || o === 'JABCDEFGHI'[C],
         }
        );
       })(s.value);
       break;
      case 'fi':
       c = (function (r) {
        if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(r))
         return { meta: {}, valid: !1 };
        var t = parseInt(r.substr(0, 2), 10),
         e = parseInt(r.substr(2, 2), 10),
         a = parseInt(r.substr(4, 2), 10);
        if (
         ((a = { '+': 1800, '-': 1900, A: 2e3 }[r.charAt(6)] + a), !S(a, e, t))
        )
         return { meta: {}, valid: !1 };
        if (parseInt(r.substr(7, 3), 10) < 2) return { meta: {}, valid: !1 };
        var n = parseInt(r.substr(0, 6) + r.substr(7, 3) + '', 10);
        return {
         meta: {},
         valid:
          '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === r.charAt(10),
        };
       })(s.value);
       break;
      case 'fr':
       c = (function (r) {
        var t = r.toUpperCase();
        if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(t))
         return { meta: {}, valid: !1 };
        var e = t.substr(5, 2);
        switch (!0) {
         case /^\d{2}$/.test(e):
          t = r;
          break;
         case e === '2A':
          t = ''.concat(r.substr(0, 5), '19').concat(r.substr(7));
          break;
         case e === '2B':
          t = ''.concat(r.substr(0, 5), '18').concat(r.substr(7));
          break;
         default:
          return { meta: {}, valid: !1 };
        }
        var a = 97 - (parseInt(t.substr(0, 13), 10) % 97);
        return {
         meta: {},
         valid: (a < 10 ? '0'.concat(a) : ''.concat(a)) === t.substr(13),
        };
       })(s.value);
       break;
      case 'hk':
       c = (function (r) {
        var t = r.toUpperCase();
        if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(t))
         return { meta: {}, valid: !1 };
        var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
         a = t.charAt(0),
         n = t.charAt(1),
         i = 0,
         u = t;
        /^[A-Z]$/.test(n)
         ? ((i += 9 * (10 + e.indexOf(a))),
           (i += 8 * (10 + e.indexOf(n))),
           (u = t.substr(2)))
         : ((i += 324), (i += 8 * (10 + e.indexOf(a))), (u = t.substr(1)));
        for (var l = u.length, f = 0; f < l - 1; f++)
         i += (7 - f) * parseInt(u.charAt(f), 10);
        var o = i % 11;
        return {
         meta: {},
         valid:
          (o === 0 ? '0' : 11 - o == 10 ? 'A' : ''.concat(11 - o)) ===
          u.charAt(l - 1),
        };
       })(s.value);
       break;
      case 'hr':
       c = (function (r) {
        return { meta: {}, valid: /^[0-9]{11}$/.test(r) && N(r) };
       })(s.value);
       break;
      case 'id':
       c = (function (r) {
        if (!/^[2-9]\d{11}$/.test(r)) return { meta: {}, valid: !1 };
        var t = r.split('').map(function (e) {
         return parseInt(e, 10);
        });
        return { meta: {}, valid: R(t) };
       })(s.value);
       break;
      case 'ie':
       c = (function (r) {
        if (!/^\d{7}[A-W][AHWTX]?$/.test(r)) return { meta: {}, valid: !1 };
        var t = function (e) {
         for (var a = e; a.length < 7; ) a = '0'.concat(a);
         for (var n = 'WABCDEFGHIJKLMNOPQRSTUV', i = 0, u = 0; u < 7; u++)
          i += parseInt(a.charAt(u), 10) * (8 - u);
         return (i += 9 * n.indexOf(a.substr(7))), n[i % 23];
        };
        return {
         meta: {},
         valid:
          r.length !== 9 || (r.charAt(8) !== 'A' && r.charAt(8) !== 'H')
           ? r.charAt(7) === t(r.substr(0, 7))
           : r.charAt(7) === t(r.substr(0, 7) + r.substr(8) + ''),
        };
       })(s.value);
       break;
      case 'il':
       c = (function (r) {
        return /^\d{1,9}$/.test(r)
         ? { meta: {}, valid: B(r) }
         : { meta: {}, valid: !1 };
       })(s.value);
       break;
      case 'is':
       c = (function (r) {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(r))
         return { meta: {}, valid: !1 };
        var t = r.replace(/-/g, ''),
         e = parseInt(t.substr(0, 2), 10),
         a = parseInt(t.substr(2, 2), 10),
         n = parseInt(t.substr(4, 2), 10),
         i = parseInt(t.charAt(9), 10);
        if (!G((n = i === 9 ? 1900 + n : 100 * (20 + i) + n), a, e, !0))
         return { meta: {}, valid: !1 };
        for (var u = [3, 2, 7, 6, 5, 4, 3, 2], l = 0, f = 0; f < 8; f++)
         l += parseInt(t.charAt(f), 10) * u[f];
        return {
         meta: {},
         valid: ''.concat((l = 11 - (l % 11))) === t.charAt(8),
        };
       })(s.value);
       break;
      case 'kr':
       c = (function (r) {
        var t = r.replace('-', '');
        if (!/^\d{13}$/.test(t)) return { meta: {}, valid: !1 };
        var e = t.charAt(6),
         a = parseInt(t.substr(0, 2), 10),
         n = parseInt(t.substr(2, 2), 10),
         i = parseInt(t.substr(4, 2), 10);
        switch (e) {
         case '1':
         case '2':
         case '5':
         case '6':
          a += 1900;
          break;
         case '3':
         case '4':
         case '7':
         case '8':
          a += 2e3;
          break;
         default:
          a += 1800;
        }
        if (!P(a, n, i)) return { meta: {}, valid: !1 };
        for (
         var u = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
          l = t.length,
          f = 0,
          o = 0;
         o < l - 1;
         o++
        )
         f += u[o] * parseInt(t.charAt(o), 10);
        return {
         meta: {},
         valid: ''.concat((11 - (f % 11)) % 10) === t.charAt(l - 1),
        };
       })(s.value);
       break;
      case 'lv':
       c = (function (r) {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(r))
         return { meta: {}, valid: !1 };
        var t = r.replace(/\D/g, ''),
         e = parseInt(t.substr(0, 2), 10),
         a = parseInt(t.substr(2, 2), 10),
         n = parseInt(t.substr(4, 2), 10);
        if (((n = n + 1800 + 100 * parseInt(t.charAt(6), 10)), !H(n, a, e, !0)))
         return { meta: {}, valid: !1 };
        for (var i = 0, u = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], l = 0; l < 10; l++)
         i += parseInt(t.charAt(l), 10) * u[l];
        return {
         meta: {},
         valid: ''.concat((i = ((i + 1) % 11) % 10)) === t.charAt(10),
        };
       })(s.value);
       break;
      case 'me':
       c = (function (r) {
        return { meta: {}, valid: m(r, 'ME') };
       })(s.value);
       break;
      case 'mk':
       c = (function (r) {
        return { meta: {}, valid: m(r, 'MK') };
       })(s.value);
       break;
      case 'mx':
       c = (function (r) {
        var t = r.toUpperCase();
        if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(t))
         return { meta: {}, valid: !1 };
        var e = t.substr(0, 4);
        if (
         [
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
         ].indexOf(e) >= 0
        )
         return { meta: {}, valid: !1 };
        var a = parseInt(t.substr(4, 2), 10),
         n = parseInt(t.substr(6, 2), 10),
         i = parseInt(t.substr(6, 2), 10);
        if (
         (/^[0-9]$/.test(t.charAt(16)) ? (a += 1900) : (a += 2e3), !Z(a, n, i))
        )
         return { meta: {}, valid: !1 };
        var u = t.charAt(10);
        if (u !== 'H' && u !== 'M') return { meta: {}, valid: !1 };
        var l = t.substr(11, 2);
        if (
         [
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
         ].indexOf(l) === -1
        )
         return { meta: {}, valid: !1 };
        for (var f = 0, o = t.length, h = 0; h < o - 1; h++)
         f +=
          (18 - h) *
          '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ'.indexOf(t.charAt(h));
        return {
         meta: {},
         valid: ''.concat((f = (10 - (f % 10)) % 10)) === t.charAt(o - 1),
        };
       })(s.value);
       break;
      case 'my':
       c = (function (r) {
        if (!/^\d{12}$/.test(r)) return { meta: {}, valid: !1 };
        var t = parseInt(r.substr(0, 2), 10),
         e = parseInt(r.substr(2, 2), 10),
         a = parseInt(r.substr(4, 2), 10);
        if (!K(t + 1900, e, a) && !K(t + 2e3, e, a))
         return { meta: {}, valid: !1 };
        var n = r.substr(6, 2);
        return {
         meta: {},
         valid:
          [
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
          ].indexOf(n) === -1,
        };
       })(s.value);
       break;
      case 'nl':
       c = (function (r) {
        if (r.length < 8) return { meta: {}, valid: !1 };
        var t = r;
        if (
         (t.length === 8 && (t = '0'.concat(t)),
         !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        if (((t = t.replace(/\./g, '')), parseInt(t, 10) === 0))
         return { meta: {}, valid: !1 };
        for (var e = 0, a = t.length, n = 0; n < a - 1; n++)
         e += (9 - n) * parseInt(t.charAt(n), 10);
        return (
         (e %= 11) == 10 && (e = 0),
         { meta: {}, valid: ''.concat(e) === t.charAt(a - 1) }
        );
       })(s.value);
       break;
      case 'no':
       c = (function (r) {
        return /^\d{11}$/.test(r)
         ? {
            meta: {},
            valid:
             ''.concat(
              (function (t) {
               for (
                var e = [3, 7, 6, 1, 8, 9, 4, 5, 2], a = 0, n = 0;
                n < 9;
                n++
               )
                a += e[n] * parseInt(t.charAt(n), 10);
               return 11 - (a % 11);
              })(r),
             ) === r.substr(-2, 1) &&
             ''.concat(
              (function (t) {
               for (
                var e = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], a = 0, n = 0;
                n < 10;
                n++
               )
                a += e[n] * parseInt(t.charAt(n), 10);
               return 11 - (a % 11);
              })(r),
             ) === r.substr(-1),
           }
         : { meta: {}, valid: !1 };
       })(s.value);
       break;
      case 'pe':
       c = (function (r) {
        if (!/^\d{8}[0-9A-Z]*$/.test(r)) return { meta: {}, valid: !1 };
        if (r.length === 8) return { meta: {}, valid: !0 };
        for (var t = [3, 2, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 8; a++)
         e += t[a] * parseInt(r.charAt(a), 10);
        var n = e % 11,
         i = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][n],
         u = 'KJIHGFEDCBA'.charAt(n);
        return {
         meta: {},
         valid: r.charAt(8) === ''.concat(i) || r.charAt(8) === u,
        };
       })(s.value);
       break;
      case 'pl':
       c = (function (r) {
        if (!/^[0-9]{11}$/.test(r)) return { meta: {}, valid: !1 };
        for (
         var t = 0, e = r.length, a = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], n = 0;
         n < e - 1;
         n++
        )
         t += a[n] * parseInt(r.charAt(n), 10);
        return (
         (t %= 10) == 0 && (t = 10),
         { meta: {}, valid: ''.concat((t = 10 - t)) === r.charAt(e - 1) }
        );
       })(s.value);
       break;
      case 'ro':
       c = (function (r) {
        if (!/^[0-9]{13}$/.test(r)) return { meta: {}, valid: !1 };
        var t = parseInt(r.charAt(0), 10);
        if (t === 0 || t === 7 || t === 8) return { meta: {}, valid: !1 };
        var e = parseInt(r.substr(1, 2), 10),
         a = parseInt(r.substr(3, 2), 10),
         n = parseInt(r.substr(5, 2), 10);
        if (n > 31 && a > 12) return { meta: {}, valid: !1 };
        if (
         t !== 9 &&
         !x(
          (e =
           { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 }[t + ''] + e),
          a,
          n,
         )
        )
         return { meta: {}, valid: !1 };
        for (
         var i = 0,
          u = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
          l = r.length,
          f = 0;
         f < l - 1;
         f++
        )
         i += parseInt(r.charAt(f), 10) * u[f];
        return (
         (i %= 11) == 10 && (i = 1),
         { meta: {}, valid: ''.concat(i) === r.charAt(l - 1) }
        );
       })(s.value);
       break;
      case 'rs':
       c = (function (r) {
        return { meta: {}, valid: m(r, 'RS') };
       })(s.value);
       break;
      case 'se':
       c = (function (r) {
        if (!/^[0-9]{10}$/.test(r) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(r))
         return { meta: {}, valid: !1 };
        var t = r.replace(/[^0-9]/g, ''),
         e = parseInt(t.substr(0, 2), 10) + 1900,
         a = parseInt(t.substr(2, 2), 10),
         n = parseInt(t.substr(4, 2), 10);
        return Y(e, a, n) ? { meta: {}, valid: y(t) } : { meta: {}, valid: !1 };
       })(s.value);
       break;
      case 'si':
       c = (function (r) {
        return { meta: {}, valid: m(r, 'SI') };
       })(s.value);
       break;
      case 'sm':
       c = (function (r) {
        return { meta: {}, valid: /^\d{5}$/.test(r) };
       })(s.value);
       break;
      case 'th':
       c = (function (r) {
        if (r.length !== 13) return { meta: {}, valid: !1 };
        for (var t = 0, e = 0; e < 12; e++)
         t += parseInt(r.charAt(e), 10) * (13 - e);
        return {
         meta: {},
         valid: (11 - (t % 11)) % 10 === parseInt(r.charAt(12), 10),
        };
       })(s.value);
       break;
      case 'tr':
       c = (function (r) {
        if (r.length !== 11) return { meta: {}, valid: !1 };
        for (var t = 0, e = 0; e < 10; e++) t += parseInt(r.charAt(e), 10);
        return { meta: {}, valid: t % 10 === parseInt(r.charAt(10), 10) };
       })(s.value);
       break;
      case 'tw':
       c = (function (r) {
        var t = r.toUpperCase();
        if (!/^[A-Z][12][0-9]{8}$/.test(t)) return { meta: {}, valid: !1 };
        for (
         var e = t.length,
          a = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'.indexOf(t.charAt(0)) + 10,
          n = Math.floor(a / 10) + (a % 10) * (e - 1),
          i = 0,
          u = 1;
         u < e - 1;
         u++
        )
         i += parseInt(t.charAt(u), 10) * (e - 1 - u);
        return {
         meta: {},
         valid: (n + i + parseInt(t.charAt(e - 1), 10)) % 10 == 0,
        };
       })(s.value);
       break;
      case 'uy':
       c = (function (r) {
        if (!/^\d{8}$/.test(r)) return { meta: {}, valid: !1 };
        for (var t = [2, 9, 8, 7, 6, 3, 4], e = 0, a = 0; a < 7; a++)
         e += parseInt(r.charAt(a), 10) * t[a];
        return (
         (e %= 10) > 0 && (e = 10 - e),
         { meta: {}, valid: ''.concat(e) === r.charAt(7) }
        );
       })(s.value);
       break;
      case 'za':
       c = (function (r) {
        if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(r))
         return { meta: {}, valid: !1 };
        var t = parseInt(r.substr(0, 2), 10),
         e = new Date().getFullYear() % 100,
         a = parseInt(r.substr(2, 2), 10),
         n = parseInt(r.substr(4, 2), 10);
        return X((t = t >= e ? t + 1900 : t + 2e3), a, n)
         ? { meta: {}, valid: W(r) }
         : { meta: {}, valid: !1 };
       })(s.value);
     }
     var b = Q(
      s.l10n && s.l10n.id ? I.message || s.l10n.id.country : I.message,
      s.l10n && s.l10n.id && s.l10n.id.countries
       ? s.l10n.id.countries[O.toUpperCase()]
       : O.toUpperCase(),
     );
     return Object.assign({}, { message: b }, c);
    },
   };
  };
 });
});
export default z();
