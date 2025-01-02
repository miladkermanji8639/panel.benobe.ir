var f = (t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports);
var p = f((s, u) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-ui-kit
  * @version 2.4.0
  */ (function (t, r) {
  typeof s == 'object' && typeof u < 'u'
   ? (u.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.UiKit = r(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, r) {
  var l = function (a, i) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, n) {
        e.__proto__ = n;
       }) ||
      function (e, n) {
       for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }),
     l(a, i)
    );
   },
   c = t.utils.classSet;
  return (function (a) {
   function i(e) {
    return (
     a.call(
      this,
      Object.assign(
       {},
       {
        formClass: 'fv-plugins-uikit',
        messageClass: 'uk-text-danger',
        rowInvalidClass: 'uk-form-danger',
        rowPattern: /^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,
        rowSelector: '.uk-margin',
        rowValidClass: 'uk-form-success',
       },
       e,
      ),
     ) || this
    );
   }
   return (
    (function (e, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = e;
     }
     l(e, n),
      (e.prototype =
       n === null ? Object.create(n) : ((o.prototype = n.prototype), new o()));
    })(i, a),
    (i.prototype.onIconPlaced = function (e) {
     var n = e.element.getAttribute('type');
     if (n === 'checkbox' || n === 'radio') {
      var o = e.element.parentElement;
      c(e.iconElement, { 'fv-plugins-icon-check': !0 }),
       o.parentElement.insertBefore(e.iconElement, o.nextSibling);
     }
    }),
    i
   );
  })(r.Framework);
 });
});
export default p();
