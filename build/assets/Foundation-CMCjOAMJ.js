var w = (o, i) => () => (i || o((i = { exports: {} }).exports, i), i.exports);
var P = w((d, p) => {
 (function (o, i) {
  typeof d == 'object' && typeof p < 'u'
   ? (p.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Foundation = i()));
 })(void 0, function () {
  function o(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function i(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(e, r.key, r);
   }
  }
  function y(e, t, n) {
   return (
    t && i(e.prototype, t),
    n && i(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function m(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && s(e, t);
  }
  function a(e) {
   return (
    (a = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
       }),
    a(e)
   );
  }
  function s(e, t) {
   return (
    (s = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, f) {
        return (r.__proto__ = f), r;
       }),
    s(e, t)
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
  function v(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function h(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return v(e);
  }
  function _(e) {
   var t = b();
   return function () {
    var r = a(e),
     f;
    if (t) {
     var c = a(this).constructor;
     f = Reflect.construct(r, arguments, c);
    } else f = r.apply(this, arguments);
    return h(this, f);
   };
  }
  var O = FormValidation.plugins.Framework,
   g = (function (e) {
    m(n, e);
    var t = _(n);
    function n(r) {
     return (
      o(this, n),
      t.call(
       this,
       Object.assign(
        {},
        {
         formClass: 'fv-plugins-foundation',
         messageClass: 'form-error',
         rowInvalidClass: 'fv-row__error',
         rowPattern: /^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,
         rowSelector: '.grid-x',
         rowValidClass: 'fv-row__success',
        },
        r,
       ),
      )
     );
    }
    return (
     y(n, [
      {
       key: 'onIconPlaced',
       value: function (f) {
        var c = f.element.getAttribute('type');
        if (c === 'checkbox' || c === 'radio') {
         var u = f.iconElement.nextSibling;
         if (u.nodeName === 'LABEL')
          u.parentNode.insertBefore(f.iconElement, u.nextSibling);
         else if (u.nodeName === '#text') {
          var l = u.nextSibling;
          l &&
           l.nodeName === 'LABEL' &&
           l.parentNode.insertBefore(f.iconElement, l.nextSibling);
         }
        }
       },
      },
     ]),
     n
    );
   })(O);
  return g;
 });
});
export default P();