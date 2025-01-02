var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var u = s((a, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-j
  * @version 2.4.0
  */ (function (e, t) {
  typeof a == 'object' && typeof f < 'u'
   ? t(require('jquery'), require('@form-validation/core'))
   : typeof define == 'function' && define.amd
     ? define(['jquery', '@form-validation/core'], t)
     : t(
        (e = typeof globalThis < 'u' ? globalThis : e || self).$,
        e.FormValidation,
       );
 })(void 0, function (e, t) {
  const n = e.fn.jquery.split(' ')[0].split('.');
  if ((+n[0] < 2 && +n[1] < 9) || (+n[0] == 1 && +n[1] == 9 && +n[2] < 1))
   throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
  e.fn.formValidation = function (o) {
   const d = arguments;
   return this.each(function () {
    const r = e(this);
    let i = r.data('formValidation');
    const l = typeof o == 'object' && o;
    i ||
     ((i = t.formValidation(this, l)),
     r.data('formValidation', i).data('FormValidation', i)),
     typeof o == 'string' && i[o].apply(i, Array.prototype.slice.call(d, 1));
   });
  };
 });
});
export default u();
