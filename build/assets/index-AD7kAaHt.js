var u = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var v = u((d, n) => {
 (function (e, i) {
  typeof d == 'object' && typeof n < 'u'
   ? (n.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.remote = i(e.FormValidation)));
 })(void 0, function (e) {
  var i = e.utils.fetch,
   s = e.utils.removeUndefined;
  function f() {
   var m = {
    crossDomain: !1,
    data: {},
    headers: {},
    method: 'GET',
    validKey: 'valid',
   };
   return {
    validate: function (t) {
     if (t.value === '') return Promise.resolve({ valid: !0 });
     var a = Object.assign({}, m, s(t.options)),
      r = a.data;
     typeof a.data == 'function' && (r = a.data.call(this, t)),
      typeof r == 'string' && (r = JSON.parse(r)),
      (r[a.name || t.field] = t.value);
     var l = typeof a.url == 'function' ? a.url.call(this, t) : a.url;
     return i(l, {
      crossDomain: a.crossDomain,
      headers: a.headers,
      method: a.method,
      params: r,
     })
      .then(function (o) {
       return Promise.resolve({
        message: o.message,
        meta: o,
        valid: ''.concat(o[a.validKey]) === 'true',
       });
      })
      .catch(function (o) {
       return Promise.reject({ valid: !1 });
      });
    },
   };
  }
  return f;
 });
});
export default v();
