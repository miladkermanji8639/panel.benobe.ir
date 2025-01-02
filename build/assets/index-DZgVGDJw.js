var c = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var l = c((f, s) => {
 (function (e, a) {
  typeof f == 'object' && typeof s < 'u'
   ? (s.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.integer = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.removeUndefined;
  function u() {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var t = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       a(n.options),
      ),
      o = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
      d = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
      v = new RegExp(
       '^-?[0-9]{1,3}('.concat(d, '[0-9]{3})*(').concat(o, '[0-9]+)?$'),
      ),
      p = new RegExp(d, 'g'),
      r = ''.concat(n.value);
     if (!v.test(r)) return { valid: !1 };
     d && (r = r.replace(p, '')), o && (r = r.replace(o, '.'));
     var i = parseFloat(r);
     return { valid: !isNaN(i) && isFinite(i) && Math.floor(i) === i };
    },
   };
  }
  return u;
 });
});
export default l();
