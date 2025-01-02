@extends('admin.content.layouts/layoutMaster')

@section('title', 'افزودن بسته جدید   ')

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

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <h1 class="m-n font-thin h3">بسته ها</h1>


        </div>
        <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ایجاد بسته جدید</div>
	        <div class="panel-body">
	
        <form method="post" action="" class="mt-4">
            <input type="hidden" name="mod" value="membershipfee">
            <input type="hidden" name="action" value="save_new">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label>نام بسته</label>
                        <input type="text" class="form-control" name="name" placeholder="مثلا: بسته ۳ ماهه" required="">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label>تعداد روز</label>
                        <input type="tel" class="form-control ltr numberkey text-center" name="days" placeholder="مثلا: 90" required="">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <label>قیمت (تومان)</label>
                        <input type="tel" class="form-control ltr numberkey text-center" name="price" placeholder="مثلا: 50000" required="">
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 mt-2">
                    <div class="form-group">
                        <label>قرارگیری</label>
                        <input type="num" min="1" class="form-control ltr numberkey text-center" name="sort" placeholder="مثلا: 1" required="">
                    </div>
                </div>

                <div class="col-md-12 col-sm-12 col-xs-12 mt-3 w-100">
                    <div class="form-group"><button type="submit" class="btn btn-success">ثبت و ذخیره</button> </div>
                </div>
            </div>
        </form>

    
		</div>
		
		</div>
	
       
    </div>
      </div>
      @endsection
