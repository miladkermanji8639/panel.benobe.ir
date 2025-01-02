@extends('dr.panel.layouts.master')
@section('styles')
 <link type="text/css" href="{{ asset('dr-assets/panel/css/panel.css') }}" rel="stylesheet" />
 <link type="text/css" href="{{ asset('dr-assets/panel/css/my-performance/chart/chart.css') }}" rel="stylesheet" />
@endsection
@section('site-header')
 {{ 'به نوبه | پنل دکتر' }}
@endsection
@section('content')
 @section('bread-crumb-title', '  آمار و نمودار ')


 <div class="chart-content w-100 d-flex justify-content-center mt-4 ">
  <div class="chart-content-wrapper p-3 position-relative">
   <div class="d-flex flex-wrap justify-content-center">
    <div class="chart-container col-md-6 p-2">
     <canvas id="doctor-performance-chart"></canvas>
    </div>
    <div class="chart-container col-md-6 p-2">
     <canvas id="doctor-patient-chart"></canvas>
    </div>
    <div class="chart-container col-md-6 p-2">
     <canvas id="doctor-appointment-chart"></canvas>
    </div>
   </div>
  </div>
 </div>
@endsection
@section('scripts')
 <script src="{{ asset('dr-assets/panel/jalali-datepicker/run-jalali.js') }}"></script>
 <script src="{{ asset('dr-assets/panel/js/dr-panel.js') }}"></script>
 <script>
  var appointmentsSearchUrl = "{{ route('search.appointments') }}";
  var updateStatusAppointmentUrl =
   "{{ route('updateStatusAppointment', ':id') }}";
 </script>
 <script>
  document.addEventListener('DOMContentLoaded', function() {
   const urlParams = new URLSearchParams(window.location.search);
   if (urlParams.has('showModal')) {
    // فرض کنید ID مودال شما "activation-modal" است  
    $('#activation-modal').modal('show');
   }
  });
 </script>
 <script>
  var ctx = document.getElementById('doctor-performance-chart').getContext('2d');
  var chart = new Chart(ctx, {
   type: 'bar',
   data: {
    labels: ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [{
     label: 'تعداد ویزیت',
     data: [10, 20, 15, 30, 25, 20, 15, 10],
     backgroundColor: 'rgba(255, 99, 132, 0.2)',
     borderColor: 'rgba(255, 99, 132, 1)',
     borderWidth: 1
    }, {
     label: 'تعداد مشاوره',
     data: [5, 10, 8, 15, 12, 10, 8, 5],
     backgroundColor: 'rgba(54, 162, 235, 0.2)',
     borderColor: 'rgba(54, 162, 235, 1)',
     borderWidth: 1
    }]
   },
   options: {
    scales: {
     yAxes: [{
      ticks: {
       beginAtZero: true
      }
     }]
    },
    responsive: true,
    maintainAspectRatio: false
   }
  });

  var ctx2 = document.getElementById('doctor-patient-chart').getContext('2d');
  var chart2 = new Chart(ctx2, {
   type: 'line',
   data: {
    labels: ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [{
     label: 'تعداد بیماران',
     data: [50, 60, 55, 65, 60, 55, 50, 45],
     backgroundColor: 'rgba(255, 206, 86, 0.2)',
     borderColor: 'rgba(255, 206, 86, 1)',
     borderWidth: 1
    }]
   },
   options: {
    scales: {
     yAxes: [{
      ticks: {
       beginAtZero: true
      }
     }]
    },
    responsive: true,
    maintainAspectRatio: false
   }
  });

  var ctx3 = document.getElementById('doctor-appointment-chart').getContext('2d');
  var chart3 = new Chart(ctx3, {
   type: 'pie',
   data: {
    labels: ['رزرو شده', 'لغو شده', 'انجام شده'],
    datasets: [{
     label: 'وضعیت نوبت',
     data: [40, 20, 40],
     backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
     ],
     borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
     ],
     borderWidth: 1
    }]
   },
   options: {
    responsive: true,
    maintainAspectRatio: false
   }
  });
 </script>
@endsection
