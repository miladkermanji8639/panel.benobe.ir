var f = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var p = f((u, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-pure
  * @version 2.4.0
  */ (function (e, r) {
  typeof u == 'object' && typeof s < 'u'
   ? (s.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Pure = r(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, r) {
  var l = function (a, i) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, n) {
        t.__proto__ = n;
       }) ||
      function (t, n) {
       for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }),
     l(a, i)
    );
   },
   c = e.utils.classSet;
  return (function (a) {
   function i(t) {
    return (
     a.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-pure',
        messageClass: 'fv-help-block',
        rowInvalidClass: 'fv-has-error',
        rowPattern: /^.*pure-control-group.*$/,
        rowSelector: '.pure-control-group',
        rowValidClass: 'fv-has-success',
       },
       t,
      ),
     ) || this
    );
   }
   return (
    (function (t, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = t;
     }
     l(t, n),
      (t.prototype =
       n === null ? Object.create(n) : ((o.prototype = n.prototype), new o()));
    })(i, a),
    (i.prototype.onIconPlaced = function (t) {
     var n = t.element.getAttribute('type');
     if (n === 'checkbox' || n === 'radio') {
      var o = t.element.parentElement;
      c(t.iconElement, { 'fv-plugins-icon-check': !0 }),
       o.tagName === 'LABEL' &&
        o.parentElement.insertBefore(t.iconElement, o.nextSibling);
     }
    }),
    i
   );
  })(r.Framework);
 });
});
export default p();
