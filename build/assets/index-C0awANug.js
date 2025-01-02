var m = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var h = m((l, c) => {
 (function (t, o) {
  typeof l == 'object' && typeof c < 'u'
   ? (c.exports = o(
      require('@form-validation/core'),
      require('@form-validation/plugin-framework'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-framework'], o)
     : ((t = typeof globalThis < 'u' ? globalThis : t || self),
       (t.FormValidation = t.FormValidation || {}),
       (t.FormValidation.plugins = t.FormValidation.plugins || {}),
       (t.FormValidation.plugins.Spectre = o(
        t.FormValidation,
        t.FormValidation.plugins,
       )));
 })(void 0, function (t, o) {
  var a = function (i, e) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (n, r) {
       n.__proto__ = r;
      }) ||
     function (n, r) {
      for (var s in r)
       Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
     }),
    a(i, e)
   );
  };
  function u(i, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   a(i, e);
   function n() {
    this.constructor = i;
   }
   i.prototype =
    e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
  }
  var f = t.utils.classSet,
   p = t.utils.hasClass,
   d = (function (i) {
    u(e, i);
    function e(n) {
     return (
      i.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-spectre',
         messageClass: 'form-input-hint',
         rowInvalidClass: 'has-error',
         rowPattern: /^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,
         rowSelector: '.form-group',
         rowValidClass: 'has-success',
        },
        n,
       ),
      ) || this
     );
    }
    return (
     (e.prototype.onIconPlaced = function (n) {
      var r = n.element.getAttribute('type'),
       s = n.element.parentElement;
      (r === 'checkbox' || r === 'radio') &&
       (f(n.iconElement, { 'fv-plugins-icon-check': !0 }),
       p(s, 'form-'.concat(r)) &&
        s.parentElement.insertBefore(n.iconElement, s.nextSibling));
     }),
     e
    );
   })(o.Framework);
  return d;
 });
});
export default h();
