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
<link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/bootstrap-rtl.min.css") }}" rel="stylesheet">
    <link href="{{ asset("admin-assets/css/old-benobe-styles/app_admin.css?v=dddmue") }}" rel="stylesheet">
      @section('content')
   <div class="app-content-body">

			<div class="bg-white-only lter b-b wrapper-md clrfix">
				
                <div class="pull-right">
                    <h1 class="m-n font-thin h3">مشاهده مدارک</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=authentication" class="btn btn-warning btngroup"> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">مشاهده مدارک</div>
	        <div class="panel-body">
	<div class="form-horizontal">

                     <div class="form-group">
                        <label class="col-md-2 control-label">تاریخ و زمان ثبت نام:</label>
                        <div class="col-md-10">1403-05-26 13:04:18</div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">نام و نام خانوادگی:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">کدملی:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">شماره موبایل</label>
                        <div class="col-md-10">09397947829</div>
                    </div>
                   
                    
                    <div class="form-group">
                        <label class="col-md-2 control-label">شماره پروانه</label>
                        <div class="col-md-10"> <br> <span style="color:red;">ارسال نشده است.</span></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="col-md-2 control-label">تصویر پزشک:</label>
                        <div class="col-md-10">---</div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">مجوز پزشک:</label>
                        <div class="col-md-10">---</div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">تلفن همراه:</label>
                        <div class="col-md-10">09397947829</div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">جنسیت:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">تخصص ها:</label>
                        <div class="col-md-10"><br></div>
                    </div>
                  
                   <div class="form-group">
                        <label class="col-md-2 control-label">نام کلینیک:</label>
                        <div class="col-md-10"></div>
                    </div>
                     <div class="form-group">
                        <label class="col-md-2 control-label">تلفن کلینیک:</label>
                        <div class="col-md-10"></div>
                    </div>
                     <div class="form-group">
                        <label class="col-md-2 control-label">آدرس کلینیک:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">استان:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label">شهرستان:</label>
                        <div class="col-md-10"></div>
                    </div>
                    <form method="post" action="" style="display: inline-block; padding-left: 10px">
                        <input type="hidden" name="mod" value="authentication">
                        <input type="hidden" name="action" value="approve">
                        <input type="hidden" name="uid" value="88501">
                        <button type="submit" class="btn btn-success"><i class="fa fa-check"></i> تایید مدارک و فعال سازی</button>
                    </form>
                     <form method="post" action="" style="display: inline-block">
                        <input type="hidden" name="mod" value="authentication">
                        <input type="hidden" name="action" value="unapprove">
                        <input type="hidden" name="uid" value="88501">
                        <button type="submit" class="btn btn-danger"><i class="fa fa-ban"></i> عدم تایید</button>
                    </form>
                    </div>
		</div>
		
		</div>
	</div>	</div>
      @endsection
