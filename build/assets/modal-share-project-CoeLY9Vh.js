$(function () {
 const a = $('.share-project-select');
 var r = document.getElementById('shareProject');
 r.addEventListener('show.bs.modal', function (n) {
  if (a.length) {
   let t = function (e) {
    if (!e.id) return e.text;
    var s =
     '<div class="d-flex align-items-center"><div class="avatar avatar-xs me-2 d-flex"><img src="' +
     assetsPath +
     $(e.element).data('image') +
     '" class="rounded-circle"></div><div class="name">' +
     $(e.element).data('name') +
     '</div></div>';
    return s;
   };
   var c = t;
   a.wrap('<div class="position-relative"></div>').select2({
    dropdownParent: r,
    templateResult: t,
    templateSelection: t,
    placeholder: 'افزودن عضو پروژه',
    escapeMarkup: function (e) {
     return e;
    },
   });
  }
 });
});
