document.addEventListener('DOMContentLoaded', function (l) {
 (function () {
  const n = document.querySelector('.credit-card-mask'),
   a = document.querySelector('.expiry-date-mask'),
   i = document.querySelector('.cvv-code-mask'),
   r = document.querySelector('.btn-reset');
  let o;
  function d() {
   n &&
    (o = new Cleave(n, {
     creditCard: !0,
     onCreditCardTypeChanged: function (e) {
      e != '' && e != 'unknown'
       ? (document.querySelector('.card-type').innerHTML =
          '<img src="' +
          assetsPath +
          'img/icons/payments/' +
          e +
          '-cc.png" class="cc-icon-image" height="28"/>')
       : (document.querySelector('.card-type').innerHTML = '');
     },
    }));
  }
  document
   .getElementById('addNewCCModal')
   .addEventListener('show.bs.modal', function (e) {
    d();
   }),
   a && new Cleave(a, { date: !0, delimiter: '/', datePattern: ['m', 'y'] }),
   i && new Cleave(i, { numeral: !0, numeralPositiveOnly: !0 }),
   FormValidation.formValidation(document.getElementById('addNewCCForm'), {
    fields: {
     modalAddCard: {
      validators: { notEmpty: { message: 'شماره کارت خود را وارد کنید' } },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-12',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
    init: (e) => {
     e.on('plugins.message.placed', function (t) {
      t.element.parentElement.classList.contains('input-group') &&
       t.element.parentElement.insertAdjacentElement(
        'afterend',
        t.messageElement,
       );
     });
    },
   }).on('plugins.message.displayed', function (e) {
    e.element.parentElement.classList.contains('input-group') &&
     e.element.parentElement.insertAdjacentElement(
      'afterend',
      e.messageElement.parentElement,
     );
   }),
   r.addEventListener('click', function (e) {
    (document.querySelector('.card-type').innerHTML = ''), o.destroy();
   });
 })();
});
