var O = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var j = O((c, f) => {
 (function (o, a) {
  typeof c == 'object' && typeof f < 'u'
   ? (f.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.Mailgun = a()));
 })(void 0, function () {
  function o(e, t) {
   if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
  }
  function a(e, t) {
   for (var r = 0; r < t.length; r++) {
    var i = t[r];
    (i.enumerable = i.enumerable || !1),
     (i.configurable = !0),
     'value' in i && (i.writable = !0),
     Object.defineProperty(e, i.key, i);
   }
  }
  function d(e, t, r) {
   return (
    t && a(e.prototype, t),
    r && a(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
   );
  }
  function p(e, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
   (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
   })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && u(e, t);
  }
  function s(e) {
   return (
    (s = Object.setPrototypeOf
     ? Object.getPrototypeOf.bind()
     : function (r) {
        return r.__proto__ || Object.getPrototypeOf(r);
       }),
    s(e)
   );
  }
  function u(e, t) {
   return (
    (u = Object.setPrototypeOf
     ? Object.setPrototypeOf.bind()
     : function (i, n) {
        return (i.__proto__ = n), i;
       }),
    u(e, t)
   );
  }
  function y() {
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
  function l(e) {
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
   return l(e);
  }
  function g(e) {
   var t = y();
   return function () {
    var i = s(e),
     n;
    if (t) {
     var b = s(this).constructor;
     n = Reflect.construct(i, arguments, b);
    } else n = i.apply(this, arguments);
    return m(this, n);
   };
  }
  var h = FormValidation.Plugin,
   _ = FormValidation.plugins.Alias,
   v = (function (e) {
    p(r, e);
    var t = g(r);
    function r(i) {
     var n;
     return (
      o(this, r),
      (n = t.call(this, i)),
      (n.opts = Object.assign({}, { suggestion: !1 }, i)),
      (n.messageDisplayedHandler = n.onMessageDisplayed.bind(l(n))),
      n
     );
    }
    return (
     d(r, [
      {
       key: 'install',
       value: function () {
        this.opts.suggestion &&
         this.core.on(
          'plugins.message.displayed',
          this.messageDisplayedHandler,
         );
        var n = { mailgun: 'remote' };
        this.core
         .registerPlugin('___mailgunAlias', new _(n))
         .addField(this.opts.field, {
          validators: {
           mailgun: {
            crossDomain: !0,
            data: { api_key: this.opts.apiKey },
            headers: { 'Content-Type': 'application/json' },
            message: this.opts.message,
            name: 'address',
            url: 'https://api.mailgun.net/v3/address/validate',
            validKey: 'is_valid',
           },
          },
         });
       },
      },
      {
       key: 'uninstall',
       value: function () {
        this.opts.suggestion &&
         this.core.off(
          'plugins.message.displayed',
          this.messageDisplayedHandler,
         ),
         this.core.removeField(this.opts.field);
       },
      },
      {
       key: 'onMessageDisplayed',
       value: function (n) {
        n.field === this.opts.field &&
         n.validator === 'mailgun' &&
         n.meta &&
         n.meta.did_you_mean &&
         (n.messageElement.innerHTML = 'Did you mean '.concat(
          n.meta.did_you_mean,
          '?',
         ));
       },
      },
     ]),
     r
    );
   })(h);
  return v;
 });
});
export default j();