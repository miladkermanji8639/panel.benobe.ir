var r = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var d = r((t, l) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-less-than
  * @version 2.4.0
  */ (function (a, n) {
  typeof t == 'object' && typeof l < 'u'
   ? (l.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.lessThan = n(a.FormValidation)));
 })(void 0, function (a) {
  var n = a.utils.format,
   s = a.utils.removeUndefined;
  return function () {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     var i = Object.assign({}, { inclusive: !0, message: '' }, s(e.options)),
      o = parseFloat(''.concat(i.max).replace(',', '.'));
     return i.inclusive
      ? {
         message: n(
          e.l10n ? i.message || e.l10n.lessThan.default : i.message,
          ''.concat(o),
         ),
         valid: parseFloat(e.value) <= o,
        }
      : {
         message: n(
          e.l10n ? i.message || e.l10n.lessThan.notInclusive : i.message,
          ''.concat(o),
         ),
         valid: parseFloat(e.value) < o,
        };
    },
   };
  };
 });
});
export default d();
