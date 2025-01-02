(async function () {
 let k;
 const r = document.querySelector('.kanban-update-item-sidebar'),
  w = document.querySelector('.kanban-wrapper'),
  h = document.querySelector('.comment-editor'),
  u = document.querySelector('.kanban-add-new-board'),
  b = [].slice.call(document.querySelectorAll('.kanban-add-board-input')),
  A = document.querySelector('.kanban-add-board-btn'),
  y = document.querySelector('#due-date'),
  f = $('.select2'),
  g = document.querySelector('html').getAttribute('data-assets-path'),
  H = new bootstrap.Offcanvas(r),
  v = await fetch(g + 'json/kanban.json');
 v.ok || console.error('error', v),
  (k = await v.json()),
  y &&
   y.flatpickr({
    monthSelectorType: 'static',
    locale: 'fa',
    altInput: !0,
    altFormat: 'j F, Y',
    dateFormat: 'Y-m-d',
   }); //! TODO: Update Event label and guest code to JS once select removes jQuery dependency
 if (f.length) {
  let e = function (t) {
   if (!t.id) return t.text;
   var a =
    "<div class='badge " +
    $(t.element).data('color') +
    " rounded-pill'> " +
    t.text +
    '</div>';
   return a;
  };
  var O = e;
  f.each(function () {
   var t = $(this);
   t.wrap("<div class='position-relative'></div>").select2({
    placeholder: 'انتخاب برچسب',
    dropdownParent: t.parent(),
    templateResult: e,
    templateSelection: e,
    escapeMarkup: function (a) {
     return a;
    },
   });
  });
 }
 h &&
  new Quill(h, {
   modules: { toolbar: '.comment-toolbar' },
   placeholder: 'نظرتو بنویس... ',
   theme: 'snow',
  });
 function x() {
  return "<div class='dropdown'><i class='dropdown-toggle ti ti-dots-vertical cursor-pointer' id='board-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='board-dropdown'><a class='dropdown-item delete-board' href='javascript:void(0)'> <i class='ti ti-trash ti-xs me-1' ></i> <span class='align-middle'>حذف</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-edit ti-xs me-1' ></i> <span class='align-middle'>تغییر نام</span></a><a class='dropdown-item' href='javascript:void(0)'><i class='ti ti-archive ti-xs me-1' ></i> <span class='align-middle'>بایگانی</span></a></div></div>";
 }
 function S() {
  return "<div class='dropdown kanban-tasks-item-dropdown'><i class='dropdown-toggle ti ti-dots-vertical' id='kanban-tasks-item-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></i><div class='dropdown-menu dropdown-menu-end' aria-labelledby='kanban-tasks-item-dropdown'><a class='dropdown-item' href='javascript:void(0)'>کپی لینک تسک</a><a class='dropdown-item' href='javascript:void(0)'>کپی کردن تسک</a><a class='dropdown-item delete-task' href='javascript:void(0)'>حذف</a></div></div>";
 }
 function M(e, t) {
  return (
   "<div class='d-flex justify-content-between flex-wrap align-items-center mb-2 pb-1'><div class='item-badges'> <div class='badge rounded-pill bg-label-" +
   e +
   "'> " +
   t +
   '</div></div>' +
   S() +
   '</div>'
  );
 }
 function q(e, t, a, n, i) {
  var s = t ? ' pull-up' : '',
   d = a ? 'avatar-' + a : '',
   p = i == null ? ' ' : i.split(',');
  return e == null
   ? ' '
   : e
      .split(',')
      .map(function (o, c, F) {
       var P = n && c !== F.length - 1 ? ' me-' + n : '';
       return (
        "<div class='avatar " +
        d +
        P +
        "'data-bs-toggle='tooltip' data-bs-placement='top'title='" +
        p[c] +
        "'><img src='" +
        g +
        'img/avatars/' +
        o +
        "' alt='Avatar' class='rounded-circle " +
        s +
        "'></div>"
       );
      })
      .join(' ');
 }
 function D(e, t, a, n) {
  return (
   "<div class='d-flex justify-content-between align-items-center flex-wrap mt-2 pt-1'><div class='d-flex'> <span class='d-flex align-items-center me-2'><i class='ti ti-paperclip ti-xs me-1'></i><span class='attachments'>" +
   e +
   "</span></span> <span class='d-flex align-items-center ms-1'><i class='ti ti-message-dots ti-xs me-1'></i><span> " +
   t +
   " </span></span></div><div class='avatar-group d-flex align-items-center assigned-avatar'>" +
   q(a, !0, 'xs', null, n) +
   '</div></div>'
  );
 }
 const l = new jKanban({
  element: '.kanban-wrapper',
  gutter: '15px',
  widthBoard: '250px',
  dragItems: !0,
  boards: k,
  dragBoards: !0,
  addItemButton: !0,
  buttonContent: '+ افزودن آیتم',
  itemAddOptions: {
   enabled: !0,
   content: '+ افزودن آیتم جدید',
   class: 'kanban-title-button btn',
   footer: !1,
  },
  click: function (e) {
   let t = e,
    a = t.getAttribute('data-eid')
     ? t.querySelector('.kanban-text').textContent
     : t.textContent,
    n = t.getAttribute('data-due-date'),
    i = new JDate(),
    s = i.getFullYear(),
    d = n
     ? n + ', ' + s
     : i.getDate() + ' ' + i.toLocaleString('fa', { month: 'long' }) + ', ' + s,
    p = t.getAttribute('data-badge-text'),
    o = t.getAttribute('data-assigned');
   H.show(),
    (r.querySelector('#title').value = a),
    (r.querySelector('#due-date').nextSibling.value = d),
    $('.kanban-update-item-sidebar').find(f).val(p).trigger('change'),
    (r.querySelector('.assigned').innerHTML = ''),
    r
     .querySelector('.assigned')
     .insertAdjacentHTML(
      'afterbegin',
      q(o, !1, 'xs', '1', e.getAttribute('data-members')) +
       "<div class='avatar avatar-xs ms-1'><span class='avatar-initial rounded-circle bg-label-secondary'><i class='ti ti-plus ti-xs text-heading'></i></span></div>",
     );
  },
  buttonClick: function (e, t) {
   const a = document.createElement('form');
   a.setAttribute('class', 'new-item-form'),
    (a.innerHTML =
     '<div class="mb-3"><textarea class="form-control add-new-item" rows="2" placeholder="افزودن محتوا" autofocus required></textarea></div><div class="mb-3"><button type="submit" class="btn btn-primary btn-sm me-2 waves-effect waves-light">افزودن</button><button type="button" class="btn btn-label-secondary btn-sm cancel-add-item waves-effect waves-light">لغو</button></div>'),
    l.addForm(t, a),
    a.addEventListener('submit', function (n) {
     n.preventDefault();
     const i = [].slice.call(
      document.querySelectorAll(
       '.kanban-board[data-id=' + t + '] .kanban-item',
      ),
     );
     l.addElement(t, {
      title: "<span class='kanban-text'>" + n.target[0].value + '</span>',
      id: t + '-' + i.length + 1,
     }),
      [].slice
       .call(
        document.querySelectorAll(
         '.kanban-board[data-id=' + t + '] .kanban-text',
        ),
       )
       .forEach(function (o) {
        o.insertAdjacentHTML('beforebegin', S());
       });
     const d = [].slice.call(
      document.querySelectorAll('.kanban-item .kanban-tasks-item-dropdown'),
     );
     d &&
      d.forEach(function (o) {
       o.addEventListener('click', function (c) {
        c.stopPropagation();
       });
      }),
      [].slice
       .call(
        document.querySelectorAll(
         '.kanban-board[data-id=' + t + '] .delete-task',
        ),
       )
       .forEach(function (o) {
        o.addEventListener('click', function () {
         const c = this.closest('.kanban-item').getAttribute('data-eid');
         l.removeElement(c);
        });
       }),
      a.remove();
    }),
    a.querySelector('.cancel-add-item').addEventListener('click', function (n) {
     a.remove();
    });
  },
 });
 w && new PerfectScrollbar(w);
 const m = document.querySelector('.kanban-container'),
  E = [].slice.call(document.querySelectorAll('.kanban-title-board')),
  L = [].slice.call(document.querySelectorAll('.kanban-item'));
 L &&
  L.forEach(function (e) {
   const t = "<span class='kanban-text'>" + e.textContent + '</span>';
   let a = '';
   e.getAttribute('data-image') !== null &&
    (a =
     "<img class='img-fluid rounded mb-2' src='" +
     g +
     'img/elements/' +
     e.getAttribute('data-image') +
     "'>"),
    (e.textContent = ''),
    e.getAttribute('data-badge') !== void 0 &&
     e.getAttribute('data-badge-text') !== void 0 &&
     e.insertAdjacentHTML(
      'afterbegin',
      M(e.getAttribute('data-badge'), e.getAttribute('data-badge-text')) +
       a +
       t,
     ),
    (e.getAttribute('data-comments') !== void 0 ||
     e.getAttribute('data-due-date') !== void 0 ||
     e.getAttribute('data-assigned') !== void 0) &&
     e.insertAdjacentHTML(
      'beforeend',
      D(
       e.getAttribute('data-attachments'),
       e.getAttribute('data-comments'),
       e.getAttribute('data-assigned'),
       e.getAttribute('data-members'),
      ),
     );
  }),
  [].slice
   .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   .map(function (e) {
    return new bootstrap.Tooltip(e);
   });
 const T = [].slice.call(
  document.querySelectorAll('.kanban-tasks-item-dropdown'),
 );
 T &&
  T.forEach(function (e) {
   e.addEventListener('click', function (t) {
    t.stopPropagation();
   });
  }),
  A &&
   A.addEventListener('click', () => {
    b.forEach((e) => {
     (e.value = ''), e.classList.toggle('d-none');
    });
   }),
  m && m.appendChild(u),
  E &&
   E.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
     this.contentEditable = 'true';
    }),
     e.insertAdjacentHTML('afterend', x());
   });
 const j = [].slice.call(document.querySelectorAll('.delete-board'));
 j &&
  j.forEach(function (e) {
   e.addEventListener('click', function () {
    const t = this.closest('.kanban-board').getAttribute('data-id');
    l.removeBoard(t);
   });
  });
 const B = [].slice.call(document.querySelectorAll('.delete-task'));
 B &&
  B.forEach(function (e) {
   e.addEventListener('click', function () {
    const t = this.closest('.kanban-item').getAttribute('data-eid');
    l.removeElement(t);
   });
  });
 const C = document.querySelector('.kanban-add-board-cancel-btn');
 C &&
  C.addEventListener('click', function () {
   b.forEach((e) => {
    e.classList.toggle('d-none');
   });
  }),
  u &&
   u.addEventListener('submit', function (e) {
    e.preventDefault();
    const t = this,
     a = t.querySelector('.form-control').value,
     n = a.replace(/\s+/g, '-').toLowerCase();
    l.addBoards([{ id: n, title: a }]);
    const i = document.querySelectorAll('.kanban-board:last-child')[0];
    i &&
     (i
      .querySelector('.kanban-title-board')
      .insertAdjacentHTML('afterend', x()),
     i
      .querySelector('.kanban-title-board')
      .addEventListener('mouseenter', function () {
       this.contentEditable = 'true';
      }));
    const s = i.querySelector('.delete-board');
    s &&
     s.addEventListener('click', function () {
      const d = this.closest('.kanban-board').getAttribute('data-id');
      l.removeBoard(d);
     }),
     b &&
      b.forEach((d) => {
       d.classList.add('d-none');
      }),
     m && m.appendChild(u);
   }),
  r.addEventListener('hidden.bs.offcanvas', function () {
   r.querySelector('.ql-editor').firstElementChild.innerHTML = '';
  }),
  r &&
   r.addEventListener('shown.bs.offcanvas', function () {
    [].slice
     .call(r.querySelectorAll('[data-bs-toggle="tooltip"]'))
     .map(function (t) {
      return new bootstrap.Tooltip(t);
     });
   });
})();
