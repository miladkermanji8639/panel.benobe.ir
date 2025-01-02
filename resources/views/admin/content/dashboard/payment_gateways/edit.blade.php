@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%20%20%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4%20%D8%AF%D8%B1%DA%AF%D8%A7%D9%87%20%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA%20%20%20%26%2339%3B)%0D />

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

          <h1 class="m-n font-thin h3"> ویرایش درگاه</h1>


        </div>
       <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading">ویرایش به پرداخت بانک ملت</div>
	        <div class="panel-body">
	
            <form method="post" action="">
                <input type="hidden" name="plugin" value="">
                <input type="hidden" name="action" value="save">
                <input type="hidden" name="name" value="behpardakht">           
                <div class="row">
                    <div class="col-12 col-lg-12 col-md-12 col-sm-12">
        
                <div class="form-group mt-2">
                    <label class="control-label">Terminalid درگاه:</label>
                    <input type="text" class="form-control ltr text-left" name="terminalid" value="">
                </div>
            
                <div class="form-group mt-2">
                    <label class="control-label">Username درگاه:</label>
                    <input type="text" class="form-control ltr text-left" name="username" value="">
                </div>
            
                <div class="form-group mt-2">
                    <label class="control-label">Password درگاه:</label>
                    <input type="text" class="form-control ltr text-left" name="password" value="">
                </div>
            
            <div class="form-group mt-2">
                <label class="control-label">وضعیت فعال و غیرفعال بودن درگاه:</label>
                <select class="form-control" name="status">
                    <option value="1">فعال</option>
<option value="0" selected="">غیرفعال</option>

                </select>
            </div>
        
                    </div>
                </div>
                <div class="mt-4 text-start"><button type="submit" class="btn btn-success me-1 mb-1"><i class="fa fa-save px-2"></i> ذخیره تغییرات </button> </div>               
            </form>
        
		</div>
		
		</div>
	</div>
      </div>
      @endsection
