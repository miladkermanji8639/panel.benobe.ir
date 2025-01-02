var V = (i, l) => () => (l || i((l = { exports: {} }).exports, l), l.exports);
var y = V((E, v) => {
 (function (i, l) {
  typeof E == 'object' && typeof v < 'u'
   ? (v.exports = l(
      require('@form-validation/core'),
      require('@form-validation/plugin-message'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-message'], l)
     : ((i = typeof globalThis < 'u' ? globalThis : i || self),
       (i.FormValidation = i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Framework = l(
        i.FormValidation,
        i.FormValidation.plugins,
       )));
 })(void 0, function (i, l) {
  var m = function (f, o) {
   return (
    (m =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var n in e)
       Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     }),
    m(f, o)
   );
  };
  function _(f, o) {
   if (typeof o != 'function' && o !== null)
    throw new TypeError(
     'Class extends value ' + String(o) + ' is not a constructor or null',
    );
   m(f, o);
   function t() {
    this.constructor = f;
   }
   f.prototype =
    o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
  }
  var r = i.utils.classSet,
   C = i.utils.closest,
   w = (function (f) {
    _(o, f);
    function o(t) {
     var e = f.call(this, t) || this;
     return (
      (e.results = new Map()),
      (e.containers = new Map()),
      (e.opts = Object.assign(
       {},
       {
        defaultMessageContainer: !0,
        eleInvalidClass: '',
        eleValidClass: '',
        rowClasses: '',
        rowValidatingClass: '',
       },
       t,
      )),
      (e.elementIgnoredHandler = e.onElementIgnored.bind(e)),
      (e.elementValidatingHandler = e.onElementValidating.bind(e)),
      (e.elementValidatedHandler = e.onElementValidated.bind(e)),
      (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
      (e.iconPlacedHandler = e.onIconPlaced.bind(e)),
      (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
      (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
      (e.messagePlacedHandler = e.onMessagePlaced.bind(e)),
      e
     );
    }
    return (
     (o.prototype.install = function () {
      var t,
       e = this;
      r(
       this.core.getFormElement(),
       ((t = {}),
       (t[this.opts.formClass] = !0),
       (t['fv-plugins-framework'] = !0),
       t),
      ),
       this.core
        .on('core.element.ignored', this.elementIgnoredHandler)
        .on('core.element.validating', this.elementValidatingHandler)
        .on('core.element.validated', this.elementValidatedHandler)
        .on('core.element.notvalidated', this.elementNotValidatedHandler)
        .on('plugins.icon.placed', this.iconPlacedHandler)
        .on('core.field.added', this.fieldAddedHandler)
        .on('core.field.removed', this.fieldRemovedHandler),
       this.opts.defaultMessageContainer &&
        (this.core.registerPlugin(
         o.MESSAGE_PLUGIN,
         new l.Message({
          clazz: this.opts.messageClass,
          container: function (n, s) {
           var a =
             typeof e.opts.rowSelector == 'string'
              ? e.opts.rowSelector
              : e.opts.rowSelector(n, s),
            d = C(s, a);
           return l.Message.getClosestContainer(s, d, e.opts.rowPattern);
          },
         }),
        ),
        this.core.on('plugins.message.placed', this.messagePlacedHandler));
     }),
     (o.prototype.uninstall = function () {
      var t;
      this.results.clear(),
       this.containers.clear(),
       r(
        this.core.getFormElement(),
        ((t = {}),
        (t[this.opts.formClass] = !1),
        (t['fv-plugins-framework'] = !1),
        t),
       ),
       this.core
        .off('core.element.ignored', this.elementIgnoredHandler)
        .off('core.element.validating', this.elementValidatingHandler)
        .off('core.element.validated', this.elementValidatedHandler)
        .off('core.element.notvalidated', this.elementNotValidatedHandler)
        .off('plugins.icon.placed', this.iconPlacedHandler)
        .off('core.field.added', this.fieldAddedHandler)
        .off('core.field.removed', this.fieldRemovedHandler),
       this.opts.defaultMessageContainer &&
        (this.core.deregisterPlugin(o.MESSAGE_PLUGIN),
        this.core.off('plugins.message.placed', this.messagePlacedHandler));
     }),
     (o.prototype.onEnabled = function () {
      var t;
      r(
       this.core.getFormElement(),
       ((t = {}), (t[this.opts.formClass] = !0), t),
      ),
       this.opts.defaultMessageContainer &&
        this.core.enablePlugin(o.MESSAGE_PLUGIN);
     }),
     (o.prototype.onDisabled = function () {
      var t;
      r(
       this.core.getFormElement(),
       ((t = {}), (t[this.opts.formClass] = !1), t),
      ),
       this.opts.defaultMessageContainer &&
        this.core.disablePlugin(o.MESSAGE_PLUGIN);
     }),
     (o.prototype.onIconPlaced = function (t) {}),
     (o.prototype.onMessagePlaced = function (t) {}),
     (o.prototype.onFieldAdded = function (t) {
      var e = this,
       n = t.elements;
      n &&
       (n.forEach(function (s) {
        var a,
         d = e.containers.get(s);
        d &&
         (r(
          d,
          ((a = {}),
          (a[e.opts.rowInvalidClass] = !1),
          (a[e.opts.rowValidatingClass] = !1),
          (a[e.opts.rowValidClass] = !1),
          (a['fv-plugins-icon-container'] = !1),
          a),
         ),
         e.containers.delete(s));
       }),
       this.prepareFieldContainer(t.field, n));
     }),
     (o.prototype.onFieldRemoved = function (t) {
      var e = this;
      t.elements.forEach(function (n) {
       var s,
        a = e.containers.get(n);
       a &&
        r(
         a,
         ((s = {}),
         (s[e.opts.rowInvalidClass] = !1),
         (s[e.opts.rowValidatingClass] = !1),
         (s[e.opts.rowValidClass] = !1),
         s),
        );
      });
     }),
     (o.prototype.prepareFieldContainer = function (t, e) {
      var n = this;
      if (e.length) {
       var s = e[0].getAttribute('type');
       s === 'radio' || s === 'checkbox'
        ? this.prepareElementContainer(t, e[0])
        : e.forEach(function (a) {
           return n.prepareElementContainer(t, a);
          });
      }
     }),
     (o.prototype.prepareElementContainer = function (t, e) {
      var n,
       s =
        typeof this.opts.rowSelector == 'string'
         ? this.opts.rowSelector
         : this.opts.rowSelector(t, e),
       a = C(e, s);
      a !== e &&
       (r(
        a,
        ((n = {}),
        (n[this.opts.rowClasses] = !0),
        (n['fv-plugins-icon-container'] = !0),
        n),
       ),
       this.containers.set(e, a));
     }),
     (o.prototype.onElementValidating = function (t) {
      this.removeClasses(t.element, t.elements);
     }),
     (o.prototype.onElementNotValidated = function (t) {
      this.removeClasses(t.element, t.elements);
     }),
     (o.prototype.onElementIgnored = function (t) {
      this.removeClasses(t.element, t.elements);
     }),
     (o.prototype.removeClasses = function (t, e) {
      var n,
       s = this,
       a = t.getAttribute('type'),
       d = a === 'radio' || a === 'checkbox' ? e[0] : t;
      e.forEach(function (u) {
       var c;
       r(
        u,
        ((c = {}),
        (c[s.opts.eleValidClass] = !1),
        (c[s.opts.eleInvalidClass] = !1),
        c),
       );
      });
      var p = this.containers.get(d);
      p &&
       r(
        p,
        ((n = {}),
        (n[this.opts.rowInvalidClass] = !1),
        (n[this.opts.rowValidatingClass] = !1),
        (n[this.opts.rowValidClass] = !1),
        n),
       );
     }),
     (o.prototype.onElementValidated = function (t) {
      var e,
       n,
       s = this,
       a = t.elements,
       d = t.element.getAttribute('type'),
       p = d === 'radio' || d === 'checkbox' ? a[0] : t.element;
      a.forEach(function (g) {
       var h;
       r(
        g,
        ((h = {}),
        (h[s.opts.eleValidClass] = t.valid),
        (h[s.opts.eleInvalidClass] = !t.valid),
        h),
       );
      });
      var u = this.containers.get(p);
      if (u)
       if (!t.valid)
        this.results.set(p, !1),
         r(
          u,
          ((e = {}),
          (e[this.opts.rowInvalidClass] = !0),
          (e[this.opts.rowValidatingClass] = !1),
          (e[this.opts.rowValidClass] = !1),
          e),
         );
       else {
        this.results.delete(p);
        var c = !0;
        this.containers.forEach(function (g, h) {
         g === u && s.results.get(h) === !1 && (c = !1);
        }),
         c &&
          r(
           u,
           ((n = {}),
           (n[this.opts.rowInvalidClass] = !1),
           (n[this.opts.rowValidatingClass] = !1),
           (n[this.opts.rowValidClass] = !0),
           n),
          );
       }
     }),
     (o.MESSAGE_PLUGIN = '___frameworkMessage'),
     o
    );
   })(i.Plugin);
  return w;
 });
});
export default y();
