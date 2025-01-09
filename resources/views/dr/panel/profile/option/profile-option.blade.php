{{-- resources/views/dr/panel/profile/option/profile-option.blade.php --}}
<script>
 document.addEventListener('DOMContentLoaded', function() {
  new TomSelect('#academic_degree_id', {
   plugins: ['clear_button'],
   placeholder: 'انتخاب درجه علمی',
   searchField: ['text'],
   noResultsText: 'نتیجه‌ای یافت نشد',
   render: {
    option: function(data, escape) {
     return '<div class="d-flex justify-content-between">' +
      '<span>' + escape(data.text) + '</span>' +
      '</div>';
    },
    item: function(data, escape) {
     return '<div>' + escape(data.text) + '</div>';
    }
   },
   // برای فارسی
   locale: 'fa',
   // تنظیمات بیشتر
   maxItems: 1,
   sortField: {
    field: 'text'
   }
  });
  new TomSelect('#specialties_list', {
   valueField: 'id',
   plugins: ['clear_button'],
   noResultsText: 'نتیجه‌ای یافت نشد',
   labelField: 'name',
   searchField: ['name'],
   placeholder: 'انتخاب تخصص...',
   maxItems: 1,
   render: {
    option: function(item, escape) {
     return `<div>
        ${escape(item.name)}
        ${item.category ? `<small class="text-muted">(${escape(item.category)})</small>` : ''}
     </div>`;
    }
   }
  });
 });
 document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  const additionalInputs = document.getElementById('additionalInputs');
  let inputCount = 0; // شمارش ورودی‌های اضافی
  addButton.addEventListener('click', () => {
   if (inputCount < 3) {
    inputCount++;
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('w-100', 'mt-3');
    newInputGroup.innerHTML = `
       <div>
         <div class="text-left mt-3 remove-form-item" onclick="removeInput(this)">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z" fill="#000"></path>
           </svg>
         </div>
         <div>
           <div class="mt-2">
             <div class="d-flex justify-content-between gap-4">
               <div class="w-100">
                 <label for="degree${inputCount}" class="label-top-input">درجه علمی</label>
                 <select name="degrees[${inputCount}]" id="degree${inputCount}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje">
                   @foreach ($academic_degrees as $academic_degree)
                     <option value="{{ $academic_degree->id }}">{{ $academic_degree->title }}</option>
                   @endforeach
                 </select>
               </div>
               <div class="w-100">
                 <label for="specialty${inputCount}" class="label-top-input">تخصص</label>
                 <select name="specialties[${inputCount}]" id="specialty${inputCount}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative takhasos-input">
                   @foreach ($sub_specialties as $specialtyOption)
                     <option value="{{ $specialtyOption->id }}">{{ $specialtyOption->name }}</option>
                   @endforeach
                 </select>
               </div>
             </div>
             <div>
               <label for="title${inputCount}" class="label-top-input-special-takhasos-elem-create">عنوان تخصص</label>
               <input type="text" name="titles[${inputCount}]" id="title${inputCount}" class="form-control h-50 w-100 border-radius-6 mt-3">
             </div>
           </div>
         </div>
       </div>
     `;
    additionalInputs.appendChild(newInputGroup);
    new TomSelect(`#degree${inputCount}`, {
     plugins: ['clear_button'],
     placeholder: 'انتخاب درجه علمی',
     searchField: ['text'],
     noResultsText: 'نتیجه‌ای یافت نشد',
     locale: 'fa',
     maxItems: 1,
     sortField: {
      field: 'text'
     }
    });
    new TomSelect(`#specialty${inputCount}`, {
     valueField: 'id',
     plugins: ['clear_button'],
     noResultsText: 'نتیجه‌ای یافت نشد',
     labelField: 'name',
     searchField: ['name'],
     placeholder: 'انتخاب تخصص...',
     maxItems: 1,
    });
   } else {
    Swal.fire({
     title: 'حداکثر تخصص برای هر دکتر 3 تخصص میباشد',
     icon: 'error',
    });
   }
  });
 });
 function updateAddButtonState() {
  const existingSpecialtiesCount = document.querySelectorAll('#additionalInputs .specialty-item').length;
  const addButton = document.getElementById('addButton');
  if (existingSpecialtiesCount >= 2) { // حداکثر 2 تخصص اضافی
   addButton.disabled = true;
  } else {
   addButton.disabled = false;
  }
 }
 const deleteSpecialtyRoute = "{{ route('dr-delete-specialty', ['id' => '__ID__']) }}";
 function removeInput(button) {
  // پیدا کردن المان والد که دارای data-specialty-id است
  const inputGroup = button.closest('.specialty-item');
  // خواندن مقدار data-specialty-id
  const specialtyId = inputGroup.getAttribute('data-specialty-id');
  // بررسی اینکه specialtyId مقدار معتبری دارد
  if (!specialtyId) {
   console.error('specialtyId is undefined or invalid');
   Swal.fire('خطا!', 'شناسه تخصص نامعتبر است.', 'error');
   return;
  }
  Swal.fire({
   title: 'آیا مطمئن هستید؟',
   text: 'این عمل قابل بازگشت نیست!',
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'بله، حذف کن!',
   cancelButtonText: 'خیر، انصراف',
  }).then((result) => {
   if (result.isConfirmed) {
    // ساخت URL با استفاده از نام مسیر و جایگزینی __ID__ با specialtyId
    const url = deleteSpecialtyRoute.replace('__ID__', specialtyId);
    // ارسال درخواست حذف به سرور
    fetch(url, {
      method: 'DELETE',
      headers: {
       'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
       'Accept': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      }
     })
     .then(response => response.json())
     .then(data => {
      if (data.success) {
       // حذف المان از صفحه
       inputGroup.remove();
       // نمایش پیام موفقیت
       Swal.fire('حذف شد!', 'تخصص با موفقیت حذف شد.', 'success');
       // به‌روزرسانی وضعیت دکمه "اضافه کردن تخصص"
       updateAddButtonState();
      } else {
       // نمایش پیام خطا
       Swal.fire('خطا!', 'خطا در حذف تخصص.', 'error');
      }
     })
     .catch(error => {
      console.error('خطا در برقراری ارتباط با سرور:', error);
      Swal.fire('خطا!', 'خطا در برقراری ارتباط با سرور.', 'error');
     });
   }
  });
 }
 // فراخوانی این تابع پس از هر بار اضافه کردن تخصص جدید
 $(document).ready(function() {
  updateAddButtonState();
 });
 // تابع اولیه برای تام سلکت
 function initTomSelect(selector, options = {}) {
  return new TomSelect(selector, {
   plugins: ['clear_button'],
   searchField: ['text', 'name'],
   placeholder: options.placeholder || 'انتخاب کنید',
   maxItems: options.maxItems || 1,
   render: {
    option: function(data, escape) {
     return '<div class="d-flex justify-content-between">' +
      '<span>' + escape(data.text || data.name) + '</span>' +
      '</div>';
    },
    item: function(data, escape) {
     return '<div>' + escape(data.text || data.name) + '</div>';
    }
   },
   locale: 'fa',
   ...options
  });
 }
 function initAllTomSelects() {
  // درجه علمی
  initTomSelect('#academic_degree_id', {
   placeholder: 'انتخاب درجه علمی'
  });
  // تخصص اصلی
  initTomSelect('#specialties_list', {
   placeholder: 'انتخاب تخصص',
   valueField: 'id',
   labelField: 'name',
   searchField: ['name'],
  });
  // درجه علمی برای تخصص‌های اضافی از دیتابیس
  document.querySelectorAll('[id^="degree"]').forEach(el => {
   if (el.id !== 'academic_degree_id') {
    initTomSelect(`#${el.id}`, {
     placeholder: 'انتخاب درجه علمی'
    });
   }
  });
  // تخصص‌های اضافی از دیتابیس
  document.querySelectorAll('[id^="specialty"]').forEach(el => {
   if (el.id !== 'specialties_list') {
    initTomSelect(`#${el.id}`, {
     placeholder: 'انتخاب تخصص',
     valueField: 'id',
     labelField: 'name',
     searchField: ['name'],
    });
   }
  });
 }
 // اصلاح تابع اضافه کردن ورودی جدید
 function addNewSpecialtyInput() {
  const additionalInputs = document.getElementById('additionalInputs');
  const inputCount = document.querySelectorAll('#additionalInputs .specialty-item').length;
  if (inputCount < 2) { // حداکثر 2 ورودی اضافی
   const newInputGroup = document.createElement('div');
   newInputGroup.classList.add('w-100', 'mt-3', 'specialty-item'); // اضافه کردن کلاس specialty-item
   newInputGroup.innerHTML = `
            <div>
                <div class="text-left mt-3 remove-form-item" onclick="removeInput(this)">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z" fill="#000"></path>
                    </svg>
                </div>
                <div>
                    <div class="mt-2">
                        <div class="d-flex justify-content-between gap-4">
                            <div class="w-100">
                                <label for="degree${inputCount + 1}" class="label-top-input">درجه علمی</label>
                                <select name="degrees[${inputCount}]" id="degree${inputCount + 1}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje">
                                    @foreach ($academic_degrees as $academic_degree)
                                        <option value="{{ $academic_degree->id }}">{{ $academic_degree->title }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="w-100">
                                <label for="specialty${inputCount + 1}" class="label-top-input">تخصص</label>
                                <select name="specialties[${inputCount}]" id="specialty${inputCount + 1}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative takhasos-input">
                                    @foreach ($sub_specialties as $specialtyOption)
                                        <option value="{{ $specialtyOption->id }}">{{ $specialtyOption->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="title${inputCount + 1}" class="label-top-input-special-takhasos-elem-create">عنوان تخصص</label>
                            <input type="text" name="titles[${inputCount}]" id="title${inputCount + 1}" class="form-control h-50 w-100 border-radius-6 mt-3">
                        </div>
                    </div>
                </div>
            </div>
        `;
   additionalInputs.appendChild(newInputGroup);
   initTomSelect(`#degree${inputCount + 1}`, {
    placeholder: 'انتخاب درجه علمی'
   });
   initTomSelect(`#specialty${inputCount + 1}`, {
    placeholder: 'انتخاب تخصص'
   });
   // به‌روزرسانی وضعیت دکمه "اضافه کردن تخصص"
   updateAddButtonState();
  } else {
   Swal.fire({
    title: 'حداکثر تخصص برای هر دکتر 3 تخصص میباشد',
    icon: 'error',
   });
  }
 }
 // اجرا در زمان بارگذاری
 // بررسی زمان آخرین درخواست
 document.getElementById("profileEdit").addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  const loader = submitButton.querySelector('.loader');
  const buttonText = submitButton.querySelector('.button_text');
  // مخفی کردن متن دکمه و نمایش لودینگ
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
     'Accept': 'application/json',
     'X-Requested-With': 'XMLHttpRequest'
    }
   })
   .then(response => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (!response.ok) {
     return response.json().then(errorData => {
      throw new Error(errorData.message || 'خطای نامشخص');
     });
    }
    return response.json();
   })
   .then(data => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (data.success) {
     // نمایش توست موفقیت
     Toastify({
      text: data.message || "تخصص با موفقیت به‌روز شد",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
    } else {
     // نمایش توست خطا
     Toastify({
      text: data.message || "خطا در به‌روزرسانی تخصص",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   })
   .catch(error => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    // نمایش توست خطا
    Toastify({
     text: error.message || 'خطا در برقراری ارتباط با سرور',
     duration: 3000,
     close: true,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
   });
 });
 document.getElementById("specialtyEdit").addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  const loader = submitButton.querySelector('.loader');
  const buttonText = submitButton.querySelector('.button_text');
  // مخفی کردن متن دکمه و نمایش لودینگ
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
     'Accept': 'application/json',
     'X-Requested-With': 'XMLHttpRequest'
    }
   })
   .then(response => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (!response.ok) {
     return response.json().then(errorData => {
      throw new Error(errorData.message || 'خطای نامشخص');
     });
    }
    return response.json();
   })
   .then(data => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (data.success) {
     // نمایش توست موفقیت
     Toastify({
      text: data.message || "تخصص با موفقیت به‌روز شد",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
     // به‌روزرسانی مقادیر سلکت‌باکس‌ها و اینپوت‌ها
     if (data.specialties) {
      updateSpecialties(data.specialties);
     }
    } else {
     // نمایش توست خطا
     Toastify({
      text: data.message || "خطا در به‌روزرسانی تخصص",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   })
   .catch(error => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    // نمایش توست خطا
    Toastify({
     text: error.message || 'خطا در برقراری ارتباط با سرور',
     duration: 3000,
     close: true,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
   });
 });
 function updateSpecialties(specialties) {
  if (!specialties || !Array.isArray(specialties)) {
   console.error('داده‌های تخصص‌ها نامعتبر است:', specialties);
   return;
  }
  const additionalInputs = document.getElementById('additionalInputs');
  additionalInputs.innerHTML = ''; // پاک کردن تخصص‌های قبلی
  specialties.forEach((specialty, index) => {
   // اگر تخصص اصلی نباشد، آن را نمایش دهید
   if (!specialty.is_main) {
    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('w-100', 'mt-3', 'specialty-item');
    newInputGroup.innerHTML = `
                <div>
                    <div class="text-left mt-3 remove-form-item" onclick="removeInput(this)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L10 8.93934L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.0607 10L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L10 11.0607L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.93934 10L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967Z" fill="#000"></path>
                        </svg>
                    </div>
                    <div>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between gap-4">
                                <div class="w-100">
                                    <label for="degree${index + 1}" class="label-top-input">درجه علمی</label>
                                    <select name="degrees[${index}]" id="degree${index + 1}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative daraje">
                                        @foreach ($academic_degrees as $academic_degree)
                                            <option value="{{ $academic_degree->id }}" ${specialty.academic_degree_id == {{ $academic_degree->id }} ? 'selected' : ''}>{{ $academic_degree->title }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="w-100">
                                    <label for="specialty${index + 1}" class="label-top-input">تخصص</label>
                                    <select name="specialties[${index}]" id="specialty${index + 1}" class="form-control h-50 w-100 border-radius-6 mt-3 col-12 position-relative takhasos-input">
                                        @foreach ($sub_specialties as $specialtyOption)
                                            <option value="{{ $specialtyOption->id }}" ${specialty.specialty_id == {{ $specialtyOption->id }} ? 'selected' : ''}>{{ $specialtyOption->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="title${index + 1}" class="label-top-input-special-takhasos-elem-create">عنوان تخصص</label>
                                <input type="text" name="titles[${index}]" id="title${index + 1}" class="form-control h-50 w-100 border-radius-6 mt-3" value="${specialty.specialty_title}">
                            </div>
                        </div>
                    </div>
                </div>
            `;
    additionalInputs.appendChild(newInputGroup);
    initTomSelect(`#degree${index + 1}`, {
     placeholder: 'انتخاب درجه علمی'
    });
    initTomSelect(`#specialty${index + 1}`, {
     placeholder: 'انتخاب تخصص'
    });
   }
  });
  // به‌روزرسانی وضعیت دکمه "اضافه کردن تخصص"
  updateAddButtonState();
 }
 document.getElementById("uuid-form").addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  const loader = submitButton.querySelector('.loader');
  const buttonText = submitButton.querySelector('.button_text');
  // مخفی کردن متن دکمه و نمایش لودینگ
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
     'Accept': 'application/json',
     'X-Requested-With': 'XMLHttpRequest'
    }
   })
   .then(response => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (!response.ok) {
     return response.json().then(errorData => {
      throw new Error(errorData.message || 'خطای نامشخص');
     });
    }
    return response.json();
   })
   .then(data => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (data.success) {
     // نمایش توست موفقیت
     Toastify({
      text: data.message || "آیدی شما با موفقیت به‌روز شد",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
    } else {
     // نمایش توست خطا
     Toastify({
      text: data.message || "خطا در به‌روزرسانی آیدی",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   })
   .catch(error => {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    // نمایش توست خطا
    Toastify({
     text: error.message || 'خطا در برقراری ارتباط با سرور',
     duration: 3000,
     close: true,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
   });
 });
 // تابع نمایش خطاهای اعتبارسنجی
 function handleValidationErrors(errors) {
  // پاک کردن خطاهای قبلی
  clearPreviousErrors();
  // نمایش خطاها
  Object.keys(errors).forEach(field => {
   const inputElement = document.querySelector(`[name="${field}"]`);
   if (inputElement) {
    // ایجاد المان خطا
    const errorElement = document.createElement('div');
    errorElement.className = 'text-danger validation-error mt-1 font-size-13';
    // نمایش تمام خطاهای مربوط به فیلد
    errorElement.textContent = errors[field][0];
    // اضافه کردن کلاس خطا به اینپوت
    inputElement.classList.add('is-invalid');
    // قرار دادن المان خطا بعد از اینپوت
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
   }
  });
  // نمایش توست خطا
  Toastify({
   text: "لطفاً خطاهای فرم را بررسی کنید",
   duration: 3000,
   close: true,
   gravity: "top",
   position: 'right',
   style: {
    background: "red"
   }
  }).showToast();
 }
 // تابع پاک کردن خطاهای قبلی
 function clearPreviousErrors() {
  // حذف خطاهای قبلی
  document.querySelectorAll('.validation-error').forEach(el => el.remove());
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
 }
 /*  edit mobile */
 // متغیرهای سراسری
 // متغیرهای سراسری
 let otpToken = null;
 let resendTimer = null;
 // تابع ارسال کد OTP
 function sendOtpCode() {
  const newMobile = document.getElementById('newMobileNumber').value;
  const sendButton = document.querySelector('#mobileInputStep1 button');
  const loader = sendButton.querySelector('.loader');
  const buttonText = sendButton.querySelector('.button_text');
  // مخفی کردن متن دکمه و نمایش لودینگ
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  // اعتبارسنجی شماره موبایل با Regex دقیق
  const mobileRegex =
   /^(?!09{1}(\d)\1{8}$)09(?:01|02|03|12|13|14|15|16|18|19|20|21|22|30|33|35|36|38|39|90|91|92|93|94)\d{7}$/;
  if (!mobileRegex.test(newMobile)) {
   Toastify({
    text: "شماره موبایل نامعتبر است",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
     background: "red"
    }
   }).showToast();
   // بازگردانی دکمه به حالت اولیه
   buttonText.style.display = 'block';
   loader.style.display = 'none';
   return;
  }
  $.ajax({
   url: "{{ route('dr-send-mobile-otp') }}",
   method: 'POST',
   data: {
    mobile: newMobile
   },
   headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
   },
   success: function(response) {
    otpToken = response.token;
    $('#mobileInputStep1').hide();
    $('#otpInputStep').show();
    // ریست کردن اینپوت‌های OTP
    document.querySelectorAll('.otp-input').forEach(input => input.value = '');
    // فوکوس روی اولین اینپوت
    document.querySelector('.otp-input').focus();
    startResendTimer();
    Toastify({
     text: "کد تایید ارسال شد",
     duration: 3000,
     gravity: "top",
     position: "right",
     style: {
      background: "green"
     }
    }).showToast();
   },
   error: function(xhr) {
    Toastify({
     text: xhr.responseJSON.message || "خطا در ارسال کد",
     duration: 5000,
     gravity: "top",
     position: "right",
     style: {
      background: "red"
     }
    }).showToast();
   },
   complete: function() {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
   }
  });
 }
 // تابع تایید کد OTP
 function verifyOtpCode() {
  const otpInputs = document.querySelectorAll('.otp-input');
  const otpCode = Array.from(otpInputs).map(input => input.value).join('');
  const newMobile = $('#newMobileNumber').val();
  const verifyButton = document.querySelector('#otpInputStep button');
  const loader = verifyButton.querySelector('.loader');
  const buttonText = verifyButton.querySelector('.button_text');
  // بررسی کامل بودن کد
  if (otpCode.length !== 4) {
   Toastify({
    text: "لطفاً تمام ارقام کد را وارد کنید",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
     background: "red"
    }
   }).showToast();
   return;
  }
  // مخفی کردن متن دکمه و نمایش لودینگ
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  // ادامه عملیات تایید کد
  $.ajax({
   url: `{{ route('dr-mobile-confirm', '') }}/${otpToken}`,
   method: 'POST',
   data: {
    otp: otpCode.split('').map(Number),
    mobile: newMobile
   },
   headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
   },
   success: function(response) {
    // بررسی دقیق پاسخ موفقیت
    if (response.success) {
     Toastify({
      text: response.message,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
       background: "green"
      }
     }).showToast();
     // به‌روزرسانی المان‌های موبایل در صفحه
     $('input[name="mobile"]').val(response.mobile);
     // بستن مودال
     $('#mobileEditModal').modal('hide');
     // رفرش صفحه برای اطمینان
     setTimeout(() => {
      location.reload();
     }, 1000);
    } else {
     Toastify({
      text: response.message || "خطا در تغییر شماره موبایل",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
       background: "red"
      }
     }).showToast();
    }
   },
   error: function(xhr) {
    // مدیریت خطاهای سرور
    let errorMessage = "خطا در تایید کد";
    if (xhr.responseJSON && xhr.responseJSON.message) {
     errorMessage = xhr.responseJSON.message;
    }
    Toastify({
     text: errorMessage,
     duration: 3000,
     gravity: "top",
     position: "right",
     style: {
      background: "red"
     }
    }).showToast();
   },
   complete: function() {
    // بازگردانی دکمه به حالت اولیه
    buttonText.style.display = 'block';
    loader.style.display = 'none';
   }
  });
 }
 // تابع شروع تایمر ارسال مجدد
 function startResendTimer() {
  let seconds = 120;
  const timerElement = document.getElementById('resendOtpTimer');
  clearInterval(resendTimer);
  resendTimer = setInterval(() => {
   if (seconds > 0) {
    timerElement.innerHTML = `ارسال مجدد کد تا ${seconds} ثانیه دیگر`;
    seconds--;
   } else {
    clearInterval(resendTimer);
    timerElement.innerHTML = '<a href="#" onclick="sendOtpCode()">ارسال مجدد کد</a>';
   }
  }, 1000);
 }
 // اجرای اسکریپت پس از بارگذاری کامل DOM
 document.addEventListener('DOMContentLoaded', function() {
  const otpInputs = document.querySelectorAll('.otp-input');
  // فوکوس روی اولین اینپوت از سمت چپ در مرحله OTP
  $('#mobileEditModal').on('shown.bs.modal', function() {
   otpInputs[0].focus();
  });
  otpInputs.forEach((input, index) => {
   input.addEventListener('input', function() {
    // محدود کردن به یک کاراکتر عددی
    this.value = this.value.replace(/[^0-9]/g, '');
    // حرکت از چپ به راست برای RTL
    if (this.value.length === 1 && index < otpInputs.length - 1) {
     otpInputs[index + 1].focus();
    }
   });
   input.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
     otpInputs[index - 1].focus();
    }
   });
  });
 });
 /*  edit mobile */
 document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('messengersForm');
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button_text');
  const loader = submitButton.querySelector('.loader');
  form.addEventListener('submit', function(e) {
   e.preventDefault();
   // نمایش لودینگ و مخفی کردن متن دکمه
   buttonText.style.display = 'none';
   loader.style.display = 'block';
   // ارسال درخواست Ajax
   fetch("{{ route('dr-messengers-update') }}", {
     method: 'PUT',
     headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      ita_phone: form.querySelector('input[name="ita_phone"]').value,
      ita_username: form.querySelector('input[name="ita_username"]').value,
      whatsapp_phone: form.querySelector('input[name="whatsapp_phone"]').value,
      secure_call: form.querySelector('input[name="secure_call"]').checked ? 1 : 0,
     }),
    })
    .then(response => response.json())
    .then(data => {
     // بازگرداندن دکمه به حالت اولیه
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     // نمایش پیام موفقیت یا خطا
     if (data.success) {
      Toastify({
       text: data.message,
       duration: 3000,
       gravity: "top",
       position: "right",
       style: {
        background: "green",
       },
      }).showToast();
     } else {
      Toastify({
       text: data.message || "خطا در به‌روزرسانی اطلاعات",
       duration: 3000,
       gravity: "top",
       position: "right",
       style: {
        background: "red",
       },
      }).showToast();
     }
    })
    .catch(error => {
     // بازگرداندن دکمه به حالت اولیه
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     // نمایش خطا
     Toastify({
      text: "خطا در برقراری ارتباط با سرور",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
       background: "red",
      },
     }).showToast();
    });
  });
 });
 document.getElementById("staticPasswordForm").addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  const loader = submitButton.querySelector('.loader');
  const buttonText = submitButton.querySelector('.button_text');
  // Show loading state
  buttonText.style.display = 'none';
  loader.style.display = 'block';
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
   })
   .then(response => {
    // Reset button to initial state
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (!response.ok) {
     return response.json().then(errorData => {
      throw errorData;
     });
    }
    return response.json();
   })
   .then(data => {
    // Reset button to initial state
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    if (data.success) {
     // Show success toast
     Toastify({
      text: data.message || "تنظیمات با موفقیت به‌روزرسانی شد",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "green"
      }
     }).showToast();
    } else {
     // Show error toast
     Toastify({
      text: data.message || "خطا در به‌روزرسانی تنظیمات",
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   })
   .catch(error => {
    // Reset button to initial state
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    // نمایش خطاهای اعتبارسنجی
    if (error.errors) {
     handleValidationErrors(error.errors);
    } else {
     // Show error toast
     Toastify({
      text: error.message || 'خطا در برقراری ارتباط با سرور',
      duration: 3000,
      close: true,
      gravity: "top",
      position: 'right',
      style: {
       background: "red"
      }
     }).showToast();
    }
   });
 });
 function handleValidationErrors(errors) {
  // پاک کردن خطاهای قبلی
  clearPreviousErrors();
  // نمایش خطاها
  Object.keys(errors).forEach(field => {
   const inputElement = document.querySelector(`[name="${field}"]`);
   if (inputElement) {
    // ایجاد المان خطا
    const errorElement = document.createElement('div');
    errorElement.className = 'text-danger validation-error mt-1 font-size-13 d-block';
    // نمایش تمام خطاهای مربوط به فیلد
    errorElement.textContent = errors[field][0];
    // اضافه کردن کلاس خطا به اینپوت
    inputElement.classList.add('is-invalid');
    // قرار دادن المان خطا بعد از اینپوت
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
   }
  });
  // نمایش توست خطا
  Toastify({
   text: "لطفاً خطاهای فرم را بررسی کنید",
   duration: 3000,
   close: true,
   gravity: "top",
   position: 'right',
   style: {
    background: "red"
   }
  }).showToast();
 }
 function clearPreviousErrors() {
  // حذف خطاهای قبلی
  document.querySelectorAll('.validation-error').forEach(el => el.remove());
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
 }
 document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('input[name="static_password_enabled"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmPasswordInput = document.querySelector('input[name="password_confirmation"]');
  const saveButton = document.getElementById('btn-save-pass');
  toggleSwitch.addEventListener('change', function() {
   if (this.checked) {
    passwordInput.removeAttribute('disabled');
    confirmPasswordInput.removeAttribute('disabled');
    saveButton.removeAttribute('disabled');
   } else {
    passwordInput.setAttribute('disabled', 'disabled');
    confirmPasswordInput.setAttribute('disabled', 'disabled');
    saveButton.setAttribute('disabled', 'disabled');
    // ارسال درخواست Ajax برای غیرفعال کردن رمز عبور ثابت
    fetch("{{ route('dr-static-password-update') }}", {
      method: 'POST',
      headers: {
       'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       static_password_enabled: false
      }),
     })
     .then(response => response.json())
     .then(data => {
      if (data.success) {
       Toastify({
        text: data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
         background: "green",
        },
       }).showToast();
      } else {
       Toastify({
        text: data.message || "خطا در به‌روزرسانی تنظیمات",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
         background: "red",
        },
       }).showToast();
      }
     })
     .catch(error => {
      Toastify({
       text: "خطا در برقراری ارتباط با سرور",
       duration: 3000,
       gravity: "top",
       position: "right",
       style: {
        background: "red",
       },
      }).showToast();
     });
   }
  });
 });
 document.addEventListener('DOMContentLoaded', function() {
  const showPass1 = document.querySelector('.show-pass-2');
  const showPass2 = document.querySelector('.show-pass-1');
  const passwordInput = document.querySelector('input[name="password"]');
  const confirmPasswordInput = document.querySelector('input[name="password_confirmation"]');
  // تابع برای تغییر وضعیت نمایش پسورد
  function togglePasswordVisibility(inputElement, iconElement) {
   if (inputElement.type === 'password') {
    inputElement.type = 'text';
    iconElement.innerHTML =
     `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 11.6616 2.88577 11.0954 3.24331 10.409C3.59385 9.73591 4.13459 8.9926 4.88371 8.3011C6.37297 6.9264 8.69232 5.75 12 5.75C15.3077 5.75 17.627 6.9264 19.1163 8.3011C19.8654 8.9926 20.4061 9.73591 20.7567 10.409C21.1142 11.0954 21.25 11.6616 21.25 12C21.25 12.3384 21.1142 12.9046 20.7567 13.591C20.4061 14.2641 19.8654 15.0074 19.1163 15.6989C17.627 17.0736 15.3077 18.25 12 18.25C8.69232 18.25 6.37297 17.0736 4.88371 15.6989C4.13459 15.0074 3.59385 14.2641 3.24331 13.591C2.88577 12.9046 2.75 12.3384 2.75 12ZM12 4.25C8.30768 4.25 5.62703 5.5736 3.86629 7.1989C2.99041 8.0074 2.34365 8.88909 1.91294 9.71605C1.48923 10.5296 1.25 11.3384 1.25 12C1.25 12.6616 1.48923 13.4704 1.91294 14.284C2.34365 15.1109 2.99041 15.9926 3.86629 16.8011C5.62703 18.4264 8.30768 19.75 12 19.75C15.6923 19.75 18.373 18.4264 20.1337 16.8011C21.0096 15.9926 21.6564 15.1109 22.0871 14.284C22.5108 13.4704 22.75 12.6616 22.75 12C22.75 11.3384 22.5108 10.5296 22.0871 9.71605C21.6564 8.88909 21.0096 8.0074 20.1337 7.1989C18.373 5.5736 15.6923 4.25 12 4.25ZM9.7499 12C9.7499 10.7574 10.7573 9.75002 11.9999 9.75002C13.2425 9.75002 14.2499 10.7574 14.2499 12C14.2499 13.2427 13.2425 14.25 11.9999 14.25C10.7573 14.25 9.7499 13.2427 9.7499 12ZM11.9999 8.25002C9.92883 8.25002 8.2499 9.92896 8.2499 12C8.2499 14.0711 9.92883 15.75 11.9999 15.75C14.071 15.75 15.7499 14.0711 15.7499 12C15.7499 9.92896 14.071 8.25002 11.9999 8.25002Z" fill="#22282F"></path>`;
   } else {
    inputElement.type = 'password';
    iconElement.innerHTML =
     `<path fill-rule="evenodd" clip-rule="evenodd" d="M3.53023 2.4697C3.23734 2.17681 2.76247 2.17681 2.46957 2.4697C2.17668 2.76259 2.17668 3.23747 2.46957 3.53036L5.13723 6.19801C3.91106 7.01861 2.99173 8.00411 2.35714 8.96369C1.64412 10.0419 1.25 11.1513 1.25 12C1.25 12.6616 1.48923 13.4704 1.91294 14.284C2.34365 15.1109 2.99041 15.9926 3.86629 16.8011C5.62703 18.4264 8.30768 19.75 12 19.75C14.1796 19.75 16.0109 19.2887 17.5107 18.5715L20.4696 21.5304C20.7625 21.8233 21.2373 21.8233 21.5302 21.5304C21.8231 21.2375 21.8231 20.7626 21.5302 20.4697L3.53023 2.4697ZM16.3748 17.4356L14.0679 15.1287C13.4751 15.5211 12.7637 15.75 11.9999 15.75C9.92883 15.75 8.2499 14.0711 8.2499 12C8.2499 11.2363 8.47885 10.5248 8.87127 9.93206L6.22202 7.2828C5.0408 8.01882 4.17938 8.92754 3.60829 9.7911C2.98821 10.7287 2.75 11.5502 2.75 12C2.75 12.3384 2.88577 12.9046 3.24331 13.5911C3.59385 14.2641 4.13459 15.0074 4.88371 15.6989C6.37297 17.0736 8.69232 18.25 12 18.25C13.7211 18.25 15.1715 17.9315 16.3748 17.4356ZM9.96904 11.0298C9.82845 11.3235 9.7499 11.6522 9.7499 12C9.7499 13.2427 10.7573 14.25 11.9999 14.25C12.3477 14.25 12.6765 14.1715 12.9701 14.0309L9.96904 11.0298ZM12 5.75001C10.9594 5.75001 10.0189 5.86643 9.17331 6.06728C8.7703 6.16299 8.36601 5.91388 8.2703 5.51088C8.17458 5.10788 8.42369 4.70359 8.82669 4.60787C9.78973 4.37915 10.8467 4.25001 12 4.25001C15.6923 4.25001 18.373 5.5736 20.1337 7.1989C21.0096 8.00741 21.6564 8.88909 22.0871 9.71606C22.5108 10.5296 22.75 11.3384 22.75 12C22.75 13.2108 21.9456 15.0051 20.4152 16.5311C20.1218 16.8236 19.647 16.8229 19.3545 16.5296C19.062 16.2362 19.0627 15.7614 19.3561 15.4689C20.7151 14.1139 21.25 12.6791 21.25 12C21.25 11.6616 21.1142 11.0954 20.7567 10.409C20.4061 9.73592 19.8654 8.9926 19.1163 8.30111C17.627 6.92641 15.3077 5.75001 12 5.75001Z" fill="#22282F"></path>`;
   }
  }
  // اضافه کردن رویداد کلیک برای SVG اول
  showPass1.addEventListener('click', function() {
   togglePasswordVisibility(passwordInput, showPass1);
  });
  // اضافه کردن رویداد کلیک برای SVG دوم
  showPass2.addEventListener('click', function() {
   togglePasswordVisibility(confirmPasswordInput, showPass2);
  });
 });
 document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('input[name="two_factor_enabled"]');
  const secretInput = document.querySelector('input[name="two_factor_secret"]');
  const saveButton = document.getElementById('btn-save-two-factor');
  toggleSwitch.addEventListener('change', function() {
   if (this.checked) {
    secretInput.removeAttribute('disabled');
    saveButton.removeAttribute('disabled');
   } else {
    secretInput.setAttribute('disabled', 'disabled');
    saveButton.setAttribute('disabled', 'disabled');
    // ارسال درخواست Ajax برای غیرفعال کردن گذرواژه دو مرحله‌ای
    fetch("{{ route('dr-two-factor-update') }}", {
      method: 'POST',
      headers: {
       'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       two_factor_enabled: 0, // غیرفعال کردن
       two_factor_secret: null // ارسال null به جای رشته خالی
      }),
     })
     .then(response => response.json())
     .then(data => {
      if (data.success) {
       Toastify({
        text: data.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
         background: "green",
        },
       }).showToast();
      } else {
       Toastify({
        text: data.message || "خطا در به‌روزرسانی تنظیمات",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
         background: "red",
        },
       }).showToast();
      }
     })
     .catch(error => {
      Toastify({
       text: "خطا در برقراری ارتباط با سرور",
       duration: 3000,
       gravity: "top",
       position: "right",
       style: {
        background: "red",
       },
      }).showToast();
     });
   }
  });
  // ارسال فرم گذرواژه دو مرحله‌ای
  document.getElementById("twoFactorForm").addEventListener('submit', function(e) {
   e.preventDefault();
   const form = this;
   const submitButton = form.querySelector('button[type="submit"]');
   const loader = submitButton.querySelector('.loader');
   const buttonText = submitButton.querySelector('.button_text');
   // Show loading state
   buttonText.style.display = 'none';
   loader.style.display = 'block';
   // اعتبارسنجی کلید مخفی اگر تاگل فعال باشد
   if (toggleSwitch.checked && !secretInput.value) {
    Toastify({
     text: "لطفاً کلید مخفی را وارد کنید",
     duration: 3000,
     close: true,
     gravity: "top",
     position: 'right',
     style: {
      background: "red"
     }
    }).showToast();
    buttonText.style.display = 'block';
    loader.style.display = 'none';
    return;
   }
   fetch(form.action, {
     method: form.method,
     headers: {
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      two_factor_enabled: toggleSwitch.checked ? 1 : 0,
      two_factor_secret: secretInput.value
     }),
    })
    .then(response => response.json())
    .then(data => {
     // Reset button to initial state
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     if (data.success) {
      // Show success toast
      Toastify({
       text: data.message || "تنظیمات با موفقیت به‌روزرسانی شد",
       duration: 3000,
       close: true,
       gravity: "top",
       position: 'right',
       style: {
        background: "green"
       }
      }).showToast();
     } else {
      // Show error toast
      Toastify({
       text: data.message || "خطا در به‌روزرسانی تنظیمات",
       duration: 3000,
       close: true,
       gravity: "top",
       position: 'right',
       style: {
        background: "red"
       }
      }).showToast();
     }
    })
    .catch(error => {
     // Reset button to initial state
     buttonText.style.display = 'block';
     loader.style.display = 'none';
     // نمایش خطاهای اعتبارسنجی
     if (error.errors) {
      handleValidationErrors(error.errors);
     } else {
      // Show error toast
      Toastify({
       text: error.message || 'خطا در برقراری ارتباط با سرور',
       duration: 3000,
       close: true,
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

 document.addEventListener('DOMContentLoaded', function () {
    const incompleteSections = @json($doctor->getIncompleteProfileSections());

    if (incompleteSections.includes('پیام‌رسان‌ها')) {
        document.getElementById('messengers-section').classList.add('border-warning');
    }
    // همین‌طور برای سایر بخش‌ها
});
</script>
