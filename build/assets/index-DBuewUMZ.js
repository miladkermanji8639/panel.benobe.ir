var c = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var h = c((A, s) => {
 (function (e, a) {
  typeof A == 'object' && typeof s < 'u'
   ? (s.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.emailAddress = a(e.FormValidation)));
 })(void 0, function (e) {
  var a = e.utils.removeUndefined,
   z =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   Z =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  function m() {
   var p = function (n, o) {
    for (var v = n.split(/"/), f = v.length, u = [], r = '', t = 0; t < f; t++)
     if (t % 2 === 0) {
      var i = v[t].split(o),
       l = i.length;
      if (l === 1) r += i[0];
      else {
       u.push(r + i[0]);
       for (var d = 1; d < l - 1; d++) u.push(i[d]);
       r = i[l - 1];
      }
     } else (r += '"' + v[t]), t < f - 1 && (r += '"');
    return u.push(r), u;
   };
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var o = Object.assign(
       {},
       { multiple: !1, requireGlobalDomain: !1, separator: /[,;]/ },
       a(n.options),
      ),
      v = o.requireGlobalDomain ? Z : z,
      f = o.multiple === !0 || ''.concat(o.multiple) === 'true';
     if (f) {
      for (
       var u = o.separator || /[,;]/, r = p(n.value, u), t = r.length, i = 0;
       i < t;
       i++
      )
       if (!v.test(r[i])) return { valid: !1 };
      return { valid: !0 };
     } else return { valid: v.test(n.value) };
    },
   };
  }
  return m;
 });
});
export default h();
