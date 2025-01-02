var E = (r, n) => () => (n || r((n = { exports: {} }).exports, n), n.exports);
var N = E((o, A) => {
 (function (r, n) {
  typeof o == 'object' && typeof A < 'u'
   ? (A.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : ((r = typeof globalThis < 'u' ? globalThis : r || self),
       (r.FormValidation = r.FormValidation || {}),
       (r.FormValidation.validators = r.FormValidation.validators || {}),
       (r.FormValidation.validators.isin = n()));
 })(void 0, function () {
  function r() {
   var n =
    'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW';
   return {
    validate: function (a) {
     if (a.value === '') return { valid: !0 };
     var t = a.value.toUpperCase(),
      d = new RegExp('^(' + n + ')[0-9A-Z]{10}$');
     if (!d.test(a.value)) return { valid: !1 };
     var G = t.length,
      i = '',
      e;
     for (e = 0; e < G - 1; e++) {
      var C = t.charCodeAt(e);
      i += C > 57 ? (C - 55).toString() : t.charAt(e);
     }
     var S = '',
      T = i.length,
      B = T % 2 !== 0 ? 0 : 1;
     for (e = 0; e < T; e++)
      S += parseInt(i[e], 10) * (e % 2 === B ? 2 : 1) + '';
     var M = 0;
     for (e = 0; e < S.length; e++) M += parseInt(S.charAt(e), 10);
     return (
      (M = (10 - (M % 10)) % 10), { valid: ''.concat(M) === t.charAt(G - 1) }
     );
    },
   };
  }
  return r;
 });
});
export default N();
