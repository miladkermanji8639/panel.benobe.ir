var y = (o, n) => () => (n || o((n = { exports: {} }).exports, n), n.exports);
var h = y((f, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-typing-animation
  * @version 2.4.0
  */ (function (o, n) {
  typeof f == 'object' && typeof c < 'u'
   ? (c.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.TypingAnimation = n(o.FormValidation)));
 })(void 0, function (o) {
  var n = function (s, r) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var i in t)
       Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     }),
    n(s, r)
   );
  };
  return (function (s) {
   function r(e) {
    var t = s.call(this, e) || this;
    return (t.opts = Object.assign({}, { autoPlay: !0 }, e)), t;
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     n(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((i.prototype = t.prototype), new i()));
    })(r, s),
    (r.prototype.install = function () {
     (this.fields = Object.keys(this.core.getFields())),
      this.opts.autoPlay && this.play();
    }),
    (r.prototype.play = function () {
     return this.animate(0);
    }),
    (r.prototype.animate = function (e) {
     var t = this;
     if (e >= this.fields.length) return Promise.resolve(e);
     var i = this.fields[e],
      a = this.core.getElements(i)[0],
      p = a.getAttribute('type'),
      l = this.opts.data[i];
     return p === 'checkbox' || p === 'radio'
      ? ((a.checked = !0),
        a.setAttribute('checked', 'true'),
        this.core.revalidateField(i).then(function (u) {
         return t.animate(e + 1);
        }))
      : l
        ? new Promise(function (u) {
           return new Typed(a, {
            attr: 'value',
            autoInsertCss: !0,
            bindInputFocusEvents: !0,
            onComplete: function () {
             u(e + 1);
            },
            onStringTyped: function (d, m) {
             (a.value = l[d]), t.core.revalidateField(i);
            },
            strings: l,
            typeSpeed: 100,
           });
          }).then(function (u) {
           return t.animate(u);
          })
        : this.animate(e + 1);
    }),
    r
   );
  })(o.Plugin);
 });
});
export default h();
