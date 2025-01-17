(function (s) {
 var E =
   '<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>',
  rr = {
   starWidth: '32px',
   normalFill: 'gray',
   ratedFill: '#f39c12',
   numStars: 5,
   maxValue: 5,
   precision: 1,
   rating: 0,
   fullStar: !1,
   halfStar: !1,
   readOnly: !1,
   spacing: '0px',
   rtl: !1,
   multiColor: null,
   onInit: null,
   onChange: null,
   onSet: null,
   starSvg: null,
  },
  M = { startColor: '#c0392b', endColor: '#f1c40f' };
 function ar() {
  var e = !1;
  return (
   (function (r) {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
     r,
    ) ||
     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      r.substr(0, 4),
     )) &&
     (e = !0);
   })(navigator.userAgent || navigator.vendor || window.opera),
   e
  );
 }
 function W(e, r, i) {
  return e === r ? (e = r) : e === i && (e = i), e;
 }
 function er(e, r, i) {
  var l = e >= r && e <= i;
  if (!l)
   throw Error('Invalid Rating, expected value between ' + r + ' and ' + i);
  return e;
 }
 function k(e) {
  return typeof e < 'u';
 }
 var A = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
  T = function (e) {
   if (!A.test(e)) return null;
   var r = A.exec(e),
    i = parseInt(r[1], 16),
    l = parseInt(r[2], 16),
    c = parseInt(r[3], 16);
   return { r: i, g: l, b: c };
  };
 function j(e, r, i) {
  var l = (r - e) * (i / 100);
  return (
   (l = Math.round(e + l).toString(16)), l.length === 1 && (l = '0' + l), l
  );
 }
 function tr(e, r, i) {
  if (!e || !r) return null;
  (i = k(i) ? i : 0), (e = T(e)), (r = T(r));
  var l = j(e.r, r.r, i),
   c = j(e.b, r.b, i),
   g = j(e.g, r.g, i);
  return '#' + l + g + c;
 }
 function S(e, r) {
  this.node = e.get(0);
  var i = this;
  e.empty().addClass('jq-ry-container');
  var l = s('<div/>').addClass('jq-ry-group-wrapper').appendTo(e),
   c = s('<div/>')
    .addClass('jq-ry-normal-group')
    .addClass('jq-ry-group')
    .appendTo(l),
   g = s('<div/>')
    .addClass('jq-ry-rated-group')
    .addClass('jq-ry-group')
    .appendTo(l),
   f,
   y,
   d,
   o,
   m,
   v,
   b = 0,
   p = r.rating,
   Y = !1;
  function w(a) {
   k(a) || (a = r.rating), (p = a);
   var t = a / f,
    n = t * d;
   t > 1 && (n += (Math.ceil(t) - 1) * m),
    q(r.ratedFill),
    (n = r.rtl ? 100 - n : n),
    n < 0 ? (n = 0) : n > 100 && (n = 100),
    g.css('width', n + '%');
  }
  function B() {
   (v = y * r.numStars + o * (r.numStars - 1)),
    (d = (y / v) * 100),
    (m = (o / v) * 100),
    e.width(v),
    w();
  }
  function L(a) {
   var t = (r.starWidth = a);
   return (
    (y = window.parseFloat(r.starWidth.replace('px', ''))),
    c.find('svg').attr({ width: r.starWidth, height: t }),
    g.find('svg').attr({ width: r.starWidth, height: t }),
    B(),
    e
   );
  }
  function X(a) {
   return (
    (r.spacing = a),
    (o = parseFloat(r.spacing.replace('px', ''))),
    c.find('svg:not(:first-child)').css({ 'margin-left': a }),
    g.find('svg:not(:first-child)').css({ 'margin-left': a }),
    B(),
    e
   );
  }
  function O(a) {
   r.normalFill = a;
   var t = (r.rtl ? g : c).find('svg');
   return t.attr({ fill: r.normalFill }), e;
  }
  var _ = r.ratedFill;
  function q(a) {
   if (r.multiColor) {
    var t = p - b,
     n = (t / r.maxValue) * 100,
     h = r.multiColor || {},
     x = h.startColor || M.startColor,
     F = h.endColor || M.endColor;
    a = tr(x, F, n);
   } else _ = a;
   r.ratedFill = a;
   var u = (r.rtl ? c : g).find('svg');
   return u.attr({ fill: r.ratedFill }), e;
  }
  function G(a) {
   (a = !!a), (r.rtl = a), O(r.normalFill), w();
  }
  function sr(a) {
   (r.multiColor = a), q(a || _);
  }
  function H(a) {
   (r.numStars = a), (f = r.maxValue / r.numStars), c.empty(), g.empty();
   for (var t = 0; t < r.numStars; t++)
    c.append(s(r.starSvg || E)), g.append(s(r.starSvg || E));
   return L(r.starWidth), O(r.normalFill), X(r.spacing), w(), e;
  }
  function D(a) {
   return (
    (r.maxValue = a),
    (f = r.maxValue / r.numStars),
    r.rating > a && I(a),
    w(),
    e
   );
  }
  function cr(a) {
   return (r.precision = a), I(r.rating), e;
  }
  function fr(a) {
   return (r.halfStar = a), e;
  }
  function ur(a) {
   return (r.fullStar = a), e;
  }
  function gr(a) {
   var t = a % f,
    n = f / 2,
    h = r.halfStar,
    x = r.fullStar;
   return (
    (!x && !h) ||
     (x || (h && t > n) ? (a += f - t) : ((a = a - t), t > 0 && (a += n))),
    a
   );
  }
  function U(a) {
   var t = c.offset(),
    n = t.left,
    h = n + c.width(),
    x = r.maxValue,
    F = a.pageX,
    u = 0;
   if (F < n) u = b;
   else if (F > h) u = x;
   else {
    var z = (F - n) / (h - n);
    if (o > 0) {
     z *= 100;
     for (var C = z; C > 0; )
      C > d ? ((u += f), (C -= d + m)) : ((u += (C / d) * f), (C = 0));
    } else u = z * r.maxValue;
    u = gr(u);
   }
   return r.rtl && (u = x - u), parseFloat(u);
  }
  function Q(a) {
   return (
    (r.readOnly = a),
    e.attr('readonly', !0),
    $(),
    a || (e.removeAttr('readonly'), mr()),
    e
   );
  }
  function I(a) {
   var t = a,
    n = r.maxValue;
   return (
    typeof t == 'string' &&
     (t[t.length - 1] === '%' &&
      ((t = t.substr(0, t.length - 1)), (n = 100), D(n)),
     (t = parseFloat(t))),
    er(t, b, n),
    (t = parseFloat(t.toFixed(r.precision))),
    W(parseFloat(t), b, n),
    (r.rating = t),
    w(),
    Y && e.trigger('rateyo.set', { rating: t }),
    e
   );
  }
  function or(a) {
   return (r.onInit = a), e;
  }
  function hr(a) {
   return (r.onSet = a), e;
  }
  function dr(a) {
   return (r.onChange = a), e;
  }
  (this.rating = function (a) {
   return k(a) ? (I(a), e) : r.rating;
  }),
   (this.destroy = function () {
    return (
     r.readOnly || $(),
     (S.prototype.collection = nr(e.get(0), this.collection)),
     e.removeClass('jq-ry-container').children().remove(),
     e
    );
   }),
   (this.method = function (a) {
    if (!a) throw Error('Method name not specified!');
    if (!k(this[a])) throw Error('Method ' + a + " doesn't exist!");
    var t = Array.prototype.slice.apply(arguments, []),
     n = t.slice(1),
     h = this[a];
    return h.apply(this, n);
   }),
   (this.option = function (a, t) {
    if (!k(a)) return r;
    var n;
    switch (a) {
     case 'starWidth':
      n = L;
      break;
     case 'numStars':
      n = H;
      break;
     case 'normalFill':
      n = O;
      break;
     case 'ratedFill':
      n = q;
      break;
     case 'multiColor':
      n = sr;
      break;
     case 'maxValue':
      n = D;
      break;
     case 'precision':
      n = cr;
      break;
     case 'rating':
      n = I;
      break;
     case 'halfStar':
      n = fr;
      break;
     case 'fullStar':
      n = ur;
      break;
     case 'readOnly':
      n = Q;
      break;
     case 'spacing':
      n = X;
      break;
     case 'rtl':
      n = G;
      break;
     case 'onInit':
      n = or;
      break;
     case 'onSet':
      n = hr;
      break;
     case 'onChange':
      n = dr;
      break;
     default:
      throw Error('No such option as ' + a);
    }
    return k(t) ? n(t) : r[a];
   });
  function R(a) {
   var t = U(a).toFixed(r.precision),
    n = r.maxValue;
   (t = W(parseFloat(t), b, n)),
    w(t),
    e.trigger('rateyo.change', { rating: t });
  }
  function J() {
   ar() || (w(), e.trigger('rateyo.change', { rating: r.rating }));
  }
  function K(a) {
   var t = U(a).toFixed(r.precision);
   (t = parseFloat(t)), i.rating(t);
  }
  function Z(a, t) {
   r.onInit &&
    typeof r.onInit == 'function' &&
    r.onInit.apply(this, [t.rating, i]);
  }
  function N(a, t) {
   r.onChange &&
    typeof r.onChange == 'function' &&
    r.onChange.apply(this, [t.rating, i]);
  }
  function P(a, t) {
   r.onSet &&
    typeof r.onSet == 'function' &&
    r.onSet.apply(this, [t.rating, i]);
  }
  function mr() {
   e.on('mousemove', R)
    .on('mouseenter', R)
    .on('mouseleave', J)
    .on('click', K)
    .on('rateyo.init', Z)
    .on('rateyo.change', N)
    .on('rateyo.set', P);
  }
  function $() {
   e.off('mousemove', R)
    .off('mouseenter', R)
    .off('mouseleave', J)
    .off('click', K)
    .off('rateyo.init', Z)
    .off('rateyo.change', N)
    .off('rateyo.set', P);
  }
  H(r.numStars),
   Q(r.readOnly),
   r.rtl && G(r.rtl),
   this.collection.push(this),
   this.rating(r.rating, !0),
   (Y = !0),
   e.trigger('rateyo.init', { rating: r.rating });
 }
 S.prototype.collection = [];
 function V(e, r) {
  var i;
  return (
   s.each(r, function () {
    if (e === this.node) return (i = this), !1;
   }),
   i
  );
 }
 function nr(e, r) {
  return (
   s.each(r, function (i) {
    if (e === this.node) {
     var l = r.slice(0, i),
      c = r.slice(i + 1, r.length);
     return (r = l.concat(c)), !1;
    }
   }),
   r
  );
 }
 function ir(e) {
  var r = S.prototype.collection,
   i = s(this);
  if (i.length === 0) return i;
  var l = Array.prototype.slice.apply(arguments, []);
  if (l.length === 0) e = l[0] = {};
  else if (l.length === 1 && typeof l[0] == 'object') e = l[0];
  else if (l.length >= 1 && typeof l[0] == 'string') {
   var c = l[0],
    g = l.slice(1),
    f = [];
   return (
    s.each(i, function (y, d) {
     var o = V(d, r);
     if (!o) throw Error('Trying to set options before even initialization');
     var m = o[c];
     if (!m) throw Error('Method ' + c + ' does not exist!');
     var v = m.apply(o, g);
     f.push(v);
    }),
    (f = f.length === 1 ? f[0] : f),
    f
   );
  } else throw Error('Invalid Arguments');
  return (
   (e = s.extend({}, rr, e)),
   s.each(i, function () {
    var y = V(this, r);
    if (y) return y;
    var d = s(this),
     o = {},
     m = s.extend({}, e);
    return (
     s.each(d.data(), function (v, b) {
      if (v.indexOf('rateyo') === 0) {
       var p = v.replace(/^rateyo/, '');
       (p = p[0].toLowerCase() + p.slice(1)), (o[p] = b), delete m[p];
      }
     }),
     new S(s(this), s.extend({}, o, m))
    );
   })
  );
 }
 function lr() {
  return ir.apply(this, Array.prototype.slice.apply(arguments, []));
 }
 (window.RateYo = S), (s.fn.rateYo = lr);
})(window.jQuery);
