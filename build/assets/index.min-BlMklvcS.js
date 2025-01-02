var m = (n, o) => () => (o || n((o = { exports: {} }).exports, o), o.exports);
var g = m((f, h) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-tooltip
  * @version 2.4.0
  */ (function (n, o) {
  typeof f == 'object' && typeof h < 'u'
   ? (h.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.Tooltip = o(n.FormValidation)));
 })(void 0, function (n) {
  var o = function (u, l) {
    return (
     (o =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (i, t) {
        i.__proto__ = t;
       }) ||
      function (i, t) {
       for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
      }),
     o(u, l)
    );
   },
   p = n.utils.classSet;
  return (function (u) {
   function l(i) {
    var t = u.call(this, i) || this;
    return (
     (t.messages = new Map()),
     (t.opts = Object.assign({}, { placement: 'top', trigger: 'click' }, i)),
     (t.iconPlacedHandler = t.onIconPlaced.bind(t)),
     (t.validatorValidatedHandler = t.onValidatorValidated.bind(t)),
     (t.elementValidatedHandler = t.onElementValidated.bind(t)),
     (t.documentClickHandler = t.onDocumentClicked.bind(t)),
     t
    );
   }
   return (
    (function (i, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function e() {
      this.constructor = i;
     }
     o(i, t),
      (i.prototype =
       t === null ? Object.create(t) : ((e.prototype = t.prototype), new e()));
    })(l, u),
    (l.prototype.install = function () {
     var i;
     (this.tip = document.createElement('div')),
      p(
       this.tip,
       (((i = { 'fv-plugins-tooltip': !0 })[
        'fv-plugins-tooltip--'.concat(this.opts.placement)
       ] = !0),
       i),
      ),
      document.body.appendChild(this.tip),
      this.core
       .on('plugins.icon.placed', this.iconPlacedHandler)
       .on('core.validator.validated', this.validatorValidatedHandler)
       .on('core.element.validated', this.elementValidatedHandler),
      this.opts.trigger === 'click' &&
       document.addEventListener('click', this.documentClickHandler);
    }),
    (l.prototype.uninstall = function () {
     this.messages.clear(),
      document.body.removeChild(this.tip),
      this.core
       .off('plugins.icon.placed', this.iconPlacedHandler)
       .off('core.validator.validated', this.validatorValidatedHandler)
       .off('core.element.validated', this.elementValidatedHandler),
      this.opts.trigger === 'click' &&
       document.removeEventListener('click', this.documentClickHandler);
    }),
    (l.prototype.onIconPlaced = function (i) {
     var t = this;
     p(i.iconElement, { 'fv-plugins-tooltip-icon': !0 }),
      this.opts.trigger === 'hover'
       ? (i.iconElement.addEventListener('mouseenter', function (e) {
          return t.show(i.element, e);
         }),
         i.iconElement.addEventListener('mouseleave', function (e) {
          return t.hide();
         }))
       : i.iconElement.addEventListener('click', function (e) {
          return t.show(i.element, e);
         });
    }),
    (l.prototype.onValidatorValidated = function (i) {
     if (!i.result.valid) {
      var t = i.elements,
       e = i.element.getAttribute('type'),
       r = e === 'radio' || e === 'checkbox' ? t[0] : i.element,
       c =
        typeof i.result.message == 'string'
         ? i.result.message
         : i.result.message[this.core.getLocale()];
      this.messages.set(r, c);
     }
    }),
    (l.prototype.onElementValidated = function (i) {
     if (i.valid) {
      var t = i.elements,
       e = i.element.getAttribute('type'),
       r = e === 'radio' || e === 'checkbox' ? t[0] : i.element;
      this.messages.delete(r);
     }
    }),
    (l.prototype.onDocumentClicked = function (i) {
     this.hide();
    }),
    (l.prototype.show = function (i, t) {
     if (
      this.isEnabled &&
      (t.preventDefault(), t.stopPropagation(), this.messages.has(i))
     ) {
      p(this.tip, { 'fv-plugins-tooltip--hide': !1 }),
       (this.tip.innerHTML = '<div class="fv-plugins-tooltip__content">'.concat(
        this.messages.get(i),
        '</div>',
       ));
      var e = t.target.getBoundingClientRect(),
       r = this.tip.getBoundingClientRect(),
       c = r.height,
       s = r.width,
       a = 0,
       d = 0;
      switch (this.opts.placement) {
       case 'bottom':
        (a = e.top + e.height), (d = e.left + e.width / 2 - s / 2);
        break;
       case 'bottom-left':
        (a = e.top + e.height), (d = e.left);
        break;
       case 'bottom-right':
        (a = e.top + e.height), (d = e.left + e.width - s);
        break;
       case 'left':
        (a = e.top + e.height / 2 - c / 2), (d = e.left - s);
        break;
       case 'right':
        (a = e.top + e.height / 2 - c / 2), (d = e.left + e.width);
        break;
       case 'top-left':
        (a = e.top - c), (d = e.left);
        break;
       case 'top-right':
        (a = e.top - c), (d = e.left + e.width - s);
        break;
       default:
        (a = e.top - c), (d = e.left + e.width / 2 - s / 2);
      }
      (a +=
       window.scrollY ||
       document.documentElement.scrollTop ||
       document.body.scrollTop ||
       0),
       (d +=
        window.scrollX ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0),
       this.tip.setAttribute(
        'style',
        'top: '.concat(a, 'px; left: ').concat(d, 'px'),
       );
     }
    }),
    (l.prototype.hide = function () {
     this.isEnabled && p(this.tip, { 'fv-plugins-tooltip--hide': !0 });
    }),
    l
   );
  })(n.Plugin);
 });
});
export default g();
