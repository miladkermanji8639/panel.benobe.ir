<!-- Send Invoice Sidebar -->
<div aria-hidden="true" class="offcanvas offcanvas-end" id="sendInvoiceOffcanvas">
  <div class="offcanvas-header my-1">
    <h5 class="offcanvas-title">ارسال فاکتور</h5>
    <button aria-label="بستن" class="btn-close text-reset" data-bs-dismiss="offcanvas" type="button"></button>
  </div>
  <div class="offcanvas-body pt-0 flex-grow-1">
    <form>
      <div class="mb-3">
        <label class="form-label" for="invoice-from">ارسال از طرف</label>
        <input class="form-control" id="invoice-from" placeholder="company@email.com" type="text" value="shelbyComapny@email.com"/>
      </div>
      <div class="mb-3">
        <label class="form-label" for="invoice-to">به</label>
        <input class="form-control" id="invoice-to" placeholder="company@email.com" type="text" value="qConsolidated@email.com"/>
      </div>
      <div class="mb-3">
        <label class="form-label" for="invoice-subject">موضوع</label>
        <input class="form-control" id="invoice-subject" placeholder="فاکتور ..." type="text" value="فاکتور قالب های مدیریتی خریداری شده"/>
      </div>
      <div class="mb-3">
        <label class="form-label" for="invoice-message">پیام</label>
        <textarea class="form-control justify-text lh-2" cols="3" id="invoice-message" name="invoice-message" rows="8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
        </textarea>
      </div>
      <div class="mb-4">
        <span class="badge bg-label-primary">
          <i class="ti ti-link ti-xs"></i>
          <span class="align-middle">پیوست فاکتور</span>
        </span>
      </div>
      <div class="mb-3 d-flex flex-wrap">
        <button class="btn btn-primary me-3" data-bs-dismiss="offcanvas" type="button">ارسال</button>
        <button class="btn btn-label-secondary" data-bs-dismiss="offcanvas" type="button">لغو</button>
      </div>
    </form>
  </div>
</div>
<!-- /Send Invoice Sidebar -->
