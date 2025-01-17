$(function () {
 var r = $('.basic-ratings'),
  n = $('.custom-svg-ratings'),
  s = $('.multi-color-ratings'),
  l = $('.half-star-ratings'),
  o = $('.full-star-ratings'),
  e = $('.read-only-ratings'),
  g = $('.onset-event-ratings'),
  f = $('.onChange-event-ratings'),
  c = $('.methods-ratings'),
  p = $('.btn-initialize'),
  h = $('.btn-destroy'),
  d = $('.btn-get-rating'),
  R = $('.btn-set-rating');
 if (
  (r && r.rateYo({ rating: 3.6, rtl: isRtl, spacing: '8px' }),
  n &&
   n.rateYo({
    rating: 3.2,
    starSvg:
     "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'-></path>",
    rtl: isRtl,
    spacing: '8px',
   }),
  s &&
   s.rateYo({
    rtl: isRtl,
    spacing: '8px',
    multiColor: { startColor: '#fffca0', endColor: '#ffd950' },
   }),
  l && l.rateYo({ rtl: isRtl, spacing: '8px', rating: 2 }),
  o && o.rateYo({ rtl: isRtl, spacing: '8px', rating: 2 }),
  e && e.rateYo({ rating: 2, rtl: isRtl, spacing: '8px' }),
  g &&
   g.rateYo({ rtl: isRtl, spacing: '8px' }).on('rateyo.set', function (i, a) {
    alert('امتیاز : ' + a.rating + '!');
   }),
  f &&
   f
    .rateYo({ rtl: isRtl, spacing: '8px' })
    .on('rateyo.change', function (i, a) {
     var u = a.rating;
     $(this).parent().find('.counter').text(u);
    }),
  c)
 ) {
  var t = c.rateYo({ rtl: isRtl, spacing: '8px' });
  p &&
   p.on('click', function () {
    t.rateYo({ rtl: isRtl, spacing: '8px' });
   }),
   h &&
    h.on('click', function () {
     t.hasClass('jq-ry-container')
      ? t.rateYo('destroy')
      : window.alert('لطفا ابتدا فراخوانی کنید');
    }),
   d &&
    d.on('click', function () {
     if (t.hasClass('jq-ry-container')) {
      var i = t.rateYo('rating');
      window.alert('امتیاز فعلی ' + i);
     } else window.alert('لطفا ابتدا فراخوانی کنید');
    }),
   R &&
    R.on('click', function () {
     t.hasClass('jq-ry-container')
      ? t.rateYo('rating', 1)
      : window.alert('لطفا ابتدا فراخوانی کنید');
    });
 }
});
