@extends('admin.content.layouts/layoutMaster')

@section('title', 'صفحات سایت - آموزش')

@section('content')
<section class="section-py first-section-pt">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <nav aria-label="خرده نان">
          <ol class="breadcrumb breadcrumb-style1 mb-2">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">مرکز پشتیبانی</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">خرید و پشتیبانی</a>
            </li>
            <li class="breadcrumb-item active">خریداری کردن</li>
          </ol>
        </nav>
        <h4 class="mb-2 mt-4 pb-1">چگونه محصول را در سبد خرید اضافه کنیم؟</h4>
        <p class="pb-lg-2">1 ماه پیش - به روز شد</p>
        <hr class="my-lg-4"/>
        <p class="pt-lg-2"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <p class="mb-0"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        <div class="my-4 py-2">
          <img alt="تولید - محصول" class="img-fluid w-100" src="{{ asset('assets/img/front-pages/misc/product-image.png') }}"/>
        </div>
        <p class="mb-0"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <div class="mt-4 pt-2">
          <img alt="تولید - محصول" class="img-fluid w-100" src="{{ asset('assets/img/front-pages/misc/checkout-image.png') }}"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="input-group input-group-merge mb-4 mt-4 mt-lg-0">
          <span class="input-group-text" id="article-search">
            <i class="ti ti-search h-mirror"></i>
          </span>
          <input aria-describedby="article-search" aria-label="جستجو ..." class="form-control" placeholder="جستجو ..." type="text"/>
        </div>
        <div class="bg-lighter py-2 px-3 rounded">
          <h5 class="mb-0">مقالات این بخش</h5>
        </div>
        <ul class="list-unstyled my-4">
          <li class="mb-3">
            <a class="text-heading d-flex justify-content-between" href="javascript:void(0)">
              <span class="text-truncate me-1"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
              <i class="ti ti-chevron-right scaleX-n1-rtl text-muted me-1"></i>
            </a>
          </li>
          <li class="mb-3">
            <a class="text-heading d-flex justify-content-between" href="javascript:void(0)">
              <span class="text-truncate me-1"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
              <i class="ti ti-chevron-right scaleX-n1-rtl text-muted me-1"></i>
            </a>
          </li>
          <li class="mb-3">
            <a class="text-heading d-flex justify-content-between" href="javascript:void(0)">
              <span class="text-truncate me-1"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
              <i class="ti ti-chevron-right scaleX-n1-rtl text-muted me-1"></i>
            </a>
          </li>
          <li class="mb-3">
            <a class="text-heading d-flex justify-content-between" href="javascript:void(0)">
              <span class="text-truncate me-1"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
              <i class="ti ti-chevron-right scaleX-n1-rtl text-muted me-1"></i>
            </a>
          </li>
          <li class="mb-3">
            <a class="text-heading d-flex justify-content-between" href="javascript:void(0)">
              <span class="text-truncate me-1"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
              <i class="ti ti-chevron-right scaleX-n1-rtl text-muted me-1"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
@endsection
