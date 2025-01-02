var s = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var f = s((u, l) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-alias
  * @version 2.4.0
  */ (function (e, n) {
  typeof u == 'object' && typeof l < 'u'
   ? (l.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Alias = n(e.FormValidation)));
 })(void 0, function (e) {
  var n = function (a, i) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, t) {
       o.__proto__ = t;
      }) ||
     function (o, t) {
      for (var r in t)
       Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
     }),
    n(a, i)
   );
  };
  return (function (a) {
   function i(o) {
    var t = a.call(this, o) || this;
    return (
     (t.opts = o || {}), (t.validatorNameFilter = t.getValidatorName.bind(t)), t
    );
   }
   return (
    (function (o, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function r() {
      this.constructor = o;
     }
     n(o, t),
      (o.prototype =
       t === null ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    })(i, a),
    (i.prototype.install = function () {
     this.core.registerFilter('validator-name', this.validatorNameFilter);
    }),
    (i.prototype.uninstall = function () {
     this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    }),
    (i.prototype.getValidatorName = function (o, t) {
     return (this.isEnabled && this.opts[o]) || o;
    }),
    i
   );
  })(e.Plugin);
 });
});
export default f();
