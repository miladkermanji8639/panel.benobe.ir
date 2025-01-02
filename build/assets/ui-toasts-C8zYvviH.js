(function () {
 const e = document.querySelector('.toast-ex'),
  n = document.querySelector('.toast-placement-ex'),
  r = document.querySelector('#showToastAnimation'),
  p = document.querySelector('#showToastPlacement');
 let o, c, t, i, s;
 r &&
  (r.onclick = function () {
   i && d(i),
    (o = document.querySelector('#selectType').value),
    (c = document.querySelector('#selectAnimation').value),
    e.classList.add(c),
    e.querySelector('.ti').classList.add(o),
    (i = new bootstrap.Toast(e)),
    i.show();
  });
 function d(l) {
  l &&
   l._element !== null &&
   (n &&
    (n.classList.remove(o),
    n.querySelector('.ti').classList.remove(o),
    DOMTokenList.prototype.remove.apply(n.classList, t)),
   e && (e.classList.remove(o, c), e.querySelector('.ti').classList.remove(o)),
   l.dispose());
 }
 p &&
  (p.onclick = function () {
   s && d(s),
    (o = document.querySelector('#selectTypeOpt').value),
    (t = document.querySelector('#selectPlacement').value.split(' ')),
    n.querySelector('.ti').classList.add(o),
    DOMTokenList.prototype.add.apply(n.classList, t),
    (s = new bootstrap.Toast(n)),
    s.show();
  });
})();
$(function () {
 var e = -1,
  n = 0,
  r,
  p = function () {
   var t = [
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .',
    '<div class="mb-3"><input class="input-small form-control" value="متن ازمایشی"/>&nbsp;<a href="#support" target="_blank">لینک</a></div><div class="d-flex"><button type="button" id="okBtn" class="btn btn-primary btn-sm me-2 waves-effect waves-light">بستن</button><button type="button" id="surpriseBtn" class="btn btn-sm btn-secondary waves-effect waves-light">کلید</button></div>',
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ',
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم !',
    'لورم ایپسوم متن ساختگی .',
    'لورم ایپسوم متن ساختگی با تست !',
   ];
   return e++, e === t.length && (e = 0), t[e];
  },
  o = function (t) {
   return (
    (t = t || 'Clear itself?'),
    (t +=
     '<br /><br /><button type="button" class="btn btn-secondary clear waves-effect waves-light">Yes</button>'),
    t
   );
  };
 $('#closeButton').on('click', function () {
  $(this).is(':checked')
   ? $('#addBehaviorOnToastCloseClick').prop('disabled', !1)
   : ($('#addBehaviorOnToastCloseClick').prop('disabled', !0),
     $('#addBehaviorOnToastCloseClick').prop('checked', !1));
 }),
  $('#showtoast').on('click', function () {
   var t = $('#toastTypeGroup input:radio:checked').val(),
    i = $('html').attr('dir') === 'rtl',
    s = $('#message').val(),
    d = $('#title').val() || '',
    l = $('#showDuration'),
    h = $('#hideDuration'),
    f = $('#timeOut'),
    v = $('#extendedTimeOut'),
    m = $('#showEasing'),
    g = $('#hideEasing'),
    k = $('#showMethod'),
    b = $('#hideMethod'),
    y = n++,
    u = $('#addClear').prop('checked'),
    w = 'toast-top-right';
   (w =
    typeof toastr.options.positionClass > 'u'
     ? 'toast-top-right'
     : toastr.options.positionClass),
    (toastr.options = {
     maxOpened: 1,
     autoDismiss: !0,
     closeButton: $('#closeButton').prop('checked'),
     debug: $('#debugInfo').prop('checked'),
     newestOnTop: $('#newestOnTop').prop('checked'),
     progressBar: $('#progressBar').prop('checked'),
     positionClass:
      $('#positionGroup input:radio:checked').val() || 'toast-top-right',
     preventDuplicates: $('#preventDuplicates').prop('checked'),
     onclick: null,
     rtl: i,
    }),
    w != toastr.options.positionClass &&
     ((toastr.options.hideDuration = 0), toastr.clear()),
    $('#addBehaviorOnToastClick').prop('checked') &&
     (toastr.options.onclick = function () {
      alert('رویداد سفارشی شما اینجا می تواند تعریف شود');
     }),
    $('#addBehaviorOnToastCloseClick').prop('checked') &&
     (toastr.options.onCloseClick = function () {
      alert('رویداد سفارشی شما بعد از کلیک بر روی بستن');
     }),
    l.val().length && (toastr.options.showDuration = parseInt(l.val())),
    h.val().length && (toastr.options.hideDuration = parseInt(h.val())),
    f.val().length && (toastr.options.timeOut = u ? 0 : parseInt(f.val())),
    v.val().length &&
     (toastr.options.extendedTimeOut = u ? 0 : parseInt(v.val())),
    m.val().length && (toastr.options.showEasing = m.val()),
    g.val().length && (toastr.options.hideEasing = g.val()),
    k.val().length && (toastr.options.showMethod = k.val()),
    b.val().length && (toastr.options.hideMethod = b.val()),
    u && ((s = o(s)), (toastr.options.tapToDismiss = !1)),
    s || (s = p());
   var a = toastr[t](s, d);
   (r = a),
    !(typeof a > 'u') &&
     (a.find('#okBtn').length &&
      a.delegate('#okBtn', 'click', function () {
       alert('شما کلیک کردید. من پیام #' + y + 'بود . خداحافظ!'), a.remove();
      }),
     a.find('#surpriseBtn').length &&
      a.delegate('#surpriseBtn', 'click', function () {
       alert(
        'سوپرایز! روی من کلیک شد . من پیام #' +
         y +
         'بودم . اینجا میتونی رویداد دیگه هم بذاری.',
       );
      }),
     a.find('.clear').length &&
      a.delegate('.clear', 'click', function () {
       toastr.clear(a, { force: !0 });
      }));
  });
 function c() {
  return r;
 }
 $('#clearlasttoast').on('click', function () {
  toastr.clear(c());
 }),
  $('#cleartoasts').on('click', function () {
   toastr.clear();
  });
});
