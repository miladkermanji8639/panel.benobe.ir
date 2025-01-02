var s = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var d = s((l, t) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-greater-than
  * @version 2.4.0
  */ (function (a, e) {
  typeof l == 'object' && typeof t < 'u'
   ? (t.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.greaterThan = e(a.FormValidation)));
 })(void 0, function (a) {
  var e = a.utils.format,
   r = a.utils.removeUndefined;
  return function () {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var i = Object.assign({}, { inclusive: !0, message: '' }, r(n.options)),
      o = parseFloat(''.concat(i.min).replace(',', '.'));
     return i.inclusive
      ? {
         message: e(
          n.l10n ? i.message || n.l10n.greaterThan.default : i.message,
          ''.concat(o),
         ),
         valid: parseFloat(n.value) >= o,
        }
      : {
         message: e(
          n.l10n ? i.message || n.l10n.greaterThan.notInclusive : i.message,
          ''.concat(o),
         ),
         valid: parseFloat(n.value) > o,
        };
    },
   };
  };
 });
});
export default d();
