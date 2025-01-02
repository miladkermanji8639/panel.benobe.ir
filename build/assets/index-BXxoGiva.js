var v = (n, d) => () => (d || n((d = { exports: {} }).exports, d), d.exports);
var p = v((r, o) => {
 (function (n, d) {
  typeof r == 'object' && typeof o < 'u'
   ? (o.exports = d(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], d)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Sequence = d(n.FormValidation)));
 })(void 0, function (n) {
  var d = function (a, i) {
   return (
    (d =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var l in e)
       Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
     }),
    d(a, i)
   );
  };
  function s(a, i) {
   if (typeof i != 'function' && i !== null)
    throw new TypeError(
     'Class extends value ' + String(i) + ' is not a constructor or null',
    );
   d(a, i);
   function t() {
    this.constructor = a;
   }
   a.prototype =
    i === null ? Object.create(i) : ((t.prototype = i.prototype), new t());
  }
  var f = n.utils.removeUndefined,
   u = (function (a) {
    s(i, a);
    function i(t) {
     var e = a.call(this, t) || this;
     return (
      (e.invalidFields = new Map()),
      (e.opts = Object.assign({}, { enabled: !0 }, f(t))),
      (e.validatorHandler = e.onValidatorValidated.bind(e)),
      (e.shouldValidateFilter = e.shouldValidate.bind(e)),
      (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
      (e.elementValidatingHandler = e.onElementValidating.bind(e)),
      e
     );
    }
    return (
     (i.prototype.install = function () {
      this.core
       .on('core.validator.validated', this.validatorHandler)
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.element.notvalidated', this.elementNotValidatedHandler)
       .on('core.element.validating', this.elementValidatingHandler)
       .registerFilter('field-should-validate', this.shouldValidateFilter);
     }),
     (i.prototype.uninstall = function () {
      this.invalidFields.clear(),
       this.core
        .off('core.validator.validated', this.validatorHandler)
        .off('core.field.added', this.fieldAddedHandler)
        .off('core.element.notvalidated', this.elementNotValidatedHandler)
        .off('core.element.validating', this.elementValidatingHandler)
        .deregisterFilter('field-should-validate', this.shouldValidateFilter);
     }),
     (i.prototype.shouldValidate = function (t, e, l, c) {
      if (!this.isEnabled) return !0;
      var h =
       (this.opts.enabled === !0 || this.opts.enabled[t] === !0) &&
       this.invalidFields.has(e) &&
       !!this.invalidFields.get(e).length &&
       this.invalidFields.get(e).indexOf(c) === -1;
      return !h;
     }),
     (i.prototype.onValidatorValidated = function (t) {
      var e = this.invalidFields.has(t.element)
        ? this.invalidFields.get(t.element)
        : [],
       l = e.indexOf(t.validator);
      t.result.valid && l >= 0
       ? e.splice(l, 1)
       : !t.result.valid && l === -1 && e.push(t.validator),
       this.invalidFields.set(t.element, e);
     }),
     (i.prototype.onFieldAdded = function (t) {
      t.elements && this.clearInvalidFields(t.elements);
     }),
     (i.prototype.onElementNotValidated = function (t) {
      this.clearInvalidFields(t.elements);
     }),
     (i.prototype.onElementValidating = function (t) {
      this.clearInvalidFields(t.elements);
     }),
     (i.prototype.clearInvalidFields = function (t) {
      var e = this;
      t.forEach(function (l) {
       return e.invalidFields.delete(l);
      });
     }),
     i
    );
   })(n.Plugin);
  return u;
 });
});
export default p();
