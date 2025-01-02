/**
 * Typeahead (jquery)
 */

'use strict';

$(function () {
 // String Matcher function
 var substringMatcher = function (strs) {
  return function findMatches(q, cb) {
   var matches, substrRegex;
   matches = [];
   substrRegex = new RegExp(q, 'i');
   $.each(strs, function (i, str) {
    if (substrRegex.test(str)) {
     matches.push(str);
    }
   });

   cb(matches);
  };
 };
 var states = [
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

 if (isRtl) {
  $('.typeahead').attr('dir', 'rtl');
 }

 // Basic
 // --------------------------------------------------------------------
 $('.typeahead').typeahead(
  {
   hint: isRtl,
   highlight: true,
   minLength: 1,
  },
  {
   name: 'states',
   source: substringMatcher(states),
  },
 );

 var bloodhoundBasicExample = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: states,
 });

 // Bloodhound Example
 // --------------------------------------------------------------------
 $('.typeahead-bloodhound').typeahead(
  {
   hint: isRtl,
   highlight: true,
   minLength: 1,
  },
  {
   name: 'states',
   source: bloodhoundBasicExample,
  },
 );

 var prefetchExample = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: assetsPath + 'json/typeahead.json',
 });

 // Prefetch Example
 // --------------------------------------------------------------------
 $('.typeahead-prefetch').typeahead(
  {
   hint: isRtl,
   highlight: true,
   minLength: 1,
  },
  {
   name: 'states',
   source: prefetchExample,
  },
 );

 // Render default Suggestions
 function renderDefaults(q, sync) {
  if (q === '') {
   sync(prefetchExample.get('اصفهان', 'شیراز', 'تهران'));
  } else {
   prefetchExample.search(q, sync);
  }
 }
 // Default Suggestions
 // --------------------------------------------------------------------
 $('.typeahead-default-suggestions').typeahead(
  {
   hint: isRtl,
   highlight: true,
   minLength: 0,
  },
  {
   name: 'states',
   source: renderDefaults,
  },
 );

 var customTemplate = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: assetsPath + 'json/typeahead-data-2.json',
 });

 // Custom Template
 // --------------------------------------------------------------------
 $('.typeahead-custom-template').typeahead(null, {
  name: 'best-movies',
  display: 'value',
  source: customTemplate,
  highlight: true,
  hint: isRtl,
  templates: {
   empty: ['<div class="empty-message p-2">', 'موردی یافت نشد', '</div>'].join(
    '\n',
   ),
   suggestion: function (data) {
    return (
     '<div><span class="fw-medium">' +
     data.value +
     '</span> – ' +
     data.year +
     '</div>'
    );
   },
  },
 });

 var nbaTeams = [
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
 ];
 var nhlTeams = [
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
 ];

 var nbaExample = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: nbaTeams,
 });
 var nhlExample = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: nhlTeams,
 });

 // Multiple
 // --------------------------------------------------------------------
 $('.typeahead-multi-datasets').typeahead(
  {
   hint: isRtl,
   highlight: true,
   minLength: 0,
  },
  {
   name: 'nba-teams',
   source: nbaExample,
   display: 'team',
   templates: {
    header:
     '<h5 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2 typeahead-title">تیم‌های فوتبال ایران</h5>',
   },
  },
  {
   name: 'nhl-teams',
   source: nhlExample,
   display: 'team',
   templates: {
    header:
     '<h5 class="league-name border-bottom mb-0 mx-3 mt-3 pb-2 typeahead-title">تیم‌های مطرح فوتبال</h5>',
   },
  },
 );
});
