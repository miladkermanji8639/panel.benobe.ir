var o = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var a = o((t, e) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-different
  * @version 2.4.0
  */ (function (i, n) {
  typeof t == 'object' && typeof e < 'u'
   ? (e.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.different = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (i) {
     var n =
      typeof i.options.compare == 'function'
       ? i.options.compare.call(this)
       : i.options.compare;
     return { valid: n === '' || i.value !== n };
    },
   };
  };
 });
});
export default a();
