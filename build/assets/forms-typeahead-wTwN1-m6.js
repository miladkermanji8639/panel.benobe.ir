$(function () {
 var h = function (e) {
   return function (g, y) {
    var m, n;
    (m = []),
     (n = new RegExp(g, 'i')),
     $.each(e, function (k, s) {
      n.test(s) && m.push(s);
     }),
     y(m);
   };
  },
  o = [
   'آذربایجان شرقی',
   'آذربایجان غربی',
   'اردبیل',
   'اصفهان',
   'البرز',
   'ایلام',
   'بوشهر',
   'تهران',
   'چهارمحال و بختیاری',
   'خراسان جنوبی',
   'خراسان رضوی',
   'خراسان شمالی',
   'خوزستان',
   'زنجان',
   'سمنان',
   'سیستان و بلوچستان',
   'فارس',
   'قزوین',
   'قم',
   'کردستان',
   'کرمان',
   'کرمانشاه',
   'کهگیلویه و بویراحمد',
   'گلستان',
   'گیلان',
   'لرستان',
   'مازندران',
   'مرکزی',
   'هرمزگان',
   'همدان',
   'یزد',
  ];
 isRtl && $('.typeahead').attr('dir', 'rtl'),
  $('.typeahead').typeahead(
   { hint: isRtl, highlight: !0, minLength: 1 },
   { name: 'states', source: h(o) },
  );
 var i = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: o,
 });
 $('.typeahead-bloodhound').typeahead(
  { hint: isRtl, highlight: !0, minLength: 1 },
  { name: 'states', source: i },
 );
 var t = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: assetsPath + 'json/typeahead.json',
 });
 $('.typeahead-prefetch').typeahead(
  { hint: isRtl, highlight: !0, minLength: 1 },
  { name: 'states', source: t },
 );
 function d(e, a) {
  e === '' ? a(t.get('اصفهان', 'شیراز', 'تهران')) : t.search(e, a);
 }
 $('.typeahead-default-suggestions').typeahead(
  { hint: isRtl, highlight: !0, minLength: 0 },
  { name: 'states', source: d },
 );
 var r = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: assetsPath + 'json/typeahead-data-2.json',
 });
 $('.typeahead-custom-template').typeahead(null, {
  name: 'best-movies',
  display: 'value',
  source: r,
  highlight: !0,
  hint: isRtl,
  templates: {
   empty: ['<div class="empty-message p-2">', 'موردی یافت نشد', '</div>'].join(`
`),
   suggestion: function (e) {
    return (
     '<div><span class="fw-medium">' +
     e.value +
     '</span> – ' +
     e.year +
     '</div>'
    );
   },
  },
 });
 var l = [
   { team: 'پرسپولیس' },
   { team: 'استقلال' },
   { team: 'ذوب‌آهن' },
   { team: 'سپاهان' },
   { team: 'استانبول' },
   { team: 'سایپا' },
   { team: 'نفت تهران' },
   { team: 'پدیده' },
   { team: 'فولاد' },
   { team: 'تراکتور' },
   { team: 'صنعت نفت' },
   { team: 'ملوان' },
   { team: 'نساجی' },
   { team: 'گل گهر' },
   { team: 'سپیدرود رشت' },
   { team: 'پارس جنوبی جم' },
   { team: 'هلال احمر' },
   { team: 'خواهران راه آهن' },
   { team: 'خونه‌بانان' },
   { team: 'سرخابیان' },
   { team: 'بازارچه بورس' },
   { team: 'میخانه' },
   { team: 'سرپل ذهاب' },
   { team: 'فجر' },
   { team: 'شهرداری' },
   { team: 'پیکان' },
   { team: 'پارس جوان بشرویه' },
   { team: 'سرخپوشان' },
   { team: 'هفت تیر' },
  ],
  u = [
   { team: 'بارسلونا' },
   { team: 'رئال مادرید' },
   { team: 'بایرن مونیخ' },
   { team: 'منچستر یونایتد' },
   { team: 'لیورپول' },
   { team: 'پاریس سن‌ژرمن' },
   { team: 'منچستر سیتی' },
   { team: 'یوونتوس' },
   { team: 'آرسنال' },
   { team: 'چلسی' },
   { team: 'اتلتیکو مادرید' },
   { team: 'میلان' },
   { team: 'اینتر میلان' },
   { team: 'رئال سوسیداد' },
   { team: 'آجاکس' },
   { team: 'بوروسیا دورتموند' },
   { team: 'آثلتیک بیلبائو' },
   { team: 'رم' },
   { team: 'لاتسیو' },
   { team: 'اتلتیکو بیلبائو' },
   { team: 'بروسیا مونشنگلادباخ' },
   { team: 'والنسیا' },
   { team: 'وست هم' },
   { team: 'وولورهمپتون' },
   { team: 'لستر سیتی' },
   { team: 'لیستر سیتی' },
   { team: 'اورنج' },
   { team: 'شاختار دونستک' },
   { team: 'سلتا ویگو' },
   { team: 'هوفنهایم' },
   { team: 'ایورتون' },
   { team: 'نیوکاسل یونایتد' },
   { team: 'بتیس' },
   { team: 'وردر برمن' },
  ],
  p = new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
   queryTokenizer: Bloodhound.tokenizers.whitespace,
   local: l,
  }),
  c = new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
   queryTokenizer: Bloodhound.tokenizers.whitespace,
   local: u,
  });
 $('.typeahead-multi-datasets').typeahead(
  { hint: isRtl, highlight: !0, minLength: 0 },
  {
   name: 'nba-teams',
   source: p,
   display: 'team',
   templates: {
    header:
     '<h5 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2 typeahead-title">تیم‌های فوتبال ایران</h5>',
   },
  },
  {
   name: 'nhl-teams',
   source: c,
   display: 'team',
   templates: {
    header:
     '<h5 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2 typeahead-title">تیم‌های مطرح فوتبال</h5>',
   },
  },
 );
});
