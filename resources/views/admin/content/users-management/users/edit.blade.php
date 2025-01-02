@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86%20%D9%BE%D8%B2%D8%B4%DA%A9%20%D8%AC%D8%AF%DB%8C%D8%AF%20%20%20%26%2339%3B)%0D />

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection
      <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap.min.css") }}"
            rel="stylesheet">
      <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css") }}"
            rel="stylesheet">
      <link href="{{ asset("admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue") }}"
            rel="stylesheet">
            <style>
                a{
                    color: #333 !important;
                }
            </style>
      @section('content')
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <div class="pull-right">
            <h1 class="m-n font-thin h3">ویرایش کاربر</h1>
            <div class="text-muted margin-top-5">روژین ابراهیمی</div>
          </div>
          <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=users"
               class="btn btn-warning btngroup"> بازگشت</a> </div>

        </div>
        <div class="wrapper-md">

          <div class="panel panel-default">
            <div class="panel-heading">اطلاعات حساب</div>
            <div class="panel-body">

              <ul class="nav nav-tabs"
                  role="tablist">
                <li role="presentation"
                    class="active"><a href="#userinfo-tab"
                     aria-controls="home"
                     role="tab"
                     data-toggle="tab">حساب کاربری</a></li>
                <li role="presentation"><a href="#bank-tab"
                     aria-controls="profile"
                     role="tab"
                     data-toggle="tab">اطلاعات حساب بانکی</a></li>
                <li role="presentation"><a href="#charge-tab"
                     aria-controls="profile"
                     role="tab"
                     data-toggle="tab">شارژ حساب</a></li>
              </ul>

              <div class="tab-content">
                <div role="tabpanel"
                     class="tab-pane clrfix active"
                     id="userinfo-tab">
                  <form method="post"
                        action=""
                        class="row">
                    <input type="hidden"
                           name="mod"
                           value="users">
                    <input type="hidden"
                           name="action"
                           value="edit_user_save">
                    <input type="hidden"
                           name="userid"
                           value="88653">


                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>شماره موبایل:</label>
                        <input type="tel"
                               name="mobile"
                               autocomplete="off"
                               value="09189779965"
                               class="form-control">
                      </div>
                    </div>


                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>رمز عبور:</label>
                        <input type="password"
                               name="password"
                               class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>کد ملی:</label>
                        <input type="text"
                               name="codemeli"
                               value="3720263436"
                               class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>گروه کاربری:</label>
                        <select name="usergroup"
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
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>نام:</label>
                        <input type="text"
                               name="firstname"
                               value=""
                               class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>نام خانوادگی:</label>
                        <input type="text"
                               name="lastname"
                               value=""
                               class="form-control">
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>جنسیت:</label>
                        <select name="sex"
                                class="form-control">
                          <option value="male">مرد</option>
                          <option value="famale">زن</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <button type="submit"
                                class="btn btn-success">ثبت و ذخیره</button>
                        <a href="/panel.php?mod=users"
                           class="btn btn-link">بازگشت</a>
                      </div>
                    </div>
                  </form>
                </div>


                <div role="tabpanel"
                     class="tab-pane"
                     id="bank-tab">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group has-feedback">
                        <label class="control-label">شماره شبا: (شماره شبای خود را همراه با IR- وارد کنید)</label>
                        <input type="text"
                               name="sheba"
                               value=""
                               class="form-control"
                               placeholder="شماره شبا: IR-">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group has-feedback">
                        <label class="control-label">شماره کارت عضو شتاب:</label>
                        <input type="text"
                               name="cardnum"
                               value=""
                               class="form-control"
                               placeholder="شماره یکی از کارهای عضو شتاب خود را وارد کنید">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group has-feedback">
                        <label class="control-label">نام صاحب حساب</label>
                        <input type="text"
                               name="namehesab"
                               value=""
                               class="form-control"
                               placeholder="نام صاحب حساب">
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <div class="form-group has-feedback">
                        <label class="control-label">نام بانک</label>
                        <input type="text"
                               name="bankname"
                               value=""
                               class="form-control"
                               placeholder="نام بانک">
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel"
                     class="tab-pane"
                     id="charge-tab">
                  <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover">
                      <thead>
                        <tr>
                          <th class="text-white"></th>
                          <th class="text-white">بابت</th>
                          <th class="text-white">تاریخ</th>
                          <th class="text-white">مبلغ</th>
                          <th class="text-white">توضیحات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="6">سابقه ای ثبت نشده است.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>مانده حساب: 0</p>
                  <hr>
                  <form method="post"
                        action="">
                    <input type="hidden"
                           name="mod"
                           value="users">
                    <input type="hidden"
                           name="action"
                           value="etebar_added">
                    <input type="hidden"
                           name="userid"
                           value="88653">
                    <div class="form-group">
                      <label>افزایش موجودی حساب (تومان):</label>
                      <div class="input-group w-75">
                        <input type="text"
                               class="form-control numberkey col-lg-6"
                               name="charge"
                               placeholder="مبلغ عدد به تومان وارد کنید">
                        <span class="input-group-btn"><button type="submit"
                                  class="btn btn-success">افزایش اعتبار</button> </span>
                      </div>
                    </div>
                  </form>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
      @endsection
