document.addEventListener('DOMContentLoaded', function (o) {
 (function () {
  FormValidation.formValidation(document.getElementById('editPermissionForm'), {
   fields: {
    editPermissionName: {
     validators: { notEmpty: { message: 'لطفا عنوان دسترسی را وارد کنید' } },
    },
   },
   plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap5: new FormValidation.plugins.Bootstrap5({
     eleValidClass: '',
     rowSelector: '.col-sm-9',
    }),
    submitButton: new FormValidation.plugins.SubmitButton(),
    autoFocus: new FormValidation.plugins.AutoFocus(),
   },
  });
 })();
});
