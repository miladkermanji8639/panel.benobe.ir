var p = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var v = p((o, f) => {
 (function (e, r) {
  typeof o == 'object' && typeof f < 'u'
   ? (f.exports = r(require('@form-validation/core')))
   : typeof define == 'function' && define.amd
     ? define(['@form-validation/core'], r)
     : ((e = typeof globalThis < 'u' ? globalThis : e || self),
       (e.FormValidation = e.FormValidation || {}),
       (e.FormValidation.validators = e.FormValidation.validators || {}),
       (e.FormValidation.validators.creditCard = r(e.FormValidation)));
 })(void 0, function (e) {
  var r = e.algorithms.luhn,
   i = {
    AMERICAN_EXPRESS: { length: [15], prefix: ['34', '37'] },
    DANKORT: { length: [16], prefix: ['5019'] },
    DINERS_CLUB: {
     length: [14],
     prefix: ['300', '301', '302', '303', '304', '305', '36'],
    },
    DINERS_CLUB_US: { length: [16], prefix: ['54', '55'] },
    DISCOVER: {
     length: [16],
     prefix: [
      '6011',
      '622126',
      '622127',
      '622128',
      '622129',
      '62213',
      '62214',
      '62215',
      '62216',
      '62217',
      '62218',
      '62219',
      '6222',
      '6223',
      '6224',
      '6225',
      '6226',
      '6227',
      '6228',
      '62290',
      '62291',
      '622920',
      '622921',
      '622922',
      '622923',
      '622924',
      '622925',
      '644',
      '645',
      '646',
      '647',
      '648',
      '649',
      '65',
     ],
    },
    ELO: {
     length: [16],
     prefix: [
      '4011',
      '4312',
      '4389',
      '4514',
      '4573',
      '4576',
      '5041',
      '5066',
      '5067',
      '509',
      '6277',
      '6362',
      '6363',
      '650',
      '6516',
      '6550',
     ],
    },
    FORBRUGSFORENINGEN: { length: [16], prefix: ['600722'] },
    JCB: {
     length: [16],
     prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
    },
    LASER: {
     length: [16, 17, 18, 19],
     prefix: ['6304', '6706', '6771', '6709'],
    },
    MAESTRO: {
     length: [12, 13, 14, 15, 16, 17, 18, 19],
     prefix: [
      '5018',
      '5020',
      '5038',
      '5868',
      '6304',
      '6759',
      '6761',
      '6762',
      '6763',
      '6764',
      '6765',
      '6766',
     ],
    },
    MASTERCARD: { length: [16], prefix: ['51', '52', '53', '54', '55'] },
    SOLO: { length: [16, 18, 19], prefix: ['6334', '6767'] },
    UNIONPAY: {
     length: [16, 17, 18, 19],
     prefix: [
      '622126',
      '622127',
      '622128',
      '622129',
      '62213',
      '62214',
      '62215',
      '62216',
      '62217',
      '62218',
      '62219',
      '6222',
      '6223',
      '6224',
      '6225',
      '6226',
      '6227',
      '6228',
      '62290',
      '62291',
      '622920',
      '622921',
      '622922',
      '622923',
      '622924',
      '622925',
     ],
    },
    VISA: { length: [16], prefix: ['4'] },
    VISA_ELECTRON: {
     length: [16],
     prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
    },
   };
  function h() {
   return {
    validate: function (n) {
     if (n.value === '') return { meta: { type: null }, valid: !0 };
     if (/[^0-9-\s]+/.test(n.value)) return { meta: { type: null }, valid: !1 };
     var a = n.value.replace(/\D/g, '');
     if (!r(a)) return { meta: { type: null }, valid: !1 };
     for (var l = 0, d = Object.keys(i); l < d.length; l++) {
      var t = d[l];
      for (var u in i[t].prefix)
       if (
        n.value.substr(0, i[t].prefix[u].length) === i[t].prefix[u] &&
        i[t].length.indexOf(a.length) !== -1
       )
        return { meta: { type: t }, valid: !0 };
     }
     return { meta: { type: null }, valid: !1 };
    },
   };
  }
  return h;
 });
});
export default v();
