var c = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var l = c((d, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-cusip
  * @version 2.4.0
  */ (function (e, r) {
  typeof d == 'object' && typeof i < 'u'
   ? (i.exports = r())
   : typeof define == 'function' && define.amd
     ? define(r)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.cusip = r()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var r = e.value.toUpperCase();
     if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(r))
      return { valid: !1 };
     var o = r.split(''),
      u = o.pop(),
      f = o
       .map(function (a) {
        var n = a.charCodeAt(0);
        switch (!0) {
         case a === '*':
          return 36;
         case a === '@':
          return 37;
         case a === '#':
          return 38;
         case n >= 65 && n <= 90:
          return n - 65 + 10;
         default:
          return parseInt(a, 10);
        }
       })
       .map(function (a, n) {
        var t = n % 2 == 0 ? a : 2 * a;
        return Math.floor(t / 10) + (t % 10);
       })
       .reduce(function (a, n) {
        return a + n;
       }, 0);
     return { valid: u === ''.concat((10 - (f % 10)) % 10) };
    },
   };
  };
 });
});
export default l();
