<!-- Edit Permission Modal -->
<div aria-hidden="true" class="modal fade" id="editPermissionModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-3 p-md-5">
      <button aria-label="نزدیک" class="btn-close btn-pinned" data-bs-dismiss="modal" type="button"></button>
      <div class="modal-body">
        <div class="text-center mb-4">
          <h3 class="mb-2">ویرایش دسترسی</h3>
          <p class="text-muted">دسترسی را طبق نیاز خود ویرایش کنید.</p>
        </div>
        <div class="alert alert-warning" role="alert">
          <h6 class="alert-heading mb-2">هشدار</h6>
          <p class="mb-0"> عنوانی انتخاب کنید قبلا در سیستم نبوده است.</p>
        </div>
        <form class="row" id="editPermissionForm" onsubmit="return false">
          <label class="form-label" for="editPermissionName">عنوان</label>
          <div class="row">
            <div class="col-sm-9 col-8">
              <input class="form-control" id="editPermissionName" name="editPermissionName" placeholder="نویسنده وبلاگ" tabindex="-1" type="text">
            </div>
            <div class="col-sm-2 col-4 text-end">
              <button class="btn btn-primary"  type="submit">بروزرسانی</button>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="form-check">
              <input class="form-check-input" id="editCorePermission" type="checkbox"/>
              <label class="form-check-label" for="editCorePermission"> دسترسی اصلی (اولویت دار)</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Edit Permission Modal -->
