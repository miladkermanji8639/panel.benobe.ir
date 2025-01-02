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
                    <h1 class="m-n font-thin h3">جزییات کیف پول محمد امیری</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=wallet_checkout_user" class="btn btn-warning btngroup"><i class="fa fa-arrow-right px-2"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
             <div class="table-responsive">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></th>
                            <th>شناسه</th>
                            <th>بابت</th>
                            <th>تاریخ</th>
                            <th>مبلغ</th>
                            <th>توضیحات</th>
                        </tr>
                    </thead>
                    <tbody>
                <tr>
                    
                    <td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>
                    <td>1 </td>
                    <td><label class="badge bg-label-success me-1">پرداخت و شارژ حساب</label></td>
                    <td>1403/03/12 20:22</td>
                    <td>100,000 تومان</td>
                    <td><small>شارژ حساب کاربری به مبلغ 100000 تومان به کد پیگیری: 127333437442 و شماره تراکنش : 127333437442</small></td>
                </tr>
            </tbody>
                </table>
            </div>
        <a href="?mod=wallet_checkout_user" class="btn btn-link btn-warning mt-3">بازگشت</a></div>	</div>
      @endsection
