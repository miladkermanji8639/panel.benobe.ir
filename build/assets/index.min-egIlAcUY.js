var r = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var l = r((o, n) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-issn
  * @version 2.4.0
  */ (function (e, a) {
  typeof o == 'object' && typeof n < 'u'
   ? (n.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.issn = a()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     if (!/^\d{4}-\d{3}[\dX]$/.test(e.value)) return { valid: !1 };
     var a = e.value.replace(/[^0-9X]/gi, '').split(''),
      d = a.length,
      i = 0;
     a[7] === 'X' && (a[7] = '10');
     for (var t = 0; t < d; t++) i += parseInt(a[t], 10) * (8 - t);
     return { valid: i % 11 == 0 };
    },
   };
  };
 });
});
export default l();
