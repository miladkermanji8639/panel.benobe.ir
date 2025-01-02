var u = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var p = u((f, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-aria
  * @version 2.4.0
  */ (function (a, n) {
  typeof f == 'object' && typeof d < 'u'
   ? (d.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.Aria = n(a.FormValidation)));
 })(void 0, function (a) {
  var n = function (l, o) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var i in t)
       Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     }),
    n(l, o)
   );
  };
  return (function (l) {
   function o() {
    var e = l.call(this, {}) || this;
    return (
     (e.elementValidatedHandler = e.onElementValidated.bind(e)),
     (e.fieldValidHandler = e.onFieldValid.bind(e)),
     (e.fieldInvalidHandler = e.onFieldInvalid.bind(e)),
     (e.messageDisplayedHandler = e.onMessageDisplayed.bind(e)),
     e
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     n(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((i.prototype = t.prototype), new i()));
    })(o, l),
    (o.prototype.install = function () {
     this.core
      .on('core.field.valid', this.fieldValidHandler)
      .on('core.field.invalid', this.fieldInvalidHandler)
      .on('core.element.validated', this.elementValidatedHandler)
      .on('plugins.message.displayed', this.messageDisplayedHandler);
    }),
    (o.prototype.uninstall = function () {
     this.core
      .off('core.field.valid', this.fieldValidHandler)
      .off('core.field.invalid', this.fieldInvalidHandler)
      .off('core.element.validated', this.elementValidatedHandler)
      .off('plugins.message.displayed', this.messageDisplayedHandler);
    }),
    (o.prototype.onElementValidated = function (e) {
     e.valid &&
      (e.element.setAttribute('aria-invalid', 'false'),
      e.element.removeAttribute('aria-describedby'));
    }),
    (o.prototype.onFieldValid = function (e) {
     var t = this.core.getElements(e);
     t &&
      t.forEach(function (i) {
       i.setAttribute('aria-invalid', 'false'),
        i.removeAttribute('aria-describedby');
      });
    }),
    (o.prototype.onFieldInvalid = function (e) {
     var t = this.core.getElements(e);
     t &&
      t.forEach(function (i) {
       return i.setAttribute('aria-invalid', 'true');
      });
    }),
    (o.prototype.onMessageDisplayed = function (e) {
     e.messageElement.setAttribute('role', 'alert'),
      e.messageElement.setAttribute('aria-hidden', 'false');
     var t = this.core.getElements(e.field),
      i = t.indexOf(e.element),
      r = 'js-fv-'
       .concat(e.field, '-')
       .concat(i, '-')
       .concat(Date.now(), '-message');
     e.messageElement.setAttribute('id', r),
      e.element.setAttribute('aria-describedby', r);
     var s = e.element.getAttribute('type');
     (s !== 'radio' && s !== 'checkbox') ||
      t.forEach(function (c) {
       return c.setAttribute('aria-describedby', r);
      });
    }),
    o
   );
  })(a.Plugin);
 });
});
export default p();
