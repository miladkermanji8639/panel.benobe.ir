var t = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var e = t((a, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-hex
  * @version 2.4.0
  */ (function (n, i) {
  typeof a == 'object' && typeof o < 'u'
   ? (o.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.hex = i()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     return { valid: n.value === '' || /^[0-9a-fA-F]+$/.test(n.value) };
    },
   };
  };
 });
});
export default e();
