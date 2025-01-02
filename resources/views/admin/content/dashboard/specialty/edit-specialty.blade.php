@extends('admin.content.layouts/layoutMaster')

@section('title', 'ویرایش تخصص ')

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

        <h1 class="m-n font-thin h3"> ویرایش تخصص</h1>
        <a href="{{ route('admin.Dashboard.specialty.show',$specialtyy->parent_id) }}"
           class="btn btn-warning">بازگشت</a>

    </div>
    <div class="wrapper-md w-100">

        <div class="panel panel-default">
            <div class="panel-heading"> ویرایش </div>
            <div class="panel-body">

                <form method="POST"
                      action="{{ url('admin/dashboard/specialty/update-specialty/'.$specialtyy->id) }}"
                      
                      class="form-horizontal">
                    @csrf
                    <div class="form-group">
                        <label class="control-label col-lg-2 mt-3">نام<span class="text-danger">*</span> </label>
                        <div class="col-lg-12 mt-3">
                            <input type="text"
                                   class="form-control"
                                   name="name"
                                   value="{{ $specialtyy->name ? $specialtyy->name :  old('name')  }}">
                            @error('name')
                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
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
                            <option {{
                                        $specialty->id == $specialtyy->parent_id ? 'selected' : '' }} value="{{ $specialty->id }}">{{ $specialty->name }}</option>
                            @endforeach
                    
                        </select>
                    
                    </div>
            </div>
            <input type="hidden" name="level" value="2">
            
            <div class="col-lg-offset-2 mt-4"><button type="submit"
                        class="btn btn-success w-100 btn-lg">ویرایش </button></div>
            </form>

        </div>

    </div>

</div>
</div>
@endsection