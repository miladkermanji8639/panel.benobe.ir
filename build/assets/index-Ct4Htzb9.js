var d = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var m = d((u, f) => {
 (function (e, r) {
  typeof u == 'object' && typeof f < 'u'
   ? (f.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], r)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.plugins = e.FormValidation.plugins || {}),
       (e.FormValidation.plugins.Turret = r(
        e.FormValidation,
        e.FormValidation.plugins,
       )));
 })(void 0, function (e, r) {
  var s = function (o, t) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, i) {
       n.__proto__ = i;
      }) ||
     function (n, i) {
      for (var a in i)
       Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
     }),
    s(o, t)
   );
  };
  function l(o, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(o, t);
   function n() {
    this.constructor = o;
   }
   o.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var c = e.utils.classSet,
   p = (function (o) {
    l(t, o);
    function t(n) {
     return (
      o.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-turret',
         messageClass: 'form-message',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^field$/,
         rowSelector: '.field',
         rowValidClass: 'fv-valid-row',
        },
        n,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (n) {
      var i = n.element.getAttribute('type'),
       a = n.element.parentElement;
      (i === 'checkbox' || i === 'radio') &&
       (a.parentElement.insertBefore(n.iconElement, a.nextSibling),
       c(n.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     t
    );
   })(r.Framework);
  return p;
 });
});
export default m();
