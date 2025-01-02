var c = (a, r) => () => (r || a((r = { exports: {} }).exports, r), r.exports);
var y = c((s, n) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-color
  * @version 2.4.0
  */ (function (a, r) {
  typeof s == 'object' && typeof n < 'u'
   ? (n.exports = r())
   : typeof define == 'function' && define.amd
     ? define(r)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.color = r()));
 })(void 0, function () {
  return function () {
   var a = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
    r = [
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
    u = function (e) {
     return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(
      e,
     );
    },
    g = function (e) {
     return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(
      e,
     );
    },
    b = function (e) {
     return r.indexOf(e) >= 0;
    },
    h = function (e) {
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
      var t,
       i = 0,
       o =
        typeof e.options.type == 'string'
         ? e.options.type.toString().replace(/s/g, '').split(',')
         : e.options.type || a;
      i < o.length;
      i++
     ) {
      var d = o[i].toLowerCase();
      if (a.indexOf(d) !== -1) {
       var l = !0;
       switch (d) {
        case 'hex':
         (t = e.value), (l = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t));
         break;
        case 'hsl':
         l = u(e.value);
         break;
        case 'hsla':
         l = g(e.value);
         break;
        case 'keyword':
         l = b(e.value);
         break;
        case 'rgb':
         l = h(e.value);
         break;
        case 'rgba':
         l = m(e.value);
       }
       if (l) return { valid: !0 };
      }
     }
     return { valid: !1 };
    },
   };
  };
 });
});
export default y();
