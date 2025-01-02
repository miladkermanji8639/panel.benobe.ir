var p = (a, s) => () => (s || a((s = { exports: {} }).exports, s), s.exports);
var c = p((l, r) => {
 (function (a, s) {
  typeof l == 'object' && typeof r < 'u'
   ? (r.exports = s(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], s)
     : ((a = typeof globalThis < 'u' ? globalThis : a || self),
       (a.FormValidation = a.FormValidation || {}),
       (a.FormValidation.plugins = a.FormValidation.plugins || {}),
       (a.FormValidation.plugins.StartEndDate = s(a.FormValidation)));
 })(void 0, function (a) {
  var s = function (d, t) {
   return (
    (s =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (i, e) {
       i.__proto__ = e;
      }) ||
     function (i, e) {
      for (var o in e)
       Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
     }),
    s(d, t)
   );
  };
  function f(d, t) {
   if (typeof t != 'function' && t !== null)
    throw new TypeError(
     'Class extends value ' + String(t) + ' is not a constructor or null',
    );
   s(d, t);
   function i() {
    this.constructor = d;
   }
   d.prototype =
    t === null ? Object.create(t) : ((i.prototype = t.prototype), new i());
  }
  var h = (function (d) {
   f(t, d);
   function t(i) {
    var e = d.call(this, i) || this;
    return (
     (e.fieldValidHandler = e.onFieldValid.bind(e)),
     (e.fieldInvalidHandler = e.onFieldInvalid.bind(e)),
     e
    );
   }
   return (
    (t.prototype.install = function () {
     var i = this,
      e = this.core.getFields();
     (this.startDateFieldOptions = e[this.opts.startDate.field]),
      (this.endDateFieldOptions = e[this.opts.endDate.field]);
     var o = this.core.getFormElement();
     this.core
      .on('core.field.valid', this.fieldValidHandler)
      .on('core.field.invalid', this.fieldInvalidHandler)
      .addField(this.opts.startDate.field, {
       validators: {
        date: {
         format: this.opts.format,
         max: function () {
          var n = o.querySelector('[name="'.concat(i.opts.endDate.field, '"]'));
          return n.value;
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
          var n = o.querySelector(
           '[name="'.concat(i.opts.startDate.field, '"]'),
          );
          return n.value;
         },
        },
       },
      });
    }),
    (t.prototype.uninstall = function () {
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
    (t.prototype.onEnabled = function () {
     this.core
      .enableValidator(this.opts.startDate.field, 'date')
      .enableValidator(this.opts.endDate.field, 'date');
    }),
    (t.prototype.onDisabled = function () {
     this.core
      .disableValidator(this.opts.startDate.field, 'date')
      .disableValidator(this.opts.endDate.field, 'date');
    }),
    (t.prototype.onFieldInvalid = function (i) {
     switch (i) {
      case this.opts.startDate.field:
       this.startDateValid = !1;
       break;
      case this.opts.endDate.field:
       this.endDateValid = !1;
       break;
     }
    }),
    (t.prototype.onFieldValid = function (i) {
     switch (i) {
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
       break;
     }
    }),
    t
   );
  })(a.Plugin);
  return h;
 });
});
export default c();
