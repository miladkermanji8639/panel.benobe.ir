<div aria-hidden="true" class="modal fade" id="upgradePlanModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">خرید اشتراک</h3>
          <p>اشتراک مناسب کاربر را انتخاب کنید.</p>
        </div>
        <form class="row g-3" id="upgradePlanForm" onsubmit="return false">
          <div class="col-sm-8">
            <label class="form-label" for="choosePlan">اشتراک را انتخاب کنید</label>
            <select aria-label="طرح را انتخاب کنید" class="form-select" id="choosePlan" name="choosePlan">
              <option selected>انتخاب اشتراک</option>
              <option value="standard">اقتصادی - 99 تومان در ماه</option>
              <option value="exclusive">استاندارد - 249 تومان در ماه</option>
              <option value="Enterprise">تجاری - 499 تومان در ماه</option>
            </select>
          </div>
          <div class="col-sm-4 d-flex align-items-end">
            <button class="btn btn-primary" type="submit">خرید اشتراک</button>
          </div>
        </form>
      </div>
      <hr class="mx-md-n5 mx-n3"/>
      <div class="modal-body">
        <p class="mb-0">اشتراک فعلی استاندارد است</p>
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="d-flex justify-content-center me-2 mt-2">
            <sup class="h6 pricing-currency pt-1 mt-3 mb-0 me-1 text-primary">ءتء</sup>
            <h1 class="display-5 mb-0 text-primary" style="line-height: 80%">99</h1>
            <sub class="h6 pricing-duration mt-auto mb-2 text-muted">درماه</sub>
          </div>
          <button class="btn btn-label-danger cancel-subscription mt-3">لغو اشتراک</button>
        </div>
      </div>
    </div>
  </div>
</div>
