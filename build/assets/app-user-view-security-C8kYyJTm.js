(function () {
 const e = document.querySelector('#formChangePassword');
 e &&
  FormValidation.formValidation(e, {
   fields: {
    newPassword: {
     validators: {
      notEmpty: { message: 'لطفا رمز جدید را وارد کنید' },
      stringLength: { min: 8, message: 'رمز باید بیشتر از 8 کارکتر باشد' },
     },
    },
    confirmPassword: {
     validators: {
      notEmpty: { message: 'تایید رمز را وارد کنید' },
      identical: {
       compare: function () {
        return e.querySelector('[name="newPassword"]').value;
       },
       message: 'رمز با تاییدش یکسان نیست',
      },
      stringLength: { min: 8, message: 'رمز باید بیشتر از 8 کارکتر باشد' },
     },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: '.form-password-toggle',
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
   init: (t) => {
    t.on('plugins.message.placed', function (n) {
     n.element.parentElement.classList.contains('input-group') &&
      n.element.parentElement.insertAdjacentElement(
       'afterend',
       n.messageElement,
      );
    });
   },
  });
})();
