var P = (i, f) => () => (f || i((f = { exports: {} }).exports, f), f.exports);
var j = P((y, s) => {
 (function (i, f) {
  typeof y == 'object' && typeof s < 'u'
   ? (s.exports = f())
   : typeof define == 'function' && define.amd
     ? define(f)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Bootstrap = f()));
 })(void 0, function () {
  function i(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function f(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(e, r.key, r);
   }
  }
  function h(e, t, n) {
   return (
    t && f(e.prototype, t),
    n && f(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function v(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && c(e, t);
  }
  function u(e) {
   return (
    (u = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
       }),
    u(e)
   );
  }
  function c(e, t) {
   return (
    (c = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, o) {
        return (r.__proto__ = o), r;
       }),
    c(e, t)
   );
  }
  function b() {
   if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
   if (typeof Proxy == 'function') return !0;
   try {
    return (
     Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
     ),
     !0
    );
   } catch {
    return !1;
   }
  }
  function g(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function _(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return g(e);
  }
  function O(e) {
   var t = b();
   return function () {
    var r = u(e),
     o;
    if (t) {
     var a = u(this).constructor;
     o = Reflect.construct(r, arguments, a);
    } else o = r.apply(this, arguments);
    return _(this, o);
   };
  }
  var p = FormValidation.utils.classSet,
   l = FormValidation.utils.hasClass,
   w = FormValidation.plugins.Framework,
   E = (function (e) {
    v(n, e);
    var t = O(n);
    function n(r) {
     return (
      i(this, n),
      t.call(
       this,
       Object.assign(
        {},
        {
         eleInvalidClass: 'is-invalid',
         eleValidClass: 'is-valid',
         formClass: 'fv-plugins-bootstrap',
         messageClass: 'fv-help-block',
         rowInvalidClass: 'has-danger',
         rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
         rowSelector: '.form-group',
         rowValidClass: 'has-success',
        },
        r,
       ),
      )
     );
    }
    return (
     h(n, [
      {
       key: 'onIconPlaced',
       value: function (o) {
        var a = o.element.parentElement;
        l(a, 'input-group') &&
         a.parentElement.insertBefore(o.iconElement, a.nextSibling);
        var d = o.element.getAttribute('type');
        if (d === 'checkbox' || d === 'radio') {
         var m = a.parentElement;
         l(a, 'form-check')
          ? (p(o.iconElement, { 'fv-plugins-icon-check': !0 }),
            a.parentElement.insertBefore(o.iconElement, a.nextSibling))
          : l(a.parentElement, 'form-check') &&
            (p(o.iconElement, { 'fv-plugins-icon-check': !0 }),
            m.parentElement.insertBefore(o.iconElement, m.nextSibling));
        }
       },
      },
     ]),
     n
    );
   })(w);
  return E;
 });
});
export default j();