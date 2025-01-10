$(document).ready(function () {
  // ابتدا همه دراپ‌تاگل‌ها را مخفی کن
  $('.drop-toggle-styles').hide();

  // باز کردن اولین دراپ‌تاگل به صورت خودکار
  const $firstCard = $('.option-card-box-shodow').first(); // انتخاب اولین کارت
  const $firstToggle = $firstCard.find('.drop-toggle-styles');
  const $firstIcon = $firstCard.find('svg.chevron_bottom__M8fF9');
  $firstToggle.find('.loading-spinner').removeClass('d-none');
  $firstToggle.slideDown(300, function () {
    $firstToggle.find('.loading-spinner').addClass('d-none');
  });
  $firstIcon.css({
    transform: 'rotate(-90deg)',
    transition: 'transform 0.3s',
  });

  // هنگامی که بر روی عنوان کلیک می‌شود
  $('.d-flex.justify-content-between.align-items-center').on('click', function (event) {
  /*   event.stopPropagation(); */ // جلوگیری از انتشار رویداد به والدین
    const $currentCard = $(this).closest('.option-card-box-shodow').find('.drop-toggle-styles');
    const $icon = $(this).find('svg.chevron_bottom__M8fF9');

    // اگر دراپ‌تاگل فعلی باز نیست، آن را باز کن
    if ($currentCard.is(':hidden')) {
      $currentCard.find('.loading-spinner').removeClass('d-none');
      $currentCard.slideDown(500, function () {
        $currentCard.find('.loading-spinner').addClass('d-none');
      });
      $icon.css({
        transform: 'rotate(-90deg)',
        transition: 'transform 0.3s',
      });
    } else {
      // در غیر این صورت، آن را ببند
      $currentCard.slideUp(500);
      $icon.css({ transform: 'rotate(90deg)', transition: 'transform 0.3s' });
    }
  });

  // افزودن event.stopPropagation() به تاگل "تماس امن"
  $('.password_toggle__AXK9v').on('click', function (event) {
    event.stopPropagation(); // جلوگیری از انتشار رویداد به والدین
  });
});