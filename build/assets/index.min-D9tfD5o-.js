var f = (i, l) => () => (l || i((l = { exports: {} }).exports, l), l.exports);
var u = f((m, p) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-bootstrap5
  * @version 2.4.0
  */ (function (i, l) {
  typeof m == 'object' && typeof p < 'u'
   ? (p.exports = l(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], l)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Bootstrap5 = l(
        i.FormValidation,
        i.FormValidation.plugins,
       )));
 })(void 0, function (i, l) {
  var c = function (s, r) {
    return (
     (c =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      }),
     c(s, r)
    );
   },
   a = i.utils.classSet,
   o = i.utils.hasClass;
  return (function (s) {
   function r(e) {
    var n =
     s.call(
      this,
      Object.assign(
       {},
       {
        eleInvalidClass: 'is-invalid',
        eleValidClass: 'is-valid',
        formClass: 'fv-plugins-bootstrap5',
        rowInvalidClass: 'fv-plugins-bootstrap5-row-invalid',
        rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
        rowSelector: '.row',
        rowValidClass: 'fv-plugins-bootstrap5-row-valid',
       },
       e,
      ),
     ) || this;
    return (n.eleValidatedHandler = n.handleElementValidated.bind(n)), n;
   }
   return (
    (function (e, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function t() {
      this.constructor = e;
     }
     c(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((t.prototype = n.prototype), new t()));
    })(r, s),
    (r.prototype.install = function () {
     s.prototype.install.call(this),
      this.core.on('core.element.validated', this.eleValidatedHandler);
    }),
    (r.prototype.uninstall = function () {
     s.prototype.uninstall.call(this),
      this.core.off('core.element.validated', this.eleValidatedHandler);
    }),
    (r.prototype.handleElementValidated = function (e) {
     var n = e.element.getAttribute('type');
     if (
      (n === 'checkbox' || n === 'radio') &&
      e.elements.length > 1 &&
      o(e.element, 'form-check-input')
     ) {
      var t = e.element.parentElement;
      o(t, 'form-check') &&
       o(t, 'form-check-inline') &&
       a(t, { 'is-invalid': !e.valid, 'is-valid': e.valid });
     }
    }),
    (r.prototype.onIconPlaced = function (e) {
     a(e.element, { 'fv-plugins-icon-input': !0 });
     var n = e.element.parentElement;
     o(n, 'input-group') &&
      (n.parentElement.insertBefore(e.iconElement, n.nextSibling),
      e.element.nextElementSibling &&
       o(e.element.nextElementSibling, 'input-group-text') &&
       a(e.iconElement, { 'fv-plugins-icon-input-group': !0 }));
     var t = e.element.getAttribute('type');
     if (t === 'checkbox' || t === 'radio') {
      var d = n.parentElement;
      o(n, 'form-check')
       ? (a(e.iconElement, { 'fv-plugins-icon-check': !0 }),
         n.parentElement.insertBefore(e.iconElement, n.nextSibling))
       : o(n.parentElement, 'form-check') &&
         (a(e.iconElement, { 'fv-plugins-icon-check': !0 }),
         d.parentElement.insertBefore(e.iconElement, d.nextSibling));
     }
    }),
    (r.prototype.onMessagePlaced = function (e) {
     e.messageElement.classList.add('invalid-feedback');
     var n = e.element.parentElement;
     if (o(n, 'input-group'))
      return (
       n.appendChild(e.messageElement), void a(n, { 'has-validation': !0 })
      );
     var t = e.element.getAttribute('type');
     (t !== 'checkbox' && t !== 'radio') ||
      !o(e.element, 'form-check-input') ||
      !o(n, 'form-check') ||
      o(n, 'form-check-inline') ||
      e.elements[e.elements.length - 1].parentElement.appendChild(
       e.messageElement,
      );
    }),
    r
   );
  })(l.Framework);
 });
});
export default u();
