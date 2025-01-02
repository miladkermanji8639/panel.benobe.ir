@php
$configData = Helper::appClasses();
$isFlex = true;
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'نوار ناوبری محتوا (منو کناری) + بخش کناری')

@section('content')
<div class="flex-shrink-1 flex-grow-0 w-px-350 border-end container-p-x container-p-y">
  <div class="layout-example-sidebar layout-example-content-inner">
    بخش کناری
  </div>
</div>

<div class="flex-shrink-1 flex-grow-1 container-p-x container-p-y">
  <!-- Layout Demo -->
  <div class="layout-demo-wrapper">
    <div class="layout-demo-placeholder">
      <img src="{{asset('assets/img/layouts/layout-content-navbar-and-sidebar-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout content navbar + sidebar" data-app-light-img="layouts/layout-content-navbar-and-sidebar-light.png" data-app-dark-img="layouts/layout-content-navbar-and-sidebar-dark.png">
    </div>
    <div class="layout-demo-info">
      <h4>نوار ناوبری محتوا (منو کناری) + بخش کناری</h4>
      <p>طرح صفحه
        <code>max-width</code>
        را در هر نقطه شکست واکنش گرا تنظیم می کند.
      </p>
    </div>
  </div>
  <!--/ Layout Demo -->
</div>
@endsection
