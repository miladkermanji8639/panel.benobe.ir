var o = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports);
var u = o((r, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-ismn
  * @version 2.4.0
  */ (function (a, t) {
  typeof r == 'object' && typeof i < 'u'
   ? (i.exports = t())
   : typeof define == 'function' && define.amd
     ? define(t)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.ismn = t()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (a) {
     if (a.value === '') return { meta: null, valid: !0 };
     var t;
     switch (!0) {
      case /^M\d{9}$/.test(a.value):
      case /^M-\d{4}-\d{4}-\d{1}$/.test(a.value):
      case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(a.value):
       t = 'ISMN10';
       break;
      case /^9790\d{9}$/.test(a.value):
      case /^979-0-\d{4}-\d{4}-\d{1}$/.test(a.value):
      case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(a.value):
       t = 'ISMN13';
       break;
      default:
       return { meta: null, valid: !1 };
     }
     var e = a.value;
     t === 'ISMN10' && (e = '9790'.concat(e.substr(1)));
     for (
      var d = 0, s = (e = e.replace(/[^0-9]/gi, '')).length, l = [1, 3], n = 0;
      n < s - 1;
      n++
     )
      d += parseInt(e.charAt(n), 10) * l[n % 2];
     return {
      meta: { type: t },
      valid: ''.concat((d = (10 - (d % 10)) % 10)) === e.charAt(s - 1),
     };
    },
   };
  };
 });
});
export default u();
