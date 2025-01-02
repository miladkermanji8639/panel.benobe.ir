var I = (r, a) => () => (a || r((a = { exports: {} }).exports, a), a.exports);
var m = I((p, c) => {
 (function (r, a) {
  typeof p == 'object' && typeof c < 'u'
   ? (c.exports = a(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], a)
     : ((r = typeof globalThis < 'u' ? globalThis : r || self),
       (r.FormValidation = r.FormValidation || {}),
       (r.FormValidation.plugins = r.FormValidation.plugins || {}),
       (r.FormValidation.plugins.InternationalTelephoneInput = a(
        r.FormValidation,
       )));
 })(void 0, function (r) {
  var a = function (l, n) {
   return (
    (a =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (t, e) {
       t.__proto__ = e;
      }) ||
     function (t, e) {
      for (var i in e)
       Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
     }),
    a(l, n)
   );
  };
  function f(l, n) {
   if (typeof n != 'function' && n !== null)
    throw new TypeError(
     'Class extends value ' + String(n) + ' is not a constructor or null',
    );
   a(l, n);
   function t() {
    this.constructor = l;
   }
   l.prototype =
    n === null ? Object.create(n) : ((t.prototype = n.prototype), new t());
  }
  var v = (function (l) {
   f(n, l);
   function n(t) {
    var e = l.call(this, t) || this;
    return (
     (e.intlTelInstances = new Map()),
     (e.countryChangeHandler = new Map()),
     (e.fieldElements = new Map()),
     (e.hiddenFieldElements = new Map()),
     (e.opts = Object.assign(
      {},
      { autoPlaceholder: 'polite', utilsScript: '' },
      t,
     )),
     (e.validatePhoneNumber = e.checkPhoneNumber.bind(e)),
     (e.fields =
      typeof e.opts.field == 'string' ? e.opts.field.split(',') : e.opts.field),
     (e.hiddenFieldInputs = e.opts.hiddenPhoneInput
      ? typeof e.opts.hiddenPhoneInput == 'string'
        ? e.opts.hiddenPhoneInput.split(',')
        : e.opts.hiddenPhoneInput
      : []),
     (e.onValidatorValidatedHandler = e.onValidatorValidated.bind(e)),
     e
    );
   }
   return (
    (n.prototype.install = function () {
     var t = this;
     this.core.registerValidator(n.INT_TEL_VALIDATOR, this.validatePhoneNumber);
     var e = this.hiddenFieldInputs.length;
     this.fields.forEach(function (i, o) {
      var d;
      t.core.addField(i, {
       validators:
        ((d = {}), (d[n.INT_TEL_VALIDATOR] = { message: t.opts.message }), d),
      });
      var u = t.core.getElements(i)[0],
       h = function () {
        return t.core.revalidateField(i);
       };
      if (
       (u.addEventListener('countrychange', h),
       t.countryChangeHandler.set(i, h),
       t.fieldElements.set(i, u),
       t.intlTelInstances.set(i, intlTelInput(u, t.opts)),
       o < e && t.hiddenFieldInputs[o])
      ) {
       var s = document.createElement('input');
       s.setAttribute('type', 'hidden'),
        s.setAttribute('name', t.hiddenFieldInputs[o]),
        t.core.getFormElement().appendChild(s),
        t.hiddenFieldElements.set(i, s);
      }
     }),
      e > 0 &&
       this.core.on(
        'core.validator.validated',
        this.onValidatorValidatedHandler,
       );
    }),
    (n.prototype.uninstall = function () {
     var t = this,
      e = this.hiddenFieldInputs.length;
     this.fields.forEach(function (i, o) {
      var d = t.countryChangeHandler.get(i),
       u = t.fieldElements.get(i),
       h = t.getIntTelInstance(i);
      if (
       (d &&
        u &&
        h &&
        (u.removeEventListener('countrychange', d),
        t.core.disableValidator(i, n.INT_TEL_VALIDATOR),
        h.destroy()),
       o < e && t.hiddenFieldInputs[o])
      ) {
       var s = t.hiddenFieldElements.get(i);
       s && t.core.getFormElement().removeChild(s);
      }
     }),
      e > 0 &&
       this.core.off(
        'core.validator.validated',
        this.onValidatorValidatedHandler,
       ),
      this.fieldElements.clear(),
      this.hiddenFieldElements.clear();
    }),
    (n.prototype.getIntTelInstance = function (t) {
     return this.intlTelInstances.get(t);
    }),
    (n.prototype.onEnabled = function () {
     var t = this;
     this.fields.forEach(function (e) {
      t.core.enableValidator(e, n.INT_TEL_VALIDATOR);
     });
    }),
    (n.prototype.onDisabled = function () {
     var t = this;
     this.fields.forEach(function (e) {
      t.core.disableValidator(e, n.INT_TEL_VALIDATOR);
      var i = t.hiddenFieldElements.get(e);
      i && (i.value = '');
     });
    }),
    (n.prototype.checkPhoneNumber = function () {
     var t = this;
     return {
      validate: function (e) {
       var i = e.value,
        o = t.getIntTelInstance(e.field);
       return i === '' || !o ? { valid: !0 } : { valid: o.isValidNumber() };
      },
     };
    }),
    (n.prototype.onValidatorValidated = function (t) {
     if (
      !(
       this.hiddenFieldInputs.length === 0 ||
       t.validator !== n.INT_TEL_VALIDATOR
      )
     ) {
      var e = t.field,
       i = this.hiddenFieldElements.get(e);
      if (i)
       if (this.isEnabled && t.result.valid) {
        var o = this.getIntTelInstance(e),
         d = o.getNumber();
        i.value = d;
       } else i.value = '';
     }
    }),
    (n.INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator'),
    n
   );
  })(r.Plugin);
  return v;
 });
});
export default m();
