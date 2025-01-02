var V = (a, r) => () => (r || a((r = { exports: {} }).exports, r), r.exports);
var y = V((w, v) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-framework
  * @version 2.4.0
  */ (function (a, r) {
  typeof w == 'object' && typeof v < 'u'
   ? (v.exports = r(
      require('@form-validation/core'),
      require('@form-validation/plugin-message'),
     ))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core', '@form-validation/plugin-message'], r)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.Framework = r(
        a.FormValidation,
        a.FormValidation.plugins,
       )));
 })(void 0, function (a, r) {
  var u = function (m, n) {
    return (
     (u =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, e) {
        t.__proto__ = e;
       }) ||
      function (t, e) {
       for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }),
     u(m, n)
    );
   },
   l = a.utils.classSet,
   C = a.utils.closest;
  return (function (m) {
   function n(t) {
    var e = m.call(this, t) || this;
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
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function o() {
      this.constructor = t;
     }
     u(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((o.prototype = e.prototype), new o()));
    })(n, m),
    (n.prototype.install = function () {
     var t,
      e = this;
     l(
      this.core.getFormElement(),
      (((t = {})[this.opts.formClass] = !0),
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
        n.MESSAGE_PLUGIN,
        new r.Message({
         clazz: this.opts.messageClass,
         container: function (o, i) {
          var s =
            typeof e.opts.rowSelector == 'string'
             ? e.opts.rowSelector
             : e.opts.rowSelector(o, i),
           d = C(i, s);
          return r.Message.getClosestContainer(i, d, e.opts.rowPattern);
         },
        }),
       ),
       this.core.on('plugins.message.placed', this.messagePlacedHandler));
    }),
    (n.prototype.uninstall = function () {
     var t;
     this.results.clear(),
      this.containers.clear(),
      l(
       this.core.getFormElement(),
       (((t = {})[this.opts.formClass] = !1),
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
       (this.core.deregisterPlugin(n.MESSAGE_PLUGIN),
       this.core.off('plugins.message.placed', this.messagePlacedHandler));
    }),
    (n.prototype.onEnabled = function () {
     var t;
     l(this.core.getFormElement(), (((t = {})[this.opts.formClass] = !0), t)),
      this.opts.defaultMessageContainer &&
       this.core.enablePlugin(n.MESSAGE_PLUGIN);
    }),
    (n.prototype.onDisabled = function () {
     var t;
     l(this.core.getFormElement(), (((t = {})[this.opts.formClass] = !1), t)),
      this.opts.defaultMessageContainer &&
       this.core.disablePlugin(n.MESSAGE_PLUGIN);
    }),
    (n.prototype.onIconPlaced = function (t) {}),
    (n.prototype.onMessagePlaced = function (t) {}),
    (n.prototype.onFieldAdded = function (t) {
     var e = this,
      o = t.elements;
     o &&
      (o.forEach(function (i) {
       var s,
        d = e.containers.get(i);
       d &&
        (l(
         d,
         (((s = {})[e.opts.rowInvalidClass] = !1),
         (s[e.opts.rowValidatingClass] = !1),
         (s[e.opts.rowValidClass] = !1),
         (s['fv-plugins-icon-container'] = !1),
         s),
        ),
        e.containers.delete(i));
      }),
      this.prepareFieldContainer(t.field, o));
    }),
    (n.prototype.onFieldRemoved = function (t) {
     var e = this;
     t.elements.forEach(function (o) {
      var i,
       s = e.containers.get(o);
      s &&
       l(
        s,
        (((i = {})[e.opts.rowInvalidClass] = !1),
        (i[e.opts.rowValidatingClass] = !1),
        (i[e.opts.rowValidClass] = !1),
        i),
       );
     });
    }),
    (n.prototype.prepareFieldContainer = function (t, e) {
     var o = this;
     if (e.length) {
      var i = e[0].getAttribute('type');
      i === 'radio' || i === 'checkbox'
       ? this.prepareElementContainer(t, e[0])
       : e.forEach(function (s) {
          return o.prepareElementContainer(t, s);
         });
     }
    }),
    (n.prototype.prepareElementContainer = function (t, e) {
     var o,
      i =
       typeof this.opts.rowSelector == 'string'
        ? this.opts.rowSelector
        : this.opts.rowSelector(t, e),
      s = C(e, i);
     s !== e &&
      (l(
       s,
       (((o = {})[this.opts.rowClasses] = !0),
       (o['fv-plugins-icon-container'] = !0),
       o),
      ),
      this.containers.set(e, s));
    }),
    (n.prototype.onElementValidating = function (t) {
     this.removeClasses(t.element, t.elements);
    }),
    (n.prototype.onElementNotValidated = function (t) {
     this.removeClasses(t.element, t.elements);
    }),
    (n.prototype.onElementIgnored = function (t) {
     this.removeClasses(t.element, t.elements);
    }),
    (n.prototype.removeClasses = function (t, e) {
     var o,
      i = this,
      s = t.getAttribute('type'),
      d = s === 'radio' || s === 'checkbox' ? e[0] : t;
     e.forEach(function (p) {
      var f;
      l(
       p,
       (((f = {})[i.opts.eleValidClass] = !1),
       (f[i.opts.eleInvalidClass] = !1),
       f),
      );
     });
     var c = this.containers.get(d);
     c &&
      l(
       c,
       (((o = {})[this.opts.rowInvalidClass] = !1),
       (o[this.opts.rowValidatingClass] = !1),
       (o[this.opts.rowValidClass] = !1),
       o),
      );
    }),
    (n.prototype.onElementValidated = function (t) {
     var e,
      o,
      i = this,
      s = t.elements,
      d = t.element.getAttribute('type'),
      c = d === 'radio' || d === 'checkbox' ? s[0] : t.element;
     s.forEach(function (g) {
      var h;
      l(
       g,
       (((h = {})[i.opts.eleValidClass] = t.valid),
       (h[i.opts.eleInvalidClass] = !t.valid),
       h),
      );
     });
     var p = this.containers.get(c);
     if (p)
      if (t.valid) {
       this.results.delete(c);
       var f = !0;
       this.containers.forEach(function (g, h) {
        g === p && i.results.get(h) === !1 && (f = !1);
       }),
        f &&
         l(
          p,
          (((o = {})[this.opts.rowInvalidClass] = !1),
          (o[this.opts.rowValidatingClass] = !1),
          (o[this.opts.rowValidClass] = !0),
          o),
         );
      } else
       this.results.set(c, !1),
        l(
         p,
         (((e = {})[this.opts.rowInvalidClass] = !0),
         (e[this.opts.rowValidatingClass] = !1),
         (e[this.opts.rowValidClass] = !1),
         e),
        );
    }),
    (n.MESSAGE_PLUGIN = '___frameworkMessage'),
    n
   );
  })(a.Plugin);
 });
});
export default y();
