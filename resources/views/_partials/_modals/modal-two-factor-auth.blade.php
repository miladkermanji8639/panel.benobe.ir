<!-- Two Factor Auth Modal -->
<div aria-hidden="true" class="modal fade" id="twoFactorAuth" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-simple">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">انتخاب روش تایید دومرحله</h3>
          <p class="text-muted"> روشی را که برای شما راحت تر است انتخاب کنید هر دو روش امنیت کافی را دارند.</p>
        </div>
        <div class="row">
          <div class="col-12 mb-3">
            <div class="form-check custom-option custom-option-basic">
              <label class="form-check-label custom-option-content ps-3" data-bs-target="#twoFactorAuthOne" data-bs-toggle="modal" for="customRadioTemp1">
                <input class="form-check-input d-none" id="customRadioTemp1" name="customRadioTemp" type="radio" value=""/>
                <span class="d-flex align-items-start">
                  <i class="ti ti-settings ti-xl me-3"></i>
                  <span>
                    <span class="custom-option-header">
                      <span class="h4 mb-2">اپلیکیشن های کد تایید</span>
                    </span>
                    <span class="custom-option-body">
                      <span class="mb-0"> مانند اپلیکیشن موبایل Google Authenticator یا Microsoft Authenticator .</span>
                    </span>
                    .
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check custom-option custom-option-basic">
              <label class="form-check-label custom-option-content ps-3" data-bs-target="#twoFactorAuthTwo" data-bs-toggle="modal" for="customRadioTemp2">
                <input class="form-check-input d-none" id="customRadioTemp2" name="customRadioTemp" type="radio" value=""/>
                <span class="d-flex align-items-start">
                  <i class="ti ti-message ti-xl me-3"></i>
                  <span>
                    <span class="custom-option-header">
                      <span class="h4 mb-2">SMS از طریق ارسال</span>
                    </span>
                    <span class="custom-option-body">
                      <span class="mb-0">صورت نیاز ، ما یک کد را از طریق پیامک ارسال خواهیم کرد.</span>
                    </span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Modal Authentication App -->
<div aria-hidden="true" class="modal fade" id="twoFactorAuthOne" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-simple">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-2">
          <h3 class="mb-0">اپلیکیشن احراز هویت</h3>
        </div>
        <h5 class="mb-2 pt-1 text-break">برنامه های احراز هویت کننده</h5>
        <p class="mb-4"> با استفاده از یک برنامه تأیید کننده مانند Google Authenticator، Microsoft Authenticator، Authy یا 1Password، کد QR را اسکن کنید. یک کد 6 رقمی برای وارد کردن در فیلد دریافت می کنید.</p>
        <div class="text-center">
          <img alt="کد QR" src="{{ asset('assets/img/icons/misc/authentication-QR.png') }}" width="140"/>
        </div>
        <div class="alert alert-warning alert-dismissible my-3" role="alert">
          <h5 class="alert-heading mb-2 text-break">ASDLKNASDA9AHS678dGhASD78AB</h5>
          <p class="mb-0">اگر در استفاده از کد QR مشکل دارید، ورود دستی را در برنامه خود انتخاب کنید</p>
        </div>
        <div class="mb-4">
          <input class="form-control" id="twoFactorAuthInput" placeholder="کد احراز هویت" type="email"/>
        </div>
        <div class="text-end">
          <button class="btn btn-label-secondary me-sm-3 me-1" data-bs-target="#twoFactorAuth" data-bs-toggle="modal" type="button">
            <i class="ti ti-arrow-left ti-xs me-1 scaleX-n1-rtl"></i>
            <span class="align-middle d-none d-sm-inline-block">برگشت</span>
          </button>
          <button aria-label="بستن" class="btn btn-primary" data-bs-dismiss="modal" type="button">
            <span class="align-middle d-none d-sm-inline-block">ادامه
              <i class="ti ti-arrow-right ti-xs ms-1 scaleX-n1-rtl"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Modal Authentication via SMS -->
<div aria-hidden="true" class="modal fade" id="twoFactorAuthTwo" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-simple">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <h5 class="mb-2 pt-1">شماره تلفن همراه خود را برای پیامک وارد کنید</h5>
        <p class="mb-4"> شماره تلفن همراه خود را با کد کشور وارد کنید و ما یک کد تأیید برای شما ارسال خواهیم کرد.</p>
        <div class="mb-4">
          <input class="form-control ltr" id="twoFactorAuthInputSms" placeholder="+98 0900 0000 0000" type="text"/>
        </div>
        <div class="text-end">
          <button class="btn btn-label-secondary me-sm-3 me-1" data-bs-target="#twoFactorAuth" data-bs-toggle="modal" type="button">
            <i class="ti ti-arrow-left ti-xs me-1 scaleX-n1-rtl"></i>
            <span class="align-middle d-none d-sm-inline-block">برگشت</span>
          </button>
          <button aria-label="بستن" class="btn btn-primary" data-bs-dismiss="modal" type="button">
            <span class="align-middle d-none d-sm-inline-block">ادامه
              <i class="ti ti-arrow-right ti-xs ms-1 scaleX-n1-rtl"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/ Two Factor Auth Modal -->

<script type="module">
  // Check selected custom option
  setTimeout(() => {
    window.Helpers.initCustomOptionCheck();
  }, 200);

</script>
