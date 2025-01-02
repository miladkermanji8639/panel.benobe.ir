var u = (n, l) => () => (l || n((l = { exports: {} }).exports, l), l.exports);
var c = u((r, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-sequence
  * @version 2.4.0
  */ (function (n, l) {
  typeof r == 'object' && typeof o < 'u'
   ? (o.exports = l(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], l)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Sequence = l(n.FormValidation)));
 })(void 0, function (n) {
  var l = function (a, d) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, e) {
        t.__proto__ = e;
       }) ||
      function (t, e) {
       for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }),
     l(a, d)
    );
   },
   s = n.utils.removeUndefined;
  return (function (a) {
   function d(t) {
    var e = a.call(this, t) || this;
    return (
     (e.invalidFields = new Map()),
     (e.opts = Object.assign({}, { enabled: !0 }, s(t))),
     (e.validatorHandler = e.onValidatorValidated.bind(e)),
     (e.shouldValidateFilter = e.shouldValidate.bind(e)),
     (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
     (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
     (e.elementValidatingHandler = e.onElementValidating.bind(e)),
     e
    );
   }
   return (
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = t;
     }
     l(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((i.prototype = e.prototype), new i()));
    })(d, a),
    (d.prototype.install = function () {
     this.core
      .on('core.validator.validated', this.validatorHandler)
      .on('core.field.added', this.fieldAddedHandler)
      .on('core.element.notvalidated', this.elementNotValidatedHandler)
      .on('core.element.validating', this.elementValidatingHandler)
      .registerFilter('field-should-validate', this.shouldValidateFilter);
    }),
    (d.prototype.uninstall = function () {
     this.invalidFields.clear(),
      this.core
       .off('core.validator.validated', this.validatorHandler)
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.element.notvalidated', this.elementNotValidatedHandler)
       .off('core.element.validating', this.elementValidatingHandler)
       .deregisterFilter('field-should-validate', this.shouldValidateFilter);
    }),
    (d.prototype.shouldValidate = function (t, e, i, f) {
     return (
      !this.isEnabled ||
      !(
       (this.opts.enabled === !0 || this.opts.enabled[t] === !0) &&
       this.invalidFields.has(e) &&
       this.invalidFields.get(e).length &&
       this.invalidFields.get(e).indexOf(f) === -1
      )
     );
    }),
    (d.prototype.onValidatorValidated = function (t) {
     var e = this.invalidFields.has(t.element)
       ? this.invalidFields.get(t.element)
       : [],
      i = e.indexOf(t.validator);
     t.result.valid && i >= 0
      ? e.splice(i, 1)
      : t.result.valid || i !== -1 || e.push(t.validator),
      this.invalidFields.set(t.element, e);
    }),
    (d.prototype.onFieldAdded = function (t) {
     t.elements && this.clearInvalidFields(t.elements);
    }),
    (d.prototype.onElementNotValidated = function (t) {
     this.clearInvalidFields(t.elements);
    }),
    (d.prototype.onElementValidating = function (t) {
     this.clearInvalidFields(t.elements);
    }),
    (d.prototype.clearInvalidFields = function (t) {
     var e = this;
     t.forEach(function (i) {
      return e.invalidFields.delete(i);
     });
    }),
    d
   );
  })(n.Plugin);
 });
});
export default c();
