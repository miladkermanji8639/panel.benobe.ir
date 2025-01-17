(function () {
 const e = document.getElementById('sortable-cards'),
  t = document.getElementById('pending-tasks'),
  n = document.getElementById('completed-tasks'),
  a = document.getElementById('clone-source-1'),
  o = document.getElementById('clone-source-2'),
  i = document.getElementById('handle-list-1'),
  l = document.getElementById('handle-list-2'),
  r = document.getElementById('image-list-1'),
  c = document.getElementById('image-list-2');
 e && Sortable.create(e),
  r && Sortable.create(r, { animation: 150, group: 'imgList' }),
  c && Sortable.create(c, { animation: 150, group: 'imgList' }),
  a &&
   Sortable.create(a, {
    animation: 150,
    group: { name: 'cloneList', pull: 'clone', revertClone: !0 },
   }),
  o &&
   Sortable.create(o, {
    animation: 150,
    group: { name: 'cloneList', pull: 'clone', revertClone: !0 },
   }),
  t && Sortable.create(t, { animation: 150, group: 'taskList' }),
  n && Sortable.create(n, { animation: 150, group: 'taskList' }),
  i &&
   Sortable.create(i, {
    animation: 150,
    group: 'handleList',
    handle: '.drag-handle',
   }),
  l &&
   Sortable.create(l, {
    animation: 150,
    group: 'handleList',
    handle: '.drag-handle',
   });
})();
