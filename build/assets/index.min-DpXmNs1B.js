var u = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var m = u((d, t) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-remote
  * @version 2.4.0
  */ (function (e, i) {
  typeof d == 'object' && typeof t < 'u'
   ? (t.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.remote = i(e.FormValidation)));
 })(void 0, function (e) {
  var i = e.utils.fetch,
   l = e.utils.removeUndefined;
  return function () {
   var s = {
    crossDomain: !1,
    data: {},
    headers: {},
    method: 'GET',
    validKey: 'valid',
   };
   return {
    validate: function (o) {
     if (o.value === '') return Promise.resolve({ valid: !0 });
     var a = Object.assign({}, s, l(o.options)),
      n = a.data;
     typeof a.data == 'function' && (n = a.data.call(this, o)),
      typeof n == 'string' && (n = JSON.parse(n)),
      (n[a.name || o.field] = o.value);
     var f = typeof a.url == 'function' ? a.url.call(this, o) : a.url;
     return i(f, {
      crossDomain: a.crossDomain,
      headers: a.headers,
      method: a.method,
      params: n,
     })
      .then(function (r) {
       return Promise.resolve({
        message: r.message,
        meta: r,
        valid: ''.concat(r[a.validKey]) === 'true',
       });
      })
      .catch(function (r) {
       return Promise.reject({ valid: !1 });
      });
    },
   };
  };
 });
});
export default m();
