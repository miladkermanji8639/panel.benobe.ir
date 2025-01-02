
function validateInput(
 inputSelector,
 validLength,
 submitBtnSelector,
 feedbackSelector,
 feedbackMessages,
) {
 // Set the maxlength attribute for the input
 $(inputSelector).attr('maxlength', validLength);

 $(inputSelector).on('input', function () {
  let inputValue = $(this).val();
  const $submitBtn = $(submitBtnSelector);
  const $feedback = $(feedbackSelector);

  // Reset feedback and button classes
  $feedback.text('');
  $submitBtn.removeClass('btn-success btn-secondary disabled btn-primary');

  // Regex for phone number validation (optional)
  const phoneRegex =
   /^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/;

  // Check if input value length matches validLength
  if (inputValue.length === validLength) {
   // If it's the OTP input, no regex is needed, just check length
   if (inputSelector === '#login-input-dr-otp') {
    $submitBtn.addClass('btn-success');
   }
   // If it's the phone number input, apply regex validation
   else if (phoneRegex.test(inputValue)) {
    $submitBtn.addClass('btn-success');
   }
  }

  // If the input is not valid or empty, show feedback and apply classes to the button
  if (inputValue.length < 1) {
   $feedback.text(feedbackMessages.empty);
   $submitBtn.addClass('btn-secondary disabled');
  } else if (
   inputValue.length < validLength ||
   (inputSelector === '#login-input-dr' && !phoneRegex.test(inputValue))
  ) {
   $feedback.text(feedbackMessages.invalid);
   $submitBtn.addClass('btn-secondary disabled');
  }
 });
}

validateInput('#login-input-dr', 11, '#btn-login-dr', '.my-invalid-feedback', {
 empty: 'شماره موبایل الزامی است',
 invalid: 'شماره موبایل وارد شده صحیح نمیباشد',
});

validateInput(
 '#login-input-dr-otp',
 4,
 '#btn-login-dr-otp',
 '.my-invalid-feedback-otp',
 {
  empty: 'کد  ارسالی را وارد کنید',
  invalid: 'کد  وارد شده صحیح نمیباشد',
 },
);
