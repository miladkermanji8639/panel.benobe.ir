var d = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var m = d((f, s) => {
 (function (t, i) {
  typeof f == 'object' && typeof s < 'u'
   ? (s.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Milligram = i(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, i) {
  var l = function (o, n) {
   return (
    (l =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, r) {
       e.__proto__ = r;
      }) ||
     function (e, r) {
      for (var a in r)
       Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
     }),
    l(o, n)
   );
  };
  function c(o, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   l(o, n);
   function e() {
    this.constructor = o;
   }
   o.prototype =
    n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  }
  var u = t.utils.classSet,
   p = (function (o) {
    c(n, o);
    function n(e) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-milligram',
         messageClass: 'fv-help-block',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^(.*)column(-offset)*-[0-9]+(.*)$/,
         rowSelector: '.row',
         rowValidClass: 'fv-valid-row',
        },
        e,
       ),
      ) || this
     );
    }
    return (
     (n.prototype.onIconPlaced = function (e) {
      var r = e.element.getAttribute('type'),
       a = e.element.parentElement;
      (r === 'checkbox' || r === 'radio') &&
       (a.parentElement.insertBefore(e.iconElement, a.nextSibling),
       u(e.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     n
    );
   })(i.Framework);
  return p;
 });
});
export default m();
