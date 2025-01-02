var V = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var y = V((z, v) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-email-address
  * @version 2.4.0
  */ (function (e, i) {
  typeof z == 'object' && typeof v < 'u'
   ? (v.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.emailAddress = i(e.FormValidation)));
 })(void 0, function (e) {
  var i = e.utils.removeUndefined,
   Z =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   c =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return function () {
   return {
    validate: function (o) {
     if (o.value === '') return { valid: !0 };
     var n = Object.assign(
       {},
       { multiple: !1, requireGlobalDomain: !1, separator: /[,;]/ },
       i(o.options),
      ),
      p = n.requireGlobalDomain ? c : Z;
     if (n.multiple === !0 || ''.concat(n.multiple) === 'true') {
      for (
       var h = n.separator || /[,;]/,
        m = (function (g, F) {
         for (
          var f = g.split(/"/), A = f.length, l = [], a = '', t = 0;
          t < A;
          t++
         )
          if (t % 2 == 0) {
           var r = f[t].split(F),
            s = r.length;
           if (s === 1) a += r[0];
           else {
            l.push(a + r[0]);
            for (var u = 1; u < s - 1; u++) l.push(r[u]);
            a = r[s - 1];
           }
          } else (a += '"' + f[t]), t < A - 1 && (a += '"');
         return l.push(a), l;
        })(o.value, h),
        b = m.length,
        d = 0;
       d < b;
       d++
      )
       if (!p.test(m[d])) return { valid: !1 };
      return { valid: !0 };
     }
     return { valid: p.test(o.value) };
    },
   };
  };
 });
});
export default y();
