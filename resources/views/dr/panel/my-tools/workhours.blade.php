{{-- resources\views\dr\panel\my-tools\workhours.blade.php --}}
<script>
 $(document).on('click', '#saveSelection', function() {
  const selectedDays = [];
  const startTime = $('#morning-start-saturday').val(); // فرض بر این است که روز شنبه انتخاب شده
  const endTime = $('#morning-end-saturday').val(); // فرض بر این است که روز شنبه انتخاب شده
  const maxAppointments = $('#morning-patients-saturday').val(); // فرض بر این است که روز شنبه انتخاب شده
  $('input[type="checkbox"]:checked').each(function() {
   selectedDays.push($(this).attr("id").split('-')[0]); // گرفتن نام روز
  });
  // ارسال درخواست AJAX برای کپی کردن مقادیر
  $.ajax({
   url: "{{ route('copy-work-hours') }}", // آدرس روت برای کپی کردن
   method: 'POST',
   data: {
    days: selectedDays,
    start_time: startTime,
    end_time: endTime,
    max_appointments: maxAppointments,
    _token: '{{ csrf_token() }}'
   },
   success: function(response) {
    // نمایش پیام موفقیت
    Toastify({
     text: 'ساعت کاری با موفقیت کپی شد',
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "green"
     }
    }).showToast();
    // به‌روزرسانی UI بر اساس پاسخ
   },
   error: function(xhr) {
    // نمایش پیام خطا
    Toastify({
     text: 'خطا در کپی کردن ساعت کاری',
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
   }
  });
 });
 $(document).on('click', '.add-row-btn', function() {
  const day = $(this).data('day');
  const $container = $(`#morning-${day}-details`);
  // گرفتن مقادیر از المان پدر
  const startTime = $(`#morning-start-${day}`).val();
  const endTime = $(`#morning-end-${day}`).val();
  const maxAppointments = $(`#morning-patients-${day}`).val() || 1;
  // ارسال درخواست برای ذخیره‌سازی
  $.ajax({
   url: "{{ route('save-time-slot') }}",
   method: 'POST',
   data: {
    day: day,
    start_time: startTime,
    end_time: endTime,
    max_appointments: maxAppointments,
    _token: '{{ csrf_token() }}'
   },
   success: function(response) {
    // ایجاد المان جدید با همان استایل قبلی
    const newRow = `
      <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${response.slot_id}">
        <div class="d-flex justify-content-start align-items-center gap-4">
          <div class="form-group position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">از</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 start-time" value="${startTime}" readonly>
          </div>
          <div class="form-group position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">تا</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 end-time" value="${endTime}" readonly>
          </div>
          <div class="form-group col-sm-3 position-relative">
            <label class="label-top-input-special-takhasos">تعداد نوبت</label>
            <input type="text" class="form-control h-50 text-center max-appointments" value="${maxAppointments}" readonly>
          </div>
          <div class="form-group col-sm-2 position-relative">
            <button class="btn btn-light btn-sm remove-row-btn" data-slot-id="${response.slot_id}">
              <img src="${trashSvg}">
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center">
         <div class="d-flex align-items-center">
    <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${day}">برنامه باز شدن نوبت‌ها</button>
</div>
        </div>
      </div>
    `;
    // اضافه کردن به کانتینر
    $container.append(newRow);
    // نمایش توست موفقیت
    Toastify({
     text: 'موفقیت آمیز',
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "green"
     }
    }).showToast();
   },
   error: function(xhr) {
    // نمایش توست خطا
    Toastify({
     text: 'خطا در ذخیره‌سازی  ',
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
   }
  });
 });
 // تابع تبدیل نام روز به فارسی (اگر قبلاً تعریف نشده باشد)
 function getPersianDayName(day) {
  const dayNames = {
   "saturday": "شنبه",
   "sunday": "یکشنبه",
   "monday": "دوشنبه",
   "tuesday": "سه‌شنبه",
   "wednesday": "چهارشنبه",
   "thursday": "پنج‌شنبه",
   "friday": "جمعه"
  };
  return dayNames[day];
 }

 function addNewRow(day) {
  const newRow = `
        <div class="mt-3 form-row d-flex justify-content-between w-100 p-2">
            <div class="d-flex justify-content-start align-items-center gap-4">
                <div class="form-group position-relative timepicker-ui">
                    <label class="label-top-input-special-takhasos">از</label>
                    <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 start-time" value="08:00">
                </div>
                <div class="form-group position-relative timepicker-ui">
                    <label class="label-top-input-special-takhasos">تا</label>
                    <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 end-time" value="12:00">
                </div>
                <div class="form-group col-sm-3 position-relative">
                    <label class="label-top-input-special-takhasos">تعداد نوبت</label>
                    <input type="text" name="max-appointments" class="form-control h-50 text-center max-appointments" min="0" value="1">
                </div>
                <div class="form-group col-sm-2 position-relative">
                    <button class="btn btn-light btn-sm remove-row-btn">
                        <img src="${trashSvg}">
                    </button>
                </div>
            </div>
        </div>
    `;
  const $container = $(`#morning-${day}-details`);
  $container.append(newRow);
 }
 $(document).on('click', '.remove-row-btn', function() {
  const slotId = $(this).data('slot-id');
  Swal.fire({
   title: 'آیا مطمئن هستید؟',
   text: "این عمل قابل بازگشت نیست!",
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'بله، حذف شود!',
   cancelButtonText: 'لغو'
  }).then((result) => {
   if (result.isConfirmed) {
    $.ajax({
     url: "{{ route('appointment.slots.destroy', ':id') }}".replace(':id', slotId),
     method: 'DELETE',
     data: {
      _token: '{{ csrf_token() }}'
     },
     success: function(response) {
      $(`[data-slot-id="${slotId}"]`).remove();
      Toastify({
       text: 'حذف موفقیت آمیز',
       duration: 3000,
       gravity: "top",
       position: 'right',
       style: {
        background: "green"
       }
      }).showToast();
     },
     error: function(xhr) {
      Toastify({
       text: 'خطا در حذف ',
       duration: 3000,
       gravity: "top",
       position: 'right',
       style: {
        background: "red"
       }
      }).showToast();
     }
    });
   }
  });
 });
 $(document).ready(function() {
  // تابع ذخیره‌سازی برنامه کاری
  function saveWorkSchedule() {
   const submitButton = document.getElementById("save-work-schedule")
   const loader = submitButton.querySelector('.loader');
   const buttonText = submitButton.querySelector('.button_text');
   buttonText.style.display = 'none';
   loader.style.display = 'block';
   const data = {
    auto_scheduling: $('#appointment-toggle').is(':checked') ? true : false,
    calendar_days: parseInt($('input[name="calendar_days"]').val()) || 30,
    online_consultation: $('#posible-appointments').is(':checked') ? true : false,
    holiday_availability: $('#posible-appointments-inholiday').is(':checked') ? true : false,
    days: {}
   };
   // جمع‌آوری اطلاعات برای هر روز
   const days = [
    "saturday", "sunday", "monday", "tuesday",
    "wednesday", "thursday", "friday"
   ];
   // فقط روزهای تیک خورده را جمع‌آوری کن
   days.forEach(day => {
    if ($(`#${day}`).is(':checked')) {
     const slots = collectSlots(day);
     data.days[day] = {
      is_working: true,
      work_hours: {
       start: $(`#morning-start-${day}`).val(),
       end: $(`#morning-end-${day}`).val()
      },
      slots: slots
     };
    }
   });
   console.log('Final Data to Send:', data);
   // ارسال درخواست AJAX
   $.ajax({
    url: "{{ route('dr-save-work-schedule') }}",
    method: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    headers: {
     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    success: function(response) {
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     // نمایش پیام موفقیت
     Toastify({
      text: ' تنظیمات با موفقیت ذخیره شد',
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
     if (response.data && response.data.calendar_days) {
      $('input[name="calendar_days"]').val(response.data.calendar_days);
     }
    },
    error: function(xhr) {
     // نمایش خطاهای دقیق
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     if (xhr.responseJSON && xhr.responseJSON.errors || xhr.responseJSON.message) {
      let errorMessage = '';
      $.each(xhr.responseJSON.errors, function(field, messages) {
       errorMessage += messages.join('\n') + '\n';
      });
      // نمایش خطا با SweetAlert
      Toastify({
       text: xhr.responseJSON.message || 'خطا در برقراری ارتباط با سرور',
       duration: 3000,
       title: 'خطا',
       close: true,
       gravity: "top",
       position: 'right',
       style: {
        background: "red"
       }
      }).showToast();
     } else {
      Toastify({
       text: 'خطا در برقراری ارتباط با سرور',
       duration: 3000,
       close: true,
       gravity: "top",
       position: 'right',
       style: {
        background: "red"
       }
      }).showToast();
     }
    }
   });
  }
  // تابع جمع‌آوری اسلات‌ها
  function collectSlots(day) {
   const slots = [];
   $(`#morning-${day}-details .form-row`).each(function() {
    const $row = $(this);
    const startTime = $row.find('.start-time').val();
    const endTime = $row.find('.end-time').val();
    const maxAppointments = $row.find('.max-appointments').val() || 1;
    // فقط اضافه کردن اسلات‌های با زمان شروع و پایان
    if (startTime && endTime) {
     slots.push({
      start_time: startTime,
      end_time: endTime,
      max_appointments: parseInt(maxAppointments)
     });
    }
   });
   return slots;
  }
  // گوش دادن به رویداد کلیک برای ذخیره‌سازی
  $('#save-work-schedule').on('click', saveWorkSchedule);
 });
 $(document).on('click', '[data-toggle="modal"]', function() {
  const targetModal = $(this).data('target');
  $(targetModal).modal('show');
 });
 $(document).on('click', '.close, .btn-secondary', function() {
  $(this).closest('.modal').modal('hide');
 });
 $(document).on('hidden.bs.modal', function() {
  $('.modal-backdrop').remove(); // حذف اوپاسیتی
 });
 $(document).ready(function() {
  // تغییر وضعیت روزهای کاری با AJAX
  $.each(["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"], function(index, day) {
   $(`#${day}`).on('change', function() {
    // تبدیل به 0 یا 1
    const isWorking = $(this).is(':checked') ? 1 : 0;
    $.ajax({
     url: "{{ route('update-work-day-status') }}",
     method: 'POST',
     data: {
      day: day,
      is_working: isWorking, // استفاده از 0 یا 1
      _token: '{{ csrf_token() }}'
     },
     dataType: 'json',
     success: function(response) {
      // نمایش بخش مربوط به روز
      if (isWorking) {
       $(`.work-hours-${day}`).removeClass('d-none');
       Toastify({
        text: `روز ${getPersianDayName(day)} فعال شد`,
        duration: 3000,
        gravity: "top",
        position: 'right',
        style: {
         background: "green"
        }
       }).showToast();
      } else {
       $(`.work-hours-${day}`).addClass('d-none');
       Toastify({
        text: `روز ${getPersianDayName(day)} غیرفعال شد`,
        duration: 3000,
        gravity: "top",
        position: 'right',
        style: {
         background: "red"
        }
       }).showToast();
      }
     },
     error: function(xhr) {
      // برگرداندن چک‌باکس به وضعیت قبلی
      $(`#${day}`).prop('checked', isWorking === 1);
      // نمایش پیغام خطا
      let errorMessage = 'خطا در تغییر وضعیت روز';
      if (xhr.responseJSON && xhr.responseJSON.errors) {
       errorMessage = Object.values(xhr.responseJSON.errors).flat().join('\n');
      } else if (xhr.responseJSON && xhr.responseJSON.message) {
       errorMessage = xhr.responseJSON.message;
      }
      Toastify({
       text: errorMessage,
       duration: 3000,
       gravity: "top",
       position: 'right',
       style: {
        background: "red"
       }
      }).showToast();
     }
    });
   });
  });
  // تابع تبدیل نام روز به فارسی
  function getPersianDayName(day) {
   const dayNames = {
    "saturday": "شنبه",
    "sunday": "یکشنبه",
    "monday": "دوشنبه",
    "tuesday": "سه‌شنبه",
    "wednesday": "چهارشنبه",
    "thursday": "پنج‌شنبه",
    "friday": "جمعه"
   };
   return dayNames[day];
  }
 });
 $(document).ready(function() {
  $('#appointment-toggle').on('change', function() {
   const isAutoSchedulingEnabled = $(this).is(':checked') ? 1 : 0;
   $.ajax({
    url: '{{ route('update-auto-scheduling') }}',
    method: 'POST',
    data: {
     auto_scheduling: isAutoSchedulingEnabled,
     _token: '{{ csrf_token() }}'
    },
    dataType: 'json',
    success: function(response) {
     Toastify({
      text: isAutoSchedulingEnabled ?
       'نوبت دهی خودکار فعال شد' : 'نوبت دهی خودکار غیرفعال شد',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: isAutoSchedulingEnabled ? "green" : "red"
      }
     }).showToast();
    },
    error: function(xhr) {
     // Revert toggle if update fails
     $('#appointment-toggle').prop('checked', !isAutoSchedulingEnabled);
     // Show error message
     Toastify({
      text: xhr.responseJSON.message || 'خطا در به‌روزرسانی تنظیمات',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   });
  });
 });
 $(document).ready(function() {
  $.ajax({
   url: "{{ route('dr-get-work-schedule') }}",
   method: 'GET',
   success: function(response) {
    // بازسازی المان اصلی برای هر روز
    response.workSchedules.forEach(function(schedule) {
     $(`#${schedule.day}`).prop('checked', schedule.is_working);
     if (schedule.is_working) {
      $(`.work-hours-${schedule.day}`).removeClass('d-none');
      // بازسازی کامل المان اصلی
      const mainRowHtml = `
       <div class="form-row w-100 d-flex justify-content-between align-items-center">
         <div class="d-flex justify-content-start align-items-center gap-4 mt-2">
           <div class="form-group  position-relative timepicker-ui">
             <label for="morning-start-${schedule.day}" class="label-top-input-special-takhasos">از</label>
             <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-start-${schedule.day}" value="${schedule.work_hours ? schedule.work_hours.start : '08:00'}">
           </div>
           <div class="form-group  position-relative timepicker-ui">
             <label for="morning-end-${schedule.day}" class="label-top-input-special-takhasos">تا</label>
             <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-end-${schedule.day}" value="${schedule.work_hours ? schedule.work_hours.end : '12:00'}">
           </div>
           <div class="form-group col-sm-3 position-relative">
             <label for="morning-patients-${schedule.day}" class="label-top-input-special-takhasos">تعداد نوبت</label>
             <input type="text" readonly class="form-control h-50 text-center" name="nobat-count" min="0" id="morning-patients-${schedule.day}"  data-toggle="modal" data-target="#CalculatorModal" data-day="${schedule.day}" value="1">
           </div>
           <div class="form-group col-sm-1 position-relative">
             <button class="btn btn-light btn-sm add-row-btn" data-day="${schedule.day}">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plasmic-default__svg plasmic_all__FLoMj PlasmicWorkhours_svg__zLXoO__lsZwf lucide lucide-plus" viewBox="0 0 24 24" height="1em" role="img"><path d="M5 12h14m-7-7v14"></path></svg>
             </button>
           </div>
           <div class="form-group col-sm-1 position-relative">
             <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal">
               <img src="${svgUrl}">
             </button>
           </div>
         </div>
         <div class="d-flex align-items-center">
           <button type="button" class="btn btn-light btn-sm h-50">برنامه باز شدن نوبت ها  </button>
         </div>
       </div>
      `;
      $(`#morning-${schedule.day}-details`).html(mainRowHtml);
     } else {
      $(`.work-hours-${schedule.day}`).addClass('d-none');
     }
     // بارگذاری اسلات‌ها
     if (schedule.slots && schedule.slots.length > 0) {
      const $container = $(`#morning-${schedule.day}-details`);
      schedule.slots.forEach(function(slot) {
       const newRow = `
         <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${slot.id}">
           <div class="d-flex justify-content-start align-items-center gap-4">
             <div class="form-group position-relative timepicker-ui">
               <label class="label-top-input-special-takhasos">از</label>
               <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 start-time" value="${slot.start_time || '08:00'}" readonly>
             </div>
             <div class="form-group position-relative timepicker-ui">
               <label class="label-top-input-special-takhasos">تا</label>
               <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 end-time" value="${slot.end_time || '12:00'}" readonly>
             </div>
             <div class="form-group col-sm-3 position-relative">
               <label class="label-top-input-special-takhasos">تعداد نوبت</label>
               <input type="text" class="form-control h-50 text-center max-appointments" value="${slot.max_appointments || 1}" readonly>
             </div>
             <div class="form-group col-sm-2 position-relative">
               <button class="btn btn-light btn-sm remove-row-btn" data-slot-id="${slot.id}">
                 <img src="${trashSvg}">
               </button>
             </div>
           </div>
           <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
    <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${day}">برنامه باز شدن نوبت‌ها</button>
</div>
           </div>
         </div>
       `;
       $container.append(newRow);
      });
     }
    });
    // تنظیم مقادیر کانفیگ
    if (response.appointmentConfig) {
     $('#appointment-toggle').prop('checked', response.appointmentConfig.auto_scheduling);
     $('input[name="calendar_days"]').val(response.appointmentConfig.calendar_days || 30);
     $('#posible-appointments').prop('checked', response.appointmentConfig.online_consultation);
     $('#posible-appointments-inholiday').prop('checked', response.appointmentConfig.holiday_availability);
    }
   },
   error: function() {
    Toastify({
     text: 'خطا در بارگذاری تنظیمات',
     style: {
      background: "red"
     }
    }).showToast();
   }
  });
 });
 $(document).ready(function() {
  // تابع ذخیره‌سازی برنامه کاری
  // تابع جمع‌آوری اسلات‌ها
  function collectSlots(day) {
   const slots = [];
   $(`#morning-${day}-details .form-row`).each(function() {
    const $row = $(this);
    const startTime = $row.find('.start-time').val();
    const endTime = $row.find('.end-time').val();
    const maxAppointments = $row.find('.max-appointments').val() || 1;
    // فقط اضافه کردن اسلات‌های با زمان شروع و پایان
    if (startTime && endTime) {
     slots.push({
      start_time: startTime,
      end_time: endTime,
      max_appointments: parseInt(maxAppointments)
     });
    }
   });
   return slots;
  }
  $(document).on('click', '#save-work-schedule', function() {
   const submitButton = document.getElementById("save-work-schedule")
   const loader = submitButton.querySelector('.loader');
   const buttonText = submitButton.querySelector('.button_text');
   buttonText.style.display = 'none';
   loader.style.display = 'block';
   // ارسال درخواست AJAX و پس از اتمام، نمایش دوباره متن دکمه و مخفی کردن لودر
   $.ajax({
    // تنظیمات AJAX
    success: function(response) {
     buttonText.style.display = 'block';
     loader.style.display = 'none';
    },
    error: function(xhr) {
     buttonText.style.display = 'block';
     loader.style.display = 'none';
    }
   });
  });
 });
 //appointments code
 $(document).ready(function() {
  const days = [
   "saturday", "sunday", "monday", "tuesday",
   "wednesday", "thursday", "friday"
  ];
  // تبدیل نام روز به فارسی
  function getPersianDayName(day) {
   const dayNames = {
    "saturday": "شنبه",
    "sunday": "یکشنبه",
    "monday": "دوشنبه",
    "tuesday": "سه‌شنبه",
    "wednesday": "چهارشنبه",
    "thursday": "پنج‌شنبه",
    "friday": "جمعه"
   };
   return dayNames[day];
  }
  var workHoursHtml = "";
  $.each(days, function(index, day) {
   workHoursHtml += `
      <div class="work-hours-${day} d-none position-relative">
        <div class="border p-3 mt-3 border-radius-4">
          <h6>${day === "saturday" ? "شنبه" : day === "sunday" ? "یکشنبه" : day === "monday" ? "دوشنبه" : day === "tuesday" ? "سه‌شنبه" : day === "wednesday" ? "چهارشنبه" : day === "thursday" ? "پنج‌شنبه" : "جمعه"}</h6>
          <div class="d-flex mt-2 justify-content-start my-copy-item">
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              ${days
                .map((otherDay) => {
                  if (otherDay !== day) {
                    return `<a class="dropdown-item" href="#" data-day="${otherDay}">${otherDay === "saturday" ? "شنبه" : otherDay === "sunday" ? "یکشنبه" : otherDay === "monday" ? "دوشنبه" : otherDay === "tuesday" ? "سه‌شنبه" : otherDay === "wednesday" ? "چهارشنبه" : otherDay === "thursday" ? "پنج‌شنبه" : "جمعه"}</a>`;
                  }
                })
                .join("")}
            </div>
          </div>
          <div id="morning-${day}-details" class="mt-4">
            <div class="form-row w-100 d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-start align-items-center gap-4 mt-2">
                <div class="form-group  position-relative timepicker-ui">
                <label for="morning-start-${day}" class="label-top-input-special-takhasos">از</label>
                <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-start-${day}" value="08:00">
              </div>
              <div class="form-group  position-relative timepicker-ui">
                <label for="morning-end-${day}" class="label-top-input-special-takhasos">تا</label>
                <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-end-${day}" value="12:00">
              </div>
              <div class="form-group col-sm-3 position-relative">
                <label for="morning-patients-${day}" class="label-top-input-special-takhasos">تعداد نوبت</label>
                <input type="text" readonly class="form-control h-50 text-center" name="nobat-count" min="0" id="morning-patients-${day}"  data-toggle="modal" data-target="#CalculatorModal" data-day="${day}">
              </div>
              <div class="form-group col-sm-1 position-relative">
                <button class="btn btn-light btn-sm add-row-btn" data-day="${day}">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plasmic-default__svg plasmic_all__FLoMj PlasmicWorkhours_svg__zLXoO__lsZwf lucide lucide-plus" viewBox="0 0 24 24" height="1em" role="img"><path d="M5 12h14m-7-7v14"></path></svg>
                </button>
              </div>
              <div class="form-group col-sm-1 position-relative">
                <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal">
                  <img src="${svgUrl}">
                </button>
              </div>
              </div>
            <div class="d-flex align-items-center">
               <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${day}">برنامه باز شدن نوبت ها  </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  $("#work-hours").html(workHoursHtml);
  // Function to add a new row
  function addNewRow(day) {
   const newRow = `
      <div class="mt-3 form-row d-flex justify-content-between w-100 p-2">
        <div class="d-flex justify-content-start align-items-center gap-4">
          <div class="form-group position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">از</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 start-time" value="08:00">
          </div>
          <div class="form-group position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">تا</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13 end-time" value="12:00">
          </div>
          <div class="form-group col-sm-3 position-relative">
            <label class="label-top-input-special-takhasos">تعداد نوبت</label>
            <input type="text" name="max-appointments" class="form-control h-50 text-center max-appointments" min="0" value="1">
          </div>
          <div class="form-group col-sm-2 position-relative">
            <button class="btn btn-light btn-sm remove-row-btn">
              <img src="${trashSvg}">
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
    <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${day}">برنامه باز شدن نوبت‌ها</button>
</div>
        </div>
      </div>
    `;
   const $container = $(`#morning-${day}-details`);
   const $newRow = $(newRow);
   // اضافه کردن ردیف جدید
   $container.append($newRow);
   // تنظیم timepicker برای ورودی‌های جدید
   const newTimeInputs = $newRow.find('.timepicker-ui-input');
   newTimeInputs.each(function() {
    const newTimepicker = new window.tui.TimepickerUI(this, {
     clockType: '24h',
     theme: 'basic',
     mobile: 'true',
     enableScrollbar: 'true'
    });
    newTimepicker.create();
   });
  }
  // Manage select all checkbox
  $("#selectAll").on("change", function() {
   var isChecked = $(this).is(":checked");
   $('input[type="checkbox"]').not(this).prop("checked", isChecked);
  });
  // Save selection
  $("#saveSelection").on("click", function() {
   var selectedDays = [];
   $('input[type="checkbox"]:checked').each(function() {
    selectedDays.push($(this).val());
   });
   console.log("Selected days:", selectedDays); // می‌توانید اینجا هر عملی را که می‌خواهید انجام دهید
   $("#checkboxModal").modal("hide"); // بستن مدال
  });
  // Event listeners for adding and removing rows
  $.each(days, function(index, day) {
   $("#" + day).on("change", function() {
    if ($(this).is(":checked")) {
     $(".work-hours-" + day).removeClass("d-none");
    } else {
     $(".work-hours-" + day).addClass("d-none");
    }
   });
  });
 });
 // Function to calculate and update input values
 $(document).ready(function() {
  let morningStart, morningEnd; // متغیر برای ذخیره زمان شروع و پایان
  let totalMinutes; // متغیر برای ذخیره تعداد دقایق
  $(document).on("click", "[data-target='#CalculatorModal']", function() {
   const day = $(this).data("day");
   morningStart = $("#morning-start-" + day).val();
   morningEnd = $("#morning-end-" + day).val();
   $("#saveSelectionCalculator").data("day", day);
   // محاسبه تعداد دقایق
   if (morningStart && morningEnd) {
    const startTimeParts = morningStart.split(":");
    const endTimeParts = morningEnd.split(":");
    const startTimeHours = parseInt(startTimeParts[0]);
    const startTimeMinutes = parseInt(startTimeParts[1]);
    const endTimeHours = parseInt(endTimeParts[0]);
    const endTimeMinutes = parseInt(endTimeParts[1]);
    totalMinutes = (endTimeHours * 60 + endTimeMinutes) - (startTimeHours * 60 + startTimeMinutes);
    // مقداردهی اولیه به ورودی‌های مودال
   } else {
    totalMinutes = 0; // در صورت خالی بودن، تعداد دقایق را صفر قرار می‌دهیم
   }
  });
  // Event listener برای ورودی تعداد
  $(document).on("click", "input[name='appointment-count']", function() {
   $("#count-label-modal").prop("checked", true);
   $("#time-label-modal").prop("checked", false); // غیرفعال کردن چک باکس
  });
  $(document).on("input", "input[name='appointment-count']", function() {
   const countInput = $(this).val();
   const timePerAppointmentInput = $(this).closest('.modal-body').find("input[name='time-count']");
   // بررسی اینکه آیا کاربر عددی وارد کرده است
   if (countInput && !isNaN(countInput) && countInput > 0) {
    const timePerAppointment = totalMinutes / countInput; // محاسبه زمان برای هر نوبت
    timePerAppointmentInput.val(Math.round(timePerAppointment)); // قرار دادن مقدار در ورودی
    // فعال کردن چک باکس مربوطه
    $("#count-label-modal").prop("checked", true);
   } else {
    timePerAppointmentInput.val(""); // اگر ورودی عددی نیست، ورودی زمان را پاک کن
    $("#count-label-modal").prop("checked", false); // غیرفعال کردن چک باکس
   }
  });
  $(document).on("click", "input[name='time-count']", function() {
   $("#count-label-modal").prop("checked", false);
   $("#time-label-modal").prop("checked", true); // غیرفعال کردن چک باکس
  });
  // Event listener برای ورودی زمان هر نوبت
  $(document).on("input", "input[name='time-count']", function() {
   const timePerAppointmentInput = $(this).val();
   const countInput = $(this).closest('.modal-body').find("input[name='appointment-count']");
   // بررسی اینکه آیا کاربر عددی وارد کرده است
   if (timePerAppointmentInput && !isNaN(timePerAppointmentInput) && timePerAppointmentInput > 0) {
    const newCount = totalMinutes / timePerAppointmentInput; // محاسبه تعداد نوبت‌ها
    countInput.val(Math.round(newCount)); // قرار دادن مقدار در ورودی
    // فعال کردن چک باکس مربوطه
    $("#count-label-modal").prop("checked", false); // غیرفعال کردن چک باکس
    $("#time-label-modal").prop("checked", true);
   } else {
    countInput.val(""); // اگر ورودی عددی نیست، ورودی تعداد را پاک کن
    $("#time-label-modal").prop("checked", false); // غیرفعال کردن چک باکس
   }
  });
  $(document).on("click", "#saveSelectionCalculator", function() {
   const timePerAppointmentInput = $("input[name='time-count']").val();
   const countInput = $("input[name='appointment-count']").val();
   // دریافت روز خاصی که در آن هستیم
   const day = $(this).data("day"); // این را اضافه کنید تا روز خاص را بگیرید
   // انتخاب ورودی تعداد نوبت مربوط به آن روز خاص
   const countNobat = $("#morning-patients-" + day); // این را تغییر دهید
   if (timePerAppointmentInput && !isNaN(timePerAppointmentInput) && timePerAppointmentInput > 0) {
    const newCount = totalMinutes / timePerAppointmentInput; // محاسبه تعداد نوبت‌ها
    console.log('newCount : ' + newCount);
    countNobat.val(Math.round(newCount)); // قرار دادن مقدار در ورودی
   }
   $("#CalculatorModal").modal("hide"); // بستن مدال
   $("#CalculatorModal").removeClass("show");
   $(".modal-backdrop").remove();
  });
  $(document).on('click', '[data-target="#scheduleModal"]', function() {
   const day = $(this).data('day'); // دریافت روز انتخاب شده
   const persianDay = day === "saturday" ? "شنبه" :
    day === "sunday" ? "یکشنبه" :
    day === "monday" ? "دوشنبه" :
    day === "tuesday" ? "سه‌شنبه" :
    day === "wednesday" ? "چهارشنبه" :
    day === "thursday" ? "پنج‌شنبه" :
    "جمعه"; // تبدیل روز به فارسی
   $("#scheduleModalLabel").text(`برنامه زمانبندی برای نوبت های ${persianDay}`); // تغییر عنوان مودال
   $("#scheduleModal").modal('show'); // نمایش مودال
  });
  $(document).on('click', '#saveSchedule', function() {
   const scheduleStart = $('#schedule-start').val();
   const scheduleEnd = $('#schedule-end').val();
   const selectedDays = [];
   // دریافت روزهای انتخاب شده
   $('input[type="checkbox"]:checked').each(function() {
    selectedDays.push($(this).attr("id")); // یا هر اقدامی که بخواهید با روزهای انتخاب شده انجام دهید
   });
   $.ajax({
    url: "{{ route('save-schedule') }}",
    method: 'POST',
    data: {
     days: selectedDays,
     start_time: scheduleStart,
     end_time: scheduleEnd,
     _token: '{{ csrf_token() }}'
    },
    success: function(response) {
     Toastify({
      text: 'برنامه باز شدن نوبت‌ها با موفقیت ذخیره شد',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
    },
    error: function(xhr) {
     Toastify({
      text: 'خطا در ذخیره‌سازی برنامه باز شدن نوبت‌ها',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   });
  });
 });
</script>
<div class="modal fade" id="scheduleModal" tabindex="-1" role="dialog" aria-labelledby="scheduleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered my-modal-lg" role="document">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h6 class="modal-title font-weight-bold" id="scheduleModalLabel">برنامه زمانبندی</h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    <div class="">
     <div class="">
      <label class="font-weight-bold text-dark">روزهای کاری</label>
      <div class="mt-2 d-flex flex-wrap gap-10 justify-content-start my-768px-styles-day-and-times">
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day ">شنبه</span><span
         class=""></span>
       </div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">یکشنبه</span><span
         class=""></span>
       </div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">دوشنبه</span><span
         class=""></span>
       </div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">سه‌شنبه</span><span
         class=""></span>
       </div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">چهارشنبه</span><span
         class=""></span></div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">پنج‌شنبه</span><span
         class=""></span></div>
       <div class="" tabindex="0" role="button"><span class="badge-time-styles-day">جمعه</span><span
         class=""></span></div>
      </div>
     </div>
    </div>
    <div class="w-100 d-flex mt-4 gap-4 justify-content-center">
     <div class="form-group position-relative timepicker-ui">
      <label class="label-top-input-special-takhasos">شروع</label>
      <input type="text" class="form-control  h-50 timepicker-ui-input text-center font-weight-bold font-size-13"
       id="schedule-start" value="00:00">
     </div>
     <div class="form-group position-relative timepicker-ui">
      <label class="label-top-input-special-takhasos">پایان</label>
      <input type="text" class="form-control  h-50 timepicker-ui-input text-center font-weight-bold font-size-13"
       id="schedule-end" value="23:59">
     </div>
    </div>
    <div class="w-100 d-flex justify-content-end">
     <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
      id="saveSchedule">
      <span class="button_text">ذخیره تغیرات</span>
      <div class="loader"></div>
     </button>
    </div>
   </div>
  </div>
 </div>
</div>
<div class="modal fade" id="checkboxModal" tabindex="-1" role="dialog" aria-labelledby="checkboxModalLabel"
 aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h6 class="modal-title font-weight-bold" id="checkboxModalLabel"> کپی ساعت کاری برای روز های : </h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    <div class="">
     <div class="d-flex flex-wrap flex-column lh-2 align-items-start gap-4">
      <x-my-check :isChecked="false" id="select-all-copy-modal" day="انتخاب همه" />
      <x-my-check :isChecked="false" id="saturday-copy-modal" day="شنبه" />
      <x-my-check :isChecked="false" id="sunday-copy-modal" day="یکشنبه" />
      <x-my-check :isChecked="false" id="monday-copy-modal" day="دوشنبه" />
      <x-my-check :isChecked="false" id="tuesday-copy-modal" day="سه‌شنبه" />
      <x-my-check :isChecked="false" id="wednesday-copy-modal" day="چهارشنبه" />
      <x-my-check :isChecked="false" id="thursday-copy-modal" day="پنج‌شنبه" />
      <x-my-check :isChecked="false" id="friday-copy-modal" day="جمعه" />
     </div>
    </div>
   </div>
   <div class="w-100 d-flex justify-content-between p-3 gap-4">
    <button type="submit" class="btn btn-primary h-50 col-8 d-flex justify-content-center align-items-center w-100"
     id="saveSelection">
     <span class="button_text">ذخیره تغیرات</span>
     <div class="loader"></div>
    </button>
    <button type="button" class="btn btn-danger h-50 w-50 col-4" data-dismiss="modal">لغو</button>
   </div>
  </div>
 </div>
</div>
<div class="modal fade" id="CalculatorModal" tabindex="-1" role="dialog" aria-labelledby="CalculatorModalLabel"
 aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content border-radius-8" id="calculate-modal">
   <div class="modal-header">
    <h6 class="modal-title font-weight-bold" id="checkboxModalLabel"> انتخاب تعداد نوبت یا زمان ویزیت: </h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    <div class="d-flex align-items-center">
     <div class="d-flex flex-wrap flex-column  align-items-start gap-4">
      <div class="d-flex align-items-center">
       <x-my-check :isChecked="false" id="count-label-modal" day="" />
       <div class="input-group position-relative mx-2">
        <label class="label-top-input-special-takhasos">نوبت ها </label>
        <input type="text" value="{{ old('appointment-count') }}"
         class="form-control   text-center h-50 border-radius-0" name="appointment-count">
        <div class="input-group-append count-span-prepand-style"><span class="input-group-text px-2">نوبت</span></div>
       </div>
      </div>
      <div class="d-flex align-items-center mt-4">
       <x-my-check :isChecked="false" id="time-label-modal" day="" />
       <div class="input-group position-relative mx-2">
        <label class="label-top-input-special-takhasos"> هر نوبت </label>
        <input type="text" value="{{ old('time-count') }}"
         class="form-control   text-center h-50 border-radius-0" name="time-count">
        <div class="input-group-append"><span class="input-group-text px-2">دقیقه</span></div>
       </div>
      </div>
     </div>
    </div>
    <div class="w-100 d-flex justify-content-end p-1 gap-4 mt-3">
     <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
      id="saveSelectionCalculator">
      <span class="button_text">ذخیره تغیرات</span>
      <div class="loader"></div>
     </button>
    </div>
   </div>
  </div>
 </div>
</div>
