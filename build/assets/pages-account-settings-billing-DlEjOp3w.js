document.addEventListener('DOMContentLoaded', function (n) {
 (function () {
  const t = document.querySelector('.credit-card-mask'),
   o = document.querySelector('.expiry-date-mask'),
   a = document.querySelector('.cvv-code-mask');
  t &&
   new Cleave(t, {
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
   o && new Cleave(o, { date: !0, delimiter: '/', datePattern: ['m', 'y'] }),
   a && new Cleave(a, { numeral: !0, numeralPositiveOnly: !0 });
  const s = document.getElementById('formAccountSettings'),
   r = document.querySelector('.mobile-number'),
   l = document.querySelector('.zip-code'),
   c = document.getElementById('creditCardForm');
  s &&
   FormValidation.formValidation(s, {
    fields: {
     companyName: {
      validators: { notEmpty: { message: 'لطفا اسم شرکت را وارد کنید' } },
     },
     billingEmail: {
      validators: {
       notEmpty: { message: 'لطفا آدرس را وارد کنید' },
       emailAddress: { message: 'لطفا آدرس صحیح وارد کنید' },
      },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-sm-6',
     }),
     submitButton: new FormValidation.plugins.SubmitButton(),
     autoFocus: new FormValidation.plugins.AutoFocus(),
    },
   }),
   c &&
    FormValidation.formValidation(c, {
     fields: {
      paymentCard: {
       validators: { notEmpty: { message: 'لطفا شماره کارت وارد کنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      autoFocus: new FormValidation.plugins.AutoFocus(),
     },
     init: (e) => {
      e.on('plugins.message.placed', function (i) {
       i.element.parentElement.classList.contains('input-group') &&
        i.element.parentElement.insertAdjacentElement(
         'afterend',
         i.messageElement,
        );
      });
     },
    });
  const u = document.querySelector('.cancel-subscription');
  u &&
   (u.onclick = function () {
    Swal.fire({
     text: 'آیا شما می خواهید اشتراک خود را لغو کنید؟',
     icon: 'warning',
     showCancelButton: !0,
     confirmButtonText: 'بله',
     customClass: {
      confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    }).then(function (e) {
     e.value
      ? Swal.fire({
         icon: 'success',
         title: 'لغو شد!',
         text: 'اشتراک شما با موفقیت لغو شد.',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        })
      : (e.dismiss, Swal.DismissReason.cancel);
    });
   }),
   r && new Cleave(r, { phone: !0, phoneRegionCode: 'US' }),
   l && new Cleave(l, { delimiter: '', numeral: !0 });
 })();
});
$(function () {
 var n = $('.select2');
 n.length &&
  n.each(function () {
   var t = $(this);
   t.wrap('<div class="position-relative"></div>'),
    t.select2({ dropdownParent: t.parent() });
  });
});
