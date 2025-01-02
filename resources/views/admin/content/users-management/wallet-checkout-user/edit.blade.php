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

      @section('content')
     <div class="app-content-body">

			<div class="bg-white-only lter b-b wrapper-md clrfix d-flex justify-content-between">
				
                <div class="pull-right">
                    <h1 class="m-n font-thin h3">تغییر وضعیت و تسویه حساب با محمد امیری</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=wallet_checkout_user" class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">تغییر وضعیت و تسویه حساب</div>
	        <div class="panel-body">
	
            <form method="post" action="" class="row">
                <input type="hidden" name="mod" value="wallet_checkout_user">
                <input type="hidden" name="action" value="save_status">
                <input type="hidden" name="id" value="60">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td width="200">نام بانک</td>
                            <td>ویداامیری</td>
                        </tr>
                        <tr>
                            <td>نام صاحب حساب</td>
                            <td>ملی</td>
                        </tr>
                        <tr>
                            <td>شماره کارت</td>
                            <td class="ltr text-right">6047997443652053</td>
                        </tr>
                        <tr>
                            <td>شماره شبا</td>
                            <td class="ltr text-right">IR160170000000343299765009</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                        <label>کد پیگیری</label>
                        <input type="text" class="form-control" name="pay_refid" value="">
                    </div>
                </div>
                
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                        <label>تاریخ پرداخت</label>
                        <input type="text" class="form-control datepicker hasDatepicker" value="" autocomplete="off" name="pay_date" id="dp1723956823416">
                    </div>
                </div>
                
                <div class="col-md-12 col-sm-6 col-xs-12">
                    <div class="form-group mt-3">
                        <label>توضیحات</label>
                        <textarea name="pay_descr" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-md-12 col-sm-6 col-xs-12 mt-3">
                    <div class="form-group mt-3">
                    <input type="submit" class="btn btn-success" value="ذخیره">
                    <a href="?mod=wallet_checkout_user" class="btn btn-link btn-warning">بازگشت</a>
                    </div>
                </div>
                
            
            </form>
        
		</div>
		
		</div>
	</div>	</div>
      @endsection
