<!-- Add Permission Modal -->
<div aria-hidden="true" class="modal fade" id="addPermissionModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-3 p-md-5">
      <button aria-label="نزدیک" class="btn-close btn-pinned" data-bs-dismiss="modal" type="button"></button>
      <div class="modal-body">
        <div class="text-center mb-4">
          <h3 class="mb-2">افزودن دسترسی</h3>
          <p class="text-muted">یک دسترسی جدید بسازید.</p>
        </div>
        <form class="row" id="addPermissionForm" onsubmit="return false">
          <div class="col-12 mb-3">
            <label class="form-label" for="modalPermissionName">عنوان</label>
            <input autofocus class="form-control" id="modalPermissionName" name="modalPermissionName" placeholder="دسترسی به داشبورد" type="text"/>
          </div>
          <div class="col-12 mb-2">
            <div class="form-check">
              <input class="form-check-input" id="corePermission" type="checkbox"/>
              <label class="form-check-label" for="corePermission"> دسترسی اصلی (اولویت دار)</label>
            </div>
          </div>
          <div class="col-12 text-center demo-vertical-spacing">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">ایجاد دسترسی</button>
            <button aria-label="بستن" class="btn btn-label-secondary" data-bs-dismiss="modal" type="reset">
              بستن
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Add Permission Modal -->
