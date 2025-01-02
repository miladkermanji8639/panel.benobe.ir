var g = (s, l) => () => (l || s((l = { exports: {} }).exports, l), l.exports);
var h = g((p, u) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-message
  * @version 2.4.0
  */ (function (s, l) {
  typeof p == 'object' && typeof u < 'u'
   ? (u.exports = l(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], l)
     : (((s = typeof globalThis < 'u' ? globalThis : s || self).FormValidation =
        s.FormValidation || {}),
       (s.FormValidation.plugins = s.FormValidation.plugins || {}),
       (s.FormValidation.plugins.Message = l(s.FormValidation)));
 })(void 0, function (s) {
  var l = function (m, o) {
    return (
     (l =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
       function (e, t) {
        e.__proto__ = t;
       }) ||
      function (e, t) {
       for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      }),
     l(m, o)
    );
   },
   f = s.utils.classSet;
  return (function (m) {
   function o(e) {
    var t = m.call(this, e) || this;
    return (
     (t.useDefaultContainer = !1),
     (t.messages = new Map()),
     (t.defaultContainer = document.createElement('div')),
     (t.useDefaultContainer = !e || !e.container),
     (t.opts = Object.assign(
      {},
      {
       container: function (a, n) {
        return t.defaultContainer;
       },
      },
      e,
     )),
     (t.elementIgnoredHandler = t.onElementIgnored.bind(t)),
     (t.fieldAddedHandler = t.onFieldAdded.bind(t)),
     (t.fieldRemovedHandler = t.onFieldRemoved.bind(t)),
     (t.validatorValidatedHandler = t.onValidatorValidated.bind(t)),
     (t.validatorNotValidatedHandler = t.onValidatorNotValidated.bind(t)),
     t
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function a() {
      this.constructor = e;
     }
     l(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((a.prototype = t.prototype), new a()));
    })(o, m),
    (o.getClosestContainer = function (e, t, a) {
     for (
      var n = e;
      n && n !== t && ((n = n.parentElement), !a.test(n.className));

     );
     return n;
    }),
    (o.prototype.install = function () {
     this.useDefaultContainer &&
      this.core.getFormElement().appendChild(this.defaultContainer),
      this.core
       .on('core.element.ignored', this.elementIgnoredHandler)
       .on('core.field.added', this.fieldAddedHandler)
       .on('core.field.removed', this.fieldRemovedHandler)
       .on('core.validator.validated', this.validatorValidatedHandler)
       .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
    }),
    (o.prototype.uninstall = function () {
     this.useDefaultContainer &&
      this.core.getFormElement().removeChild(this.defaultContainer),
      this.messages.forEach(function (e) {
       return e.parentNode.removeChild(e);
      }),
      this.messages.clear(),
      this.core
       .off('core.element.ignored', this.elementIgnoredHandler)
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.field.removed', this.fieldRemovedHandler)
       .off('core.validator.validated', this.validatorValidatedHandler)
       .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
    }),
    (o.prototype.onEnabled = function () {
     this.messages.forEach(function (e, t, a) {
      f(t, {
       'fv-plugins-message-container--enabled': !0,
       'fv-plugins-message-container--disabled': !1,
      });
     });
    }),
    (o.prototype.onDisabled = function () {
     this.messages.forEach(function (e, t, a) {
      f(t, {
       'fv-plugins-message-container--enabled': !1,
       'fv-plugins-message-container--disabled': !0,
      });
     });
    }),
    (o.prototype.onFieldAdded = function (e) {
     var t = this,
      a = e.elements;
     a &&
      (a.forEach(function (n) {
       var i = t.messages.get(n);
       i && (i.parentNode.removeChild(i), t.messages.delete(n));
      }),
      this.prepareFieldContainer(e.field, a));
    }),
    (o.prototype.onFieldRemoved = function (e) {
     var t = this;
     if (e.elements.length && e.field) {
      var a = e.elements[0].getAttribute('type');
      (a === 'radio' || a === 'checkbox'
       ? [e.elements[0]]
       : e.elements
      ).forEach(function (n) {
       if (t.messages.has(n)) {
        var i = t.messages.get(n);
        i.parentNode.removeChild(i), t.messages.delete(n);
       }
      });
     }
    }),
    (o.prototype.prepareFieldContainer = function (e, t) {
     var a = this;
     if (t.length) {
      var n = t[0].getAttribute('type');
      n === 'radio' || n === 'checkbox'
       ? this.prepareElementContainer(e, t[0], t)
       : t.forEach(function (i) {
          return a.prepareElementContainer(e, i, t);
         });
     }
    }),
    (o.prototype.prepareElementContainer = function (e, t, a) {
     var n;
     if (typeof this.opts.container == 'string') {
      var i =
       this.opts.container.charAt(0) === '#'
        ? '[id="'.concat(this.opts.container.substring(1), '"]')
        : this.opts.container;
      n = this.core.getFormElement().querySelector(i);
     } else n = this.opts.container(e, t);
     var r = document.createElement('div');
     n.appendChild(r),
      f(r, {
       'fv-plugins-message-container': !0,
       'fv-plugins-message-container--enabled': this.isEnabled,
       'fv-plugins-message-container--disabled': !this.isEnabled,
      }),
      this.core.emit('plugins.message.placed', {
       element: t,
       elements: a,
       field: e,
       messageElement: r,
      }),
      this.messages.set(t, r);
    }),
    (o.prototype.getMessage = function (e) {
     return typeof e.message == 'string'
      ? e.message
      : e.message[this.core.getLocale()];
    }),
    (o.prototype.onValidatorValidated = function (e) {
     var t,
      a = e.elements,
      n = e.element.getAttribute('type'),
      i =
       (n === 'radio' || n === 'checkbox') && a.length > 0 ? a[0] : e.element;
     if (this.messages.has(i)) {
      var r = this.messages.get(i),
       d = r.querySelector(
        '[data-field="'
         .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
         .concat(e.validator.replace(/"/g, '\\"'), '"]'),
       );
      if (d || e.result.valid)
       d && !e.result.valid
        ? ((d.innerHTML = this.getMessage(e.result)),
          this.core.emit('plugins.message.displayed', {
           element: e.element,
           field: e.field,
           message: e.result.message,
           messageElement: d,
           meta: e.result.meta,
           validator: e.validator,
          }))
        : d && e.result.valid && r.removeChild(d);
      else {
       var c = document.createElement('div');
       (c.innerHTML = this.getMessage(e.result)),
        c.setAttribute('data-field', e.field),
        c.setAttribute('data-validator', e.validator),
        this.opts.clazz && f(c, (((t = {})[this.opts.clazz] = !0), t)),
        r.appendChild(c),
        this.core.emit('plugins.message.displayed', {
         element: e.element,
         field: e.field,
         message: e.result.message,
         messageElement: c,
         meta: e.result.meta,
         validator: e.validator,
        });
      }
     }
    }),
    (o.prototype.onValidatorNotValidated = function (e) {
     var t = e.elements,
      a = e.element.getAttribute('type'),
      n = a === 'radio' || a === 'checkbox' ? t[0] : e.element;
     if (this.messages.has(n)) {
      var i = this.messages.get(n),
       r = i.querySelector(
        '[data-field="'
         .concat(e.field.replace(/"/g, '\\"'), '"][data-validator="')
         .concat(e.validator.replace(/"/g, '\\"'), '"]'),
       );
      r && i.removeChild(r);
     }
    }),
    (o.prototype.onElementIgnored = function (e) {
     var t = e.elements,
      a = e.element.getAttribute('type'),
      n = a === 'radio' || a === 'checkbox' ? t[0] : e.element;
     if (this.messages.has(n)) {
      var i = this.messages.get(n);
      [].slice
       .call(
        i.querySelectorAll(
         '[data-field="'.concat(e.field.replace(/"/g, '\\"'), '"]'),
        ),
       )
       .forEach(function (r) {
        i.removeChild(r);
       });
     }
    }),
    o
   );
  })(s.Plugin);
 });
});
export default h();
