var m = (n, a) => () => (a || n((a = { exports: {} }).exports, a), a.exports);
var v = m((f, l) => {
 (function (n, a) {
  typeof f == 'object' && typeof l < 'u'
   ? (l.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Aria = a(n.FormValidation)));
 })(void 0, function (n) {
  var a = function (o, t) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var r in i)
       Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
     }),
    a(o, t)
   );
  };
  function c(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   a(o, t);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var u = (function (o) {
   c(t, o);
   function t() {
    var e = o.call(this, {}) || this;
    return (
     (e.elementValidatedHandler = e.onElementValidated.bind(e)),
     (e.fieldValidHandler = e.onFieldValid.bind(e)),
     (e.fieldInvalidHandler = e.onFieldInvalid.bind(e)),
     (e.messageDisplayedHandler = e.onMessageDisplayed.bind(e)),
     e
    );
   }
   return (
    (t.prototype.install = function () {
     this.core
      .on('core.field.valid', this.fieldValidHandler)
      .on('core.field.invalid', this.fieldInvalidHandler)
      .on('core.element.validated', this.elementValidatedHandler)
      .on('plugins.message.displayed', this.messageDisplayedHandler);
    }),
    (t.prototype.uninstall = function () {
     this.core
      .off('core.field.valid', this.fieldValidHandler)
      .off('core.field.invalid', this.fieldInvalidHandler)
      .off('core.element.validated', this.elementValidatedHandler)
      .off('plugins.message.displayed', this.messageDisplayedHandler);
    }),
    (t.prototype.onElementValidated = function (e) {
     e.valid &&
      (e.element.setAttribute('aria-invalid', 'false'),
      e.element.removeAttribute('aria-describedby'));
    }),
    (t.prototype.onFieldValid = function (e) {
     var i = this.core.getElements(e);
     i &&
      i.forEach(function (r) {
       r.setAttribute('aria-invalid', 'false'),
        r.removeAttribute('aria-describedby');
      });
    }),
    (t.prototype.onFieldInvalid = function (e) {
     var i = this.core.getElements(e);
     i &&
      i.forEach(function (r) {
       return r.setAttribute('aria-invalid', 'true');
      });
    }),
    (t.prototype.onMessageDisplayed = function (e) {
     e.messageElement.setAttribute('role', 'alert'),
      e.messageElement.setAttribute('aria-hidden', 'false');
     var i = this.core.getElements(e.field),
      r = i.indexOf(e.element),
      d = 'js-fv-'
       .concat(e.field, '-')
       .concat(r, '-')
       .concat(Date.now(), '-message');
     e.messageElement.setAttribute('id', d),
      e.element.setAttribute('aria-describedby', d);
     var s = e.element.getAttribute('type');
     (s === 'radio' || s === 'checkbox') &&
      i.forEach(function (p) {
       return p.setAttribute('aria-describedby', d);
      });
    }),
    t
   );
  })(n.Plugin);
  return u;
 });
});
export default v();
