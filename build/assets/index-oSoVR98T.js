var u = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var l = u((a, f) => {
 (function (e, i) {
  typeof a == 'object' && typeof f < 'u'
   ? i(require('jquery'), require('@form-validation/core'))
   : typeof define == 'function' && define.amd
     ? define(['jquery', '@form-validation/core'], i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       i(e.$, e.FormValidation));
 })(void 0, function (e, i) {
  const n = e.fn.jquery.split(' ')[0].split('.');
  if ((+n[0] < 2 && +n[1] < 9) || (+n[0] == 1 && +n[1] == 9 && +n[2] < 1))
   throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
  e.fn.formValidation = function (o) {
   const d = arguments;
   return this.each(function () {
    const r = e(this);
    let t = r.data('formValidation');
    const s = typeof o == 'object' && o;
    t ||
     ((t = i.formValidation(this, s)),
     r.data('formValidation', t).data('FormValidation', t)),
     typeof o == 'string' && t[o].apply(t, Array.prototype.slice.call(d, 1));
   });
  };
 });
});
export default l();
