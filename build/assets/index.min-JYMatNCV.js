var g = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var F = g((d, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-auto-focus
  * @version 2.4.0
  */ (function (i, e) {
  typeof d == 'object' && typeof s < 'u'
   ? (s.exports = e(
      require('@form-validation/core'),
      require('@form-validation/plugin-field-status'),
     ))
   : typeof define == 'function' && define.amd
     ? define(
        ['@form-validation/core', '@form-validation/plugin-field-status'],
        e,
       )
     : (((i = typeof globalThis < 'u' ? globalThis : i || self).FormValidation =
        i.FormValidation || {}),
       (i.FormValidation.plugins = i.FormValidation.plugins || {}),
       (i.FormValidation.plugins.AutoFocus = e(
        i.FormValidation,
        i.FormValidation.plugins,
       )));
 })(void 0, function (i, e) {
  var a = function (l, t) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, n) {
       o.__proto__ = n;
      }) ||
     function (o, n) {
      for (var r in n)
       Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
     }),
    a(l, t)
   );
  };
  return (function (l) {
   function t(o) {
    var n = l.call(this, o) || this;
    return (
     (n.opts = Object.assign({}, { onPrefocus: function () {} }, o)),
     (n.invalidFormHandler = n.onFormInvalid.bind(n)),
     n
    );
   }
   return (
    (function (o, n) {
     if (typeof n != 'function' && n !== null)
      throw new TypeError(
       'Class extends value ' + String(n) + ' is not a constructor or null',
      );
     function r() {
      this.constructor = o;
     }
     a(o, n),
      (o.prototype =
       n === null ? Object.create(n) : ((r.prototype = n.prototype), new r()));
    })(t, l),
    (t.prototype.install = function () {
     this.core
      .on('core.form.invalid', this.invalidFormHandler)
      .registerPlugin(t.FIELD_STATUS_PLUGIN, new e.FieldStatus());
    }),
    (t.prototype.uninstall = function () {
     this.core
      .off('core.form.invalid', this.invalidFormHandler)
      .deregisterPlugin(t.FIELD_STATUS_PLUGIN);
    }),
    (t.prototype.onEnabled = function () {
     this.core.enablePlugin(t.FIELD_STATUS_PLUGIN);
    }),
    (t.prototype.onDisabled = function () {
     this.core.disablePlugin(t.FIELD_STATUS_PLUGIN);
    }),
    (t.prototype.onFormInvalid = function () {
     if (this.isEnabled) {
      var o = this.core.getPlugin(t.FIELD_STATUS_PLUGIN).getStatuses(),
       n = Object.keys(this.core.getFields()).filter(function (p) {
        return o.get(p) === 'Invalid';
       });
      if (n.length > 0) {
       var r = n[0],
        u = this.core.getElements(r);
       if (u.length > 0) {
        var f = u[0],
         c = { firstElement: f, field: r };
        this.core.emit('plugins.autofocus.prefocus', c),
         this.opts.onPrefocus(c),
         f.focus();
       }
      }
     }
    }),
    (t.FIELD_STATUS_PLUGIN = '___autoFocusFieldStatus'),
    t
   );
  })(i.Plugin);
 });
});
export default F();
