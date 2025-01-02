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
      @section('content')
      <div class="app-content-body">

			<div class="bg-white-only lter b-b wrapper-md clrfix">
				
                <div class="pull-right">
                    <h1 class="m-n font-thin h3">اضافه کردن کاربر جدید</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=users" class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">اطلاعات</div>
	        <div class="panel-body">
	
        <form method="post" action="" class="row">
        <input type="hidden" name="mod" value="users">
        <input type="hidden" name="action" value="added_user">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>گروه کاربری:</label>
                <select name="usergroup" class="form-control">
                    <option value="1">مدیران</option>
<option value="2">کاربران</option>
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
                <label>شماره موبایل:</label>
                <input type="text" name="mobile" autocomplete="off" class="form-control">
            </div>
        </div>

       
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>رمز عبور:</label>
                <input type="password" name="password" class="form-control">
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>کد ملی:</label>
                <input type="text" name="codemeli" class="form-control">
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>نام:</label>
                <input type="text" name="firstname" class="form-control">
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>نام خانوادگی:</label>
                <input type="text" name="lastname" class="form-control">
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>جنسیت:</label>
                <select name="sex" class="form-control"><option value="male">مرد</option>
<option value="famale">زن</option>
</select>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="form-group">
                <button type="submit" class="btn btn-success">ثبت و ذخیره</button>
                <a href="/panel.php?mod=users" class="btn btn-link">بازگشت</a>
            </div>
        </div>
        </form>
    
		</div>
		
		</div>
	</div>	</div>
      @endsection
