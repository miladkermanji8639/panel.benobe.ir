<div id="datepicker7">
  <div id="auto-schedule-days" class="d-none">
    <div>
      <h6 class="text-center col-12 font-13 d-block d-flex justify-content-center align-items-center py-2 rounded-30">
        سیستم خودکار برای چه روزهایی غیرفعال باشد؟
        <div class="ant-click-animating-node mx-2">
          <label class="switch mt-3">
            <input type="checkbox" id="disabledDays">
            <span class="slider round"></span>
          </label>
        </div>
      </h6>
    </div>
  </div>
  <div id="calendar-container"></div>
</div>

<div class="guid-color-div d-flex mt-3">
  <div class="d-flex align-items-center">
    <div class="guide-box guide-red"></div>
    <div class="px-1"><span>روزهای تعطیل</span></div>
  </div>
  <div class="d-flex align-items-center">
    <div class="guide-box guide-blue"></div>
    <div class="px-1"><span>امروز</span></div>
  </div>
  <div class="d-flex align-items-center">
    <div class="guide-box guide-secondary"></div>
    <div class="px-1"><span>روز انتخابی</span></div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="currentDayMonthModal" tabindex="-1" aria-labelledby="currentDayMonthModalLabel" aria-hidden="true">
  <input type="hidden" id="dayAppointments">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalTitleText">شنبه‌ها</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
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
            <tbody id="patterns-list-appointments">
              <!-- الگوهای موجود اینجا نمایش داده می‌شود -->
            </tbody>
          </table>
          <div id="no-pattern-message-appointments">
            <div class="ant-empty d-flex justify-content-center w-100 flex-column align-items-center">
              <div class="ant-empty-image">
                <!-- آیکون SVG برای پیام خالی -->
              </div>
              <p class="ant-empty-description">برنامه فعالی ثبت نشده است</p>
            </div>
          </div>
        </div>
        <form id="appointment-form-for-appointments">
          <div class="form-group">
            <label for="title-appointments">عنوان (اختیاری)</label>
            <input type="text" class="form-control" id="title-appointments" placeholder="عنوان برنامه">
          </div>
          <div class="d-flex flex-wrap w-100">
            <div class="form-group col-6 col-sm-12 col-md-6">
              <label for="start-time-appointments">زمان شروع</label>
              <select class="form-control select2-appointments" id="start-time-appointments" style="width: 100%">
                <!-- گزینه‌های زمان شروع از 6 صبح تا 12 شب با اسلات‌های 5 دقیقه‌ای -->
                @for($hour = 6; $hour <= 23; $hour++)
                  @for($minute = 0; $minute < 60; $minute += 5)
                    <option value="{{ sprintf('%02d:%02d', $hour, $minute) }}">
                      {{ sprintf('%02d:%02d', $hour, $minute) }}
                    </option>
                  @endfor
                @endfor
              </select>
            </div>
            <div class="form-group col-6 col-sm-12 col-md-6">
              <label for="end-time-appointments">زمان پایان</label>
              <select class="form-control select2-appointments" id="end-time-appointments" style="width: 100%">
                <!-- گزینه‌های زمان پایان از 6:30 صبح تا 12 شب با اسلات‌های 5 دقیقه‌ای -->
                @for($hour = 6; $hour <= 23; $hour++)
                  @for($minute = 30; $minute < 60; $minute += 5)
                    <option value="{{ sprintf('%02d:%02d', $hour, $minute) }}">
                      {{ sprintf('%02d:%02d', $hour, $minute) }}
                    </option>
                  @endfor
                  @if($hour < 24)
                    <option value="{{ sprintf('%02d:00', $hour + 1) }}">
                      {{ sprintf('%02d:00', $hour + 1) }}
                    </option>
                  @endif
                @endfor
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="slot">تعداد نفرات</label>
            <div class="d-flex align-items-center">
              <input type="number" class="form-control text-center mx-2" id="max_appointments-appointments" name="max_appointments" value="10" min="1">
              <input type="hidden" name="appointment_date" id="appointments_date" value="">
            </div>
          </div>
          <div class="mt-2 p-2" id="holiday_container-appointments">
            <h6 class="d-flex justify-content-center align-items-center py-2 rounded-30">آیا تعطیلات رسمی برای برنامه نوبت دهی لحاظ شود؟
              <div class="ant-click-animating-node mx-2">
                <label class="switch mt-3">
                  <input type="checkbox" checked id="holiday-schedule_pattern-appointments">
                  <span class="slider round"></span>
                </label>
              </div>
            </h6>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark rounded-circle" id="save-pattern-appointments">
          <svg viewBox="64 64 896 896" focusable="false" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
