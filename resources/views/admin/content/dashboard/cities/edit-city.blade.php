@extends('admin.content.layouts/layoutMaster')

@section('title', 'ویرایش شهر ')

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

        <h1 class="m-n font-thin h3"> ویرایش شهر</h1>
        <a href="{{ route('admin.Dashboard.cities.show',$cityy->parent_id) }}"
           class="btn btn-warning">بازگشت</a>

    </div>
    <div class="wrapper-md w-100">

        <div class="panel panel-default">
            <div class="panel-heading"> ویرایش </div>
            <div class="panel-body">

                <form method="POST"
                      action="{{ url('admin/dashboard/cities/update-city/'.$cityy->id) }}"
                      action="?mod=zone"
                      class="form-horizontal">
                    @csrf
                    <div class="form-group">
                        <label class="control-label col-lg-2 mt-3">نام<span class="text-danger">*</span> </label>
                        <div class="col-lg-12 mt-3">
                            <input type="text"
                                   class="form-control"
                                   name="name"
                                   value="{{ $cityy->name ? $cityy->name :  old('name')  }}">
                            @error('name')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-2 mt-3">استان</label>
                        <div class="col-lg-12 mt-3">
                            <select class="chosen-select  chosen-rtl form-control"
                                    name="parent_id">
                                @foreach ($cities as $city)
                                <option {{
                                        $city->id == $cityy->parent_id ? 'selected' : '' }} value="{{ $city->id }}">{{
                                    $city->name }}</option>
                                @endforeach

                            </select>
                        </div>
                    </div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-2 mt-3">قیمت حمل و نقل و ارسال کالا به این منطقه:</label>
                <div class="col-lg-12 mt-3"><input type="text"
                           name="price_shipping"
                           class="form-control numberkey"
                           value="{{ $cityy->price_shipping ? $cityy->price_shipping :  old('name')  }}"
                           placeholder="در صورت رایگان بودن 0 وارد کنید"></div>
                @error('price_shipping')
                <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <input type="hidden" name="level" value="2">
                </div>
              </div>
            <div class="col-lg-offset-2 mt-4"><button type="submit"
                        class="btn btn-success w-100 btn-lg">ویرایش </button></div>
            </form>

        </div>

    </div>

</div>
</div>
@endsection