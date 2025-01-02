var v = (r, a) => () => (a || r((a = { exports: {} }).exports, a), a.exports);
var f = v((d, n) => {
 (function (r, a) {
  typeof d == 'object' && typeof n < 'u'
   ? (n.exports = a())
   : typeof define == 'function' && define.amd
     ? define(a)
     : ((r = typeof globalThis < 'u' ? globalThis : r || self),
       (r.FormValidation = r.FormValidation || {}),
       (r.FormValidation.validators = r.FormValidation.validators || {}),
       (r.FormValidation.validators.color = a()));
 })(void 0, function () {
  function r() {
   var a = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
    s = [
     'aliceblue',
     'antiquewhite',
     'aqua',
     'aquamarine',
     'azure',
     'beige',
     'bisque',
     'black',
     'blanchedalmond',
     'blue',
     'blueviolet',
     'brown',
     'burlywood',
     'cadetblue',
     'chartreuse',
     'chocolate',
     'coral',
     'cornflowerblue',
     'cornsilk',
     'crimson',
     'cyan',
     'darkblue',
     'darkcyan',
     'darkgoldenrod',
     'darkgray',
     'darkgreen',
     'darkgrey',
     'darkkhaki',
     'darkmagenta',
     'darkolivegreen',
     'darkorange',
     'darkorchid',
     'darkred',
     'darksalmon',
     'darkseagreen',
     'darkslateblue',
     'darkslategray',
     'darkslategrey',
     'darkturquoise',
     'darkviolet',
     'deeppink',
     'deepskyblue',
     'dimgray',
     'dimgrey',
     'dodgerblue',
     'firebrick',
     'floralwhite',
     'forestgreen',
     'fuchsia',
     'gainsboro',
     'ghostwhite',
     'gold',
     'goldenrod',
     'gray',
     'green',
     'greenyellow',
     'grey',
     'honeydew',
     'hotpink',
     'indianred',
     'indigo',
     'ivory',
     'khaki',
     'lavender',
     'lavenderblush',
     'lawngreen',
     'lemonchiffon',
     'lightblue',
     'lightcoral',
     'lightcyan',
     'lightgoldenrodyellow',
     'lightgray',
     'lightgreen',
     'lightgrey',
     'lightpink',
     'lightsalmon',
     'lightseagreen',
     'lightskyblue',
     'lightslategray',
     'lightslategrey',
     'lightsteelblue',
     'lightyellow',
     'lime',
     'limegreen',
     'linen',
     'magenta',
     'maroon',
     'mediumaquamarine',
     'mediumblue',
     'mediumorchid',
     'mediumpurple',
     'mediumseagreen',
     'mediumslateblue',
     'mediumspringgreen',
     'mediumturquoise',
     'mediumvioletred',
     'midnightblue',
     'mintcream',
     'mistyrose',
     'moccasin',
     'navajowhite',
     'navy',
     'oldlace',
     'olive',
     'olivedrab',
     'orange',
     'orangered',
     'orchid',
     'palegoldenrod',
     'palegreen',
     'paleturquoise',
     'palevioletred',
     'papayawhip',
     'peachpuff',
     'peru',
     'pink',
     'plum',
     'powderblue',
     'purple',
     'red',
     'rosybrown',
     'royalblue',
     'saddlebrown',
     'salmon',
     'sandybrown',
     'seagreen',
     'seashell',
     'sienna',
     'silver',
     'skyblue',
     'slateblue',
     'slategray',
     'slategrey',
     'snow',
     'springgreen',
     'steelblue',
     'tan',
     'teal',
     'thistle',
     'tomato',
     'transparent',
     'turquoise',
     'violet',
     'wheat',
     'white',
     'whitesmoke',
     'yellow',
     'yellowgreen',
    ],
    g = function (e) {
     return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
    },
    u = function (e) {
     return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
      e,
     );
    },
    b = function (e) {
     return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
      e,
     );
    },
    h = function (e) {
     return s.indexOf(e) >= 0;
    },
    c = function (e) {
     return (
      /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(
       e,
      ) ||
      /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
       e,
      )
     );
    },
    m = function (e) {
     return (
      /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
       e,
      ) ||
      /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
       e,
      )
     );
    };
   return {
    validate: function (e) {
     if (e.value === '') return { valid: !0 };
     for (
      var k =
        typeof e.options.type == 'string'
         ? e.options.type.toString().replace(/s/g, '').split(',')
         : e.options.type || a,
       i = 0,
       o = k;
      i < o.length;
      i++
     ) {
      var y = o[i],
       t = y.toLowerCase();
      if (a.indexOf(t) !== -1) {
       var l = !0;
       switch (t) {
        case 'hex':
         l = g(e.value);
         break;
        case 'hsl':
         l = u(e.value);
         break;
        case 'hsla':
         l = b(e.value);
         break;
        case 'keyword':
         l = h(e.value);
         break;
        case 'rgb':
         l = c(e.value);
         break;
        case 'rgba':
         l = m(e.value);
         break;
       }
       if (l) return { valid: !0 };
      }
     }
     return { valid: !1 };
    },
   };
  }
  return r;
 });
});
export default f();
