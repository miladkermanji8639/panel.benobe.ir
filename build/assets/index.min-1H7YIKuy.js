var R = (t, i) => () => (i || t((i = { exports: {} }).exports, i), i.exports);
var E = R((v, d) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-zip-code
  * @version 2.4.0
  */ (function (t, i) {
  typeof v == 'object' && typeof d < 'u'
   ? (d.exports = i(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], i)
     : (((t = typeof globalThis < 'u' ? globalThis : t || self).FormValidation =
        t.FormValidation || {}),
       (t.FormValidation.validators = t.FormValidation.validators || {}),
       (t.FormValidation.validators.zipCode = i(t.FormValidation)));
 })(void 0, function (t) {
  var i = t.utils.format,
   $ = t.utils.removeUndefined;
  return function () {
   var f = [
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
   ];
   return {
    validate: function (e) {
     var n = Object.assign({}, { message: '' }, $(e.options));
     if (e.value === '' || !n.country) return { valid: !0 };
     var r = e.value.substr(0, 2);
     if (
      !(r =
       typeof n.country == 'function' ? n.country.call(this) : n.country) ||
      f.indexOf(r.toUpperCase()) === -1
     )
      return { valid: !0 };
     var a = !1;
     switch ((r = r.toUpperCase())) {
      case 'AT':
      case 'CH':
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
      case 'CZ':
      case 'SK':
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
       a = (function (b) {
        for (
         var o = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
          l = '[ABCDEFGHKLMNOPQRSTUVWXY]',
          c = '[ABDEFGHJLNPQRSTUWXYZ]',
          s = 0,
          u = [
           new RegExp(
            '^('
             .concat(o, '{1}')
             .concat(l, '?[0-9]{1,2})(\\s*)([0-9]{1}')
             .concat(c, '{2})$'),
            'i',
           ),
           new RegExp(
            '^('
             .concat(o, '{1}[0-9]{1}')
             .concat('[ABCDEFGHJKPMNRSTUVWXY]', '{1})(\\s*)([0-9]{1}')
             .concat(c, '{2})$'),
            'i',
           ),
           new RegExp(
            '^('
             .concat(o, '{1}')
             .concat(l, '{1}?[0-9]{1}')
             .concat('[ABEHMNPRVWXY]', '{1})(\\s*)([0-9]{1}')
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
          ];
         s < u.length;
         s++
        )
         if (u[s].test(b)) return !0;
        return !1;
       })(e.value);
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
      default:
       a = /^\d{4,5}([-]?\d{4})?$/.test(e.value);
     }
     return {
      message: i(
       e.l10n && e.l10n.zipCode
        ? n.message || e.l10n.zipCode.country
        : n.message,
       e.l10n && e.l10n.zipCode && e.l10n.zipCode.countries
        ? e.l10n.zipCode.countries[r]
        : r,
      ),
      valid: a,
     };
    },
   };
  };
 });
});
export default E();
