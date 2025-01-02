@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%20%D9%85%D8%B7%D9%84%D8%A8%D9%87%D8%A7%26%2339%3B)%0D />

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection

      @section('content')
      <div class="app-content-body">

        <div class="bg-white-only lter b-b wrapper-md clrfix">

          <h1 class="m-n h3 font-thin">تگ ها</h1>

        </div>
        <div class="wrapper-md">

          <form method="post"
                action=""
                enctype="multipart/form-data"
                class="row tagform">

            <div class="form-group mt-3">
              <label class="control-label"> نام برچسب:</label>
              <div class=""><input type="text"
                       name="tags"
                       id="tags-input"
                       class="form-control"
                       value=""></div>
            </div>
            <div class="form-group mt-3">
              <label class="control-label"> تعداد استفاده:</label>
              <div class=""><input type="text"
                       name="tags"
                       id="tags-input"
                       class="form-control"
                       value=""></div>
            </div>
            <div class="col-md-12">
              <input type="submit"
                     class="btn btn-success mt-3"
                     value="ثبت و ذخیره">
            </div>
          </form>
          <script type="text/javascript">
            function openfilemanager(opener, valueimage) {
              window.open('?mod=filemanager&action=files&ajax=true&opener=' + opener + '&valueimage=' + valueimage,
                'filemanager', 'width=800,height=600');
              return false;
            }

          </script>
          <script type="text/javascript">
            $(document).ready(function () {

              $('#title').on('input', function () {
                var page_title = $("#page_title").val();
                if (page_title.length <= 0) {
                  var getvalue = $(this).val();
                  $("#divseotitle").html(getvalue);
                }
              });

              $('#page_title').on('input', function () {
                var getvalue = $(this).val();
                if (getvalue.length > 60) {
                  getvalue = getvalue.substring(0, 60);
                  getvalue = getvalue + '...';
                }
                $("#divseotitle").html(getvalue);
              });

              $('#seo_url').on('input', function () {
                var getvalue = $(this).val();
                //$("#divseourl").html("https://benobe.ir/blog/-" + getvalue + ".html");
                $.ajax({
                  url: '?mod=blog&action=generate_url&ajax=true',
                  type: 'GET',
                  dataType: 'HTML',
                  data: 'string=' + getvalue,
                  beforeSend: function (xhr) {
                    ShowLoading('در حال ایجاد...');
                  },
                  success: function (data) {
                    HideLoading();
                    $("#divseourl").html("https://benobe.ir/blog/-" + data + ".html");

                  },
                  error: function (err) {
                    HideLoading();
                  }
                });


              });

              $('#meta_description').on('input', function () {

                var getvalue = $(this).val();
                if (getvalue.length > 160) {
                  getvalue = getvalue.substring(0, 160);
                  getvalue = getvalue + '...';
                }
                $("#divseotext").text(getvalue);
              });
            });


            $(document).ready(function () {
              var map = {};
              $('#relatednews').typeahead({
                autoSelect: false,
                source: function (keyword, process) {

                  $.ajax({
                    url: '?mod=blog&action=newslist&ajax=true',
                    type: 'GET',
                    dataType: 'JSON',
                    data: 'keyword=' + keyword,
                    success: function (data) {
                      objects = [];
                      $.each(data, function (i, item) {
                        map[item.title] = item;
                        objects.push(item.title);
                      });
                      process(objects);

                    }
                  });
                },
                matcher: function (item) {
                  if (item.toLowerCase().indexOf(this.query.trim().toLowerCase()) != -1) {
                    return true;
                  }
                },
                updater: function (item) {
                  var selectedID = map[item].id;
                  ShowLoading('صبر کنید ...');
                  $.ajax({
                    url: '?mod=blog&action=news_related_add&ajax=true',
                    type: 'GET',
                    // dataType: 'html',
                    data: 'news_id=' + selectedID,
                    success: function (data) {
                      $('#relatednews').val('');
                      if ($('#result_related').find($('#rld' + selectedID)).length) {
                        alert(map[item].title + ' قبلا انتخاب شده است.');
                      } else {
                        $('#result_related').append(data);
                      }
                      HideLoading();
                    }
                  });
                  HideLoading();
                  return item;
                }
              });
            });

            function remove_rld(rld_id) {
              $("#rld" + rld_id).fadeOut(300, function () {
                $(this).remove();
              });
            }

          </script>
        </div>

      </div>
      @endsection
