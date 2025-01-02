var E1 = (f, m) => () => (m || f((m = { exports: {} }).exports, m), m.exports);
var K1 = E1((C, b) => {
 (function (f, m) {
  typeof C == 'object' && typeof b < 'u'
   ? (b.exports = m(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], m)
     : ((f = typeof globalThis < 'u' ? globalThis : f || self),
       (f.FormValidation = f.FormValidation || {}),
       (f.FormValidation.validators = f.FormValidation.validators || {}),
       (f.FormValidation.validators.id = m(f.FormValidation)));
 })(void 0, function (f) {
  function m(r) {
   var a = r.replace(/\./g, '');
   return { meta: {}, valid: /^\d{7,8}$/.test(a) };
  }
  function A(r, a) {
   if (!/^\d{13}$/.test(r)) return !1;
   var e = parseInt(r.substr(0, 2), 10),
    s = parseInt(r.substr(2, 2), 10),
    t = parseInt(r.substr(7, 2), 10),
    n = parseInt(r.substr(12, 1), 10);
   if (e > 31 || s > 12) return !1;
   for (var v = 0, i = 0; i < 6; i++)
    v += (7 - i) * (parseInt(r.charAt(i), 10) + parseInt(r.charAt(i + 6), 10));
   if (((v = 11 - (v % 11)), (v === 10 || v === 11) && (v = 0), v !== n))
    return !1;
   switch (a.toUpperCase()) {
    case 'BA':
     return 10 <= t && t <= 19;
    case 'MK':
     return 41 <= t && t <= 49;
    case 'ME':
     return 20 <= t && t <= 29;
    case 'RS':
     return 70 <= t && t <= 99;
    case 'SI':
     return 50 <= t && t <= 59;
    default:
     return !0;
   }
  }
  function k(r) {
   return { meta: {}, valid: A(r, 'BA') };
  }
  var $ = f.utils.isValidDate;
  function V(r) {
   if (!/^\d{10}$/.test(r) && !/^\d{6}\s\d{3}\s\d{1}$/.test(r))
    return { meta: {}, valid: !1 };
   var a = r.replace(/\s/g, ''),
    e = parseInt(a.substr(0, 2), 10) + 1900,
    s = parseInt(a.substr(2, 2), 10),
    t = parseInt(a.substr(4, 2), 10);
   if (
    (s > 40 ? ((e += 100), (s -= 40)) : s > 20 && ((e -= 100), (s -= 20)),
    !$(e, s, t))
   )
    return { meta: {}, valid: !1 };
   for (var n = 0, v = [2, 4, 8, 5, 10, 9, 7, 3, 6], i = 0; i < 9; i++)
    n += parseInt(a.charAt(i), 10) * v[i];
   return (
    (n = (n % 11) % 10), { meta: {}, valid: ''.concat(n) === a.substr(9, 1) }
   );
  }
  function D(r) {
   var a = r.replace(/\D/g, '');
   if (
    !/^\d{11}$/.test(a) ||
    /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a)
   )
    return { meta: {}, valid: !1 };
   var e = 0,
    s;
   for (s = 0; s < 9; s++) e += (10 - s) * parseInt(a.charAt(s), 10);
   if (
    ((e = 11 - (e % 11)),
    (e === 10 || e === 11) && (e = 0),
    ''.concat(e) !== a.charAt(9))
   )
    return { meta: {}, valid: !1 };
   var t = 0;
   for (s = 0; s < 10; s++) t += (11 - s) * parseInt(a.charAt(s), 10);
   return (
    (t = 11 - (t % 11)),
    (t === 10 || t === 11) && (t = 0),
    { meta: {}, valid: ''.concat(t) === a.charAt(10) }
   );
  }
  function y(r) {
   if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(r))
    return { meta: {}, valid: !1 };
   for (
    var a = r.replace(/\D/g, '').substr(3),
     e = a.length,
     s = e === 8 ? [3, 1] : [1, 3],
     t = 0,
     n = 0;
    n < e - 1;
    n++
   )
    t += parseInt(a.charAt(n), 10) * s[n % 2];
   return (
    (t = 10 - (t % 10)), { meta: {}, valid: ''.concat(t) === a.charAt(e - 1) }
   );
  }
  function E(r) {
   if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(r)) return { meta: {}, valid: !1 };
   for (var a = r.replace(/-/g, ''); a.length < 9; ) a = '0'.concat(a);
   for (var e = [3, 2, 7, 6, 5, 4, 3, 2], s = 0, t = 0; t < 8; t++)
    s += parseInt(a.charAt(t), 10) * e[t];
   s = 11 - (s % 11);
   var n = ''.concat(s);
   return (
    s === 11 ? (n = '0') : s === 10 && (n = 'K'),
    { meta: {}, valid: n === a.charAt(8).toUpperCase() }
   );
  }
  var K = f.utils.isValidDate;
  function M(r) {
   var a = r.trim();
   if (!/^\d{15}$/.test(a) && !/^\d{17}[\dXx]{1}$/.test(a))
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
    s = parseInt(a.substr(0, 2), 10),
    t = parseInt(a.substr(2, 2), 10),
    n = parseInt(a.substr(4, 2), 10);
   if (!e[s] || !e[s][t]) return { meta: {}, valid: !1 };
   var v = !1,
    i = e[s][t],
    d;
   for (d = 0; d < i.length; d++)
    if (
     (Array.isArray(i[d]) && i[d][0] <= n && n <= i[d][1]) ||
     (!Array.isArray(i[d]) && n === i[d])
    ) {
     v = !0;
     break;
    }
   if (!v) return { meta: {}, valid: !1 };
   var c;
   a.length === 18 ? (c = a.substr(6, 8)) : (c = '19'.concat(a.substr(6, 6)));
   var l = parseInt(c.substr(0, 4), 10),
    u = parseInt(c.substr(4, 2), 10),
    o = parseInt(c.substr(6, 2), 10);
   if (!K(l, u, o)) return { meta: {}, valid: !1 };
   if (a.length === 18) {
    var I = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
     h = 0;
    for (d = 0; d < 17; d++) h += parseInt(a.charAt(d), 10) * I[d];
    h = (12 - (h % 11)) % 11;
    var y1 =
     a.charAt(17).toUpperCase() !== 'X' ? parseInt(a.charAt(17), 10) : 10;
    return { meta: {}, valid: y1 === h };
   }
   return { meta: {}, valid: !0 };
  }
  function U(r) {
   var a = r.replace(/\./g, '').replace('-', '');
   if (!/^\d{8,16}$/.test(a)) return { meta: {}, valid: !1 };
   for (
    var e = a.length,
     s = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
     t = 0,
     n = e - 2;
    n >= 0;
    n--
   )
    t += parseInt(a.charAt(n), 10) * s[n];
   return (
    (t = t % 11),
    t >= 2 && (t = 11 - t),
    { meta: {}, valid: ''.concat(t) === a.substr(e - 1) }
   );
  }
  var L = f.utils.isValidDate;
  function p(r) {
   if (!/^\d{9,10}$/.test(r)) return { meta: {}, valid: !1 };
   var a = 1900 + parseInt(r.substr(0, 2), 10),
    e = (parseInt(r.substr(2, 2), 10) % 50) % 20,
    s = parseInt(r.substr(4, 2), 10);
   if (r.length === 9) {
    if ((a >= 1980 && (a -= 100), a > 1953)) return { meta: {}, valid: !1 };
   } else a < 1954 && (a += 100);
   if (!L(a, e, s)) return { meta: {}, valid: !1 };
   if (r.length === 10) {
    var t = parseInt(r.substr(0, 9), 10) % 11;
    return (
     a < 1985 && (t = t % 10),
     { meta: {}, valid: ''.concat(t) === r.substr(9, 1) }
    );
   }
   return { meta: {}, valid: !0 };
  }
  var T = f.utils.isValidDate;
  function S(r) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(r)) return { meta: {}, valid: !1 };
   var a = r.replace(/-/g, ''),
    e = parseInt(a.substr(0, 2), 10),
    s = parseInt(a.substr(2, 2), 10),
    t = parseInt(a.substr(4, 2), 10);
   switch (!0) {
    case '5678'.indexOf(a.charAt(6)) !== -1 && t >= 58:
     t += 1800;
     break;
    case '0123'.indexOf(a.charAt(6)) !== -1:
    case '49'.indexOf(a.charAt(6)) !== -1 && t >= 37:
     t += 1900;
     break;
    default:
     t += 2e3;
     break;
   }
   return { meta: {}, valid: T(t, s, e) };
  }
  function N(r) {
   var a = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(r),
    e = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(r),
    s = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(r);
   if (!a && !e && !s) return { meta: {}, valid: !1 };
   var t = r.replace(/-/g, ''),
    n,
    v,
    i = !0;
   if (a || e) {
    v = 'DNI';
    var d = 'XYZ'.indexOf(t.charAt(0));
    return (
     d !== -1 && ((t = d + t.substr(1) + ''), (v = 'NIE')),
     (n = parseInt(t.substr(0, 8), 10)),
     (n = 'TRWAGMYFPDXBNJZSQVHLCKE'[n % 23]),
     { meta: { type: v }, valid: n === t.substr(8, 1) }
    );
   } else {
    (n = t.substr(1, 7)), (v = 'CIF');
    for (var c = t[0], l = t.substr(-1), u = 0, o = 0; o < n.length; o++)
     if (o % 2 !== 0) u += parseInt(n[o], 10);
     else {
      var I = '' + parseInt(n[o], 10) * 2;
      (u += parseInt(I[0], 10)), I.length === 2 && (u += parseInt(I[1], 10));
     }
    var h = u - Math.floor(u / 10) * 10;
    return (
     h !== 0 && (h = 10 - h),
     'KQS'.indexOf(c) !== -1
      ? (i = l === 'JABCDEFGHI'[h])
      : 'ABEH'.indexOf(c) !== -1
        ? (i = l === '' + h)
        : (i = l === '' + h || l === 'JABCDEFGHI'[h]),
     { meta: { type: v }, valid: i }
    );
   }
  }
  var R = f.utils.isValidDate;
  function B(r) {
   if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(r))
    return { meta: {}, valid: !1 };
   var a = parseInt(r.substr(0, 2), 10),
    e = parseInt(r.substr(2, 2), 10),
    s = parseInt(r.substr(4, 2), 10),
    t = { '+': 1800, '-': 1900, A: 2e3 };
   if (((s = t[r.charAt(6)] + s), !R(s, e, a))) return { meta: {}, valid: !1 };
   var n = parseInt(r.substr(7, 3), 10);
   if (n < 2) return { meta: {}, valid: !1 };
   var v = parseInt(r.substr(0, 6) + r.substr(7, 3) + '', 10);
   return {
    meta: {},
    valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(v % 31) === r.charAt(10),
   };
  }
  function P(r) {
   var a = r.toUpperCase();
   if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(a))
    return { meta: {}, valid: !1 };
   var e = a.substr(5, 2);
   switch (!0) {
    case /^\d{2}$/.test(e):
     a = r;
     break;
    case e === '2A':
     a = ''.concat(r.substr(0, 5), '19').concat(r.substr(7));
     break;
    case e === '2B':
     a = ''.concat(r.substr(0, 5), '18').concat(r.substr(7));
     break;
    default:
     return { meta: {}, valid: !1 };
   }
   var s = 97 - (parseInt(a.substr(0, 13), 10) % 97),
    t = s < 10 ? '0'.concat(s) : ''.concat(s);
   return { meta: {}, valid: t === a.substr(13) };
  }
  function G(r) {
   var a = r.toUpperCase();
   if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(a)) return { meta: {}, valid: !1 };
   var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    s = a.charAt(0),
    t = a.charAt(1),
    n = 0,
    v = a;
   /^[A-Z]$/.test(t)
    ? ((n += 9 * (10 + e.indexOf(s))),
      (n += 8 * (10 + e.indexOf(t))),
      (v = a.substr(2)))
    : ((n += 9 * 36), (n += 8 * (10 + e.indexOf(s))), (v = a.substr(1)));
   for (var i = v.length, d = 0; d < i - 1; d++)
    n += (7 - d) * parseInt(v.charAt(d), 10);
   var c = n % 11,
    l = c === 0 ? '0' : 11 - c === 10 ? 'A' : ''.concat(11 - c);
   return { meta: {}, valid: l === v.charAt(i - 1) };
  }
  var w = f.algorithms.mod11And10;
  function F(r) {
   return { meta: {}, valid: /^[0-9]{11}$/.test(r) && w(r) };
  }
  var J = f.algorithms.verhoeff;
  function H(r) {
   if (!/^[2-9]\d{11}$/.test(r)) return { meta: {}, valid: !1 };
   var a = r.split('').map(function (e) {
    return parseInt(e, 10);
   });
   return { meta: {}, valid: J(a) };
  }
  function x(r) {
   if (!/^\d{7}[A-W][AHWTX]?$/.test(r)) return { meta: {}, valid: !1 };
   var a = function (s) {
     for (var t = s; t.length < 7; ) t = '0'.concat(t);
     for (var n = 'WABCDEFGHIJKLMNOPQRSTUV', v = 0, i = 0; i < 7; i++)
      v += parseInt(t.charAt(i), 10) * (8 - i);
     return (v += 9 * n.indexOf(t.substr(7))), n[v % 23];
    },
    e =
     r.length === 9 && (r.charAt(8) === 'A' || r.charAt(8) === 'H')
      ? r.charAt(7) === a(r.substr(0, 7) + r.substr(8) + '')
      : r.charAt(7) === a(r.substr(0, 7));
   return { meta: {}, valid: e };
  }
  var Z = f.algorithms.luhn;
  function Y(r) {
   return /^\d{1,9}$/.test(r)
    ? { meta: {}, valid: Z(r) }
    : { meta: {}, valid: !1 };
  }
  var W = f.utils.isValidDate;
  function X(r) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(r)) return { meta: {}, valid: !1 };
   var a = r.replace(/-/g, ''),
    e = parseInt(a.substr(0, 2), 10),
    s = parseInt(a.substr(2, 2), 10),
    t = parseInt(a.substr(4, 2), 10),
    n = parseInt(a.charAt(9), 10);
   if (((t = n === 9 ? 1900 + t : (20 + n) * 100 + t), !W(t, s, e, !0)))
    return { meta: {}, valid: !1 };
   for (var v = [3, 2, 7, 6, 5, 4, 3, 2], i = 0, d = 0; d < 8; d++)
    i += parseInt(a.charAt(d), 10) * v[d];
   return (
    (i = 11 - (i % 11)), { meta: {}, valid: ''.concat(i) === a.charAt(8) }
   );
  }
  var Q = f.utils.isValidDate;
  function j(r) {
   var a = r.replace('-', '');
   if (!/^\d{13}$/.test(a)) return { meta: {}, valid: !1 };
   var e = a.charAt(6),
    s = parseInt(a.substr(0, 2), 10),
    t = parseInt(a.substr(2, 2), 10),
    n = parseInt(a.substr(4, 2), 10);
   switch (e) {
    case '1':
    case '2':
    case '5':
    case '6':
     s += 1900;
     break;
    case '3':
    case '4':
    case '7':
    case '8':
     s += 2e3;
     break;
    default:
     s += 1800;
     break;
   }
   if (!Q(s, t, n)) return { meta: {}, valid: !1 };
   for (
    var v = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5], i = a.length, d = 0, c = 0;
    c < i - 1;
    c++
   )
    d += v[c] * parseInt(a.charAt(c), 10);
   var l = (11 - (d % 11)) % 10;
   return { meta: {}, valid: ''.concat(l) === a.charAt(i - 1) };
  }
  var z = f.utils.isValidDate;
  function O(r) {
   if (!/^[0-9]{11}$/.test(r)) return { meta: {}, valid: !1 };
   var a = parseInt(r.charAt(0), 10),
    e = parseInt(r.substr(1, 2), 10),
    s = parseInt(r.substr(3, 2), 10),
    t = parseInt(r.substr(5, 2), 10),
    n = a % 2 === 0 ? 17 + a / 2 : 17 + (a + 1) / 2;
   if (((e = n * 100 + e), !z(e, s, t, !0))) return { meta: {}, valid: !1 };
   var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    i = 0,
    d;
   for (d = 0; d < 10; d++) i += parseInt(r.charAt(d), 10) * v[d];
   if (((i = i % 11), i !== 10))
    return { meta: {}, valid: ''.concat(i) === r.charAt(10) };
   for (i = 0, v = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], d = 0; d < 10; d++)
    i += parseInt(r.charAt(d), 10) * v[d];
   return (
    (i = i % 11),
    i === 10 && (i = 0),
    { meta: {}, valid: ''.concat(i) === r.charAt(10) }
   );
  }
  var q = f.utils.isValidDate;
  function _(r) {
   if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(r)) return { meta: {}, valid: !1 };
   var a = r.replace(/\D/g, ''),
    e = parseInt(a.substr(0, 2), 10),
    s = parseInt(a.substr(2, 2), 10),
    t = parseInt(a.substr(4, 2), 10);
   if (((t = t + 1800 + parseInt(a.charAt(6), 10) * 100), !q(t, s, e, !0)))
    return { meta: {}, valid: !1 };
   for (var n = 0, v = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], i = 0; i < 10; i++)
    n += parseInt(a.charAt(i), 10) * v[i];
   return (
    (n = ((n + 1) % 11) % 10),
    { meta: {}, valid: ''.concat(n) === a.charAt(10) }
   );
  }
  function a1(r) {
   return { meta: {}, valid: A(r, 'ME') };
  }
  function r1(r) {
   return { meta: {}, valid: A(r, 'MK') };
  }
  var t1 = f.utils.isValidDate;
  function e1(r) {
   var a = r.toUpperCase();
   if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(a))
    return { meta: {}, valid: !1 };
   var e = [
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
    s = a.substr(0, 4);
   if (e.indexOf(s) >= 0) return { meta: {}, valid: !1 };
   var t = parseInt(a.substr(4, 2), 10),
    n = parseInt(a.substr(6, 2), 10),
    v = parseInt(a.substr(6, 2), 10);
   if ((/^[0-9]$/.test(a.charAt(16)) ? (t += 1900) : (t += 2e3), !t1(t, n, v)))
    return { meta: {}, valid: !1 };
   var i = a.charAt(10);
   if (i !== 'H' && i !== 'M') return { meta: {}, valid: !1 };
   var d = a.substr(11, 2),
    c = [
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
   if (c.indexOf(d) === -1) return { meta: {}, valid: !1 };
   for (
    var l = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ', u = 0, o = a.length, I = 0;
    I < o - 1;
    I++
   )
    u += (18 - I) * l.indexOf(a.charAt(I));
   return (
    (u = (10 - (u % 10)) % 10),
    { meta: {}, valid: ''.concat(u) === a.charAt(o - 1) }
   );
  }
  var g = f.utils.isValidDate;
  function s1(r) {
   if (!/^\d{12}$/.test(r)) return { meta: {}, valid: !1 };
   var a = parseInt(r.substr(0, 2), 10),
    e = parseInt(r.substr(2, 2), 10),
    s = parseInt(r.substr(4, 2), 10);
   if (!g(a + 1900, e, s) && !g(a + 2e3, e, s)) return { meta: {}, valid: !1 };
   var t = r.substr(6, 2),
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
   return { meta: {}, valid: n.indexOf(t) === -1 };
  }
  function n1(r) {
   if (r.length < 8) return { meta: {}, valid: !1 };
   var a = r;
   if (
    (a.length === 8 && (a = '0'.concat(a)),
    !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))
   )
    return { meta: {}, valid: !1 };
   if (((a = a.replace(/\./g, '')), parseInt(a, 10) === 0))
    return { meta: {}, valid: !1 };
   for (var e = 0, s = a.length, t = 0; t < s - 1; t++)
    e += (9 - t) * parseInt(a.charAt(t), 10);
   return (
    (e = e % 11),
    e === 10 && (e = 0),
    { meta: {}, valid: ''.concat(e) === a.charAt(s - 1) }
   );
  }
  function i1(r) {
   if (!/^\d{11}$/.test(r)) return { meta: {}, valid: !1 };
   var a = function (s) {
     for (var t = [3, 7, 6, 1, 8, 9, 4, 5, 2], n = 0, v = 0; v < 9; v++)
      n += t[v] * parseInt(s.charAt(v), 10);
     return 11 - (n % 11);
    },
    e = function (s) {
     for (var t = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], n = 0, v = 0; v < 10; v++)
      n += t[v] * parseInt(s.charAt(v), 10);
     return 11 - (n % 11);
    };
   return {
    meta: {},
    valid:
     ''.concat(a(r)) === r.substr(-2, 1) && ''.concat(e(r)) === r.substr(-1),
   };
  }
  function v1(r) {
   if (!/^\d{8}[0-9A-Z]*$/.test(r)) return { meta: {}, valid: !1 };
   if (r.length === 8) return { meta: {}, valid: !0 };
   for (var a = [3, 2, 7, 6, 5, 4, 3, 2], e = 0, s = 0; s < 8; s++)
    e += a[s] * parseInt(r.charAt(s), 10);
   var t = e % 11,
    n = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][t],
    v = 'KJIHGFEDCBA'.charAt(t);
   return {
    meta: {},
    valid: r.charAt(8) === ''.concat(n) || r.charAt(8) === v,
   };
  }
  function d1(r) {
   if (!/^[0-9]{11}$/.test(r)) return { meta: {}, valid: !1 };
   for (
    var a = 0, e = r.length, s = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], t = 0;
    t < e - 1;
    t++
   )
    a += s[t] * parseInt(r.charAt(t), 10);
   return (
    (a = a % 10),
    a === 0 && (a = 10),
    (a = 10 - a),
    { meta: {}, valid: ''.concat(a) === r.charAt(e - 1) }
   );
  }
  var f1 = f.utils.isValidDate;
  function c1(r) {
   if (!/^[0-9]{13}$/.test(r)) return { meta: {}, valid: !1 };
   var a = parseInt(r.charAt(0), 10);
   if (a === 0 || a === 7 || a === 8) return { meta: {}, valid: !1 };
   var e = parseInt(r.substr(1, 2), 10),
    s = parseInt(r.substr(3, 2), 10),
    t = parseInt(r.substr(5, 2), 10),
    n = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 };
   if (t > 31 && s > 12) return { meta: {}, valid: !1 };
   if (a !== 9 && ((e = n[a + ''] + e), !f1(e, s, t)))
    return { meta: {}, valid: !1 };
   for (
    var v = 0, i = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], d = r.length, c = 0;
    c < d - 1;
    c++
   )
    v += parseInt(r.charAt(c), 10) * i[c];
   return (
    (v = v % 11),
    v === 10 && (v = 1),
    { meta: {}, valid: ''.concat(v) === r.charAt(d - 1) }
   );
  }
  function l1(r) {
   return { meta: {}, valid: A(r, 'RS') };
  }
  var u1 = f.algorithms.luhn,
   h1 = f.utils.isValidDate;
  function m1(r) {
   if (!/^[0-9]{10}$/.test(r) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(r))
    return { meta: {}, valid: !1 };
   var a = r.replace(/[^0-9]/g, ''),
    e = parseInt(a.substr(0, 2), 10) + 1900,
    s = parseInt(a.substr(2, 2), 10),
    t = parseInt(a.substr(4, 2), 10);
   return h1(e, s, t) ? { meta: {}, valid: u1(a) } : { meta: {}, valid: !1 };
  }
  function o1(r) {
   return { meta: {}, valid: A(r, 'SI') };
  }
  function I1(r) {
   return { meta: {}, valid: /^\d{5}$/.test(r) };
  }
  function A1(r) {
   if (r.length !== 13) return { meta: {}, valid: !1 };
   for (var a = 0, e = 0; e < 12; e++)
    a += parseInt(r.charAt(e), 10) * (13 - e);
   return {
    meta: {},
    valid: (11 - (a % 11)) % 10 === parseInt(r.charAt(12), 10),
   };
  }
  function b1(r) {
   if (r.length !== 11) return { meta: {}, valid: !1 };
   for (var a = 0, e = 0; e < 10; e++) a += parseInt(r.charAt(e), 10);
   return { meta: {}, valid: a % 10 === parseInt(r.charAt(10), 10) };
  }
  function p1(r) {
   var a = r.toUpperCase();
   if (!/^[A-Z][12][0-9]{8}$/.test(a)) return { meta: {}, valid: !1 };
   for (
    var e = a.length,
     s = 'ABCDEFGHJKLMNPQRSTUVXYWZIO',
     t = s.indexOf(a.charAt(0)) + 10,
     n = Math.floor(t / 10) + (t % 10) * (e - 1),
     v = 0,
     i = 1;
    i < e - 1;
    i++
   )
    v += parseInt(a.charAt(i), 10) * (e - 1 - i);
   return {
    meta: {},
    valid: (n + v + parseInt(a.charAt(e - 1), 10)) % 10 === 0,
   };
  }
  function O1(r) {
   if (!/^\d{8}$/.test(r)) return { meta: {}, valid: !1 };
   for (var a = [2, 9, 8, 7, 6, 3, 4], e = 0, s = 0; s < 7; s++)
    e += parseInt(r.charAt(s), 10) * a[s];
   return (
    (e = e % 10),
    e > 0 && (e = 10 - e),
    { meta: {}, valid: ''.concat(e) === r.charAt(7) }
   );
  }
  var g1 = f.algorithms.luhn,
   C1 = f.utils.isValidDate;
  function k1(r) {
   if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(r)) return { meta: {}, valid: !1 };
   var a = parseInt(r.substr(0, 2), 10),
    e = new Date().getFullYear() % 100,
    s = parseInt(r.substr(2, 2), 10),
    t = parseInt(r.substr(4, 2), 10);
   return (
    (a = a >= e ? a + 1900 : a + 2e3),
    C1(a, s, t) ? { meta: {}, valid: g1(r) } : { meta: {}, valid: !1 }
   );
  }
  var $1 = f.utils.format,
   V1 = f.utils.removeUndefined;
  function D1() {
   var r = [
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
     var e = Object.assign({}, { message: '' }, V1(a.options)),
      s = a.value.substr(0, 2);
     if (
      (typeof e.country == 'function'
       ? (s = e.country.call(this))
       : (s = e.country),
      r.indexOf(s) === -1)
     )
      return { valid: !0 };
     var t = { meta: {}, valid: !0 };
     switch (s.toLowerCase()) {
      case 'ar':
       t = m(a.value);
       break;
      case 'ba':
       t = k(a.value);
       break;
      case 'bg':
       t = V(a.value);
       break;
      case 'br':
       t = D(a.value);
       break;
      case 'ch':
       t = y(a.value);
       break;
      case 'cl':
       t = E(a.value);
       break;
      case 'cn':
       t = M(a.value);
       break;
      case 'co':
       t = U(a.value);
       break;
      case 'cz':
       t = p(a.value);
       break;
      case 'dk':
       t = S(a.value);
       break;
      case 'ee':
       t = O(a.value);
       break;
      case 'es':
       t = N(a.value);
       break;
      case 'fi':
       t = B(a.value);
       break;
      case 'fr':
       t = P(a.value);
       break;
      case 'hk':
       t = G(a.value);
       break;
      case 'hr':
       t = F(a.value);
       break;
      case 'id':
       t = H(a.value);
       break;
      case 'ie':
       t = x(a.value);
       break;
      case 'il':
       t = Y(a.value);
       break;
      case 'is':
       t = X(a.value);
       break;
      case 'kr':
       t = j(a.value);
       break;
      case 'lt':
       t = O(a.value);
       break;
      case 'lv':
       t = _(a.value);
       break;
      case 'me':
       t = a1(a.value);
       break;
      case 'mk':
       t = r1(a.value);
       break;
      case 'mx':
       t = e1(a.value);
       break;
      case 'my':
       t = s1(a.value);
       break;
      case 'nl':
       t = n1(a.value);
       break;
      case 'no':
       t = i1(a.value);
       break;
      case 'pe':
       t = v1(a.value);
       break;
      case 'pl':
       t = d1(a.value);
       break;
      case 'ro':
       t = c1(a.value);
       break;
      case 'rs':
       t = l1(a.value);
       break;
      case 'se':
       t = m1(a.value);
       break;
      case 'si':
       t = o1(a.value);
       break;
      case 'sk':
       t = p(a.value);
       break;
      case 'sm':
       t = I1(a.value);
       break;
      case 'th':
       t = A1(a.value);
       break;
      case 'tr':
       t = b1(a.value);
       break;
      case 'tw':
       t = p1(a.value);
       break;
      case 'uy':
       t = O1(a.value);
       break;
      case 'za':
       t = k1(a.value);
       break;
     }
     var n = $1(
      a.l10n && a.l10n.id ? e.message || a.l10n.id.country : e.message,
      a.l10n && a.l10n.id && a.l10n.id.countries
       ? a.l10n.id.countries[s.toUpperCase()]
       : s.toUpperCase(),
     );
     return Object.assign({}, { message: n }, t);
    },
   };
  }
  return D1;
 });
});
export default K1();
