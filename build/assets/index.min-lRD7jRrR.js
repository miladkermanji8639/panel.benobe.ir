var u = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var v = u((r, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-vin
  * @version 2.4.0
  */ (function (n, i) {
  typeof r == 'object' && typeof o < 'u'
   ? (o.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.vin = i()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(n.value))
      return { valid: !1 };
     for (
      var i = n.value.toUpperCase(),
       d = {
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
       l = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
       f = i.length,
       t = 0,
       a = 0;
      a < f;
      a++
     )
      t += d[''.concat(i.charAt(a))] * l[a];
     var e = ''.concat(t % 11);
     return e === '10' && (e = 'X'), { valid: e === i.charAt(8) };
    },
   };
  };
 });
});
export default v();
