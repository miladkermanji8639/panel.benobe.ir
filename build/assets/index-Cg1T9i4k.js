var h = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var v = h((d, p) => {
 (function (i, r) {
  typeof d == 'object' && typeof p < 'u'
   ? (p.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Bootstrap5 = r(
        i.FormValidation,
        i.FormValidation.plugins,
       )));
 })(void 0, function (i, r) {
  var c = function (a, n) {
   return (
    (c =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var o in t)
       Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
     }),
    c(a, n)
   );
  };
  function m(a, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   c(a, n);
   function e() {
    this.constructor = a;
   }
   a.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var s = i.utils.classSet,
   l = i.utils.hasClass,
   u = (function (a) {
    m(n, a);
    function n(e) {
     var t =
      a.call(
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
     return (t.eleValidatedHandler = t.handleElementValidated.bind(t)), t;
    }
    return (
     (n.prototype.install = function () {
      a.prototype.install.call(this),
       this.core.on('core.element.validated', this.eleValidatedHandler);
     }),
     (n.prototype.uninstall = function () {
      a.prototype.uninstall.call(this),
       this.core.off('core.element.validated', this.eleValidatedHandler);
     }),
     (n.prototype.handleElementValidated = function (e) {
      var t = e.element.getAttribute('type');
      if (
       (t === 'checkbox' || t === 'radio') &&
       e.elements.length > 1 &&
       l(e.element, 'form-check-input')
      ) {
       var o = e.element.parentElement;
       l(o, 'form-check') &&
        l(o, 'form-check-inline') &&
        s(o, { 'is-invalid': !e.valid, 'is-valid': e.valid });
      }
     }),
     (n.prototype.onIconPlaced = function (e) {
      s(e.element, { 'fv-plugins-icon-input': !0 });
      var t = e.element.parentElement;
      l(t, 'input-group') &&
       (t.parentElement.insertBefore(e.iconElement, t.nextSibling),
       e.element.nextElementSibling &&
        l(e.element.nextElementSibling, 'input-group-text') &&
        s(e.iconElement, { 'fv-plugins-icon-input-group': !0 }));
      var o = e.element.getAttribute('type');
      if (o === 'checkbox' || o === 'radio') {
       var f = t.parentElement;
       l(t, 'form-check')
        ? (s(e.iconElement, { 'fv-plugins-icon-check': !0 }),
          t.parentElement.insertBefore(e.iconElement, t.nextSibling))
        : l(t.parentElement, 'form-check') &&
          (s(e.iconElement, { 'fv-plugins-icon-check': !0 }),
          f.parentElement.insertBefore(e.iconElement, f.nextSibling));
      }
     }),
     (n.prototype.onMessagePlaced = function (e) {
      e.messageElement.classList.add('invalid-feedback');
      var t = e.element.parentElement;
      if (l(t, 'input-group')) {
       t.appendChild(e.messageElement), s(t, { 'has-validation': !0 });
       return;
      }
      var o = e.element.getAttribute('type');
      (o === 'checkbox' || o === 'radio') &&
       l(e.element, 'form-check-input') &&
       l(t, 'form-check') &&
       !l(t, 'form-check-inline') &&
       e.elements[e.elements.length - 1].parentElement.appendChild(
        e.messageElement,
       );
     }),
     n
    );
   })(r.Framework);
  return u;
 });
});
export default v();
