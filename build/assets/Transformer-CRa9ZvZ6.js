var P = (o, u) => () => (u || o((u = { exports: {} }).exports, u), u.exports);
var j = P((y, s) => {
 (function (o, u) {
  typeof y == 'object' && typeof s < 'u'
   ? (s.exports = u())
   : typeof define == 'function' && define.amd
     ? define(u)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Transformer = u()));
 })(void 0, function () {
  function o(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function u(e, t) {
   for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
     (n.configurable = !0),
     'value' in n && (n.writable = !0),
     Object.defineProperty(e, n.key, n);
   }
  }
  function h(e, t, r) {
   return (
    t && u(e.prototype, t),
    r && u(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function d(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && c(e, t);
  }
  function a(e) {
   return (
    (a = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (r) {
        return r.__proto__ || Object.getPrototypeOf(r);
       }),
    a(e)
   );
  }
  function c(e, t) {
   return (
    (c = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (n, i) {
        return (n.__proto__ = i), n;
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
  function p(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function b(e, t) {
   if (t && (typeof t == 'object' || typeof t == 'function')) return t;
   if (t !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return p(e);
  }
  function O(e) {
   var t = v();
   return function () {
    var n = a(e),
     i;
    if (t) {
     var f = a(this).constructor;
     i = Reflect.construct(n, arguments, f);
    } else i = n.apply(this, arguments);
    return b(this, i);
   };
  }
  var _ = FormValidation.Plugin,
   m = (function (e) {
    d(r, e);
    var t = O(r);
    function r(n) {
     var i;
     return (
      o(this, r),
      (i = t.call(this, n)),
      (i.valueFilter = i.getElementValue.bind(p(i))),
      i
     );
    }
    return (
     h(r, [
      {
       key: 'install',
       value: function () {
        this.core.registerFilter('field-value', this.valueFilter);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.deregisterFilter('field-value', this.valueFilter);
       },
      },
      {
       key: 'getElementValue',
       value: function (i, f, g, l) {
        return this.opts[f] &&
         this.opts[f][l] &&
         typeof this.opts[f][l] == 'function'
         ? this.opts[f][l].apply(this, [f, g, l])
         : i;
       },
      },
     ]),
     r
    );
   })(_);
  return m;
 });
});
export default j();