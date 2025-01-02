var r = (d, i) => () => (i || d((i = { exports: {} }).exports, i), i.exports);
var f = r((s, l) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-field-status
  * @version 2.4.0
  */ (function (d, i) {
  typeof s == 'object' && typeof l < 'u'
   ? (l.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((d = typeof globalThis < 'u' ? globalThis : d || self).FormValidation =
        d.FormValidation || {}),
       (d.FormValidation.plugins = d.FormValidation.plugins || {}),
       (d.FormValidation.plugins.FieldStatus = i(d.FormValidation)));
 })(void 0, function (d) {
  var i = function (a, n) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var o in e)
       Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
     }),
    i(a, n)
   );
  };
  return (function (a) {
   function n(t) {
    var e = a.call(this, t) || this;
    return (
     (e.statuses = new Map()),
     (e.opts = Object.assign({}, { onStatusChanged: function () {} }, t)),
     (e.elementValidatingHandler = e.onElementValidating.bind(e)),
     (e.elementValidatedHandler = e.onElementValidated.bind(e)),
     (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
     (e.elementIgnoredHandler = e.onElementIgnored.bind(e)),
     (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
     (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
     e
    );
   }
   return (
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = t;
     }
     i(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((o.prototype = e.prototype), new o()));
    })(n, a),
    (n.prototype.install = function () {
     this.core
      .on('core.element.validating', this.elementValidatingHandler)
      .on('core.element.validated', this.elementValidatedHandler)
      .on('core.element.notvalidated', this.elementNotValidatedHandler)
      .on('core.element.ignored', this.elementIgnoredHandler)
      .on('core.field.added', this.fieldAddedHandler)
      .on('core.field.removed', this.fieldRemovedHandler);
    }),
    (n.prototype.uninstall = function () {
     this.statuses.clear(),
      this.core
       .off('core.element.validating', this.elementValidatingHandler)
       .off('core.element.validated', this.elementValidatedHandler)
       .off('core.element.notvalidated', this.elementNotValidatedHandler)
       .off('core.element.ignored', this.elementIgnoredHandler)
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.field.removed', this.fieldRemovedHandler);
    }),
    (n.prototype.areFieldsValid = function () {
     return Array.from(this.statuses.values()).every(function (t) {
      return t === 'Valid' || t === 'NotValidated' || t === 'Ignored';
     });
    }),
    (n.prototype.getStatuses = function () {
     return this.isEnabled ? this.statuses : new Map();
    }),
    (n.prototype.onFieldAdded = function (t) {
     this.statuses.set(t.field, 'NotValidated');
    }),
    (n.prototype.onFieldRemoved = function (t) {
     this.statuses.has(t.field) && this.statuses.delete(t.field),
      this.handleStatusChanged(this.areFieldsValid());
    }),
    (n.prototype.onElementValidating = function (t) {
     this.statuses.set(t.field, 'Validating'), this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementValidated = function (t) {
     this.statuses.set(t.field, t.valid ? 'Valid' : 'Invalid'),
      t.valid
       ? this.handleStatusChanged(this.areFieldsValid())
       : this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementNotValidated = function (t) {
     this.statuses.set(t.field, 'NotValidated'), this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementIgnored = function (t) {
     this.statuses.set(t.field, 'Ignored'),
      this.handleStatusChanged(this.areFieldsValid());
    }),
    (n.prototype.handleStatusChanged = function (t) {
     this.isEnabled && this.opts.onStatusChanged(t);
    }),
    n
   );
  })(d.Plugin);
 });
});
export default f();
