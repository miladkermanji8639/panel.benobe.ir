var r = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var d = r((n, t) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-grid
  * @version 2.4.0
  */ (function (e, a) {
  typeof n == 'object' && typeof t < 'u'
   ? (t.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.grid = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.algorithms.mod37And36;
  return function () {
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     var o = i.value.toUpperCase();
     return /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
      o,
     )
      ? ((o = o.replace(/\s/g, '').replace(/-/g, '')).substr(0, 5) ===
         'GRID:' && (o = o.substr(5)),
        { valid: a(o) })
      : { valid: !1 };
    },
   };
  };
 });
});
export default d();
