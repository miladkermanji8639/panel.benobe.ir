var r = (a, i) => () => (i || a((i = { exports: {} }).exports, i), i.exports);
var f = r((l, n) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-start-end-date
  * @version 2.4.0
  */ (function (a, i) {
  typeof l == 'object' && typeof n < 'u'
   ? (n.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.StartEndDate = i(a.FormValidation)));
 })(void 0, function (a) {
  var i = function (d, o) {
   return (
    (i =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var s in t)
       Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
     }),
    i(d, o)
   );
  };
  return (function (d) {
   function o(e) {
    var t = d.call(this, e) || this;
    return (
     (t.fieldValidHandler = t.onFieldValid.bind(t)),
     (t.fieldInvalidHandler = t.onFieldInvalid.bind(t)),
     t
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function s() {
      this.constructor = e;
     }
     i(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((s.prototype = t.prototype), new s()));
    })(o, d),
    (o.prototype.install = function () {
     var e = this,
      t = this.core.getFields();
     (this.startDateFieldOptions = t[this.opts.startDate.field]),
      (this.endDateFieldOptions = t[this.opts.endDate.field]);
     var s = this.core.getFormElement();
     this.core
      .on('core.field.valid', this.fieldValidHandler)
      .on('core.field.invalid', this.fieldInvalidHandler)
      .addField(this.opts.startDate.field, {
       validators: {
        date: {
         format: this.opts.format,
         max: function () {
          return s.querySelector('[name="'.concat(e.opts.endDate.field, '"]'))
           .value;
         },
         message: this.opts.startDate.message,
        },
       },
      })
      .addField(this.opts.endDate.field, {
       validators: {
        date: {
         format: this.opts.format,
         message: this.opts.endDate.message,
         min: function () {
          return s.querySelector('[name="'.concat(e.opts.startDate.field, '"]'))
           .value;
         },
        },
       },
      });
    }),
    (o.prototype.uninstall = function () {
     this.core.removeField(this.opts.startDate.field),
      this.startDateFieldOptions &&
       this.core.addField(
        this.opts.startDate.field,
        this.startDateFieldOptions,
       ),
      this.core.removeField(this.opts.endDate.field),
      this.endDateFieldOptions &&
       this.core.addField(this.opts.endDate.field, this.endDateFieldOptions),
      this.core
       .off('core.field.valid', this.fieldValidHandler)
       .off('core.field.invalid', this.fieldInvalidHandler);
    }),
    (o.prototype.onEnabled = function () {
     this.core
      .enableValidator(this.opts.startDate.field, 'date')
      .enableValidator(this.opts.endDate.field, 'date');
    }),
    (o.prototype.onDisabled = function () {
     this.core
      .disableValidator(this.opts.startDate.field, 'date')
      .disableValidator(this.opts.endDate.field, 'date');
    }),
    (o.prototype.onFieldInvalid = function (e) {
     switch (e) {
      case this.opts.startDate.field:
       this.startDateValid = !1;
       break;
      case this.opts.endDate.field:
       this.endDateValid = !1;
     }
    }),
    (o.prototype.onFieldValid = function (e) {
     switch (e) {
      case this.opts.startDate.field:
       (this.startDateValid = !0),
        this.isEnabled &&
         this.endDateValid === !1 &&
         this.core.revalidateField(this.opts.endDate.field);
       break;
      case this.opts.endDate.field:
       (this.endDateValid = !0),
        this.isEnabled &&
         this.startDateValid === !1 &&
         this.core.revalidateField(this.opts.startDate.field);
     }
    }),
    o
   );
  })(a.Plugin);
 });
});
export default f();
