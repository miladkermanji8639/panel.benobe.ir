var C = (o, h) => () => (h || o((h = { exports: {} }).exports, h), h.exports);
var O = C((g, $) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-vat
  * @version 2.4.0
  */ (function (o, h) {
  typeof g == 'object' && typeof $ < 'u'
   ? ($.exports = h(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], h)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.validators = o.FormValidation.validators || {}),
       (o.FormValidation.validators.vat = h(o.FormValidation)));
 })(void 0, function (o) {
  var h = o.utils.isValidDate,
   k = o.utils.isValidDate,
   E = o.algorithms.mod11And10,
   V = o.algorithms.luhn;
  function G(p) {
   var l = p;
   if (
    (/^(GR|EL)[0-9]{9}$/.test(l) && (l = l.substr(2)), !/^[0-9]{9}$/.test(l))
   )
    return { meta: {}, valid: !1 };
   l.length === 8 && (l = '0'.concat(l));
   for (var u = [256, 128, 64, 32, 16, 8, 4, 2], m = 0, f = 0; f < 8; f++)
    m += parseInt(l.charAt(f), 10) * u[f];
   return {
    meta: {},
    valid: ''.concat((m = (m % 11) % 10)) === l.substr(8, 1),
   };
  }
  var T = o.algorithms.mod11And10,
   D = o.algorithms.luhn,
   Z = o.utils.isValidDate,
   R = o.algorithms.mod97And10;
  function B(p) {
   if (p.length < 8) return { meta: {}, valid: !1 };
   var l = p;
   if (
    (l.length === 8 && (l = '0'.concat(l)),
    !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(l))
   )
    return { meta: {}, valid: !1 };
   if (((l = l.replace(/\./g, '')), parseInt(l, 10) === 0))
    return { meta: {}, valid: !1 };
   for (var u = 0, m = l.length, f = 0; f < m - 1; f++)
    u += (9 - f) * parseInt(l.charAt(f), 10);
   return (
    (u %= 11) === 10 && (u = 0),
    { meta: {}, valid: ''.concat(u) === l.charAt(m - 1) }
   );
  }
  var H = o.algorithms.luhn,
   L = o.utils.format,
   S = o.utils.removeUndefined;
  return function () {
   var p = [
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
    validate: function (l) {
     var u = l.value;
     if (u === '') return { valid: !0 };
     var m = Object.assign({}, { message: '' }, S(l.options)),
      f = u.substr(0, 2);
     if (
      ((f = typeof m.country == 'function' ? m.country.call(this) : m.country),
      p.indexOf(f) === -1)
     )
      return { valid: !0 };
     var v = { meta: {}, valid: !0 };
     switch (f.toLowerCase()) {
      case 'ar':
       v = (function (s) {
        var t = s.replace('-', '');
        if (
         (/^AR[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 10; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return (
         (e = 11 - (e % 11)) == 11 && (e = 0),
         { meta: {}, valid: ''.concat(e) === t.substr(10) }
        );
       })(u);
       break;
      case 'at':
       v = (function (s) {
        var t = s;
        if (
         (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        t = t.substr(1);
        for (var r = [1, 2, 1, 2, 1, 2, 1], e = 0, a = 0, n = 0; n < 7; n++)
         (a = parseInt(t.charAt(n), 10) * r[n]) > 9 &&
          (a = Math.floor(a / 10) + (a % 10)),
          (e += a);
        return (
         (e = 10 - ((e + 4) % 10)) == 10 && (e = 0),
         { meta: {}, valid: ''.concat(e) === t.substr(7, 1) }
        );
       })(u);
       break;
      case 'be':
       v = (function (s) {
        var t = s;
        return (
         /^BE[0]?[0-9]{9}$/.test(t) && (t = t.substr(2)),
         /^[0]?[0-9]{9}$/.test(t)
          ? (t.length === 9 && (t = '0'.concat(t)),
            t.substr(1, 1) === '0'
             ? { meta: {}, valid: !1 }
             : {
                meta: {},
                valid:
                 (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) %
                  97 ==
                 0,
               })
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 'bg':
       v = (function (s) {
        var t = s;
        if (
         (/^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2)),
         !/^[0-9]{9,10}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r = 0,
         e = 0;
        if (t.length === 9) {
         for (e = 0; e < 8; e++) r += parseInt(t.charAt(e), 10) * (e + 1);
         if ((r %= 11) == 10) {
          for (r = 0, e = 0; e < 8; e++)
           r += parseInt(t.charAt(e), 10) * (e + 3);
          r %= 11;
         }
         return { meta: {}, valid: ''.concat((r %= 10)) === t.substr(8) };
        }
        return {
         meta: {},
         valid:
          (function (a) {
           var n = parseInt(a.substr(0, 2), 10) + 1900,
            i = parseInt(a.substr(2, 2), 10),
            c = parseInt(a.substr(4, 2), 10);
           if (
            (i > 40
             ? ((n += 100), (i -= 40))
             : i > 20 && ((n -= 100), (i -= 20)),
            !h(n, i, c))
           )
            return !1;
           for (var d = [2, 4, 8, 5, 10, 9, 7, 3, 6], b = 0, A = 0; A < 9; A++)
            b += parseInt(a.charAt(A), 10) * d[A];
           return ''.concat((b = (b % 11) % 10)) === a.substr(9, 1);
          })(t) ||
          (function (a) {
           for (
            var n = [21, 19, 17, 13, 11, 9, 7, 3, 1], i = 0, c = 0;
            c < 9;
            c++
           )
            i += parseInt(a.charAt(c), 10) * n[c];
           return ''.concat((i %= 10)) === a.substr(9, 1);
          })(t) ||
          (function (a) {
           for (var n = [4, 3, 2, 7, 6, 5, 4, 3, 2], i = 0, c = 0; c < 9; c++)
            i += parseInt(a.charAt(c), 10) * n[c];
           return (
            (i = 11 - (i % 11)) != 10 &&
            (i === 11 && (i = 0), ''.concat(i) === a.substr(9, 1))
           );
          })(t),
        };
       })(u);
       break;
      case 'br':
       v = (function (s) {
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
        var r,
         e = t.length - 2,
         a = t.substring(0, e),
         n = t.substring(e),
         i = 0,
         c = e - 7;
        for (r = e; r >= 1; r--)
         (i += parseInt(a.charAt(e - r), 10) * c--), c < 2 && (c = 9);
        var d = i % 11 < 2 ? 0 : 11 - (i % 11);
        if (d !== parseInt(n.charAt(0), 10)) return { meta: {}, valid: !1 };
        for (
         e += 1, a = t.substring(0, e), i = 0, c = e - 7, r = e;
         r >= 1;
         r--
        )
         (i += parseInt(a.charAt(e - r), 10) * c--), c < 2 && (c = 9);
        return {
         meta: {},
         valid:
          (d = i % 11 < 2 ? 0 : 11 - (i % 11)) === parseInt(n.charAt(1), 10),
        };
       })(u);
       break;
      case 'ch':
       v = (function (s) {
        var t = s;
        if (
         (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t) && (t = t.substr(2)),
         !/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t))
        )
         return { meta: {}, valid: !1 };
        t = t.substr(1);
        for (var r = [5, 4, 3, 2, 7, 6, 5, 4], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return (e = 11 - (e % 11)) == 10
         ? { meta: {}, valid: !1 }
         : (e === 11 && (e = 0),
           { meta: {}, valid: ''.concat(e) === t.substr(8, 1) });
       })(u);
       break;
      case 'cy':
       v = (function (s) {
        var t = s;
        if (
         (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(t) && (t = t.substr(2)),
         !/^[0-5|9][0-9]{7}[A-Z]$/.test(t))
        )
         return { meta: {}, valid: !1 };
        if (t.substr(0, 2) === '12') return { meta: {}, valid: !1 };
        for (
         var r = 0,
          e = {
           0: 1,
           1: 0,
           2: 5,
           3: 7,
           4: 9,
           5: 13,
           6: 15,
           7: 17,
           8: 19,
           9: 21,
          },
          a = 0;
         a < 8;
         a++
        ) {
         var n = parseInt(t.charAt(a), 10);
         a % 2 == 0 && (n = e[''.concat(n)]), (r += n);
        }
        return {
         meta: {},
         valid:
          ''.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[r % 26]) === t.substr(8, 1),
        };
       })(u);
       break;
      case 'cz':
       v = (function (s) {
        var t = s;
        if (
         (/^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2)),
         !/^[0-9]{8,10}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r = 0,
         e = 0;
        if (t.length === 8) {
         if (''.concat(t.charAt(0)) === '9') return { meta: {}, valid: !1 };
         for (r = 0, e = 0; e < 7; e++)
          r += parseInt(t.charAt(e), 10) * (8 - e);
         return (
          (r = 11 - (r % 11)) == 10 && (r = 0),
          r === 11 && (r = 1),
          { meta: {}, valid: ''.concat(r) === t.substr(7, 1) }
         );
        }
        if (t.length === 9 && ''.concat(t.charAt(0)) === '6') {
         for (r = 0, e = 0; e < 7; e++)
          r += parseInt(t.charAt(e + 1), 10) * (8 - e);
         return (
          (r = 11 - (r % 11)) == 10 && (r = 0),
          r === 11 && (r = 1),
          {
           meta: {},
           valid:
            ''.concat((r = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][r - 1])) ===
            t.substr(8, 1),
          }
         );
        }
        if (t.length === 9 || t.length === 10) {
         var a = 1900 + parseInt(t.substr(0, 2), 10),
          n = (parseInt(t.substr(2, 2), 10) % 50) % 20,
          i = parseInt(t.substr(4, 2), 10);
         if (t.length === 9) {
          if ((a >= 1980 && (a -= 100), a > 1953))
           return { meta: {}, valid: !1 };
         } else a < 1954 && (a += 100);
         if (!k(a, n, i)) return { meta: {}, valid: !1 };
         if (t.length === 10) {
          var c = parseInt(t.substr(0, 9), 10) % 11;
          return (
           a < 1985 && (c %= 10),
           { meta: {}, valid: ''.concat(c) === t.substr(9, 1) }
          );
         }
         return { meta: {}, valid: !0 };
        }
        return { meta: {}, valid: !1 };
       })(u);
       break;
      case 'de':
       v = (function (s) {
        var t = s;
        return (
         /^DE[0-9]{9}$/.test(t) && (t = t.substr(2)),
         /^[1-9][0-9]{8}$/.test(t)
          ? { meta: {}, valid: E(t) }
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 'dk':
       v = (function (s) {
        var t = s;
        if (
         (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = 0, e = [2, 7, 6, 5, 4, 3, 2, 1], a = 0; a < 8; a++)
         r += parseInt(t.charAt(a), 10) * e[a];
        return { meta: {}, valid: r % 11 == 0 };
       })(u);
       break;
      case 'ee':
       v = (function (s) {
        var t = s;
        if (
         (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = 0, e = [3, 7, 1, 3, 7, 1, 3, 7, 1], a = 0; a < 9; a++)
         r += parseInt(t.charAt(a), 10) * e[a];
        return { meta: {}, valid: r % 10 == 0 };
       })(u);
       break;
      case 'el':
      case 'gr':
       v = G(u);
       break;
      case 'es':
       v = (function (s) {
        var t = s;
        if (
         (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)),
         !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r,
         e,
         a = t.charAt(0);
        return /^[0-9]$/.test(a)
         ? {
            meta: { type: 'DNI' },
            valid:
             ((r = t),
             (e = parseInt(r.substr(0, 8), 10)),
             ''.concat('TRWAGMYFPDXBNJZSQVHLCKE'[e % 23]) === r.substr(8, 1)),
           }
         : /^[XYZ]$/.test(a)
           ? {
              meta: { type: 'NIE' },
              valid: (function (n) {
               var i = ['XYZ'.indexOf(n.charAt(0)), n.substr(1)].join(''),
                c = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(i, 10) % 23];
               return ''.concat(c) === n.substr(8, 1);
              })(t),
             }
           : {
              meta: { type: 'CIF' },
              valid: (function (n) {
               var i,
                c = n.charAt(0);
               if ('KLM'.indexOf(c) !== -1)
                return (
                 (i = parseInt(n.substr(1, 8), 10)),
                 ''.concat((i = 'TRWAGMYFPDXBNJZSQVHLCKE'[i % 23])) ===
                  n.substr(8, 1)
                );
               if ('ABCDEFGHJNPQRSUVW'.indexOf(c) !== -1) {
                for (
                 var d = [2, 1, 2, 1, 2, 1, 2], b = 0, A = 0, I = 0;
                 I < 7;
                 I++
                )
                 (A = parseInt(n.charAt(I + 1), 10) * d[I]) > 9 &&
                  (A = Math.floor(A / 10) + (A % 10)),
                  (b += A);
                return (
                 (b = 10 - (b % 10)) == 10 && (b = 0),
                 ''.concat(b) === n.substr(8, 1) ||
                  'JABCDEFGHI'[b] === n.substr(8, 1)
                );
               }
               return !1;
              })(t),
             };
       })(u);
       break;
      case 'fi':
       v = (function (s) {
        var t = s;
        if (
         (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [7, 9, 10, 5, 8, 4, 2, 1], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return { meta: {}, valid: e % 11 == 0 };
       })(u);
       break;
      case 'fr':
       v = (function (s) {
        var t = s;
        if (
         (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t) && (t = t.substr(2)),
         !/^[0-9A-Z]{2}[0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        if (t.substr(2, 4) !== '000')
         return { meta: {}, valid: V(t.substr(2)) };
        if (/^[0-9]{2}$/.test(t.substr(0, 2)))
         return {
          meta: {},
          valid:
           t.substr(0, 2) === ''.concat(parseInt(t.substr(2) + '12', 10) % 97),
         };
        var r = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
         e = void 0;
        return (
         (e = /^[0-9]$/.test(t.charAt(0))
          ? 24 * r.indexOf(t.charAt(0)) + r.indexOf(t.charAt(1)) - 10
          : 34 * r.indexOf(t.charAt(0)) + r.indexOf(t.charAt(1)) - 100),
         {
          meta: {},
          valid:
           (parseInt(t.substr(2), 10) + 1 + Math.floor(e / 11)) % 11 == e % 11,
         }
        );
       })(u);
       break;
      case 'gb':
       v = (function (s) {
        var t = s;
        if (
         ((/^GB[0-9]{9}$/.test(t) ||
          /^GB[0-9]{12}$/.test(t) ||
          /^GBGD[0-9]{3}$/.test(t) ||
          /^GBHA[0-9]{3}$/.test(t) ||
          /^GB(GD|HA)8888[0-9]{5}$/.test(t)) &&
          (t = t.substr(2)),
         !(
          /^[0-9]{9}$/.test(t) ||
          /^[0-9]{12}$/.test(t) ||
          /^GD[0-9]{3}$/.test(t) ||
          /^HA[0-9]{3}$/.test(t) ||
          /^(GD|HA)8888[0-9]{5}$/.test(t)
         ))
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
        }
        if (
         r === 11 &&
         (t.substr(0, 6) === 'GD8888' || t.substr(0, 6) === 'HA8888')
        )
         return (t.substr(0, 2) === 'GD' &&
          parseInt(t.substr(6, 3), 10) >= 500) ||
          (t.substr(0, 2) === 'HA' && parseInt(t.substr(6, 3), 10) < 500)
          ? { meta: {}, valid: !1 }
          : {
             meta: {},
             valid:
              parseInt(t.substr(6, 3), 10) % 97 ===
              parseInt(t.substr(9, 2), 10),
            };
        if (r === 9 || r === 12) {
         for (var n = [8, 7, 6, 5, 4, 3, 2, 10, 1], i = 0, c = 0; c < 9; c++)
          i += parseInt(t.charAt(c), 10) * n[c];
         return (
          (i %= 97),
          {
           meta: {},
           valid:
            parseInt(t.substr(0, 3), 10) >= 100
             ? i === 0 || i === 42 || i === 55
             : i === 0,
          }
         );
        }
        return { meta: {}, valid: !0 };
       })(u);
       break;
      case 'hr':
       v = (function (s) {
        var t = s;
        return (
         /^HR[0-9]{11}$/.test(t) && (t = t.substr(2)),
         /^[0-9]{11}$/.test(t)
          ? { meta: {}, valid: T(t) }
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 'hu':
       v = (function (s) {
        var t = s;
        if (
         (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [9, 7, 3, 1, 9, 7, 3, 1], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return { meta: {}, valid: e % 10 == 0 };
       })(u);
       break;
      case 'ie':
       v = (function (s) {
        var t = s;
        if (
         (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)),
         !/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r = function (e) {
         for (var a = e; a.length < 7; ) a = '0'.concat(a);
         for (var n = 'WABCDEFGHIJKLMNOPQRSTUV', i = 0, c = 0; c < 7; c++)
          i += parseInt(a.charAt(c), 10) * (8 - c);
         return (i += 9 * n.indexOf(a.substr(7))), n[i % 23];
        };
        return /^[0-9]+$/.test(t.substr(0, 7))
         ? {
            meta: {},
            valid:
             t.charAt(7) === r(''.concat(t.substr(0, 7)).concat(t.substr(8))),
           }
         : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(t.charAt(1)) !== -1
           ? {
              meta: {},
              valid:
               t.charAt(7) ===
               r(''.concat(t.substr(2, 5)).concat(t.substr(0, 1))),
             }
           : { meta: {}, valid: !0 };
       })(u);
       break;
      case 'is':
       v = (function (s) {
        var t = s;
        return (
         /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)),
         { meta: {}, valid: /^[0-9]{5,6}$/.test(t) }
        );
       })(u);
       break;
      case 'it':
       v = (function (s) {
        var t = s;
        if (
         (/^IT[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        if (parseInt(t.substr(0, 7), 10) === 0) return { meta: {}, valid: !1 };
        var r = parseInt(t.substr(7, 3), 10);
        return r < 1 || (r > 201 && r !== 999 && r !== 888)
         ? { meta: {}, valid: !1 }
         : { meta: {}, valid: D(t) };
       })(u);
       break;
      case 'lt':
       v = (function (s) {
        var t = s;
        if (
         (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t) && (t = t.substr(2)),
         !/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r,
         e = t.length,
         a = 0;
        for (r = 0; r < e - 1; r++)
         a += parseInt(t.charAt(r), 10) * (1 + (r % 9));
        var n = a % 11;
        if (n === 10)
         for (a = 0, r = 0; r < e - 1; r++)
          a += parseInt(t.charAt(r), 10) * (1 + ((r + 2) % 9));
        return {
         meta: {},
         valid: ''.concat((n = (n % 11) % 10)) === t.charAt(e - 1),
        };
       })(u);
       break;
      case 'lu':
       v = (function (s) {
        var t = s;
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
       })(u);
       break;
      case 'lv':
       v = (function (s) {
        var t = s;
        if (
         (/^LV[0-9]{11}$/.test(t) && (t = t.substr(2)), !/^[0-9]{11}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        var r,
         e = parseInt(t.charAt(0), 10),
         a = t.length,
         n = 0,
         i = [];
        if (e > 3) {
         for (n = 0, i = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], r = 0; r < a; r++)
          n += parseInt(t.charAt(r), 10) * i[r];
         return { meta: {}, valid: (n %= 11) == 3 };
        }
        var c = parseInt(t.substr(0, 2), 10),
         d = parseInt(t.substr(2, 2), 10),
         b = parseInt(t.substr(4, 2), 10);
        if (((b = b + 1800 + 100 * parseInt(t.charAt(6), 10)), !Z(b, d, c)))
         return { meta: {}, valid: !1 };
        for (n = 0, i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], r = 0; r < a - 1; r++)
         n += parseInt(t.charAt(r), 10) * i[r];
        return {
         meta: {},
         valid: ''.concat((n = ((n + 1) % 11) % 10)) === t.charAt(a - 1),
        };
       })(u);
       break;
      case 'mt':
       v = (function (s) {
        var t = s;
        if (
         (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [3, 4, 6, 7, 8, 9, 10, 1], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return { meta: {}, valid: e % 37 == 0 };
       })(u);
       break;
      case 'nl':
       v = (function (s) {
        var t = s;
        return (
         /^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)),
         /^[0-9]{9}B[0-9]{2}$/.test(t)
          ? { meta: {}, valid: B(t.substr(0, 9)).valid || R('NL'.concat(t)) }
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 'no':
       v = (function (s) {
        var t = s;
        if (
         (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [3, 2, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return (
         (e = 11 - (e % 11)) == 11 && (e = 0),
         { meta: {}, valid: ''.concat(e) === t.substr(8, 1) }
        );
       })(u);
       break;
      case 'pl':
       v = (function (s) {
        var t = s;
        if (
         (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], e = 0, a = 0; a < 10; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return { meta: {}, valid: e % 11 == 0 };
       })(u);
       break;
      case 'pt':
       v = (function (s) {
        var t = s;
        if (
         (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = [9, 8, 7, 6, 5, 4, 3, 2], e = 0, a = 0; a < 8; a++)
         e += parseInt(t.charAt(a), 10) * r[a];
        return (
         (e = 11 - (e % 11)) > 9 && (e = 0),
         { meta: {}, valid: ''.concat(e) === t.substr(8, 1) }
        );
       })(u);
       break;
      case 'ro':
       v = (function (s) {
        var t = s;
        if (
         (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)),
         !/^[1-9][0-9]{1,9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (
         var r = t.length,
          e = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - r),
          a = 0,
          n = 0;
         n < r - 1;
         n++
        )
         a += parseInt(t.charAt(n), 10) * e[n];
        return {
         meta: {},
         valid: ''.concat((a = ((10 * a) % 11) % 10)) === t.substr(r - 1, 1),
        };
       })(u);
       break;
      case 'rs':
       v = (function (s) {
        var t = s;
        if (
         (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (var r = 10, e = 0, a = 0; a < 8; a++)
         (e = (parseInt(t.charAt(a), 10) + r) % 10) == 0 && (e = 10),
          (r = (2 * e) % 11);
        return {
         meta: {},
         valid: (r + parseInt(t.substr(8, 1), 10)) % 10 == 1,
        };
       })(u);
       break;
      case 'ru':
       v = (function (s) {
        var t = s;
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
          (a %= 11) > 9 && (a %= 10),
          { meta: {}, valid: ''.concat(a) === t.substr(9, 1) }
         );
        }
        if (t.length === 12) {
         var n = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          i = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          c = 0,
          d = 0;
         for (r = 0; r < 11; r++)
          (c += parseInt(t.charAt(r), 10) * n[r]),
           (d += parseInt(t.charAt(r), 10) * i[r]);
         return (
          (c %= 11) > 9 && (c %= 10),
          (d %= 11) > 9 && (d %= 10),
          {
           meta: {},
           valid:
            ''.concat(c) === t.substr(10, 1) &&
            ''.concat(d) === t.substr(11, 1),
          }
         );
        }
        return { meta: {}, valid: !0 };
       })(u);
       break;
      case 'se':
       v = (function (s) {
        var t = s;
        return (
         /^SE[0-9]{10}01$/.test(t) && (t = t.substr(2)),
         /^[0-9]{10}01$/.test(t)
          ? ((t = t.substr(0, 10)), { meta: {}, valid: H(t) })
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 'si':
       v = (function (s) {
        var t = s.match(/^(SI)?([1-9][0-9]{7})$/);
        if (!t) return { meta: {}, valid: !1 };
        for (
         var r = t[1] ? s.substr(2) : s,
          e = [8, 7, 6, 5, 4, 3, 2],
          a = 0,
          n = 0;
         n < 7;
         n++
        )
         a += parseInt(r.charAt(n), 10) * e[n];
        return (
         (a = 11 - (a % 11)) == 10 && (a = 0),
         { meta: {}, valid: ''.concat(a) === r.substr(7, 1) }
        );
       })(u);
       break;
      case 'sk':
       v = (function (s) {
        var t = s;
        return (
         /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)),
         /^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)
          ? { meta: {}, valid: parseInt(t, 10) % 11 == 0 }
          : { meta: {}, valid: !1 }
        );
       })(u);
       break;
      case 've':
       v = (function (s) {
        var t = s;
        if (
         (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)),
         !/^[VEJPG][0-9]{9}$/.test(t))
        )
         return { meta: {}, valid: !1 };
        for (
         var r = [3, 2, 7, 6, 5, 4, 3, 2],
          e = { E: 8, G: 20, J: 12, P: 16, V: 4 }[t.charAt(0)],
          a = 0;
         a < 8;
         a++
        )
         e += parseInt(t.charAt(a + 1), 10) * r[a];
        return (
         ((e = 11 - (e % 11)) != 11 && e !== 10) || (e = 0),
         { meta: {}, valid: ''.concat(e) === t.substr(9, 1) }
        );
       })(u);
       break;
      case 'za':
       v = (function (s) {
        var t = s;
        return (
         /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)),
         { meta: {}, valid: /^4[0-9]{9}$/.test(t) }
        );
       })(u);
     }
     var F = L(
      l.l10n && l.l10n.vat ? m.message || l.l10n.vat.country : m.message,
      l.l10n && l.l10n.vat && l.l10n.vat.countries
       ? l.l10n.vat.countries[f.toUpperCase()]
       : f.toUpperCase(),
     );
     return Object.assign({}, { message: F }, v);
    },
   };
  };
 });
});
export default O();
