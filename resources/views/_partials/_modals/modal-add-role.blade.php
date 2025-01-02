<!-- Add Role Modal -->
<div aria-hidden="true" class="modal fade" id="addRoleModal" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
    <div class="modal-content p-3 p-md-5">
      <button aria-label="نزدیک" class="btn-close btn-pinned" data-bs-dismiss="modal" type="button"></button>
      <div class="modal-body">
        <div class="text-center mb-4">
          <h3 class="role-title mb-2">افزودن نقش جدید</h3>
          <p class="text-muted">تنظیم مجوزهای نقش</p>
        </div>
        <!-- Add role form -->
        <form class="row g-3" id="addRoleForm" onsubmit="return false">
          <div class="col-12 mb-4">
            <label class="form-label" for="modalRoleName">عنوان نقش</label>
            <input class="form-control" id="modalRoleName" name="modalRoleName" placeholder="حسابدار ، ادیتور ، ..." tabindex="-1" type="text"/>
          </div>
          <div class="col-12">
            <h5>مجوزهای نقش</h5>
            <!-- Permission table -->
            <div class="table-responsive">
              <table class="table table-flush-spacing">
                <tbody>
                <tr>
                  <td class="text-nowrap fw-medium"> دسترسی ها
                    <i class="ti ti-info-circle" data-bs-placement="top" data-bs-toggle="tooltip" title=""></i>
                  </td>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" id="selectAll" type="checkbox"/>
                      <label class="form-check-label" for="selectAll"> انتخاب همه</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت کاربر</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="userManagementRead" type="checkbox"/>
                        <label class="form-check-label" for="userManagementRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="userManagementWrite" type="checkbox"/>
                        <label class="form-check-label" for="userManagementWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="userManagementCreate" type="checkbox"/>
                        <label class="form-check-label" for="userManagementCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت محتوا</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="contentManagementRead" type="checkbox"/>
                        <label class="form-check-label" for="contentManagementRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="contentManagementWrite" type="checkbox"/>
                        <label class="form-check-label" for="contentManagementWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="contentManagementCreate" type="checkbox"/>
                        <label class="form-check-label" for="contentManagementCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت ایرادات</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="dispManagementRead" type="checkbox"/>
                        <label class="form-check-label" for="dispManagementRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="dispManagementWrite" type="checkbox"/>
                        <label class="form-check-label" for="dispManagementWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="dispManagementCreate" type="checkbox"/>
                        <label class="form-check-label" for="dispManagementCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت دیتابیس</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="dbManagementRead" type="checkbox"/>
                        <label class="form-check-label" for="dbManagementRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="dbManagementWrite" type="checkbox"/>
                        <label class="form-check-label" for="dbManagementWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="dbManagementCreate" type="checkbox"/>
                        <label class="form-check-label" for="dbManagementCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت مالی</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="finManagementRead" type="checkbox"/>
                        <label class="form-check-label" for="finManagementRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="finManagementWrite" type="checkbox"/>
                        <label class="form-check-label" for="finManagementWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="finManagementCreate" type="checkbox"/>
                        <label class="form-check-label" for="finManagementCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">گزارشات</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="reportingRead" type="checkbox"/>
                        <label class="form-check-label" for="reportingRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="reportingWrite" type="checkbox"/>
                        <label class="form-check-label" for="reportingWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="reportingCreate" type="checkbox"/>
                        <label class="form-check-label" for="reportingCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">کنترل API</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="apiRead" type="checkbox"/>
                        <label class="form-check-label" for="apiRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="apiWrite" type="checkbox"/>
                        <label class="form-check-label" for="apiWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="apiCreate" type="checkbox"/>
                        <label class="form-check-label" for="apiCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">مدیریت رسانه</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="repoRead" type="checkbox"/>
                        <label class="form-check-label" for="repoRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="repoWrite" type="checkbox"/>
                        <label class="form-check-label" for="repoWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="repoCreate" type="checkbox"/>
                        <label class="form-check-label" for="repoCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap fw-medium">حقوق و دستمزد</td>
                  <td>
                    <div class="d-flex">
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="payrollRead" type="checkbox"/>
                        <label class="form-check-label" for="payrollRead"> مشاهده</label>
                      </div>
                      <div class="form-check me-3 me-lg-5">
                        <input class="form-check-input" id="payrollWrite" type="checkbox"/>
                        <label class="form-check-label" for="payrollWrite"> ویرایش</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="payrollCreate" type="checkbox"/>
                        <label class="form-check-label" for="payrollCreate"> افزودن</label>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- Permission table -->
          </div>
          <div class="col-12 text-center mt-4">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">ثبت نهایی</button>
            <button aria-label="" class="btn btn-label-secondary" data-bs-dismiss="modal" type="reset"> بازگشت</button>
          </div>
        </form>
        <!--/ Add role form -->
      </div>
    </div>
  </div>
</div>
<!--/ Add Role Modal -->
