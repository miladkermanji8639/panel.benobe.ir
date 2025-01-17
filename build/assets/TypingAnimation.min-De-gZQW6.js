var k = (o, u) => () => (u || o((u = { exports: {} }).exports, u), u.exports);
var R = k((v, d) => {
 (function (o, u) {
  typeof v == 'object' && typeof d < 'u'
   ? (d.exports = u())
   : typeof define == 'function' && define.amd
     ? define(u)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.TypingAnimation = u()));
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
  function m(e, t, r) {
   return (
    t && u(e.prototype, t),
    r && u(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function _(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && p(e, t);
  }
  function c(e) {
   return (
    (c = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (r) {
        return r.__proto__ || Object.getPrototypeOf(r);
       }),
    c(e)
   );
  }
  function p(e, t) {
   return (
    (p = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (n, i) {
        return (n.__proto__ = i), n;
       }),
    p(e, t)
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
  function O(e) {
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
   return O(e);
  }
  function P(e) {
   var t = b();
   return function () {
    var n = c(e),
     i;
    if (t) {
     var f = c(this).constructor;
     i = Reflect.construct(n, arguments, f);
    } else i = n.apply(this, arguments);
    return g(this, i);
   };
  }
  var j = FormValidation.Plugin,
   w = (function (e) {
    _(r, e);
    var t = P(r);
    function r(n) {
     var i;
     return (
      o(this, r),
      (i = t.call(this, n)),
      (i.opts = Object.assign({}, { autoPlay: !0 }, n)),
      i
     );
    }
    return (
     m(r, [
      {
       key: 'install',
       value: function () {
        (this.fields = Object.keys(this.core.getFields())),
         this.opts.autoPlay && this.play();
       },
      },
      {
       key: 'play',
       value: function () {
        return this.animate(0);
       },
      },
      {
       key: 'animate',
       value: function (i) {
        var f = this;
        if (i >= this.fields.length) return Promise.resolve(i);
        var s = this.fields[i],
         a = this.core.getElements(s)[0],
         h = a.getAttribute('type'),
         y = this.opts.data[s];
        return h === 'checkbox' || h === 'radio'
         ? ((a.checked = !0),
           a.setAttribute('checked', 'true'),
           this.core.revalidateField(s).then(function (l) {
            return f.animate(i + 1);
           }))
         : y
           ? new Promise(function (l) {
              return new Typed(a, {
               attr: 'value',
               autoInsertCss: !0,
               bindInputFocusEvents: !0,
               onComplete: function () {
                l(i + 1);
               },
               onStringTyped: function (T, S) {
                (a.value = y[T]), f.core.revalidateField(s);
               },
               strings: y,
               typeSpeed: 100,
              });
             }).then(function (l) {
              return f.animate(l);
             })
           : this.animate(i + 1);
       },
      },
     ]),
     r
    );
   })(j);
  return w;
 });
});
export default R();
