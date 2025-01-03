var S = (e, A) => () => (A || e((A = { exports: {} }).exports, A), A.exports);
var C = S((L, o) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-iban
  * @version 2.4.0
  */ (function (e, A) {
  typeof L == 'object' && typeof o < 'u'
   ? (o.exports = A(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], A)
     : (((e = typeof globalThis < 'u' ? globalThis : e || self).FormValidation =
        e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.iban = A(e.FormValidation)));
 })(void 0, function (e) {
  var A = e.utils.format,
   f = e.utils.removeUndefined;
  return function () {
   var d = {
     AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
     AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
     AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
     AO: 'AO[0-9]{2}[0-9]{21}',
     AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
     AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
     BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
     BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
     BF: 'BF[0-9]{2}[0-9]{23}',
     BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
     BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
     BI: 'BI[0-9]{2}[0-9]{12}',
     BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
     BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
     CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
     CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
     CM: 'CM[0-9]{2}[0-9]{23}',
     CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
     CV: 'CV[0-9]{2}[0-9]{21}',
     CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
     CZ: 'CZ[0-9]{2}[0-9]{20}',
     DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
     DK: 'DK[0-9]{2}[0-9]{14}',
     DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
     DZ: 'DZ[0-9]{2}[0-9]{20}',
     EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
     ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
     FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
     FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
     FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
     GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
     GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
     GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
     GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
     GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
     GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
     HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
     HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
     IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
     IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
     IR: 'IR[0-9]{2}[0-9]{22}',
     IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
     IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
     JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
     KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
     KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
     LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
     LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
     LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
     LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
     LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
     MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
     MD: 'MD[0-9]{2}[A-Z0-9]{20}',
     ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     MG: 'MG[0-9]{2}[0-9]{23}',
     MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
     ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
     MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
     MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
     MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
     MZ: 'MZ[0-9]{2}[0-9]{21}',
     NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
     NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
     PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
     PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
     PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
     PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
     QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
     RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
     RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
     SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
     SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
     SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
     SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
     SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
     TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
     TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
     TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
     VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
     XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}',
    },
    E = [
     'AT',
     'BE',
     'BG',
     'CH',
     'CY',
     'CZ',
     'DE',
     'DK',
     'EE',
     'ES',
     'FI',
     'FR',
     'GB',
     'GI',
     'GR',
     'HR',
     'HU',
     'IE',
     'IS',
     'IT',
     'LI',
     'LT',
     'LU',
     'LV',
     'MC',
     'MT',
     'NL',
     'NO',
     'PL',
     'PT',
     'RO',
     'SE',
     'SI',
     'SK',
     'SM',
    ];
   return {
    validate: function (Z) {
     if (Z.value === '') return { valid: !0 };
     var a = Object.assign({}, { message: '' }, f(Z.options)),
      n = Z.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
      r = a.country || n.substr(0, 2);
     if (!d[r]) return { message: a.message, valid: !1 };
     if (a.sepa !== void 0) {
      var l = E.indexOf(r) !== -1;
      if (
       ((a.sepa === 'true' || a.sepa === !0) && !l) ||
       ((a.sepa === 'false' || a.sepa === !1) && l)
      )
       return { message: a.message, valid: !1 };
     }
     var I = A(
      Z.l10n ? a.message || Z.l10n.iban.country : a.message,
      Z.l10n ? Z.l10n.iban.countries[r] : r,
     );
     if (!new RegExp('^'.concat(d[r], '$')).test(Z.value))
      return { message: I, valid: !1 };
     n = (n = ''.concat(n.substr(4)).concat(n.substr(0, 4)))
      .split('')
      .map(function (u) {
       var t = u.charCodeAt(0);
       return t >= 65 && t <= 90 ? t - 65 + 10 : u;
      })
      .join('');
     for (var i = parseInt(n.substr(0, 1), 10), M = n.length, s = 1; s < M; ++s)
      i = (10 * i + parseInt(n.substr(s, 1), 10)) % 97;
     return { message: I, valid: i === 1 };
    },
   };
  };
 });
});
export default C();
