(function () {
 new Plyr('#plyr-video-player'),
  (document.getElementsByClassName('plyr')[0].style.borderRadius = '7px');
 const n = document.getElementsByTagName('html')[0],
  e = document.querySelector('.stick-top');
 function t() {
  n.classList.contains('layout-navbar-fixed')
   ? e.classList.add('course-content-fixed')
   : e.classList.remove('course-content-fixed');
 }
 t(),
  (window.onscroll = function () {
   t();
  });
})();
