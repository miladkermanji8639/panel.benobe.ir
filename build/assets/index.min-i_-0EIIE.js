var t = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var r = t((a, e) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-promise
  * @version 2.4.0
  */ (function (i, n) {
  typeof a == 'object' && typeof e < 'u'
   ? (e.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.promise = n(i.FormValidation)));
 })(void 0, function (i) {
  var n = i.utils.call;
  return function () {
   return {
    validate: function (o) {
     return n(o.options.promise, [o]);
    },
   };
  };
 });
});
export default r();
