var f = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var p = f((s, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-transformer
  * @version 2.4.0
  */ (function (e, n) {
  typeof s == 'object' && typeof a < 'u'
   ? (a.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Transformer = n(e.FormValidation)));
 })(void 0, function (e) {
  var n = function (l, r) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (i, t) {
       i.__proto__ = t;
      }) ||
     function (i, t) {
      for (var o in t)
       Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
     }),
    n(l, r)
   );
  };
  return (function (l) {
   function r(i) {
    var t = l.call(this, i) || this;
    return (t.valueFilter = t.getElementValue.bind(t)), t;
   }
   return (
    (function (i, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = i;
     }
     n(i, t),
      (i.prototype =
       t === null ? Object.create(t) : ((o.prototype = t.prototype), new o()));
    })(r, l),
    (r.prototype.install = function () {
     this.core.registerFilter('field-value', this.valueFilter);
    }),
    (r.prototype.uninstall = function () {
     this.core.deregisterFilter('field-value', this.valueFilter);
    }),
    (r.prototype.getElementValue = function (i, t, o, u) {
     return this.isEnabled &&
      this.opts[t] &&
      this.opts[t][u] &&
      typeof this.opts[t][u] == 'function'
      ? this.opts[t][u].apply(this, [t, o, u])
      : i;
    }),
    r
   );
  })(e.Plugin);
 });
});
export default p();
