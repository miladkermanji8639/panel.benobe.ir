@php
$configData = Helper::appClasses();
$isNavbar = false;
$navbarType = 'layout-navbar-hidden';
@endphp

@extends('admin.content.layouts/layoutMaster')

@section('title', 'طرح بدون نوار ابزار (بالایی)')

@section('content')

<!-- Layout Demo -->
<div class="layout-demo-wrapper">
  <div class="layout-demo-placeholder">
    <img src="{{asset('assets/img/layouts/layout-without-navbar-'.$configData['style'].'.png')}}" class="img-fluid" alt="Layout without navbar" data-app-light-img="layouts/layout-without-navbar-light.png" data-app-dark-img="layouts/layout-without-navbar-dark.png">
  </div>
  <div class="layout-demo-info">
    <h4>طرح بدون نوار ابزار (بالایی)</h4>
    <p>طرح شامل کامپوننت Navbar نیست.</p>
  </div>
</div>
<!--/ Layout Demo -->

@endsection
