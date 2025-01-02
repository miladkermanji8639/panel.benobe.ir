$(function () {
 // تنظیمات جهانی jdatepicker
 $.datepicker.setDefaults($.datepicker.regional['fa']); // تنظیمات زبان فارسی

 // این تابع برای تبدیل شماره ماه به نام ماه فارسی
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

 // تنظیمات datepicker
 $('#datepicker7').datepicker({
  dateFormat: 'dd/mm/yy', // تاریخ را به فرمت dd/mm/yy نمایش می‌دهد
  beforeShowDay: function (date) {
   const isHolidayDate = isHoliday(date); // روز تعطیل
   const isFridayDate = isFriday(date); // روز جمعه

   const holidayInfo = getHolidayInfo(date); // اطلاعات مربوط به روز
   const dayOfWeek = date.getDay(); // روز هفته (0 = یکشنبه، 6 = شنبه)

   if (holidayInfo && holidayInfo.isHoliday) {
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
  onSelect: function (dateText, inst) {
   const selectedDate = $(this).datepicker('getDate'); // تاریخ انتخاب شده را دریافت می‌کنیم
   const day = selectedDate.getDate(); // روز
   const month = selectedDate.getMonth(); // شماره ماه (از 0 تا 11)
   const year = selectedDate.getFullYear(); // سال

   // نام ماه فارسی و تاریخ انتخابی به فرمت دلخواه
   const persianMonthName = getPersianMonthName(month);
   const currentClickDatePersian = `${day} ${persianMonthName} ${year}`; // تاریخ فارسی

   // نمایش تاریخ انتخاب شده در عنصر
   $('#currentNobat').removeClass('d-none');
   $('#currentNobatText').html(
    'لیست مشاوره های' + ' ' + currentClickDatePersian,
   );
  },
  onDayClick: function (dateText, inst) {
   const selectedDate = $(this).datepicker('getDate'); // تاریخ انتخاب شده را دریافت می‌کنیم
   const holidayInfo = getHolidayInfo(selectedDate); // اطلاعات مربوط به روز

   if (holidayInfo) {
    // نمایش پاپ‌آپ با اطلاعات روز
    const popupContent = `
                    <div class="popup-content">
                        <strong>تاریخ:</strong> ${selectedDate.getDate()} ${getPersianMonthName(selectedDate.getMonth())} ${selectedDate.getFullYear()}<br>
                        <strong>مناسبت:</strong> ${holidayInfo.occasion} <br>
                        <strong>تعطیل:</strong> ${holidayInfo.isHoliday ? 'true' : 'false'}
                    </div>
                `;
    $('#popup').html(popupContent).show(); // فرض می‌کنیم پاپ‌آپ شما با id="popup" وجود دارد
   }
  },
 });

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
});
$('#currentNobatText').css({
 cursor: 'pointer',
});
$('#currentNobatText').on('click', function () {
 $('#currentNobat').addClass('d-none');
});
// رویداد برای بستن پاپ‌آپ
$(document).on('click', '#popup', function () {
 $(this).hide();
});
