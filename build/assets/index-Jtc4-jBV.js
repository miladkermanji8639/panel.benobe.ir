var d = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var m = d((u, l) => {
 (function (t, i) {
  typeof u == 'object' && typeof l < 'u'
   ? (l.exports = i(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], i)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Mui = i(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, i) {
  var s = function (o, e) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, r) {
       n.__proto__ = r;
      }) ||
     function (n, r) {
      for (var a in r)
       Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
     }),
    s(o, e)
   );
  };
  function f(o, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   s(o, e);
   function n() {
    this.constructor = o;
   }
   o.prototype =
    e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
  }
  var c = t.utils.classSet,
   p = (function (o) {
    f(e, o);
    function e(n) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-mui',
         messageClass: 'fv-help-block',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^(.*)mui-col-(xs|md|lg|xl)(-offset)*-[0-9]+(.*)$/,
         rowSelector: '.mui-row',
         rowValidClass: 'fv-valid-row',
        },
        n,
       ),
      ) || this
     );
    }
    return (
     (e.prototype.onIconPlaced = function (n) {
      var r = n.element.getAttribute('type'),
       a = n.element.parentElement;
      (r === 'checkbox' || r === 'radio') &&
       (a.parentElement.insertBefore(n.iconElement, a.nextSibling),
       c(n.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     e
    );
   })(i.Framework);
  return p;
 });
});
export default m();
