@extends('admin.content.layouts/layoutMaster')

@section('title', 'شهرها   ')

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
                    <h1 class="m-n font-thin h3">جزئیات پرداخت</h1>
                    
                </div>
                <div class="pull-left"><a href="https://benobe.ir/panel.php?mod=ordervisit" class="btn btn-warning btngroup"><i class="fa fa-arrow-right"></i> بازگشت</a> </div>
            
			</div>
			<div class="wrapper-md">
		
		<div class="panel panel-default ">
	        <div class="panel-heading alert alert-secondary">مشاهده جزئیات</div>
	        <div class="panel-body">
	
        <table class="table">
            <tbody>
                <tr>
                    <td width="200">بیمار:</td>
                    <td>پارمیس محمدی</td>
                </tr>
                <tr>
                    <td>شماره موبایل بیمار:</td>
                    <td>09180533313</td>
                </tr>
                <tr>
                    <td>زمان پرداخت</td>
                    <td>1403-05-26 01:23</td>
                </tr>
                <tr>
                    <td>شماره پیگیری نوبت</td>
                    <td>0352681328</td>
                </tr>
                <tr>
                    <td>روش پرداخت</td>
                    <td>رایگان</td>
                </tr>
                <tr>
                    <td>شماره پیگیری بانک</td>
                    <td>0</td>
                </tr>
               
                <tr>
                    <td>زمان ثبت نوبت</td>
                    <td>1403-05-26 01:23</td>
                </tr>
                <tr>
                    <td>تاریخ مراجعه</td>
                    <td>1403-06-03</td>
                </tr>
                <tr>
                    <td>ساعت مراجعه</td>
                    <td>18:00:00</td>
                </tr>
                <tr>
                    <td>مرکز درمان / بیمارستان</td>
                    <td>دکتر جمال امجدی</td>
                </tr>
                <tr>
                    <td>پزشک</td>
                    <td>دکتر جمال امجدی</td>
                </tr>
                  
                <tr>
                    <td>هزینه ویزیت آزاد پزشک</td>
                    <td>رایگان</td>
                </tr>
                
                <tr>
                    <td>هزینه خدمات سایت</td>
                    <td>رایگان</td>
                </tr>
                 <tr>
                    <td>مبلغ پرداخت شده:</td>
                    <td>رایگان </td>
                </tr>
                
            </tbody>
        </table>   
    
		</div>
		
		</div>
	
		</div>
		
		</div>
      @endsection
