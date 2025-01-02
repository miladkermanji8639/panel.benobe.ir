var e = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var t = e((a, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-blank
  * @version 2.4.0
  */ (function (n, i) {
  typeof a == 'object' && typeof o < 'u'
   ? (o.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.blank = i()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     return { valid: !0 };
    },
   };
  };
 });
});
export default t();
