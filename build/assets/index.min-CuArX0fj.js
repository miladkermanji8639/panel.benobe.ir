var c = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports);
var p = c((u, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-excluded
  * @version 2.4.0
  */ (function (e, o) {
  typeof u == 'object' && typeof a < 'u'
   ? (a.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Excluded = o(e.FormValidation)));
 })(void 0, function (e) {
  var o = function (l, i) {
    return (
     (o =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (n, t) {
        n.__proto__ = t;
       }) ||
      function (n, t) {
       for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }),
     o(l, i)
    );
   },
   s = e.utils.removeUndefined;
  return (function (l) {
   function i(n) {
    var t = l.call(this, n) || this;
    return (
     (t.opts = Object.assign({}, { excluded: i.defaultIgnore }, s(n))),
     (t.ignoreValidationFilter = t.ignoreValidation.bind(t)),
     t
    );
   }
   return (
    (function (n, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function r() {
      this.constructor = n;
     }
     o(n, t),
      (n.prototype =
       t === null ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    })(i, l),
    (i.defaultIgnore = function (n, t, r) {
     var f = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length),
      d = t.getAttribute('disabled');
     return (
      d === '' || d === 'disabled' || t.getAttribute('type') === 'hidden' || !f
     );
    }),
    (i.prototype.install = function () {
     this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    }),
    (i.prototype.uninstall = function () {
     this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    }),
    (i.prototype.ignoreValidation = function (n, t, r) {
     return !!this.isEnabled && this.opts.excluded.apply(this, [n, t, r]);
    }),
    i
   );
  })(e.Plugin);
 });
});
export default p();
