var s = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var F = s((r, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-uuid
  * @version 2.4.0
  */ (function (e, n) {
  typeof r == 'object' && typeof i < 'u'
   ? (i.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.uuid = n(e.FormValidation)));
 })(void 0, function (e) {
  var n = e.utils.format,
   d = e.utils.removeUndefined;
  return function () {
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var o = Object.assign({}, { message: '' }, d(a.options)),
      t = {
       3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
       4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
       all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      },
      l = o.version ? ''.concat(o.version) : 'all';
     return {
      message: o.version
       ? n(a.l10n ? o.message || a.l10n.uuid.version : o.message, o.version)
       : a.l10n
         ? a.l10n.uuid.default
         : o.message,
      valid: t[l] === null || t[l].test(a.value),
     };
    },
   };
  };
 });
});
export default F();
