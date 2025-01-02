var d = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var m = d((f, l) => {
 (function (n, i) {
  typeof f == 'object' && typeof l < 'u'
   ? (l.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Mini = i(
        n.FormValidation,
        n.FormValidation.plugins,
       )));
 })(void 0, function (n, i) {
  var s = function (o, t) {
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
    s(o, t)
   );
  };
  function c(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(o, t);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var u = n.utils.classSet,
   p = (function (o) {
    c(t, o);
    function t(e) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-mini',
         messageClass: 'fv-help-block',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^(.*)col-(sm|md|lg|xl)(-offset)*-[0-9]+(.*)$/,
         rowSelector: '.row',
         rowValidClass: 'fv-valid-row',
        },
        e,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (e) {
      var r = e.element.getAttribute('type'),
       a = e.element.parentElement;
      (r === 'checkbox' || r === 'radio') &&
       (a.parentElement.insertBefore(e.iconElement, a.nextSibling),
       u(e.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     t
    );
   })(i.Framework);
  return p;
 });
});
export default m();
