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
                    <h1 class="m-n font-thin h3">ویرایش پکیج</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=packages" class="btn btn-warning btngroup"> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش پکیج</div>
	        <div class="panel-body">
	
            <form method="post" action="" enctype="multipart/form-data">
                <input type="hidden" name="mod" value="packages">
                <input type="hidden" name="action" value="save_edit">
                <input type="hidden" name="id" value="7">
                <div class="form-group">
                    <label>نام پکیج:</label>
                    <input type="text" name="name" value="پنل برنزی" class="form-control" required="">
                </div>
                <div class="form-group">
                    <label>توضیحات:</label>
                    <textarea name="descr" class="form-control" required="">صفحه اول سایت: پست در صفحه اول سایت و اپلیکیشن موبایل (1 ماه)
صفحات وبلاگ: قرار گرفتن در اسلایدر محتوا وبلاگ (1 ماه)
پوش نوتیفیکیشن: یکبار از طریق وب +یکبار اپلیکیشن موبایل
هدیه: سئو دائمی رایگان + اینستاگرام( پست دائمی + 1  بار استوری)
قیمت: 398.000 تومان</textarea>
                </div>
                <div class="form-group">
                    <label>قیمت</label>
                    <input type="text" name="price" class="numberkey form-control" value="398000" required="">
                </div>
                <div class="form-group">
                    <label>وضعیت</label>
                    <select name="status" class="form-control"><option value="1" selected="">فعال</option>
<option value="0">غیرفعال</option>
</select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">ثبت و ذخیره</button>
                </div>                       
            </form>        
        
		</div>
		
		</div>
	</div>	</div><div class="app-content-body">

			<div class="bg-white-only lter b-b wrapper-md clrfix">
				
                <div class="pull-right">
                    <h1 class="m-n font-thin h3">ویرایش پکیج</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=packages" class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش پکیج</div>
	        <div class="panel-body">
	
            <form method="post" action="" enctype="multipart/form-data">
                <input type="hidden" name="mod" value="packages">
                <input type="hidden" name="action" value="save_edit">
                <input type="hidden" name="id" value="7">
                <div class="form-group">
                    <label>نام پکیج:</label>
                    <input type="text" name="name" value="پنل برنزی" class="form-control" required="">
                </div>
                <div class="form-group">
                    <label>توضیحات:</label>
                    <textarea name="descr" class="form-control" required="">صفحه اول سایت: پست در صفحه اول سایت و اپلیکیشن موبایل (1 ماه)
صفحات وبلاگ: قرار گرفتن در اسلایدر محتوا وبلاگ (1 ماه)
پوش نوتیفیکیشن: یکبار از طریق وب +یکبار اپلیکیشن موبایل
هدیه: سئو دائمی رایگان + اینستاگرام( پست دائمی + 1  بار استوری)
قیمت: 398.000 تومان</textarea>
                </div>
                <div class="form-group">
                    <label>قیمت</label>
                    <input type="text" name="price" class="numberkey form-control" value="398000" required="">
                </div>
                <div class="form-group">
                    <label>وضعیت</label>
                    <select name="status" class="form-control"><option value="1" selected="">فعال</option>
<option value="0">غیرفعال</option>
</select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">ثبت و ذخیره</button>
                </div>                       
            </form>        
        
		</div>
		
		</div>
	</div>	</div>
      @endsection
