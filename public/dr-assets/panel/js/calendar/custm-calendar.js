document.addEventListener('DOMContentLoaded', function () {
 const calendarBody = document.getElementById('calendar-body');
 const today = moment().startOf('day').locale('fa').format('jYYYY/jMM/jDD');
 const selectedDateSpan = document.querySelector('.turning_selectDate__MLRSb span:first-child');
 const calendarButton = document.querySelector('.selectDate_datepicker__xkZeS');
 const calendarModal = document.getElementById('calendarModal');
 calendarButton.onclick = null;
 let modalInstance = null;
 calendarButton.removeEventListener('click', handleCalendarButtonClick);
 function handleCalendarButtonClick(e) {
  e.preventDefault();
  e.stopPropagation();

  // اگر مودال قبلاً ساخته شده، از آن استفاده کن
  if (!modalInstance) {
   modalInstance = new bootstrap.Modal(calendarModal, {
    backdrop: 'static', // جلوگیری از بستن مودال با کلیک خارج از آن
    keyboard: false
   });
  }

  // بستن backdrop‌های قبلی
  const existingBackdrops = document.querySelectorAll('.modal-backdrop');
  existingBackdrops.forEach(backdrop => backdrop.remove());
  document.body.classList.remove('modal-open');

  // نمایش مودال
  modalInstance.show();
 }

 // اضافه کردن رویداد جدید
 calendarButton.addEventListener('click', handleCalendarButtonClick);
 selectedDateSpan.textContent = today;
 function generateCalendar(year, month) {
  // پاک کردن محتوای قبلی
  calendarBody.innerHTML = '';

  // تنظیمات moment برای تاریخ شمسی
  const firstDayOfMonth = moment(`${year}/${month}/01`, 'jYYYY/jMM/jDD').locale('fa');
  const daysInMonth = firstDayOfMonth.jDaysInMonth();
  let firstDayWeekday = firstDayOfMonth.weekday();
  const today = moment().locale('fa');
  // پر کردن روزهای خالی قبل از اولین روز ماه
  for (let i = 0; i < firstDayWeekday; i++) {
   const emptyDay = document.createElement('div');
   emptyDay.classList.add('calendar-day', 'empty');
   calendarBody.appendChild(emptyDay);
  }

  // ایجاد روزهای ماه
  for (let day = 1; day <= daysInMonth; day++) {
   const currentDay = firstDayOfMonth.clone().add(day - 1, 'days');
   const dayElement = document.createElement('div');

   dayElement.classList.add('calendar-day');
   dayElement.setAttribute('data-date', currentDay.format('jYYYY/jMM/jDD'));

   // اضافه کردن کلاس جمعه
   if (currentDay.day() === 5) {
    dayElement.classList.add('friday');
   }
   if (currentDay.isSame(today, 'day')) {
    dayElement.classList.add('active');
   }
   // اضافه کردن متن روز
   dayElement.innerHTML = `<span>${currentDay.format('jD')}</span>`;

   // اضافه کردن رویداد کلیک
   dayElement.addEventListener('click', function () {
    const selectedDate = this.getAttribute('data-date');
    if (modalInstance) {
     modalInstance.hide();
    }
    // بستن مودال با استفاده از بوت‌استرپ
    $('#calendarModal').modal('hide');

    // تنظیم مقدار اسپن
    selectedDateSpan.textContent = selectedDate;

    // اطمینان از بسته شدن کامل مودال
    setTimeout(() => {
     const existingBackdrops = document.querySelectorAll('.modal-backdrop');
     existingBackdrops.forEach(backdrop => backdrop.remove());
     document.body.classList.remove('modal-open');
    }, 300);
   });

   calendarBody.appendChild(dayElement);
  }
 }

 // تابع برای پر کردن selectbox های سال و ماه
 function populateSelectBoxes() {
  const yearSelect = document.getElementById('year');
  const monthSelect = document.getElementById('month');

  const currentYear = moment().jYear();
  const currentMonth = moment().jMonth() + 1;

  // پر کردن سال‌ها
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
   const option = document.createElement('option');
   option.value = year;
   option.textContent = year;
   yearSelect.appendChild(option);
  }

  // پر کردن ماه‌ها
  const persianMonths = [
   "فروردین", "اردیبهشت", "خرداد", "تیر",
   "مرداد", "شهریور", "مهر", "آبان",
   "آذر", "دی", "بهمن", "اسفند"
  ];

  for (let month = 1; month <= 12; month++) {
   const option = document.createElement('option');
   option.value = month;
   option.textContent = persianMonths[month - 1];
   monthSelect.appendChild(option);
  }

  // تنظیم مقادیر پیش فرض
  yearSelect.value = currentYear;
  monthSelect.value = currentMonth;

  // رویداد تغییر سال
  yearSelect.addEventListener('change', function () {
   generateCalendar(yearSelect.value, monthSelect.value);
  });

  // رویداد تغییر ماه
  monthSelect.addEventListener('change', function () {
   generateCalendar(yearSelect.value, monthSelect.value);
  });
 }

 // دکمه ماه قبل
 document.getElementById('prev-month').addEventListener('click', function () {
  const yearSelect = document.getElementById('year');
  const monthSelect = document.getElementById('month');
  const currentMonth = parseInt(monthSelect.value);

  if (currentMonth === 1) {
   yearSelect.value = parseInt(yearSelect.value) - 1;
   monthSelect.value = 12;
  } else {
   monthSelect.value = currentMonth - 1;
  }

  generateCalendar(yearSelect.value, monthSelect.value);
 });

 // دکمه ماه بعد
 document.getElementById('next-month').addEventListener('click', function () {
  const yearSelect = document.getElementById('year');
  const monthSelect = document.getElementById('month');
  const currentMonth = parseInt(monthSelect.value);

  if (currentMonth === 12) {
   yearSelect.value = parseInt(yearSelect.value) + 1;
   monthSelect.value = 1;
  } else {
   monthSelect.value = currentMonth + 1;
  }

  generateCalendar(yearSelect.value, monthSelect.value);
 });

 // اجرای اولیه
 populateSelectBoxes();
 generateCalendar(moment().jYear(), moment().jMonth() + 1);
});