var g = (i, o) => () => (o || i((o = { exports: {} }).exports, o), o.exports);
var P = g((p, l) => {
 (function (i, o) {
  typeof p == 'object' && typeof l < 'u'
   ? (l.exports = o())
   : typeof define == 'function' && define.amd
     ? define(o)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Materialize = o()));
 })(void 0, function () {
  function i(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function o(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(e, r.key, r);
   }
  }
  function d(e, t, n) {
   return (
    t && o(e.prototype, t),
    n && o(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function y(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && c(e, t);
  }
  function f(e) {
   return (
    (f = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
       }),
    f(e)
   );
  }
  function c(e, t) {
   return (
    (c = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, a) {
        return (r.__proto__ = a), r;
       }),
    c(e, t)
   );
  }
  function v() {
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
  function h(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function m(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return h(e);
  }
  function b(e) {
   var t = v();
   return function () {
    var r = f(e),
     a;
    if (t) {
     var u = f(this).constructor;
     a = Reflect.construct(r, arguments, u);
    } else a = r.apply(this, arguments);
    return m(this, a);
   };
  }
  var _ = FormValidation.utils.classSet,
   w = FormValidation.plugins.Framework,
   O = (function (e) {
    y(n, e);
    var t = b(n);
    function n(r) {
     return (
      i(this, n),
      t.call(
       this,
       Object.assign(
        {},
        {
         eleInvalidClass: 'validate invalid',
         eleValidClass: 'validate valid',
         formClass: 'fv-plugins-materialize',
         messageClass: 'helper-text',
         rowInvalidClass: 'fv-invalid-row',
         rowPattern: /^(.*)col(\s+)s[0-9]+(.*)$/,
         rowSelector: '.row',
         rowValidClass: 'fv-valid-row',
        },
        r,
       ),
      )
     );
    }
    return (
     d(n, [
      {
       key: 'onIconPlaced',
       value: function (a) {
        var u = a.element.getAttribute('type'),
         s = a.element.parentElement;
        (u === 'checkbox' || u === 'radio') &&
         (s.parentElement.insertBefore(a.iconElement, s.nextSibling),
         _(a.iconElement, { 'fv-plugins-icon-check': !0 }));
       },
      },
     ]),
     n
    );
   })(w);
  return O;
 });
});
export default P();