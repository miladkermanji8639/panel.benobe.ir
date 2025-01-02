<!-- Add New Credit Card Modal -->
<div aria-hidden="true" class="modal fade" id="editCCModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-simple modal-add-new-cc">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">ویرایش کارت</h3>
          <p class="text-muted">جزئیات کارت ذخیره شده خود را ویرایش کنید</p>
        </div>
        <form class="row g-3" id="editCCForm" onsubmit="return false">
          <div class="col-12">
            <label class="form-label w-100" for="modalEditCard">شماره کارت</label>
            <div class="input-group input-group-merge">
              <input aria-describedby="modalEditCard2" class="form-control credit-card-mask-edit ltr" id="modalEditCard" name="modalEditCard" placeholder="4356 3215 6548 7898" type="text" value="4356 3215 6548 7898"/>
              <span class="input-group-text cursor-pointer p-1" id="modalEditCard2">
                <span class="card-type-edit"></span>
              </span>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditName">نام</label>
            <input class="form-control" id="modalEditName" placeholder="نـوید" type="text" value="نـوید"/>
          </div>
          <div class="col-6 col-md-3">
            <label class="form-label" for="modalEditExpiryDate">انقضا تاریخ</label>
            <input class="form-control expiry-date-mask-edit" id="modalEditExpiryDate" placeholder="MM/YY" type="text" value="08/28"/>
          </div>
          <div class="col-6 col-md-3">
            <label class="form-label" for="modalEditCvv">cvv</label>
            <div class="input-group input-group-merge">
              <input class="form-control cvv-code-mask-edit" id="modalEditCvv" maxlength="3" placeholder="654" type="text" value="XXX"/>
              <span class="input-group-text cursor-pointer" id="modalEditCvv2">
                <i class="ti ti-help text-muted" data-bs-placement="top" data-bs-toggle="tooltip" title="ارزش تأیید کارت"></i>
              </span>
            </div>
          </div>
          <div class="col-12 mt-3">
            <label class="switch">
              <input class="switch-input" type="checkbox"/>
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label">کارت اصلی</span>
            </label>
          </div>
          <div class="col-12 text-center mt-5">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">به روزرسانی</button>
            <button aria-label="Close" class="btn btn-label-danger" data-bs-dismiss="modal" type="reset"> بازگشت</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Add New Credit Card Modal -->
