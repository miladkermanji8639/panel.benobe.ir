var r = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var d = r((e, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-imo
  * @version 2.4.0
  */ (function (i, n) {
  typeof e == 'object' && typeof a < 'u'
   ? (a.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.imo = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     if (!/^IMO \d{7}$/i.test(i.value)) return { valid: !1 };
     for (
      var n = i.value.replace(/^.*(\d{7})$/, '$1'), o = 0, t = 6;
      t >= 1;
      t--
     )
      o += parseInt(n.slice(6 - t, -t), 10) * (t + 1);
     return { valid: o % 10 === parseInt(n.charAt(6), 10) };
    },
   };
  };
 });
});
export default d();
