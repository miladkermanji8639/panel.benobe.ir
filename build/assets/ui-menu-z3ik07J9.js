(function () {
 const n = document.querySelector('#menu-1'),
  s = document.querySelector('#menu-1-toggle-collapsed');
 n && new Menu(n),
  s &&
   (s.onclick = function () {
    n.classList.toggle('menu-collapsed');
   });
 const i = document.querySelector('#menu-2');
 i && new Menu(i, { orientation: 'horizontal' });
 const m = document.querySelector('#menu-3');
 m && new Menu(m, { orientation: 'horizontal', showDropdownOnHover: !0 });
 const o = document.querySelector('#menu-5'),
  r = document.querySelector('#menu-5-toggle-collapsed');
 o && new Menu(o, { animate: !1 }),
  r &&
   (r.onclick = function () {
    o.classList.toggle('menu-collapsed');
   });
 const a = document.querySelector('#menu-6');
 a &&
  new Menu(a, { orientation: 'horizontal', animate: !1, closeChildren: !0 });
 const t = document.querySelector('#menu-7'),
  f = document.querySelector('#menu-7-toggle-collapsed');
 t && new Menu(t, { accordion: !1 }),
  f &&
   (f.onclick = function () {
    t.classList.toggle('menu-collapsed');
   });
 const d = document.querySelector('#menu-8');
 d && new Menu(d, { orientation: 'horizontal', accordion: !1 });
 const c = document.querySelectorAll('.menus-9'),
  g = document.querySelector('#menus-9-toggle-collapsed');
 c &&
  c.forEach((e) => {
   new Menu(e);
  }),
  g &&
   (g.onclick = function () {
    c.forEach((e) => {
     e.classList.toggle('menu-collapsed');
    });
   });
 const u = document.querySelectorAll('.menus-10'),
  q = document.querySelector('#menus-10-toggle-collapsed');
 u &&
  u.forEach((e) => {
   new Menu(e);
  }),
  q &&
   (q.onclick = function () {
    u.forEach((e) => {
     e.classList.toggle('menu-collapsed');
    });
   });
 const y = document.querySelectorAll('.menus-11');
 y &&
  y.forEach((e) => {
   new Menu(e, { orientation: 'horizontal' });
  });
 const l = document.querySelectorAll('.menus-12'),
  S = document.querySelector('#menus-12-toggle-collapsed');
 l &&
  l.forEach((e) => {
   new Menu(e);
  }),
  S &&
   (S.onclick = function () {
    l.forEach((e) => {
     e.classList.toggle('menu-collapsed');
    });
   });
})();
