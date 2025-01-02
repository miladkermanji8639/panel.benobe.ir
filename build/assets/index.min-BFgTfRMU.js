var f = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var u = f((d, r) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-between
  * @version 2.4.0
  */ (function (e, a) {
  typeof d == 'object' && typeof r < 'u'
   ? (r.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.between = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.format,
   c = e.utils.removeUndefined;
  return function () {
   var s = function (n) {
    return parseFloat(''.concat(n).replace(',', '.'));
   };
   return {
    validate: function (n) {
     var t = n.value;
     if (t === '') return { valid: !0 };
     var i = Object.assign({}, { inclusive: !0, message: '' }, c(n.options)),
      o = s(i.min),
      l = s(i.max);
     return i.inclusive
      ? {
         message: a(n.l10n ? i.message || n.l10n.between.default : i.message, [
          ''.concat(o),
          ''.concat(l),
         ]),
         valid: parseFloat(t) >= o && parseFloat(t) <= l,
        }
      : {
         message: a(
          n.l10n ? i.message || n.l10n.between.notInclusive : i.message,
          [''.concat(o), ''.concat(l)],
         ),
         valid: parseFloat(t) > o && parseFloat(t) < l,
        };
    },
   };
  };
 });
});
export default u();
