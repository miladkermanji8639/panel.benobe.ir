(function () {
 const i = document.querySelector('#basic-alert'),
  s = document.querySelector('#with-title'),
  a = document.querySelector('#footer-alert'),
  c = document.querySelector('#html-alert'),
  l = document.querySelector('#position-top-start'),
  r = document.querySelector('#position-top-end'),
  u = document.querySelector('#position-bottom-start'),
  f = document.querySelector('#position-bottom-end'),
  m = document.querySelector('#bounce-in-animation'),
  w = document.querySelector('#fade-in-animation'),
  b = document.querySelector('#flip-x-animation'),
  S = document.querySelector('#tada-animation'),
  p = document.querySelector('#shake-animation'),
  g = document.querySelector('#type-success'),
  y = document.querySelector('#type-info'),
  h = document.querySelector('#type-warning'),
  v = document.querySelector('#type-error'),
  B = document.querySelector('#type-question'),
  d = document.querySelector('#custom-image'),
  x = document.querySelector('#auto-close'),
  C = document.querySelector('#outside-click'),
  T = document.querySelector('#progress-steps'),
  k = document.querySelector('#ajax-request'),
  q = document.querySelector('#confirm-text'),
  _ = document.querySelector('#confirm-color');
 i &&
  (i.onclick = function () {
   Swal.fire({
    title: 'قالب مدیریت HTML',
    customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
    confirmButtonText: 'باشه',
    buttonsStyling: !1,
   });
  }),
  s &&
   (s.onclick = function () {
    Swal.fire({
     title: 'قالب مدیریت HTML',
     text:
      'امکانات و ویژگی های زیاد این قالب گزینه مناسبی برای سایت شما می باشد',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  a &&
   (a.onclick = function () {
    Swal.fire({
     icon: 'error',
     title: 'خطا...',
     text: 'متاسفانه مشکلی وجود دارد!',
     footer: '<a href>مراجعه به پشتیبانی</a>',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  c &&
   (c.onclick = function () {
    Swal.fire({
     title: '<span class="fw-medium">HTML <u>نمونه</u></span>',
     icon: 'info',
     html:
      'شما می توانید از <b>متن برجسته</b>, <a href="https://pixinvent.com/" target="_blank">لینک ها</a> و از بقیه تگ ها نیز استفاده کنید',
     showCloseButton: !0,
     showCancelButton: !0,
     focusConfirm: !1,
     confirmButtonText: '<i class="ti ti-thumb-up"></i> عالیه!',
     confirmButtonAriaLabel: 'Thumbs up, great!',
     cancelButtonText: '<i class="ti ti-thumb-down"></i>',
     cancelButtonAriaLabel: 'Thumbs down',
     customClass: {
      confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    });
   }),
  l &&
   (l.onclick = function () {
    Swal.fire({
     position: 'top-start',
     icon: 'success',
     title: 'عملیات مورد نظر انجام شد',
     showConfirmButton: !1,
     timer: 1500,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  r &&
   (r.onclick = function () {
    Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: 'عملیات مورد نظر انجام شد',
     showConfirmButton: !1,
     timer: 1500,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  u &&
   (u.onclick = function () {
    Swal.fire({
     position: 'bottom-start',
     icon: 'success',
     title: 'عملیات مورد نظر انجام شد',
     showConfirmButton: !1,
     timer: 1500,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  f &&
   (f.onclick = function () {
    Swal.fire({
     position: 'bottom-end',
     icon: 'success',
     title: 'عملیات مورد نظر انجام شد',
     showConfirmButton: !1,
     timer: 1500,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  m &&
   (m.onclick = function () {
    Swal.fire({
     title: 'Bounce In انیمیشن',
     showClass: { popup: 'animate__animated animate__bounceIn' },
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  w &&
   (w.onclick = function () {
    Swal.fire({
     title: 'Fade In انیمیشن',
     showClass: { popup: 'animate__animated animate__fadeIn' },
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  b &&
   (b.onclick = function () {
    Swal.fire({
     title: 'Flip In انیمیشن',
     showClass: { popup: 'animate__animated animate__flipInX' },
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  S &&
   (S.onclick = function () {
    Swal.fire({
     title: 'Tada انیمیشن',
     showClass: { popup: 'animate__animated animate__tada' },
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  p &&
   (p.onclick = function () {
    Swal.fire({
     title: 'Shake انیمیشن',
     showClass: { popup: 'animate__animated animate__shakeX' },
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  g &&
   (g.onclick = function () {
    Swal.fire({
     title: 'آفرین!',
     text: 'شما کلیک کردید!',
     icon: 'success',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  y &&
   (y.onclick = function () {
    Swal.fire({
     title: 'راهنما!',
     text: 'شما کلیک کردید!',
     icon: 'info',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  h &&
   (h.onclick = function () {
    Swal.fire({
     title: 'هشدار!',
     text: 'شما کلیک کردید!',
     icon: 'warning',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  v &&
   (v.onclick = function () {
    Swal.fire({
     title: 'خطا!',
     text: 'شما کلیک کردید!',
     icon: 'error',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  B &&
   (B.onclick = function () {
    Swal.fire({
     title: 'سوال!',
     text: 'شما کلیک کردید!',
     icon: 'question',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  d &&
   (d.onclick = function () {
    Swal.fire({
     title: 'یک مُدال!',
     text: 'مدال با عکس سفارشی.',
     imageUrl: assetsPath + 'img/backgrounds/5.jpg',
     imageWidth: 400,
     imageAlt: 'Custom image',
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
    });
   }),
  x &&
   (x.onclick = function () {
    var t;
    Swal.fire({
     title: 'مُدال بسته شونده خودکار!',
     html: 'در <span class="fw-medium">2</span> ثانیه دیگر بسته خواهد شد.',
     timer: 2e3,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     confirmButtonText: 'باشه',
     buttonsStyling: !1,
     willOpen: function () {
      Swal.showLoading(),
       (t = setInterval(function () {
        Swal.getHtmlContainer().querySelector('strong').textContent =
         Swal.getTimerLeft();
       }, 100));
     },
     willClose: function () {
      clearInterval(t);
     },
    }).then(function (e) {
     e.dismiss === Swal.DismissReason.timer &&
      console.log('I was closed by the timer');
    });
   }),
  C &&
   (C.onclick = function () {
    Swal.fire({
     title: 'پیام مُدال',
     text: 'برای بسته شدن بیرون کادر کلیک کنید!',
     backdrop: !0,
     confirmButtonText: 'باشه',
     allowOutsideClick: !0,
     customClass: { confirmButton: 'btn btn-primary waves-effect waves-light' },
     buttonsStyling: !1,
    });
   }),
  T &&
   (T.onclick = function () {
    const t = ['1', '2', '3'],
     e = Swal.mixin({
      confirmButtonText: 'بعدی',
      cancelButtonText: 'قبلی',
      closeButtonText: 'بازگشت',
      progressSteps: t,
      input: 'text',
      inputAttributes: { required: !0 },
      validationMessage: 'این فیلد الزامی است',
     });
    async function I() {
     const A = [];
     let n;
     for (n = 0; n < t.length; ) {
      const o = await new e({
       title: 'سوال ' + t[n],
       showCancelButton: n > 0,
       currentProgressStep: n,
      });
      o.value ? ((A[n] = o.value), n++) : o.dismiss === 'cancel' && n--;
     }
     Swal.fire(JSON.stringify(A));
    }
    I();
   }),
  k &&
   (k.onclick = function () {
    Swal.fire({
     text: 'نام کاربری گیتهاب وارد کنید',
     input: 'text',
     inputAttributes: { autocapitalize: 'off' },
     showCancelButton: !0,
     confirmButtonText: 'بررسی',
     cancelButtonText: 'بازگشت',
     showLoaderOnConfirm: !0,
     customClass: {
      confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
      cancelButton: 'btn btn-label-danger waves-effect waves-light',
     },
     preConfirm: (t) =>
      fetch('//api.github.com/users/' + t)
       .then((e) => {
        if (!e.ok) throw new Error(e.statusText);
        return e.json();
       })
       .catch((e) => {
        Swal.showValidationMessage('درخواست ناموفق:' + e);
       }),
     backdrop: !0,
     allowOutsideClick: () => !Swal.isLoading(),
    }).then((t) => {
     t.isConfirmed &&
      Swal.fire({
       title: t.value.login + "'s avatar",
       imageUrl: t.value.avatar_url,
       customClass: {
        confirmButtonText: 'بسته شدن!',
        confirmButton: 'btn btn-primary waves-effect waves-light',
       },
      });
    });
   }),
  q &&
   (q.onclick = function () {
    Swal.fire({
     title: 'مطمئنی؟',
     text: 'این یک پیام مهم است ولی تستی!',
     icon: 'warning',
     cancelButtonText: 'بازگشت',
     showCancelButton: !0,
     confirmButtonText: 'بله, حذف شود!',
     customClass: {
      confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    }).then(function (t) {
     t.value &&
      Swal.fire({
       icon: 'success',
       title: 'حذف شد!',
       confirmButtonText: 'باشه',
       text: 'فایل مورد نظرتان با موفقیت حذف شد.',
       customClass: {
        confirmButton: 'btn btn-success waves-effect waves-light',
       },
      });
    });
   }),
  _ &&
   (_.onclick = function () {
    Swal.fire({
     title: 'مطمئنی؟',
     text: 'این یک پیام مهم است ولی تستی!',
     icon: 'warning',
     showCancelButton: !0,
     confirmButtonText: 'بله, حذف شود!',
     cancelButtonText: 'بازگشت',
     customClass: {
      confirmButton: 'btn btn-primary me-3 waves-effect waves-light',
      cancelButton: 'btn btn-label-secondary waves-effect waves-light',
     },
     buttonsStyling: !1,
    }).then(function (t) {
     t.value
      ? Swal.fire({
         icon: 'success',
         title: 'حذف شد!',
         confirmButtonText: 'باشه',
         text: 'فایل مورد نظرتان با موفقیت حذف شد.',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        })
      : t.dismiss === Swal.DismissReason.cancel &&
        Swal.fire({
         title: 'لغو شده',
         text: 'فایل تخیلی ما حذف نشد :)',
         icon: 'error',
         confirmButtonText: 'باشه',
         customClass: {
          confirmButton: 'btn btn-success waves-effect waves-light',
         },
        });
    });
   });
})();
