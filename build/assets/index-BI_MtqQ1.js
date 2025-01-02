var l = (a, r) => () => (r || a((r = { exports: {} }).exports, r), r.exports);
var v = l((c, d) => {
 (function (a, r) {
  typeof c == 'object' && typeof d < 'u'
   ? (d.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.numeric = r(a.FormValidation)));
 })(void 0, function (a) {
  var r = a.utils.removeUndefined;
  function u() {
   return {
    validate: function (i) {
     if (i.value === '') return { valid: !0 };
     var t = Object.assign(
       {},
       { decimalSeparator: '.', thousandsSeparator: '' },
       r(i.options),
      ),
      e = ''.concat(i.value);
     e.substr(0, 1) === t.decimalSeparator
      ? (e = '0'.concat(t.decimalSeparator).concat(e.substr(1)))
      : e.substr(0, 2) === '-'.concat(t.decimalSeparator) &&
        (e = '-0'.concat(t.decimalSeparator).concat(e.substr(2)));
     var n = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
      o = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
      f = new RegExp(
       '^-?[0-9]{1,3}('.concat(o, '[0-9]{3})*(').concat(n, '[0-9]+)?$'),
      ),
      p = new RegExp(o, 'g');
     if (!f.test(e)) return { valid: !1 };
     o && (e = e.replace(p, '')), n && (e = e.replace(n, '.'));
     var s = parseFloat(e);
     return { valid: !isNaN(s) && isFinite(s) };
    },
   };
  }
  return u;
 });
});
export default v();
