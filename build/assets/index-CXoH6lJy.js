var u = (i, d) => () => (d || i((d = { exports: {} }).exports, d), d.exports);
var h = u((s, l) => {
 (function (i, d) {
  typeof s == 'object' && typeof l < 'u'
   ? (l.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.FieldStatus = d(i.FormValidation)));
 })(void 0, function (i) {
  var d = function (a, n) {
   return (
    (d =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var o in t)
       Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
     }),
    d(a, n)
   );
  };
  function r(a, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   d(a, n);
   function e() {
    this.constructor = a;
   }
   a.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var f = (function (a) {
   r(n, a);
   function n(e) {
    var t = a.call(this, e) || this;
    return (
     (t.statuses = new Map()),
     (t.opts = Object.assign({}, { onStatusChanged: function () {} }, e)),
     (t.elementValidatingHandler = t.onElementValidating.bind(t)),
     (t.elementValidatedHandler = t.onElementValidated.bind(t)),
     (t.elementNotValidatedHandler = t.onElementNotValidated.bind(t)),
     (t.elementIgnoredHandler = t.onElementIgnored.bind(t)),
     (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
     (t.fieldRemovedHandler = t.onFieldRemoved.bind(t)),
     t
    );
   }
   return (
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
     return Array.from(this.statuses.values()).every(function (e) {
      return e === 'Valid' || e === 'NotValidated' || e === 'Ignored';
     });
    }),
    (n.prototype.getStatuses = function () {
     return this.isEnabled ? this.statuses : new Map();
    }),
    (n.prototype.onFieldAdded = function (e) {
     this.statuses.set(e.field, 'NotValidated');
    }),
    (n.prototype.onFieldRemoved = function (e) {
     this.statuses.has(e.field) && this.statuses.delete(e.field),
      this.handleStatusChanged(this.areFieldsValid());
    }),
    (n.prototype.onElementValidating = function (e) {
     this.statuses.set(e.field, 'Validating'), this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementValidated = function (e) {
     this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid'),
      e.valid
       ? this.handleStatusChanged(this.areFieldsValid())
       : this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementNotValidated = function (e) {
     this.statuses.set(e.field, 'NotValidated'), this.handleStatusChanged(!1);
    }),
    (n.prototype.onElementIgnored = function (e) {
     this.statuses.set(e.field, 'Ignored'),
      this.handleStatusChanged(this.areFieldsValid());
    }),
    (n.prototype.handleStatusChanged = function (e) {
     this.isEnabled && this.opts.onStatusChanged(e);
    }),
    n
   );
  })(i.Plugin);
  return f;
 });
});
export default h();
