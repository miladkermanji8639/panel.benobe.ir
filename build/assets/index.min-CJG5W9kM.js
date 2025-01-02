var c = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var d = c((p, u) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-l10n
  * @version 2.4.0
  */ (function (i, n) {
  typeof p == 'object' && typeof u < 'u'
   ? (u.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.L10n = n(i.FormValidation)));
 })(void 0, function (i) {
  var n = function (s, r) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var o in t)
       Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
     }),
    n(s, r)
   );
  };
  return (function (s) {
   function r(e) {
    var t = s.call(this, e) || this;
    return (t.messageFilter = t.getMessage.bind(t)), t;
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = e;
     }
     n(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((o.prototype = t.prototype), new o()));
    })(r, s),
    (r.prototype.install = function () {
     this.core.registerFilter('validator-message', this.messageFilter);
    }),
    (r.prototype.uninstall = function () {
     this.core.deregisterFilter('validator-message', this.messageFilter);
    }),
    (r.prototype.getMessage = function (e, t, o) {
     if (!this.isEnabled) return '';
     if (this.opts[t] && this.opts[t][o]) {
      var a = this.opts[t][o],
       f = typeof a;
      if (f === 'object' && a[e]) return a[e];
      if (f === 'function') {
       var l = a.apply(this, [t, o]);
       return l && l[e] ? l[e] : '';
      }
     }
     return '';
    }),
    r
   );
  })(i.Plugin);
 });
});
export default d();
