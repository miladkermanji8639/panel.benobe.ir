@isset($pageConfigs)
{!! Helper::updatePageConfig($pageConfigs) !!}
@endisset
@php
$configData = Helper::appClasses();

/* Display elements */
$customizerHidden = ($customizerHidden ?? '');

@endphp

@extends('admin.content.layouts/commonMaster' )

@section('layoutContent')


<!-- Content -->
@yield('content')
<!--/ Content -->

@endsection
