var u = new Map();
function H(o) {
 var n = u.get(o);
 n && n.destroy();
}
function L(o) {
 var n = u.get(o);
 n && n.update();
}
var d = null;
typeof window > 'u'
 ? (((d = function (o) {
    return o;
   }).destroy = function (o) {
    return o;
   }),
   (d.update = function (o) {
    return o;
   }))
 : (((d = function (o, n) {
    return (
     o &&
      Array.prototype.forEach.call(o.length ? o : [o], function (m) {
       return (function (e) {
        if (e && e.nodeName && e.nodeName === 'TEXTAREA' && !u.has(e)) {
         var c,
          y = null,
          t = window.getComputedStyle(e),
          g =
           ((c = e.value),
           function () {
            h({
             testForHeightReduction: c === '' || !e.value.startsWith(c),
             restoreTextAlign: null,
            }),
             (c = e.value);
           }),
          v = function (a) {
           e.removeEventListener('autosize:destroy', v),
            e.removeEventListener('autosize:update', i),
            e.removeEventListener('input', g),
            window.removeEventListener('resize', i),
            Object.keys(a).forEach(function (l) {
             return (e.style[l] = a[l]);
            }),
            u.delete(e);
          }.bind(e, {
           height: e.style.height,
           resize: e.style.resize,
           textAlign: e.style.textAlign,
           overflowY: e.style.overflowY,
           overflowX: e.style.overflowX,
           wordWrap: e.style.wordWrap,
          });
         e.addEventListener('autosize:destroy', v),
          e.addEventListener('autosize:update', i),
          e.addEventListener('input', g),
          window.addEventListener('resize', i),
          (e.style.overflowX = 'hidden'),
          (e.style.wordWrap = 'break-word'),
          u.set(e, { destroy: v, update: i }),
          i();
        }
        function h(a) {
         var l,
          s,
          w = a.restoreTextAlign,
          p = w === void 0 ? null : w,
          E = a.testForHeightReduction,
          b = E === void 0 || E,
          T = t.overflowY;
         if (
          e.scrollHeight !== 0 &&
          (t.resize === 'vertical'
           ? (e.style.resize = 'none')
           : t.resize === 'both' && (e.style.resize = 'horizontal'),
          b &&
           ((l = (function (r) {
            for (
             var x = [];
             r && r.parentNode && r.parentNode instanceof Element;

            )
             r.parentNode.scrollTop &&
              x.push([r.parentNode, r.parentNode.scrollTop]),
              (r = r.parentNode);
            return function () {
             return x.forEach(function (A) {
              var f = A[0],
               F = A[1];
              (f.style.scrollBehavior = 'auto'),
               (f.scrollTop = F),
               (f.style.scrollBehavior = null);
             });
            };
           })(e)),
           (e.style.height = '')),
          (s =
           t.boxSizing === 'content-box'
            ? e.scrollHeight -
              (parseFloat(t.paddingTop) + parseFloat(t.paddingBottom))
            : e.scrollHeight +
              parseFloat(t.borderTopWidth) +
              parseFloat(t.borderBottomWidth)),
          t.maxHeight !== 'none' && s > parseFloat(t.maxHeight)
           ? (t.overflowY === 'hidden' && (e.style.overflow = 'scroll'),
             (s = parseFloat(t.maxHeight)))
           : t.overflowY !== 'hidden' && (e.style.overflow = 'hidden'),
          (e.style.height = s + 'px'),
          p && (e.style.textAlign = p),
          l && l(),
          y !== s &&
           (e.dispatchEvent(new Event('autosize:resized', { bubbles: !0 })),
           (y = s)),
          T !== t.overflow && !p)
         ) {
          var z = t.textAlign;
          t.overflow === 'hidden' &&
           (e.style.textAlign = z === 'start' ? 'end' : 'start'),
           h({ restoreTextAlign: z, testForHeightReduction: !0 });
         }
        }
        function i() {
         h({ testForHeightReduction: !0, restoreTextAlign: null });
        }
       })(m);
      }),
     o
    );
   }).destroy = function (o) {
    return o && Array.prototype.forEach.call(o.length ? o : [o], H), o;
   }),
   (d.update = function (o) {
    return o && Array.prototype.forEach.call(o.length ? o : [o], L), o;
   }));
var N = d;
try {
 window.autosize = N;
} catch {}
