var l = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var y = l((c, p) => {
 (function (e, r) {
  typeof c == 'object' && typeof p < 'u'
   ? (p.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.L10n = r(e.FormValidation)));
 })(void 0, function (e) {
  var r = function (o, t) {
   return (
    (r =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (i, n) {
       i.__proto__ = n;
      }) ||
     function (i, n) {
      for (var s in n)
       Object.prototype.hasOwnProperty.call(n, s) && (i[s] = n[s]);
     }),
    r(o, t)
   );
  };
  function d(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   r(o, t);
   function i() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((i.prototype = t.prototype), new i());
  }
  var h = (function (o) {
   d(t, o);
   function t(i) {
    var n = o.call(this, i) || this;
    return (n.messageFilter = n.getMessage.bind(n)), n;
   }
   return (
    (t.prototype.install = function () {
     this.core.registerFilter('validator-message', this.messageFilter);
    }),
    (t.prototype.uninstall = function () {
     this.core.deregisterFilter('validator-message', this.messageFilter);
    }),
    (t.prototype.getMessage = function (i, n, s) {
     if (!this.isEnabled) return '';
     if (this.opts[n] && this.opts[n][s]) {
      var u = this.opts[n][s],
       a = typeof u;
      if (a === 'object' && u[i]) return u[i];
      if (a === 'function') {
       var f = u.apply(this, [n, s]);
       return f && f[i] ? f[i] : '';
      }
     }
     return '';
    }),
    t
   );
  })(e.Plugin);
  return h;
 });
});
export default y();
