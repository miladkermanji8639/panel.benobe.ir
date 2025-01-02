var H = (o, a) => () => (a || o((a = { exports: {} }).exports, a), a.exports);
var N = H((b, f) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-mandatory-icon
  * @version 2.4.0
  */ (function (o, a) {
  typeof b == 'object' && typeof f < 'u'
   ? (f.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.MandatoryIcon = a(o.FormValidation)));
 })(void 0, function (o) {
  var a = function (c, i) {
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
     a(c, i)
    );
   },
   d = o.utils.classSet;
  return (function (c) {
   function i(t) {
    var e = c.call(this, t) || this;
    return (
     (e.removedIcons = {
      Invalid: '',
      NotValidated: '',
      Valid: '',
      Validating: '',
     }),
     (e.icons = new Map()),
     (e.elementValidatingHandler = e.onElementValidating.bind(e)),
     (e.elementValidatedHandler = e.onElementValidated.bind(e)),
     (e.elementNotValidatedHandler = e.onElementNotValidated.bind(e)),
     (e.iconPlacedHandler = e.onIconPlaced.bind(e)),
     (e.iconSetHandler = e.onIconSet.bind(e)),
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
    })(i, c),
    (i.prototype.install = function () {
     this.core
      .on('core.element.validating', this.elementValidatingHandler)
      .on('core.element.validated', this.elementValidatedHandler)
      .on('core.element.notvalidated', this.elementNotValidatedHandler)
      .on('plugins.icon.placed', this.iconPlacedHandler)
      .on('plugins.icon.set', this.iconSetHandler);
    }),
    (i.prototype.uninstall = function () {
     this.icons.clear(),
      this.core
       .off('core.element.validating', this.elementValidatingHandler)
       .off('core.element.validated', this.elementValidatedHandler)
       .off('core.element.notvalidated', this.elementNotValidatedHandler)
       .off('plugins.icon.placed', this.iconPlacedHandler)
       .off('plugins.icon.set', this.iconSetHandler);
    }),
    (i.prototype.onEnabled = function () {
     var t = this;
     this.icons.forEach(function (e, n, s) {
      var l;
      d(n, (((l = {})[t.opts.icon] = !0), l));
     });
    }),
    (i.prototype.onDisabled = function () {
     var t = this;
     this.icons.forEach(function (e, n, s) {
      var l;
      d(n, (((l = {})[t.opts.icon] = !1), l));
     });
    }),
    (i.prototype.onIconPlaced = function (t) {
     var e,
      n = this,
      s = this.core.getFields()[t.field].validators,
      l = this.core.getElements(t.field);
     if (s && s.notEmpty && s.notEmpty.enabled !== !1 && l.length) {
      this.icons.set(t.element, t.iconElement);
      for (
       var h = l[0].getAttribute('type'),
        u = h ? h.toLowerCase() : '',
        r = 0,
        m = u === 'checkbox' || u === 'radio' ? [l[0]] : l;
       r < m.length;
       r++
      ) {
       var C = m[r];
       this.core.getElementValue(t.field, C) === '' &&
        d(t.iconElement, (((e = {})[this.opts.icon] = this.isEnabled), e));
      }
     }
     this.iconClasses = t.classes;
     var I = this.opts.icon.split(' '),
      v = {
       Invalid: this.iconClasses.invalid
        ? this.iconClasses.invalid.split(' ')
        : [],
       Valid: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
       Validating: this.iconClasses.validating
        ? this.iconClasses.validating.split(' ')
        : [],
      };
     Object.keys(v).forEach(function (g) {
      for (var V = [], p = 0, y = I; p < y.length; p++) {
       var E = y[p];
       v[g].indexOf(E) === -1 && V.push(E);
      }
      n.removedIcons[g] = V.join(' ');
     });
    }),
    (i.prototype.onElementValidating = function (t) {
     this.updateIconClasses(t.element, 'Validating');
    }),
    (i.prototype.onElementValidated = function (t) {
     this.updateIconClasses(t.element, t.valid ? 'Valid' : 'Invalid');
    }),
    (i.prototype.onElementNotValidated = function (t) {
     this.updateIconClasses(t.element, 'NotValidated');
    }),
    (i.prototype.updateIconClasses = function (t, e) {
     var n,
      s = this.icons.get(t);
     s &&
      this.iconClasses &&
      (this.iconClasses.valid ||
       this.iconClasses.invalid ||
       this.iconClasses.validating) &&
      d(
       s,
       (((n = {})[this.removedIcons[e]] = !1), (n[this.opts.icon] = !1), n),
      );
    }),
    (i.prototype.onIconSet = function (t) {
     var e,
      n = this.icons.get(t.element);
     n &&
      ((t.status === 'NotValidated' &&
       this.core.getElementValue(t.field, t.element) === '') ||
       t.status === 'Ignored') &&
      d(n, (((e = {})[this.opts.icon] = this.isEnabled), e));
    }),
    i
   );
  })(o.Plugin);
 });
});
export default N();
