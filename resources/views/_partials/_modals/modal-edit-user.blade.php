<!-- Edit User Modal -->
<div aria-hidden="true" class="modal fade" id="editUser" tabindex="-1">
  <div class="modal-dialog modal-lg modal-simple modal-edit-user">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center mb-4">
          <h3 class="mb-2">ویرایش اطلاعات کاربر</h3>
          <p class="text-muted">به روزرسانی اطلاعات کاربر یک ممیزی حریم خصوصی دریافت می کند.</p>
        </div>
        <form class="row g-3" id="editUserForm" onsubmit="return false">
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserFirstName">نام کوچک</label>
            <input class="form-control" id="modalEditUserFirstName" name="modalEditUserFirstName" placeholder="امیر" type="text"/>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserLastName">نام خانوادگی</label>
            <input class="form-control" id="modalEditUserLastName" name="modalEditUserLastName" placeholder="مقصودلو" type="text"/>
          </div>
          <div class="col-12">
            <label class="form-label" for="modalEditUserName">نام کاربری</label>
            <input class="form-control" id="modalEditUserName" name="modalEditUserName" placeholder="john.doe.007" type="text"/>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserEmail">ایمیل</label>
            <input class="form-control" id="modalEditUserEmail" name="modalEditUserEmail" placeholder="example@domain.com" type="text"/>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserStatus">وضعیت</label>
            <select aria-label="نمونه انتخاب پیش فرض" class="select2 form-select" id="modalEditUserStatus" name="modalEditUserStatus">
              <option selected>وضعیت</option>
              <option value="1">فعال</option>
              <option value="2">غیر فعال</option>
              <option value="3">معلق</option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditTaxID">شناسه مالیاتی</label>
            <input class="form-control modal-edit-tax-id" id="modalEditTaxID" name="modalEditTaxID" placeholder="123 456 7890" type="text"/>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserPhone">شماره تلفن</label>
            <div class="input-group">
              <input class="form-control phone-number-mask ltr" id="modalEditUserPhone" name="modalEditUserPhone" placeholder="913 000 0000" type="text"/>
              <span class="input-group-text">IR (+98)</span>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserLanguage">زبان</label>
            <select class="select2 form-select" id="modalEditUserLanguage" multiple name="modalEditUserLanguage">
              <option value="">انتخاب کنید</option>
              <option selected value="english">انگلیسی</option>
              <option value="spanish">اسپانیایی</option>
              <option value="french">فرانسوی</option>
              <option value="german">آلمانی</option>
              <option value="dutch">هلندی</option>
              <option value="hebrew">عبری</option>
              <option value="sanskrit">سانسکریت</option>
              <option value="hindi">هندی</option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label" for="modalEditUserCountry">کشور</label>
            <select class="select2 form-select" data-allow-clear="true" id="modalEditUserCountry" name="modalEditUserCountry">
              <option value="">انتخاب کنید</option>
              <option value="Australia">استرالیا</option>
              <option value="Bangladesh">بنگلادش</option>
              <option value="Belarus">بلاروس</option>
              <option value="Brazil">برزیل</option>
              <option value="Canada">کانادا</option>
              <option value="China">چین</option>
              <option value="France">فرانسه</option>
              <option value="Germany">آلمان</option>
              <option value="India">هندوستان</option>
              <option value="Indonesia">اندونزی</option>
              <option value="Israel">اسرائيل</option>
              <option value="Italy">ایتالیا</option>
              <option value="Japan">ژاپن</option>
              <option value="Korea">جمهوری کره</option>
              <option value="Mexico">مکزیک</option>
              <option value="Philippines">فیلیپین</option>
              <option value="Russia">فدراسیون روسیه</option>
              <option value="South Africa">آفریقای جنوبی</option>
              <option value="Thailand">تایلند</option>
              <option value="Turkey">ترکیه</option>
              <option value="Ukraine">اوکراین</option>
              <option value="United Arab Emirates">امارات متحده عربی</option>
              <option value="United Kingdom">انگلستان</option>
              <option value="United States">ایالات متحده</option>
            </select>
          </div>
          <div class="col-12">
            <label class="switch">
              <input class="switch-input" type="checkbox"/>
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label">به عنوان آدرس صورتحساب استفاده شود؟</span>
            </label>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-primary me-sm-3 me-1" type="submit">ارسال</button>
            <button aria-label="بستن" class="btn btn-label-secondary" data-bs-dismiss="modal" type="reset"> لغو</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--/ Edit User Modal -->
