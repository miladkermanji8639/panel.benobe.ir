@php
$configData = Helper::appClasses();
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'طرح منو کناری باز')

@section('content')

<!-- Layout Demo -->
<div class="layout-demo-wrapper">
  <div class="layout-demo-placeholder">
    <img src="{{asset('assets/img/layouts/layout-content-navbar-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout content navbar" data-app-light-img="layouts/layout-content-navbar-light.png" data-app-dark-img="layouts/layout-content-navbar-dark.png">
  </div>
  <div class="layout-demo-info">
    <h4>طرح منو کناری باز</h4>
    <p>طرح پیش فرض قالب، نوار کناری (ناوربری) همراه با محتوا.</p>
  </div>
</div>
<!--/ Layout Demo -->
@endsection
