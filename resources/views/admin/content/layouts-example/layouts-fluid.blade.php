@php
$configData = Helper::appClasses();
$container = 'container-fluid';
$containerNav = 'container-fluid';
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'طرح تمام عرض')

@section('content')
<!-- Layout Demo -->
<div class="layout-demo-wrapper">
  <div class="layout-demo-placeholder">
    @if ($configData['layout'] === 'horizontal')
    <img src="{{asset('assets/img/layouts/layout-horizontal-fluid-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout fluid" data-app-light-img="layouts/layout-horizontal-fluid-light.png" data-app-dark-img="layouts/layout-horizontal-fluid-dark.png">
    @else
    <img src="{{asset('assets/img/layouts/layout-fluid-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout fluid" data-app-light-img="layouts/layout-fluid-light.png" data-app-dark-img="layouts/layout-fluid-dark.png">
    @endif
  </div>
  <div class="layout-demo-info">
    <h4>طرح تمام عرض</h4>
    <p>طرح یک
      <code>100% width</code>
      را در هر نقطه شکست واکنش گرا تنظیم می کند.
    </p>
  </div>
</div>
<!--/ Layout Demo -->
@endsection
