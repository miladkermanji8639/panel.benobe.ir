<!-- Create App Modal -->
<div aria-hidden="true" class="modal fade" id="createApp" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-simple modal-upgrade-plan">
    <div class="modal-content p-3 p-md-5">
      <div class="modal-body p-2">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <div class="text-center">
          <h3 class="mb-2">ایجاد یک پروژه</h3>
          <p>داده ها را با این فرم برای ایجاد برنامه خود ارائه دهید.</p>
        </div>
        <div class="bs-stepper vertical mt-2 shadow-none" id="wizard-create-app">
          <div class="bs-stepper-header border-0 p-1">
            <div class="step" data-target="#details">
              <button class="step-trigger" type="button">
                <span class="bs-stepper-circle">
                  <i class="ti ti-file-text ti-sm"></i>
                </span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title text-uppercase">جزئیات</span>
                  <span class="bs-stepper-subtitle">موارد پایه</span>
                </span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#frameworks">
              <button class="step-trigger" type="button">
                <span class="bs-stepper-circle">
                  <i class="ti ti-box ti-sm"></i>
                </span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title text-uppercase">تکنولوژی</span>
                  <span class="bs-stepper-subtitle">انتخاب زبان برنامه نویسی</span>
                </span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#database">
              <button class="step-trigger" type="button">
                <span class="bs-stepper-circle">
                  <i class="ti ti-database ti-sm"></i>
                </span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title text-uppercase">پایگاه داده</span>
                  <span class="bs-stepper-subtitle">انتخاب پایگاه داده</span>
                </span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#billing">
              <button class="step-trigger" type="button">
                <span class="bs-stepper-circle">
                  <i class="ti ti-credit-card ti-sm"></i>
                </span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title text-uppercase">پرداخت</span>
                  <span class="bs-stepper-subtitle">دریافت دستمزد</span>
                </span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#submit">
              <button class="step-trigger" type="button">
                <span class="bs-stepper-circle">
                  <i class="ti ti-check ti-sm"></i>
                </span>
                <span class="bs-stepper-label">
                  <span class="bs-stepper-title text-uppercase">ثبت نهایی</span>
                  <span class="bs-stepper-subtitle">اتمام و ارسال برای تیم</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content p-1">
            <form onSubmit="return false">
              <!-- Details -->
              <div class="content pt-3 pt-lg-0" id="details">
                <div class="mb-3">
                  <input class="form-control form-control-lg" id="exampleInputEmail1" placeholder="نام برنامه" type="email"/>
                </div>
                <h5>دسته بندی</h5>
                <ul class="p-0 m-0">
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-info p-2 me-3 rounded">
                      <i class="ti ti-file-text ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">نرم افزار CRM</h6>
                        <small class="text-muted">مدیریت مشتریان ، باشگاه مشتریان و ...</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="details-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-success p-2 me-3 rounded">
                      <i class="ti ti-shopping-cart ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">سیستم فروشگاهی</h6>
                        <small class="text-muted">فروشگاه آنلاین و حمل و نقل و...</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input checked class="form-check-input" name="details-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start">
                    <div class="badge bg-label-danger p-2 me-3 rounded">
                      <i class="ti ti-device-laptop ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">پلت فرم یادگیری آنلاین</h6>
                        <small class="text-muted">سیستم فروش دوره ، آموزش و ...</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="details-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="col-12 d-flex justify-content-between mt-4">
                  <button class="btn btn-label-secondary btn-prev" disabled>
                    <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                    <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none me-sm-1">بعدی
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </span>
                  </button>
                </div>
              </div>
              <!-- Frameworks -->
              <div class="content pt-3 pt-lg-0" id="frameworks">
                <h5>دسته بندی</h5>
                <ul class="p-0 m-0">
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-info p-2 me-3 rounded">
                      <i class="ti ti-brand-react-native ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">ری‌اکت نیتیو</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="frameworks-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-danger p-2 me-3 rounded">
                      <i class="ti ti-brand-angular ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">آنگولار</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input checked="" class="form-check-input" name="frameworks-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-warning p-2 me-3 rounded">
                      <i class="ti ti-brand-html5 ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">HTML</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input checked class="form-check-input" name="frameworks-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start">
                    <div class="badge bg-label-success p-2 me-3 rounded">
                      <i class="ti ti-brand-vue ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">VueJs</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="frameworks-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="col-12 d-flex justify-content-between mt-4">
                  <button class="btn btn-label-secondary btn-prev">
                    <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                    <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none me-sm-1">بعدی
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </span>
                  </button>
                </div>
              </div>
              <!-- Database -->
              <div class="content pt-3 pt-lg-0" id="database">
                <div class="mb-3">
                  <input class="form-control form-control-lg" id="exampleInputEmail2" placeholder="نام پایگاه داده" type="email"/>
                </div>
                <h5>انتخاب پایگاه داده</h5>
                <ul class="p-0 m-0">
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-danger p-2 me-3 rounded">
                      <i class="ti ti-brand-firebase ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">Firebase</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="database-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="badge bg-label-warning p-2 me-3 rounded">
                      <i class="ti ti-brand-amazon ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">AWS</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input checked class="form-check-input" name="database-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="d-flex align-items-start">
                    <div class="badge bg-label-info p-2 me-3 rounded">
                      <i class="ti ti-database ti-md"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                      <div class="me-2">
                        <h6 class="mb-0">MySQL</h6>
                        <small class="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</small>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" name="database-radio" type="radio" value=""/>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="col-12 d-flex justify-content-between mt-4">
                  <button class="btn btn-label-secondary btn-prev">
                    <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                    <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none me-sm-1">بعدی
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </span>
                  </button>
                </div>
              </div>
              <!-- billing -->
              <div class="content" id="billing">
                <div class="row g-3 pt-3 pt-lg-0" id="AppNewCCForm" onsubmit="return false">
                  <div class="col-12">
                    <div class="input-group input-group-merge">
                      <input aria-describedby="modalAppAddCard" class="form-control app-credit-card-mask ltr" placeholder="1356 3215 6548 7898" type="text"/>
                      <span class="input-group-text cursor-pointer p-1" id="modalAppAddCard">
                        <span class="app-card-type"></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <input class="form-control" placeholder="نـوید" type="text"/>
                  </div>
                  <div class="col-6 col-md-3">
                    <input class="form-control app-expiry-date-mask" placeholder="تاریخ انقضا" type="text"/>
                  </div>
                  <div class="col-6 col-md-3">
                    <div class="input-group input-group-merge">
                      <input class="form-control app-cvv-code-mask" id="modalAppAddCardCvv" maxlength="3" placeholder="654" type="text"/>
                      <span class="input-group-text cursor-pointer" id="modalAppAddCardCvv2">
                        <i class="text-muted ti ti-help" data-bs-placement="top" data-bs-toggle="tooltip" title="تأیید کارت"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="switch">
                      <input checked class="switch-input" type="checkbox"/>
                      <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                      </span>
                      <span class="switch-label">کارت را برای صورتحساب آینده ذخیره کنید؟</span>
                    </label>
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-between mt-5">
                  <button class="btn btn-label-secondary btn-prev">
                    <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                    <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                  </button>
                  <button class="btn btn-primary btn-next">
                    <span class="align-middle d-sm-inline-block d-none me-sm-1">بعدی
                      <i class="ti ti-arrow-right ti-xs"></i>
                    </span>
                  </button>
                </div>
              </div>
              <!-- submit -->
              <div class="content text-center pt-3 pt-lg-0" id="submit">
                <h5 class="mb-2 mt-3">ارسال و شروع</h5>
                <p>پروژه برای اعضای تیم شما فرستاده خواهد شد.</p>
                <!-- image -->
                <img alt="ایجاد برنامه img" class="img-fluid" src="{{ asset('assets/img/illustrations/girl-with-laptop.png') }}" width="175"/>
                <div class="col-12 d-flex justify-content-between mt-4 pt-2">
                  <button class="btn btn-label-secondary btn-prev">
                    <i class="ti ti-arrow-left ti-xs me-sm-1 me-0"></i>
                    <span class="align-middle d-sm-inline-block d-none">قبلی</span>
                  </button>
                  <button aria-label="بستن" class="btn btn-success btn-next btn-submit" data-bs-dismiss="modal">
                    <span class="align-middle d-sm-inline-block d-none me-sm-1">ارسال
                      <i class="ti ti-check ti-xs"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/ Create App Modal -->
