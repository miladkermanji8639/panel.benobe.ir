var h = (l, a) => () => (a || l((a = { exports: {} }).exports, a), a.exports);
var m = h((u, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-icon
  * @version 2.4.0
  */ (function (l, a) {
  typeof u == 'object' && typeof c < 'u'
   ? (c.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((l = typeof globalThis < 'u' ? globalThis : l || self).FormValidation =
        l.FormValidation || {}),
       (l.FormValidation.plugins = l.FormValidation.plugins || {}),
       (l.FormValidation.plugins.Icon = a(l.FormValidation)));
 })(void 0, function (l) {
  var a = function (r, o) {
    return (
     (a =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (t, e) {
        t.__proto__ = e;
       }) ||
      function (t, e) {
       for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }),
     a(r, o)
    );
   },
   s = l.utils.classSet;
  return (function (r) {
   function o(t) {
    var e = r.call(this, t) || this;
    return (
     (e.icons = new Map()),
     (e.opts = Object.assign(
      {},
      {
       invalid: 'fv-plugins-icon--invalid',
       onPlaced: function () {},
       onSet: function () {},
       valid: 'fv-plugins-icon--valid',
       validating: 'fv-plugins-icon--validating',
      },
      t,
     )),
     (e.elementValidatingHandler = e.onElementValidating.bind(e)),
     (e.elementValidatedHandler = e.onElementValidated.bind(e)),
     (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
     (e.elementIgnoredHandler = e.onElementIgnored.bind(e)),
     (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
     e
    );
   }
   return (
    (function (t, e) {
     if (typeof e != 'function' && e !== null)
      throw new TypeError(
       'Class extends value ' + String(e) + ' is not a constructor or null',
      );
     function n() {
      this.constructor = t;
     }
     a(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    })(o, r),
    (o.prototype.install = function () {
     this.core
      .on('core.element.validating', this.elementValidatingHandler)
      .on('core.element.validated', this.elementValidatedHandler)
      .on('core.element.notvalidated', this.elementNotValidatedHandler)
      .on('core.element.ignored', this.elementIgnoredHandler)
      .on('core.field.added', this.fieldAddedHandler);
    }),
    (o.prototype.uninstall = function () {
     this.icons.forEach(function (t) {
      return t.parentNode.removeChild(t);
     }),
      this.icons.clear(),
      this.core
       .off('core.element.validating', this.elementValidatingHandler)
       .off('core.element.validated', this.elementValidatedHandler)
       .off('core.element.notvalidated', this.elementNotValidatedHandler)
       .off('core.element.ignored', this.elementIgnoredHandler)
       .off('core.field.added', this.fieldAddedHandler);
    }),
    (o.prototype.onEnabled = function () {
     this.icons.forEach(function (t, e, n) {
      s(e, { 'fv-plugins-icon--enabled': !0, 'fv-plugins-icon--disabled': !1 });
     });
    }),
    (o.prototype.onDisabled = function () {
     this.icons.forEach(function (t, e, n) {
      s(e, { 'fv-plugins-icon--enabled': !1, 'fv-plugins-icon--disabled': !0 });
     });
    }),
    (o.prototype.onFieldAdded = function (t) {
     var e = this,
      n = t.elements;
     n &&
      (n.forEach(function (i) {
       var d = e.icons.get(i);
       d && (d.parentNode.removeChild(d), e.icons.delete(i));
      }),
      this.prepareFieldIcon(t.field, n));
    }),
    (o.prototype.prepareFieldIcon = function (t, e) {
     var n = this;
     if (e.length) {
      var i = e[0].getAttribute('type');
      i === 'radio' || i === 'checkbox'
       ? this.prepareElementIcon(t, e[0])
       : e.forEach(function (d) {
          return n.prepareElementIcon(t, d);
         });
     }
    }),
    (o.prototype.prepareElementIcon = function (t, e) {
     var n = document.createElement('i');
     n.setAttribute('data-field', t),
      e.parentNode.insertBefore(n, e.nextSibling),
      s(n, {
       'fv-plugins-icon': !0,
       'fv-plugins-icon--enabled': this.isEnabled,
       'fv-plugins-icon--disabled': !this.isEnabled,
      });
     var i = {
      classes: {
       invalid: this.opts.invalid,
       valid: this.opts.valid,
       validating: this.opts.validating,
      },
      element: e,
      field: t,
      iconElement: n,
     };
     this.core.emit('plugins.icon.placed', i),
      this.opts.onPlaced(i),
      this.icons.set(e, n);
    }),
    (o.prototype.onElementValidating = function (t) {
     var e,
      n = this.setClasses(
       t.field,
       t.element,
       t.elements,
       (((e = {})[this.opts.invalid] = !1),
       (e[this.opts.valid] = !1),
       (e[this.opts.validating] = !0),
       e),
      ),
      i = {
       element: t.element,
       field: t.field,
       iconElement: n,
       status: 'Validating',
      };
     this.core.emit('plugins.icon.set', i), this.opts.onSet(i);
    }),
    (o.prototype.onElementValidated = function (t) {
     var e,
      n = this.setClasses(
       t.field,
       t.element,
       t.elements,
       (((e = {})[this.opts.invalid] = !t.valid),
       (e[this.opts.valid] = t.valid),
       (e[this.opts.validating] = !1),
       e),
      ),
      i = {
       element: t.element,
       field: t.field,
       iconElement: n,
       status: t.valid ? 'Valid' : 'Invalid',
      };
     this.core.emit('plugins.icon.set', i), this.opts.onSet(i);
    }),
    (o.prototype.onElementNotValidated = function (t) {
     var e,
      n = this.setClasses(
       t.field,
       t.element,
       t.elements,
       (((e = {})[this.opts.invalid] = !1),
       (e[this.opts.valid] = !1),
       (e[this.opts.validating] = !1),
       e),
      ),
      i = {
       element: t.element,
       field: t.field,
       iconElement: n,
       status: 'NotValidated',
      };
     this.core.emit('plugins.icon.set', i), this.opts.onSet(i);
    }),
    (o.prototype.onElementIgnored = function (t) {
     var e,
      n = this.setClasses(
       t.field,
       t.element,
       t.elements,
       (((e = {})[this.opts.invalid] = !1),
       (e[this.opts.valid] = !1),
       (e[this.opts.validating] = !1),
       e),
      ),
      i = {
       element: t.element,
       field: t.field,
       iconElement: n,
       status: 'Ignored',
      };
     this.core.emit('plugins.icon.set', i), this.opts.onSet(i);
    }),
    (o.prototype.setClasses = function (t, e, n, i) {
     var d = e.getAttribute('type'),
      p = d === 'radio' || d === 'checkbox' ? n[0] : e;
     if (this.icons.has(p)) {
      var f = this.icons.get(p);
      return s(f, i), f;
     }
     return null;
    }),
    o
   );
  })(l.Plugin);
 });
});
export default m();
