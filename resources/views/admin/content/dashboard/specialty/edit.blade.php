@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86%20%D8%AA%D8%AE%D8%B5%D8%B5%20%D8%AC%D8%AF%DB%8C%D8%AF%20%20%20%26%2339%3B)%0D />

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
    
        <h1 class="m-n font-thin h3">تخصص ها</h1>
    
        <a href="{{ route('admin.Dashboard.specialty.index') }}"
           class="btn btn-warning">بازگشت</a>
    </div>
    <div class="wrapper-md w-100">

        <div class="panel panel-default">
            <div class="panel-heading">ویرایش کردن تخصص</div>
            <div class="panel-body">

                <form method="POST"
                      action="{{ route('admin.Dashboard.specialty.update',$specialty->id) }}"
                      class="form-horizontal">
                    @csrf
                    <div class="form-group">
                        <label class="control-label col-lg-2 mt-3">نام تخصص<span class="text-danger">*</span> </label>
                        <div class="mt-3"><input type="text"
                                   class="form-control"
                                   name="name"
                                   value="{{ $specialty->name ? $specialty->name :  old('name') }}"></div>
                        @error('name')
                        {{ $message }}
                        @enderror
                    </div>
                    <input type="hidden"
                           name="parent_id"
                           value="0">
                           <input type="hidden" name="level" value="1">
                    <div class="col-lg-offset-2 mt-4"><button type="submit"
                                class="btn btn-success w-100 btn-lg">ویرایش کردن</button></div>
                </form>

            </div>

        </div>

    </div>
</div>

@endsection