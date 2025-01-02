@extends('sendotp::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>Module: {!! config('sendotp.name') !!}</p>
@endsection
