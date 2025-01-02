var l = (a, i) => () => (i || a((i = { exports: {} }).exports, i), i.exports);
var d = l((t, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-callback
  * @version 2.4.0
  */ (function (a, i) {
  typeof t == 'object' && typeof o < 'u'
   ? (o.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.callback = i(a.FormValidation)));
 })(void 0, function (a) {
  var i = a.utils.call;
  return function () {
   return {
    validate: function (e) {
     var n = i(e.options.callback, [e]);
     return typeof n == 'boolean' ? { valid: n } : n;
    },
   };
  };
 });
});
export default d();
