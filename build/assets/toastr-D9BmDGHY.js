import { g as ie } from './_commonjsHelpers-BosuxZz1.js';
import { r as oe } from './jquery-Czc5UB_B.js';
var k = { exports: {} };
(function (m) {
 (function (D) {
  D(['jquery'], function (r) {
   return (function () {
    var i,
     C,
     O = 0,
     g = {
      error: 'error',
      info: 'info',
      success: 'success',
      warning: 'warning',
     },
     H = {
      clear: S,
      remove: A,
      error: M,
      getContainer: d,
      info: q,
      options: {},
      subscribe: P,
      success: j,
      version: '2.1.4',
      warning: F,
     },
     w;
    return H;
    function M(t, e, n) {
     return p({
      type: g.error,
      iconClass: l().iconClasses.error,
      message: t,
      optionsOverride: n,
      title: e,
     });
    }
    function d(t, e) {
     return (
      t || (t = l()),
      (i = r('#' + t.containerId)),
      i.length || (e && (i = J(t))),
      i
     );
    }
    function q(t, e, n) {
     return p({
      type: g.info,
      iconClass: l().iconClasses.info,
      message: t,
      optionsOverride: n,
      title: e,
     });
    }
    function P(t) {
     C = t;
    }
    function j(t, e, n) {
     return p({
      type: g.success,
      iconClass: l().iconClasses.success,
      message: t,
      optionsOverride: n,
      title: e,
     });
    }
    function F(t, e, n) {
     return p({
      type: g.warning,
      iconClass: l().iconClasses.warning,
      message: t,
      optionsOverride: n,
      title: e,
     });
    }
    function S(t, e) {
     var n = l();
     i || d(n), x(t, n, e) || z(n);
    }
    function A(t) {
     var e = l();
     if ((i || d(e), t && r(':focus', t).length === 0)) {
      T(t);
      return;
     }
     i.children().length && i.remove();
    }
    function z(t) {
     for (var e = i.children(), n = e.length - 1; n >= 0; n--) x(r(e[n]), t);
    }
    function x(t, e, n) {
     var c = n && n.force ? n.force : !1;
     return t && (c || r(':focus', t).length === 0)
      ? (t[e.hideMethod]({
         duration: e.hideDuration,
         easing: e.hideEasing,
         complete: function () {
          T(t);
         },
        }),
        !0)
      : !1;
    }
    function J(t) {
     return (
      (i = r('<div/>').attr('id', t.containerId).addClass(t.positionClass)),
      i.appendTo(r(t.target)),
      i
     );
    }
    function L() {
     return {
      tapToDismiss: !0,
      toastClass: 'toast',
      containerId: 'toast-container',
      debug: !1,
      showMethod: 'fadeIn',
      showDuration: 300,
      showEasing: 'swing',
      onShown: void 0,
      hideMethod: 'fadeOut',
      hideDuration: 1e3,
      hideEasing: 'swing',
      onHidden: void 0,
      closeMethod: !1,
      closeDuration: !1,
      closeEasing: !1,
      closeOnHover: !0,
      extendedTimeOut: 1e3,
      iconClasses: {
       error: 'toast-error',
       info: 'toast-info',
       success: 'toast-success',
       warning: 'toast-warning',
      },
      iconClass: 'toast-info',
      positionClass: 'toast-top-right',
      timeOut: 5e3,
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      escapeHtml: !1,
      target: 'body',
      closeHtml: '<button type="button">&times;</button>',
      closeClass: 'toast-close-button',
      newestOnTop: !0,
      preventDuplicates: !1,
      progressBar: !1,
      progressClass: 'toast-progress',
      rtl: !1,
     };
    }
    function E(t) {
     C && C(t);
    }
    function p(t) {
     var e = l(),
      n = t.iconClass || e.iconClass;
     if (
      (typeof t.optionsOverride < 'u' &&
       ((e = r.extend(e, t.optionsOverride)),
       (n = t.optionsOverride.iconClass || n)),
      _(e, t))
     )
      return;
     O++, (i = d(e, !0));
     var c = null,
      o = r('<div/>'),
      y = r('<div/>'),
      I = r('<div/>'),
      b = r('<div/>'),
      h = r(e.closeHtml),
      a = { intervalId: null, hideEta: null, maxHideTime: null },
      u = {
       toastId: O,
       state: 'visible',
       startTime: new Date(),
       options: e,
       map: t,
      };
     return Q(), G(), V(), E(u), e.debug && console && console.log(u), o;
     function B(s) {
      return (
       s == null && (s = ''),
       s
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      );
     }
     function Q() {
      K(), U(), W(), X(), Y(), Z(), N(), R();
     }
     function R() {
      var s = '';
      switch (t.iconClass) {
       case 'toast-success':
       case 'toast-info':
        s = 'polite';
        break;
       default:
        s = 'assertive';
      }
      o.attr('aria-live', s);
     }
     function V() {
      e.closeOnHover && o.hover(ee, $),
       !e.onclick && e.tapToDismiss && o.click(f),
       e.closeButton &&
        h &&
        h.click(function (s) {
         s.stopPropagation
          ? s.stopPropagation()
          : s.cancelBubble !== void 0 &&
            s.cancelBubble !== !0 &&
            (s.cancelBubble = !0),
          e.onCloseClick && e.onCloseClick(s),
          f(!0);
        }),
       e.onclick &&
        o.click(function (s) {
         e.onclick(s), f();
        });
     }
     function G() {
      o.hide(),
       o[e.showMethod]({
        duration: e.showDuration,
        easing: e.showEasing,
        complete: e.onShown,
       }),
       e.timeOut > 0 &&
        ((c = setTimeout(f, e.timeOut)),
        (a.maxHideTime = parseFloat(e.timeOut)),
        (a.hideEta = new Date().getTime() + a.maxHideTime),
        e.progressBar && (a.intervalId = setInterval(te, 10)));
     }
     function K() {
      t.iconClass && o.addClass(e.toastClass).addClass(n);
     }
     function N() {
      e.newestOnTop ? i.prepend(o) : i.append(o);
     }
     function U() {
      if (t.title) {
       var s = t.title;
       e.escapeHtml && (s = B(t.title)),
        y.append(s).addClass(e.titleClass),
        o.append(y);
      }
     }
     function W() {
      if (t.message) {
       var s = t.message;
       e.escapeHtml && (s = B(t.message)),
        I.append(s).addClass(e.messageClass),
        o.append(I);
      }
     }
     function X() {
      e.closeButton &&
       (h.addClass(e.closeClass).attr('role', 'button'), o.prepend(h));
     }
     function Y() {
      e.progressBar && (b.addClass(e.progressClass), o.prepend(b));
     }
     function Z() {
      e.rtl && o.addClass('rtl');
     }
     function _(s, v) {
      if (s.preventDuplicates) {
       if (v.message === w) return !0;
       w = v.message;
      }
      return !1;
     }
     function f(s) {
      var v = s && e.closeMethod !== !1 ? e.closeMethod : e.hideMethod,
       se = s && e.closeDuration !== !1 ? e.closeDuration : e.hideDuration,
       ne = s && e.closeEasing !== !1 ? e.closeEasing : e.hideEasing;
      if (!(r(':focus', o).length && !s))
       return (
        clearTimeout(a.intervalId),
        o[v]({
         duration: se,
         easing: ne,
         complete: function () {
          T(o),
           clearTimeout(c),
           e.onHidden && u.state !== 'hidden' && e.onHidden(),
           (u.state = 'hidden'),
           (u.endTime = new Date()),
           E(u);
         },
        })
       );
     }
     function $() {
      (e.timeOut > 0 || e.extendedTimeOut > 0) &&
       ((c = setTimeout(f, e.extendedTimeOut)),
       (a.maxHideTime = parseFloat(e.extendedTimeOut)),
       (a.hideEta = new Date().getTime() + a.maxHideTime));
     }
     function ee() {
      clearTimeout(c),
       (a.hideEta = 0),
       o
        .stop(!0, !0)
        [e.showMethod]({ duration: e.showDuration, easing: e.showEasing });
     }
     function te() {
      var s = ((a.hideEta - new Date().getTime()) / a.maxHideTime) * 100;
      b.width(s + '%');
     }
    }
    function l() {
     return r.extend({}, L(), H.options);
    }
    function T(t) {
     i || (i = d()),
      !t.is(':visible') &&
       (t.remove(),
       (t = null),
       i.children().length === 0 && (i.remove(), (w = void 0)));
    }
   })();
  });
 })(function (D, r) {
  m.exports ? (m.exports = r(oe())) : (window.toastr = r(window.jQuery));
 });
})(k);
var re = k.exports;
const ae = ie(re);
try {
 window.toastr = ae;
} catch {}