var D = (o, l) => () => (l || o((l = { exports: {} }).exports, l), l.exports);
var L = D((S, b) => {
 (function (o, l) {
  typeof S == 'object' && typeof b < 'u'
   ? (b.exports = l())
   : typeof define == 'function' && define.amd
     ? define(l)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.MandatoryIcon = l()));
 })(void 0, function () {
  function o(e, n) {
   if (!(e instanceof n))
    throw new TypeError('Cannot call a class as a function');
  }
  function l(e, n) {
   for (var i = 0; i < n.length; i++) {
    var r = n[i];
    (r.enumerable = r.enumerable || !1),
     (r.configurable = !0),
     'value' in r && (r.writable = !0),
     Object.defineProperty(e, r.key, r);
   }
  }
  function j(e, n, i) {
   return (
    n && l(e.prototype, n),
    i && l(e, i),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function d(e, n, i) {
   return (
    n in e
     ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (e[n] = i),
    e
   );
  }
  function C(e, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    n && m(e, n);
  }
  function h(e) {
   return (
    (h = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (i) {
        return i.__proto__ || Object.getPrototypeOf(i);
       }),
    h(e)
   );
  }
  function m(e, n) {
   return (
    (m = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (r, t) {
        return (r.__proto__ = t), r;
       }),
    m(e, n)
   );
  }
  function k() {
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
  function u(e) {
   if (e === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return e;
  }
  function N(e, n) {
   if (n && (typeof n == 'object' || typeof n == 'function')) return n;
   if (n !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return u(e);
  }
  function A(e) {
   var n = k();
   return function () {
    var r = h(e),
     t;
    if (n) {
     var s = h(this).constructor;
     t = Reflect.construct(r, arguments, s);
    } else t = r.apply(this, arguments);
    return N(this, t);
   };
  }
  function R(e, n) {
   if (e) {
    if (typeof e == 'string') return V(e, n);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (
     (i === 'Object' && e.constructor && (i = e.constructor.name),
     i === 'Map' || i === 'Set')
    )
     return Array.from(e);
    if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
     return V(e, n);
   }
  }
  function V(e, n) {
   (n == null || n > e.length) && (n = e.length);
   for (var i = 0, r = new Array(n); i < n; i++) r[i] = e[i];
   return r;
  }
  function I(e, n) {
   var i = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
   if (!i) {
    if (
     Array.isArray(e) ||
     (i = R(e)) ||
     (n && e && typeof e.length == 'number')
    ) {
     i && (e = i);
     var r = 0,
      t = function () {};
     return {
      s: t,
      n: function () {
       return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      },
      e: function (f) {
       throw f;
      },
      f: t,
     };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
   }
   var s = !0,
    c = !1,
    a;
   return {
    s: function () {
     i = i.call(e);
    },
    n: function () {
     var f = i.next();
     return (s = f.done), f;
    },
    e: function (f) {
     (c = !0), (a = f);
    },
    f: function () {
     try {
      !s && i.return != null && i.return();
     } finally {
      if (c) throw a;
     }
    },
   };
  }
  var T = FormValidation.Plugin,
   g = FormValidation.utils.classSet,
   F = (function (e) {
    C(i, e);
    var n = A(i);
    function i(r) {
     var t;
     return (
      o(this, i),
      (t = n.call(this, r)),
      (t.removedIcons = {
       Invalid: '',
       NotValidated: '',
       Valid: '',
       Validating: '',
      }),
      (t.icons = new Map()),
      (t.elementValidatingHandler = t.onElementValidating.bind(u(t))),
      (t.elementValidatedHandler = t.onElementValidated.bind(u(t))),
      (t.elementNotValidatedHandler = t.onElementNotValidated.bind(u(t))),
      (t.iconPlacedHandler = t.onIconPlaced.bind(u(t))),
      (t.iconSetHandler = t.onIconSet.bind(u(t))),
      t
     );
    }
    return (
     j(i, [
      {
       key: 'install',
       value: function () {
        this.core
         .on('core.element.validating', this.elementValidatingHandler)
         .on('core.element.validated', this.elementValidatedHandler)
         .on('core.element.notvalidated', this.elementNotValidatedHandler)
         .on('plugins.icon.placed', this.iconPlacedHandler)
         .on('plugins.icon.set', this.iconSetHandler);
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.icons.clear(),
         this.core
          .off('core.element.validating', this.elementValidatingHandler)
          .off('core.element.validated', this.elementValidatedHandler)
          .off('core.element.notvalidated', this.elementNotValidatedHandler)
          .off('plugins.icon.placed', this.iconPlacedHandler)
          .off('plugins.icon.set', this.iconSetHandler);
       },
      },
      {
       key: 'onIconPlaced',
       value: function (t) {
        var s = this,
         c = this.core.getFields()[t.field].validators,
         a = this.core.getElements(t.field);
        if (c && c.notEmpty && c.notEmpty.enabled !== !1 && a.length) {
         this.icons.set(t.element, t.iconElement);
         var f = a[0].getAttribute('type'),
          O = f ? f.toLowerCase() : '',
          x = O === 'checkbox' || O === 'radio' ? [a[0]] : a,
          p = I(x),
          E;
         try {
          for (p.s(); !(E = p.n()).done; ) {
           var M = E.value;
           this.core.getElementValue(t.field, M) === '' &&
            g(t.iconElement, d({}, this.opts.icon, !0));
          }
         } catch (v) {
          p.e(v);
         } finally {
          p.f();
         }
        }
        this.iconClasses = t.classes;
        var B = this.opts.icon.split(' '),
         _ = {
          Invalid: this.iconClasses.invalid
           ? this.iconClasses.invalid.split(' ')
           : [],
          Valid: this.iconClasses.valid
           ? this.iconClasses.valid.split(' ')
           : [],
          Validating: this.iconClasses.validating
           ? this.iconClasses.validating.split(' ')
           : [],
         };
        Object.keys(_).forEach(function (v) {
         var P = [],
          y = I(B),
          w;
         try {
          for (y.s(); !(w = y.n()).done; ) {
           var H = w.value;
           _[v].indexOf(H) === -1 && P.push(H);
          }
         } catch (z) {
          y.e(z);
         } finally {
          y.f();
         }
         s.removedIcons[v] = P.join(' ');
        });
       },
      },
      {
       key: 'onElementValidating',
       value: function (t) {
        this.updateIconClasses(t.element, 'Validating');
       },
      },
      {
       key: 'onElementValidated',
       value: function (t) {
        this.updateIconClasses(t.element, t.valid ? 'Valid' : 'Invalid');
       },
      },
      {
       key: 'onElementNotValidated',
       value: function (t) {
        this.updateIconClasses(t.element, 'NotValidated');
       },
      },
      {
       key: 'updateIconClasses',
       value: function (t, s) {
        var c = this.icons.get(t);
        if (
         c &&
         this.iconClasses &&
         (this.iconClasses.valid ||
          this.iconClasses.invalid ||
          this.iconClasses.validating)
        ) {
         var a;
         g(
          c,
          ((a = {}),
          d(a, this.removedIcons[s], !1),
          d(a, this.opts.icon, !1),
          a),
         );
        }
       },
      },
      {
       key: 'onIconSet',
       value: function (t) {
        var s = this.icons.get(t.element);
        s &&
         ((t.status === 'NotValidated' &&
          this.core.getElementValue(t.field, t.element) === '') ||
          t.status === 'Ignored') &&
         g(s, d({}, this.opts.icon, !0));
       },
      },
     ]),
     i
    );
   })(T);
  return F;
 });
});
export default L();