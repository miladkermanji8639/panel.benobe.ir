@extends('admin.content.layouts/layoutMaster')

<blade
       section|(%26%2339%3Btitle%26%2339%3B%2C%20%26%2339%3B%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA%20%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1%20%20%20%26%2339%3B)%0D />

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection
<link href="{{ asset('admin-assets/css/file-manager.css') }}" rel="stylesheet">
  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection

      @section('content')
      <div id="Wrapper clrfix">
        <div class="window clrfix">
          <span class="head">File Manager</span>
          <div class="body clrfix">

            <div class="col-md-12">
              <form method="post"
                    action=""
                    enctype="multipart/form-data">
                <input type="hidden"
                       name="mod"
                       value="filemanager">
                <input type="hidden"
                       name="action"
                       value="files">
                <input type="hidden"
                       name="subaction"
                       value="creatfolder">
                <div class="form-group col-md-5">
                  <label>Create Folder:</label>
                  <div class="col-md-12 input-group"><input type="text"
                           style="width: 100%;"
                           name="namefolder"
                           class="form-control"><span class="input-group-btn"><button id="submit-btn"
                              class="btn btn-default"
                              type="submit">Add</button></span></div>
                </div>
              </form>
              <div class="clearfix"></div>
              <div class="form-group col-md-5">
                <label>Upload File:</label>
                <input type="file"
                       class="filestyle"
                       data-placeholder="Select File From System"
                       id="input_files"
                       name="file"
                       tabindex="-1"
                       style="position: absolute; clip: rect(0px, 0px, 0px, 0px);">
                <div class="bootstrap-filestyle input-group"><input type="text"
                         class="form-control "
                         placeholder="Select File From System"
                         disabled=""> <span class="group-span-filestyle input-group-btn"
                        tabindex="0"><label for="input_files"
                           class="btn btn-default "><span
                            class="icon-span-filestyle glyphicon glyphicon-folder-open icon-folder-open"></span> <span
                            class="buttonText">Select File</span></label></span></div>
                <div class="clearfix"></div>
                <div class="progress none d-none"
                     id="filesdiv">
                  <div class="progress-bar progress-bar-striped progress-bar-success"
                       style="width: 0%;"></div>
                </div>
              </div>

            </div>

            <div class="col-md-12 clrfix"
                 style="padding: 30px;">
              <div class="gallery"
                   id="path_2022-02"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2022-02"><i
                     class="fa fa-folder"></i>
                  <div class="name">2022-02</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2022-02"
                   data-path="/2022-02"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_2024-02"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2024-02"><i
                     class="fa fa-folder"></i>
                  <div class="name">2024-02</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2024-02"
                   data-path="/2024-02"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_2022-01"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2022-01"><i
                     class="fa fa-folder"></i>
                  <div class="name">2022-01</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2022-01"
                   data-path="/2022-01"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_shares"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/shares"><i
                     class="fa fa-folder"></i>
                  <div class="name">shares</div>
                </a><a href="javascript:void(0)"
                   data-pathname="shares"
                   data-path="/shares"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_2021-12"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2021-12"><i
                     class="fa fa-folder"></i>
                  <div class="name">2021-12</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2021-12"
                   data-path="/2021-12"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_2022-08"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2022-08"><i
                     class="fa fa-folder"></i>
                  <div class="name">2022-08</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2022-08"
                   data-path="/2022-08"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_2021-10"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/2021-10"><i
                     class="fa fa-folder"></i>
                  <div class="name">2021-10</div>
                </a><a href="javascript:void(0)"
                   data-pathname="2021-10"
                   data-path="/2021-10"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="path_1"><a href="?mod=filemanager&amp;action=files&amp;ajax=true&amp;dir=/1"><i
                     class="fa fa-folder"></i>
                  <div class="name">1</div>
                </a><a href="javascript:void(0)"
                   data-pathname="1"
                   data-path="/1"
                   class="removedirectory"><i class="fa fa-remove"></i></a></div>
              <div class="gallery"
                   id="file_dktr-yasyn-ezyzy-banhpng">
                <div class="captionname">dktr-yasyn-ezyzy-banh.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-yasyn-ezyzy-banh.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-yasyn-ezyzy-banh.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-yasyn-ezyzy-banhpng"
                   data-filepath="/dktr-yasyn-ezyzy-banh.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymarstan-arya-snndjjpg">
                <div class="captionname">bymarstan-arya-snndj.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymarstan-arya-snndj.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymarstan-arya-snndj.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymarstan-arya-snndjjpg"
                   data-filepath="/bymarstan-arya-snndj.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-bymarstan-slah-aldyn-ayvby-banhjpg">
                <div class="captionname">nvbt-dhy-bymarstan-slah-aldyn-ayvby-banh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-bymarstan-slah-aldyn-ayvby-banh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-bymarstan-slah-aldyn-ayvby-banh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-bymarstan-slah-aldyn-ayvby-banhjpg"
                   data-filepath="/nvbt-dhy-bymarstan-slah-aldyn-ayvby-banh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_untitled-designgjpg">
                <div class="captionname">untitled-designg.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/untitled-designg.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/untitled-designg.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="untitled-designgjpg"
                   data-filepath="/untitled-designg.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-mesvmh-rzayypng">
                <div class="captionname">dktr-mesvmh-rzayy.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-mesvmh-rzayy.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-mesvmh-rzayy.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-mesvmh-rzayypng"
                   data-filepath="/dktr-mesvmh-rzayy.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerdrhajazipng">
                <div class="captionname">banerdrhajazi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerdrhajazi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerdrhajazi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerdrhajazipng"
                   data-filepath="/banerdrhajazi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_sbt-nam-vaksn-krvnajpg">
                <div class="captionname">sbt-nam-vaksn-krvna.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/sbt-nam-vaksn-krvna.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/sbt-nam-vaksn-krvna.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="sbt-nam-vaksn-krvnajpg"
                   data-filepath="/sbt-nam-vaksn-krvna.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_untitledd-2jpg">
                <div class="captionname">untitledd-2.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/untitledd-2.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/untitledd-2.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="untitledd-2jpg"
                   data-filepath="/untitledd-2.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_23863jpg">
                <div class="captionname">23863.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/23863.jpg&quot;);"><img src="https://benobe.ir/uploads/files/23863.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="23863jpg"
                   data-filepath="/23863.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1621201396_dktr-jmal-aldyn-glh-darypng">
                <div class="captionname">1621201396_dktr-jmal-aldyn-glh-dary.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1621201396_dktr-jmal-aldyn-glh-dary.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/1621201396_dktr-jmal-aldyn-glh-dary.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1621201396_dktr-jmal-aldyn-glh-darypng"
                   data-filepath="/1621201396_dktr-jmal-aldyn-glh-dary.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_comparison-portraitjpg">
                <div class="captionname">comparison-portrait.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/comparison-portrait.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/comparison-portrait.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="comparison-portraitjpg"
                   data-filepath="/comparison-portrait.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1793219jpg">
                <div class="captionname">1793219.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1793219.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/1793219.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1793219jpg"
                   data-filepath="/1793219.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_rvsh-hay-amvzsh-zban-bh-kvdkanjpg">
                <div class="captionname">rvsh-hay-amvzsh-zban-bh-kvdkan.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/rvsh-hay-amvzsh-zban-bh-kvdkan.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/rvsh-hay-amvzsh-zban-bh-kvdkan.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="rvsh-hay-amvzsh-zban-bh-kvdkanjpg"
                   data-filepath="/rvsh-hay-amvzsh-zban-bh-kvdkan.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_pykr-trashypng">
                <div class="captionname">pykr-trashy.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/pykr-trashy.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/pykr-trashy.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="pykr-trashypng"
                   data-filepath="/pykr-trashy.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_hmlh-ghlbyjpg">
                <div class="captionname">hmlh-ghlby.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/hmlh-ghlby.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/hmlh-ghlby.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="hmlh-ghlbyjpg"
                   data-filepath="/hmlh-ghlby.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerrahmanpanahpng">
                <div class="captionname">banerrahmanpanah.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerrahmanpanah.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerrahmanpanah.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerrahmanpanahpng"
                   data-filepath="/banerrahmanpanah.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_online-consultationjpg">
                <div class="captionname">online-consultation.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/online-consultation.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/online-consultation.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="online-consultationjpg"
                   data-filepath="/online-consultation.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-mnsvr-mradyjpg">
                <div class="captionname">dktr-mnsvr-mrady.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-mnsvr-mrady.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-mnsvr-mrady.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-mnsvr-mradyjpg"
                   data-filepath="/dktr-mnsvr-mrady.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-frybrz-sngyn-abadyjpg">
                <div class="captionname">dktr-frybrz-sngyn-abady.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-frybrz-sngyn-abady.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-frybrz-sngyn-abady.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-frybrz-sngyn-abadyjpg"
                   data-filepath="/dktr-frybrz-sngyn-abady.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_mshavrh-tlfnyjpg">
                <div class="captionname">mshavrh-tlfny.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/mshavrh-tlfny.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/mshavrh-tlfny.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="mshavrh-tlfnyjpg"
                   data-filepath="/mshavrh-tlfny.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_lvgv-bh-nvbhpng">
                <div class="captionname">lvgv-bh-nvbh.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/lvgv-bh-nvbh.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/lvgv-bh-nvbh.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="lvgv-bh-nvbhpng"
                   data-filepath="/lvgv-bh-nvbh.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banersharifipng">
                <div class="captionname">banersharifi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banersharifi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banersharifi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banersharifipng"
                   data-filepath="/banersharifi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_clinicjpg">
                <div class="captionname">clinic.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/clinic.jpg&quot;);"><img src="https://benobe.ir/uploads/files/clinic.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="clinicjpg"
                   data-filepath="/clinic.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_parkjpg">
                <div class="captionname">park.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/park.jpg&quot;);"><img src="https://benobe.ir/uploads/files/park.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="parkjpg"
                   data-filepath="/park.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_benobe111jpg">
                <div class="captionname">benobe111.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/benobe111.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/benobe111.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="benobe111jpg"
                   data-filepath="/benobe111.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_schedule01jpg">
                <div class="captionname">schedule01.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/schedule01.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/schedule01.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="schedule01jpg"
                   data-filepath="/schedule01.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bh-nvbh-1jpg">
                <div class="captionname">bh-nvbh-1.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bh-nvbh-1.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bh-nvbh-1.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bh-nvbh-1jpg"
                   data-filepath="/bh-nvbh-1.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_picture2-1jpg">
                <div class="captionname">picture2-1.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/picture2-1.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/picture2-1.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="picture2-1jpg"
                   data-filepath="/picture2-1.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_mtkhss-mghz-v-aesab-sghzpng">
                <div class="captionname">mtkhss-mghz-v-aesab-sghz.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/mtkhss-mghz-v-aesab-sghz.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/mtkhss-mghz-v-aesab-sghz.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="mtkhss-mghz-v-aesab-sghzpng"
                   data-filepath="/mtkhss-mghz-v-aesab-sghz.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bmarstan-ghds-snndjjpg">
                <div class="captionname">bmarstan-ghds-snndj.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bmarstan-ghds-snndj.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bmarstan-ghds-snndj.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bmarstan-ghds-snndjjpg"
                   data-filepath="/bmarstan-ghds-snndj.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bmarstan-amam-khmyny-dvandrhpng">
                <div class="captionname">bmarstan-amam-khmyny-dvandrh.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bmarstan-amam-khmyny-dvandrh.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/bmarstan-amam-khmyny-dvandrh.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bmarstan-amam-khmyny-dvandrhpng"
                   data-filepath="/bmarstan-amam-khmyny-dvandrh.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-bymarstan-syna-kamyaranpng">
                <div class="captionname">nvbt-dhy-bymarstan-syna-kamyaran.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-bymarstan-syna-kamyaran.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-bymarstan-syna-kamyaran.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-bymarstan-syna-kamyaranpng"
                   data-filepath="/nvbt-dhy-bymarstan-syna-kamyaran.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_untitledpng">
                <div class="captionname">untitled.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/untitled.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/untitled.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="untitledpng"
                   data-filepath="/untitled.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_paraclinicjpg">
                <div class="captionname">paraclinic.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/paraclinic.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/paraclinic.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="paraclinicjpg"
                   data-filepath="/paraclinic.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_tasyrat-dyabtjpg">
                <div class="captionname">tasyrat-dyabt.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/tasyrat-dyabt.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/tasyrat-dyabt.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="tasyrat-dyabtjpg"
                   data-filepath="/tasyrat-dyabt.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-ayntrnyy-770x435jpg">
                <div class="captionname">nvbt-dhy-ayntrnyy-770x435.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-ayntrnyy-770x435.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-ayntrnyy-770x435.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-ayntrnyy-770x435jpg"
                   data-filepath="/nvbt-dhy-ayntrnyy-770x435.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_emr-tvlanyjpg">
                <div class="captionname">emr-tvlany.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/emr-tvlany.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/emr-tvlany.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="emr-tvlanyjpg"
                   data-filepath="/emr-tvlany.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymarstan-shhyd-bhshty-ghrvhjpg">
                <div class="captionname">bymarstan-shhyd-bhshty-ghrvh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymarstan-shhyd-bhshty-ghrvh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymarstan-shhyd-bhshty-ghrvh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymarstan-shhyd-bhshty-ghrvhjpg"
                   data-filepath="/bymarstan-shhyd-bhshty-ghrvh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_imagespng">
                <div class="captionname">images.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/images.png&quot;);"><img src="https://benobe.ir/uploads/files/images.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="imagespng"
                   data-filepath="/images.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1591908766_2020-06-12-012128png">
                <div class="captionname">1591908766_2020-06-12-01.21.28.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1591908766_2020-06-12-01.21.28.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/1591908766_2020-06-12-01.21.28.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1591908766_2020-06-12-012128png"
                   data-filepath="/1591908766_2020-06-12-01.21.28.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_556png">
                <div class="captionname">556.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/556.png&quot;);"><img src="https://benobe.ir/uploads/files/556.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="556png"
                   data-filepath="/556.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-nrgs-lmsh-chypng">
                <div class="captionname">dktr-nrgs-lmsh-chy.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-nrgs-lmsh-chy.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-nrgs-lmsh-chy.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-nrgs-lmsh-chypng"
                   data-filepath="/dktr-nrgs-lmsh-chy.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nsrpng">
                <div class="captionname">nsr.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nsr.png&quot;);"><img src="https://benobe.ir/uploads/files/nsr.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nsrpng"
                   data-filepath="/nsr.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_ENAMADpng">
                <div class="captionname">ENAMAD.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/ENAMAD.png&quot;);"><img src="https://benobe.ir/uploads/files/ENAMAD.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="ENAMADpng"
                   data-filepath="/ENAMAD.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bh-nvbhjpg">
                <div class="captionname">bh-nvbh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bh-nvbh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bh-nvbh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bh-nvbhjpg"
                   data-filepath="/bh-nvbh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_drman-krvna-dr-khanhjpg">
                <div class="captionname">drman-krvna-dr-khanh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/drman-krvna-dr-khanh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/drman-krvna-dr-khanh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="drman-krvna-dr-khanhjpg"
                   data-filepath="/drman-krvna-dr-khanh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_492696_112jpg">
                <div class="captionname">492696_112.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/492696_112.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/492696_112.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="492696_112jpg"
                   data-filepath="/492696_112.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymarstan-kvsr-snndjjpg">
                <div class="captionname">bymarstan-kvsr-snndj.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymarstan-kvsr-snndj.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymarstan-kvsr-snndj.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymarstan-kvsr-snndjjpg"
                   data-filepath="/bymarstan-kvsr-snndj.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-shahrkh-abn-rsvlypng">
                <div class="captionname">dktr-shahrkh-abn-rsvly.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-shahrkh-abn-rsvly.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-shahrkh-abn-rsvly.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-shahrkh-abn-rsvlypng"
                   data-filepath="/dktr-shahrkh-abn-rsvly.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerebrahimipng">
                <div class="captionname">banerebrahimi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerebrahimi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerebrahimi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerebrahimipng"
                   data-filepath="/banerebrahimi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-dktr-amyd-krmy-khmanjpg">
                <div class="captionname">nvbt-dhy-dktr-amyd-krmy-khman.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-dktr-amyd-krmy-khman.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-dktr-amyd-krmy-khman.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-dktr-amyd-krmy-khmanjpg"
                   data-filepath="/nvbt-dhy-dktr-amyd-krmy-khman.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_sv-sayt-pzshkypng">
                <div class="captionname">sv-sayt-pzshky.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/sv-sayt-pzshky.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/sv-sayt-pzshky.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="sv-sayt-pzshkypng"
                   data-filepath="/sv-sayt-pzshky.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-earf-rjbyjpg">
                <div class="captionname">dktr-earf-rjby.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-earf-rjby.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-earf-rjby.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-earf-rjbyjpg"
                   data-filepath="/dktr-earf-rjby.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_happinessjpg">
                <div class="captionname">happiness.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/happiness.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/happiness.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="happinessjpg"
                   data-filepath="/happiness.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1609669185_dktr-amyr-zareyjpg">
                <div class="captionname">1609669185_dktr-amyr-zarey.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1609669185_dktr-amyr-zarey.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/1609669185_dktr-amyr-zarey.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1609669185_dktr-amyr-zareyjpg"
                   data-filepath="/1609669185_dktr-amyr-zarey.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgyjpg">
                <div class="captionname">khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgy.jpg</div><a
                   href="javascript:void(0)"
                   onclick="selectimage(&quot;/khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgy.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgy.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgyjpg"
                   data-filepath="/khanvadh-ay-kh-drd-ra-hs-nmy-knnd-hty-shkstgy.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerdrrahimipng">
                <div class="captionname">banerdrrahimi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerdrrahimi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerdrrahimi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerdrrahimipng"
                   data-filepath="/banerdrrahimi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_hhs1377jpg">
                <div class="captionname">hhs1377.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/hhs1377.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/hhs1377.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="hhs1377jpg"
                   data-filepath="/hhs1377.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_n00256140-bjpg">
                <div class="captionname">n00256140-b.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/n00256140-b.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/n00256140-b.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="n00256140-bjpg"
                   data-filepath="/n00256140-b.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_5522771jpg">
                <div class="captionname">5522771.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/5522771.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/5522771.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="5522771jpg"
                   data-filepath="/5522771.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_57427png">
                <div class="captionname">57427.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/57427.png&quot;);"><img src="https://benobe.ir/uploads/files/57427.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="57427png"
                   data-filepath="/57427.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_matabjpg">
                <div class="captionname">matab.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/matab.jpg&quot;);"><img src="https://benobe.ir/uploads/files/matab.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="matabjpg"
                   data-filepath="/matab.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_b945658d-aba1-42ec-b609-1e72be87056cjpg">
                <div class="captionname">b945658d-aba1-42ec-b609-1e72be87056c.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/b945658d-aba1-42ec-b609-1e72be87056c.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/b945658d-aba1-42ec-b609-1e72be87056c.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="b945658d-aba1-42ec-b609-1e72be87056cjpg"
                   data-filepath="/b945658d-aba1-42ec-b609-1e72be87056c.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_khvabydn-ba-arayshjpg">
                <div class="captionname">khvabydn-ba-araysh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/khvabydn-ba-araysh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/khvabydn-ba-araysh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="khvabydn-ba-arayshjpg"
                   data-filepath="/khvabydn-ba-araysh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_8ab8cc71-7468-4566-ab91-45bfff3d1765jpg">
                <div class="captionname">8ab8cc71-7468-4566-ab91-45bfff3d1765.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/8ab8cc71-7468-4566-ab91-45bfff3d1765.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/8ab8cc71-7468-4566-ab91-45bfff3d1765.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="8ab8cc71-7468-4566-ab91-45bfff3d1765jpg"
                   data-filepath="/8ab8cc71-7468-4566-ab91-45bfff3d1765.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_saderatpng">
                <div class="captionname">saderat.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/saderat.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/saderat.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="saderatpng"
                   data-filepath="/saderat.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_drmehranpng">
                <div class="captionname">drmehran.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/drmehran.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/drmehran.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="drmehranpng"
                   data-filepath="/drmehran.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dr-foad-rahimipng">
                <div class="captionname">dr-foad-rahimi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dr-foad-rahimi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dr-foad-rahimi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dr-foad-rahimipng"
                   data-filepath="/dr-foad-rahimi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_benobeir_jpg">
                <div class="captionname">benobe.ir_.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/benobe.ir_.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/benobe.ir_.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="benobeir_jpg"
                   data-filepath="/benobe.ir_.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerdrsadpng">
                <div class="captionname">banerdrsad.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerdrsad.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerdrsad.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerdrsadpng"
                   data-filepath="/banerdrsad.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_benobeir-janinjpg">
                <div class="captionname">benobe.ir-janin.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/benobe.ir-janin.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/benobe.ir-janin.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="benobeir-janinjpg"
                   data-filepath="/benobe.ir-janin.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_astrs-v-aztzab-krvnajpg">
                <div class="captionname">astrs-v-aztzab-krvna.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/astrs-v-aztzab-krvna.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/astrs-v-aztzab-krvna.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="astrs-v-aztzab-krvnajpg"
                   data-filepath="/astrs-v-aztzab-krvna.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_new-project-4png">
                <div class="captionname">new-project-4.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/new-project-4.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/new-project-4.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="new-project-4png"
                   data-filepath="/new-project-4.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_benobejpg">
                <div class="captionname">benobe.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/benobe.jpg&quot;);"><img src="https://benobe.ir/uploads/files/benobe.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="benobejpg"
                   data-filepath="/benobe.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-emad-fkhrvyanjpg">
                <div class="captionname">dktr-emad-fkhrvyan.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-emad-fkhrvyan.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-emad-fkhrvyan.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-emad-fkhrvyanjpg"
                   data-filepath="/dktr-emad-fkhrvyan.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_pic1jpg">
                <div class="captionname">pic1.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/pic1.jpg&quot;);"><img src="https://benobe.ir/uploads/files/pic1.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="pic1jpg"
                   data-filepath="/pic1.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_prooshejpg">
                <div class="captionname">prooshe.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/prooshe.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/prooshe.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="prooshejpg"
                   data-filepath="/prooshe.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-elyrza-shfyeypng">
                <div class="captionname">dktr-elyrza-shfyey.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-elyrza-shfyey.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-elyrza-shfyey.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-elyrza-shfyeypng"
                   data-filepath="/dktr-elyrza-shfyey.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-ebdalrhmn-slym-pvrjpg">
                <div class="captionname">dktr-ebdalrhmn-slym-pvr.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-ebdalrhmn-slym-pvr.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-ebdalrhmn-slym-pvr.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-ebdalrhmn-slym-pvrjpg"
                   data-filepath="/dktr-ebdalrhmn-slym-pvr.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1786238jpg">
                <div class="captionname">1786238.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1786238.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/1786238.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1786238jpg"
                   data-filepath="/1786238.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078jpg">
                <div class="captionname">773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078.jpg</div><a
                   href="javascript:void(0)"
                   onclick="selectimage(&quot;/773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078jpg"
                   data-filepath="/773x435_cmsv2_963d68b8-7f00-5c52-b088-d2abb35a9a25-6423078.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1579030991_zandipng">
                <div class="captionname">1579030991_zandi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1579030991_zandi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/1579030991_zandi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1579030991_zandipng"
                   data-filepath="/1579030991_zandi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_contact-us-2jpg">
                <div class="captionname">contact-us-2.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/contact-us-2.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/contact-us-2.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="contact-us-2jpg"
                   data-filepath="/contact-us-2.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymary-am-aspng">
                <div class="captionname">bymary-am-as.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymary-am-as.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymary-am-as.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymary-am-aspng"
                   data-filepath="/bymary-am-as.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_blvgh-jnsy-dr-dkhtran-_-300-dr-300jpg">
                <div class="captionname">blvgh-jnsy-dr-dkhtran-_-300-dr-300.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/blvgh-jnsy-dr-dkhtran-_-300-dr-300.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/blvgh-jnsy-dr-dkhtran-_-300-dr-300.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="blvgh-jnsy-dr-dkhtran-_-300-dr-300jpg"
                   data-filepath="/blvgh-jnsy-dr-dkhtran-_-300-dr-300.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerelyasipng">
                <div class="captionname">banerelyasi.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerelyasi.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerelyasi.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerelyasipng"
                   data-filepath="/banerelyasi.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_aptvmtryst-nmvnh-snndj-sal-99jpg">
                <div class="captionname">aptvmtryst-nmvnh-snndj-sal-99.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/aptvmtryst-nmvnh-snndj-sal-99.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/aptvmtryst-nmvnh-snndj-sal-99.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="aptvmtryst-nmvnh-snndj-sal-99jpg"
                   data-filepath="/aptvmtryst-nmvnh-snndj-sal-99.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_1609320256_dktr-mhmd-ghadrypng">
                <div class="captionname">1609320256_dktr-mhmd-ghadry.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/1609320256_dktr-mhmd-ghadry.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/1609320256_dktr-mhmd-ghadry.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="1609320256_dktr-mhmd-ghadrypng"
                   data-filepath="/1609320256_dktr-mhmd-ghadry.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-bymarstan-shhyd-chmran-srvabadjpg">
                <div class="captionname">nvbt-dhy-bymarstan-shhyd-chmran-srvabad.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-bymarstan-shhyd-chmran-srvabad.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-bymarstan-shhyd-chmran-srvabad.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-bymarstan-shhyd-chmran-srvabadjpg"
                   data-filepath="/nvbt-dhy-bymarstan-shhyd-chmran-srvabad.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_samanh-nvbt-dhy-bh-nvbhjpg">
                <div class="captionname">samanh-nvbt-dhy-bh-nvbh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/samanh-nvbt-dhy-bh-nvbh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/samanh-nvbt-dhy-bh-nvbh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="samanh-nvbt-dhy-bh-nvbhjpg"
                   data-filepath="/samanh-nvbt-dhy-bh-nvbh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymarstan-tvhyd-snndjpng">
                <div class="captionname">bymarstan-tvhyd-snndj.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymarstan-tvhyd-snndj.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymarstan-tvhyd-snndj.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymarstan-tvhyd-snndjpng"
                   data-filepath="/bymarstan-tvhyd-snndj.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_banerzaheryanipng">
                <div class="captionname">banerzaheryani.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/banerzaheryani.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/banerzaheryani.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="banerzaheryanipng"
                   data-filepath="/banerzaheryani.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_marivanpng">
                <div class="captionname">marivan.png</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/marivan.png&quot;);"><img
                       src="https://benobe.ir/uploads/files/marivan.png"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="marivanpng"
                   data-filepath="/marivan.png"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_krvna-snndjjpg">
                <div class="captionname">krvna-snndj.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/krvna-snndj.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/krvna-snndj.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="krvna-snndjjpg"
                   data-filepath="/krvna-snndj.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bmarstan-amam-hsn-e-bjarjpg">
                <div class="captionname">bmarstan-amam-hsn-e-bjar.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bmarstan-amam-hsn-e-bjar.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bmarstan-amam-hsn-e-bjar.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bmarstan-amam-hsn-e-bjarjpg"
                   data-filepath="/bmarstan-amam-hsn-e-bjar.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_dktr-mhryar-khadmjpg">
                <div class="captionname">dktr-mhryar-khadm.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/dktr-mhryar-khadm.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/dktr-mhryar-khadm.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="dktr-mhryar-khadmjpg"
                   data-filepath="/dktr-mhryar-khadm.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_slidetestjpg">
                <div class="captionname">slidetest.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/slidetest.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/slidetest.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="slidetestjpg"
                   data-filepath="/slidetest.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_untitled-4zjpg">
                <div class="captionname">untitled-4z.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/untitled-4z.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/untitled-4z.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="untitled-4zjpg"
                   data-filepath="/untitled-4z.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_emljrahyaslyvmedhjpg">
                <div class="captionname">emljrahyaslyvmedh.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/emljrahyaslyvmedh.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/emljrahyaslyvmedh.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="emljrahyaslyvmedhjpg"
                   data-filepath="/emljrahyaslyvmedh.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_234_2jpg">
                <div class="captionname">234_2.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/234_2.jpg&quot;);"><img src="https://benobe.ir/uploads/files/234_2.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="234_2jpg"
                   data-filepath="/234_2.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_nvbt-dhy-klynyk-vyzhh-snndjjpg">
                <div class="captionname">nvbt-dhy-klynyk-vyzhh-snndj.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/nvbt-dhy-klynyk-vyzhh-snndj.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/nvbt-dhy-klynyk-vyzhh-snndj.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="nvbt-dhy-klynyk-vyzhh-snndjjpg"
                   data-filepath="/nvbt-dhy-klynyk-vyzhh-snndj.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_krvnajpg">
                <div class="captionname">krvna.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/krvna.jpg&quot;);"><img src="https://benobe.ir/uploads/files/krvna.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="krvnajpg"
                   data-filepath="/krvna.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_980jpg">
                <div class="captionname">980.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/980.jpg&quot;);"><img src="https://benobe.ir/uploads/files/980.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="980jpg"
                   data-filepath="/980.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_bymarstan-fjr-mryvanjpg">
                <div class="captionname">bymarstan-fjr-mryvan.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/bymarstan-fjr-mryvan.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/bymarstan-fjr-mryvan.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="bymarstan-fjr-mryvanjpg"
                   data-filepath="/bymarstan-fjr-mryvan.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div class="gallery"
                   id="file_botox-injection-points-shakhesjpg">
                <div class="captionname">botox-injection-points-shakhes.jpg</div><a href="javascript:void(0)"
                   onclick="selectimage(&quot;/botox-injection-points-shakhes.jpg&quot;);"><img
                       src="https://benobe.ir/uploads/files/botox-injection-points-shakhes.jpg"
                       class="img-thumbnail"></a><a href="javascript:void(0)"
                   data-filename="botox-injection-points-shakhesjpg"
                   data-filepath="/botox-injection-points-shakhes.jpg"
                   class="removefile"><i class="fa fa-remove"></i></a>
              </div>
              <div id="files_previews"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- / Content -->

      <!-- Footer -->
      <!-- Footer-->

      <!--/ Footer-->
      <!-- / Footer -->
      <div class="content-backdrop fade"></div>
      </div>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="theme/np_admin/nopardaz/js/jquery.form.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="theme/np_admin/nopardaz/dist/js/bootstrap.min.js"></script>
    <script src="theme/np_admin/nopardaz/js/bootstrap-filestyle.min.js?v=1"></script>
    <script>
        $(document).ready(function () {
            $(".filestyle").filestyle({placeholder: "No file", buttonText: "Select File", 'buttonName' : 'btn-default'});

            $(".body").on("click", "a.removedirectory", function (e) {
                var path = $(this).data("path");
                var pathname = $(this).data("pathname");
                if (confirm()){

                    $.ajax({
                        url     : "?mod=filemanager&action=removedir&ajax=true",
                        data    : {path: path},
                        type    : "POST",
                        success : function(result){
                           $("#path_" + pathname).fadeOut("fast");
                           alert(result);
                        }
                    });
                }
            });

            $(".body").on("click", "a.removefile", function (e) {
                var filepath = $(this).data("filepath");
                var filename = $(this).data("filename");
                if (confirm("Are you sure to delete this file?  "+ filename +" ")){
                    $.ajax({
                        url     : "?mod=filemanager&action=removefile&ajax=true",
                        data    : {filepath: filepath},
                        type    : "POST",
                        success : function(result){
                           $("#file_" + filename).fadeOut("fast");
                           alert(result);
                        }
                    });
                }
            });


            $('#input_files').on('change',function(e){
                var fileData = new FormData();
                fileData.append( 'file', $('#input_files')[0].files[0] );
                fileData.append( 'dir', "/home/dlqkqdcq/public_html/uploads/files/");
                $('.progress').show();
                $.ajax({
                    type: 'POST',
                    url: '?mod=filemanager&action=upload&ajax=true',
                    data:  fileData,
                    contentType: false,
                    cache: false,
                    processData:false,
                    xhr: function() {
                        var xhr = $.ajaxSettings.xhr();
                        if (xhr.upload) {
                            xhr.upload.addEventListener('progress', function(evt) {
                                var percent = (evt.loaded / evt.total) * 100;
                                $('#filesdiv').find('.progress-bar').width(percent + '%');
                            }, false);
                        }
                        return xhr;
                    },
                    success: function(data){
                        $('#files_previews').append(data);
                        setTimeout(function() {
                            $('.progress').hide();
                        },500);

                    },
                    error: function(data){
                        alert('Error! unable to upload');
                    }
                });
                e.preventDefault();
            });
        });
        function selectimage(img){
            window.opener.document.getElementById('').value = img;
            window.close();
        }

    </script>
      @endsection
