var v = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var g = v((p, a) => {
 (function (n, e) {
  typeof p == 'object' && typeof a < 'u'
   ? (a.exports = e(
      require('@form-validation/core'),
      require('@form-validation/plugin-field-status'),
     ))
   : typeof define == 'function' && define.amd
     ? define(
        ['@form-validation/core', '@form-validation/plugin-field-status'],
        e,
       )
     : ((n = typeof globalThis < 'u' ? globalThis : n || self),
       (n.FormValidation = n.FormValidation || {}),
       (n.FormValidation.plugins = n.FormValidation.plugins || {}),
       (n.FormValidation.plugins.AutoFocus = e(
        n.FormValidation,
        n.FormValidation.plugins,
       )));
 })(void 0, function (n, e) {
  var s = function (r, t) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (o, i) {
       o.__proto__ = i;
      }) ||
     function (o, i) {
      for (var u in i)
       Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
     }),
    s(r, t)
   );
  };
  function _(r, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(r, t);
   function o() {
    this.constructor = r;
   }
   r.prototype =
    t === null ? Object.create(t) : ((o.prototype = t.prototype), new o());
  }
  var F = (function (r) {
   _(t, r);
   function t(o) {
    var i = r.call(this, o) || this;
    return (
     (i.opts = Object.assign({}, { onPrefocus: function () {} }, o)),
     (i.invalidFormHandler = i.onFormInvalid.bind(i)),
     i
    );
   }
   return (
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
      var o = this.core.getPlugin(t.FIELD_STATUS_PLUGIN),
       i = o.getStatuses(),
       u = Object.keys(this.core.getFields()).filter(function (h) {
        return i.get(h) === 'Invalid';
       });
      if (u.length > 0) {
       var c = u[0],
        l = this.core.getElements(c);
       if (l.length > 0) {
        var f = l[0],
         d = { firstElement: f, field: c };
        this.core.emit('plugins.autofocus.prefocus', d),
         this.opts.onPrefocus(d),
         f.focus();
       }
      }
     }
    }),
    (t.FIELD_STATUS_PLUGIN = '___autoFocusFieldStatus'),
    t
   );
  })(n.Plugin);
  return F;
 });
});
export default g();
