document.addEventListener('DOMContentLoaded', function (o) {
 (function () {
  FormValidation.formValidation(document.getElementById('addPermissionForm'), {
   fields: {
    modalPermissionName: {
     validators: { notEmpty: { message: 'لطفا عنوان دسترسی را وارد کنید' } },
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
  });
 })();
});
