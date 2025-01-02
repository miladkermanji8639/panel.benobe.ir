$(function () {
 $.datepicker.setDefaults($.datepicker.regional['fa']);
 // داده‌های تعطیلات از JSON
 let holidaysData = {};
 // بارگذاری داده‌های تعطیلات از فایل JSON
 $.getJSON(
  'http://127.0.0.1:8000/dr-assets/panel/js/holidays.json',
  function (data) {
   holidaysData = data; // داده‌ها را به holidaysData انتساب می‌دهیم
   $('#datepicker7').datepicker('refresh'); // بعد از بارگذاری داده‌ها، datepicker را تازه می‌کنیم
  },
 );

 function getPersianMonthName(monthIndex) {
  const monthNames = [
   'فروردین',
   'اردیبهشت',
   'خرداد',
   'تیر',
   'مرداد',
   'شهریور',
   'مهر',
   'آبان',
   'آذر',
   'دی',
   'بهمن',
   'اسفند',
  ];
  return monthNames[monthIndex];
 }

 function getPersianWeekdayName(dayIndex) {
  const weekdayNames = [
   'شنبه',
   'یکشنبه',
   'دوشنبه',
   'سه‌شنبه',
   'چهارشنبه',
   'پنج‌شنبه',
   'جمعه',
  ];
  return weekdayNames[dayIndex];
 }
 // تابع برای بررسی اینکه آیا روز تعطیل است یا نه
 function isHoliday(date) {
  const month = getPersianMonthName(date.getMonth());
  const day = date.getDate();
  const monthHolidays = holidaysData[month];
  if (monthHolidays) {
   return monthHolidays.some(
    (holiday) => parseInt(holiday.day) === day && holiday.isHoliday,
   );
  }
  return false;
 }
 // تابع برای بررسی اینکه آیا روز جمعه است یا نه
 function isFriday(date) {
  return date.getDay() === 5; // روز جمعه
 }
 // تابع برای بررسی تاریخ
 function getHolidayInfo(date) {
  const month = getPersianMonthName(date.getMonth());
  const day = date.getDate();
  const monthHolidays = holidaysData[month];
  if (monthHolidays) {
   return (
    monthHolidays.find((holiday) => parseInt(holiday.day) === day) || null
   );
  }
  return null;
 }
 $(document).ready(function () {
  $('#disabledDays').change(function () {
   if (this.checked) {
    $('#currentDayMonthModal').on('click', function (event) {
     event.preventDefault();
    });
    activateAutoSchedule();
   } else {
    deactivateAutoSchedule();
    setTimeout(() => {
     $('#datepicker7').datepicker('refresh');
    }, 0);
   }
  });

  function activateAutoSchedule() {
   const svgTickExists = typeof svgTick !== 'undefined';
   const svgNotAllowExists = typeof svgNotAllowed !== 'undefined';
   $('#datepicker7 .ui-state-default').each(function () {
    const $parent = $(this).parent();
    $parent.addClass('not-allowed bg-ddd');
    if ($(this).find('svg').length > 1) {
     $(this).find('svg').first().remove();
    }
    // if ($(this).children('svg').length === 1) {
    //   $(this).remove('svg');
    // }
    if (svgTickExists && $(this).children('svg').length < 1) {
     $(this).append(svgTick);
    }
   });
   $('td.has-appointment').removeClass('bg-ddd');
  }

  function deactivateAutoSchedule() {
   $('#datepicker7 .ui-state-default').each(function () {
    const $parent = $(this).parent();
    $parent.removeClass('not-allowed bg-ddd').find('svg').remove();
   });
  }
 });
 const svgNotAllowed = `<svg style="position:absolute;top:57px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24" width="24"><linearGradient id="a"><stop offset="0" stop-color="#7a0000"/><stop offset="1" stop-color="#7a0000" stop-opacity="0"/></linearGradient><filter id="b" color-interpolation-filters="sRGB" height="1.48" width="1.48" x="-.24" y="-.24"><feGaussianBlur stdDeviation="1.6"/></filter><linearGradient id="c" gradientTransform="matrix(0 1 1 0 0 0)" gradientUnits="userSpaceOnUse" x1="4" x2="20" y1="12" y2="12"><stop offset="0" stop-color="#ed5353"/><stop offset="1" stop-color="#c6262e"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="11.947826" x2="11.947826" xlink:href="#a" y1="4.973913" y2="19.07826"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="9.691406" x2="9.691406" xlink:href="#a" y1="15.6" y2="7.57031"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="7.57031" x2="7.57031" xlink:href="#a" y1="17.947826" y2="9.691406"/><path d="m13 5a8 8 0 0 0 -8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0 -8-8zm0 3a5 5 0 0 1 2.30859.57031l-6.740231 6.74024a5 5 0 0 1 -.568359-2.31055 5 5 0 0 1 5-5zm4.43164 2.68945a5 5 0 0 1 .56836 2.31055 5 5 0 0 1 -5 5 5 5 0 0 1 -2.308594-.57031z" filter="url(#b)" opacity=".5" stroke="#000" stroke-linecap="round" stroke-width="2"/><path d="m20 12a8 8 0 0 0 -8-8 8 8 0 0 0 -8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-3 0a5 5 0 0 1 -.57031 2.308594l-6.74024-6.740235a5 5 0 0 1 2.31055-.568359 5 5 0 0 1 5 5zm-2.68945 4.43164a5 5 0 0 1 -2.31055.56836 5 5 0 0 1 -5-5 5 5 0 0 1 .57031-2.308594z" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/><path d="m12 20a8 8 0 0 1 -8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1 -8 8zm0-3a5 5 0 0 0 2.308594-.57031l-6.740235-6.74024a5 5 0 0 0 -.568359 2.31055 5 5 0 0 0 5 5zm4.43164-2.68945a5 5 0 0 0 .56836-2.31055 5 5 0 0 0 -5-5 5 5 0 0 0 -2.308594.57031z" fill="url(#c)"/><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 4.5a7.5000005 7.5000005 0 0 0 -7.5 7.5 7.5000005 7.5000005 0 0 0 7.5 7.5 7.5000005 7.5000005 0 0 0 7.5-7.5 7.5000005 7.5000005 0 0 0 -7.5-7.5z" opacity=".5" stroke="url(#d)"/><path d="m12.152344 6.5039062c1.365715.03724 2.710681.5813237 3.736328 1.6054688 1.873909 1.8753243 2.143157 4.821649.640625 7.005859l-7.6425782-7.6445309c.8188512-.5632931 1.7433652-.877147 2.6796872-.9511719.195067-.015422.390836-.020945.585938-.015625z" opacity=".5" stroke="url(#e)"/><path d="m7.46875 8.8828125 7.644531 7.6445315c-2.183604 1.502115-5.1284367 1.234051-7.003906-.638672-1.873909-1.875324-2.1431567-4.821649-.640625-7.0058595z" opacity=".5" stroke="url(#f)"/></g></svg>`;
 const svgTick = `<svg style="position:absolute;top:57px" viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1em" height="1em" fill="green" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
 $('#currentDayMonthModal').on('hidden.bs.modal', function () {
  fetchAppointments();
 });
 $('#currentDayModal').on('hidden.bs.modal', function () {
  fetchAppointments();
  fetchDisabledDays();
 });
 // تعریف تابع loadAppointments بیرون از onSelect
 function loadAppointments(persianDay) {
  $.ajax({
   url: getAppointmentsUrl,
   type: 'GET',
   data: {
    day: persianDay,
   }, // ارسال تاریخ شمسی
   dataType: 'json',
   success: function (response) {
    var appointmentsList = $('#patterns-list-appointments');
    appointmentsList.empty();
    if (response.manualAppointments.length > 0) {
     $('#no-pattern-message-appointments').addClass('d-none');
     response.manualAppointments.forEach(function (appointment) {
      var gDate = appointment.appointment_date.split('-');
      var jDate = jalaali.toJalaali(
       parseInt(gDate[0]),
       parseInt(gDate[1]),
       parseInt(gDate[2]),
      );
      var dateObj = new Date(appointment.appointment_date);
      var dayOfWeek = dateObj.getDay();
      var persianWeekdayNames = [
       'دوشنبه',
       'سه‌شنبه',
       'چهارشنبه',
       'پنج‌شنبه',
       'جمعه',
       'شنبه',
       'یکشنبه',
      ];
      const row = $(`
                                <tr>
                                    <td>${persianWeekdayNames[dayOfWeek]}</td>
                                    <td>${appointment.start_time}</td>
                                    <td>${appointment.end_time}</td>
                                    <td>${appointment.title ?? 'بدون عنوان'}</td>
                                    <td>${appointment.max_appointments}</td>
                                    <td>${appointment.include_holidays === 1 ? 'بله' : 'خیر'}</td>
                                    <td><button class="btn btn-sm btn-light rounded-circle btn-del-appointments" data-id="${appointment.id}">
                                    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="delete" width="11" height="11" fill="red" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>
                                    </button></td>
                                </tr>
                            `);
      appointmentsList.append(row);
     });
     // اضافه کردن رویداد کلیک به دکمه‌های حذف به صورت delegate
     $('#patterns-list-appointments').off('click', '.btn-del-appointments');
     $('#patterns-list-appointments').on(
      'click',
      '.btn-del-appointments',
      function () {
       var appointmentId = $(this).data('id');
       var deleteUrl = appointmentsDestroy.replace(':id', appointmentId);
       var csrfToken = $('meta[name="csrf-token"]').attr('content');
       // SweetAlert برای تأیید حذف
       Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: 'این عمل غیرقابل بازگشت است!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'خیر، انصراف',
       }).then((result) => {
        if (result.isConfirmed) {
         // درخواست حذف قرار
         $.ajax({
          url: deleteUrl,
          type: 'POST',
          data: {
           _token: csrfToken,
           _method: 'DELETE',
          },
          success: function (response) {
           var gDate = $('#appointments_date').val().split('-');
           // استفاده از jQuery AJAX برای فراخوانی تبدیل تاریخ به میلادی
           $.ajax({
            url: convert_to_gregorian, // آدرس روت مناسب برای تبدیل
            type: 'POST',
            data: {
             year: gDate[0],
             month: gDate[1],
             day: gDate[2],
             _token: $('meta[name="csrf-token"]').attr('content'),
            },
            success: function (convertedResponse) {
             // لاگ گرفتن تاریخ تبدیل شده
             Swal.fire({
              title: 'حذف شد!',
              text: 'نوبت با موفقیت حذف شد.',
              icon: 'success',
              confirmButtonText: 'باشه',
             });
             // به‌روزرسانی لیست نوبت‌ها
             var trustDate = convertedResponse.gregorianDate.split('-');
             if (trustDate[1] < 10) trustDate[1] = '0' + trustDate[1];
             if (trustDate[2] < 10) trustDate[2] = '0' + trustDate[2];
             var fixedDate =
              trustDate[0] + '-' + trustDate[1] + '-' + trustDate[2];
             loadAppointments(fixedDate);
             fetchAppointments();
             fetchDisabledDays();
            },
            error: function (error) {
             // console.error('Error converting date:', error);
            },
           });
          },
          error: function (error) {
           var errorMessage = 'مشکلی پیش آمده است.';
           if (error.responseJSON && error.responseJSON.error) {
            errorMessage = error.responseJSON.error; // گرفتن پیام خطا از پاسخ سرور
           }
           Swal.fire({
            title: 'خطا!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'باشه',
           });
          },
         });
        }
       });
      },
     );
    } else {
     $('#no-pattern-message-appointments').removeClass('d-none');
     $('#no-pattern-message-appointments').show();
    }
    $('#currentDayMonthModal').modal('show');
   },
   error: function (error) {
    // console.error('خطا در گرفتن نوبت‌ها:', error);
   },
  });
 }
 let appointmentDates = [];

 function fetchAppointments() {
  $.ajax({
   url: setActiveCalendarUrl,
   type: 'GET',
   dataType: 'json',
   success: function (response) {
    appointmentDates = response.appointmentsLists.map(
     (appointment) => appointment.appointment_date,
    );
    $('#datepicker7').datepicker('refresh');
   },
   error: function (error) {
    // console.error('خطا در دریافت نوبت‌ها:', error);
   },
  });
 }
 let disabled_days = [];

 function fetchDisabledDays() {
  $.ajax({
   url: disabledDayUrl,
   type: 'GET',
   dataType: 'json',
   success: function (response) {
    if (response.disabled_days && Array.isArray(response.disabled_days)) {
     disabled_days = [];
     response.disabled_days.forEach((disabled_day) => {
      disabled_days.push(disabled_day.dates);
     });
     $('#datepicker7').datepicker('refresh');
    } else {
     // console.warn('No disabled days found in the response.');
    }
   },
   error: function (error) {
    // console.error('خطا در دریافت نوبت‌ها:', error);
   },
  });
 }
 $('#datepicker7').datepicker({
  dateFormat: 'dd/mm/yy',
  beforeShowDay: function (date) {
   const today = new Date().toISOString().split('T')[0];
   const isHolidayDate = isHoliday(date); // روز تعطیل
   const isFridayDate = isFriday(date); // روز جمعه
   const holidayInfo = getHolidayInfo(date); // اطلاعات مربوط به روز
   const dayOfWeek = date.getDay(); // روز هفته (0 = یکشنبه، 6 = شنبه)
   // تبدیل تاریخ شمسی به میلادی برای بررسی
   const persianYear = date.getFullYear();
   const persianMonth = date.getMonth() + 1; // +1 برای تبدیل از 0-11 به 1-12
   const persianDay = date.getDate();
   // انجام درخواست برای دریافت نوبت‌ها
   let formattedDate = `${persianDay} ${getPersianMonthName(persianMonth - 1)} ${persianYear}`;
   const jalaliDateStr = formattedDate;
   // جزییات تاریخ را استخراج کنید
   const [day, monthStr, year] = jalaliDateStr.split(' ');
   const month = {
    فروردین: 1,
    اردیبهشت: 2,
    خرداد: 3,
    تیر: 4,
    مرداد: 5,
    شهریور: 6,
    مهر: 7,
    آبان: 8,
    آذر: 9,
    دی: 10,
    بهمن: 11,
    اسفند: 12,
   }[monthStr];
   // تبدیل به تاریخ میلادی
   const gDate = jalaali.toGregorian(parseInt(year), month, parseInt(day));
   // فرمت YYYY-MM-DD
   const formattedDateNew = `${gDate.gy}-${String(gDate.gm).padStart(2, '0')}-${String(gDate.gd).padStart(2, '0')}`;
   const appointmentCount = appointmentDates.filter(
    (d) => d === formattedDateNew,
   ).length;
   const disabled_daysCount = disabled_days.filter((m) =>
    m.includes(formattedDateNew),
   ).length;
   const title = appointmentCount > 0 ? `${appointmentCount}` : '';
   if ($('#disabledDays').is(':checked') === true) {
    $('#disabledDays').prop('checked', false);
   }
   if (disabled_daysCount > 0) {
    setTimeout(() => {
     $('#datepicker7 .ui-datepicker-calendar td').each(function () {
      const $this = $(this);
      if ($this.find('a').text() === String(persianDay)) {
       $this.find('a').append(svgNotAllowed);
      }
     });
    }, 0);
    return [true, ''];
   } else if (appointmentCount > 0) {
    setTimeout(() => {
     $('#datepicker7 .has-appointment').each(function () {
      const $this = $(this);
      $this.find('a').attr('data-appointment-count', title);
     });
    }, 0);
    return [true, 'has-appointment', title];
   } else if (holidayInfo && holidayInfo.isHoliday) {
    // اگر روز تعطیل است
    return [true, 'holiday', holidayInfo.occasion];
   } else if (dayOfWeek === 5) {
    // اگر روز جمعه است
    return [true, 'friday', 'روز جمعه'];
   } else {
    // سایر روزها نشان داده می‌شوند
    return [true, '', ''];
   }
  },
  onChangeMonthYear: function (year, month, inst) {
   setTimeout(() => {
    $('#datepicker7 .has-appointment a').each(function () {
     const $this = $(this);
     $this.attr('data-appointment-count', appointmentCount);
    });
    $('#datepicker7 .ui-datepicker-calendar td').each(function () {
     const $this = $(this);
     $this.find('a').append(svgNotAllowed);
    });
   }, 0);
   fetchAppointments();
   fetchDisabledDays();
  },
  onSelect: function (dateText, inst) {
   const selectedDate = $(this).datepicker('getDate');
   const day = selectedDate.getDate();
   const month = selectedDate.getMonth();
   const year = selectedDate.getFullYear();
   const dayOfWeek = (selectedDate.getDay() + 1) % 7;
   const persianMonthName = getPersianMonthName(month);
   const persianWeekdayName = getPersianWeekdayName(dayOfWeek); // گرفتن روز فارسی درست
   const currentClickDatePersian = `${persianWeekdayName} ${day} ${persianMonthName} ${year}`;
   $('#exampleModalTitleText').text(currentClickDatePersian);
   $('#currentNobatText').html('لیست نوبت های ' + currentClickDatePersian);
   // ذخیره کردن تاریخ میلادی در اینپوت هیدن
   const formattedDate =
    year +
    '-' +
    (month + 1).toString().padStart(2, '0') +
    '-' +
    day.toString().padStart(2, '0');
   $('#appointments_date').val(formattedDate);
   // نمایش مودال
   if (
    $('#disabledDays').is(':checked') &&
    $('#datepicker7 td').hasClass('not-allowed bg-ddd')
   ) {
    const startTime = '06:00:00';
    $.ajax({
     url: updateDayStatusUrl,
     method: 'POST',
     data: {
      date: formattedDate,
      disabled: true,
      _token: $('meta[name="csrf-token"]').attr('content'),
      start_time: startTime,
     },
     success: function (response) {
      let message = '';
      if (response.status === 'success') {
       if (response.wasDisabled == 'غیرفعال') {
        message = 'الگوی نوبت دهی خودکار برای این روز غیرفعال شد';
        if ($('#disabledDays').is(':checked') === true) {
         $('#disabledDays').prop('checked', false);
        }
       } else {
        message = 'الگوی نوبت دهی برای این روز فعال شد';
        if ($('#disabledDays').is(':checked') === true) {
         $('#disabledDays').prop('checked', false);
        }
       }
       Swal.fire({
        icon: 'success',
        title: 'موفقیت آمیز',
        text: message,
        confirmButtonText: 'باشه',
       });
      } else {
       Swal.fire({
        icon: 'error',
        title: 'خطا',
        text: response.message,
        confirmButtonText: 'باشه',
       });
      }
      fetchDisabledDays();
     },
     error: function (error) {
      let errorMessage = 'مشکلی در بروزرسانی دیتابیس پیش آمده است.';
      if (error.responseJSON && error.responseJSON.message) {
       errorMessage = error.responseJSON.message;
      } else if (error.responseText) {
       errorMessage = error.responseText;
      }
      Swal.fire({
       icon: 'warning',
       title: 'خطا!',
       text: errorMessage,
       confirmButtonText: 'باشه',
      });
     },
    });
    fetchDisabledDays();
    return;
   }

   if ($('#disabledDays').is(':checked') == false) {
    fetchDisabledDays();
   }
   loadAppointments(currentClickDatePersian);
   fetchAppointments();
   fetchDisabledDays();
   // فراخوانی با استفاده از تاریخ شمسی
  },
  // تعریف تابع حذف نوبت در سطح جهانی
  // تابع حذف نوبت که نیاز هست در فایل جاوااسکریپت اصلی هم باشه:
  onDayClick: function (dateText, inst) {
   const selectedDate = $(this).datepicker('getDate'); // تاریخ انتخاب شده را دریافت می‌کنیم
   const holidayInfo = getHolidayInfo(selectedDate); // اطلاعات مربوط به روز
   if (holidayInfo) {
    // نمایش پاپ‌آپ با اطلاعات روز
    const popupContent = `
                    <div class="popup-content">
                        <strong>تاریخ: </strong> ${selectedDate.getDate()} ${getPersianMonthName(selectedDate.getMonth())} ${selectedDate.getFullYear()}<br>
                        <strong>مناسبت: </strong> ${holidayInfo.occasion} <br>
                        <strong>تعطیل: </strong> ${holidayInfo.isHoliday ? 'true' : 'false'}
                    </div>
                `;
    $('#popup').html(popupContent).show(); // فرض می‌کنیم پاپ‌آپ شما با id="popup" وجود دارد
   }
  },
 });
 fetchAppointments();
 fetchDisabledDays();
 // اضافه کردن استایل CSS برای رنگ تعطیل و جمعه
 $('<style>')
  .prop('type', 'text/css')
  .html(
   `
         .holiday a {
             color: rgb(255, 0, 0) !important;  // رنگ قرمز برای ایام تعطیل
             font-weight: bold !important;       // ضخیم کردن
         }
         .friday a {
             color: rgb(255, 0, 0) !important;  // رنگ قرمز برای ایام جمعه
             font-weight: bold !important;       // ضخیم کردن
         }
     `,
  )
  .appendTo('head');
 // افزایش و کاهش تعداد افراد
 var numberOfPeople = 10; // تعداد اولیه
 $('.inputNumber_btn__2PYlq:first-child').on('click', function () {
  numberOfPeople++;
  updateNumberDisplay();
 });
 $('.inputNumber_btn__2PYlq:last-child').on('click', function () {
  if (numberOfPeople > 1) {
   numberOfPeople--;
  }
  updateNumberDisplay();
 });

 function updateNumberDisplay() {
  $('.inputNumber_number__1djBN').text(numberOfPeople);
 }
 // اضافه کردن کلیک برای کارت های روز
 $('.day-calendar-card').on('click', function () {
  var day = $(this).data('day');
  $('#exampleModalLabel').text(day + ' ها');
  $('#currentDayModal').modal('show');
 });
});
// رویداد برای بستن پاپ‌آپ
$(document).on('click', '#popup', function () {
 $(this).hide();
});
// ایجاد تاریخ جلالی فعلی
// $('#datepicker7').datepicker({
//     changeMonth: true, // فعال کردن تغییر ماه
//     changeYear: true,  // فعال کردن تغییر سال
// });
