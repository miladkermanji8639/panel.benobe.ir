var l = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var u = l((v, n) => {
 (function (e, r) {
  typeof v == 'object' && typeof n < 'u'
   ? (n.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.meid = r(e.FormValidation)));
 })(void 0, function (e) {
  var r = e.algorithms.luhn;
  function s() {
   return {
    validate: function (o) {
     if (o.value === '') return { valid: !0 };
     var t = o.value;
     if (
      /^[0-9A-F]{15}$/i.test(t) ||
      /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(t) ||
      /^\d{19}$/.test(t) ||
      /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(t)
     ) {
      var f = t.charAt(t.length - 1).toUpperCase();
      if (((t = t.replace(/[- ]/g, '')), t.match(/^\d*$/i)))
       return { valid: r(t) };
      t = t.slice(0, -1);
      var d = '',
       a = void 0;
      for (a = 1; a <= 13; a += 2)
       d += (parseInt(t.charAt(a), 16) * 2).toString(16);
      var i = 0;
      for (a = 0; a < d.length; a++) i += parseInt(d.charAt(a), 16);
      return {
       valid:
        i % 10 === 0
         ? f === '0'
         : f ===
           ((Math.floor((i + 10) / 10) * 10 - i) * 2)
            .toString(16)
            .toUpperCase(),
      };
     }
     return /^[0-9A-F]{14}$/i.test(t) ||
      /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(t) ||
      /^\d{18}$/.test(t) ||
      /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(t)
      ? { valid: !0 }
      : { valid: !1 };
    },
   };
  }
  return s;
 });
});
export default u();
