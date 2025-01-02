var u = (d, t) => () => (t || d((t = { exports: {} }).exports, t), t.exports);
var k = u((i, o) => {
 (function (d, t) {
  typeof i == 'object' && typeof o < 'u'
   ? (o.exports = t(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], t)
     : ((d = typeof globalThis < 'u' ? globalThis : d || self),
       (d.FormValidation = d.FormValidation || {}),
       (d.FormValidation.validators = d.FormValidation.validators || {}),
       (d.FormValidation.validators.phone = t(d.FormValidation)));
 })(void 0, function (d) {
  var t = d.utils.format,
   c = d.utils.removeUndefined;
  function f() {
   var l = [
    'AE',
    'BG',
    'BR',
    'CN',
    'CZ',
    'DE',
    'DK',
    'ES',
    'FR',
    'GB',
    'IN',
    'MA',
    'NL',
    'PK',
    'RO',
    'RU',
    'SK',
    'TH',
    'US',
    'VE',
   ];
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var n = Object.assign({}, { message: '' }, c(a.options)),
      s = a.value.trim(),
      r = s.substr(0, 2);
     if (
      (typeof n.country == 'function'
       ? (r = n.country.call(this))
       : (r = n.country),
      !r || l.indexOf(r.toUpperCase()) === -1)
     )
      return { valid: !0 };
     var e = !0;
     switch (r.toUpperCase()) {
      case 'AE':
       e =
        /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(
         s,
        );
       break;
      case 'BG':
       e =
        /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(
         s.replace(/\+|\s|-|\/|\(|\)/gi, ''),
        );
       break;
      case 'BR':
       e =
        /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(
         s,
        );
       break;
      case 'CN':
       e =
        /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(
         s,
        );
       break;
      case 'CZ':
       e = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
        s,
       );
       break;
      case 'DE':
       e =
        /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(
         s,
        );
       break;
      case 'DK':
       e = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(s);
       break;
      case 'ES':
       e = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(s);
       break;
      case 'FR':
       e =
        /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(
         s,
        );
       break;
      case 'GB':
       e =
        /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(
         s,
        );
       break;
      case 'IN':
       e = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(s);
       break;
      case 'MA':
       e =
        /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(
         s,
        );
       break;
      case 'NL':
       e =
        /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(
         s,
        );
       break;
      case 'PK':
       e = /^0?3[0-9]{2}[0-9]{7}$/.test(s);
       break;
      case 'RO':
       e =
        /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(
         s,
        );
       break;
      case 'RU':
       e =
        /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(
         s,
        );
       break;
      case 'SK':
       e = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(
        s,
       );
       break;
      case 'TH':
       e = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(s);
       break;
      case 'VE':
       e =
        /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(
         s,
        );
       break;
      case 'US':
      default:
       e = /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(s);
       break;
     }
     return {
      message: t(
       a.l10n && a.l10n.phone ? n.message || a.l10n.phone.country : n.message,
       a.l10n && a.l10n.phone && a.l10n.phone.countries
        ? a.l10n.phone.countries[r]
        : r,
      ),
      valid: e,
     };
    },
   };
  }
  return f;
 });
});
export default k();
