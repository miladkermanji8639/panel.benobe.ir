var p = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var m = p((c, u) => {
 (function (t, i) {
  typeof c == 'object' && typeof u < 'u'
   ? (u.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.UiKit = i(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, i) {
  var s = function (o, n) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, r) {
       e.__proto__ = r;
      }) ||
     function (e, r) {
      for (var a in r)
       Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
     }),
    s(o, n)
   );
  };
  function f(o, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   s(o, n);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var l = t.utils.classSet,
   d = (function (o) {
    f(n, o);
    function n(e) {
     return (
      o.call(
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
     (n.prototype.onIconPlaced = function (e) {
      var r = e.element.getAttribute('type');
      if (r === 'checkbox' || r === 'radio') {
       var a = e.element.parentElement;
       l(e.iconElement, { 'fv-plugins-icon-check': !0 }),
        a.parentElement.insertBefore(e.iconElement, a.nextSibling);
      }
     }),
     n
    );
   })(i.Framework);
  return d;
 });
});
export default m();
