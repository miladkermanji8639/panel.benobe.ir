var o = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var d = o((e, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-not-empty
  * @version 2.4.0
  */ (function (i, n) {
  typeof e == 'object' && typeof a < 'u'
   ? (a.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.validators = i.FormValidation.validators || {}),
       (i.FormValidation.validators.notEmpty = n()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (i) {
     var n = !!i.options && !!i.options.trim,
      t = i.value;
     return { valid: (!n && t !== '') || (n && t !== '' && t.trim() !== '') };
    },
   };
  };
 });
});
export default d();
