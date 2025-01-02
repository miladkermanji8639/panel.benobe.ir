var k = (s, t) => () => (t || s((t = { exports: {} }).exports, t), t.exports);
var b = k((l, v) => {
 (function (s, t) {
  typeof l == 'object' && typeof v < 'u'
   ? (v.exports = t(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], t)
     : ((s = typeof globalThis < 'u' ? globalThis : s || self),
       (s.FormValidation = s.FormValidation || {}),
       (s.FormValidation.validators = s.FormValidation.validators || {}),
       (s.FormValidation.validators.zipCode = t(s.FormValidation)));
 })(void 0, function (s) {
  var t = s.utils.format,
   n = s.utils.removeUndefined;
  function f() {
   var $ = [
     'AT',
     'BG',
     'BR',
     'CA',
     'CH',
     'CZ',
     'DE',
     'DK',
     'ES',
     'FR',
     'GB',
     'IE',
     'IN',
     'IT',
     'MA',
     'NL',
     'PL',
     'PT',
     'RO',
     'RU',
     'SE',
     'SG',
     'SK',
     'US',
    ],
    C = function (e) {
     for (
      var d = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
       r = '[ABCDEFGHKLMNOPQRSTUVWXY]',
       a = '[ABCDEFGHJKPMNRSTUVWXY]',
       u = '[ABEHMNPRVWXY]',
       c = '[ABDEFGHJLNPQRSTUWXYZ]',
       R = [
        new RegExp(
         '^('
          .concat(d, '{1}')
          .concat(r, '?[0-9]{1,2})(\\s*)([0-9]{1}')
          .concat(c, '{2})$'),
         'i',
        ),
        new RegExp(
         '^('
          .concat(d, '{1}[0-9]{1}')
          .concat(a, '{1})(\\s*)([0-9]{1}')
          .concat(c, '{2})$'),
         'i',
        ),
        new RegExp(
         '^('
          .concat(d, '{1}')
          .concat(r, '{1}?[0-9]{1}')
          .concat(u, '{1})(\\s*)([0-9]{1}')
          .concat(c, '{2})$'),
         'i',
        ),
        new RegExp(
         '^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$',
         'i',
        ),
        /^(GIR)(\s*)(0AA)$/i,
        /^(BFPO)(\s*)([0-9]{1,4})$/i,
        /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
        /^([A-Z]{4})(\s*)(1ZZ)$/i,
        /^(AI-2640)$/i,
       ],
       o = 0,
       i = R;
      o < i.length;
      o++
     ) {
      var E = i[o];
      if (E.test(e)) return !0;
     }
     return !1;
    };
   return {
    validate: function (e) {
     var d = Object.assign({}, { message: '' }, n(e.options));
     if (e.value === '' || !d.country) return { valid: !0 };
     var r = e.value.substr(0, 2);
     if (
      (typeof d.country == 'function'
       ? (r = d.country.call(this))
       : (r = d.country),
      !r || $.indexOf(r.toUpperCase()) === -1)
     )
      return { valid: !0 };
     var a = !1;
     switch (((r = r.toUpperCase()), r)) {
      case 'AT':
       a = /^([1-9]{1})(\d{3})$/.test(e.value);
       break;
      case 'BG':
       a = /^([1-9]{1}[0-9]{3})$/.test(e.value);
       break;
      case 'BR':
       a = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(e.value);
       break;
      case 'CA':
       a =
        /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
         e.value,
        );
       break;
      case 'CH':
       a = /^([1-9]{1})(\d{3})$/.test(e.value);
       break;
      case 'CZ':
       a = /^(\d{3})([ ]?)(\d{2})$/.test(e.value);
       break;
      case 'DE':
       a = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(e.value);
       break;
      case 'DK':
       a = /^(DK(-|\s)?)?\d{4}$/i.test(e.value);
       break;
      case 'ES':
       a = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(e.value);
       break;
      case 'FR':
       a = /^[0-9]{5}$/i.test(e.value);
       break;
      case 'GB':
       a = C(e.value);
       break;
      case 'IN':
       a = /^\d{3}\s?\d{3}$/.test(e.value);
       break;
      case 'IE':
       a = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(
        e.value,
       );
       break;
      case 'IT':
       a = /^(I-|IT-)?\d{5}$/i.test(e.value);
       break;
      case 'MA':
       a = /^[1-9][0-9]{4}$/i.test(e.value);
       break;
      case 'NL':
       a = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(e.value);
       break;
      case 'PL':
       a = /^[0-9]{2}-[0-9]{3}$/.test(e.value);
       break;
      case 'PT':
       a = /^[1-9]\d{3}-\d{3}$/.test(e.value);
       break;
      case 'RO':
       a = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(e.value);
       break;
      case 'RU':
       a = /^[0-9]{6}$/i.test(e.value);
       break;
      case 'SE':
       a = /^(S-)?\d{3}\s?\d{2}$/i.test(e.value);
       break;
      case 'SG':
       a = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
        e.value,
       );
       break;
      case 'SK':
       a = /^(\d{3})([ ]?)(\d{2})$/.test(e.value);
       break;
      case 'US':
      default:
       a = /^\d{4,5}([-]?\d{4})?$/.test(e.value);
       break;
     }
     return {
      message: t(
       e.l10n && e.l10n.zipCode
        ? d.message || e.l10n.zipCode.country
        : d.message,
       e.l10n && e.l10n.zipCode && e.l10n.zipCode.countries
        ? e.l10n.zipCode.countries[r]
        : r,
      ),
      valid: a,
     };
    },
   };
  }
  return f;
 });
});
export default b();
