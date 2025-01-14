
/* public\dr - assets\panel\js\turn\scehedule\sheduleSetting\workhours\workhours.js */
$(document).ready(function () {
 const DOMElements = document.querySelectorAll('.timepicker-ui');
 const options = {
  clockType: '24h',
  theme: 'basic',
  mobile: 'true',
  enableScrollbar: 'true',
 };
 DOMElements.forEach((element) => {
  const newTimepicker = new window.tui.TimepickerUI(element, options);
  newTimepicker.create();
 });
 // Initialize Select2 on existing selects
});
$(document).ready(function () {
 $('#appointment-toggle').change(function () {
  $('.workhours-wrapper-content').toggleClass('d-none');
 });
});

// cod for day bage active
document.addEventListener('DOMContentLoaded', function () {
 // پیدا کردن همه اسپن‌هایی که کلاس badge-time-styles دارند  
 const timeBadges = document.querySelectorAll('.badge-time-styles');
 const dayBadges = document.querySelectorAll('.badge-time-styles-day');

 // تابعی برای مدیریت کلیک روی timeBadges  
 timeBadges.forEach((badge) => {
  badge.addEventListener('click', function () {
   // اگر کلیک شده، بررسی کلاس active-hours  
   const isActive = this.classList.contains('active-hours');

   // غیرفعال کردن تمامی badges  
   timeBadges.forEach((b) => {
    b.classList.remove('active-hours'); // حذف کلاس active-hours از همه  
    const svg = b.querySelector('svg'); // پیدا کردن svg در این اسپن  
    if (svg) {
     svg.remove(); // حذف svg اگر وجود داشته باشد  
    }
   });

   // اگر فعال نبود، اکنون فعال کردن این اسپن  
   if (!isActive) {
    this.classList.add('active-hours');
    // ایجاد svg جدید  
    const svgWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgWrapper.setAttribute('width', '16');
    svgWrapper.setAttribute('height', '16');
    svgWrapper.setAttribute('viewBox', '0 0 16 16');
    svgWrapper.setAttribute('fill', '#7c82fc');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', 'M13.8405 3.44714C14.1458 3.72703 14.1664 4.20146 13.8865 4.5068L6.55319 12.5068C6.41496 12.6576 6.22113 12.7454 6.01662 12.7498C5.8121 12.7543 5.61464 12.675 5.47 12.5303L2.13666 9.197C1.84377 8.90411 1.84377 8.42923 2.13666 8.13634C2.42956 7.84345 2.90443 7.84345 3.19732 8.13634L5.97677 10.9158L12.7808 3.49321C13.0607 3.18787 13.5351 3.16724 13.8405 3.44714Z');
    svgWrapper.appendChild(path);
    this.appendChild(svgWrapper);
   }
  });
 });

 // تابعی برای مدیریت کلیک روی dayBadges  
 dayBadges.forEach((badge) => {
  badge.addEventListener('click', function () {
   // اگر کلیک شده، بررسی کلاس active-hours  
   const isActive = this.classList.contains('active-hours');

   // غیرفعال کردن تمامی badges  
   dayBadges.forEach((b) => {
    b.classList.remove('active-hours'); // حذف کلاس active-hours از همه  
    const svg = b.querySelector('svg'); // پیدا کردن svg در این اسپن  
    if (svg) {
     svg.remove(); // حذف svg اگر وجود داشته باشد  
    }
   });

   // اگر فعال نبود، اکنون فعال کردن این اسپن  
   if (!isActive) {
    this.classList.add('active-hours');
    // ایجاد svg جدید  
    const svgWrapper = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgWrapper.setAttribute('width', '16');
    svgWrapper.setAttribute('height', '16');
    svgWrapper.setAttribute('viewBox', '0 0 16 16');
    svgWrapper.setAttribute('fill', '#7c82fc');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', 'M13.8405 3.44714C14.1458 3.72703 14.1664 4.20146 13.8865 4.5068L6.55319 12.5068C6.41496 12.6576 6.22113 12.7454 6.01662 12.7498C5.8121 12.7543 5.61464 12.675 5.47 12.5303L2.13666 9.197C1.84377 8.90411 1.84377 8.42923 2.13666 8.13634C2.42956 7.84345 2.90443 7.84345 3.19732 8.13634L5.97677 10.9158L12.7808 3.49321C13.0607 3.18787 13.5351 3.16724 13.8405 3.44714Z');
    svgWrapper.appendChild(path);
    this.appendChild(svgWrapper);
   }
  });
 });
});
