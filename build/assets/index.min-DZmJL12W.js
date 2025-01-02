var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var d = u((c, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-materialize
  * @version 2.4.0
  */ (function (e, t) {
  typeof c == 'object' && typeof s < 'u'
   ? (s.exports = t(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], t)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Materialize = t(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, t) {
  var l = function (a, r) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (o, n) {
        o.__proto__ = n;
       }) ||
      function (o, n) {
       for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (o[i] = n[i]);
      }),
     l(a, r)
    );
   },
   f = e.utils.classSet;
  return (function (a) {
   function r(o) {
    return (
     a.call(
      this,
      Object.assign(
       {},
       {
        eleInvalidClass: 'validate invalid',
        eleValidClass: 'validate valid',
        formClass: 'fv-plugins-materialize',
        messageClass: 'helper-text',
        rowInvalidClass: 'fv-invalid-row',
        rowPattern: /^(.*)col(\s+)s[0-9]+(.*)$/,
        rowSelector: '.row',
        rowValidClass: 'fv-valid-row',
       },
       o,
      ),
     ) || this
    );
   }
   return (
    (function (o, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = o;
     }
     l(o, n),
      (o.prototype =
       n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
    })(r, a),
    (r.prototype.onIconPlaced = function (o) {
     var n = o.element.getAttribute('type'),
      i = o.element.parentElement;
     (n !== 'checkbox' && n !== 'radio') ||
      (i.parentElement.insertBefore(o.iconElement, i.nextSibling),
      f(o.iconElement, { 'fv-plugins-icon-check': !0 }));
    }),
    r
   );
  })(t.Framework);
 });
});
export default d();
