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
            <div class="panel-heading">اضافه کردن تخصص</div>
            <div class="panel-body">

                <form method="POST"
                      action="{{ route('admin.Dashboard.specialty.store-specialty') }}"
                      class="form-horizontal">
                    @csrf
                    <div class="form-group">
                        <label class="control-label col-lg-2 mt-3">نام تخصص<span class="text-danger">*</span> </label>
                        <div class="mt-3"><input type="text"
                                   class="form-control"
                                   name="name"
                                   value="{{ old('name') }}"></div>
                        @error('name')
                        <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                   
                    <div class="form-group mt-3">
                        <label class="control-label col-lg-2 mt-3">زیر مجموعه:</label>
                        <br><br>

                        <select id="nameid"
                                style="padding: .422rem .875rem !important;width: 100%"
                                name="parent_id"
                                class="mt-3"
                                data-placeholder="انتخاب زیر مجموعه">
                            @foreach ($specialties as $specialty)
                            <option value="{{ $specialty->id }}">{{ $specialty->name }}</option>
                            @endforeach

                        </select>

                    </div>
                    <input type="hidden" name="level" value="2">
                    <div class="col-lg-offset-2 mt-4"><button type="submit"
                                class="btn btn-success w-100 btn-lg">اضافه کردن</button></div>
                </form>

            </div>

        </div>

    </div>
</div>

@endsection