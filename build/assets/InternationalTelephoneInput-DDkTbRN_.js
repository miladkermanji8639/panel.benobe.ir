var P = (a, u) => () => (u || a((u = { exports: {} }).exports, u), u.exports);
var w = P((v, p) => {
 (function (a, u) {
  typeof v == 'object' && typeof p < 'u'
   ? (p.exports = u())
   : typeof define == 'function' && define.amd
     ? define(u)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.InternationalTelephoneInput = u()));
 })(void 0, function () {
  function a(t, n) {
   if (!(t instanceof n))
    throw new TypeError('Cannot call a class as a function');
  }
  function u(t, n) {
   for (var r = 0; r < n.length; r++) {
    var i = n[r];
    (i.enumerable = i.enumerable || !1),
     (i.configurable = !0),
     'value' in i && (i.writable = !0),
     Object.defineProperty(t, i.key, i);
   }
  }
  function _(t, n, r) {
   return (
    n && u(t.prototype, n),
    r && u(t, r),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    t
   );
  }
  function b(t, n, r) {
   return (
    n in t
     ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
       })
     : (t[n] = r),
    t
   );
  }
  function g(t, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError('Super expression must either be null or a function');
   (t.prototype = Object.create(n && n.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    n && d(t, n);
  }
  function s(t) {
   return (
    (s = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (r) {
        return r.__proto__ || Object.getPrototypeOf(r);
       }),
    s(t)
   );
  }
  function d(t, n) {
   return (
    (d = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (i, e) {
        return (i.__proto__ = e), i;
       }),
    d(t, n)
   );
  }
  function m() {
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
  function h(t) {
   if (t === void 0)
    throw new ReferenceError(
     "this hasn't been initialised - super() hasn't been called",
    );
   return t;
  }
  function T(t, n) {
   if (n && (typeof n == 'object' || typeof n == 'function')) return n;
   if (n !== void 0)
    throw new TypeError(
     'Derived constructors may only return object or undefined',
    );
   return h(t);
  }
  function I(t) {
   var n = m();
   return function () {
    var i = s(t),
     e;
    if (n) {
     var o = s(this).constructor;
     e = Reflect.construct(i, arguments, o);
    } else e = i.apply(this, arguments);
    return T(this, e);
   };
  }
  var O = FormValidation.Plugin,
   y = (function (t) {
    g(r, t);
    var n = I(r);
    function r(i) {
     var e;
     return (
      a(this, r),
      (e = n.call(this, i)),
      (e.intlTelInstances = new Map()),
      (e.countryChangeHandler = new Map()),
      (e.fieldElements = new Map()),
      (e.opts = Object.assign(
       {},
       { autoPlaceholder: 'polite', utilsScript: '' },
       i,
      )),
      (e.validatePhoneNumber = e.checkPhoneNumber.bind(h(e))),
      (e.fields =
       typeof e.opts.field == 'string'
        ? e.opts.field.split(',')
        : e.opts.field),
      e
     );
    }
    return (
     _(r, [
      {
       key: 'install',
       value: function () {
        var e = this;
        this.core.registerValidator(
         r.INT_TEL_VALIDATOR,
         this.validatePhoneNumber,
        ),
         this.fields.forEach(function (o) {
          e.core.addField(o, {
           validators: b({}, r.INT_TEL_VALIDATOR, { message: e.opts.message }),
          });
          var f = e.core.getElements(o)[0],
           l = function () {
            return e.core.revalidateField(o);
           };
          f.addEventListener('countrychange', l),
           e.countryChangeHandler.set(o, l),
           e.fieldElements.set(o, f),
           e.intlTelInstances.set(o, intlTelInput(f, e.opts));
         });
       },
      },
      {
       key: 'uninstall',
       value: function () {
        var e = this;
        this.fields.forEach(function (o) {
         var f = e.countryChangeHandler.get(o),
          l = e.fieldElements.get(o),
          c = e.getIntTelInstance(o);
         f &&
          l &&
          c &&
          (l.removeEventListener('countrychange', f),
          e.core.disableValidator(o, r.INT_TEL_VALIDATOR),
          c.destroy());
        });
       },
      },
      {
       key: 'getIntTelInstance',
       value: function (e) {
        return this.intlTelInstances.get(e);
       },
      },
      {
       key: 'checkPhoneNumber',
       value: function () {
        var e = this;
        return {
         validate: function (f) {
          var l = f.value,
           c = e.getIntTelInstance(f.field);
          return l === '' || !c ? { valid: !0 } : { valid: c.isValidNumber() };
         },
        };
       },
      },
     ]),
     r
    );
   })(O);
  return (y.INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator'), y;
 });
});
export default w();