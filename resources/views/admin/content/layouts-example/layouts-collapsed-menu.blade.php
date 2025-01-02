@php
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'منوی جمع شده')

@section('content')


<!-- Layout Demo -->
<div class="layout-demo-wrapper">
  <div class="layout-demo-placeholder">
    <img src="{{asset('assets/img/layouts/layout-collapsed-menu-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout collapsed menu" data-app-light-img="layouts/layout-collapsed-menu-light.png" data-app-dark-img="layouts/layout-collapsed-menu-dark.png">
  </div>
  <div class="layout-demo-info">
    <h4>طرح منو کناری جمع شده</h4>
    <div class="alert alert-primary mt-4" role="alert">
      <span class="fw-medium">مهم:</span>
      اگر localStorage را فعال کرده باشید، منو (ناوبری) با مقدار localStorage هماهنگ می‌شود.
    </div>
  </div>
</div>
<!--/ Layout Demo -->

@endsection
