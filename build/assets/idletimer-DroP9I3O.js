/*! Idle Timer - v1.1.1 - 2020-06-25
 * https://github.com/thorst/jquery-idletimer
 * Copyright (c) 2020 Paul Irish; Licensed MIT */ (function (n) {
 (n.idleTimer = function (t, l) {
  var d;
  typeof t == 'object'
   ? ((d = t), (t = null))
   : typeof t == 'number' && ((d = { timeout: t }), (t = null)),
   (l = l || document),
   (d = n.extend(
    {
     idle: !1,
     timeout: 3e4,
     events:
      'mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove',
    },
    d,
   ));
  var o = n(l),
   u = o.data('idleTimerObj') || {},
   r = function (e) {
    var i = n.data(l, 'idleTimerObj') || {};
    (i.idle = !i.idle), (i.olddate = +new Date());
    var a = n.Event((i.idle ? 'idle' : 'active') + '.idleTimer');
    n(l).trigger(a, [l, n.extend({}, i), e]);
   },
   f = function (e) {
    var i = n.data(l, 'idleTimerObj') || {};
    if (
     !(e.type === 'storage' && e.originalEvent.key !== i.timerSyncId) &&
     i.remaining == null
    ) {
     if (e.type === 'mousemove') {
      if (
       (e.pageX === i.pageX && e.pageY === i.pageY) ||
       (typeof e.pageX > 'u' && typeof e.pageY > 'u')
      )
       return;
      var a = +new Date() - i.olddate;
      if (a < 200) return;
     }
     clearTimeout(i.tId),
      i.idle && r(e),
      (i.lastActive = +new Date()),
      (i.pageX = e.pageX),
      (i.pageY = e.pageY),
      e.type !== 'storage' &&
       i.timerSyncId &&
       typeof localStorage < 'u' &&
       localStorage.setItem(i.timerSyncId, i.lastActive),
      (i.tId = setTimeout(r, i.timeout));
    }
   },
   m = function () {
    var e = n.data(l, 'idleTimerObj') || {};
    (e.idle = e.idleBackup),
     (e.olddate = +new Date()),
     (e.lastActive = e.olddate),
     (e.remaining = null),
     clearTimeout(e.tId),
     e.idle || (e.tId = setTimeout(r, e.timeout));
   },
   c = function () {
    var e = n.data(l, 'idleTimerObj') || {};
    e.remaining == null &&
     ((e.remaining = e.timeout - (+new Date() - e.olddate)),
     clearTimeout(e.tId));
   },
   g = function () {
    var e = n.data(l, 'idleTimerObj') || {};
    e.remaining != null &&
     (e.idle || (e.tId = setTimeout(r, e.remaining)), (e.remaining = null));
   },
   s = function () {
    var e = n.data(l, 'idleTimerObj') || {};
    clearTimeout(e.tId), o.removeData('idleTimerObj'), o.off('._idleTimer');
   },
   v = function () {
    var e = n.data(l, 'idleTimerObj') || {};
    if (e.idle) return 0;
    if (e.remaining != null) return e.remaining;
    var i = e.timeout - (+new Date() - e.lastActive);
    return i < 0 && (i = 0), i;
   };
  if (t === null && typeof u.idle < 'u') return m(), o;
  if (t !== null) {
   if (t !== null && typeof u.idle > 'u') return !1;
   if (t === 'destroy') return s(), o;
   if (t === 'pause') return c(), o;
   if (t === 'resume') return g(), o;
   if (t === 'reset') return m(), o;
   if (t === 'getRemainingTime') return v();
   if (t === 'getElapsedTime') return +new Date() - u.olddate;
   if (t === 'getLastActiveTime') return u.lastActive;
   if (t === 'isIdle') return u.idle;
  }
  return (
   o.on((d.events + ' ').split(' ').join('._idleTimer ').trim(), function (e) {
    f(e);
   }),
   d.timerSyncId && n(window).on('storage', f),
   (u = n.extend(
    {},
    {
     olddate: +new Date(),
     lastActive: +new Date(),
     idle: d.idle,
     idleBackup: d.idle,
     timeout: d.timeout,
     remaining: null,
     timerSyncId: d.timerSyncId,
     tId: null,
     pageX: null,
     pageY: null,
    },
   )),
   u.idle || (u.tId = setTimeout(r, u.timeout)),
   n.data(l, 'idleTimerObj', u),
   o
  );
 }),
  (n.fn.idleTimer = function (t) {
   return this[0] ? n.idleTimer(t, this[0]) : this;
  });
})(jQuery);
