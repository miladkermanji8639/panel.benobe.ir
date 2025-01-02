$('input').on('click', function () {
 $(this).prev('label').toggleClass('text-primary');
});
document.addEventListener('DOMContentLoaded', function () {
 const tabs = document.querySelectorAll('.tab');
 const gozareshMaliContent = document.querySelector('.gozaresh-mali-content');
 const settingContent = document.querySelector('.setting-content');

 tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
   // حذف کلاس فعال از همه تب‌ها
   tabs.forEach((t) => t.classList.remove('border-bottom-primary'));

   // افزودن کلاس فعال به تب کلیک شده
   tab.classList.add('border-bottom-primary');

   // مخفی کردن محتوای قبلی
   gozareshMaliContent.classList.add('d-none');
   settingContent.classList.add('d-none');

   // نمایش محتوای مربوط به تب کلیک شده
   if (this.getAttribute('data-tab') === 'gozaresh-mali') {
    gozareshMaliContent.classList.remove('d-none');
   } else {
    settingContent.classList.remove('d-none');
   }
  });
 });
});
