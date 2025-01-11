 <link type="text/css" href="{{ asset('dr-assets/panel/css/calendar/custom-calendar.css') }}" rel="stylesheet" />
 <div class="container calendar">
  <div class="calendar-header w-100 d-flex justify-content-between align-items-center gap-4">
   <div class="">
    <button id="prev-month" class="btn btn-light">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g id="Arrow / Chevron_Right_MD">
       <path id="Vector" d="M10 8L14 12L10 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      </g>
     </svg>
    </button>
   </div>
   <div class="w-100">
    <select id="year" class="form-select w-100 bg-light border-0"></select>
   </div>
   <div class="w-100">
    <select id="month" class="form-select w-100 bg-light border-0"></select>
   </div>
   <div class="">
    <button id="next-month" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none">
      <g id="Arrow / Chevron_Left_MD">
       <path id="Vector" d="M14 16L10 12L14 8" stroke="#000000" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      </g>
     </svg>
    </button>
   </div>
  </div>
  <div  class="calendar-body calendar-body-g-425"> <!-- عناوین روزهای هفته -->
   <div class="calendar-day-name text-center">ش</div>
   <div class="calendar-day-name text-center">ی</div>
   <div class="calendar-day-name text-center">د</div>
   <div class="calendar-day-name text-center">س</div>
   <div class="calendar-day-name text-center">چ</div>
   <div class="calendar-day-name text-center">پ</div>
   <div class="calendar-day-name text-center">ج</div>
  </div>
  <div class="calendar-body" id="calendar-body"> <!-- تقویم در اینجا بارگذاری می‌شود --> </div>
 </div>
 @push('scripts')
  <script src="{{ asset('dr-assets/panel/js/calendar/custm-calendar.js') }}"></script>
 @endpush
