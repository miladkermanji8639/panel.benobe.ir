@push('pricing-script')
@vite(['resources/assets/js/pages-pricing.js'])
@endpush

<!-- Pricing Modal -->
<div aria-hidden="true" class="modal fade" id="pricingModal" tabindex="-1">
  <div class="modal-dialog modal-xl modal-simple modal-pricing">
    <div class="modal-content p-2 p-md-5">
      <div class="modal-body">
        <button aria-label="بستن" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        <!-- Pricing Plans -->
        <div class="py-0 rounded-top">
          <h2 class="text-center mb-2">پلن‌های خرید اشتراک</h2>
          <p class="text-center"> برای شروع همکاری با ما یک اشتراک مناسب با بودجه و خواسته های خود انتخاب کنید تا خدمات به شما ارائه شود.</p>
          <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-3 mb-4">
            <label class="switch switch-primary ms-3 ms-sm-0 mt-2">
              <span class="switch-label">ماهانه</span>
              <input checked="" class="switch-input price-duration-toggler" type="checkbox">
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label">سالانه</span>
            </label>
            <div class="mt-n5 ms-n5 d-none d-sm-block">
              <i class="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl"></i>
              <span class="badge badge-sm bg-label-primary">10% تخفیف بیشتر</span>
            </div>
          </div>
          <div class="row mx-0 gy-3">
            <!-- Basic -->
            <div class="col-xl mb-md-0 mb-4">
              <div class="card border rounded shadow-none">
                <div class="card-body">
                  <div class="my-3 pt-2 text-center">
                    <img alt="تصویر پایه" height="140" src="{{ asset('assets/img/illustrations/page-pricing-basic.png') }}"/>
                  </div>
                  <h3 class="card-title text-center text-capitalize mb-1">اقتصادی</h3>
                  <p class="text-center">مناسب برای استارتاپ های نوپا</p>
                  <div class="text-center h-px-100 mb-2">
                    <div class="d-flex justify-content-center">
                      <h1 class="display-5 mb-0 text-primary">1٬000٬000</h1>
                      <sup class="h6 pricing-currency mt-3 mb-0 me-1 text-primary">ءتء</sup>
                    </div>
                    <small class="price-yearly price-yearly-toggle text-muted"> 100٬000 ءتء ماهانه</small>
                  </div>
                  <ul class="list-group ps-3 mb-4">
                    <li class="mb-2">طراحی سایت اختصاصی</li>
                    <li class="mb-2">توسعه اپلیکیشن موبایل</li>
                    <li class="mb-2">پک کامل گرافیکی</li>
                    <li class="mb-2">طراحی هویت بصری</li>
                    <li class="mb-0">دیجیتال مارکتینگ</li>
                  </ul>
                  <button class="btn btn-label-success d-grid w-100 mt-3" data-bs-dismiss="modal" type="button"> اشتراک فعلی</button>
                </div>
              </div>
            </div>
            <!-- Pro -->
            <div class="col-xl mb-md-0 mb-4">
              <div class="card border-primary border shadow-none">
                <div class="card-body position-relative">
                  <div class="position-absolute end-0 me-4 top-0 mt-4">
                    <span class="badge bg-label-primary">پیشنهادی</span>
                  </div>
                  <div class="my-3 pt-2 text-center">
                    <img alt="تصویر استاندارد" height="140" src="{{ asset('assets/img/illustrations/page-pricing-standard.png') }}"/>
                  </div>
                  <h3 class="card-title text-center text-capitalize mb-1">پیشرفته</h3>
                  <p class="text-center">نیاز های اساسی یک استارتاپ</p>
                  <div class="text-center h-px-100 mb-2">
                    <div class="d-flex justify-content-center">
                      <h1 class="display-5 mb-0 text-primary">5٬000٬000</h1>
                      <sup class="h6 pricing-currency mt-3 mb-0 me-1 text-primary">ءتء</sup>
                    </div>
                    <small class="price-yearly price-yearly-toggle text-muted"> 1٬000٬000 ءتء ماهانه</small>
                  </div>
                  <ul class="list-group ps-3 mb-4">
                    <li class="mb-2">طراحی سایت اختصاصی</li>
                    <li class="mb-2">توسعه اپلیکیشن موبایل</li>
                    <li class="mb-2">پک کامل گرافیکی</li>
                    <li class="mb-2">طراحی هویت بصری</li>
                    <li class="mb-0">دیجیتال مارکتینگ</li>
                  </ul>
                  <button class="btn btn-primary d-grid w-100 mt-3" data-bs-dismiss="modal" type="button"> خرید اشتراک</button>
                </div>
              </div>
            </div>
            <!-- Enterprise -->
            <div class="col-xl">
              <div class="card border rounded shadow-none">
                <div class="card-body">
                  <div class="my-3 pt-2 text-center">
                    <img alt="تصویر سازمانی" height="140" src="{{ asset('assets/img/illustrations/page-pricing-enterprise.png') }}"/>
                  </div>
                  <h3 class="card-title text-center text-capitalize mb-1">تـجاری</h3>
                  <p class="text-center">راه حل برای سازمان های بزرگ</p>
                  <div class="text-center h-px-100 mb-2">
                    <div class="d-flex justify-content-center">
                      <h1 class="display-5 mb-0 text-primary">8٬500٬000</h1>
                      <sup class="h6 pricing-currency mt-3 mb-0 me-1 text-primary">ءتء</sup>
                    </div>
                    <small class="price-yearly price-yearly-toggle text-muted"> 1٬200٬000 ءتء ماهانه</small>
                  </div>
                  <ul class="list-group ps-3 mb-4">
                    <li class="mb-2">طراحی سایت اختصاصی</li>
                    <li class="mb-2">توسعه اپلیکیشن موبایل</li>
                    <li class="mb-2">پک کامل گرافیکی</li>
                    <li class="mb-2">طراحی هویت بصری</li>
                    <li class="mb-0">دیجیتال مارکتینگ</li>
                  </ul>
                  <button class="btn btn-label-primary d-grid w-100 mt-3" data-bs-dismiss="modal" type="button"> خرید اشتراک</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/ Pricing Plans -->
      </div>
    </div>
  </div>
</div>
<!--/ Pricing Modal -->
