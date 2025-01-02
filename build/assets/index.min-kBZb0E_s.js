var C = (n, M) => () => (M || n((M = { exports: {} }).exports, M), M.exports);
var B = C((G, i) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-isin
  * @version 2.4.0
  */ (function (n, M) {
  typeof G == 'object' && typeof i < 'u'
   ? (i.exports = M())
   : typeof define == 'function' && define.amd
     ? define(M)
     : (((n = typeof globalThis < 'u' ? globalThis : n || self).FormValidation =
        n.FormValidation || {}),
       (n.FormValidation.validators = n.FormValidation.validators || {}),
       (n.FormValidation.validators.isin = M()));
 })(void 0, function () {
  return function () {
   return {
    validate: function (n) {
     if (n.value === '') return { valid: !0 };
     var M = n.value.toUpperCase();
     if (
      !new RegExp(
       '^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)[0-9A-Z]{10}$',
      ).test(n.value)
     )
      return { valid: !1 };
     var a,
      o = M.length,
      e = '';
     for (a = 0; a < o - 1; a++) {
      var A = M.charCodeAt(a);
      e += A > 57 ? (A - 55).toString() : M.charAt(a);
     }
     var r = '',
      t = e.length,
      T = t % 2 != 0 ? 0 : 1;
     for (a = 0; a < t; a++)
      r += parseInt(e[a], 10) * (a % 2 === T ? 2 : 1) + '';
     var S = 0;
     for (a = 0; a < r.length; a++) S += parseInt(r.charAt(a), 10);
     return {
      valid: ''.concat((S = (10 - (S % 10)) % 10)) === M.charAt(o - 1),
     };
    },
   };
  };
 });
});
export default B();
