var l = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var s = l((t, n) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-string-case
  * @version 2.4.0
  */ (function (a, e) {
  typeof t == 'object' && typeof n < 'u'
   ? (n.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.stringCase = e(a.FormValidation)));
 })(void 0, function (a) {
  var e = a.utils.removeUndefined;
  return function () {
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     var o = Object.assign({}, { case: 'lower' }, e(i.options)),
      r = (o.case || 'lower').toLowerCase();
     return {
      message:
       o.message ||
       (i.l10n
        ? r === 'upper'
          ? i.l10n.stringCase.upper
          : i.l10n.stringCase.default
        : o.message),
      valid:
       r === 'upper'
        ? i.value === i.value.toUpperCase()
        : i.value === i.value.toLowerCase(),
     };
    },
   };
  };
 });
});
export default s();
