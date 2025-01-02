<!DOCTYPE html>
<html
    lang="fa-IR"
    dir="rtl"
    class="scroll-smooth"
>

<head>
    @include('dr.layouts.partials.head-tag')
    @yield('head-tag')
    @yield('site-header')
</head>

<body>


<main class="mb-5">

    @yield('content')


</main>



@include('dr.layouts.partials.scripts')
@yield('scripts')

</body>

</html>
