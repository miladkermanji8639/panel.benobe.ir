var u = (o, n) => () => (n || o((n = { exports: {} }).exports, n), n.exports);
var c = u((d, s) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/plugin-submit-button
  * @version 2.4.0
  */ (function (o, n) {
  typeof d == 'object' && typeof s < 'u'
   ? (s.exports = n(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], n)
     : (((o = typeof globalThis < 'u' ? globalThis : o || self).FormValidation =
        o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.SubmitButton = n(o.FormValidation)));
 })(void 0, function (o) {
  var n = function (l, r) {
   return (
    (n =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var i in t)
       Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     }),
    n(l, r)
   );
  };
  return (function (l) {
   function r(e) {
    var t = l.call(this, e) || this;
    return (
     (t.isFormValid = !1),
     (t.isButtonClicked = !1),
     (t.opts = Object.assign(
      {},
      {
       aspNetButton: !1,
       buttons: function (i) {
        return [].slice.call(
         i.querySelectorAll('[type="submit"]:not([formnovalidate])'),
        );
       },
       liveMode: !0,
      },
      e,
     )),
     (t.submitHandler = t.handleSubmitEvent.bind(t)),
     (t.buttonClickHandler = t.handleClickEvent.bind(t)),
     (t.ignoreValidationFilter = t.ignoreValidation.bind(t)),
     t
    );
   }
   return (
    (function (e, t) {
     if (typeof t != 'function' && t !== null)
      throw new TypeError(
       'Class extends value ' + String(t) + ' is not a constructor or null',
      );
     function i() {
      this.constructor = e;
     }
     n(e, t),
      (e.prototype =
       t === null ? Object.create(t) : ((i.prototype = t.prototype), new i()));
    })(r, l),
    (r.prototype.install = function () {
     var e = this;
     if (this.core.getFormElement() instanceof HTMLFormElement) {
      var t = this.core.getFormElement();
      (this.submitButtons = this.opts.buttons(t)),
       t.setAttribute('novalidate', 'novalidate'),
       t.addEventListener('submit', this.submitHandler),
       (this.hiddenClickedEle = document.createElement('input')),
       this.hiddenClickedEle.setAttribute('type', 'hidden'),
       t.appendChild(this.hiddenClickedEle),
       this.submitButtons.forEach(function (i) {
        i.addEventListener('click', e.buttonClickHandler);
       }),
       this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
     }
    }),
    (r.prototype.uninstall = function () {
     var e = this,
      t = this.core.getFormElement();
     t instanceof HTMLFormElement &&
      t.removeEventListener('submit', this.submitHandler),
      this.submitButtons.forEach(function (i) {
       i.removeEventListener('click', e.buttonClickHandler);
      }),
      this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle),
      this.core.deregisterFilter(
       'element-ignored',
       this.ignoreValidationFilter,
      );
    }),
    (r.prototype.handleSubmitEvent = function (e) {
     this.validateForm(e);
    }),
    (r.prototype.handleClickEvent = function (e) {
     var t = e.currentTarget;
     if (
      ((this.isButtonClicked = !0),
      t instanceof HTMLElement &&
       !(this.opts.aspNetButton && this.isFormValid === !0))
     ) {
      this.core
       .getFormElement()
       .removeEventListener('submit', this.submitHandler),
       (this.clickedButton = e.target);
      var i = this.clickedButton.getAttribute('name'),
       a = this.clickedButton.getAttribute('value');
      i &&
       a &&
       (this.hiddenClickedEle.setAttribute('name', i),
       this.hiddenClickedEle.setAttribute('value', a)),
       this.validateForm(e);
     }
    }),
    (r.prototype.validateForm = function (e) {
     var t = this;
     this.isEnabled &&
      (e.preventDefault(),
      this.core.validate().then(function (i) {
       i === 'Valid' &&
        t.opts.aspNetButton &&
        !t.isFormValid &&
        t.clickedButton &&
        ((t.isFormValid = !0),
        t.clickedButton.removeEventListener('click', t.buttonClickHandler),
        t.clickedButton.click());
      }));
    }),
    (r.prototype.ignoreValidation = function (e, t, i) {
     return !!this.isEnabled && !this.opts.liveMode && !this.isButtonClicked;
    }),
    r
   );
  })(o.Plugin);
 });
});
export default c();
