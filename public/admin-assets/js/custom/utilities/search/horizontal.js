﻿'use strict';
var KTSearchHorizontal = {
 init: function () {
  var e, n;
  (e = document
   .querySelector('#kt_advanced_search_form')
   .querySelector('[name="tags"]')),
   new Tagify(e),
   (n = document.querySelector(
    '#kt_horizontal_search_advanced_link',
   )).addEventListener('click', function (e) {
    e.preventDefault(),
     'جستجوی پیشرفته' === n.innerHTML
      ? (n.innerHTML = 'پنهان کردن جستجوی پیشرفته')
      : (n.innerHTML = 'جستجوی پیشرفته');
   });
 },
};
KTUtil.onDOMContentLoaded(function () {
 KTSearchHorizontal.init();
});