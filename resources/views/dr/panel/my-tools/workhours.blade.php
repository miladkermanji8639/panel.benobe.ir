{{-- resources\views\dr\panel\my-tools\workhours.blade.php --}}
<script>
 function fixModalBehavior() {
  $(document).on('show.bs.modal', '.modal', function() {
   // حذف هر backdrop قبلی
   $('.modal-backdrop').remove();
  });

  $(document).on('hidden.bs.modal', '.modal', function() {
   // حذف backdrop
   $('.modal-backdrop').remove();

   // حل مشکل اسکرول
   $('body').removeClass('modal-open');
  });

  // حل مشکل چندگانه باز شدن مودال
  $(document).on('click', '[data-toggle="modal"]', function() {
   // بستن تمام مودال‌های باز
   $('.modal.show').modal('hide');
  });
 }

 // فراخوانی تابع در زمان بارگذاری
 $(document).ready(function() {
  fixModalBehavior();
 });
 $(document).on('click', '.modal [data-dismiss="modal"]', function() {
    $(this).closest('.modal').modal('hide');
});
 $(document).on('change', '#select-all-copy-modal', function() {
  const isChecked = $(this).is(':checked');
  $('#checkboxModal input[type="checkbox"]').not(this).prop('checked', isChecked);
 });
function validateTimeSlot(startTime, endTime) {
    // تبدیل زمان‌ها به دقیقه
    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);

    // بررسی اینکه زمان پایان از زمان شروع بزرگتر باشد
    if (startMinutes >= endMinutes) {
        Toastify({
            text: 'زمان پایان باید بزرگتر از زمان شروع باشد',
            duration: 3000,
            gravity: "top",
            position: 'right',
            style: {
                background: "red"
            }
        }).showToast();
        return false;
    }

    // بررسی تداخل با اسلات‌های موجود
    const existingSlots = $(`#morning-${day}-details .form-row`);
    let hasConflict = false;

    existingSlots.each(function() {
        const existingStart = $(this).find('.start-time').val();
        const existingEnd = $(this).find('.end-time').val();

        if (isTimeConflict(startTime, endTime, existingStart, existingEnd)) {
            hasConflict = true;
            return false; // خروج از حلقه
        }
    });

    if (hasConflict) {
        Toastify({
            text: 'این بازه زمانی با اسلات‌های موجود تداخل دارد',
            duration: 3000,
            gravity: "top",
            position: 'right',
            style: {
                background: "red"
            }
        }).showToast();
        return false;
    }

    return true;
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function isTimeConflict(newStart, newEnd, existingStart, existingEnd) {
    const newStartMinutes = timeToMinutes(newStart);
    const newEndMinutes = timeToMinutes(newEnd);
    const existingStartMinutes = timeToMinutes(existingStart);
    const existingEndMinutes = timeToMinutes(existingEnd);

    return (
        (newStartMinutes < existingEndMinutes && newEndMinutes > existingStartMinutes)
    );
}

 function initializeTimepicker() {
  const DOMElement = $(".timepicker-ui");
  const options = {
   clockType: '24h',
   theme: 'basic',
   mobile: true,
   enableScrollbar: true,
   disableTimeRangeValidation: false,
   autoClose: true
  };
  DOMElement.each(function() {
   if (!$(this).data('timepicker-initialized')) { // بررسی اینکه آیا قبلاً راه‌اندازی شده است
    const newTimepicker = new window.tui.TimepickerUI(this, options);
    newTimepicker.create();
    $(this).data('timepicker-initialized', true); // علامت‌گذاری به عنوان راه‌اندازی شده
   }
  });
 }

 $(document).ready(function() {
  setTimeout(() => {
   initializeTimepicker();

  }, 3000);
 });

 $(document).on('dynamicContentLoaded', function() {
  initializeTimepicker(); // Initialize timepicker for dynamically loaded content
 });

 // تابع برای بررسی و فعال/غیرفعال کردن دکمه کپی


 // بررسی وضعیت دکمه کپی برای همه روزها


 // در زمان بارگذاری صفحه
 $(document).on('click', '#saveSelection', function () {
    const sourceDay = 'saturday'; // مقدار روز مبدأ
    const targetDays = [];

    // جمع‌آوری روزهای انتخاب‌شده
    $('#checkboxModal input[type="checkbox"]:checked').each(function () {
      if ($(this).attr('id') !== 'select-all-copy-modal') {
        targetDays.push($(this).attr('id').replace('-copy-modal', ''));
      }
    });

    if (targetDays.length === 0) {
      Toastify({
        text: 'لطفاً حداقل یک روز را انتخاب کنید',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: { background: 'red' }
      }).showToast();
      return;
    }

    showLoading();

    $.ajax({
      url: '{{ route('copy-work-hours') }}',
      method: 'POST',
      data: {
        source_day: sourceDay,
        target_days: targetDays,
        _token: '{{ csrf_token() }}'
      },
      success: function (response) {
        hideLoading();
        Toastify({
          text: 'ساعات کاری با موفقیت کپی شد',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          style: { background: 'green' }
        }).showToast();

        // به‌روزرسانی رابط کاربری برای روزهای مقصد
        response.target_days.forEach(function (day) {
          updateDayUI(day); // به‌روزرسانی UI برای هر روز
        });

        $('#checkboxModal').modal('hide');
      },
      error: function (xhr) {
        hideLoading();
        Toastify({
          text: xhr.responseJSON?.message || 'خطا در کپی کردن ساعت کاری',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          style: { background: 'red' }
        }).showToast();
      }
    });
  });

  // تابع برای به‌روزرسانی رابط کاربری روز مقصد
  function updateDayUI(day) {
      $.ajax({
        url: '{{ route('dr-get-work-schedule') }}',
        method: 'GET',
        success: function (response) {
          const daySchedule = response.workSchedules.find(schedule => schedule.day === day);

          if (daySchedule) {
            $(`#${day}`).prop('checked', true);
            $(`.work-hours-${day}`).removeClass('d-none');

            const $container = $(`#morning-${day}-details`);
            $container.empty(); // حذف اسلات‌های قدیمی

            // افزودن المان پدر (ساختار اصلی روز)
            const parentHtml = createParentHtml(day);
            $container.append(parentHtml);

            // افزودن اسلات‌ها
            let workHours = [];
            if (daySchedule.work_hours) {
              try {
                workHours = JSON.parse(daySchedule.work_hours);
              } catch (error) {
                console.error('Error parsing work_hours:', error);
              }
            }

            workHours.forEach(hour => {
              const slotHtml = createSlotHtml({
                start_time: hour.start,
                end_time: hour.end,
                max_appointments: hour.max_appointments,
                day: day
              });
              $container.append(slotHtml);
            });

            initializeTimepicker(); // راه‌اندازی دوباره تایم‌پیکرها برای اسلات‌ها
          }
        },
        error: function (xhr) {
          Toastify({
            text: 'خطا در به‌روزرسانی ساعات کاری',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: { background: 'red' }
          }).showToast();
        }
      });
    }
  function createParentHtml(day) {
    return `
        <div class="form-row w-100 d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center gap-4 mt-2">
                <div class="form-group position-relative timepicker-ui">
                    <label for="morning-start-${day}" class="label-top-input-special-takhasos">از</label>
                    <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-start-${day}" value="08:00">
                </div>
                <div class="form-group position-relative timepicker-ui">
                    <label for="morning-end-${day}" class="label-top-input-special-takhasos">تا</label>
                    <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-end-${day}" value="12:00">
                </div>
                <div class="form-group col-sm-3 position-relative">
                    <label for="morning-patients-${day}" class="label-top-input-special-takhasos">تعداد نوبت</label>
                    <input type="text" readonly class="form-control h-50 text-center" name="nobat-count" min="0" id="morning-patients-${day}" data-toggle="modal" data-target="#CalculatorModal" data-day="${day}" value="1">
                </div>
                <div class="form-group col-sm-1 position-relative">
                    <button class="btn btn-light btn-sm add-row-btn" data-day="${day}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plasmic-default__svg plasmic_all__FLoMj PlasmicWorkhours_svg__zLXoO__lsZwf lucide lucide-plus" viewBox="0 0 24 24" height="1em" role="img">
                            <path d="M5 12h14m-7-7v14"></path>
                        </svg>
                    </button>
                </div>
                <div class="form-group col-sm-1 position-relative">
                    <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal" data-day="${day}">
                        <img src="${svgUrl}">
                    </button>
                </div>
            </div>
        </div>
    `;
  }
  $(document).on('show.bs.modal', '#checkboxModal', function () {
    // اطمینان از حذف تمام backdropهای موجود
    $('.modal-backdrop').remove();

    // اطمینان از باز شدن تنها یکبار مدال
    $(this).off('click'); // حذف هرگونه رویداد کلیک اضافی
  });

  $(document).on('hidden.bs.modal', '#checkboxModal', function () {
    // پاکسازی کامل وضعیت مدال و حذف backdrop
    $(this).find('input[type="checkbox"]').prop('checked', false); // ریست چک‌باکس‌ها
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open'); // اطمینان از عدم باقی‌ماندن کلاس
  });
  $(document).on('click', '.copy-to-other-day-btn', function (e) {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض
    const $button = $(this);

    // غیرفعال کردن موقت دکمه برای جلوگیری از کلیک‌های مکرر
    $button.prop('disabled', true);

    setTimeout(() => {
      $button.prop('disabled', false); // دوباره فعال کردن دکمه بعد از 1 ثانیه
    }, 1000);

    $('#checkboxModal').modal('show');
  });





 // تابع بارگذاری اسلات‌ها
 function loadDaySlots(day, callback) {
  $.ajax({
   url: "{{ route('dr-get-work-schedule') }}",
   method: 'GET',
   success: function(response) {
    const daySchedule = response.workSchedules.find(schedule => schedule.day === day);

    if (daySchedule && daySchedule.slots) {
     const $container = $(`#morning-${day}-details`);

     // حذف تمام ردیف‌های قبلی به جز اولین
     $container.find('.form-row:not(:first)').remove();

     daySchedule.slots.forEach(function(slot) {
      const slotHtml = createSlotHtml(slot, day);
      $container.append(slotHtml);
     });
    }

    if (callback) callback();
   },
   error: function(xhr) {
    console.error('Error loading day slots:', xhr);
   }
  });
 }

 // تابع ایجاد HTML برای اسلات
 function createSlotHtml(slot, day) {
  const startTime = slot.time_slots ? slot.time_slots.start_time : '08:00';
  const endTime = slot.time_slots ? slot.time_slots.end_time : '12:00';
  const maxAppointments = slot.max_appointments || 1;

  return `
    <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${slot.id}">
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
          <button class="btn btn-light btn-sm remove-row-btn" data-slot-id="${slot.id}">
            <img src="${trashSvg}">
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-primary btn-sm h-50" 
          data-toggle="modal" 
          data-target="#scheduleModal" 
          data-day="${day}">
          برنامه باز شدن نوبت‌ها
        </button>
      </div>
    </div>
  `;
 }
 $(document).ready(function() {


  // برای بازگرداندن حالت اولیه مدال
  $(document).on('hidden.bs.modal', '#checkboxModal', function() {
   // نمایش مجدد همه چک‌باکس‌ها
   $('input[type="checkbox"][id$="-copy-modal"]').closest('div').show();
  });
 });

 // هنگام اضافه کردن اسلات ج

 // هنگام کپی کردن


 function initializeMainElement(day) {
  const $mainElement = $(`#morning-${day}-details .form-row:first`);
  const startTime = $mainElement.find('.start-time').val() || '08:00';
  const endTime = $mainElement.find('.end-time').val() || '12:00';
  const maxAppointments = $mainElement.find('.max-appointments').val() || 1;

  $(`#morning-start-${day}`).val(startTime);
  $(`#morning-end-${day}`).val(endTime);
  $(`#morning-patients-${day}`).val(maxAppointments);
 }

 // بعد از بارگذاری اسلات‌ها، المان اصلی را مقداردهی کنید

 // تابع ذخیره‌سازی در localStorage
 function cacheWorkSchedule(data) {
  try {
   // افزودن تاریخ انقضا به داده‌ها
   const cachedData = {
    data: data,
    timestamp: Date.now(),
    // انقضا بعد از 24 ساعت
    expiry: Date.now() + (24 * 60 * 60 * 1000)
   };

   localStorage.setItem('workSchedule', JSON.stringify(cachedData));
  } catch (error) {
   console.error('خطا در ذخیره‌سازی کش:', error);
  }
 }

 // تابع بازیابی از localStorage
 function getCachedWorkSchedule() {
  try {
   const cachedDataString = localStorage.getItem('workSchedule');

   if (!cachedDataString) return null;

   const cachedData = JSON.parse(cachedDataString);

   // بررسی تاریخ انقضا
   if (Date.now() > cachedData.expiry) {
    // حذف داده‌های منقضی شده
    localStorage.removeItem('workSchedule');
    return null;
   }

   return cachedData.data;
  } catch (error) {
   console.error('خطا در بازیابی کش:', error);
   return null;
  }
 }

 // تابع بارگذاری داده‌های کش شده
 function loadCachedSchedule(schedule) {
  try {
   // بازسازی المان اصلی برای هر روز
   schedule.workSchedules.forEach(function(schedule) {
    $(`#${schedule.day}`).prop('checked', schedule.is_working);

    if (schedule.is_working) {
     $(`.work-hours-${schedule.day}`).removeClass('d-none');

     const mainRowHtml = createMainRowHtml(schedule.day);
     $(`#morning-${schedule.day}-details`).html(mainRowHtml);
    } else {
     $(`.work-hours-${schedule.day}`).addClass('d-none');
    }

    // بارگذاری اسلات‌ها
    if (schedule.slots && schedule.slots.length > 0) {
     const $container = $(`#morning-${schedule.day}-details`);

     schedule.slots.forEach(function(slot) {
      const newRow = createSlotHtml(slot, schedule.day);
      $container.append(newRow);
     });
    }
   });

   // تنظیم مقادیر کانفیگ
   if (schedule.appointmentConfig) {
    $('#appointment-toggle').prop('checked', schedule.appointmentConfig.auto_scheduling);
    $('input[name="calendar_days"]').val(schedule.appointmentConfig.calendar_days || 30);
    $('#posible-appointments').prop('checked', schedule.appointmentConfig.online_consultation);
    $('#posible-appointments-inholiday').prop('checked', schedule.appointmentConfig.holiday_availability);
   }

   // مجدداً راه‌اندازی تایم پیکرها
  } catch (error) {
   console.error('خطا در بارگذاری داده‌های کش شده:', error);
  }
 }

 // تابع بارگذاری داده‌های سرور
 function loadWorkSchedule(response) {
  try {
   // بازسازی المان اصلی برای هر روز
   response.workSchedules.forEach(function(schedule) {
    $(`#${schedule.day}`).prop('checked', schedule.is_working);

    if (schedule.is_working) {
     $(`.work-hours-${schedule.day}`).removeClass('d-none');

     const mainRowHtml = createMainRowHtml(schedule.day);
     $(`#morning-${schedule.day}-details`).html(mainRowHtml);
    } else {
     $(`.work-hours-${schedule.day}`).addClass('d-none');
    }

    // بارگذاری اسلات‌ها
    if (schedule.slots && schedule.slots.length > 0) {
     const $container = $(`#morning-${schedule.day}-details`);

     schedule.slots.forEach(function(slot) {
      const newRow = createSlotHtml(slot, schedule.day);
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

   // مجدداً راه‌اندازی تایم پیکرها
  } catch (error) {
   console.error('خطا در بارگذاری داده‌های سرور:', error);
  }
 }

 // تابع ایجاد ردیف اصلی
 function createMainRowHtml(day) {
  return `
    <div class="form-row w-100 d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-start align-items-center gap-4 mt-2">
        <div class="form-group position-relative timepicker-ui">
          <label for="morning-start-${day}" class="label-top-input-special-takhasos">از</label>
          <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-start-${day}" value="08:00">
        </div>
        <div class="form-group position-relative timepicker-ui">
          <label for="morning-end-${day}" class="label-top-input-special-takhasos">تا</label>
          <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-end-${day}" value="12:00">
        </div>
        <div class="form-group col-sm-3 position-relative">
          <label for="morning-patients-${day}" class="label-top-input-special-takhasos">تعداد نوبت</label>
          <input type="text" readonly class="form-control h-50 text-center" name="nobat-count" min="0" id="morning-patients-${day}" data-toggle="modal" data-target="#CalculatorModal" data-day="${day}" value="1">
        </div>
        <div class="form-group col-sm-1 position-relative">
          <button class="btn btn-light btn-sm add-row-btn" data-day="${day}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plasmic-default__svg plasmic_all__FLoMj PlasmicWorkhours_svg__zLXoO__lsZwf lucide lucide-plus" viewBox="0 0 24 24" height="1em" role="img"><path d="M5 12h14m-7-7v14"></path></svg>
          
          </button>
        </div>
        <div class="form-group col-sm-1 position-relative">
          <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal" data-day="${day}">
            <img src="${svgUrl}">
          </button>
        </div>
      </div>
    </div>
  `;
 }

 // تابع ایجاد ردیف اسلات
 function createSlotHtml(slot, day) {
  const startTime = slot.time_slots ? slot.time_slots.start_time : '08:00';
  const endTime = slot.time_slots ? slot.time_slots.end_time : '12:00';
  const maxAppointments = slot.max_appointments || 1;
  return `
    <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${slot.id}">
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
          <button class="btn btn-light btn-sm remove-row-btn" data-slot-id="${slot.id}">
            <img src="${trashSvg}">
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-primary btn-sm h-50" 
          data-toggle="modal" 
          data-target="#scheduleModal" 
          data-day="${day}">
          برنامه باز شدن نوبت‌ها
        </button>
      </div>
    </div>
  `;
 }

 // استفاده از کش
 $(document).ready(function() {
  const cachedSchedule = getCachedWorkSchedule();
  if (cachedSchedule) {
   // بارگذاری داده‌های کش شده
   loadCachedSchedule(cachedSchedule);
  } else {
   // اگر کش وجود ندارد، داده‌ها را از سرور بارگذاری کنید
   $.ajax({
    url: "{{ route('dr-get-work-schedule') }}",
    method: 'GET',
    success: function(response) {
     cacheWorkSchedule(response); // ذخیره‌سازی در کش
     loadWorkSchedule(response); // بارگذاری داده‌ها
    }
   });
  }
 });

 // برای آیکون کپی
 $(document).ready(function() {
  // اگر آیکون کپی کار نمی‌کند، مطمئن شوید که SVG درست لینک شده است
  $('.copy-to-other-day-btn').each(function() {
   $(this).html(`<img src="${svgUrl}" alt="کپی">`);
  });
  $(document).on('click', '.copy-to-other-day-btn', function() {
   const currentDay = $(this).data('day');

   // ابتدا همه چک‌باکس‌ها را ریست کنید
   $('input[type="checkbox"][id$="-copy-modal"]').prop('checked', false);

   // چک باکس انتخاب همه را هم ریست کنید
   $('#select-all-copy-modal').prop('checked', false);

   // مخفی کردن چک‌باکس روز جاری
   $('input[type="checkbox"][id$="-copy-modal"]').each(function() {
    const dayId = $(this).attr('id');
    if (dayId === `${currentDay}-copy-modal`) {
     $(this).closest('div').removeClass('d-flex').css('display', 'none');
    } else {
     $(this).closest('div').addClass('d-flex').css('display', 'flex');
    }
   });
  });

  // در زمان بستن مدال، بازگرداندن حالت اولیه
  $(document).on('hidden.bs.modal', '#checkboxModal', function() {
   // بازگرداندن نمایش تمام روزها
   $('input[type="checkbox"][id$="-copy-modal"]').each(function() {
    $(this).closest('div').addClass('d-flex').css('display', 'flex');
   });

   // ریست کردن چک‌باکس‌ها
   $('input[type="checkbox"][id$="-copy-modal"]').prop('checked', false);
   $('#select-all-copy-modal').prop('checked', false);
  });
 });
 $(document).on('hidden.bs.modal', '#checkboxModal', function() {
  $('.modal-backdrop').remove(); // حذف backdrop
 });

 function setupModalButtons() {
  // لودر برای همه مدال‌ها
  $('[data-modal-submit]').on('click', function() {
   const $button = $(this);
   const $loader = $button.find('.loader');
   const $buttonText = $button.find('.button_text');

   $buttonText.hide();
   $loader.show();

   // عملیات AJAX
   $.ajax({
    // تنظیمات درخواست
    complete: function() {
     $buttonText.show();
     $loader.hide();
    }
   });
  });
 }

 // فراخوانی تابع برای تنظیم دکمه‌های مدال
 $(document).ready(setupModalButtons);
 $(document).on('click', '.add-row-btn', function() {
  const day = $(this).data('day');
  const $container = $(`#morning-${day}-details`);
  const startTime = $(`#morning-start-${day}`).val();
  const endTime = $(`#morning-end-${day}`).val();
  const maxAppointments = $(`#morning-patients-${day}`).val() || 1;

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
    const newRow = `
                <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${response.slot_id}">
                    <div class="d-flex justify-content-start align-items-center gap-4">
                        <div class="form-group position-relative timepicker-ui">
                            <label class="label-top-input-special-takhasos">از</label>
                            <input type="text" class="form-control h-50 timepicker-ui-input  text-center font-weight-bold font-size-13 start-time" value="${startTime}" readonly>
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
                        <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${day}">برنامه باز شدن نوبت‌ها</button>
                    </div>
                </div>
            `;
    $container.append(newRow);
    initializeTimepicker();
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
    
    
    Toastify({
     text: xhr.responseJSON.message,
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

 $(document).on('click', '[data-target="#scheduleModal"]', function() {
  // دریافت روز از والد ردیف
  const $row = $(this).closest('.form-row');
  const $container = $row.closest('[id^="morning-"]');
  const day = $container.attr('id').replace('morning-', '').replace('-details', '');

  const startTime = $row.find('.start-time').val() || '08:00';
  const endTime = $row.find('.end-time').val() || '12:00';
  const maxAppointments = $row.find('.max-appointments').val() || 1;

  const persianDay = getPersianDayName(day);

  // به‌روزرسانی عنوان مدال با اطلاعات دقیق اسلات
  $("#scheduleModalLabel").text(
   `برنامه زمانبندی برای نوبت های ${persianDay} ${startTime} الی ${endTime} (${maxAppointments} نوبت)`
  );

  // تنظیم مقادیر پیش‌فرض برای مدال
  $('#schedule-start').val(startTime);
  $('#schedule-end').val(endTime);

  // پاک کردن چک‌باکس‌های قبلی
  $('input[type="checkbox"][id$="-copy-modal"]').prop('checked', false);
  // چک کردن روز جاری
  $(`#${day}-copy-modal`).prop('checked', true);

  $("#scheduleModal").modal('show');
 });
 // تابع تبدیل نام روز به فارسی (اگر قبلاً تعریف نشده باشد)


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

 });
     function showLoading() {
        $('#work-hours').append(`
            <div class="loading-overlay">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        `);
      }

      function hideLoading() {
        $('.loading-overlay').remove();
      }
 $(document).ready(function() {
  $('#appointment-toggle').on('change', function () {
        const isAutoSchedulingEnabled = $(this).is(':checked');
        showLoading();

        $.ajax({
            url: "{{ route('update-auto-scheduling') }}",
            method: 'POST',
            data: {
                auto_scheduling: isAutoSchedulingEnabled,
                _token: '{{ csrf_token() }}'
            },
            success: function (response) {
                hideLoading();
                Toastify({
                    text: isAutoSchedulingEnabled
                        ? 'نوبت‌دهی خودکار فعال شد'
                        : 'نوبت‌دهی خودکار غیرفعال شد',
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    style: { background: isAutoSchedulingEnabled ? 'green' : 'red' }
                }).showToast();
            },
            error: function () {
                hideLoading();
                $('#appointment-toggle').prop('checked', !isAutoSchedulingEnabled);
                Toastify({
                    text: 'خطا در به‌روزرسانی تنظیمات',
                    duration: 3000,
                    gravity: 'top',
                    position: 'right',
                    style: { background: 'red' }
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
             <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-start-${schedule.day}" value="08:00">
           </div>
           <div class="form-group  position-relative timepicker-ui">
             <label for="morning-end-${schedule.day}" class="label-top-input-special-takhasos">تا</label>
             <input type="text" class="form-control h-50 timepicker-ui-input text-center font-weight-bold font-size-13" id="morning-end-${schedule.day}" value="12:00">
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
             <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal" data-day="${schedule.day}">
               <img src="${svgUrl}">
             </button>
           </div>
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
       const startTime = slot.time_slots ? slot.time_slots.start_time : '08:00';
       const endTime = slot.time_slots ? slot.time_slots.end_time : '12:00';
       const maxAppointments = slot.max_appointments || 1;
       const newRow = `
         <div class="mt-3 form-row d-flex justify-content-between w-100 p-2" data-slot-id="${slot.id}">
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
               <button class="btn btn-light btn-sm remove-row-btn" data-slot-id="${slot.id}">
                 <img src="${trashSvg}">
               </button>
             </div>
           </div>
           <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
               <button type="button" class="btn btn-outline-primary btn-sm h-50" data-toggle="modal" data-target="#scheduleModal" data-day="${slot.day}">برنامه باز شدن نوبت‌ها</button>
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
  return dayNames[day] || day;
 }

 function getSlotInfoForDay(day) {
  const startTime = $(`#morning-start-${day}`).val() || '08:00';
  const endTime = $(`#morning-end-${day}`).val() || '12:00';
  const appointments = $(`#morning-patients-${day}`).val() || 1;

  return {
   startTime,
   endTime,
   appointments
  };
 }

 //appointments code
 $(document).ready(function() {
  const days = [
   "saturday", "sunday", "monday", "tuesday",
   "wednesday", "thursday", "friday"
  ];
  // تبدیل نام روز به فارسی

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
                <button class="btn btn-light btn-sm copy-to-other-day-btn" data-toggle="modal" data-target="#checkboxModal" data-day="${day}">
                  <img src="${svgUrl}">
                </button>
              </div>
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
    countNobat.val(Math.round(newCount)); // قرار دادن مقدار در ورودی
   }
   $("#CalculatorModal").modal("hide"); // بستن مدال
   $("#CalculatorModal").removeClass("show");
   $(".modal-backdrop").remove();
  });

  $(document).on('click', '#saveSchedule', function() {
   const $button = $(this);
   const $loader = $button.find('.loader');
   const $buttonText = $button.find('.button_text');

   const selected_day_choice_fa = $('.badge-time-styles-day.active-hover').text();

   // نقشه تبدیل نام روز فارسی به انگلیسی
   const dayMap = {
    'شنبه': 'saturday',
    'یکشنبه': 'sunday',
    'دوشنبه': 'monday',
    'سه‌شنبه': 'tuesday',
    'چهارشنبه': 'wednesday',
    'پنج‌شنبه': 'thursday',
    'جمعه': 'friday'
   };

   const dayEn = dayMap[selected_day_choice_fa];

   // بررسی اینکه آیا برای این روز تنظیمات قبلی وجود دارد
   const existingSetting = $(`.setting-item[data-day="${dayEn}"]`);

   if (existingSetting.length > 0) {
    Toastify({
     text: `شما از قبل برای ${selected_day_choice_fa} تنظیمات دارید. لطفاً ابتدا تنظیمات قبلی را حذف کنید.`,
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
    return;
   }

   $buttonText.hide();
   $loader.show();

   const scheduleStart = $('#schedule-start').val();
   const scheduleEnd = $('#schedule-end').val();

   const selectedDays = [];
   $('input[type="checkbox"][id$="-copy-modal"]:checked').each(function() {
    const day = $(this).attr('id').replace('-copy-modal', '');
    selectedDays.push(day);
   });

   if (selectedDays.length === 0 || !dayEn) {
    Toastify({
     text: 'لطفاً حداقل یک روز را انتخاب کنید',
     duration: 3000,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();

    $loader.hide();
    $buttonText.show();
    return;
   }

   $.ajax({
    url: "{{ route('save-appointment-settings') }}",
    method: 'POST',
    data: {
     start_time: scheduleStart,
     end_time: scheduleEnd,
     selected_days: selectedDays,
     day: dayEn,
     _token: '{{ csrf_token() }}'
    },
    success: function(response) {
     // بررسی و نمایش مجدد تنظیمات
     checkAllDaysSettings();

     Toastify({
      text: 'تنظیمات با موفقیت ذخیره شد',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();

     $loader.hide();
     $buttonText.show();
    },
    error: function(xhr) {
     Toastify({
      text: xhr.responseJSON.message || 'خطا در ذخیره‌سازی',
      duration: 3000,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();

     $loader.hide();
     $buttonText.show();
    }
   });
  });

  // در زمان باز شدن مدال
  $(document).on('show.bs.modal', '#scheduleModal', function() {
   // بررسی تنظیمات همه روزها
   checkAllDaysSettings();
  });



  // در زمان بارگذاری اولیه
  // حذف تنظیمات با تأیید
  $(document).on('click', '.delete-schedule-setting', function() {
   const $settingItem = $(this).closest('.setting-item');
   const day = $(this).data('day');
   const startTime = $(this).data('start');
   const endTime = $(this).data('end');

   Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: "این تنظیمات حذف خواهد شد!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'بله، حذف شود!',
    cancelButtonText: 'لغو'
   }).then((result) => {
    if (result.isConfirmed) {
     $.ajax({
      url: "{{ route('delete-schedule-setting') }}",
      method: 'POST',
      data: {
       day: day,
       start_time: startTime,
       end_time: endTime,
       _token: '{{ csrf_token() }}'
      },
      success: function(response) {
       // حذف المان تنظیمات
       $settingItem.remove();

       // حذف کلاس اکتیو از روز مربوطه
       const dayMapEn = {
        'saturday': 'شنبه',
        'sunday': 'یکشنبه',
        'monday': 'دوشنبه',
        'tuesday': 'سه‌شنبه',
        'wednesday': 'چهارشنبه',
        'thursday': 'پنج‌شنبه',
        'friday': 'جمعه'
       };

       $(`.badge-time-styles-day:contains('${dayMapEn[day]}')`)
        .removeClass('active-hover');

       Toastify({
        text: 'تنظیمات با موفقیت حذف شد',
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
        text: 'خطا در حذف تنظیمات',
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

  function loadPreviousAppointmentSettings(day) {
   $.ajax({
    url: "{{ route('get-appointment-settings') }}",
    method: 'GET',
    data: {
     day: day
    },
    success: function(response) {
     if (response.status && response.settings) {
      $('#schedule-start').val(response.settings.start_time);
      $('#schedule-end').val(response.settings.end_time);
     }
    }
   });
  }

  function checkAllDaysSettings() {
   $.ajax({
    url: "{{ route('get-all-days-settings') }}",
    method: 'GET',
    success: function(response) {
     // پاک کردن لیست قبلی
     $('.settings-list').remove();

     if (response.status && response.settings) {
      let settingsListHtml = '<div class="mt-3 settings-list">';


      // اضافه کردن کلاس اکتیو به روزهایی که تنظیم دارند
      response.settings.forEach(function(setting) {
       // نقشه تبدیل روز انگلیسی به فارسی
       const dayMapEn = {
        'saturday': 'شنبه',
        'sunday': 'یکشنبه',
        'monday': 'دوشنبه',
        'tuesday': 'سه‌شنبه',
        'wednesday': 'چهارشنبه',
        'thursday': 'پنج‌شنبه',
        'friday': 'جمعه'
       };

       // اضافه کردن کلاس اکتیو به روز مربوطه
       $(`.badge-time-styles-day:contains('${dayMapEn[setting.day]}')`)
        .addClass('active-hover');

       if (setting.start_time && setting.end_time) {
        settingsListHtml += `
    <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2 setting-item" data-day="${setting.day}">
      <span class="font-weight-bold">
        برنامه باز شدن نوبت‌ها برای ${dayMapEn[setting.day]}  از ${setting.start_time} تا ${setting.end_time}
      </span>
      <button class="btn btn-sm btn-light delete-schedule-setting" 
              data-day="${setting.day}" 
              data-start="${setting.start_time}" 
              data-end="${setting.end_time}">
        <img src="${trashSvg}">
      </button>
    </div>
  `;
       }
      });

      settingsListHtml += '</div>';

      // اضافه کردن لیست تنظیمات به بدنه مدال
      $('#scheduleModal .modal-body').append(settingsListHtml);
     }
    },
    error: function() {
     Toastify({
      text: 'خطا در دریافت تنظیمات',
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
  $(document).ready(function() {
   // تابع برای تنظیم وضعیت روزها
   function setupDaySelection() {
    $('.badge-time-styles-day').removeClass('active-hover');

    $('.badge-time-styles-day').on('click', function() {
     $('.badge-time-styles-day').removeClass('active-hover');
     $(this).addClass('active-hover');
     checkDaySettings($(this).text());
    });
   }

   // تابع بررسی تنظیمات روز
   function checkDaySettings(dayName) {
    const dayMap = {
     'شنبه': 'saturday',
     'یکشنبه': 'sunday',
     'دوشنبه': 'monday',
     'سه‌شنبه': 'tuesday',
     'چهارشنبه': 'wednesday',
     'پنج‌شنبه': 'thursday',
     'جمعه': 'friday'
    };

    const dayEn = dayMap[dayName];

    $.ajax({
     url: "{{ route('get-appointment-settings') }}",
     method: 'GET',
     data: {
      day: dayEn
     },
     success: function(response) {
      // پاک کردن لیست قبلی
      $('.settings-list').remove();

      if (response.status && response.settings) {
       // نمایش هشدار و تنظیمات موجود
       let settingsListHtml = '<div class="mt-3 settings-list">';
       settingsListHtml += `
          <div class="alert alert-warning font-size-13 font-weight-bold">
            شما از قبل برای این روز تنظیمات دیگری دارید. 
            لطفاً ابتدا تنظیمات قبلی را حذف کنید سپس اقدام به افزودن تنظیمات جدید نمایید.
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2 setting-item" data-day="${dayEn}">
            <span class="font-weight-bold">
              برنامه باز شدن نوبت‌ها از ${response.settings.start_time} تا ${response.settings.end_time}
            </span>
            <button class="btn btn-sm btn-light delete-schedule-setting" 
                    data-day="${dayEn}" 
                    data-start="${response.settings.start_time}" 
                    data-end="${response.settings.end_time}">
              <img src="${trashSvg}">
            </button>
          </div>
        `;
       settingsListHtml += '</div>';

       // اضافه کردن لیست تنظیمات به بدنه مدال
       $('#scheduleModal .modal-body').append(settingsListHtml);

       // غیرفعال کردن فیلدها و دکمه ذخیره
       $('#schedule-start, #schedule-end').prop('disabled', true);
       $('#saveSchedule')
        .prop('disabled', true)
        .removeClass('btn-primary')
        .addClass('btn-secondary');

       Toastify({
        text: `تنظیمات قبلی برای ${dayName} موجود است`,
        duration: 3000,
        gravity: "top",
        position: 'right',
        style: {
         background: "orange"
        }
       }).showToast();
      } else {
       // فعال کردن فیلدها و دکمه ذخیره
       $('#schedule-start, #schedule-end').prop('disabled', false);
       $('#saveSchedule')
        .prop('disabled', false)
        .removeClass('btn-secondary')
        .addClass('btn-primary');
      }
     },
     error: function() {
      // در صورت خطا، فیلدها و دکمه را فعال کنید
      $('#schedule-start, #schedule-end').prop('disabled', false);
      $('#saveSchedule')
       .prop('disabled', false)
       .removeClass('btn-secondary')
       .addClass('btn-primary');
     }
    });
   }


   // اجرای تابع در زمان بارگذاری
   $(document).ready(function() {
    setupDaySelection();

   });
   // اضافه کردن CSS برای استایل‌دهی


   // بررسی تنظیمات در زمان تغییر مقادیر
   $('#schedule-start, #schedule-end').on('change', function() {
    $('#saveSchedule').prop('disabled', false)
     .removeClass('btn-secondary')
     .addClass('btn-primary');
   });
  });
  // فراخوانی در زمان باز شدن مدال
  $(document).on('show.bs.modal', '#scheduleModal', function(event) {
   const $trigger = $(event.relatedTarget);
   const day = $trigger.data('day');
   loadPreviousAppointmentSettings(day);
  });



  // در زمان بارگذاری صفحه

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
