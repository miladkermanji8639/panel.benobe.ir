var m = (n, i) => () => (i || n((i = { exports: {} }).exports, i), i.exports);
var v = m((l, p) => {
 (function (n, i) {
  typeof l == 'object' && typeof p < 'u'
   ? (p.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.TypingAnimation = i(n.FormValidation)));
 })(void 0, function (n) {
  var i = function (o, e) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, r) {
       t.__proto__ = r;
      }) ||
     function (t, r) {
      for (var s in r)
       Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
     }),
    i(o, e)
   );
  };
  function h(o, e) {
   if (typeof e != 'function' && e !== null)
    throw new TypeError(
     'Class extends value ' + String(e) + ' is not a constructor or null',
    );
   i(o, e);
   function t() {
    this.constructor = o;
   }
   o.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
  }
  var y = (function (o) {
   h(e, o);
   function e(t) {
    var r = o.call(this, t) || this;
    return (r.opts = Object.assign({}, { autoPlay: !0 }, t)), r;
   }
   return (
    (e.prototype.install = function () {
     (this.fields = Object.keys(this.core.getFields())),
      this.opts.autoPlay && this.play();
    }),
    (e.prototype.play = function () {
     return this.animate(0);
    }),
    (e.prototype.animate = function (t) {
     var r = this;
     if (t >= this.fields.length) return Promise.resolve(t);
     var s = this.fields[t],
      a = this.core.getElements(s)[0],
      f = a.getAttribute('type'),
      c = this.opts.data[s];
     return f === 'checkbox' || f === 'radio'
      ? ((a.checked = !0),
        a.setAttribute('checked', 'true'),
        this.core.revalidateField(s).then(function (u) {
         return r.animate(t + 1);
        }))
      : c
        ? new Promise(function (u) {
           return new Typed(a, {
            attr: 'value',
            autoInsertCss: !0,
            bindInputFocusEvents: !0,
            onComplete: function () {
             u(t + 1);
            },
            onStringTyped: function (d, _) {
             (a.value = c[d]), r.core.revalidateField(s);
            },
            strings: c,
            typeSpeed: 100,
           });
          }).then(function (u) {
           return r.animate(u);
          })
        : this.animate(t + 1);
    }),
    e
   );
  })(n.Plugin);
  return y;
 });
});
export default v();
