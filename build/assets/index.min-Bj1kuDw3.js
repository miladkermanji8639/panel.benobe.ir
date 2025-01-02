var s = (i, n) => () => (n || i((n = { exports: {} }).exports, n), n.exports);
var f = s((c, u) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-dependency
  * @version 2.4.0
  */ (function (i, n) {
  typeof c == 'object' && typeof u < 'u'
   ? (u.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Dependency = n(i.FormValidation)));
 })(void 0, function (i) {
  var n = function (l, r) {
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
    n(l, r)
   );
  };
  return (function (l) {
   function r(e) {
    var t = l.call(this, e) || this;
    return (
     (t.opts = e || {}),
     (t.triggerExecutedHandler = t.onTriggerExecuted.bind(t)),
     t
    );
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
    })(r, l),
    (r.prototype.install = function () {
     this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    }),
    (r.prototype.uninstall = function () {
     this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    }),
    (r.prototype.onTriggerExecuted = function (e) {
     if (this.isEnabled && this.opts[e.field])
      for (var t = 0, o = this.opts[e.field].split(' '); t < o.length; t++) {
       var a = o[t].trim();
       this.opts[a] && this.core.revalidateField(a);
      }
    }),
    r
   );
  })(i.Plugin);
 });
});
export default f();
