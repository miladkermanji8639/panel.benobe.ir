$(function () {
 var o = $('.read-only-ratings');
 o &&
  o.rateYo({
   rtl: isRtl,
   padding: '0px',
   rating: 4,
   starWidth: '20px',
   spacing: '2px',
   starSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" /></svg>',
  });
});
(function () {
 window.Helpers.initCustomOptionCheck();
 const o = document.querySelector('.credit-card-mask'),
  n = document.querySelector('.expiry-date-mask'),
  r = document.querySelector('.cvv-code-mask');
 o &&
  new Cleave(o, {
   creditCard: !0,
   onCreditCardTypeChanged: function (e) {
    e != '' && e != 'unknown'
     ? (document.querySelector('.card-type').innerHTML =
        '<img src="' +
        assetsPath +
        'img/icons/payments/' +
        e +
        '-cc.png" height="28"/>')
     : (document.querySelector('.card-type').innerHTML = '');
   },
  }),
  n && new Cleave(n, { date: !0, delimiter: '/', datePattern: ['m', 'y'] }),
  r && new Cleave(r, { numeral: !0, numeralPositiveOnly: !0 });
 const i = document.querySelector('#wizard-checkout');
 if (typeof i !== void 0 && i !== null) {
  const e = i.querySelector('#wizard-checkout-form'),
   l = e.querySelector('#checkout-cart'),
   s = e.querySelector('#checkout-address'),
   c = e.querySelector('#checkout-payment'),
   u = e.querySelector('#checkout-confirmation'),
   d = [].slice.call(e.querySelectorAll('.btn-next')),
   m = [].slice.call(e.querySelectorAll('.btn-prev'));
  let t = new Stepper(i, { linear: !1 });
  const p = FormValidation.formValidation(l, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    t.next();
   }),
   g = FormValidation.formValidation(s, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    t.next();
   }),
   w = FormValidation.formValidation(c, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    t.next();
   }),
   F = FormValidation.formValidation(u, {
    fields: {},
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-md-12',
     }),
     autoFocus: new FormValidation.plugins.AutoFocus(),
     submitButton: new FormValidation.plugins.SubmitButton(),
    },
   }).on('core.form.valid', function () {
    alert('ثبت شد..!!');
   });
  d.forEach((a) => {
   a.addEventListener('click', (k) => {
    switch (t._currentIndex) {
     case 0:
      p.validate();
      break;
     case 1:
      g.validate();
      break;
     case 2:
      w.validate();
      break;
     case 3:
      F.validate();
      break;
    }
   });
  }),
   m.forEach((a) => {
    a.addEventListener('click', (k) => {
     switch (t._currentIndex) {
      case 3:
       t.previous();
       break;
      case 2:
       t.previous();
       break;
      case 1:
       t.previous();
       break;
     }
    });
   });
 }
})();