$('.pishro-nobat').click(function () {
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
