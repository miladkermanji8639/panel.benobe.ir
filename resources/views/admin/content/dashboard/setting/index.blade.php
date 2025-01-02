@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%AF%D8%B1%DA%AF%D8%A7%D9%87%20%D9%87%D8%A7%DB%8C%20%20%20%26%2339%3B)%0D />

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection
<link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue") }}" rel="stylesheet">
    <style>
      a{
        color: #333 !important;
      }
    </style>
      @section('content')
    
      <div class="wrapper-md">

        <div class="panel panel-default">
          <div class="panel-heading">تنظیمات عمومی</div>
          <div class="panel-body">

            <form method="post"
                  action="">
              <input type="hidden"
                     name="mod"
                     value="setting">
              <input type="hidden"
                     name="action"
                     value="dosave">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#dashboard-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات عمومی</a></li>

                <li class=""><a href="#seo-tab"
                     data-toggle="tab"
                     aria-expanded="false">سئو</a></li>
                <li class=""><a href="#payment-tab"
                     data-toggle="tab"
                     aria-expanded="false">درگاه های پرداخت</a></li>
                <li class=""><a href="#sms-tab"
                     data-toggle="tab"
                     aria-expanded="false">پنل پیامک</a></li>
                <li class=""><a href="#callmee-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات کال می</a></li>
                <li class=""><a href="#program-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات برنامه</a></li>
                <li class=""><a href="#user-tab"
                     data-toggle="tab"
                     aria-expanded="false">کاربران</a></li>
                <li class=""><a href="#sec-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات امنیتی</a></li>
                <li class=""><a href="#files-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات فایل ها</a></li>
                <li class=""><a href="#mail-tab"
                     data-toggle="tab"
                     aria-expanded="false">تنظیمات ایمیل</a></li>
                <li class=""><a href="#contact-tab"
                     data-toggle="tab"
                     aria-expanded="true">اطلاعات تماس</a></li>

              </ul>
              <div class="tab-content">
                <div class="tab-pane row"
                     id="dashboard-tab"
                     style="padding-top: 10px;">
                  <input type="hidden"
                         name="save[max_sizefile]"
                         value="50000">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">عنوان سایت: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[home_title]"
                               value="به نوبه | نوبت دهی اینترنتی و مشاوره آنلاین پزشکان">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">آدرس سایت: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction: ltr;"
                               name="save[home_url]"
                               value="https://benobe.ir/">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">انکودینگ سیستم: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[charset]"
                               value="UTF-8">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">شماره موبایل جهت دریافت پیامک های سیستم مدیریت: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[admin_mobile]"
                               value="09181738255">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">انتخاب قالب بخش مدیریت:</label>
                      <div class="">
                        <select name="save[admintheme]"
                                class="form-control">
                          <option value="nopardaz"
                                  selected="">nopardaz</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">انتخاب قالب سایت:</label>
                      <div class="">
                        <select name="save[theme]"
                                class="form-control">
                          <option value="portal-old">portal-old</option>
                          <option value="portal"
                                  selected="">portal</option>

                        </select>

                      </div>
                    </div>
                    <a href="{{ route('admin.Dashboard.setting.change-logo') }}"
                       class="btn btn-default"><i class="fa fa-picture-o"></i> تغییر لوگو سایت</a>
                    <div class="form-group mt-3">
                      <label class="control-label">متن صفحه تماس با ما:</label>
                      <div class="">
                        <textarea name="save[contactus_matn]"
                                  class="form-control">در صورت داشتن هرگونه انتقاد ، پیشنهاد و یا درخواستی می توانید از طریق فرم موجود در همین صفحه با ما ارتباط برقرار نمائید.
در صورتی که قبلا پیغام ارسال کرده اید برای پیگیری با پشتیبانی به نوبه تماس برقرار کنید</textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane row"
                     id="sms-tab"
                     style="padding-top: 10px;">
                  <div class="col-md-3 col-sm-12">

                    <div class="form-group mt-3">
                      <label class="control-label">نام کاربر در فراز پیامک: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr; text-align:left;"
                               name="save[username_faraz]"
                               value="prooshe">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">رمز عبور در فراز پیامک: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr; text-align:left;"
                               name="save[password_faraz]"
                               value="QAZwsx123edc*#">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">شماره ارسال کننده: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr; text-align:left;"
                               name="save[num_faraz]"
                               value="+983000505">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-12"></div>
                </div>
                <div class="tab-pane row"
                     id="callmee-tab"
                     style="padding-top: 10px;">
                  <div class="col-md-3 col-sm-12">

                    <div class="form-group mt-3">
                      <label class="control-label">نام کاربر در کال می: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr; text-align:left;"
                               name="save[username_callmee]"
                               value="prooshe@gmail.com">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">رمز عبور در کال می: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr; text-align:left;"
                               name="save[password_callmee]"
                               value="sadeghi8255">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-12"></div>
                </div>
                <div class="tab-pane row"
                     id="seo-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">

                    <div class="form-group mt-3">
                      <label class="control-label">فعال بودن سئو:</label>
                      <div class="">
                        <select name="save[is_seo]"
                                class="form-control">
                          <option value="1"
                                  selected="">بلی</option>
                          <option value="0">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">متا Keyword:</label>
                      <div class="">
                        <textarea name="save[meta_keyword]"
                                  class="form-control">به نوبه نوبت دهی اینترنتی و مشاوره آنلاین پزشکان
نوبت دهی آنلاین پزشکان ، نوبت اینترنتی دکتر ، نوبت دهی مطب ها ، نوبت دهی مطب های پزشکی ، نوبت مطب سنندج ، نوبت دهی پزشکان کردستان ، نوبت دهی دکتر سنندج ، نوبت دهی بیمارستان کردستان ، نوبت دهی کلینیک و درمانگاه ، نوبت دکتر ، نوبت دهی به نوبه ، سامانه نوبت دهی به نوبه ، benobe ، نوبت بیمارستان سنندج ، نوبت دهی ، مشاوره تلفنی با پزشک کردستان، مشاوره آنلاین دکتر، آدرس دکتر سنندج benobe ،‌ژین ، نوبت دهی ژین ،zhin724 ، نوبت دهی و مشاوره پزشکان</textarea>
                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">متا Description:</label>
                      <div class="">
                        <textarea name="save[meta_description]"
                                  class="form-control">به نوبه سامانه نوبت دهی بهترین پزشکان متخصص و مراکز درمانی کشور می باشد،‌ شما میتوانید به راحتی از پزشک مورد نظرتون نوبت و مشاوره آنلاین بگیرید.</textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12"></div>
                </div>
                <div class="tab-pane row"
                     id="payment-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">

                    <div class="form-group mt-3">
                      <label class="control-label">کلید درگاه Zarinpal: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[zarinpal_key]"
                               value="1713ab96-0d82-11e9-bf3a-005056a205be">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">sandbox فعال باشد؟:</label>
                      <div class="">
                        <select name="save[zarinpal_sandbox]"
                                class="form-control">
                          <option value="1">بلی</option>
                          <option value="0"
                                  selected="">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">کدپذیرنده بانک سامان: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[sb24_marchent_id]"
                               value="">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">رمز پذیرنده بانک سامان: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[sb24_password]"
                               value="">
                      </div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane row"
                     id="user-tab"
                     style="padding-top: 10px;">
                  <div class="from-group"> <label class="control-label">انتخاب گروه کاربری پیشفرض عضویت کاربران</label>
                    <div>
                      <select name="save[register_default_usergroup]"
                              class="form-control">
                        <option value="1">مدیران</option>
                        <option value="2"
                                selected="">کاربران</option>
                        <option value="3">پزشکان</option>
                        <option value="4">بیمارستان</option>
                        <option value="5">منشی</option>
                        <option value="6">منشی درمانگاه</option>
                        <option value="7">نمایندگان</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="tab-pane row active"
                     id="contact-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">نام شرکت: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[company_name]"
                               value="سامانه به نوبه">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">آدرس پستی: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_address]"
                               value="سنندج، بهاران، بلوار محمد زکریای رازی، ساختمان پارک علم و فناوری کردستان، طبقه دوم، واحد ۲۰۵   -   کد پستی: 6617739474">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">ایمیل: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_email]"
                               value="info@benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">ایمیل پشتیبانی: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_emailsupport]"
                               value="info@benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تلفن تماس: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_phone]"
                               value="09181738255 - 08733730514">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فاکس: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_fax]"
                               value="09181738255">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">Copyright: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[copyright]"
                               value="تمامی حقوق برای به نوبه محفوظ است و هر گونه کپی برداری پیگرد قانونی دارد.">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">تلگرام ID: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_telegram]"
                               value="https://t.me/benobeir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">اینستاگرام: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_instagram]"
                               value="https://www.instagram.com/benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">Linkdin: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_linkdin]"
                               value="https://www.linkedin.com/in/benobe">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">Pinterest: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_pinterest]"
                               value="https://www.pinterest.com/prooshe">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">گوگل پلاس: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_gplus]"
                               value="#">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فیسبوک: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_facebook]"
                               value="https://m.facebook.com/wwwbenobeir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">توییتر: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[contact_twitter]"
                               value="#">
                      </div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane row"
                     id="program-tab"
                     style="padding-top: 10px;">
                  <div class="col-md-6 col-sm-12 col-xs-12">

                    <div class="form-group mt-3">
                      <label class="control-label">انتخاب سیستم پرداخت نوبت دهی:</label>
                      <div class="">
                        <select name="save[type_payment_system]"
                                class="form-control">
                          <option value="membershipfee"
                                  selected="">پرداخت حق عضویت</option>
                          <option value="onlinepayment">پرداخت آنلاین</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">حداکثر تعداد دریافت نوبت از پزشک در هر روز: <span
                              class="red">*</span></label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="text-align:center; direction:ltr"
                               required=""
                               name="save[nobat_per_day]"
                               value="1">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">هزینه حق نوبت سایت: <span class="red">*</span></label>
                      <div class="">
                        <input type="text"
                               placeholder="عدد وارد کنید به تومان مثلا: 1000"
                               class="form-control"
                               style="text-align:center; direction: ltr;"
                               required=""
                               name="save[price_per_nobatsite]"
                               value="0">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">عدد وارد کنید به تومان مثلا: 1000</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تعرفه پیشفرض ویزیت پزشک (تومان): <span class="red">*</span></label>
                      <div class="">
                        <input type="text"
                               placeholder="عدد وارد کنید مثلا: 80000"
                               class="form-control"
                               style="text-align:center; direction: ltr;"
                               required=""
                               name="save[default_price_doctor_nobat]"
                               value="0">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">عدد وارد کنید مثلا: 80000</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تعرفه پورسانت منشی (تومان): <span class="red">*</span></label>
                      <div class="">
                        <input type="text"
                               placeholder="عدد وارد کنید مثلا: 1500"
                               class="form-control"
                               style="text-align:center; direction: ltr;"
                               required=""
                               name="save[price_monshi_poorsant]"
                               value="0">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">عدد وارد کنید مثلا: 1500</p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="form-group mt-3">
                      <label class="control-label">مبلغ هر دقیقه مکالمه مشاوره آنلاین: <span
                              class="red">*</span></label>
                      <div class="">
                        <input type="text"
                               placeholder="عدد وارد کنید به تومان مثلا: 30000"
                               class="form-control"
                               style="text-align:center; direction: ltr;"
                               required=""
                               name="save[price_per_minute_moshavere]"
                               value="1000">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">عدد وارد کنید به تومان مثلا: 30000</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">مبلغ ثبت پرسش در قسمت پرسش و پاسخ: </label>
                      <div class="">
                        <input type="text"
                               placeholder="در صورت رایگان بودن 0 وارد کنید"
                               class="form-control"
                               style=""
                               name="save[price_per_question]"
                               value="0">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">در صورت رایگان بودن 0 وارد کنید</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">مبلغ ارتقاء حساب کاربری پزشکان: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[upgrade_price]"
                               value="780000">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تعداد روز ارتقاء حساب کاربری پزشکان: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[upgrade_days]"
                               value="90">
                      </div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane row"
                     id="files-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">

                    <div class="form-group mt-3">
                      <label class="control-label">فعال بودن فایل ضمیمه:</label>
                      <div class="">
                        <select name="save[files_allow]"
                                class="form-control">
                          <option value="1"
                                  selected="">فعال</option>
                          <option value="0">غیرفعال</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">نمایش شمارشگر تعداد دانلود:</label>
                      <div class="">
                        <select name="save[files_count]"
                                class="form-control">
                          <option value="1">بلی</option>
                          <option value="0"
                                  selected="">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فرمت های مجاز برای آپلود فایل: </label>
                      <div class="">
                        <input type="text"
                               placeholder="مثلا: zip,rar,pdf"
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[files_type]"
                               value="zip,rar,pdf,txt,xlsx,xls,docx,docs,mp4,mp3,avi">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">مثلا: zip,rar,pdf</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">نوع ساخت تصویر کوچکتر از تصویر آپلود شده (Thumbnail):</label>
                      <div class="">
                        <select name="save[t_seite]"
                                class="form-control">
                          <option value="1"
                                  selected="">بلی</option>
                          <option value="0">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">کم کردن اتوماتیک سایز تصاویر پس از آپلود (تصویر اول): </label>
                      <div class="">
                        <input type="text"
                               placeholder="در هنگامی که تصویری در خبر آپلود می کنید، یک تصویر کوچک (Thumbnail) ساخته خواهد شد. این مقدار، اندازه عرض تصویر بر حسب پیکسل خواهد بود."
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[max_image]"
                               value="600">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">در هنگامی که تصویری در خبر آپلود می کنید، یک تصویر کوچک (Thumbnail)
                        ساخته خواهد شد. این مقدار، اندازه عرض تصویر بر حسب پیکسل خواهد بود.</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">کم کردن اتوماتیک سایز تصاویر پس از آپلود (تصویر دوم): </label>
                      <div class="">
                        <input type="text"
                               placeholder="همانند توضیحات گزینه بالا، این گزینه عکس دومی از خبر در اندازه دلخواه شما ایجاد می کند.<br/><br/> شما دو نوع انتخاب (مقدار) می توانید برای این گزینه وارد کنید.<br/>مقدار اول: اگر به طور مثال عدد 300 وارد کنید، طول تصویر 300 خواهد بود اما ارتفاع آن، به نسبت طول وارد شده متغییر است.<br/>مقدار دوم: می توانید عدد ثابت برای تصویر مشخص کنید، مثلاً اگر 120x120 وارد کنید، تصویر در همین اندازه ساخته می شود.<br/><br/>در صورتی که نیاز به ساخت تصویر دوم ندارید، این مقدار را 0 وارد کنید."
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[medium_image]"
                               value="600">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">همانند توضیحات گزینه بالا، این گزینه عکس دومی از خبر در اندازه دلخواه
                        شما ایجاد می کند.<br><br> شما دو نوع انتخاب (مقدار) می توانید برای این گزینه وارد کنید.<br>مقدار
                        اول: اگر به طور مثال عدد 300 وارد کنید، طول تصویر 300 خواهد بود اما ارتفاع آن، به نسبت طول وارد
                        شده متغییر است.<br>مقدار دوم: می توانید عدد ثابت برای تصویر مشخص کنید، مثلاً اگر 120x120 وارد
                        کنید، تصویر در همین اندازه ساخته می شود.<br><br>در صورتی که نیاز به ساخت تصویر دوم ندارید، این
                        مقدار را 0 وارد کنید.</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فعال بودن Watermarks (تصویری به منزله کپی رایت):</label>
                      <div class="">
                        <select name="save[allow_watermark]"
                                class="form-control">
                          <option value="1"
                                  selected="">بلی</option>
                          <option value="0">خیر</option>

                        </select>

                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">قراگیری پیشفرض عکس:</label>
                      <div class="">
                        <select name="save[image_align]"
                                class="form-control">
                          <option value="">هیچکدام</option>
                          <option value="left">سمت چپ</option>
                          <option value="center"
                                  selected="">وسط</option>
                          <option value="right">سمت راست</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">حداکثر حجم آپلود فایل: </label>
                      <div class="">
                        <input type="text"
                               placeholder="به کیلوبایت وارد شود: هر 1024 کیلوبایت 1 مگابایت است"
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[max_up_size]"
                               value="4194304">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">به کیلوبایت وارد شود: هر 1024 کیلوبایت 1 مگابایت است</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">کیفیفت تصاویر: </label>
                      <div class="">
                        <input type="text"
                               placeholder="با استفاده از این گزینه، می توانید جهت کاهش حجم تصویر، کیفیت را کم کنید. این مقدار به صورت درصدی هست (0 تا 100)"
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[jpeg_quality]"
                               value="100">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">با استفاده از این گزینه، می توانید جهت کاهش حجم تصویر، کیفیت را کم
                        کنید. این مقدار به صورت درصدی هست (0 تا 100)</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">اندازه تصاویر برای قرارگیری Watermark: </label>
                      <div class="">
                        <input type="text"
                               placeholder="تصاویر، از مقدار پیکسلی که در این گزینه وارد می کنید، Watermark بر روی آن ها ثبت خواهد شد."
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[max_watermark]"
                               value="150">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">تصاویر، از مقدار پیکسلی که در این گزینه وارد می کنید، Watermark بر روی
                        آن ها ثبت خواهد شد.</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">بیشترین اندازه مجاز برای آپلود تصاویر: </label>
                      <div class="">
                        <input type="text"
                               placeholder="حذف محدودیت 0 وارد کنید"
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[max_up_side]"
                               value="">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">حذف محدودیت 0 وارد کنید</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">بیشترین مقدار فایل آپلود همزمان: </label>
                      <div class="">
                        <input type="text"
                               placeholder="حذف محدودیت 0 وارد کنید"
                               class="form-control"
                               style="text-align:center; direction:ltr;"
                               name="save[max_file_count]"
                               value="">
                      </div>
                      <p class="help-block-blue-inline"
                         style="margin-bottom: 0">حذف محدودیت 0 وارد کنید</p>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تنظیمات پیشفرض برای تصویر اصلی:</label>
                      <div class="">
                        <select name="save[o_seite]"
                                class="form-control">
                          <option value="0"
                                  selected="">به صورت کامل</option>
                          <option value="1">طول</option>
                          <option value="2">عرض</option>

                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane row"
                     id="sec-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">

                    <div class="form-group mt-3">
                      <label class="control-label">reCAPTCH Site Key: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[recaptcha_site_key]"
                               value="6LcqK_YgAAAAAM4x-mGLOG9P3Uh47nz3YeNmxttu">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">reCAPTCH Secret Key: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[recaptcha_secret_key]"
                               value="6LcqK_YgAAAAAHklL1oBrecIt-J8qIXcHAOnuPll">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">آدرس پنل مدیریت: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style=""
                               name="save[admin_path]"
                               value="panel.php">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">Only SSL:</label>
                      <div class="">
                        <select name="save[only_ssl]"
                                class="form-control">
                          <option value="0">خیر</option>
                          <option value="1"
                                  selected="">بلی</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فعال بودن ذخیره گاه:</label>
                      <div class="">
                        <select name="save[allow_cache]"
                                class="form-control">
                          <option value="yes"
                                  selected="">بلی</option>
                          <option value="no">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">پاک کردن اتوماتیک ذخیره گاه:</label>
                      <div class="">
                        <select name="save[clear_cache]"
                                class="form-control">
                          <option value="1">بلی</option>
                          <option value="0"
                                  selected="">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">تایید هویت بازدیدکنندگان بر روی دامنه سایت و زیر دامنه ها:</label>
                      <div class="">
                        <select name="save[auth_domain]"
                                class="form-control">
                          <option value="1"
                                  selected="">بلی</option>
                          <option value="0">خیر</option>

                        </select>

                      </div>
                    </div>

                    <div class="from-group">
                      <label class="control-label">حداکثر تلاش برای ورود به سایت</label>
                      <div>
                        <input type="text"
                               name="save[login_log]"
                               value="5"
                               class="form-control">
                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">ریست ورود کاربران:</label>
                      <div class="">
                        <select name="save[log_hash]"
                                class="form-control">
                          <option value="1"
                                  selected="">بلی</option>
                          <option value="0">خیر</option>

                        </select>
                        <p class="help-block"
                           style="color: #666">با هر بار رفرچ صفحه کاربران باید وارد سایت شوند.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">حالت ورود:</label>
                      <div class="">
                        <select name="save[extra_login]"
                                class="form-control">
                          <option value="0"
                                  selected="">مداوم</option>
                          <option value="1">پایدار</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">امنیت ورود کاربران:</label>
                      <div class="">
                        <select name="save[ip_control]"
                                class="form-control">
                          <option value="0"
                                  selected="">عادی</option>
                          <option value="1">متوسط</option>
                          <option value="2">پیشرفته</option>

                        </select>
                        <p class="help-block"
                           style="color: #666">موقعی که در حالت <b>متوسط</b> باشد، آی پی کاربر پس از ورود دوباره به سایت
                          تغییر نمی کند.<br>در حالتی که <b>پیشرفته</b> باشد، آی پی کاربر پس از ورود به سایت جدید می شود.
                        </p>
                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">روش ورود کاربران:</label>
                      <div class="">
                        <select name="save[auth_metod]"
                                class="form-control">
                          <option value="1">پست الکترونیکی</option>
                          <option value="0"
                                  selected="">نام کاربری</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">کلید امنیتی: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction: ltr;"
                               name="save[key]"
                               value="">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">نوع ذخیره سازی Log ها:</label>
                      <div class="">
                        <select name="save[log_threshold]"
                                class="form-control">
                          <option value="0">غیرفعال</option>
                          <option value="1">Error</option>
                          <option value="2">Debug</option>
                          <option value="3">INFO</option>
                          <option value="4"
                                  selected="">All</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">فرمت تاریخ Log: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction: ltr; text-align: center;"
                               name="save[log_date_format]"
                               value="Y-m-d H:i:s">
                      </div>

                    </div>

                  </div>
                </div>

                <div class="tab-pane"
                     id="mail-tab"
                     style="padding-top: 10px;">
                  <div class="col-lg-12">

                    <div class="form-group mt-3">
                      <label class="control-label">Email: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[admin_mail]"
                               value="info@benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">سربرگ ایمیل ها هنگام ارسال: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction: rtl;"
                               name="save[mail_title]"
                               value="به نوبه">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">سیستم ایمیل:</label>
                      <div class="">
                        <select name="save[mail_metod]"
                                class="form-control">
                          <option value="php"
                                  selected="">PHP Mail()</option>
                          <option value="smtp">SMTP</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">SMTP host: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[smtp_host]"
                               value="mail.nobat.com">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">SMTP port: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[smtp_port]"
                               value="587">
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3">
                      <label class="control-label">SMTP username: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[smtp_user]"
                               value="info@benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">SMTP password: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[smtp_pass]"
                               value="qfqytNAnGPJx">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">استفاده از یک پروتکل امن برای ارسال ایمیل از طریق SMTP
                        سرور::</label>
                      <div class="">
                        <select name="save[smtp_secure]"
                                class="form-control">
                          <option value=""
                                  selected="">هیچکدام</option>
                          <option value="ssl">SSL</option>
                          <option value="tls">TLS</option>

                        </select>

                      </div>
                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">پست الکترونیکی جهت تایید هویت به عنوان فرستده در SMTP سرور: </label>
                      <div class="">
                        <input type="text"
                               class="form-control"
                               style="direction:ltr;"
                               name="save[smtp_mail]"
                               value="info@benobe.ir">
                      </div>

                    </div>

                    <div class="form-group mt-3">
                      <label class="control-label">استفاده از فیلد BCC برای ارسال ایمیل ها:</label>
                      <div class="">
                        <select name="save[mail_bcc]"
                                class="form-control">
                          <option value="0">غیرفعال</option>
                          <option value="1"
                                  selected="">فعال</option>

                        </select>
                        <p class="help-block"
                           style="color: #666">در صورت فعال بودن این گزینه شما می توانید چندین گیرنده به نامه های خود
                          مشخص نمایید و همچنین سرعت ارسال ایمیل را بالا ببرید.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <button type="submit"
                      class="btn btn-success mt-4">ذخیره تغییرات</button>
            </form>
          </div>

        </div>
      </div>
      
      @endsection
      
