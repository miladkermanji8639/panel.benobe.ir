var f = (o, r) => () => (r || o((r = { exports: {} }).exports, r), r.exports);
var m = f((d, l) => {
 (function (o, r) {
  typeof d == 'object' && typeof l < 'u'
   ? (l.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((o = typeof globalThis < 'u' ? globalThis : o || self),
       (o.FormValidation = o.FormValidation || {}),
       (o.FormValidation.plugins = o.FormValidation.plugins || {}),
       (o.FormValidation.plugins.SubmitButton = r(o.FormValidation)));
 })(void 0, function (o) {
  var r = function (s, i) {
   return (
    (r =
     Object.setPrototypeOf ||
     ({ __proto__: [] } instanceof Array &&
      function (e, t) {
       e.__proto__ = t;
      }) ||
     function (e, t) {
      for (var n in t)
       Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
     }),
    r(s, i)
   );
  };
  function c(s, i) {
   if (typeof i != 'function' && i !== null)
    throw new TypeError(
     'Class extends value ' + String(i) + ' is not a constructor or null',
    );
   r(s, i);
   function e() {
    this.constructor = s;
   }
   s.prototype =
    i === null ? Object.create(i) : ((e.prototype = i.prototype), new e());
  }
  var h = (function (s) {
   c(i, s);
   function i(e) {
    var t = s.call(this, e) || this;
    return (
     (t.isFormValid = !1),
     (t.isButtonClicked = !1),
     (t.opts = Object.assign(
      {},
      {
       aspNetButton: !1,
       buttons: function (n) {
        return [].slice.call(
         n.querySelectorAll('[type="submit"]:not([formnovalidate])'),
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
    (i.prototype.install = function () {
     var e = this;
     if (this.core.getFormElement() instanceof HTMLFormElement) {
      var t = this.core.getFormElement();
      (this.submitButtons = this.opts.buttons(t)),
       t.setAttribute('novalidate', 'novalidate'),
       t.addEventListener('submit', this.submitHandler),
       (this.hiddenClickedEle = document.createElement('input')),
       this.hiddenClickedEle.setAttribute('type', 'hidden'),
       t.appendChild(this.hiddenClickedEle),
       this.submitButtons.forEach(function (n) {
        n.addEventListener('click', e.buttonClickHandler);
       }),
       this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
     }
    }),
    (i.prototype.uninstall = function () {
     var e = this,
      t = this.core.getFormElement();
     t instanceof HTMLFormElement &&
      t.removeEventListener('submit', this.submitHandler),
      this.submitButtons.forEach(function (n) {
       n.removeEventListener('click', e.buttonClickHandler);
      }),
      this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle),
      this.core.deregisterFilter(
       'element-ignored',
       this.ignoreValidationFilter,
      );
    }),
    (i.prototype.handleSubmitEvent = function (e) {
     this.validateForm(e);
    }),
    (i.prototype.handleClickEvent = function (e) {
     var t = e.currentTarget;
     if (
      ((this.isButtonClicked = !0),
      t instanceof HTMLElement &&
       !(this.opts.aspNetButton && this.isFormValid === !0))
     ) {
      var n = this.core.getFormElement();
      n.removeEventListener('submit', this.submitHandler),
       (this.clickedButton = e.target);
      var a = this.clickedButton.getAttribute('name'),
       u = this.clickedButton.getAttribute('value');
      a &&
       u &&
       (this.hiddenClickedEle.setAttribute('name', a),
       this.hiddenClickedEle.setAttribute('value', u)),
       this.validateForm(e);
     }
    }),
    (i.prototype.validateForm = function (e) {
     var t = this;
     this.isEnabled &&
      (e.preventDefault(),
      this.core.validate().then(function (n) {
       n === 'Valid' &&
        t.opts.aspNetButton &&
        !t.isFormValid &&
        t.clickedButton &&
        ((t.isFormValid = !0),
        t.clickedButton.removeEventListener('click', t.buttonClickHandler),
        t.clickedButton.click());
      }));
    }),
    (i.prototype.ignoreValidation = function (e, t, n) {
     return this.isEnabled
      ? this.opts.liveMode
        ? !1
        : !this.isButtonClicked
      : !1;
    }),
    i
   );
  })(o.Plugin);
  return h;
 });
});
export default m();
