var h = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var g = h((u, s) => {
 (function (i, n) {
  typeof u == 'object' && typeof s < 'u'
   ? (s.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Excluded = n(i.FormValidation)));
 })(void 0, function (i) {
  var n = function (r, e) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, t) {
       o.__proto__ = t;
      }) ||
     function (o, t) {
      for (var d in t)
       Object.prototype.hasOwnProperty.call(t, d) && (o[d] = t[d]);
     }),
    n(r, e)
   );
  };
  function l(r, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   n(r, e);
   function o() {
    this.constructor = r;
   }
   r.prototype =
    e === null ? Object.create(e) : ((o.prototype = e.prototype), new o());
  }
  var f = i.utils.removeUndefined,
   c = (function (r) {
    l(e, r);
    function e(o) {
     var t = r.call(this, o) || this;
     return (
      (t.opts = Object.assign({}, { excluded: e.defaultIgnore }, f(o))),
      (t.ignoreValidationFilter = t.ignoreValidation.bind(t)),
      t
     );
    }
    return (
     (e.defaultIgnore = function (o, t, d) {
      var p = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length),
       a = t.getAttribute('disabled');
      return (
       a === '' || a === 'disabled' || t.getAttribute('type') === 'hidden' || !p
      );
     }),
     (e.prototype.install = function () {
      this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
     }),
     (e.prototype.uninstall = function () {
      this.core.deregisterFilter(
       'element-ignored',
       this.ignoreValidationFilter,
      );
     }),
     (e.prototype.ignoreValidation = function (o, t, d) {
      return this.isEnabled ? this.opts.excluded.apply(this, [o, t, d]) : !1;
     }),
     e
    );
   })(i.Plugin);
  return c;
 });
});
export default g();
