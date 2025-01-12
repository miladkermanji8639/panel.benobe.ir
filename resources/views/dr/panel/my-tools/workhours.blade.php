{{-- resources\views\dr\panel\my-tools\workhours.blade.php --}}
<script>
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
  // بارگذاری تنظیمات اولیه
  $.ajax({
   url: "{{ route('dr-get-work-schedule') }}",
   method: 'GET',
   success: function(response) {
    // تنظیم تیک روزها
    response.workSchedules.forEach(function(schedule) {
     $(`#${schedule.day}`).prop('checked', schedule.is_working);

     // نمایش بخش مربوط به روز
     if (schedule.is_working) {
      $(`.work-hours-${schedule.day}`).removeClass('d-none');
     }

     // پر کردن ساعات کاری
     if (schedule.work_hours) {
      $(`#morning-start-${schedule.day}`).val(schedule.work_hours.start);
      $(`#morning-end-${schedule.day}`).val(schedule.work_hours.end);
     }

     // بارگذاری اسلات‌ها
     if (schedule.slots && schedule.slots.length > 0) {
      schedule.slots.forEach(function(slot, index) {
       if (index > 0) {
        addNewRow(schedule.day);
       }

       const slotInputs = $(`#morning-${schedule.day}-details .mt-3`).eq(index).find('input');
       slotInputs.eq(0).val(slot.start_time);
       slotInputs.eq(1).val(slot.end_time);
       slotInputs.eq(2).val(slot.max_appointments);
      });
     }
    });

    // تنظیم مقادیر کانفیگ
    if (response.appointmentConfig) {
     $('#appointment-toggle').prop('checked', response.appointmentConfig.auto_scheduling);
     $('input[name="calendar_days"]').val(response.appointmentConfig.calendar_days);
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
    // بررسی اینکه آیا روز تیک خورده است
    if ($(`#${day}`).is(':checked')) {
     data.days[day] = {
      is_working: true,
      work_hours: {
       start: $(`#morning-start-${day}`).val(),
       end: $(`#morning-end-${day}`).val()
      },
      slots: collectSlots(day)
     };
    }
   });

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
   $(`#morning-${day}-details .mt-3`).each(function() {
    slots.push({
     start_time: $(this).find('input').first().val(),
     end_time: $(this).find('input').eq(1).val(),
     max_appointments: $(this).find('input[name="max-appointments"]').val() || 1
    });
   });
   return slots;
  }

  // گوش دادن به رویداد کلیک برای ذخیره‌سازی
  $('#save-work-schedule').on('click', saveWorkSchedule);
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
   var newRow = `
      <div class="mt-3 d-flex justify-content-between w-100 p-2">
        <div class="form-row d-flex ">
          <div class="d-flex justify-content-start align-items-center gap-4">
            <div class="form-group  position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">از</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" value="08:00">
          </div>
          <div class="form-group  position-relative timepicker-ui">
            <label class="label-top-input-special-takhasos">تا</label>
            <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" value="12:00">
          </div>
          <div class="form-group col-sm-3 position-relative">
            <label class="label-top-input-special-takhasos">تعداد نوبت</label>
            <input type="text" readonly class="form-control h-50 text-center" min="0">
          </div>
          <div class="form-group col-sm-2 position-relative">
            <button class="btn btn-light btn-sm remove-row-btn">
              <img src="${trashSvg}">
            </button>
          </div>
          </div>
        </div>
        <div class="d-flex align-items-center">
               <span class="btn btn-light btn-sm">شنبه ساعت 9 الی 21</span>
        </div>
      </div>
    `;
   $("#morning-" + day + "-details").append(newRow);
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
  $(document).on("click", ".add-row-btn", function() {
   var day = $(this).data("day");
   addNewRow(day);
  });
  $(document).on("click", ".remove-row-btn", function() {
   $(this).closest(".mt-3").remove();
  });
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
  $(document).on("click", "[data-target='#scheduleModal']", function() {
   const day = $(this).data("day"); // دریافت روز انتخاب شده
   const persianDay = day === "saturday" ? "شنبه" :
    day === "sunday" ? "یکشنبه" :
    day === "monday" ? "دوشنبه" :
    day === "tuesday" ? "سه‌شنبه" :
    day === "wednesday" ? "چهارشنبه" :
    day === "thursday" ? "پنج‌شنبه" :
    "جمعه"; // تبدیل روز به فارسی
   $("#scheduleModalLabel").text(`برنامه زمانبندی برای نوبت های ${persianDay}`); // تغییر عنوان مودال
   $("#scheduleModal").modal("show"); // نمایش مودال
  });

  $(document).on("click", "#saveSchedule", function() {
   const scheduleStart = $("#schedule-start").val();
   const scheduleEnd = $("#schedule-end").val();
   const selectedDays = [];

   // دریافت روزهای انتخاب شده
   $('input[type="checkbox"]:checked').each(function() {
    selectedDays.push($(this).attr("id")); // یا هر اقدامی که بخواهید با روزهای انتخاب شده انجام دهید
   });

   console.log("Selected Days:", selectedDays);
   console.log("Schedule Start:", scheduleStart);
   console.log("Schedule End:", scheduleEnd);

   $("#scheduleModal").modal("hide");
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
    <button type="button" class="btn btn-secondary h-50 w-50" data-dismiss="modal">لغو</button>
    <button type="submit" class="btn btn-primary h-50 col-12 d-flex justify-content-center align-items-center"
     id="saveSelection">
     <span class="button_text">ذخیره تغیرات</span>
     <div class="loader"></div>
    </button>
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
        <input type="text" value="{{ old('time-count') }}" class="form-control   text-center h-50 border-radius-0"
         name="time-count">
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
