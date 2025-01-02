var m = (i, o) => () => (o || i((o = { exports: {} }).exports, o), o.exports);
var y = m((p, c) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-trigger
  * @version 2.4.0
  */ (function (i, o) {
  typeof p == 'object' && typeof c < 'u'
   ? (c.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.Trigger = o(i.FormValidation)));
 })(void 0, function (i) {
  var o = function (a, r) {
   return (
    (o =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var n in e)
       Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     }),
    o(a, r)
   );
  };
  return (function (a) {
   function r(t) {
    var e = a.call(this, t) || this;
    (e.handlers = []), (e.timers = new Map());
    var n = document.createElement('div');
    return (
     (e.defaultEvent = 'oninput' in n ? 'input' : 'keyup'),
     (e.opts = Object.assign(
      {},
      { delay: 0, event: e.defaultEvent, threshold: 0 },
      t,
     )),
     (e.fieldAddedHandler = e.onFieldAdded.bind(e)),
     (e.fieldRemovedHandler = e.onFieldRemoved.bind(e)),
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
     o(t, e),
      (t.prototype =
       e === null ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    })(r, a),
    (r.prototype.install = function () {
     this.core
      .on('core.field.added', this.fieldAddedHandler)
      .on('core.field.removed', this.fieldRemovedHandler);
    }),
    (r.prototype.uninstall = function () {
     this.handlers.forEach(function (t) {
      return t.element.removeEventListener(t.event, t.handler);
     }),
      (this.handlers = []),
      this.timers.forEach(function (t) {
       return window.clearTimeout(t);
      }),
      this.timers.clear(),
      this.core
       .off('core.field.added', this.fieldAddedHandler)
       .off('core.field.removed', this.fieldRemovedHandler);
    }),
    (r.prototype.prepareHandler = function (t, e) {
     var n = this;
     e.forEach(function (d) {
      var l = [];
      if (n.opts.event && n.opts.event[t] === !1) l = [];
      else if (
       n.opts.event &&
       n.opts.event[t] &&
       typeof n.opts.event[t] != 'function'
      )
       l = n.opts.event[t].split(' ');
      else if (
       typeof n.opts.event == 'string' &&
       n.opts.event !== n.defaultEvent
      )
       l = n.opts.event.split(' ');
      else {
       var s = d.getAttribute('type'),
        f = d.tagName.toLowerCase();
       l = [
        s === 'radio' || s === 'checkbox' || s === 'file' || f === 'select'
         ? 'change'
         : n.ieVersion >= 10 && d.getAttribute('placeholder')
           ? 'keyup'
           : n.defaultEvent,
       ];
      }
      l.forEach(function (u) {
       var h = function (v) {
        return n.handleEvent(v, t, d);
       };
       n.handlers.push({ element: d, event: u, field: t, handler: h }),
        d.addEventListener(u, h);
      });
     });
    }),
    (r.prototype.handleEvent = function (t, e, n) {
     var d = this;
     if (
      this.isEnabled &&
      this.exceedThreshold(e, n) &&
      this.core.executeFilter('plugins-trigger-should-validate', !0, [e, n])
     ) {
      var l = function () {
        return d.core.validateElement(e, n).then(function (u) {
         d.core.emit('plugins.trigger.executed', {
          element: n,
          event: t,
          field: e,
         });
        });
       },
       s = this.opts.delay[e] || this.opts.delay;
      if (s === 0) l();
      else {
       var f = this.timers.get(n);
       f && window.clearTimeout(f),
        this.timers.set(n, window.setTimeout(l, 1e3 * s));
      }
     }
    }),
    (r.prototype.onFieldAdded = function (t) {
     this.handlers
      .filter(function (e) {
       return e.field === t.field;
      })
      .forEach(function (e) {
       return e.element.removeEventListener(e.event, e.handler);
      }),
      this.prepareHandler(t.field, t.elements);
    }),
    (r.prototype.onFieldRemoved = function (t) {
     this.handlers
      .filter(function (e) {
       return e.field === t.field && t.elements.indexOf(e.element) >= 0;
      })
      .forEach(function (e) {
       return e.element.removeEventListener(e.event, e.handler);
      });
    }),
    (r.prototype.exceedThreshold = function (t, e) {
     var n =
      this.opts.threshold[t] !== 0 &&
      this.opts.threshold !== 0 &&
      (this.opts.threshold[t] || this.opts.threshold);
     if (!n) return !0;
     var d = e.getAttribute('type');
     return (
      [
       'button',
       'checkbox',
       'file',
       'hidden',
       'image',
       'radio',
       'reset',
       'submit',
      ].indexOf(d) !== -1 || this.core.getElementValue(t, e).length >= n
     );
    }),
    r
   );
  })(i.Plugin);
 });
});
export default y();
