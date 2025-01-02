@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%AA%D9%82%D9%88%DB%8C%D9%85%20%D8%B4%D9%85%D8%B3%DB%8C%26%2339%3B) />

@section('vendor-style')
@vite([
'resources/assets/vendor/libs/fullcalendar/fullcalendar.scss',
'resources/assets/vendor/libs/flatpickr/flatpickr.scss',
'resources/assets/vendor/libs/select2/select2.scss',
'resources/assets/vendor/libs/quill/editor.scss',
'resources/assets/vendor/libs/@form-validation/form-validation.scss',
])
@endsection

@section('page-style')
@vite(['resources/assets/vendor/scss/pages/app-calendar.scss'])
@endsection

@section('vendor-script')
@vite([
'resources/assets/vendor/libs/fullcalendar/fullcalendar.js',
'resources/assets/vendor/libs/@form-validation/popular.js',
'resources/assets/vendor/libs/@form-validation/bootstrap5.js',
'resources/assets/vendor/libs/@form-validation/auto-focus.js',
'resources/assets/vendor/libs/select2/select2.js',
'resources/assets/vendor/libs/jdate/jdate.min.js',
'resources/assets/vendor/libs/flatpickr/flatpickr-jdate.js',
'resources/assets/vendor/libs/flatpickr-jalali/dist/l10n/fa.js',
'resources/assets/vendor/libs/moment/moment.js',
])
@endsection

@section('page-script')
@vite([
'resources/assets/js/app-calendar-jalali.js',
])
@endsection

@section('content')
<div class="card app-calendar-wrapper">
  <div class="row g-0">
    <!-- Calendar Sidebar -->
    <div class="col app-calendar-sidebar"
         id="app-calendar-sidebar">
      <div class="border-bottom p-4 my-sm-0 mb-3">
        <div class="d-grid">
          <button aria-controls="addEventSidebar"
                  class="btn btn-primary btn-toggle-sidebar"
                  data-bs-target="#addEventSidebar"
                  data-bs-toggle="offcanvas">
            <i class="ti ti-plus me-1"></i>
            <span class="align-middle">افزودن رویداد</span>
          </button>
        </div>
      </div>
      <div class="p-3">
        <!-- inline calendar (flatpicker) -->
        <div class="inline-calendar"></div>
        <hr class="container-m-nx mb-4 mt-3" />
        <!-- Filter -->
        <div class="mb-3 ms-3">
          <small class="text-small text-muted text-uppercase align-middle">فیلتر کنید</small>
        </div>
        <div class="form-check mb-2 ms-3">
          <input checked
                 class="form-check-input select-all"
                 data-value="all"
                 id="selectAll"
                 type="checkbox" />
          <label class="form-check-label"
                 for="selectAll">مشاهده همه</label>
        </div>
        <div class="app-calendar-events-filter ms-3">
          <div class="form-check form-check-danger mb-2">
            <input checked
                   class="form-check-input input-filter"
                   data-value="personal"
                   id="select-personal"
                   type="checkbox" />
            <label class="form-check-label"
                   for="select-personal">شخصی</label>
          </div>
          <div class="form-check mb-2">
            <input checked
                   class="form-check-input input-filter"
                   data-value="business"
                   id="select-business"
                   type="checkbox" />
            <label class="form-check-label"
                   for="select-business">کسب و کار</label>
          </div>
          <div class="form-check form-check-warning mb-2">
            <input checked
                   class="form-check-input input-filter"
                   data-value="family"
                   id="select-family"
                   type="checkbox" />
            <label class="form-check-label"
                   for="select-family">خانواده</label>
          </div>
          <div class="form-check form-check-success mb-2">
            <input checked
                   class="form-check-input input-filter"
                   data-value="holiday"
                   id="select-holiday"
                   type="checkbox" />
            <label class="form-check-label"
                   for="select-holiday">تعطیلات</label>
          </div>
          <div class="form-check form-check-info">
            <input checked
                   class="form-check-input input-filter"
                   data-value="etc"
                   id="select-etc"
                   type="checkbox" />
            <label class="form-check-label"
                   for="select-etc">سایر موارد</label>
          </div>
        </div>
      </div>
    </div>
    <!-- /Calendar Sidebar -->
    <!-- Calendar & Modal -->
    <div class="col app-calendar-content">
      <div class="card shadow-none border-0">
        <div class="card-body pb-0">
          <!-- FullCalendar -->
          <div id="calendar"></div>
        </div>
      </div>
      <div class="app-overlay"></div>
      <!-- FullCalendar Offcanvas -->
      <div aria-labelledby="addEventSidebarLabel"
           class="offcanvas offcanvas-end event-sidebar"
           id="addEventSidebar"
           tabindex="-1">
        <div class="offcanvas-header my-1">
          <h5 class="offcanvas-title"
              id="addEventSidebarLabel">افزودن رویداد</h5>
          <button aria-label="بستن"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  type="button"></button>
        </div>
        <div class="offcanvas-body pt-0">
          <form class="event-form pt-0"
                id="eventForm"
                onsubmit="return false">
            <div class="mb-3">
              <label class="form-label"
                     for="eventTitle">عنوان</label>
              <input class="form-control"
                     id="eventTitle"
                     name="eventTitle"
                     placeholder="عنوان رویداد"
                     type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventLabel">برچسب</label>
              <select class="select2 select-event-label form-select"
                      id="eventLabel"
                      name="eventLabel">
                <option data-label="primary"
                        selected
                        value="Business">کسب و کار</option>
                <option data-label="danger"
                        value="Personal">شخصی</option>
                <option data-label="warning"
                        value="Family">خانواده</option>
                <option data-label="success"
                        value="Holiday">تعطیلات</option>
                <option data-label="info"
                        value="ETC">سایر موارد</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventStartDate">تاریخ شروع</label>
              <input class="form-control"
                     id="eventStartDate"
                     name="eventStartDate"
                     placeholder="تاریخ شروع"
                     type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventEndDate">تاریخ پایان</label>
              <input class="form-control"
                     id="eventEndDate"
                     name="eventEndDate"
                     placeholder="تاریخ پایان"
                     type="text" />
            </div>
            <div class="mb-3">
              <label class="switch">
                <input class="switch-input allDay-switch"
                       type="checkbox" />
                <span class="switch-toggle-slider">
                  <span class="switch-on"></span>
                  <span class="switch-off"></span>
                </span>
                <span class="switch-label">تمام روز</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventURL">لینک رویداد</label>
              <input class="form-control ltr"
                     id="eventURL"
                     name="eventURL"
                     placeholder="https://www.google.com"
                     type="url" />
            </div>
            <div class="mb-3 select2-primary">
              <label class="form-label"
                     for="eventGuests">افراد را اضافه کنید</label>
              <select class="select2 select-event-guests form-select"
                      id="eventGuests"
                      multiple
                      name="eventGuests">
                <option data-avatar="1.png"
                        value="Jane Foster">شهاب حسینی</option>
                <option data-avatar="3.png"
                        value="Donna Frank">پوریا پورسرخ</option>
                <option data-avatar="5.png"
                        value="Gabrielle Robertson">علی مصفان</option>
                <option data-avatar="7.png"
                        value="Lori Spears">حامد بهداد</option>
                <option data-avatar="9.png"
                        value="Sandy Vega">شهرام قائدی</option>
                <option data-avatar="11.png"
                        value="Cheryl May">پیمان معادی</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventLocation">محل</label>
              <input class="form-control"
                     id="eventLocation"
                     name="eventLocation"
                     placeholder="مکان را وارد کنید"
                     type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                     for="eventDescription">شرح</label>
              <textarea class="form-control"
                        id="eventDescription"
                        name="eventDescription"></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-sm-between justify-content-start my-4">
              <div>
                <button class="btn btn-label-secondary btn-cancel me-sm-0 me-1"
                        data-bs-dismiss="offcanvas"
                        type="reset"> لغو</button>
                <button class="btn btn-primary btn-add-event me-sm-3 me-1"
                        type="submit">افزودن</button>
              </div>
              <div>
                <button class="btn btn-label-danger btn-delete-event d-none">حذف</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /Calendar & Modal -->
  </div>
</div>
@endsection