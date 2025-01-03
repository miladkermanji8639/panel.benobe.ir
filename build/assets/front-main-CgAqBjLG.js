window.isRtl = window.Helpers.isRtl();
window.isDarkStyle = window.Helpers.isDarkStyle();
(function () {
 var d, m;
 const n = document.getElementById('navbarSupportedContent'),
  o = document.querySelector('.layout-navbar'),
  u = document.querySelectorAll('.navbar-nav .nav-link');
 setTimeout(function () {
  window.Helpers.initCustomOptionCheck();
 }, 1e3),
  typeof Waves < 'u' &&
   (Waves.init(),
   Waves.attach(
    ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
    ['waves-light'],
   ),
   Waves.attach("[class*='btn-outline-']"),
   Waves.attach("[class*='btn-label-']"),
   Waves.attach('.pagination .page-item .page-link')),
  [].slice
   .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   .map(function (e) {
    return new bootstrap.Tooltip(e);
   }),
  isRtl &&
   Helpers._addClass(
    'dropdown-menu-end',
    document.querySelectorAll('#layout-navbar .dropdown-menu'),
   ),
  window.addEventListener('scroll', (e) => {
   window.scrollY > 10
    ? o.classList.add('navbar-active')
    : o.classList.remove('navbar-active');
  }),
  window.addEventListener('load', (e) => {
   window.scrollY > 10
    ? o.classList.add('navbar-active')
    : o.classList.remove('navbar-active');
  });
 function c() {
  n.classList.remove('show');
 }
 document.addEventListener('click', function (e) {
  n.contains(e.target) || c();
 }),
  u.forEach((e) => {
   e.addEventListener('click', (t) => {
    e.classList.contains('dropdown-toggle') ? t.preventDefault() : c();
   });
  }),
  isRtl &&
   Helpers._addClass(
    'dropdown-menu-end',
    document.querySelectorAll('.dropdown-menu'),
   );
 const r = document.querySelectorAll('.nav-link.mega-dropdown');
 r &&
  r.forEach((e) => {
   new MegaDropdown(e);
  });
 let s = document.querySelector('.dropdown-style-switcher'),
  i =
   localStorage.getItem('templateCustomizer-' + templateName + '--Style') ||
   (((m = (d = window.templateCustomizer) == null ? void 0 : d.settings) == null
    ? void 0
    : m.defaultStyle) ??
    'light'); //!if there is no Customizer then use default style as light
 if (window.templateCustomizer && s) {
  [].slice
   .call(s.children[1].querySelectorAll('.dropdown-item'))
   .forEach(function (a) {
    a.addEventListener('click', function () {
     let l = this.getAttribute('data-theme');
     l === 'light'
      ? window.templateCustomizer.setStyle('light')
      : l === 'dark'
        ? window.templateCustomizer.setStyle('dark')
        : window.templateCustomizer.setStyle('system');
    });
   });
  const t = s.querySelector('i');
  i === 'light'
   ? (t.classList.add('ti-sun'),
     new bootstrap.Tooltip(t, {
      title: 'حالت روز',
      fallbackPlacements: ['bottom'],
     }))
   : i === 'dark'
     ? (t.classList.add('ti-moon'),
       new bootstrap.Tooltip(t, {
        title: 'حالت شب',
        fallbackPlacements: ['bottom'],
       }))
     : (t.classList.add('ti-device-desktop'),
       new bootstrap.Tooltip(t, {
        title: 'حالت سیستم',
        fallbackPlacements: ['bottom'],
       }));
 }
 w(i);
 function w(e) {
  e === 'system' &&
   (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? (e = 'dark')
    : (e = 'light')),
   [].slice
    .call(document.querySelectorAll('[data-app-' + e + '-img]'))
    .map(function (a) {
     const l = a.getAttribute('data-app-' + e + '-img');
     a.src = assetsPath + 'img/' + l;
    });
 }
})();
