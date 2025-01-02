let url = window.location.href;

if (url.includes('appointment-requests')) {
 $('.my-user-info-div').addClass('d-none');
 $('.my-nobat-div-patient').addClass('d-none');
 $('.darkhaste-moshavereh-matni').removeClass('d-none');
}
$('.my-nobat-js').click(function (e) {
 $('.d-m-matni-js').removeClass('item-click-bg');

 $('.my-nobat-div-patient').removeClass('d-none');
 $('.my-user-info-div').addClass('d-none');

 $('.nobathay-pishro').removeClass('d-none');
 $('.btn-show-more').removeClass('d-none');
 $('.my-nobat-div-patient').addClass('mystyle-clicked');
 $('.bottom-my-nobat-content').addClass('d-none');

 $('.patient-content').css({
  width: '25%',
 });

 // $(".d-m-matni-js").removeClass("item-click-bg");

 $('.my-nobat-js').addClass('item-click-bg');
 $('.my-user-info').removeClass('item-click-bg');
 $('.my-nobat-content').removeClass('d-none');

 $('.darkhaste-moshavereh-matni').addClass('d-none');
});

$('.my-user-info').click(function (e) {
 $('.patient-content').css({
  width: '25%',
 });
 $('.darkhaste-moshavereh-matni').addClass('d-none');
 $('.d-m-matni-js').removeClass('item-click-bg');

 $('.my-user-info-div').removeClass('d-none');
 $('.my-user-info').addClass('item-click-bg');
 $('.my-nobat-js').removeClass('item-click-bg');
 $('.my-nobat-content').addClass('d-none');
 $('.my-nobat-div-patient').addClass('d-none');
});
$('.d-m-matni-js').click(function (e) {
 $('.patient-content').css({
  width: '25%',
 });
 $('.darkhaste-moshavereh-matni').removeClass('d-none');
 $('.my-user-info-div').addClass('d-none');
 $('.my-user-info').removeClass('item-click-bg');
 $('.d-m-matni-js').addClass('item-click-bg');
 $('.my-nobat-js').removeClass('item-click-bg');
 $('.my-nobat-content').addClass('d-none');
 $('.my-nobat-div-patient').addClass('d-none');
});
$('.pishro-nobat').click(function () {
 $('.cancle-nobat').removeClass('my-selected');
 $('.nobathay-cancle-shodeh').addClass('d-none');
 $('.btn-show-more').removeClass('d-none');

 $('.nobathay-pishro').removeClass('d-none');
 $('.bottom-my-nobat-content').addClass('d-none');

 $('.past-nobat').removeClass('my-selected');
 $('.pishro-nobat').addClass('my-selected');
});
$('.past-nobat').click(function (e) {
 $('.btn-show-more').addClass('d-none');

 $('.nobathay-cancle-shodeh').addClass('d-none');
 $('.nobathay-pishro').addClass('d-none');
 $('.bottom-my-nobat-content').removeClass('d-none');

 $('.pishro-nobat').removeClass('my-selected');
 $('.past-nobat').addClass('my-selected');
 $('.cancle-nobat').removeClass('my-selected');
});
$('.cancle-nobat').click(function (e) {
 $('.btn-show-more').removeClass('d-none');

 $('.nobathay-pishro').addClass('d-none');
 $('.bottom-my-nobat-content').addClass('d-none');
 $('.nobathay-cancle-shodeh').removeClass('d-none');
 $('.pishro-nobat').removeClass('my-selected');
 $('.past-nobat').removeClass('my-selected');
 $('.cancle-nobat').addClass('my-selected');
});
