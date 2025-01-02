var l = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var h = l((p, f) => {
 (function (e, i) {
  typeof p == 'object' && typeof f < 'u'
   ? (f.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Transformer = i(e.FormValidation)));
 })(void 0, function (e) {
  var i = function (r, n) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, t) {
       o.__proto__ = t;
      }) ||
     function (o, t) {
      for (var s in t)
       Object.prototype.hasOwnProperty.call(t, s) && (o[s] = t[s]);
     }),
    i(r, n)
   );
  };
  function c(r, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   i(r, n);
   function o() {
    this.constructor = r;
   }
   r.prototype =
    n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
  }
  var a = (function (r) {
   c(n, r);
   function n(o) {
    var t = r.call(this, o) || this;
    return (t.valueFilter = t.getElementValue.bind(t)), t;
   }
   return (
    (n.prototype.install = function () {
     this.core.registerFilter('field-value', this.valueFilter);
    }),
    (n.prototype.uninstall = function () {
     this.core.deregisterFilter('field-value', this.valueFilter);
    }),
    (n.prototype.getElementValue = function (o, t, s, u) {
     return this.isEnabled &&
      this.opts[t] &&
      this.opts[t][u] &&
      typeof this.opts[t][u] == 'function'
      ? this.opts[t][u].apply(this, [t, s, u])
      : o;
    }),
    n
   );
  })(e.Plugin);
  return a;
 });
});
export default h();
