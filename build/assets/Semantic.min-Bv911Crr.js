var E = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var F = E((y, p) => {
 (function (o, a) {
  typeof y == 'object' && typeof p < 'u'
   ? (p.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Semantic = a()));
 })(void 0, function () {
  function o(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function a(e, t) {
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
    t && a(e.prototype, t),
    n && a(e, n),
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
    t && s(e, t);
  }
  function c(e) {
   return (
    (c = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
       }),
    c(e)
   );
  }
  function s(e, t) {
   return (
    (s = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, i) {
        return (r.__proto__ = i), r;
       }),
    s(e, t)
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
  function b(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function g(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return b(e);
  }
  function _(e) {
   var t = h();
   return function () {
    var r = c(e),
     i;
    if (t) {
     var f = c(this).constructor;
     i = Reflect.construct(r, arguments, f);
    } else i = r.apply(this, arguments);
    return g(this, i);
   };
  }
  var O = FormValidation.utils.classSet,
   d = FormValidation.utils.hasClass,
   w = FormValidation.plugins.Framework,
   P = (function (e) {
    v(n, e);
    var t = _(n);
    function n(r) {
     return (
      o(this, n),
      t.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-semantic',
         messageClass: 'ui pointing red label',
         rowInvalidClass: 'error',
         rowPattern: /^.*(field|column).*$/,
         rowSelector: '.fields',
         rowValidClass: 'fv-has-success',
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
       value: function (i) {
        var f = i.element.getAttribute('type');
        if (f === 'checkbox' || f === 'radio') {
         var u = i.element.parentElement;
         O(i.iconElement, { 'fv-plugins-icon-check': !0 }),
          u.parentElement.insertBefore(i.iconElement, u.nextSibling);
        }
       },
      },
      {
       key: 'onMessagePlaced',
       value: function (i) {
        var f = i.element.getAttribute('type'),
         u = i.elements.length;
        if ((f === 'checkbox' || f === 'radio') && u > 1) {
         var j = i.elements[u - 1],
          l = j.parentElement;
         d(l, f) &&
          d(l, 'ui') &&
          l.parentElement.insertBefore(i.messageElement, l.nextSibling);
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
export default F();