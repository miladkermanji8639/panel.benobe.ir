$(document).ready(function () {
 // ابتدا همه دراپ‌تاگل‌ها را مخفی کن
 $('.drop-toggle-styles').hide();
 // باز کردن اولین دراپ‌تاگل به صورت خودکار
 /*const $firstCard = $(".option-card-box-shodow").first(); // انتخاب اولین کارت
  const $firstToggle = $firstCard.find(".drop-toggle-styles");
  const $firstIcon = $firstCard.find("svg.chevron_bottom__M8fF9");
  $firstToggle.find(".loading-spinner").removeClass("d-none");
  $firstToggle.slideDown(300, function () {
    $firstToggle.find(".loading-spinner").addClass("d-none");
  });
  $firstIcon.css({
    transform: "rotate(-90deg)",
    transition: "transform 0.3s",
  });
  */

 // هنگامی که بر روی عنوان کلیک می‌شود
 $('.d-flex.justify-content-between.align-items-center').on(
  'click',
  function () {
   const $currentCard = $(this)
    .closest('.option-card-box-shodow')
    .find('.drop-toggle-styles');
   const $icon = $(this).find('svg.chevron_bottom__M8fF9');

   // اگر دراپ‌تاگل فعلی باز نیست، آن را باز کن
   if ($currentCard.is(':hidden')) {
    $currentCard.find('.loading-spinner').removeClass('d-none');
    $currentCard.slideDown(300, function () {
     $currentCard.find('.loading-spinner').addClass('d-none');
    });
    $icon.css({
     transform: 'rotate(-90deg)',
     transition: 'transform 0.3s',
    });
   } else {
    // در غیر این صورت، آن را ببند
    $currentCard.slideUp(300);
    $icon.css({ transform: 'rotate(90deg)', transition: 'transform 0.3s' });
   }
  },
 );

 // هنگامی که کاربر در جایی خارج از دراپ‌تاگل کلیک می‌کند
 /*$(document).on("click", function (event) {
    if (!$(event.target).closest(".option-card-box-shodow").length) {
      $(".drop-toggle-styles").slideUp(300);
      $("svg.chevron_bottom__M8fF9").css({
        transform: "rotate(90deg)",
        transition: "transform 0.3s",
      });
    }
  });*/

 // تابع برای حذف یک عنصر با تأییدیه SweetAlert
});
$(document).ready(function () {
 const addButton = document.getElementById('addButton');
 const additionalInputs = document.getElementById('additionalInputs');
 let inputCount = 0; // شمارش ورودی‌های اضافی

 addButton.addEventListener('click', () => {
  if (inputCount < 5) {
   // حداکثر 5 ورودی اضافی
   inputCount++;
   const newInputGroup = document.createElement('div');
   newInputGroup.classList.add('w-100', 'mt-3');
   newInputGroup.innerHTML = `
        <div>
          <div class="text-left mt-3 remove-form-item" onclick="removeInput(this)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z"
                fill="#000"></path>
            </svg>
          </div>
          <div>
            <div class="mt-2">
            <div class="d-flex justify-content-between gap-4">
              <div class="w-100">
              <label for="degree${inputCount}" class="label-top-input">درجه علمی</label>
              <select name="degree${inputCount}" id="degree${inputCount}"
                class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje">
                <option value="">کاردان</option>
                <option value="">کارشناس</option>
                <option value="">کارشناسی ارشد</option>
                <option value="">دانشجوی دکترا</option>
                <option value="">دکترای</option>
              </select>
              </div>
              <div class="w-100">

              <label for="specialty${inputCount}" class="label-top-input">تخصص</label>
              <select name="specialty${inputCount}" id="specialty${inputCount}"
                class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative takhasos-input">
                <option value="">فلوشیپ</option>
                <option value="">اتاق عملی</option>
                <option value=""> بینایی سنجی</option>
                <option value=""> بهداشت عمومی</option>
                <option value="">پرستاری</option>
              </select>
              </div>
            </div>
            <div>
              <label for="title${inputCount}" class="label-top-input-special-takhasos-elem-create">عنوان تخصص</label>
              <input type="text" name="title${inputCount}" id="title${inputCount}" class="form-control h-50 w-100 border-radius-6 mt-3">
            </div>
          </div>
        </div>
      `;
   additionalInputs.appendChild(newInputGroup);
  } else {
   alert('حداکثر 5 ورودی اضافی مجاز است.');
  }
 });

 window.removeInput = function (button) {
  const inputGroup = button.parentElement.parentElement;

  Swal.fire({
   title: 'آیا مطمئن هستید؟',
   text: 'این عمل قابل بازگشت نیست!',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'بله، حذف کن!',
   cancelButtonText: 'خیر، انصراف',
  })
   .then((result) => {
    if (result.isConfirmed) {
     additionalInputs.removeChild(inputGroup);
     inputCount--; // کاهش شمارش ورودی‌های اضافی
     Swal.fire('حذف شد!', 'عنصر با موفقیت حذف شد.', 'success');
    }
   })
   .catch((error) => {
    console.error('خطایی در نمایش SweetAlert رخ داد:', error);
   });
 };
});
