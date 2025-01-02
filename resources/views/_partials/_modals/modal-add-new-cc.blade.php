<!-- Add New Credit Card Modal -->
<div aria-hidden="true" class="modal fade" id="addNewCCModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">افزودن حساب بانکی</h3>
          <p class="text-muted">کارت را برای پرداخت و خرید خدمات وارد کنید</p>
        </div>
        <form class="row g-3" id="addNewCCForm" onsubmit="return false">
          <div class="col-12">
            <label class="form-label w-100" for="modalAddCard">شماره کارت</label>
            <div class="input-group input-group-merge">
              <input aria-describedby="modalAddCard2" class="form-control credit-card-mask ltr" id="modalAddCard" name="modalAddCard" placeholder="1356 3215 6548 7898" type="text"/>
              <span class="input-group-text cursor-pointer p-1" id="modalAddCard2">
                <span class="card-type "></span>
              </span>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalAddCardName">نام
              <input class="form-control" id="modalAddCardName" placeholder="" type="text"/>
            </label>
          </div>
          <div class="col-6 col-md-3">
            <label class="form-label" for="modalAddCardExpiryDate">تاریخ انقضا</label>
            <input class="form-control expiry-date-mask" id="modalAddCardExpiryDate" placeholder="MM/YY" type="text"/>
          </div>
          <div class="col-6 col-md-3 mb-2">
            <label class="form-label" for="modalAddCardCvv">کد CVV</label>
            <div class="input-group input-group-merge">
              <input class="form-control cvv-code-mask ltr" id="modalAddCardCvv" maxlength="3" placeholder="654" type="text"/>
              <span class="input-group-text cursor-pointer" id="modalAddCardCvv2">
                <i class="text-muted ti ti-help" data-bs-placement="top" data-bs-toggle="tooltip" title="تأیید کارت"></i>
              </span>
            </div>
          </div>
          <div class="col-12  mb-3">
            <label class="switch">
              <input class="switch-input" type="checkbox"/>
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label">ذخیره کارت برای بعدا؟</span>
            </label>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">ارسال اطلاعات</button>
            <button aria-label="" class="btn btn-label-secondary btn-reset" data-bs-dismiss="modal" type="reset">بازگشت</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Add New Credit Card Modal -->
