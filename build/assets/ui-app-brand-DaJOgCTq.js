(function () {
 const e = document.querySelector('#layout-menu1'),
  o = document.querySelector('#layout-menu2'),
  n = document.querySelector('#layout-menu3'),
  l = document.querySelector('#layout-menu4');
 e && new Menu(e), o && new Menu(o), n && new Menu(n), l && new Menu(l);
 const t = document.querySelector('.app-brand-toggle');
 t &&
  (t.onclick = function () {
   e && e.classList.toggle('menu-collapsed'),
    o && o.classList.toggle('menu-collapsed'),
    n && n.classList.toggle('menu-collapsed'),
    l && l.classList.toggle('menu-collapsed');
  });
 const c = document.querySelector('.brand-menu-toggle'),
  u = document.querySelector('.brand-logo-toggle'),
  a = document.querySelector('.logo-name-toggle'),
  i = document.querySelector('.brand-image-toggle');
 c &&
  (c.onclick = function () {
   e && e.classList.toggle('menu-collapsed');
  }),
  u &&
   (u.onclick = function () {
    o && o.classList.toggle('menu-collapsed');
   }),
  a &&
   (a.onclick = function () {
    n && n.classList.toggle('menu-collapsed');
   }),
  i &&
   (i.onclick = function () {
    l && l.classList.toggle('menu-collapsed');
   });
})();
