var j = (i, f) => () => (f || i((f = { exports: {} }).exports, f), f.exports);
var R = j((m, p) => {
 (function (i, f) {
  typeof m == 'object' && typeof p < 'u'
   ? (p.exports = f())
   : typeof define == 'function' && define.amd
     ? define(f)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.L10n = f()));
 })(void 0, function () {
  function i(t) {
   '@babel/helpers - typeof';
   return (
    (i =
     typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
         return typeof e;
        }
      : function (e) {
         return e &&
          typeof Symbol == 'function' &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? 'symbol'
          : typeof e;
        }),
    i(t)
   );
  }
  function f(t, e) {
   if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function');
  }
  function h(t, e) {
   for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
     (n.configurable = !0),
     'value' in n && (n.writable = !0),
     Object.defineProperty(t, n.key, n);
   }
  }
  function v(t, e, r) {
   return (
    e && h(t.prototype, e),
    r && h(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
   );
  }
  function g(t, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
   (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && l(t, e);
  }
  function a(t) {
   return (
    (a = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (r) {
        return r.__proto__ || Object.getPrototypeOf(r);
       }),
    a(t)
   );
  }
  function l(t, e) {
   return (
    (l = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (n, o) {
        return (n.__proto__ = o), n;
       }),
    l(t, e)
   );
  }
  function O() {
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
  function d(t) {
   if (t === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return t;
  }
  function _(t, e) {
   if (e && (typeof e == 'object' || typeof e == 'function')) return e;
   if (e !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return d(t);
  }
  function P(t) {
   var e = O();
   return function () {
    var n = a(t),
     o;
    if (e) {
     var u = a(this).constructor;
     o = Reflect.construct(n, arguments, u);
    } else o = n.apply(this, arguments);
    return _(this, o);
   };
  }
  var w = FormValidation.Plugin,
   F = (function (t) {
    g(r, t);
    var e = P(r);
    function r(n) {
     var o;
     return (
      f(this, r),
      (o = e.call(this, n)),
      (o.messageFilter = o.getMessage.bind(d(o))),
      o
     );
    }
    return (
     v(r, [
      {
       key: 'install',
       value: function () {
        this.core.registerFilter('validator-message', this.messageFilter);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.core.deregisterFilter('validator-message', this.messageFilter);
       },
      },
      {
       key: 'getMessage',
       value: function (o, u, s) {
        if (this.opts[u] && this.opts[u][s]) {
         var c = this.opts[u][s],
          b = i(c);
         if (b === 'object' && c[o]) return c[o];
         if (b === 'function') {
          var y = c.apply(this, [u, s]);
          return y && y[o] ? y[o] : '';
         }
        }
        return '';
       },
      },
     ]),
     r
    );
   })(w);
  return F;
 });
});
export default R();