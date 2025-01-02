<script>
  $(document).ready(function () {
    $("#datepicker7").addClass("mt-5")
    var isInitialLoad = true; // نشانگر بارگذاری اولیه صفحه
    $('#auto-schedule').change(function () {
      if (!isInitialLoad) { // اگر بارگذاری اولیه نیست
        var isChecked = $(this).is(':checked');
        // به‌روزرسانی وضعیت در دیتابیس
        $.ajax({
          url: '{{ route("update-auto-schedule") }}', // روت مربوطه
          type: 'POST',
          data: {
            auto_schedule: isChecked,
            _token: '{{ csrf_token() }}'
          },
          success: function (response) {
            if (response.success) {
              Swal.fire({
                title: 'به‌روزرسانی شد!',
                text: 'وضعیت الگوی نوبت‌دهی خودکار با موفقیت به‌روزرسانی شد.',
                icon: 'success',
                confirmButtonText: 'باشه'
              });
            }
          },
          error: function (error) {
            Swal.fire({
              title: 'خطا!',
              text: 'مشکلی پیش آمده است.',
              icon: 'error',
              confirmButtonText: 'باشه'
            });
          }
        });
        if (isChecked) {
          $('.seven-col-calendar').show();
          $("#datepicker7").addClass("mt-5")
          $("#auto-schedule-days").removeClass('d-none')


        } else {
          $("#auto-schedule-days").addClass('d-none')


          $('.seven-col-calendar').hide();
          $("#datepicker7").removeClass("mt-5")
        }
      }
    });
    // بررسی وضعیت فعلی هنگام بارگذاری صفحه
    $.ajax({
      url: '{{ route("check-auto-schedule") }}', // روت مربوطه برای بررسی وضعیت
      type: 'GET',
      success: function (response) {
        if (response.auto_schedule) {
          $('#auto-schedule').prop('checked', true);
          $('.seven-col-calendar').show(); // نمایش دایو در صورت فعال بودن
          $("#auto-schedule-days").removeClass('d-none')
        } else {
          $('#auto-schedule').prop('checked', false);
          $('.seven-col-calendar').hide(); // مخفی کردن دایو در صورت غیرفعال بودن
          $("#auto-schedule-days").addClass('d-none')

        }
        $('#auto-schedule').trigger('change'); // تحریک تغییر
        isInitialLoad = false; // بارگذاری اولیه به پایان رسیده
      },
      error: function (error) {
        Swal.fire({
          title: 'خطا!',
          text: 'مشکلی پیش آمده است.',
          icon: 'error',
          confirmButtonText: 'باشه'
        });
      }
    });
  });
  $(document).ready(function () {
    $('#holiday-schedule_pattern').change(function () {
      var isChecked = $(this).is(':checked');
      var day = $("#day").val();
      var ToggleHolidayValue = isChecked ? 1 : 0;
      $("#holiday-schedule_pattern").val(ToggleHolidayValue);
    });
  });

  function openModal(day) {
    $('#day').val(day);
    var daysMap = {
      'شنبه': 'saturday',
      'یکشنبه': 'sunday',
      'دوشنبه': 'monday',
      'سه‌شنبه': 'tuesday',
      'چهارشنبه': 'wednesday',
      'پنج‌شنبه': 'thursday',
      'جمعه': 'friday'
    };
    var englishDay = daysMap[day];
    loadPatterns(englishDay);
    fetchAppointmentPatterns(); // اضافه کردن این خط برای بروزرسانی الگوها در هر بار باز شدن مودال
    $('#exampleModal').modal('show');
  }

  function loadPatterns(day) {
    $.ajax({
      url: '{{ route("dr-schedule") }}',
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        var patternsList = $('#patterns-list');
        patternsList.empty();
        if (response.patterns) {
          var daysMap = {
            'saturday': 'شنبه',
            'sunday': 'یکشنبه',
            'monday': 'دوشنبه',
            'tuesday': 'سه‌شنبه',
            'wednesday': 'چهارشنبه',
            'thursday': 'پنج‌شنبه',
            'friday': 'جمعه'
          };
          response.patterns.forEach(function (pattern) {
            if (pattern.day === day) {
              patternsList.append(
                `<tr id="pattern-${pattern.id}">
                                <td>${daysMap[pattern.day]}</td>
                                <td>${pattern.start_time}</td>
                                <td>${pattern.end_time}</td>
                                <td>${pattern.title ?? 'بدون عنوان'}</td>
                                <td>${pattern.max_appointments}</td>
                                <td>${pattern.include_holidays === 1 ? 'بله' : 'خیر'}</td>
                                <td>
                                    <button class="btn btn-sm btn-light rounded-circle" onclick="deletePattern(${pattern.id}, '${day}')">
                                      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="delete" width="13" height="13" fill="red" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>
                                      </button>
                                </td>
                            </tr>`
              );
            }
          });
          if (patternsList.children().length > 0) {
            $('#no-pattern-message').addClass('d-none');
            $("#apply-patterns").removeClass('d-none');
          } else {
            $('#no-pattern-message').removeClass('d-none');
            $("#apply-patterns").addClass('d-none');
          }
        } else {
          $('#no-pattern-message').removeClass('d-none');
          $("#apply-patterns").addClass('d-none');
        }
      },
      error: function (error) {
        // console.error('خطا در بارگیری الگوها:', error);
      }
    });
  }
  $(document).ready(function () {

    $('#save-pattern').click(function () {
      var startTime = $('#start-time').val();
      var endTime = $('#end-time').val();
      var title = $('#title').val();
      var maxAppointments = $('#max_appointments').val();
      var includeHolidays = $('#holiday-schedule_pattern').is(':checked') ? 1 : 0;
      var day = $('#day').val();
      var daysMap = {
        'شنبه': 'saturday',
        'یکشنبه': 'sunday',
        'دوشنبه': 'monday',
        'سه‌شنبه': 'tuesday',
        'چهارشنبه': 'wednesday',
        'پنجشنبه': 'thursday',
        'جمعه': 'friday'
      };
      if (daysMap.hasOwnProperty(day)) {
        day = daysMap[day];
      } else {
        Swal.fire({
          title: 'خطا!',
          text: 'روز نامعتبر است.',
          icon: 'error',
          confirmButtonText: 'باشه'
        });
        return;
      }
      $.ajax({
        url: '{{ route("dr-schedule.store") }}',
        type: 'POST',
        data: {
          day: day,
          start_time: startTime,
          end_time: endTime,
          title: title,
          max_appointments: maxAppointments,
          _token: '{{ csrf_token() }}',
          auto_schedule: $('#auto-schedule').is(':checked'),
          include_holidays: includeHolidays
        },
        success: function (response) {
          if (response.hasPattern) {
            Swal.fire({
              title: 'ذخیره شد!',
              text: 'الگوی نوبت‌دهی با موفقیت ذخیره شد.',
              icon: 'success',
              confirmButtonText: 'باشه'
            });
            loadPatterns(day);
            $('#holiday-schedule_pattern').prop('checked', includeHolidays === 1);
            fetchAppointmentPatterns();
          } else {
            Swal.fire({
              title: 'خطا!',
              text: 'مشکلی پیش آمده است.',
              icon: 'error',
              confirmButtonText: 'باشه'
            });
          }
        },
        error: function (error) {
          var errorMessage = 'مشکلی پیش آمده است.';
          if (error.responseJSON && error.responseJSON.error) {
            errorMessage = error.responseJSON.error;
          }
          Swal.fire({
            title: 'خطا!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'باشه'
          });
        }
      });
    });
    window.deletePattern = function (patternId, day) {
      Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: 'این الگو حذف خواهد شد و قابل بازگشت نیست! توجه داشته باشید که روز هایی که الگوی خودکار برای آنها  غیر فعال شده نیز پاک خواهد شد !!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله، حذف شود!',
        cancelButtonText: 'لغو'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            url: '{{ route("dr-schedule.destroy", ":id") }}'
              .replace(':id', patternId),
            type: 'POST',
            data: {
              _token: '{{ csrf_token() }}'
            },
            success: function (response) {
              Swal.fire({
                title: 'حذف شد!',
                text: 'الگوی نوبت‌دهی با موفقیت حذف شد.',
                icon: 'success',
                confirmButtonText: 'باشه'
              });
              $(`#pattern-${patternId}`).remove();
              $(`.appointment-pattern-${patternId}`).remove();
              // بروزرسانی کارت‌ها و الگوها بعد از حذف الگو
              fetchAppointmentPatterns();
              // بازگرداندن پس‌زمینه و اس‌وی‌جی به حالت اولیه اگر هیچ الگویی نمانده باشد
              var dayCard = document.querySelector(`.day-calendar-card[data-day="${day}"]`);
              if (dayCard) {
                var detailsCount = dayCard.querySelectorAll('.d-details').length;
                if (detailsCount === 0) {
                  dayCard.style.backgroundColor = '#fff';
                  var path = dayCard.querySelector('path');
                  path.setAttribute('d',
                    'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
                  );
                  path.setAttribute('fill', 'currentColor');
                }
              }
              $('#datepicker7').datepicker('refresh');

              if ($('#patterns-list').children().length === 0) {
                $('#no-pattern-message').removeClass('d-none');
                $("#apply-patterns").addClass('d-none');
              }
            },
            error: function (error) {
              var errorMessage = 'مشکلی پیش آمده است.';
              if (error.responseJSON && error.responseJSON.error) {
                errorMessage = error.responseJSON.error; // گرفتن پیام خطا از پاسخ سرور
              }
              Swal.fire({
                title: 'خطا!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'باشه'
              });
            }
          });
        }
      });
    };
  });

  function fetchAppointmentsForDay(day) {
    $.ajax({
      url: getAppointmentsUrl,
      type: 'GET',
      data: {
        day: day // ارسال تاریخ به همان صورت که هست
      },
      dataType: 'json',
      success: function (response) {
        var appointmentsList = $('#patterns-list-appointments');
        appointmentsList.empty();
        if (response.manualAppointments.length > 0) {
          $("#no-pattern-message-appointments").addClass('d-none')
          response.manualAppointments.forEach(function (appointment) {
            var gDate = appointment.appointment_date.split('-');
            // if(gDate[1]<10){
            //   gDate= '0'+gDate[1];
            // }
            // if(gDate[2]<10){
            //   gDate= '0'+gDate[2];
            // }
            var jDate = jalaali.toJalaali(parseInt(gDate[0]), parseInt(gDate[1]), parseInt(gDate[2]));
            var persianDate = jDate.jy + '/' + jDate.jm + '/' + jDate.jd;
            var dateObj = new Date(appointment.appointment_date);
            var dayOfWeek = dateObj.getDay();
            var persianWeekdayNames = ["دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یکشنبه"];
            appointmentsList.append(`
                        <tr>
                            <td>${persianWeekdayNames[dayOfWeek]}</td>
                            <td>${appointment.start_time}</td>
                            <td>${appointment.end_time}</td>
                            <td>${appointment.title ?? 'بدون عنوان'}</td>
                            <td>${appointment.max_appointments}</td>
                            <td>${appointment.include_holidays === 1 ? 'بله' : 'خیر'}</td>
                            <td><button class="btn btn-sm btn-light rounded-circle" onclick="deleteAppointment(${appointment.id})">
                              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="delete" width="11" height="11" fill="currentColor" aria-hidden="true"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg>
                              </button></td>
                        </tr>
                    `);
          });
        } else {
          $('#no-pattern-message-appointments').show();
          $("#no-pattern-message-appointments").removeClass('d-none')
        }
        $("#currentDayMonthModal").modal("show");
      },
      error: function (error) {
        // console.error('خطا در گرفتن نوبت‌ها:', error);
      }
    });
  }
  // حذف الگوها
  $(document).ready(function () {
    $('.select2').select2();
    $('.select2-appointments').select2();
  });
  $(document).ready(function () {
    // تعریف متغیر برای تاریخ در سطح بالا  
    var currentDay = '';
    // رویداد کلیک برای ذخیره نوبت  
    function fetchAppointments() {
      $.ajax({
        url: '{{ route("setActiveCalendar") }}',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          appointmentDates = response.appointmentsLists.map(appointment => appointment.appointment_date);
          $("#datepicker7").datepicker("refresh");
        },
        error: function (error) {
          // console.error('خطا در دریافت نوبت‌ها:', error);
        }
      });
    }
    $('#save-pattern-appointments').click(function () {
      var startTime = $('#start-time-appointments').val();
      var endTime = $('#end-time-appointments').val();
      var title = $('#title-appointments').val();
      var maxAppointments = $('#max_appointments-appointments').val();
      var includeHolidays = $('#holiday-schedule_pattern-appointments').is(':checked') ? 1 : 0;
      var day = $('#exampleModalTitleText').text();
      var persianDateString = day.match(/\d+ \S+ \d+/)[0];
      $.ajax({
        url: '{{ route("manual-appointments.store") }}',
        type: 'POST',
        data: {
          start_time: startTime,
          end_time: endTime,
          title: title,
          max_appointments: maxAppointments,
          include_holidays: includeHolidays,
          appointments_date: persianDateString,
          _token: '{{ csrf_token() }}'
        },
        success: function (response) {
          if (response.hasPattern) {
            Swal.fire({
              title: 'ذخیره شد!',
              text: 'نوبت با موفقیت ذخیره شد.',
              icon: 'success',
              confirmButtonText: 'باشه'
            }).then(() => {
              fetchAppointmentsForDay(day.trim().toLowerCase());
              fetchAppointments();
            });
          } else {
            Swal.fire({
              title: 'خطا!',
              text: 'مشکلی پیش آمده است.',
              icon: 'error',
              confirmButtonText: 'باشه'
            });
          }
        },
        error: function (error) {
          var errorMessage = 'مشکلی پیش آمده است.';
          if (error.responseJSON && error.responseJSON.error) {
            errorMessage = error.responseJSON.error; // گرفتن پیام خطا از پاسخ سرور
          }
          Swal.fire({
            title: 'خطا!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'باشه'
          });
        }
      });
    });
    // حذف رویدادهای نوبت  
    $('#patterns-list-appointments').on('click', '.btn-del-appointments', function () {
      var appointmentId = $(this).data('id');
      var deleteUrl = appointmentsDestroy.replace(':id', appointmentId);
      var csrfToken = $('meta[name="csrf-token"]').attr('content');
      Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: "این عمل غیرقابل بازگشت است!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'خیر، انصراف'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            url: deleteUrl,
            type: 'POST',
            data: {
              _token: csrfToken,
              _method: 'DELETE'
            },
            success: function (response) {
              Swal.fire({
                title: 'حذف شد!',
                text: 'نوبت با موفقیت حذف شد.',
                icon: 'success',
                confirmButtonText: 'باشه'
              }).then(() => {
                fetchAppointmentsForDay(currentDay);
                fetchAppointments();
              });
            },
            error: function (error) {
              var errorMessage = 'مشکلی پیش آمده است.';
              if (error.responseJSON && error.responseJSON.error) {
                errorMessage = error.responseJSON.error; // گرفتن پیام خطا از پاسخ سرور
              }
              Swal.fire({
                title: 'خطا!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'باشه'
              });
            }
          });
        }
      });
    });
    document.addEventListener('fetchAppointmentsForDay', function (event) {
      var day = event.detail;
      fetchAppointmentsForDay(day);
      fetchAppointments();
    });
    window.deleteAppointment = function (id) {
      Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: 'این نوبت حذف خواهد شد و قابل بازگشت نیست!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله، حذف شود!',
        cancelButtonText: 'لغو'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            url: '{{ route("appointments.destroy", ":id") }}'
              .replace(':id', id),
            type: 'POST',
            data: {
              _token: '{{ csrf_token() }}',
              _method: 'DELETE'
            },
            success: function (response) {
              var gDate = $('#appointments_date').val().split('-');
              // console.log('delete from blade');
              // استفاده از jQuery AJAX برای فراخوانی تبدیل تاریخ به میلادی
              $.ajax({
                url: '{{ route("convert-to-gregorian") }}', // آدرس روت مناسب برای تبدیل
                type: 'POST',
                data: {
                  year: gDate[0],
                  month: gDate[1],
                  day: gDate[2],
                  _token: $('meta[name="csrf-token"]').attr('content')
                },
                success: function (convertedResponse) {
                  // لاگ گرفتن تاریخ تبدیل شده
                  Swal.fire({
                    title: 'حذف شد!',
                    text: 'نوبت با موفقیت حذف شد.',
                    icon: 'success',
                    confirmButtonText: 'باشه'
                  });
                  // به‌روزرسانی لیست نوبت‌ها
                  var trustDate = (convertedResponse.gregorianDate).split('-');
                  if (trustDate[1] < 10)
                    trustDate[1] = '0' + trustDate[1]
                  if (trustDate[2] < 10)
                    trustDate[2] = '0' + trustDate[2]
                  var fixedDate = trustDate[0] + "-" + trustDate[1] + "-" + trustDate[2]
                  fetchAppointmentsForDay(fixedDate);
                  fetchAppointments();
                },
                error: function (error) {
                  // console.error('Error converting date:', error);
                }
              });
            },
            error: function (error) {
              var errorMessage = 'مشکلی پیش آمده است.';
              if (error.responseJSON && error.responseJSON.error) {
                errorMessage = error.responseJSON.error; // گرفتن پیام خطا از پاسخ سرور
              }
              Swal.fire({
                title: 'خطا!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'باشه'
              });
            }
          });
        }
      });
    }
    document.addEventListener('fetchAppointmentsForDay', function (event) {
      var day = event.detail;
      fetchAppointmentsForDay(day);
      fetchAppointments();
    });
  });

  // ارسال درخواست AJAX  

</script>
