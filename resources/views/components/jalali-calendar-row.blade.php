<style>
 .calendar-card .day-name {
  font-size: 16px;
  font-weight: bold;
 }

 .my-active {
  border: 2px solid green;
  /* حاشیه سبز برای تاریخ امروز */
 }

 .calendar-card .date {
  font-size: 14px;
 }

 #calendar {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
 }
</style>
<div class="w-100 d-flex justify-content-around mt-2 align-items-center">
 <div class="w-100 d-flex align-items-center gap-4">
  <div>
   <button id="prev" class="btn btn-light">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <g id="Arrow / Chevron_Right_MD">
      <path id="Vector" d="M10 8L14 12L10 16" stroke="#000000" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" />
     </g>
    </svg>
   </button>
  </div>
  <div id="calendar" class="d-flex w-100 justify-content-between gap-4">
   <!-- تقویم اولیه با تاریخ کنونی پر می‌شود -->
  </div>
  <div>
   <button id="next" class="btn btn-light">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <g id="Arrow / Chevron_Left_MD">
      <path id="Vector" d="M14 16L10 12L14 8" stroke="#000000" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" />
     </g>
    </svg>
   </button>
  </div>
 </div>
</div>

<script>
 $(document).ready(function() {
  let currentDate = moment().format('YYYY-MM-DD');
  const days = 14;
  const calendar = $('#calendar');

  function loadCalendar(date) {
   calendar.empty();
   for (let i = 0; i < days; i++) {
    const current = moment(date).add(i, 'days');
    const persianDate = current.locale('fa').format('dddd');
    const persianFormattedDate = current.locale('fa').format('D MMMM YYYY');
    const isActive = current.isSame(moment(), 'day') ? 'my-active' : '';
    const card =
     ` <div class="calendar-card btn btn-light ${isActive}"> <div class="day-name">${persianDate}</div> <div class="date">${persianFormattedDate}</div> </div>`;
    calendar.append(card);
   }
  }

  function animateAndLoadCalendar(direction) {
   const animation = {
    left: direction === 'next' ? '-100%' : '100%',
    opacity: 0
   };
   calendar.animate(animation, 300, function() {
    if (direction === 'next') {
     currentDate = moment(currentDate).add(days, 'days').format('YYYY-MM-DD');
    } else {
     currentDate = moment(currentDate).subtract(days, 'days').format('YYYY-MM-DD');
    }
    loadCalendar(currentDate);
    calendar.css({
     left: direction === 'next' ? '100%' : '-100%',
     opacity: 0
    });
    calendar.animate({
     left: '0%',
     opacity: 1
    }, 300);
   });
  }
  $('#next').click(function() {
   animateAndLoadCalendar('next');
  });
  $('#prev').click(function() {
   animateAndLoadCalendar('prev');
  });
  loadCalendar(currentDate);
 });
</script>
