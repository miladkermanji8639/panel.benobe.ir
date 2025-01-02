var t = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var a = t((e, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-base64
  * @version 2.4.0
  */ (function (i, n) {
  typeof e == 'object' && typeof o < 'u'
   ? (o.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.base64 = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (i) {
     return {
      valid:
       i.value === '' ||
       /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
        i.value,
       ),
     };
    },
   };
  };
 });
});
export default a();
