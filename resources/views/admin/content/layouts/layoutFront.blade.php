@php
$configData = Helper::appClasses();
$isFront = true;
@endphp

@section('layoutContent')


@extends('admin.content.layouts/commonMaster' )

@include('admin.content.layouts/sections/navbar/navbar-front')

<!-- Sections:Start -->
@yield('content')
<!-- / Sections:End -->

@include('admin.content.layouts/sections/footer/footer-front')
@endsection
