/**
 * Sweet Alerts
 */

'use strict';

(function () {
 const basicAlert = document.querySelector('#basic-alert'),
  withTitle = document.querySelector('#with-title'),
  footerAlert = document.querySelector('#footer-alert'),
  htmlAlert = document.querySelector('#html-alert'),
  positionTopStart = document.querySelector('#position-top-start'),
  positionTopEnd = document.querySelector('#position-top-end'),
  positionBottomStart = document.querySelector('#position-bottom-start'),
  positionBottomEnd = document.querySelector('#position-bottom-end'),
  bounceInAnimation = document.querySelector('#bounce-in-animation'),
  fadeInAnimation = document.querySelector('#fade-in-animation'),
  flipXAnimation = document.querySelector('#flip-x-animation'),
  tadaAnimation = document.querySelector('#tada-animation'),
  shakeAnimation = document.querySelector('#shake-animation'),
  iconSuccess = document.querySelector('#type-success'),
  iconInfo = document.querySelector('#type-info'),
  iconWarning = document.querySelector('#type-warning'),
  iconError = document.querySelector('#type-error'),
  iconQuestion = document.querySelector('#type-question'),
  customImage = document.querySelector('#custom-image'),
  autoClose = document.querySelector('#auto-close'),
  outsideClick = document.querySelector('#outside-click'),
  progressSteps = document.querySelector('#progress-steps'),
  ajaxRequest = document.querySelector('#ajax-request'),
  confirmText = document.querySelector('#confirm-text'),
  confirmColor = document.querySelector('#confirm-color');

 // Basic Alerts
 // --------------------------------------------------------------------

 // Default Alert
 if (basicAlert) {
  basicAlert.onclick = function () {
   Swal.fire({
    title: 'قالب مدیریت HTML',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Alert With Title
 if (withTitle) {
  withTitle.onclick = function () {
   Swal.fire({
    title: 'قالب مدیریت HTML',
    text:
     'امکانات و ویژگی های زیاد این قالب گزینه مناسبی برای سایت شما می باشد',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Alert With Footer
 if (footerAlert) {
  footerAlert.onclick = function () {
   Swal.fire({
    icon: 'error',
    title: 'خطا...',
    text: 'متاسفانه مشکلی وجود دارد!',
    footer: '<a href>مراجعه به پشتیبانی</a>',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Html Alert
 if (htmlAlert) {
  htmlAlert.onclick = function () {
   Swal.fire({
    title: '<span class="fw-medium">HTML <u>نمونه</u></span>',
    icon: 'info',
    html:
     'شما می توانید از <b>متن برجسته</b>, ' +
     '<a href="https://pixinvent.com/" target="_blank">لینک ها</a> ' +
     'و از بقیه تگ ها نیز استفاده کنید',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="ti ti-thumb-up"></i> عالیه!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="ti ti-thumb-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    customClass: {
     confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Alerts Positions
 // --------------------------------------------------------------------

 // Top Start Alert
 if (positionTopStart) {
  positionTopStart.onclick = function () {
   Swal.fire({
    position: 'top-start',
    icon: 'success',
    title: 'عملیات مورد نظر انجام شد',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Top End Alert
 if (positionTopEnd) {
  positionTopEnd.onclick = function () {
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'عملیات مورد نظر انجام شد',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Bottom Start Alert
 if (positionBottomStart) {
  positionBottomStart.onclick = function () {
   Swal.fire({
    position: 'bottom-start',
    icon: 'success',
    title: 'عملیات مورد نظر انجام شد',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Bottom End Alert
 if (positionBottomEnd) {
  positionBottomEnd.onclick = function () {
   Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'عملیات مورد نظر انجام شد',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Alerts With Animations
 // --------------------------------------------------------------------

 // Bounce In Animation
 if (bounceInAnimation) {
  bounceInAnimation.onclick = function () {
   Swal.fire({
    title: 'Bounce In انیمیشن',
    showClass: {
     popup: 'animate__animated animate__bounceIn',
    },
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Fade In Animation
 if (fadeInAnimation) {
  fadeInAnimation.onclick = function () {
   Swal.fire({
    title: 'Fade In انیمیشن',
    showClass: {
     popup: 'animate__animated animate__fadeIn',
    },
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Flip X Animation
 if (flipXAnimation) {
  flipXAnimation.onclick = function () {
   Swal.fire({
    title: 'Flip In انیمیشن',
    showClass: {
     popup: 'animate__animated animate__flipInX',
    },
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Tada Animation
 if (tadaAnimation) {
  tadaAnimation.onclick = function () {
   Swal.fire({
    title: 'Tada انیمیشن',
    showClass: {
     popup: 'animate__animated animate__tada',
    },
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Shake Animation
 if (shakeAnimation) {
  shakeAnimation.onclick = function () {
   Swal.fire({
    title: 'Shake انیمیشن',
    showClass: {
     popup: 'animate__animated animate__shakeX',
    },
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Alert Types
 // --------------------------------------------------------------------

 // Success Alert
 if (iconSuccess) {
  iconSuccess.onclick = function () {
   Swal.fire({
    title: 'آفرین!',
    text: 'شما کلیک کردید!',
    icon: 'success',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Info Alert
 if (iconInfo) {
  iconInfo.onclick = function () {
   Swal.fire({
    title: 'راهنما!',
    text: 'شما کلیک کردید!',
    icon: 'info',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Warning Alert
 if (iconWarning) {
  iconWarning.onclick = function () {
   Swal.fire({
    title: 'هشدار!',
    text: 'شما کلیک کردید!',
    icon: 'warning',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Error Alert
 if (iconError) {
  iconError.onclick = function () {
   Swal.fire({
    title: 'خطا!',
    text: 'شما کلیک کردید!',
    icon: 'error',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Question Alert
 if (iconQuestion) {
  iconQuestion.onclick = function () {
   Swal.fire({
    title: 'سوال!',
    text: 'شما کلیک کردید!',
    icon: 'question',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Advanced Options
 // --------------------------------------------------------------------

 //Alert With Custom Icon
 if (customImage) {
  customImage.onclick = function () {
   Swal.fire({
    title: 'یک مُدال!',
    text: 'مدال با عکس سفارشی.',
    imageUrl: assetsPath + 'img/backgrounds/5.jpg',
    imageWidth: 400,
    imageAlt: 'Custom image',
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
   });
  };
 }

 // Auto Closing Alert
 if (autoClose) {
  autoClose.onclick = function () {
   var timerInterval;
   Swal.fire({
    title: 'مُدال بسته شونده خودکار!',
    html: 'در <span class="fw-medium">2</span> ثانیه دیگر بسته خواهد شد.',
    timer: 2000,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    confirmButtonText: 'باشه',
    buttonsStyling: false,
    willOpen: function () {
     Swal.showLoading();
     timerInterval = setInterval(function () {
      Swal.getHtmlContainer().querySelector('strong').textContent =
       Swal.getTimerLeft();
     }, 100);
    },
    willClose: function () {
     clearInterval(timerInterval);
    },
   }).then(function (result) {
    if (
     // Read more about handling dismissals
     result.dismiss === Swal.DismissReason.timer
    ) {
     console.log('I was closed by the timer');
    }
   });
  };
 }

 // Close Alert On Backdrop Click
 if (outsideClick) {
  outsideClick.onclick = function () {
   Swal.fire({
    title: 'پیام مُدال',
    text: 'برای بسته شدن بیرون کادر کلیک کنید!',
    backdrop: true,
    confirmButtonText: 'باشه',
    allowOutsideClick: true,
    customClass: {
     confirmButton: 'btn btn-primary waves-effect waves-light',
    },
    buttonsStyling: false,
   });
  };
 }

 // Alert With Steps
 if (progressSteps) {
  progressSteps.onclick = function () {
   const steps = ['1', '2', '3'];
   const swalQueueStep = Swal.mixin({
    confirmButtonText: 'بعدی',
    cancelButtonText: 'قبلی',
    closeButtonText: 'بازگشت',
    progressSteps: steps,
    input: 'text',
    inputAttributes: {
     required: true,
    },
    validationMessage: 'این فیلد الزامی است',
   });

   async function backAndForward() {
    const values = [];
    let currentStep;

    for (currentStep = 0; currentStep < steps.length; ) {
     const result = await new swalQueueStep({
      title: 'سوال ' + steps[currentStep],
      showCancelButton: currentStep > 0,
      currentProgressStep: currentStep,
     });

     if (result.value) {
      values[currentStep] = result.value;
      currentStep++;
     } else if (result.dismiss === 'cancel') {
      currentStep--;
     }
    }

    Swal.fire(JSON.stringify(values));
   }

   backAndForward();
  };
 }

 // Alert With Ajax Request
 if (ajaxRequest) {
  ajaxRequest.onclick = function () {
   Swal.fire({
    text: 'نام کاربری گیتهاب وارد کنید',
    input: 'text',
    inputAttributes: {
     autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'بررسی',
    cancelButtonText: 'بازگشت',
    showLoaderOnConfirm: true,
    customClass: {
     confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
     cancelButton: 'btn btn-label-danger waves-effect waves-light',
    },
    preConfirm: (login) => {
     return fetch('//api.github.com/users/' + login)
      .then((response) => {
       if (!response.ok) {
        throw new Error(response.statusText);
       }
       return response.json();
      })
      .catch((error) => {
       Swal.showValidationMessage('درخواست ناموفق:' + error);
      });
    },
    backdrop: true,
    allowOutsideClick: () => !Swal.isLoading(),
   }).then((result) => {
    if (result.isConfirmed) {
     Swal.fire({
      title: result.value.login + "'s avatar",
      imageUrl: result.value.avatar_url,
      customClass: {
       confirmButtonText: 'بسته شدن!',
       confirmButton: 'btn btn-primary waves-effect waves-light',
      },
     });
    }
   });
  };
 }

 // Alert With Functional Confirm Button
 if (confirmText) {
  confirmText.onclick = function () {
   Swal.fire({
    title: 'مطمئنی؟',
    text: 'این یک پیام مهم است ولی تستی!',
    icon: 'warning',
    cancelButtonText: 'بازگشت',
    showCancelButton: true,
    confirmButtonText: 'بله, حذف شود!',
    customClass: {
     confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: false,
   }).then(function (result) {
    if (result.value) {
     Swal.fire({
      icon: 'success',
      title: 'حذف شد!',
      confirmButtonText: 'باشه',
      text: 'فایل مورد نظرتان با موفقیت حذف شد.',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    }
   });
  };
 }

 // Alert With Functional Confirm Cancel Button
 if (confirmColor) {
  confirmColor.onclick = function () {
   Swal.fire({
    title: 'مطمئنی؟',
    text: 'این یک پیام مهم است ولی تستی!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'بله, حذف شود!',
    cancelButtonText: 'بازگشت',
    customClass: {
     confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
     cancelButton: 'btn btn-label-secondary waves-effect waves-light',
    },
    buttonsStyling: false,
   }).then(function (result) {
    if (result.value) {
     Swal.fire({
      icon: 'success',
      title: 'حذف شد!',
      confirmButtonText: 'باشه',
      text: 'فایل مورد نظرتان با موفقیت حذف شد.',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
     Swal.fire({
      title: 'لغو شده',
      text: 'فایل تخیلی ما حذف نشد :)',
      icon: 'error',
      confirmButtonText: 'باشه',
      customClass: {
       confirmButton: 'btn btn-success waves-effect waves-light',
      },
     });
    }
   });
  };
 }
})();
