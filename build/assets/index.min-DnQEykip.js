var f = (a, o) => () => (o || a((o = { exports: {} }).exports, o), o.exports);
var v = f((p, h) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-international-telephone-input
  * @version 2.4.0
  */ (function (a, o) {
  typeof p == 'object' && typeof h < 'u'
   ? (h.exports = o(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], o)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.InternationalTelephoneInput = o(
        a.FormValidation,
       )));
 })(void 0, function (a) {
  var o = function (c, i) {
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
    o(c, i)
   );
  };
  return (function (c) {
   function i(t) {
    var e = c.call(this, t) || this;
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
    })(i, c),
    (i.prototype.install = function () {
     var t = this;
     this.core.registerValidator(i.INT_TEL_VALIDATOR, this.validatePhoneNumber);
     var e = this.hiddenFieldInputs.length;
     this.fields.forEach(function (n, l) {
      var d;
      t.core.addField(n, {
       validators:
        ((d = {}), (d[i.INT_TEL_VALIDATOR] = { message: t.opts.message }), d),
      });
      var s = t.core.getElements(n)[0],
       u = function () {
        return t.core.revalidateField(n);
       };
      if (
       (s.addEventListener('countrychange', u),
       t.countryChangeHandler.set(n, u),
       t.fieldElements.set(n, s),
       t.intlTelInstances.set(n, intlTelInput(s, t.opts)),
       l < e && t.hiddenFieldInputs[l])
      ) {
       var r = document.createElement('input');
       r.setAttribute('type', 'hidden'),
        r.setAttribute('name', t.hiddenFieldInputs[l]),
        t.core.getFormElement().appendChild(r),
        t.hiddenFieldElements.set(n, r);
      }
     }),
      e > 0 &&
       this.core.on(
        'core.validator.validated',
        this.onValidatorValidatedHandler,
       );
    }),
    (i.prototype.uninstall = function () {
     var t = this,
      e = this.hiddenFieldInputs.length;
     this.fields.forEach(function (n, l) {
      var d = t.countryChangeHandler.get(n),
       s = t.fieldElements.get(n),
       u = t.getIntTelInstance(n);
      if (
       (d &&
        s &&
        u &&
        (s.removeEventListener('countrychange', d),
        t.core.disableValidator(n, i.INT_TEL_VALIDATOR),
        u.destroy()),
       l < e && t.hiddenFieldInputs[l])
      ) {
       var r = t.hiddenFieldElements.get(n);
       r && t.core.getFormElement().removeChild(r);
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
    (i.prototype.getIntTelInstance = function (t) {
     return this.intlTelInstances.get(t);
    }),
    (i.prototype.onEnabled = function () {
     var t = this;
     this.fields.forEach(function (e) {
      t.core.enableValidator(e, i.INT_TEL_VALIDATOR);
     });
    }),
    (i.prototype.onDisabled = function () {
     var t = this;
     this.fields.forEach(function (e) {
      t.core.disableValidator(e, i.INT_TEL_VALIDATOR);
      var n = t.hiddenFieldElements.get(e);
      n && (n.value = '');
     });
    }),
    (i.prototype.checkPhoneNumber = function () {
     var t = this;
     return {
      validate: function (e) {
       var n = e.value,
        l = t.getIntTelInstance(e.field);
       return n !== '' && l ? { valid: l.isValidNumber() } : { valid: !0 };
      },
     };
    }),
    (i.prototype.onValidatorValidated = function (t) {
     if (
      this.hiddenFieldInputs.length !== 0 &&
      t.validator === i.INT_TEL_VALIDATOR
     ) {
      var e = t.field,
       n = this.hiddenFieldElements.get(e);
      if (n)
       if (this.isEnabled && t.result.valid) {
        var l = this.getIntTelInstance(e).getNumber();
        n.value = l;
       } else n.value = '';
     }
    }),
    (i.INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator'),
    i
   );
  })(a.Plugin);
 });
});
export default v();
