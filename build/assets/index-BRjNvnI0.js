var c = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var d = c((l, s) => {
 (function (n, e) {
  typeof l == 'object' && typeof s < 'u'
   ? (s.exports = e(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], e)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Alias = e(n.FormValidation)));
 })(void 0, function (n) {
  var e = function (r, t) {
   return (
    (e =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (i, o) {
       i.__proto__ = o;
      }) ||
     function (i, o) {
      for (var a in o)
       Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
     }),
    e(r, t)
   );
  };
  function u(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   e(r, t);
   function i() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((i.prototype = t.prototype), new i());
  }
  var f = (function (r) {
   u(t, r);
   function t(i) {
    var o = r.call(this, i) || this;
    return (
     (o.opts = i || {}), (o.validatorNameFilter = o.getValidatorName.bind(o)), o
    );
   }
   return (
    (t.prototype.install = function () {
     this.core.registerFilter('validator-name', this.validatorNameFilter);
    }),
    (t.prototype.uninstall = function () {
     this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    }),
    (t.prototype.getValidatorName = function (i, o) {
     return (this.isEnabled && this.opts[i]) || i;
    }),
    t
   );
  })(n.Plugin);
  return f;
 });
});
export default d();
