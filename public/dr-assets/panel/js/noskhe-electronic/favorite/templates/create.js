document.addEventListener('DOMContentLoaded', function () {
 // انتخاب همه تب‌ها
 const tabs = document.querySelectorAll('.tab');
 const contents = document.querySelectorAll(
  '#tajviz, #azmayeshgah, #tasvir-bardary, #paraclinic',
 );

 // تابعی برای مدیریت نمایش دایوها
 function showContent(targetId) {
  contents.forEach((content) => {
   if (content.id === targetId) {
    content.classList.remove('d-none'); // نمایش دایو
   } else {
    content.classList.add('d-none'); // پنهان کردن دایو
   }
  });

  // حذف کلاس فعال از تمامی تب‌ها و اضافه کردن به تب فعال
  tabs.forEach((tab) => {
   tab.classList.remove('my-border-bottom-primary'); // حذف کلاس از همه تب‌ها
  });
  // اضافه کردن کلاس به تب فعالی
  const activeTab = document.querySelector(`.tab[data-target="#${targetId}"]`);
  if (activeTab) {
   activeTab.classList.add('my-border-bottom-primary');
  }
 }

 // تنظیم رویداد کلیک برای هر تب
 tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
   const targetId = this.getAttribute('data-target').substring(1); // دریافت id هدف
   showContent(targetId);
  });
 });

 // نمایش اولین دایو به صورت پیشفرض و اضافه کردن کلاس فعال به تب اول
 showContent('tajviz');
});
