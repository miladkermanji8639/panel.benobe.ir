import { c as W } from './_commonjsHelpers-BosuxZz1.js';
import { c as ne } from './_commonjs-dynamic-modules-TDtrdbi3.js';
(function () {
 function S(L, k, c) {
  function e(y, g) {
   if (!k[y]) {
    if (!L[y]) {
     var f = typeof ne == 'function' && ne;
     if (!g && f) return f(y, !0);
     if (p) return p(y, !0);
     var s = new Error("Cannot find module '" + y + "'");
     throw ((s.code = 'MODULE_NOT_FOUND'), s);
    }
    var d = (k[y] = { exports: {} });
    L[y][0].call(
     d.exports,
     function (b) {
      var B = L[y][1][b];
      return e(B || b);
     },
     d,
     d.exports,
     S,
     L,
     k,
     c,
    );
   }
   return k[y].exports;
  }
  for (var p = typeof ne == 'function' && ne, u = 0; u < c.length; u++) e(c[u]);
  return e;
 }
 return S;
})()(
 {
  1: [
   function (S, L, k) {
    var c = S('dragula');
    (function () {
     window.jKanban = function () {
      var e = this,
       p = { enabled: !1 },
       u = { enabled: !1 };
      (this._disallowedItemProperties = [
       'id',
       'title',
       'click',
       'drag',
       'dragend',
       'drop',
       'order',
      ]),
       (this.element = ''),
       (this.container = ''),
       (this.boardContainer = []),
       (this.handlers = []),
       (this.dragula = c),
       (this.drake = ''),
       (this.drakeBoard = ''),
       (this.itemAddOptions = u),
       (this.itemHandleOptions = p);
      var y = {
       element: '',
       gutter: '15px',
       widthBoard: '250px',
       responsive: '700',
       responsivePercentage: !1,
       boards: [],
       dragBoards: !0,
       dragItems: !0,
       itemAddOptions: u,
       itemHandleOptions: p,
       dragEl: function (t, n) {},
       dragendEl: function (t) {},
       dropEl: function (t, n, i, a) {},
       dragBoard: function (t, n) {},
       dragendBoard: function (t) {},
       dropBoard: function (t, n, i, a) {},
       click: function (t) {},
       buttonClick: function (t, n) {},
      };
      arguments[0] &&
       typeof arguments[0] == 'object' &&
       (this.options = g(y, arguments[0])),
       (this.__getCanMove = function (t) {
        return e.options.itemHandleOptions.enabled
         ? e.options.itemHandleOptions.handleClass
           ? t.classList.contains(e.options.itemHandleOptions.handleClass)
           : t.classList.contains('item_handle')
         : !!e.options.dragItems;
       }),
       (this.init = function () {
        f(),
         window.innerWidth > e.options.responsive &&
          ((e.drakeBoard = e
           .dragula([e.container], {
            moves: function (t, n, i, a) {
             return e.options.dragBoards
              ? i.classList.contains('kanban-board-header') ||
                 i.classList.contains('kanban-title-board')
              : !1;
            },
            accepts: function (t, n, i, a) {
             return n.classList.contains('kanban-container');
            },
            revertOnSpill: !0,
            direction: 'horizontal',
           })
           .on('drag', function (t, n) {
            t.classList.add('is-moving'),
             e.options.dragBoard(t, n),
             typeof t.dragfn == 'function' && t.dragfn(t, n);
           })
           .on('dragend', function (t) {
            z(),
             t.classList.remove('is-moving'),
             e.options.dragendBoard(t),
             typeof t.dragendfn == 'function' && t.dragendfn(t);
           })
           .on('drop', function (t, n, i, a) {
            t.classList.remove('is-moving'),
             e.options.dropBoard(t, n, i, a),
             typeof t.dropfn == 'function' && t.dropfn(t, n, i, a);
           })),
          (e.drake = e
           .dragula(e.boardContainer, {
            moves: function (t, n, i, a) {
             return e.__getCanMove(i);
            },
            revertOnSpill: !0,
           })
           .on('cancel', function (t, n, i) {
            e.enableAllBoards();
           })
           .on('drag', function (t, n) {
            var i = t.getAttribute('class');
            if (i !== '' && i.indexOf('not-draggable') > -1) {
             e.drake.cancel(!0);
             return;
            }
            t.classList.add('is-moving'), e.options.dragEl(t, n);
            var a = b(n.parentNode.dataset.id);
            a.dragTo !== void 0 &&
             e.options.boards.map(function (m) {
              a.dragTo.indexOf(m.id) === -1 &&
               m.id !== n.parentNode.dataset.id &&
               e.findBoard(m.id).classList.add('disabled-board');
             }),
             t !== null && typeof t.dragfn == 'function' && t.dragfn(t, n);
           })
           .on('dragend', function (t) {
            e.options.dragendEl(t),
             t !== null && typeof t.dragendfn == 'function' && t.dragendfn(t);
           })
           .on('drop', function (t, n, i, a) {
            e.enableAllBoards();
            var m = b(i.parentNode.dataset.id);
            if (
             (m.dragTo !== void 0 &&
              m.dragTo.indexOf(n.parentNode.dataset.id) === -1 &&
              n.parentNode.dataset.id !== i.parentNode.dataset.id &&
              e.drake.cancel(!0),
             t !== null)
            ) {
             var x = e.options.dropEl(t, n, i, a);
             x === !1 && e.drake.cancel(!0),
              t.classList.remove('is-moving'),
              typeof t.dropfn == 'function' && t.dropfn(t, n, i, a);
            }
           })));
       }),
       (this.enableAllBoards = function () {
        var t = document.querySelectorAll('.kanban-board');
        if (t.length > 0 && t !== void 0)
         for (var n = 0; n < t.length; n++)
          t[n].classList.remove('disabled-board');
       }),
       (this.addElement = function (t, n) {
        var i = e.element.querySelector('[data-id="' + t + '"] .kanban-drag'),
         a = document.createElement('div');
        return (
         a.classList.add('kanban-item'),
         typeof n.id < 'u' && n.id !== '' && a.setAttribute('data-eid', n.id),
         n.class &&
          Array.isArray(n.class) &&
          n.class.forEach(function (m) {
           a.classList.add(m);
          }),
         (a.innerHTML = q(n.title)),
         (a.clickfn = n.click),
         (a.dragfn = n.drag),
         (a.dragendfn = n.dragend),
         (a.dropfn = n.drop),
         B(a, n),
         s(a),
         e.options.itemHandleOptions.enabled && (a.style.cursor = 'default'),
         i.appendChild(a),
         e
        );
       }),
       (this.addForm = function (t, n) {
        var i = e.element.querySelector('[data-id="' + t + '"] .kanban-drag'),
         a = n.getAttribute('class');
        return (
         n.setAttribute('class', a + ' not-draggable'), i.appendChild(n), e
        );
       }),
       (this.addBoards = function (t, n) {
        if (e.options.responsivePercentage)
         if (
          ((e.container.style.width = '100%'),
          (e.options.gutter = '1%'),
          window.innerWidth > e.options.responsive)
         )
          var i = (100 - t.length * 2) / t.length;
         else var i = 100 - t.length * 2;
        else var i = e.options.widthBoard;
        var a = e.options.itemAddOptions.enabled,
         m = e.options.itemAddOptions.content,
         x = e.options.itemAddOptions.class,
         T = e.options.itemAddOptions.footer;
        for (var Y in t) {
         var w = t[Y];
         n || e.options.boards.push(w),
          e.options.responsivePercentage ||
           (e.container.style.width === ''
            ? (e.container.style.width =
               parseInt(i) + parseInt(e.options.gutter) * 2 + 'px')
            : (e.container.style.width =
               parseInt(e.container.style.width) +
               parseInt(i) +
               parseInt(e.options.gutter) * 2 +
               'px'));
         var o = document.createElement('div');
         (o.dataset.id = w.id),
          (o.dataset.order = e.container.childNodes.length + 1),
          o.classList.add('kanban-board'),
          e.options.responsivePercentage
           ? (o.style.width = i + '%')
           : (o.style.width = i),
          (o.style.marginLeft = e.options.gutter),
          (o.style.marginRight = e.options.gutter);
         var _ = document.createElement('header');
         if (w.class !== '' && w.class !== void 0) var I = w.class.split(',');
         else I = [];
         _.classList.add('kanban-board-header'),
          I.map(function (F) {
           (F = F.replace(/^[ ]+/g, '')), _.classList.add(F);
          }),
          (_.innerHTML =
           '<div class="kanban-title-board">' + w.title + '</div>');
         var E = document.createElement('main');
         if (
          (E.classList.add('kanban-drag'),
          w.bodyClass !== '' && w.bodyClass !== void 0)
         )
          var O = w.bodyClass.split(',');
         else O = [];
         O.map(function (F) {
          E.classList.add(F);
         }),
          e.boardContainer.push(E);
         for (var N in w.item) {
          var M = w.item[N],
           D = document.createElement('div');
          D.classList.add('kanban-item'),
           M.id && (D.dataset.eid = M.id),
           M.class &&
            Array.isArray(M.class) &&
            M.class.forEach(function (F) {
             D.classList.add(F);
            }),
           (D.innerHTML = q(M.title)),
           (D.clickfn = M.click),
           (D.dragfn = M.drag),
           (D.dragendfn = M.dragend),
           (D.dropfn = M.drop),
           B(D, M),
           s(D),
           e.options.itemHandleOptions.enabled && (D.style.cursor = 'default'),
           E.appendChild(D);
         }
         var ee = document.createElement('footer');
         if (a) {
          var G = document.createElement('BUTTON'),
           V = document.createTextNode(m || '+');
          G.setAttribute(
           'class',
           x || 'kanban-title-button btn btn-default btn-xs',
          ),
           G.appendChild(V),
           T ? ee.appendChild(G) : _.appendChild(G),
           d(G, w.id);
         }
         o.appendChild(_),
          o.appendChild(E),
          o.appendChild(ee),
          e.container.appendChild(o);
        }
        return e;
       }),
       (this.findBoard = function (t) {
        var n = e.element.querySelector('[data-id="' + t + '"]');
        return n;
       }),
       (this.getParentBoardID = function (t) {
        return (
         typeof t == 'string' &&
          (t = e.element.querySelector('[data-eid="' + t + '"]')),
         t === null ? null : t.parentNode.parentNode.dataset.id
        );
       }),
       (this.moveElement = function (t, n, i) {
        if (t !== this.getParentBoardID(n))
         return this.removeElement(n), this.addElement(t, i);
       }),
       (this.replaceElement = function (t, n) {
        var i = t;
        return (
         typeof i == 'string' &&
          (i = e.element.querySelector('[data-eid="' + t + '"]')),
         (i.innerHTML = n.title),
         (i.clickfn = n.click),
         (i.dragfn = n.drag),
         (i.dragendfn = n.dragend),
         (i.dropfn = n.drop),
         B(i, n),
         e
        );
       }),
       (this.findElement = function (t) {
        var n = e.element.querySelector('[data-eid="' + t + '"]');
        return n;
       }),
       (this.getBoardElements = function (t) {
        var n = e.element.querySelector('[data-id="' + t + '"] .kanban-drag');
        return n.childNodes;
       }),
       (this.removeElement = function (t) {
        return (
         typeof t == 'string' &&
          (t = e.element.querySelector('[data-eid="' + t + '"]')),
         t !== null &&
          (typeof t.remove == 'function'
           ? t.remove()
           : t.parentNode.removeChild(t)),
         e
        );
       }),
       (this.removeBoard = function (t) {
        var n = null;
        typeof t == 'string' &&
         (n = e.element.querySelector('[data-id="' + t + '"]')),
         n !== null &&
          (typeof n.remove == 'function'
           ? n.remove()
           : n.parentNode.removeChild(n));
        for (var i = 0; i < e.options.boards.length; i++)
         if (e.options.boards[i].id === t) {
          e.options.boards.splice(i, 1);
          break;
         }
        return e;
       }),
       (this.onButtonClick = function (t) {});
      function g(t, n) {
       var i;
       for (i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
       return t;
      }
      function f() {
       e.element = document.querySelector(e.options.element);
       var t = document.createElement('div');
       t.classList.add('kanban-container'),
        (e.container = t),
        document
         .querySelector(e.options.element)
         .dataset.hasOwnProperty('board')
         ? ((url = document.querySelector(e.options.element).dataset.board),
           window
            .fetch(url, {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' },
            })
            .then((n) => {
             n.json().then(function (i) {
              (e.options.boards = i), e.addBoards(e.options.boards, !0);
             });
            })
            .catch((n) => {
             console.log('Error: ', n);
            }))
         : e.addBoards(e.options.boards, !0),
        e.element.appendChild(e.container);
      }
      function s(t, n) {
       t.addEventListener('click', function (i) {
        i.preventDefault(),
         e.options.click(this),
         typeof this.clickfn == 'function' && this.clickfn(this);
       });
      }
      function d(t, n) {
       t.addEventListener('click', function (i) {
        i.preventDefault(), e.options.buttonClick(this, n);
       });
      }
      function b(t) {
       var n = [];
       return (
        e.options.boards.map(function (i) {
         if (i.id === t) return n.push(i);
        }),
        n[0]
       );
      }
      function B(t, n) {
       for (var i in n)
        e._disallowedItemProperties.indexOf(i) > -1 ||
         t.setAttribute('data-' + i, n[i]);
      }
      function z() {
       for (var t = 1, n = 0; n < e.container.childNodes.length; n++)
        e.container.childNodes[n].dataset.order = t++;
      }
      function q(t) {
       var n = t;
       if (e.options.itemHandleOptions.enabled)
        if ((e.options.itemHandleOptions.customHandler || void 0) === void 0) {
         var i = e.options.itemHandleOptions.customCssHandler,
          a = e.options.itemHandleOptions.customCssIconHandler;
         (i || void 0) === void 0 && (i = 'drag_handler'),
          (a || void 0) === void 0 && (a = i + '_icon'),
          (n =
           "<div class='item_handle " +
           i +
           "'><i class='item_handle " +
           a +
           "'></i></div><div>" +
           n +
           '</div>');
        } else n = e.options.itemHandleOptions.customHandler.replace('%s', n);
       return n;
      }
      this.init();
     };
    })();
   },
   { dragula: 9 },
  ],
  2: [
   function (S, L, k) {
    L.exports = function (e, p) {
     return Array.prototype.slice.call(e, p);
    };
   },
   {},
  ],
  3: [
   function (S, L, k) {
    var c = S('ticky');
    L.exports = function (p, u, y) {
     p &&
      c(function () {
       p.apply(y || null, u || []);
      });
    };
   },
   { ticky: 11 },
  ],
  4: [
   function (S, L, k) {
    var c = S('atoa'),
     e = S('./debounce');
    L.exports = function (u, y) {
     var g = y || {},
      f = {};
     return (
      u === void 0 && (u = {}),
      (u.on = function (s, d) {
       return f[s] ? f[s].push(d) : (f[s] = [d]), u;
      }),
      (u.once = function (s, d) {
       return (d._once = !0), u.on(s, d), u;
      }),
      (u.off = function (s, d) {
       var b = arguments.length;
       if (b === 1) delete f[s];
       else if (b === 0) f = {};
       else {
        var B = f[s];
        if (!B) return u;
        B.splice(B.indexOf(d), 1);
       }
       return u;
      }),
      (u.emit = function () {
       var s = c(arguments);
       return u.emitterSnapshot(s.shift()).apply(this, s);
      }),
      (u.emitterSnapshot = function (s) {
       var d = (f[s] || []).slice(0);
       return function () {
        var b = c(arguments),
         B = this || u;
        if (s === 'error' && g.throws !== !1 && !d.length)
         throw b.length === 1 ? b[0] : b;
        return (
         d.forEach(function (q) {
          g.async ? e(q, b, B) : q.apply(B, b), q._once && u.off(s, q);
         }),
         u
        );
       };
      }),
      u
     );
    };
   },
   { './debounce': 3, atoa: 2 },
  ],
  5: [
   function (S, L, k) {
    (function (c) {
     (function () {
      var e = S('custom-event'),
       p = S('./eventmap'),
       u = c.document,
       y = s,
       g = b,
       f = [];
      c.addEventListener || ((y = d), (g = B)),
       (L.exports = { add: y, remove: g, fabricate: z });
      function s(a, m, x, T) {
       return a.addEventListener(m, x, T);
      }
      function d(a, m, x) {
       return a.attachEvent('on' + m, t(a, m, x));
      }
      function b(a, m, x, T) {
       return a.removeEventListener(m, x, T);
      }
      function B(a, m, x) {
       var T = n(a, m, x);
       if (T) return a.detachEvent('on' + m, T);
      }
      function z(a, m, x) {
       var T = p.indexOf(m) === -1 ? w() : Y();
       a.dispatchEvent ? a.dispatchEvent(T) : a.fireEvent('on' + m, T);
       function Y() {
        var o;
        return (
         u.createEvent
          ? ((o = u.createEvent('Event')), o.initEvent(m, !0, !0))
          : u.createEventObject && (o = u.createEventObject()),
         o
        );
       }
       function w() {
        return new e(m, { detail: x });
       }
      }
      function q(a, m, x) {
       return function (Y) {
        var w = Y || c.event;
        (w.target = w.target || w.srcElement),
         (w.preventDefault =
          w.preventDefault ||
          function () {
           w.returnValue = !1;
          }),
         (w.stopPropagation =
          w.stopPropagation ||
          function () {
           w.cancelBubble = !0;
          }),
         (w.which = w.which || w.keyCode),
         x.call(a, w);
       };
      }
      function t(a, m, x) {
       var T = n(a, m, x) || q(a, m, x);
       return f.push({ wrapper: T, element: a, type: m, fn: x }), T;
      }
      function n(a, m, x) {
       var T = i(a, m, x);
       if (T) {
        var Y = f[T].wrapper;
        return f.splice(T, 1), Y;
       }
      }
      function i(a, m, x) {
       var T, Y;
       for (T = 0; T < f.length; T++)
        if (((Y = f[T]), Y.element === a && Y.type === m && Y.fn === x))
         return T;
      }
     }).call(this);
    }).call(
     this,
     typeof W < 'u'
      ? W
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : {},
    );
   },
   { './eventmap': 6, 'custom-event': 7 },
  ],
  6: [
   function (S, L, k) {
    (function (c) {
     (function () {
      var e = [],
       p = '',
       u = /^on/;
      for (p in c) u.test(p) && e.push(p.slice(2));
      L.exports = e;
     }).call(this);
    }).call(
     this,
     typeof W < 'u'
      ? W
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : {},
    );
   },
   {},
  ],
  7: [
   function (S, L, k) {
    (function (c) {
     (function () {
      var e = c.CustomEvent;
      function p() {
       try {
        var u = new e('cat', { detail: { foo: 'bar' } });
        return u.type === 'cat' && u.detail.foo === 'bar';
       } catch {}
       return !1;
      }
      L.exports = p()
       ? e
       : typeof document < 'u' && typeof document.createEvent == 'function'
         ? function (y, g) {
            var f = document.createEvent('CustomEvent');
            return (
             g
              ? f.initCustomEvent(y, g.bubbles, g.cancelable, g.detail)
              : f.initCustomEvent(y, !1, !1, void 0),
             f
            );
           }
         : function (y, g) {
            var f = document.createEventObject();
            return (
             (f.type = y),
             g
              ? ((f.bubbles = !!g.bubbles),
                (f.cancelable = !!g.cancelable),
                (f.detail = g.detail))
              : ((f.bubbles = !1), (f.cancelable = !1), (f.detail = void 0)),
             f
            );
           };
     }).call(this);
    }).call(
     this,
     typeof W < 'u'
      ? W
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : {},
    );
   },
   {},
  ],
  8: [
   function (S, L, k) {
    var c = {},
     e = '(?:^|\\s)',
     p = '(?:\\s|$)';
    function u(f) {
     var s = c[f];
     return s ? (s.lastIndex = 0) : (c[f] = s = new RegExp(e + f + p, 'g')), s;
    }
    function y(f, s) {
     var d = f.className;
     d.length ? u(s).test(d) || (f.className += ' ' + s) : (f.className = s);
    }
    function g(f, s) {
     f.className = f.className.replace(u(s), ' ').trim();
    }
    L.exports = { add: y, rm: g };
   },
   {},
  ],
  9: [
   function (S, L, k) {
    (function (c) {
     (function () {
      var e = S('contra/emitter'),
       p = S('crossvent'),
       u = S('./classes'),
       y = document,
       g = y.documentElement;
      function f(o, _) {
       var I = arguments.length;
       I === 1 && Array.isArray(o) === !1 && ((_ = o), (o = []));
       var E,
        O,
        N,
        M,
        D,
        ee,
        G,
        V,
        F,
        P,
        re,
        $ = null,
        te,
        v = _ || {};
       v.moves === void 0 && (v.moves = t),
        v.accepts === void 0 && (v.accepts = t),
        v.invalid === void 0 && (v.invalid = xe),
        v.containers === void 0 && (v.containers = o || []),
        v.isContainer === void 0 && (v.isContainer = q),
        v.copy === void 0 && (v.copy = !1),
        v.copySortSource === void 0 && (v.copySortSource = !1),
        v.revertOnSpill === void 0 && (v.revertOnSpill = !1),
        v.removeOnSpill === void 0 && (v.removeOnSpill = !1),
        v.direction === void 0 && (v.direction = 'vertical'),
        v.ignoreInputTextSelection === void 0 &&
         (v.ignoreInputTextSelection = !0),
        v.mirrorContainer === void 0 && (v.mirrorContainer = y.body);
       var A = e({
        containers: v.containers,
        start: ke,
        end: me,
        cancel: be,
        remove: ye,
        destroy: _e,
        canMove: Se,
        dragging: !1,
       });
       return v.removeOnSpill === !0 && A.on('over', Le).on('out', Be), le(), A;
       function ie(r) {
        return A.containers.indexOf(r) !== -1 || v.isContainer(r);
       }
       function le(r) {
        var l = r ? 'remove' : 'add';
        s(g, l, 'mousedown', Ce), s(g, l, 'mouseup', ue);
       }
       function oe(r) {
        var l = r ? 'remove' : 'add';
        s(g, l, 'mousemove', Oe);
       }
       function fe(r) {
        var l = r ? 'remove' : 'add';
        p[l](g, 'selectstart', ve), p[l](g, 'click', ve);
       }
       function _e() {
        le(!0), ue({});
       }
       function ve(r) {
        te && r.preventDefault();
       }
       function Ce(r) {
        (ee = r.clientX), (G = r.clientY);
        var l = d(r) !== 1 || r.metaKey || r.ctrlKey;
        if (!l) {
         var h = r.target,
          C = ae(h);
         C &&
          ((te = C),
          oe(),
          r.type === 'mousedown' && (m(h) ? h.focus() : r.preventDefault()));
        }
       }
       function Oe(r) {
        if (te) {
         if (d(r) === 0) {
          ue({});
          return;
         }
         if (
          !(
           r.clientX !== void 0 &&
           Math.abs(r.clientX - ee) <= (v.slideFactorX || 0) &&
           r.clientY !== void 0 &&
           Math.abs(r.clientY - G) <= (v.slideFactorY || 0)
          )
         ) {
          if (v.ignoreInputTextSelection) {
           var l = w('clientX', r) || 0,
            h = w('clientY', r) || 0,
            C = y.elementFromPoint(l, h);
           if (m(C)) return;
          }
          var R = te;
          oe(!0), fe(), me(), pe(R);
          var H = b(N);
          (M = w('pageX', r) - H.left),
           (D = w('pageY', r) - H.top),
           u.add(P || N, 'gu-transit'),
           Ae(),
           de(r);
         }
        }
       }
       function ae(r) {
        if (!(A.dragging && E) && !ie(r)) {
         for (var l = r; a(r) && ie(a(r)) === !1; )
          if (v.invalid(r, l) || ((r = a(r)), !r)) return;
         var h = a(r);
         if (h && !v.invalid(r, l)) {
          var C = v.moves(r, h, l, T(r));
          if (C) return { item: r, source: h };
         }
        }
       }
       function Se(r) {
        return !!ae(r);
       }
       function ke(r) {
        var l = ae(r);
        l && pe(l);
       }
       function pe(r) {
        Ne(r.item, r.source) &&
         ((P = r.item.cloneNode(!0)), A.emit('cloned', P, r.item, 'copy')),
         (O = r.source),
         (N = r.item),
         (V = F = T(r.item)),
         (A.dragging = !0),
         A.emit('drag', N, O);
       }
       function xe() {
        return !1;
       }
       function me() {
        if (A.dragging) {
         var r = P || N;
         ge(r, a(r));
        }
       }
       function he() {
        (te = !1), oe(!0), fe(!0);
       }
       function ue(r) {
        if ((he(), !!A.dragging)) {
         var l = P || N,
          h = w('clientX', r) || 0,
          C = w('clientY', r) || 0,
          R = z(E, h, C),
          H = we(R, h, C);
         H && ((P && v.copySortSource) || !P || H !== O)
          ? ge(l, H)
          : v.removeOnSpill
            ? ye()
            : be();
        }
       }
       function ge(r, l) {
        var h = a(r);
        P && v.copySortSource && l === O && h.removeChild(N),
         ce(l) ? A.emit('cancel', r, O, O) : A.emit('drop', r, l, O, F),
         se();
       }
       function ye() {
        if (A.dragging) {
         var r = P || N,
          l = a(r);
         l && l.removeChild(r), A.emit(P ? 'cancel' : 'remove', r, l, O), se();
        }
       }
       function be(r) {
        if (A.dragging) {
         var l = arguments.length > 0 ? r : v.revertOnSpill,
          h = P || N,
          C = a(h),
          R = ce(C);
         R === !1 && l && (P ? C && C.removeChild(P) : O.insertBefore(h, V)),
          R || l ? A.emit('cancel', h, O, O) : A.emit('drop', h, C, O, F),
          se();
        }
       }
       function se() {
        var r = P || N;
        he(),
         Ie(),
         r && u.rm(r, 'gu-transit'),
         re && clearTimeout(re),
         (A.dragging = !1),
         $ && A.emit('out', r, $, O),
         A.emit('dragend', r),
         (O = N = P = V = F = re = $ = null);
       }
       function ce(r, l) {
        var h;
        return (
         l !== void 0 ? (h = l) : E ? (h = F) : (h = T(P || N)),
         r === O && h === V
        );
       }
       function we(r, l, h) {
        for (var C = r; C && !R(); ) C = a(C);
        return C;
        function R() {
         var H = ie(C);
         if (H === !1) return !1;
         var K = Ee(C, r),
          X = Te(C, K, l, h),
          J = ce(C, X);
         return J ? !0 : v.accepts(N, C, O, X);
        }
       }
       function de(r) {
        if (!E) return;
        r.preventDefault();
        var l = w('clientX', r) || 0,
         h = w('clientY', r) || 0,
         C = l - M,
         R = h - D;
        (E.style.left = C + 'px'), (E.style.top = R + 'px');
        var H = P || N,
         K = z(E, l, h),
         X = we(K, l, h),
         J = X !== null && X !== $;
        (J || X === null) && (He(), ($ = X), Pe());
        var j = a(H);
        if (X === O && P && !v.copySortSource) {
         j && j.removeChild(H);
         return;
        }
        var U,
         Z = Ee(X, K);
        if (Z !== null) U = Te(X, Z, l, h);
        else if (v.revertOnSpill === !0 && !P) (U = V), (X = O);
        else {
         P && j && j.removeChild(H);
         return;
        }
        ((U === null && J) || (U !== H && U !== T(H))) &&
         ((F = U), X.insertBefore(H, U), A.emit('shadow', H, X, O));
        function Q(Me) {
         A.emit(Me, H, $, O);
        }
        function Pe() {
         J && Q('over');
        }
        function He() {
         $ && Q('out');
        }
       }
       function Le(r) {
        u.rm(r, 'gu-hide');
       }
       function Be(r) {
        A.dragging && u.add(r, 'gu-hide');
       }
       function Ae() {
        if (!E) {
         var r = N.getBoundingClientRect();
         (E = N.cloneNode(!0)),
          (E.style.width = n(r) + 'px'),
          (E.style.height = i(r) + 'px'),
          u.rm(E, 'gu-transit'),
          u.add(E, 'gu-mirror'),
          v.mirrorContainer.appendChild(E),
          s(g, 'add', 'mousemove', de),
          u.add(v.mirrorContainer, 'gu-unselectable'),
          A.emit('cloned', E, N, 'mirror');
        }
       }
       function Ie() {
        E &&
         (u.rm(v.mirrorContainer, 'gu-unselectable'),
         s(g, 'remove', 'mousemove', de),
         a(E).removeChild(E),
         (E = null));
       }
       function Ee(r, l) {
        for (var h = l; h !== r && a(h) !== r; ) h = a(h);
        return h === g ? null : h;
       }
       function Te(r, l, h, C) {
        var R = v.direction === 'horizontal',
         H = l !== r ? X() : K();
        return H;
        function K() {
         var j = r.children.length,
          U,
          Z,
          Q;
         for (U = 0; U < j; U++)
          if (
           ((Z = r.children[U]),
           (Q = Z.getBoundingClientRect()),
           (R && Q.left + Q.width / 2 > h) || (!R && Q.top + Q.height / 2 > C))
          )
           return Z;
         return null;
        }
        function X() {
         var j = l.getBoundingClientRect();
         return J(R ? h > j.left + n(j) / 2 : C > j.top + i(j) / 2);
        }
        function J(j) {
         return j ? T(l) : l;
        }
       }
       function Ne(r, l) {
        return typeof v.copy == 'boolean' ? v.copy : v.copy(r, l);
       }
      }
      function s(o, _, I, E) {
       var O = {
         mouseup: 'touchend',
         mousedown: 'touchstart',
         mousemove: 'touchmove',
        },
        N = {
         mouseup: 'pointerup',
         mousedown: 'pointerdown',
         mousemove: 'pointermove',
        },
        M = {
         mouseup: 'MSPointerUp',
         mousedown: 'MSPointerDown',
         mousemove: 'MSPointerMove',
        };
       c.navigator.pointerEnabled
        ? p[_](o, N[I], E)
        : c.navigator.msPointerEnabled
          ? p[_](o, M[I], E)
          : (p[_](o, O[I], E), p[_](o, I, E));
      }
      function d(o) {
       if (o.touches !== void 0) return o.touches.length;
       if (o.which !== void 0 && o.which !== 0) return o.which;
       if (o.buttons !== void 0) return o.buttons;
       var _ = o.button;
       if (_ !== void 0) return _ & 1 ? 1 : _ & 2 ? 3 : _ & 4 ? 2 : 0;
      }
      function b(o) {
       var _ = o.getBoundingClientRect();
       return {
        left: _.left + B('scrollLeft', 'pageXOffset'),
        top: _.top + B('scrollTop', 'pageYOffset'),
       };
      }
      function B(o, _) {
       return typeof c[_] < 'u' ? c[_] : g.clientHeight ? g[o] : y.body[o];
      }
      function z(o, _, I) {
       o = o || {};
       var E = o.className || '',
        O;
       return (
        (o.className += ' gu-hide'),
        (O = y.elementFromPoint(_, I)),
        (o.className = E),
        O
       );
      }
      function q() {
       return !1;
      }
      function t() {
       return !0;
      }
      function n(o) {
       return o.width || o.right - o.left;
      }
      function i(o) {
       return o.height || o.bottom - o.top;
      }
      function a(o) {
       return o.parentNode === y ? null : o.parentNode;
      }
      function m(o) {
       return (
        o.tagName === 'INPUT' ||
        o.tagName === 'TEXTAREA' ||
        o.tagName === 'SELECT' ||
        x(o)
       );
      }
      function x(o) {
       return !o || o.contentEditable === 'false'
        ? !1
        : o.contentEditable === 'true'
          ? !0
          : x(a(o));
      }
      function T(o) {
       return o.nextElementSibling || _();
       function _() {
        var I = o;
        do I = I.nextSibling;
        while (I && I.nodeType !== 1);
        return I;
       }
      }
      function Y(o) {
       return o.targetTouches && o.targetTouches.length
        ? o.targetTouches[0]
        : o.changedTouches && o.changedTouches.length
          ? o.changedTouches[0]
          : o;
      }
      function w(o, _) {
       var I = Y(_),
        E = { pageX: 'clientX', pageY: 'clientY' };
       return o in E && !(o in I) && E[o] in I && (o = E[o]), I[o];
      }
      L.exports = f;
     }).call(this);
    }).call(
     this,
     typeof W < 'u'
      ? W
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : {},
    );
   },
   { './classes': 8, 'contra/emitter': 4, crossvent: 5 },
  ],
  10: [
   function (S, L, k) {
    var c = (L.exports = {}),
     e,
     p;
    function u() {
     throw new Error('setTimeout has not been defined');
    }
    function y() {
     throw new Error('clearTimeout has not been defined');
    }
    (function () {
     try {
      typeof setTimeout == 'function' ? (e = setTimeout) : (e = u);
     } catch {
      e = u;
     }
     try {
      typeof clearTimeout == 'function' ? (p = clearTimeout) : (p = y);
     } catch {
      p = y;
     }
    })();
    function g(i) {
     if (e === setTimeout) return setTimeout(i, 0);
     if ((e === u || !e) && setTimeout)
      return (e = setTimeout), setTimeout(i, 0);
     try {
      return e(i, 0);
     } catch {
      try {
       return e.call(null, i, 0);
      } catch {
       return e.call(this, i, 0);
      }
     }
    }
    function f(i) {
     if (p === clearTimeout) return clearTimeout(i);
     if ((p === y || !p) && clearTimeout)
      return (p = clearTimeout), clearTimeout(i);
     try {
      return p(i);
     } catch {
      try {
       return p.call(null, i);
      } catch {
       return p.call(this, i);
      }
     }
    }
    var s = [],
     d = !1,
     b,
     B = -1;
    function z() {
     !d ||
      !b ||
      ((d = !1), b.length ? (s = b.concat(s)) : (B = -1), s.length && q());
    }
    function q() {
     if (!d) {
      var i = g(z);
      d = !0;
      for (var a = s.length; a; ) {
       for (b = s, s = []; ++B < a; ) b && b[B].run();
       (B = -1), (a = s.length);
      }
      (b = null), (d = !1), f(i);
     }
    }
    c.nextTick = function (i) {
     var a = new Array(arguments.length - 1);
     if (arguments.length > 1)
      for (var m = 1; m < arguments.length; m++) a[m - 1] = arguments[m];
     s.push(new t(i, a)), s.length === 1 && !d && g(q);
    };
    function t(i, a) {
     (this.fun = i), (this.array = a);
    }
    (t.prototype.run = function () {
     this.fun.apply(null, this.array);
    }),
     (c.title = 'browser'),
     (c.browser = !0),
     (c.env = {}),
     (c.argv = []),
     (c.version = ''),
     (c.versions = {});
    function n() {}
    (c.on = n),
     (c.addListener = n),
     (c.once = n),
     (c.off = n),
     (c.removeListener = n),
     (c.removeAllListeners = n),
     (c.emit = n),
     (c.prependListener = n),
     (c.prependOnceListener = n),
     (c.listeners = function (i) {
      return [];
     }),
     (c.binding = function (i) {
      throw new Error('process.binding is not supported');
     }),
     (c.cwd = function () {
      return '/';
     }),
     (c.chdir = function (i) {
      throw new Error('process.chdir is not supported');
     }),
     (c.umask = function () {
      return 0;
     });
   },
   {},
  ],
  11: [
   function (S, L, k) {
    (function (c) {
     (function () {
      var e = typeof c == 'function',
       p;
      e
       ? (p = function (u) {
          c(u);
         })
       : (p = function (u) {
          setTimeout(u, 0);
         }),
       (L.exports = p);
     }).call(this);
    }).call(this, S('timers').setImmediate);
   },
   { timers: 12 },
  ],
  12: [
   function (S, L, k) {
    (function (c, e) {
     (function () {
      var p = S('process/browser.js').nextTick,
       u = Function.prototype.apply,
       y = Array.prototype.slice,
       g = {},
       f = 0;
      (k.setTimeout = function () {
       return new s(u.call(setTimeout, window, arguments), clearTimeout);
      }),
       (k.setInterval = function () {
        return new s(u.call(setInterval, window, arguments), clearInterval);
       }),
       (k.clearTimeout = k.clearInterval =
        function (d) {
         d.close();
        });
      function s(d, b) {
       (this._id = d), (this._clearFn = b);
      }
      (s.prototype.unref = s.prototype.ref = function () {}),
       (s.prototype.close = function () {
        this._clearFn.call(window, this._id);
       }),
       (k.enroll = function (d, b) {
        clearTimeout(d._idleTimeoutId), (d._idleTimeout = b);
       }),
       (k.unenroll = function (d) {
        clearTimeout(d._idleTimeoutId), (d._idleTimeout = -1);
       }),
       (k._unrefActive = k.active =
        function (d) {
         clearTimeout(d._idleTimeoutId);
         var b = d._idleTimeout;
         b >= 0 &&
          (d._idleTimeoutId = setTimeout(function () {
           d._onTimeout && d._onTimeout();
          }, b));
        }),
       (k.setImmediate =
        typeof c == 'function'
         ? c
         : function (d) {
            var b = f++,
             B = arguments.length < 2 ? !1 : y.call(arguments, 1);
            return (
             (g[b] = !0),
             p(function () {
              g[b] &&
               (B ? d.apply(null, B) : d.call(null), k.clearImmediate(b));
             }),
             b
            );
           }),
       (k.clearImmediate =
        typeof e == 'function'
         ? e
         : function (d) {
            delete g[d];
           });
     }).call(this);
    }).call(this, S('timers').setImmediate, S('timers').clearImmediate);
   },
   { 'process/browser.js': 10, timers: 12 },
  ],
 },
 {},
 [1],
);