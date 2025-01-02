var f = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var s = f((u, a) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-default-submit
  * @version 2.4.0
  */ (function (e, n) {
  typeof u == 'object' && typeof a < 'u'
   ? (a.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.DefaultSubmit = n(e.FormValidation)));
 })(void 0, function (e) {
  var n = function (l, i) {
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
    n(l, i)
   );
  };
  return (function (l) {
   function i() {
    var o = l.call(this, {}) || this;
    return (o.onValidHandler = o.onFormValid.bind(o)), o;
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
    })(i, l),
    (i.prototype.install = function () {
     if (
      this.core
       .getFormElement()
       .querySelectorAll('[type="submit"][name="submit"]').length
     )
      throw new Error(
       'Do not use `submit` for the name attribute of submit button',
      );
     this.core.on('core.form.valid', this.onValidHandler);
    }),
    (i.prototype.uninstall = function () {
     this.core.off('core.form.valid', this.onValidHandler);
    }),
    (i.prototype.onFormValid = function () {
     var o = this.core.getFormElement();
     this.isEnabled && o instanceof HTMLFormElement && o.submit();
    }),
    i
   );
  })(e.Plugin);
 });
});
export default s();
