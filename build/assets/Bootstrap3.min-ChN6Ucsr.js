var E = (i, f) => () => (f || i((f = { exports: {} }).exports, f), f.exports);
var j = E((y, p) => {
 (function (i, f) {
  typeof y == 'object' && typeof p < 'u'
   ? (p.exports = f())
   : typeof define == 'function' && define.amd
     ? define(f)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Bootstrap3 = f()));
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
  function m(e, t, n) {
   return (
    t && f(e.prototype, t),
    n && f(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function b(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && l(e, t);
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
  function l(e, t) {
   return (
    (l = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, o) {
        return (r.__proto__ = o), r;
       }),
    l(e, t)
   );
  }
  function h() {
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
  function v(e) {
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
   return v(e);
  }
  function O(e) {
   var t = h();
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
  var g = FormValidation.utils.classSet,
   s = FormValidation.utils.hasClass,
   w = FormValidation.plugins.Framework,
   P = (function (e) {
    b(n, e);
    var t = O(n);
    function n(r) {
     return (
      i(this, n),
      t.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-bootstrap3',
         messageClass: 'help-block',
         rowClasses: 'has-feedback',
         rowInvalidClass: 'has-error',
         rowPattern: /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,
         rowSelector: '.form-group',
         rowValidClass: 'has-success',
        },
        r,
       ),
      )
     );
    }
    return (
     m(n, [
      {
       key: 'onIconPlaced',
       value: function (o) {
        g(o.iconElement, { 'form-control-feedback': !0 });
        var a = o.element.parentElement;
        s(a, 'input-group') &&
         a.parentElement.insertBefore(o.iconElement, a.nextSibling);
        var c = o.element.getAttribute('type');
        if (c === 'checkbox' || c === 'radio') {
         var d = a.parentElement;
         s(a, c)
          ? a.parentElement.insertBefore(o.iconElement, a.nextSibling)
          : s(a.parentElement, c) &&
            d.parentElement.insertBefore(o.iconElement, d.nextSibling);
        }
       },
      },
     ]),
     n
    );
   })(w);
  return P;
 });
});
export default j();