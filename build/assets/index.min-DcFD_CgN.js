var d = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports);
var l = d((e, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-siret
  * @version 2.4.0
  */ (function (t, n) {
  typeof e == 'object' && typeof i < 'u'
   ? (i.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.validators = t.FormValidation.validators || {}),
       (t.FormValidation.validators.siret = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (t) {
     if (t.value === '') return { valid: !0 };
     for (var n, r = t.value.length, o = 0, a = 0; a < r; a++)
      (n = parseInt(t.value.charAt(a), 10)),
       a % 2 == 0 && (n *= 2) > 9 && (n -= 9),
       (o += n);
     return { valid: o % 10 == 0 };
    },
   };
  };
 });
});
export default l();
