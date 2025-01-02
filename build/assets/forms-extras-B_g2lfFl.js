(function () {
 const r = document.querySelector('#autosize-demo'),
  t = document.querySelector('.credit-card-mask'),
  a = document.querySelector('.phone-number-mask'),
  n = document.querySelector('.date-mask'),
  e = document.querySelector('.time-mask'),
  l = document.querySelector('.numeral-mask'),
  o = document.querySelector('.block-mask'),
  i = document.querySelector('.delimiter-mask'),
  u = document.querySelector('.custom-delimiter-mask'),
  c = document.querySelector('.prefix-mask');
 r && autosize(r),
  t &&
   new Cleave(t, {
    creditCard: !0,
    onCreditCardTypeChanged: function (s) {
     s != '' && s != 'unknown'
      ? (document.querySelector('.card-type').innerHTML =
         '<img src="' +
         assetsPath +
         'img/icons/payments/' +
         s +
         '-cc.png" height="28"/>')
      : (document.querySelector('.card-type').innerHTML = '');
    },
   }),
  a && new Cleave(a, { phone: !0, phoneRegionCode: 'US' }),
  n &&
   new Cleave(n, { date: !0, delimiter: '-', datePattern: ['Y', 'm', 'd'] }),
  e && new Cleave(e, { time: !0, timePattern: ['h', 'm', 's'] }),
  l && new Cleave(l, { numeral: !0, numeralThousandsGroupStyle: 'thousand' }),
  o && new Cleave(o, { blocks: [4, 3, 3], uppercase: !0 }),
  i && new Cleave(i, { delimiter: '·', blocks: [3, 3, 3], uppercase: !0 }),
  u &&
   new Cleave(u, {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
    uppercase: !0,
   }),
  c && new Cleave(c, { prefix: '+98', blocks: [3, 3, 3, 4], uppercase: !0 });
})();
$(function () {
 var r = $('.bootstrap-maxlength-example'),
  t = $('.form-repeater');
 if (
  (r.length &&
   r.each(function () {
    $(this).maxlength({
     warningClass: 'label label-success bg-success text-white',
     limitReachedClass: 'label label-danger',
     separator: ' از ',
     preText: 'شما ',
     postText: ' کارکتر مجاز تایپ کرده اید.',
     validate: !0,
     threshold: +this.getAttribute('maxlength'),
    });
   }),
  t.length)
 ) {
  var a = 2,
   n = 1;
  t.on('submit', function (e) {
   e.preventDefault();
  }),
   t.repeater({
    show: function () {
     var e = $(this).find('.form-control, .form-select'),
      l = $(this).find('.form-label');
     e.each(function (o) {
      var i = 'form-repeater-' + a + '-' + n;
      $(e[o]).attr('id', i), $(l[o]).attr('for', i), n++;
     }),
      a++,
      $(this).slideDown();
    },
    hide: function (e) {
     confirm('آیا از حذف این المنت مطمئنید?') && $(this).slideUp(e);
    },
   });
 }
});
