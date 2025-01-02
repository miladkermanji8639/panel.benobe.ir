$(function () {
 $('#login-user-name, #login-password, #login-user-name-otp').on(
  'input',
  function () {
   const inputValue = $('#login-user-name').val() ?? '';
   const inputValueOtp = $('#login-user-name-otp').val() ?? '';
   const inputValuePassword = $('#login-password').val() ?? '';

   // دکمه ورود کاربر
   const loginButton = $('#btn-login-dr');
   if (inputValue.length > 10 && inputValuePassword.length > 5) {
    loginButton.removeClass('btn-secondary disabled').addClass('btn-success');
   } else {
    loginButton.removeClass('btn-success').addClass('btn-secondary disabled');
   }

   // دکمه OTP
   const otpButton = $('#btn-login-monshi-otp');
   if (inputValueOtp.length > 10) {
    otpButton.removeClass('btn-secondary disabled').addClass('btn-success');
   } else {
    otpButton.removeClass('btn-success').addClass('btn-secondary disabled');
   }
  },
 );
});
