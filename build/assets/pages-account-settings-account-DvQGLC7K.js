document.addEventListener('DOMContentLoaded', function (s) {
 (function () {
  const n = document.querySelector('#formAccountSettings'),
   c = document.querySelector('#formAccountDeactivation'),
   i = c.querySelector('.deactivate-account');
  n &&
   FormValidation.formValidation(n, {
    fields: {
     firstName: {
      validators: { notEmpty: { message: 'لطفا اسم کوچک را وارد کنید' } },
     },
     lastName: {
      validators: { notEmpty: { message: 'لطفا نام خانوادگی را وارد کنید' } },
     },
    },
    plugins: {
     trigger: new FormValidation.plugins.Trigger(),
     bootstrap5: new FormValidation.plugins.Bootstrap5({
      eleValidClass: '',
      rowSelector: '.col-md-6',
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
   }),
   c &&
    FormValidation.formValidation(c, {
     fields: {
      accountActivation: {
       validators: { notEmpty: { message: 'لطفا این تیک را بزنید' } },
      },
     },
     plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '' }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      fieldStatus: new FormValidation.plugins.FieldStatus({
       onStatusChanged: function (e) {
        e
         ? i.removeAttribute('disabled')
         : i.setAttribute('disabled', 'disabled');
       },
      }),
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
    });
  const u = document.querySelector('#accountActivation');
  i &&
   (i.onclick = function () {
    u.checked == !0 &&
     Swal.fire({
      text: 'آیا می خواهید حساب خود را حذف کنید؟',
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
          title: 'حذف شد!',
          text: 'حساب شما با موفقیت حذف شد.',
          customClass: {
           confirmButton: 'btn btn-success waves-effect waves-light',
          },
         })
       : e.dismiss === Swal.DismissReason.cancel &&
         Swal.fire({
          title: 'لغو شد',
          text: 'حساب کاربری شما حذف نشد!!',
          icon: 'error',
          customClass: {
           confirmButton: 'btn btn-success waves-effect waves-light',
          },
         });
     });
   });
  const l = document.querySelector('#phoneNumber'),
   r = document.querySelector('#zipCode');
  l && new Cleave(l, { phone: !0, phoneRegionCode: 'US' }),
   r && new Cleave(r, { delimiter: '', numeral: !0 });
  let o = document.getElementById('uploadedAvatar');
  const a = document.querySelector('.account-file-input'),
   m = document.querySelector('.account-image-reset');
  if (o) {
   const e = o.src;
   (a.onchange = () => {
    a.files[0] && (o.src = window.URL.createObjectURL(a.files[0]));
   }),
    (m.onclick = () => {
     (a.value = ''), (o.src = e);
    });
  }
 })();
});
$(function () {
 var s = $('.select2');
 s.length &&
  s.each(function () {
   var n = $(this);
   n.wrap('<div class="position-relative"></div>'),
    n.select2({ dropdownParent: n.parent() });
  });
});
