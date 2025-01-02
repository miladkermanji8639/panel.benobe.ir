@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/turn/schedule/schedule-setting/my-special-days.css') }}"
  rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
@section('bread-crumb-title', 'تعطیلات و نوبت دهی روز های خاص')
<div class="container calendar mt-2">
 <div class="calendar-header w-100 d-flex justify-content-between align-items-center gap-4">
  <div class="">
   <button id="prev-month" class="btn btn-light">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <g id="Arrow / Chevron_Right_MD">
      <path id="Vector" d="M10 8L14 12L10 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" />
     </g>
    </svg>
   </button>
  </div>
  <div class="w-100">
   <select id="year" class="form-select w-100 bg-light border-0"></select>
  </div>
  <div class="w-100">
   <select id="month" class="form-select w-100 bg-light border-0"></select>
  </div>
  <div class="">
   <button id="next-month" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none">
     <g id="Arrow / Chevron_Left_MD">
      <path id="Vector" d="M14 16L10 12L14 8" stroke="#000000" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" />
     </g>
    </svg>
   </button>
  </div>
 </div>
 <div class="calendar-body calendar-body-g-425"> <!-- عناوین روزهای هفته -->
  <div class="calendar-day-name text-center">شنبه</div>
  <div class="calendar-day-name text-center">یک‌شنبه</div>
  <div class="calendar-day-name text-center">دوشنبه</div>
  <div class="calendar-day-name text-center">سه‌شنبه</div>
  <div class="calendar-day-name text-center">چهارشنبه</div>
  <div class="calendar-day-name text-center">پنج‌شنبه</div>
  <div class="calendar-day-name text-center">جمعه</div>
 </div>
 <div class="calendar-body-425 d-none"> <!-- عناوین روزهای هفته -->
  <div class="calendar-day-name text-center">ش</div>
  <div class="calendar-day-name text-center">ی</div>
  <div class="calendar-day-name text-center">د</div>
  <div class="calendar-day-name text-center">س</div>
  <div class="calendar-day-name text-center">چ</div>
  <div class="calendar-day-name text-center">پ</div>
  <div class="calendar-day-name text-center">ج</div>
 </div>
 <div class="calendar-body" id="calendar-body"> <!-- تقویم در اینجا بارگذاری می‌شود --> </div>
</div> <!-- Modal -->
<div class="modal fade" id="dateModal" tabindex="-1" aria-labelledby="dateModalLabel" aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h6 class="modal-title" id="dateModalLabel">تاریخ</h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    {{-- show when nothing nobat for this day --}}
    <div class="not-appointment d-none">
     <div class="alert alert-info font-weight-bold font-size-13 px-2 py-3">پزشک گرامی شما برای این روز نوبت فعالی ندارید
      آیا میخواهید این روز را تعطیل کنید؟؟
     </div>
     <div class="w-100 d-flex justify-content-between  gap-4">
      <div class="w-100">
       <button type="button" class="btn btn-primary h-50 w-100" data-bs-dismiss="modal">بله</button>
      </div>
      <div class="w-100">
       <button type="button" class="btn btn-danger h-50 w-100" class="close" data-dismiss="modal"
        aria-label="Close">خیر</button>
      </div>
     </div>
    </div>
    {{-- show when nothing nobat for this day --}}
    {{-- show when having nobat for this day --}}
    <div class="having-nobat-for-this-day">
     <div class="alert alert-info font-weight-bold font-size-13 px-2 py-3">پزشک گرامی شما برای این روز نوبت فعال دارید
      آیا میخواهید این روز را تعطیل کنید؟؟
      <h6 class="font-weight-bold text-let mt-3">نوبت های فعال</h6>
      <span class="btn btn-light">یکشنبه 9 الی 16</span>
      <span class="btn btn-light">یکشنبه 17 الی 22</span>
     </div>
     <div class="w-100 d-flex justify-content-center gap-10">
      <button class="btn btn-danger cancle-btn-appointment h-50 w-100">لغو نوبت ها</button>
      <button class="btn btn-secondary btn-reschedule h-50 w-100">جابجایی نوبت ها</button>
     </div>
     <div class="w-100 d-flex justify-content-between  gap-4 mt-3">
      <div class="w-100">
       <button type="button" class="btn btn-primary h-50 w-100" data-bs-dismiss="modal">ذخیره</button>
      </div>
     </div>
    </div>
    {{-- show when having nobat for this day --}}
   </div>
  </div>
 </div>
</div>
<!-- جابجایی نوبت Modal -->
<div class="modal  fade" id="rescheduleModal" tabindex="-1" aria-labelledby="rescheduleModalLabel"
 aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content border-radius-8">
   <div class="modal-header">
    <h6 class="modal-title" id="rescheduleModalLabel">جابجایی نوبت</h6>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body">
    <p class="font-weight-bold">لطفا یک روز جدید را انتخاب کنید:</p>
    <div class="calendar-header w-100 d-flex justify-content-between align-items-center gap-4">
     <div class="">
      <button id="prev-month-reschedule" class="btn btn-light">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g id="Arrow / Chevron_Right_MD">
         <path id="Vector" d="M10 8L14 12L10 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
        </g>
       </svg>
      </button>
     </div>
     <div class="w-100">
      <select id="year-reschedule" class="form-select w-100 bg-light border-0"></select>
     </div>
     <div class="w-100">
      <select id="month-reschedule" class="form-select w-100 bg-light border-0"></select>
     </div>
     <div class="">
      <button id="next-month-reschedule" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g id="Arrow / Chevron_Left_MD">
         <path id="Vector" d="M14 16L10 12L14 8" stroke="#000000" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
        </g>
       </svg>
      </button>
     </div>
    </div>
    <div class="w-100 d-flex justify-content-end">
     <button id="goToFirstAvailable" class="btn btn-light w-100 border">برو به اولین نوبت خالی</button>
    </div>
    <div id="calendar-reschedule" class="calendar-body"></div>
    <div class="w-100 d-flex justify-content-between gap-4 mt-3">
     <button type="button" class="btn btn-primary h-50 w-100" id="confirmReschedule">تأیید</button>
     <button type="button" class="btn btn-danger h-50 w-100" class="close" data-dismiss="modal"
      aria-label="Close">انصراف</button>
    </div>
   </div>
  </div>
 </div>
</div>
@endsection
@section('scripts')
<script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
<script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
<script>
 var appointmentsSearchUrl = "{{ route('search.appointments') }}";
 var updateStatusAppointmentUrl =
  "{{ route('updateStatusAppointment', ':id') }}";
</script>
<script>
 document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('showModal')) {
   // فرض کنید ID مودال شما "activation-modal" است
   $('#activation-modal').modal('show');
  }
 });
</script>
<script src="https://cdn.jsdelivr.net/npm/jalali-moment/dist/jalali-moment.browser.js"></script>
<script>
 $(document).ready(function() {
  let selectedDay = null;

  function generateCalendar(year, month) {
   const calendarBody = $('#calendar-body');
   calendarBody.empty();
   const today = moment().startOf('day').locale('fa');
   const firstDayOfMonth = moment(`${year}-${month}-01`, 'jYYYY-jMM-jDD').locale('fa').startOf('month');
   const daysInMonth = firstDayOfMonth.jDaysInMonth();
   let firstDayWeekday = firstDayOfMonth.weekday();
   for (let i = 0; i < firstDayWeekday; i++) {
    calendarBody.append('<div class="calendar-day empty"></div>');
   }
   for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = firstDayOfMonth.clone().add(day - 1, 'days');
    const isFriday = currentDay.day() === 5;
    const isActive = currentDay.isSame(today, 'day');
    const dayClass = `calendar-day ${isFriday ? 'friday' : ''} ${isActive ? 'active' : ''}`;
    const dayElement = `
                <div class="${dayClass} position-relative" data-date="${currentDay.format('jYYYY-jMM-jDD')}">

                    <span>${currentDay.format('jD')} <span class="d-none-425">${currentDay.format('jMMMM')}</span></span>
                    <span class="my-badge-success">2</span>
                </div>
            `;
    calendarBody.append(dayElement);
   }
   attachDayClickEvents();
  }

  function populateSelectBoxes() {
   const yearSelect = $('#year');
   const monthSelect = $('#month');
   const currentYear = moment().jYear();
   const currentMonth = moment().jMonth() + 1;
   for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    yearSelect.append(new Option(year, year));
   }
   const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی",
    "بهمن", "اسفند"
   ];
   for (let month = 1; month <= 12; month++) {
    monthSelect.append(new Option(persianMonths[month - 1], month));
   }
   yearSelect.val(currentYear);
   monthSelect.val(currentMonth);
   yearSelect.change(function() {
    generateCalendar(yearSelect.val(), monthSelect.val());
   });
   monthSelect.change(function() {
    generateCalendar(yearSelect.val(), monthSelect.val());
   });
  }

  function populateRescheduleSelectBoxes() {
   const yearSelect = $('#year-reschedule');
   const monthSelect = $('#month-reschedule');
   const currentYear = moment().jYear();
   const currentMonth = moment().jMonth() + 1;
   // پر کردن سال‌ها
   for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    yearSelect.append(new Option(year, year));
   }
   // پر کردن ماه‌ها
   const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی",
    "بهمن", "اسفند"
   ];
   for (let month = 1; month <= 12; month++) {
    monthSelect.append(new Option(persianMonths[month - 1], month));
   }
   yearSelect.val(currentYear);
   monthSelect.val(currentMonth);
   yearSelect.change(function() {
    generateRescheduleCalendar(yearSelect.val(), monthSelect.val());
   });
   monthSelect.change(function() {
    generateRescheduleCalendar(yearSelect.val(), monthSelect.val());
   });
  }

  function attachDayClickEvents() {
   $('.calendar-day').not('.empty').click(function() {
    if (selectedDay) {
     selectedDay.removeClass('selected');
    }
    selectedDay = $(this);
    selectedDay.addClass('selected');
    const selectedDate = selectedDay.data('date');
    $('#dateModalLabel').text(
     `نوبت های ${moment(selectedDate, 'jYYYY-jMM-jDD').locale('fa').format('jD jMMMM jYYYY')}`
    );
    $('#dateModal').modal('show');
   });
   // Modal for Appointment Reschedule
   $('.btn-warning').click(function() {
    $('#rescheduleModal').modal('show');
   });
  }
  $('#prev-month').click(function() {
   const yearSelect = $('#year');
   const monthSelect = $('#month');
   const currentMonth = parseInt(monthSelect.val());
   if (currentMonth === 1) {
    yearSelect.val(parseInt(yearSelect.val()) - 1).change();
    monthSelect.val(12).change();
   } else {
    monthSelect.val(currentMonth - 1).change();
   }
  });
  $('#next-month').click(function() {
   const yearSelect = $('#year');
   const monthSelect = $('#month');
   const currentMonth = parseInt(monthSelect.val());
   if (currentMonth === 12) {
    yearSelect.val(parseInt(yearSelect.val()) + 1).change();
    monthSelect.val(1).change();
   } else {
    monthSelect.val(currentMonth + 1).change();
   }
  });
  populateSelectBoxes();
  generateCalendar(moment().jYear(), moment().jMonth() + 1);
  $('.cancle-btn-appointment').click(function() {
   Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: "می‌خواهید نوبت خود را لغو کنید",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'بله، لغو میکنم!',
    cancelButtonText: 'خیر، لغو نمیکنم'
   }).then((result) => {
    if (result.isConfirmed) {}
   });
  });
  $('#prev-month-reschedule').click(function() {
   const yearSelect = $('#year-reschedule');
   const monthSelect = $('#month-reschedule');
   const currentMonth = parseInt(monthSelect.val());
   if (currentMonth === 1) {
    yearSelect.val(parseInt(yearSelect.val()) - 1).change();
    monthSelect.val(12).change();
   } else {
    monthSelect.val(currentMonth - 1).change();
   }
   // بروزرسانی تقویم
   generateRescheduleCalendar(yearSelect.val(), monthSelect.val());
  });
  $('#next-month-reschedule').click(function() {
   const yearSelect = $('#year-reschedule');
   const monthSelect = $('#month-reschedule');
   const currentMonth = parseInt(monthSelect.val());
   if (currentMonth === 12) {
    yearSelect.val(parseInt(yearSelect.val()) + 1).change();
    monthSelect.val(1).change();
   } else {
    monthSelect.val(currentMonth + 1).change();
   }
   // بروزرسانی تقویم
   generateRescheduleCalendar(yearSelect.val(), monthSelect.val());
  });
  // Modal for Appointment Reschedule
  $('.btn-reschedule').click(function() {
   $('#rescheduleModal').modal('show');
   const selectedDate = selectedDay.data('date'); // تاریخ انتخاب شده از تقویم اصلی
   const selectedMoment = moment(selectedDate, 'jYYYY-jMM-jDD').locale('fa');
   const selectedYear = selectedMoment.jYear();
   const selectedMonth = selectedMoment.jMonth() + 1; // ماه به صورت 1 تا 12
   populateRescheduleSelectBoxes(); // پر کردن سلکت باکس‌ها
   generateRescheduleCalendar(selectedYear, selectedMonth); // تولید تقویم برای جابجایی
  });
  // Function to generate a calendar for rescheduling appointments
  // هماهنگی تاریخ‌ها در مدال جابجایی نوبت
  function generateRescheduleCalendar(year, month) {
   const rescheduleCalendarBody = $('#calendar-reschedule');
   rescheduleCalendarBody.empty();
   // اضافه کردن هدر روزهای هفته
   const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
   weekDays.forEach(day => {
    rescheduleCalendarBody.append(
     `<div class="calendar-day-name text-center font-size-13 font-weight-bold">${day}</div>`);
   });
   const firstDayOfMonth = moment(`${year}-${month}-01`, 'jYYYY-jMM-jDD').locale('fa').startOf('month');
   const daysInMonth = firstDayOfMonth.jDaysInMonth();
   let firstDayWeekday = firstDayOfMonth.weekday();
   for (let i = 0; i < firstDayWeekday; i++) {
    rescheduleCalendarBody.append('<div class="calendar-day empty"></div>');
   }
   for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = firstDayOfMonth.clone().add(day - 1, 'days');
    const dayElement = `
           <div class="calendar-day position-relative w-auto h-auto" data-date="${currentDay.format('jYYYY-jMM-jDD')}">

               <span class="">${currentDay.format('jD')}</span> <span class="d-none-768">${currentDay.format('jMMMM')}</span>
               <span class="my-sm-badge-success">2</span>
           </div>
       `;
    rescheduleCalendarBody.append(dayElement);
   }
   attachRescheduleDayClickEvents();
  }

  function attachRescheduleDayClickEvents() {
   $('#calendar-reschedule .calendar-day').click(function() {
    $('.calendar-day').removeClass('active'); // حذف کلاس فعال از همه روزها
    $(this).addClass('active'); // اضافه کردن کلاس فعال به روز انتخابی
    const selectedDate = $(this).data('date');
    // نمایش SweetAlert برای تأیید جابجایی
    Swal.fire({
     title: 'تایید جابجایی نوبت',
     text: `آیا مطمئن هستید که نوبت به تاریخ ${moment(selectedDate, 'jYYYY-jMM-jDD').locale('fa').format('jD jMMMM jYYYY')} جابجا شود؟`,
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'بله، جابجا کن!',
     cancelButtonText: 'خیر، انصراف'
    }).then((result) => {
     if (result.isConfirmed) {
      // منطق جابجایی نوبت
      $('#rescheduleModal').modal('hide');
      Swal.fire("نوبت با موفقیت جابجا شد!", {
       title: 'نوبت با موفقیت جابجا شد!',
       icon: 'success',
       confirmButtonText: 'باشه'
      });
     }
    });
   });
  }
 });
</script>
@endsection
