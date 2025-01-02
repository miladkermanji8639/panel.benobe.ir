<!DOCTYPE html>
<html lang="fa">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>محل مطب من</title>
 @include('dr.panel.layouts.partials.head-tags')
 <link rel="stylesheet" href="{{ asset('dr-assets/panel/css/bootstrap.min.css') }}">
 <link rel="stylesheet" href="{{ asset('dr-assets/panel/css/style.css') }}">
 <link rel="stylesheet" href="{{ asset('dr-assets/panel/css/panel.css') }}">
 <link rel="stylesheet" href="{{ asset('dr-assets/panel/profile/edit-profile.css') }}">
 <link rel="stylesheet" href="{{ asset('dr-assets/panel/css/doctors-clininc/activation/index.css') }}">
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"
  integrity="sha256-46AJpZrjDpAoB+B4dRyeHrmxOZYU9qr4SNRTlDrY01c=" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
 <header class="bg-light text-dark p-3 text-left my-shodow">
  <h5>محل مطب من</h5>
 </header>
 <div class="d-flex w-100 justify-content-center">
  <div class="my-container-fluid mt-5 border-radius-8 d-flex w-100 justify-content-center">
   <div class="row d-flex w-100 justify-content-center">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 border-radius-8">
     <div class="card mt-3 shadow">
      <div class="card-body">
       <div id="map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830500.4009212545!2d46.242214860578336!3d35.59955895238797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff85011a8bbc2a3%3A0xeecda6b7fe6e96b0!2sKurdistan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1712302593591!5m2!1sen!2s"
         frameborder="0"></iframe>
       </div>
       <p class="text-start font-weight-bold mt-1">محل مطب خود را از روی نقشه انتخاب کنید</p>
       <div class="input-group">
        <input type="text" class="my-form-control w-100" placeholder="آدرس شما" readonly data-toggle="modal"
         data-target="#addressModalCenter">
        <div class="modal fade" id="addressModalCenter" tabindex="-1" role="dialog" aria-labelledby="addressModalCenterLabel"
         aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content border-radius-8">
           <div class="modal-header">
            <h5 class="modal-title" id="addressModalCenterLabel">ثبت آدرس</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
            </button>
           </div>
           <div class="modal-body">
            <textarea style="height: 90px !important" placeholder="تهران,آزادی" name="" id="" cols="1" rows="1"
             class="my-form-control-light w-100"></textarea>
            <div class="w-100">
             <button type="button" class="btn btn-primary h-50 w-100" onclick="registerAddress()">ثبت</button>
            </div>
           </div>
          </div>
         </div>
        </div>
        <script>
         function registerAddress() {
          var address = document.getElementById('addressInput').value;
          // کد ثبت آدرس را اینجا بنویسید
          alert('آدرس شما با موفقیت ثبت شد: ' + address);
         }
        </script>
        <div class="mt-3 w-100">
         <button class="btn btn-primary h-50 w-100" type="button" data-toggle="modal" data-target="#doneModal">انجام
          شد</button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
 <div class="modal fade" id="doneModal" tabindex="-1" role="dialog" aria-labelledby="doneModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content border-radius-8">
    <div class="modal-header">
     <h5 class="modal-title fs-6 font-weight-bold" id="doneModalLabel">اطلاعات تماس مطب</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
     </button>
    </div>
    <div class="modal-body">
     <div class="form-group position-relative" id="phoneGroup1">
      <label class="label-top-input-special-takhasos" for="clinicPhone1">شماره تلفن مطب</label>
      <div class="input-group">
       <input type="text" class="form-control h-50 border-radius-4" id="clinicPhone1" placeholder="شماره تلفن مطب 1">
       <div class="input-group-append">
        <button class="btn btn-danger" type="button" id="removeButton1" style="display: none;">
         <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-red-500">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M10.4062 2.25L10.4415 2.25H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24992 14.459 2.27844C14.7371 2.31019 15.0296 2.38361 15.3025 2.58033C15.5754 2.77704 15.7375 3.03124 15.8556 3.28508C15.9616 3.51299 16.0559 3.79574 16.1562 4.09685L16.1562 4.09687L16.1562 4.0969L16.1674 4.13037L16.5406 5.25H19H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H5H7.45943L7.83264 4.13037L7.8438 4.09688L7.84381 4.09686C7.94414 3.79575 8.03835 3.51299 8.14438 3.28508C8.26246 3.03124 8.42459 2.77704 8.69752 2.58033C8.97045 2.38361 9.26287 2.31019 9.54102 2.27844C9.79077 2.24992 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85423 14.4457 3.82281 14.4348 3.80824C14.4298 3.80149 14.427 3.79862 14.4264 3.79801L14.4254 3.79719L14.4243 3.79654C14.4236 3.79616 14.42 3.79439 14.412 3.79174C14.3947 3.78604 14.3585 3.7767 14.2888 3.76875C14.1345 3.75113 13.9236 3.75 13.5585 3.75H10.4415C10.0764 3.75 9.86551 3.75113 9.71117 3.76875C9.64154 3.7767 9.60531 3.78604 9.58804 3.79174C9.58005 3.79439 9.57643 3.79616 9.57566 3.79654L9.57458 3.79719L9.57363 3.79801C9.57302 3.79862 9.57019 3.80149 9.56516 3.80824C9.55428 3.82281 9.53397 3.85423 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25ZM5.80166 6.75L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8988 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8988 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75H16H8H5.80166ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V14C13.25 14.4142 13.5858 14.75 14 14.75C14.4142 14.75 14.75 14.4142 14.75 14V10Z"
           fill="currentColor"></path>
         </svg>
        </button>
       </div>
      </div>
     </div>
     <div id="phoneInputs"></div>
     <div class="form-group" id="addPhoneLink">
      <a href="#" class="font-size-13 text-decoration-underline" onclick="addPhone()" id="addPhoneButton">افزودن شماره
       تلفن جدید</a>
     </div>
     <div class="form-group position-relative mt-3">
      <label class="label-top-input-special-takhasos" for="secretaryPhone">شماره موبایل منشی</label>
      <input type="text" class="form-control h-50 border-radius-4" id="secretaryPhone" placeholder="شماره موبایل منشی">
     </div>
     <div class="alert alert-info font-size-13" role="alert">
      لطفا برای اطلاع رسانی نوبت های مطب شماره موبایل منشی خود را وارد کنید
     </div>
     <div class="mt-1">
      <button type="button" class="btn btn-primary w-100 h-50" onclick="saveInfo()">ذخیره</button>
     </div>
    </div>
   </div>
  </div>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 <script>
  let phoneCount = 1;

  function addPhone() {
   if (phoneCount >= 3) {
    Swal.fire({
     icon: 'warning',
     title: 'حداکثر تعداد شماره تلفن',
     text: 'شما نمی‌توانید بیشتر از ۳ شماره تلفن مطب اضافه کنید.'
    });
    return;
   }
   phoneCount++;
   const phoneInput = `
      <div class="form-group" id="phoneGroup${phoneCount}">
        <div class="input-group position-relative">
        <label class="label-top-input-special-takhasos" for="clinicPhone${phoneCount}">شماره تلفن مطب ${phoneCount}</label>
          <input type="text" class="form-control h-50 border-radius-4" id="clinicPhone${phoneCount}" placeholder="شماره تلفن مطب ${phoneCount}">
          <div class="input-group-append">
            <button class="btn btn-danger" type="button" onclick="removePhone(${phoneCount})" id="removeButton${phoneCount}"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-red-500">
          <path fill-rule="evenodd" clip-rule="evenodd"
           d="M10.4062 2.25L10.4415 2.25H13.5585L13.5938 2.25C13.9112 2.24996 14.2092 2.24992 14.459 2.27844C14.7371 2.31019 15.0296 2.38361 15.3025 2.58033C15.5754 2.77704 15.7375 3.03124 15.8556 3.28508C15.9616 3.51299 16.0559 3.79574 16.1562 4.09685L16.1562 4.09687L16.1562 4.0969L16.1674 4.13037L16.5406 5.25H19H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H19.7017L19.1217 15.449L19.1182 15.5016C19.0327 16.7844 18.9637 17.8205 18.8017 18.6336C18.6333 19.4789 18.3469 20.185 17.7553 20.7384C17.1637 21.2919 16.4401 21.5307 15.5855 21.6425C14.7634 21.75 13.725 21.75 12.4394 21.75H12.3867H11.6133H11.5606C10.275 21.75 9.23655 21.75 8.41451 21.6425C7.55986 21.5307 6.83631 21.2919 6.24472 20.7384C5.65312 20.185 5.3667 19.4789 5.19831 18.6336C5.03633 17.8205 4.96727 16.7844 4.88178 15.5016L4.87827 15.449L4.29834 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H5H7.45943L7.83264 4.13037L7.8438 4.09688L7.84381 4.09686C7.94414 3.79575 8.03835 3.51299 8.14438 3.28508C8.26246 3.03124 8.42459 2.77704 8.69752 2.58033C8.97045 2.38361 9.26287 2.31019 9.54102 2.27844C9.79077 2.24992 10.0888 2.24996 10.4062 2.25ZM9.04057 5.25H14.9594L14.7443 4.60472C14.6289 4.25832 14.5611 4.05863 14.4956 3.91778C14.466 3.85423 14.4457 3.82281 14.4348 3.80824C14.4298 3.80149 14.427 3.79862 14.4264 3.79801L14.4254 3.79719L14.4243 3.79654C14.4236 3.79616 14.42 3.79439 14.412 3.79174C14.3947 3.78604 14.3585 3.7767 14.2888 3.76875C14.1345 3.75113 13.9236 3.75 13.5585 3.75H10.4415C10.0764 3.75 9.86551 3.75113 9.71117 3.76875C9.64154 3.7767 9.60531 3.78604 9.58804 3.79174C9.58005 3.79439 9.57643 3.79616 9.57566 3.79654L9.57458 3.79719L9.57363 3.79801C9.57302 3.79862 9.57019 3.80149 9.56516 3.80824C9.55428 3.82281 9.53397 3.85423 9.50441 3.91778C9.43889 4.05863 9.37113 4.25832 9.25566 4.60472L9.04057 5.25ZM5.80166 6.75L6.37495 15.3492C6.4648 16.6971 6.52883 17.6349 6.6694 18.3405C6.80575 19.025 6.99608 19.3873 7.2695 19.6431C7.54291 19.8988 7.91707 20.0647 8.60907 20.1552C9.32247 20.2485 10.2625 20.25 11.6133 20.25H12.3867C13.7375 20.25 14.6775 20.2485 15.3909 20.1552C16.0829 20.0647 16.4571 19.8988 16.7305 19.6431C17.0039 19.3873 17.1943 19.025 17.3306 18.3405C17.4712 17.6349 17.5352 16.6971 17.6251 15.3492L18.1983 6.75H16H8H5.80166ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V14C13.25 14.4142 13.5858 14.75 14 14.75C14.4142 14.75 14.75 14.4142 14.75 14V10Z"
           fill="currentColor"></path>
         </svg></button>
          </div>
        </div>
      </div>
    `;
   document.getElementById('phoneInputs').insertAdjacentHTML('beforeend', phoneInput);
   updateRemoveButtonVisibility();
  }

  function removePhone(index) {
   Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: "این شماره تلفن حذف خواهد شد!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'بله، حذف کن!'
   }).then((result) => {
    if (result.isConfirmed) {
     const phoneInputGroup = document.getElementById(`phoneGroup${index}`);
     phoneInputGroup.remove();
     phoneCount--;
     updateRemoveButtonVisibility();
    }
   });
  }

  function updateRemoveButtonVisibility() {
   // هیچ دکمه حذف برای ورودی اصلی وجود ندارد
   if (phoneCount === 1) {
    document.getElementById('removeButton1').style.display = 'none';
   } else {
    for (let i = 2; i <= phoneCount; i++) {
     document.getElementById(`removeButton${i}`).style.display = 'inline-block';
    }
   }
   // نمایش یا پنهان کردن لینک افزودن شماره تلفن
   const addPhoneLink = document.getElementById('addPhoneLink');
   if (phoneCount >= 3) {
    addPhoneLink.style.display = 'none'; // پنهان کردن لینک افزودن
   } else {
    addPhoneLink.style.display = 'block'; // نمایش لینک افزودن
   }
  }
 </script>
 @include('dr.panel.layouts.partials.scripts')

</body>

</html>
