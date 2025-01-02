$(function () {
 const i = $('.selectpicker'),
  n = $('.select2'),
  c = $('.select2-icons');
 if (
  (i.length && i.selectpicker(),
  n.length &&
   n.each(function () {
    var e = $(this);
    e.wrap('<div class="position-relative"></div>').select2({
     placeholder: 'انتخاب...',
     dropdownParent: e.parent(),
    });
   }),
  c.length)
 ) {
  let e = function (t) {
   if (!t.id) return t.text;
   var l = "<i class='" + $(t.element).data('icon') + " me-2'></i>" + t.text;
   return l;
  };
  var s = e;
  c.wrap('<div class="position-relative"></div>').select2({
   dropdownParent: c.parent(),
   templateResult: e,
   templateSelection: e,
   escapeMarkup: function (t) {
    return t;
   },
  });
 }
});
