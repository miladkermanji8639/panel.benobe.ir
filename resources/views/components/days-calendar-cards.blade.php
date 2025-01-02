<div class="days-calendar-cards mt-4"
     id="days-calendar-cards">
  <input type="hidden"
         id="day">
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var daysMap = {
      'شنبه': 'saturday',
      'یکشنبه': 'sunday',
      'دوشنبه': 'monday',
      'سه‌شنبه': 'tuesday',
      'چهارشنبه': 'wednesday',
      'پنج‌شنبه': 'thursday',
      'جمعه': 'friday'
    };
    var daysContainer = document.getElementById('days-calendar-cards');
    Object.keys(daysMap).forEach(function (day) {
      var dayDiv = document.createElement('div');
      dayDiv.classList.add('day-calendar-card', 'd-flex', 'flex-column', 'align-items-center',
        'justify-content-center');
      dayDiv.setAttribute('data-toggle', 'modal');
      dayDiv.setAttribute('data-target', '#currentDayModal');
      dayDiv.setAttribute('data-day', day);
      dayDiv.setAttribute('onclick', `openModal('${day}')`);
      var dayContent = `
            <h6 class="text-center font-weight-bold">${day} ها</h6>
            <span class="text-center mt-3">
                <svg width="25px" height="25px" viewBox="64 64 896 896" fill="currentColor">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
            </span>`;
      dayDiv.innerHTML = dayContent;
      daysContainer.appendChild(dayDiv);
    });
    fetchAppointmentPatterns();
  });
  function fetchAppointmentPatterns() {
    $.ajax({
      url: '{{ route("dr-schedule") }}', // آدرس URL مناسب برای گرفتن الگوهای نوبت‌دهی
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        var patterns = response.patterns;
        var daysMapReverse = {
          'saturday': 'شنبه',
          'sunday': 'یکشنبه',
          'monday': 'دوشنبه',
          'tuesday': 'سه‌شنبه',
          'wednesday': 'چهارشنبه',
          'thursday': 'پنج‌شنبه',
          'friday': 'جمعه'
        };
        document.querySelectorAll('.d-details').forEach(el => el.remove());
        patterns.forEach(function (pattern) {
          var day = daysMapReverse[pattern.day];
          var dayCard = document.querySelector(`.day-calendar-card[data-day="${day}"]`);
          if (dayCard) {
            var startTime = pattern.start_time.slice(0, 5);
            var endTime = pattern.end_time.slice(0, 5);
            var appointmentsPattern = `
                        <div class="appointment-pattern-${pattern.id} d-details" data-toggle="tooltip" title="برای مشاهده سایر نوبت‌ها کلیک کنید">
                            <div class="d-flex flex-column align-items-center justify-content-center overflow-y-scroll" style="max-height: 200px;">
                                <div><span class="font-weight-bold">${startTime} الی ${endTime}</span></div>
                                <div><span class="font-weight-bold">${pattern.max_appointments} نفر</span></div>
                            </div>
                        </div>`;
            dayCard.insertAdjacentHTML('beforeend', appointmentsPattern);
            $('[data-toggle="tooltip"]').tooltip();
            dayCard.style.backgroundColor = '#fdcb6e';
            var path = dayCard.querySelector('path');
            path.setAttribute('d',
              'M512 888C300.2 888 128 715.8 128 504S300.2 120 512 120s384 172.2 384 384-172.2 384-384 384zM473.7 679.4l230-230.3-45.3-45.3L473.7 588.9 388.7 504 343.4 549.3l130 130.3z'
              );
            path.setAttribute('fill', 'green');
          }
        });
        document.querySelectorAll('.day-calendar-card').forEach(card => {
          if (!card.querySelector('.d-details')) {
            card.style.backgroundColor = '#fff';
            var path = card.querySelector('path');
            path.setAttribute('d',
              'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
              );
            path.setAttribute('fill', 'currentColor');
          }
        });
      },
      error: function (error) {
        // console.error('خطا در گرفتن الگوها:', error);
      }
    });
  }
  // ادامه...
</script>
<!-- Modal -->
<div class="modal fade"
     id="currentDayModal"
     tabindex="-1"
     role="dialog"
     aria-labelledby="currentDayModallLabel"
     aria-hidden="true">
  <div class="modal-dialog modal-lg"
       role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"
            id="exampleModalLabel">تعریف برنامه جدید</h5>
        <button type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive ">
          <table class="table">
            <thead>
              <tr>
                <th>روز</th>
                <th>زمان شروع</th>
                <th>زمان پایان</th>
                <th>عنوان</th>
                <th>تعداد نفرات</th>
                <th>تعطیلات رسمی</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody id="patterns-list">
              <!-- الگوهای موجود اینجا نمایش داده می‌شود -->
            </tbody>
          </table>
          <div id="no-pattern-message">
            <div class="ant-empty d-flex justify-content-center w-100 flex-column align-items-center">
              <div class="ant-empty-image"><svg width="184"
                     height="152"
                     viewBox="0 0 184 152"
                     xmlns="http://www.w3.org/2000/svg">
                  <g fill="none"
                     fill-rule="evenodd">
                    <g transform="translate(24 31.67)">
                      <ellipse fill-opacity=".8"
                               fill="#F5F5F7"
                               cx="67.797"
                               cy="106.89"
                               rx="67.797"
                               ry="12.668"></ellipse>
                      <path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            fill="#AEB8C2"></path>
                      <path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                            fill="url(#linearGradient-1)"
                            transform="translate(13.56)"></path>
                      <path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            fill="#F5F5F7"></path>
                      <path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            fill="#DCE0E6"></path>
                    </g>
                    <path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                          fill="#DCE0E6"></path>
                    <g transform="translate(149.65 15.383)"
                       fill="#FFF">
                      <ellipse cx="20.654"
                               cy="3.167"
                               rx="2.849"
                               ry="2.815"></ellipse>
                      <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
                    </g>
                  </g>
                </svg></div>
              <p class="ant-empty-description">برنامه فعالی ثبت نشده است</p>
            </div>
          </div>
        </div>
        <form id="appointment-form">
          <div class="form-group">
            <label for="title">عنوان (اختیاری)</label>
            <input type="text"
                   class="form-control"
                   id="title"
                   placeholder="عنوان برنامه">
          </div>
          <div class="d-flex flex-wrap w-100">
            <div class="form-group col-6 col-sm-12 col-md-6">
              <label for="start-time">زمان شروع</label>
              <select class="form-control select2"
                      id="start-time"
                      style="width: 100%">
                <!-- زمان‌های شروع از 6 صبح تا 12 شب با اسلات 30 دقیقه‌ای -->
                @for($hour = 6; $hour <= 23; $hour++)
                  @for($minute = 0; $minute < 60; $minute += 5)
                    <option value="{{ sprintf('%02d:%02d', $hour, $minute) }}">
                      {{ sprintf('%02d:%02d', $hour, $minute) }}</option>
                  @endfor
                @endfor
              </select>
            </div>
            <div class="form-group col-6 col-sm-12 col-md-6">
              <label for="end-time">زمان پایان</label>
              <select class="form-control select2"
                      id="end-time"
                      style="width: 100%">
                <!-- زمان‌های پایان از 6:30 صبح تا 12 شب با اسلات 5 دقیقه‌ای -->
                @for($hour = 6; $hour <= 23; $hour++)
                  @for($minute = 30; $minute < 60; $minute += 5)
                    <option value="{{ sprintf('%02d:%02d', $hour, $minute) }}">
                      {{ sprintf('%02d:%02d', $hour, $minute) }}</option>
                  @endfor
                  @if($hour < 24)
                    <option value="{{ sprintf('%02d:00', $hour + 1) }}">
                      {{ sprintf('%02d:00', $hour + 1) }}</option>
                  @endif
                @endfor
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="slot">تعداد نفرات</label>
            <div class="d-flex align-items-center">
              <input type="number"
                     class="form-control text-center mx-2"
                     id="max_appointments"
                     name="max_appointments"
                     value="10"
                     min="1">
            </div>
          </div>
          <div class="mt-2 p-2"
               id="holiday_container">
            <h6 class=" d-flex justify-content-center align-items-center  py-2 rounded-30">آیا تعطیلات رسمی برای برنامه
              نوبت
              دهی لحاظ شود؟
              <div class="ant-click-animating-node mx-2">
                <label class="switch mt-3">
                  <input type="checkbox"
                         checked=""
                         id="holiday-schedule_pattern">
                  <span class="slider round"></span>
                </label>
              </div>
            </h6>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button"
                class="btn btn-dark rounded-circle"
                id="save-pattern">
          <svg viewBox="64 64 896 896"
               focusable="false"
               class=""
               data-icon="plus"
               width="14"
               height="14"
               fill="currentColor"
               aria-hidden="true">
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>