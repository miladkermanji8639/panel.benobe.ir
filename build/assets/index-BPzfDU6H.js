var d = (n, o) => () => (o || n((o = { exports: {} }).exports, o), o.exports);
var m = d((l, c) => {
 (function (n, o) {
  typeof l == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Tachyons = o(
        n.FormValidation,
        n.FormValidation.plugins,
       )));
 })(void 0, function (n, o) {
  var s = function (r, t) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, i) {
       e.__proto__ = i;
      }) ||
     function (e, i) {
      for (var a in i)
       Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
     }),
    s(r, t)
   );
  };
  function f(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(r, t);
   function e() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  var u = n.utils.classSet,
   p = (function (r) {
    f(t, r);
    function t(e) {
     return (
      r.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-tachyons',
         messageClass: 'small',
         rowInvalidClass: 'red',
         rowPattern: /^(.*)fl(.*)$/,
         rowSelector: '.fl',
         rowValidClass: 'green',
        },
        e,
       ),
      ) || this
     );
    }
    return (
     (t.prototype.onIconPlaced = function (e) {
      var i = e.element.getAttribute('type'),
       a = e.element.parentElement;
      (i === 'checkbox' || i === 'radio') &&
       (a.parentElement.insertBefore(e.iconElement, a.nextSibling),
       u(e.iconElement, { 'fv-plugins-icon-check': !0 }));
     }),
     t
    );
   })(o.Framework);
  return p;
 });
});
export default m();
