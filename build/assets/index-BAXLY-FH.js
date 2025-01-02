var m = (l, a) => () => (a || l((a = { exports: {} }).exports, a), a.exports);
var g = m((u, c) => {
 (function (l, a) {
  typeof u == 'object' && typeof c < 'u'
   ? (c.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((l = typeof globalThis < 'u' ? globalThis : l || self),
       (l.FormValidation = l.FormValidation || {}),
       (l.FormValidation.plugins = l.FormValidation.plugins || {}),
       (l.FormValidation.plugins.Icon = a(l.FormValidation)));
 })(void 0, function (l) {
  var a = function (s, i) {
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
    a(s, i)
   );
  };
  function v(s, i) {
   if (typeof i != 'function' && i !== null)
    throw new TypeError(
     'Class extends value ' + String(i) + ' is not a constructor or null',
    );
   a(s, i);
   function t() {
    this.constructor = s;
   }
   s.prototype =
    i === null ? Object.create(i) : ((t.prototype = i.prototype), new t());
  }
  var r = l.utils.classSet,
   h = (function (s) {
    v(i, s);
    function i(t) {
     var e = s.call(this, t) || this;
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
     (i.prototype.install = function () {
      this.core
       .on('core.element.validating', this.elementValidatingHandler)
       .on('core.element.validated', this.elementValidatedHandler)
       .on('core.element.notvalidated', this.elementNotValidatedHandler)
       .on('core.element.ignored', this.elementIgnoredHandler)
       .on('core.field.added', this.fieldAddedHandler);
     }),
     (i.prototype.uninstall = function () {
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
     (i.prototype.onEnabled = function () {
      this.icons.forEach(function (t, e, n) {
       r(e, {
        'fv-plugins-icon--enabled': !0,
        'fv-plugins-icon--disabled': !1,
       });
      });
     }),
     (i.prototype.onDisabled = function () {
      this.icons.forEach(function (t, e, n) {
       r(e, {
        'fv-plugins-icon--enabled': !1,
        'fv-plugins-icon--disabled': !0,
       });
      });
     }),
     (i.prototype.onFieldAdded = function (t) {
      var e = this,
       n = t.elements;
      n &&
       (n.forEach(function (o) {
        var d = e.icons.get(o);
        d && (d.parentNode.removeChild(d), e.icons.delete(o));
       }),
       this.prepareFieldIcon(t.field, n));
     }),
     (i.prototype.prepareFieldIcon = function (t, e) {
      var n = this;
      if (e.length) {
       var o = e[0].getAttribute('type');
       o === 'radio' || o === 'checkbox'
        ? this.prepareElementIcon(t, e[0])
        : e.forEach(function (d) {
           return n.prepareElementIcon(t, d);
          });
      }
     }),
     (i.prototype.prepareElementIcon = function (t, e) {
      var n = document.createElement('i');
      n.setAttribute('data-field', t),
       e.parentNode.insertBefore(n, e.nextSibling),
       r(n, {
        'fv-plugins-icon': !0,
        'fv-plugins-icon--enabled': this.isEnabled,
        'fv-plugins-icon--disabled': !this.isEnabled,
       });
      var o = {
       classes: {
        invalid: this.opts.invalid,
        valid: this.opts.valid,
        validating: this.opts.validating,
       },
       element: e,
       field: t,
       iconElement: n,
      };
      this.core.emit('plugins.icon.placed', o),
       this.opts.onPlaced(o),
       this.icons.set(e, n);
     }),
     (i.prototype.onElementValidating = function (t) {
      var e,
       n = this.setClasses(
        t.field,
        t.element,
        t.elements,
        ((e = {}),
        (e[this.opts.invalid] = !1),
        (e[this.opts.valid] = !1),
        (e[this.opts.validating] = !0),
        e),
       ),
       o = {
        element: t.element,
        field: t.field,
        iconElement: n,
        status: 'Validating',
       };
      this.core.emit('plugins.icon.set', o), this.opts.onSet(o);
     }),
     (i.prototype.onElementValidated = function (t) {
      var e,
       n = this.setClasses(
        t.field,
        t.element,
        t.elements,
        ((e = {}),
        (e[this.opts.invalid] = !t.valid),
        (e[this.opts.valid] = t.valid),
        (e[this.opts.validating] = !1),
        e),
       ),
       o = {
        element: t.element,
        field: t.field,
        iconElement: n,
        status: t.valid ? 'Valid' : 'Invalid',
       };
      this.core.emit('plugins.icon.set', o), this.opts.onSet(o);
     }),
     (i.prototype.onElementNotValidated = function (t) {
      var e,
       n = this.setClasses(
        t.field,
        t.element,
        t.elements,
        ((e = {}),
        (e[this.opts.invalid] = !1),
        (e[this.opts.valid] = !1),
        (e[this.opts.validating] = !1),
        e),
       ),
       o = {
        element: t.element,
        field: t.field,
        iconElement: n,
        status: 'NotValidated',
       };
      this.core.emit('plugins.icon.set', o), this.opts.onSet(o);
     }),
     (i.prototype.onElementIgnored = function (t) {
      var e,
       n = this.setClasses(
        t.field,
        t.element,
        t.elements,
        ((e = {}),
        (e[this.opts.invalid] = !1),
        (e[this.opts.valid] = !1),
        (e[this.opts.validating] = !1),
        e),
       ),
       o = {
        element: t.element,
        field: t.field,
        iconElement: n,
        status: 'Ignored',
       };
      this.core.emit('plugins.icon.set', o), this.opts.onSet(o);
     }),
     (i.prototype.setClasses = function (t, e, n, o) {
      var d = e.getAttribute('type'),
       f = d === 'radio' || d === 'checkbox' ? n[0] : e;
      if (this.icons.has(f)) {
       var p = this.icons.get(f);
       return r(p, o), p;
      } else return null;
     }),
     i
    );
   })(l.Plugin);
  return h;
 });
});
export default g();
