<!-- Enable OTP Modal -->
<div aria-hidden="true" class="modal fade" id="enableOTP" tabindex="-1">
  <div class="modal-dialog modal-simple modal-enable-otp modal-dialog-centered">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">فعال کردن رمز عبور یکبار</h3>
          <p>شماره تلفن همراه خود را برای پیامک تأیید کنید</p>
        </div>
        <p> شماره تلفن همراه خود را با کد کشور وارد کنید و ما یک کد تأیید برای شما ارسال خواهیم کرد.</p>
        <form class="row g-3" id="enableOTPForm" onsubmit="return false">
          <div class="col-12">
            <label class="form-label" for="modalEnableOTPPhone">شماره تلفن</label>
            <div class="input-group">
              <input class="form-control phone-number-otp-mask ltr" id="modalEnableOTPPhone" name="modalEnableOTPPhone" placeholder="910 000 0000" type="text"/>
              <span class="input-group-text">IR (+98)</span>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">ارسال کد</button>
            <button aria-label="بازگشت" class="btn btn-label-secondary" data-bs-dismiss="modal" type="reset">بازگشت</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Enable OTP Modal -->
