window.isRtl = window.Helpers.isRtl();
window.isDarkStyle = window.Helpers.isDarkStyle();
let y,
 v = !1;
document.getElementById('layout-menu') &&
 (v = document
  .getElementById('layout-menu')
  .classList.contains('menu-horizontal'));
(function () {
 var S, L;
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
  document.querySelectorAll('#layout-menu').forEach(function (e) {
   (y = new Menu(e, {
    orientation: v ? 'horizontal' : 'vertical',
    closeChildren: !!v,
    showDropdownOnHover: localStorage.getItem(
     'templateCustomizer-' + templateName + '--ShowDropdownOnHover',
    )
     ? localStorage.getItem(
        'templateCustomizer-' + templateName + '--ShowDropdownOnHover',
       ) === 'true'
     : window.templateCustomizer !== void 0
       ? window.templateCustomizer.settings.defaultShowDropdownOnHover
       : !0,
   })),
    window.Helpers.scrollToActive(!1),
    (window.Helpers.mainMenu = y);
  }),
  document.querySelectorAll('.layout-menu-toggle').forEach((e) => {
   e.addEventListener('click', (s) => {
    if (
     (s.preventDefault(),
     window.Helpers.toggleCollapsed(),
     config.enableMenuLocalStorage && !window.Helpers.isSmallScreen())
    )
     try {
      localStorage.setItem(
       'templateCustomizer-' + templateName + '--LayoutCollapsed',
       String(window.Helpers.isCollapsed()),
      );
      let n = document.querySelector('.template-customizer-layouts-options');
      if (n) {
       let l = window.Helpers.isCollapsed() ? 'collapsed' : 'expanded';
       n.querySelector(`input[value="${l}"]`).click();
      }
     } catch {}
   });
  }),
  window.Helpers.swipeIn('.drag-target', function (e) {
   window.Helpers.setCollapsed(!1);
  }),
  window.Helpers.swipeOut('#layout-menu', function (e) {
   window.Helpers.isSmallScreen() && window.Helpers.setCollapsed(!0);
  });
 let i = document.getElementsByClassName('menu-inner'),
  u = document.getElementsByClassName('menu-inner-shadow')[0];
 i.length > 0 &&
  u &&
  i[0].addEventListener('ps-scroll-y', function () {
   this.querySelector('.ps__thumb-y').offsetTop
    ? (u.style.display = 'block')
    : (u.style.display = 'none');
  });
 function h(e) {
  e === 'system' &&
   (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? (e = 'dark')
    : (e = 'light')),
   [].slice
    .call(document.querySelectorAll('[data-app-' + e + '-img]'))
    .map(function (n) {
     const l = n.getAttribute('data-app-' + e + '-img');
     n.src = assetsPath + 'img/' + l;
    });
 }
 let p = document.querySelector('.dropdown-style-switcher'),
  m =
   localStorage.getItem('templateCustomizer-' + templateName + '--Style') ||
   (((L = (S = window.templateCustomizer) == null ? void 0 : S.settings) == null
    ? void 0
    : L.defaultStyle) ??
    'light'); //!if there is no Customizer then use default style as light
 if (window.templateCustomizer && p) {
  [].slice
   .call(p.children[1].querySelectorAll('.dropdown-item'))
   .forEach(function (n) {
    n.addEventListener('click', function () {
     let l = this.getAttribute('data-theme');
     l === 'light'
      ? window.templateCustomizer.setStyle('light')
      : l === 'dark'
        ? window.templateCustomizer.setStyle('dark')
        : window.templateCustomizer.setStyle('system');
    });
   });
  const s = p.querySelector('i');
  m === 'light'
   ? (s.classList.add('ti-sun'),
     new bootstrap.Tooltip(s, {
      title: 'حالت روز',
      fallbackPlacements: ['bottom'],
     }))
   : m === 'dark'
     ? (s.classList.add('ti-moon'),
       new bootstrap.Tooltip(s, {
        title: 'حالت شب',
        fallbackPlacements: ['bottom'],
       }))
     : (s.classList.add('ti-device-desktop'),
       new bootstrap.Tooltip(s, {
        title: 'حالت سیستم',
        fallbackPlacements: ['bottom'],
       }));
 }
 h(m);
 let w = document.getElementsByClassName('dropdown-language');
 if (w.length) {
  let n = function (l) {
   l === 'rtl'
    ? localStorage.getItem('templateCustomizer-' + templateName + '--Rtl') !==
       'true' &&
      window.templateCustomizer &&
      window.templateCustomizer.setRtl(!0)
    : localStorage.getItem('templateCustomizer-' + templateName + '--Rtl') ===
       'true' &&
      window.templateCustomizer &&
      window.templateCustomizer.setRtl(!1);
  };
  var C = n;
  let e = w[0].querySelectorAll('.dropdown-item');
  const s = w[0].querySelector('.dropdown-item.active');
  n(s.dataset.textDirection);
  for (let l = 0; l < e.length; l++)
   e[l].addEventListener('click', function () {
    let x = this.getAttribute('data-text-direction');
    window.templateCustomizer.setLang(this.getAttribute('data-language')), n(x);
   });
 }
 setTimeout(function () {
  let e = document.querySelector('.template-customizer-reset-btn');
  e &&
   (e.onclick = function () {
    window.location.href = baseUrl + 'lang/en';
   });
 }, 1500);
 const a = document.querySelector('.dropdown-notifications-all'),
  o = document.querySelectorAll('.dropdown-notifications-read');
 a &&
  a.addEventListener('click', (e) => {
   o.forEach((s) => {
    s.closest('.dropdown-notifications-item').classList.add('marked-as-read');
   });
  }),
  o &&
   o.forEach((e) => {
    e.addEventListener('click', (s) => {
     e.closest('.dropdown-notifications-item').classList.toggle(
      'marked-as-read',
     );
    });
   }),
  document.querySelectorAll('.dropdown-notifications-archive').forEach((e) => {
   e.addEventListener('click', (s) => {
    e.closest('.dropdown-notifications-item').remove();
   });
  }),
  [].slice
   .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   .map(function (e) {
    return new bootstrap.Tooltip(e);
   });
 const c = function (e) {
  e.type == 'show.bs.collapse' || e.type == 'show.bs.collapse'
   ? e.target.closest('.accordion-item').classList.add('active')
   : e.target.closest('.accordion-item').classList.remove('active');
 };
 [].slice.call(document.querySelectorAll('.accordion')).map(function (e) {
  e.addEventListener('show.bs.collapse', c),
   e.addEventListener('hide.bs.collapse', c);
 }),
  window.Helpers.setAutoUpdate(!0),
  window.Helpers.initPasswordToggle(),
  window.Helpers.initSpeechToText(),
  window.Helpers.initNavbarDropdownScrollbar();
 let g = document.querySelector("[data-template^='horizontal-menu']");
 if (
  (g &&
   (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT
    ? window.Helpers.setNavbarFixed('fixed')
    : window.Helpers.setNavbarFixed('')),
  window.addEventListener(
   'resize',
   function (e) {
    window.innerWidth >= window.Helpers.LAYOUT_BREAKPOINT &&
     document.querySelector('.search-input-wrapper') &&
     (document.querySelector('.search-input-wrapper').classList.add('d-none'),
     (document.querySelector('.search-input').value = '')),
     g &&
      (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT
       ? window.Helpers.setNavbarFixed('fixed')
       : window.Helpers.setNavbarFixed(''),
      setTimeout(function () {
       window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT
        ? document.getElementById('layout-menu') &&
          document
           .getElementById('layout-menu')
           .classList.contains('menu-horizontal') &&
          y.switchMenu('vertical')
        : document.getElementById('layout-menu') &&
          document
           .getElementById('layout-menu')
           .classList.contains('menu-vertical') &&
          y.switchMenu('horizontal');
      }, 100));
   },
   !0,
  ),
  !(v || window.Helpers.isSmallScreen()) &&
   (typeof TemplateCustomizer < 'u' &&
    (window.templateCustomizer.settings.defaultMenuCollapsed
     ? window.Helpers.setCollapsed(!0, !1)
     : window.Helpers.setCollapsed(!1, !1)),
   typeof config < 'u' && config.enableMenuLocalStorage))
 )
  try {
   localStorage.getItem(
    'templateCustomizer-' + templateName + '--LayoutCollapsed',
   ) !== null &&
    window.Helpers.setCollapsed(
     localStorage.getItem(
      'templateCustomizer-' + templateName + '--LayoutCollapsed',
     ) === 'true',
     !1,
    );
  } catch {}
})();
typeof $ < 'u' &&
 $(function () {
  window.Helpers.initSidebarToggle();
  var b = $('.search-toggler'),
   r = $('.search-input-wrapper'),
   i = $('.search-input'),
   u = $('.content-backdrop');
  if (
   (b.length &&
    b.on('click', function () {
     r.length && (r.toggleClass('d-none'), i.focus());
    }),
   $(document).on('keydown', function (a) {
    let o = a.ctrlKey,
     t = a.which === 191;
    o && t && r.length && (r.toggleClass('d-none'), i.focus());
   }),
   setTimeout(function () {
    var a = $('.twitter-typeahead');
    i.on('focus', function () {
     r.hasClass('container-xxl')
      ? (r.find(a).addClass('container-xxl'), a.removeClass('container-fluid'))
      : r.hasClass('container-fluid') &&
        (r.find(a).addClass('container-fluid'), a.removeClass('container-xxl'));
    });
   }, 10),
   i.length)
  ) {
   var h = function (a) {
     return function (t, d) {
      let c;
      (c = []),
       a.filter(function (f) {
        if (f.name.toLowerCase().startsWith(t.toLowerCase())) c.push(f);
        else if (
         !f.name.toLowerCase().startsWith(t.toLowerCase()) &&
         f.name.toLowerCase().includes(t.toLowerCase())
        )
         c.push(f),
          c.sort(function (g, C) {
           return C.name < g.name ? 1 : -1;
          });
        else return [];
       }),
       d(c);
     };
    },
    p = 'search-vertical.json';
   if ($('#layout-menu').hasClass('menu-horizontal'))
    var p = 'search-horizontal.json';
   var m = $.ajax({
    url: assetsPath + 'json/' + p,
    dataType: 'json',
    async: !1,
   }).responseJSON;
   i.each(function () {
    var a = $(this);
    i
     .typeahead(
      {
       hint: !1,
       classNames: {
        menu: 'tt-menu navbar-search-suggestion',
        cursor: 'active',
        suggestion: 'suggestion d-flex justify-content-between px-3 py-2 w-100',
       },
      },
      {
       name: 'pages',
       display: 'name',
       limit: 5,
       source: h(m.pages),
       templates: {
        header:
         '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">صفحات</h6>',
        suggestion: function ({ url: o, icon: t, name: d }) {
         return (
          '<a href="' +
          baseUrl +
          o +
          '"><div><i class="ti ' +
          t +
          ' me-2"></i><span class="align-middle">' +
          d +
          '</span></div></a>'
         );
        },
        notFound:
         '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">صفحات</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> موردی یافت نشد </p></div>',
       },
      },
      {
       name: 'files',
       display: 'name',
       limit: 4,
       source: h(m.files),
       templates: {
        header:
         '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">فایل ها</h6>',
        suggestion: function ({ src: o, name: t, subtitle: d, meta: c }) {
         return (
          '<a href="javascript:;"><div class="d-flex w-50"><img class="me-3" src="' +
          assetsPath +
          o +
          '" alt="' +
          t +
          '" height="32"><div class="w-75"><h6 class="mb-0">' +
          t +
          '</h6><small class="text-muted">' +
          d +
          '</small></div></div><small class="text-muted">' +
          c +
          '</small></a>'
         );
        },
        notFound:
         '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">فایل ها</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> موردی یافت نشد</p></div>',
       },
      },
      {
       name: 'members',
       display: 'name',
       limit: 4,
       source: h(m.members),
       templates: {
        header:
         '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">اعضا</h6>',
        suggestion: function ({ name: o, src: t, subtitle: d }) {
         return (
          '<a href="' +
          baseUrl +
          'app/user/view/account"><div class="d-flex align-items-center"><img class="rounded-circle me-3" src="' +
          assetsPath +
          t +
          '" alt="' +
          o +
          '" height="32"><div class="user-info"><h6 class="mb-0">' +
          o +
          '</h6><small class="text-muted">' +
          d +
          '</small></div></div></a>'
         );
        },
        notFound:
         '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">اعضا</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> موردی یافت نشد</p></div>',
       },
      },
     )
     .bind('typeahead:render', function () {
      u.addClass('show').removeClass('fade');
     })
     .bind('typeahead:select', function (o, t) {
      t.url !== 'javascript:;' && (window.location = baseUrl + t.url);
     })
     .bind('typeahead:close', function () {
      i.val(''),
       a.typeahead('val', ''),
       r.addClass('d-none'),
       u.addClass('fade').removeClass('show');
     }),
     i.on('keyup', function () {
      i.val() == '' && u.addClass('fade').removeClass('show');
     });
   });
   var w;
   $('.navbar-search-suggestion').each(function () {
    w = new PerfectScrollbar($(this)[0], {
     wheelPropagation: !1,
     suppressScrollX: !0,
    });
   }),
    i.on('keyup', function () {
     w.update();
    });
  }
 });
