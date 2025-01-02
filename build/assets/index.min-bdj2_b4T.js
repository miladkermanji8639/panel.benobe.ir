var l = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var r = l((e, t) => {
 /**
  * FormValidation (https://formvalidation.io)
  * The best validation library for JavaScript
  * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
  *
  * @license https://formvalidation.io/license
  * @package @form-validation/validator-ein
  * @version 2.4.0
  */ (function (a, n) {
  typeof e == 'object' && typeof t < 'u'
   ? (t.exports = n())
   : typeof define == 'function' && define.amd
     ? define(n)
     : (((a = typeof globalThis < 'u' ? globalThis : a || self).FormValidation =
        a.FormValidation || {}),
       (a.FormValidation.validators = a.FormValidation.validators || {}),
       (a.FormValidation.validators.ein = n()));
 })(void 0, function () {
  return function () {
   var a = {
    ANDOVER: ['10', '12'],
    ATLANTA: ['60', '67'],
    AUSTIN: ['50', '53'],
    BROOKHAVEN: [
     '01',
     '02',
     '03',
     '04',
     '05',
     '06',
     '11',
     '13',
     '14',
     '16',
     '21',
     '22',
     '23',
     '25',
     '34',
     '51',
     '52',
     '54',
     '55',
     '56',
     '57',
     '58',
     '59',
     '65',
    ],
    CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
    FRESNO: ['15', '24'],
    INTERNET: ['20', '26', '27', '45', '46', '47'],
    KANSAS_CITY: ['40', '44'],
    MEMPHIS: ['94', '95'],
    OGDEN: ['80', '90'],
    PHILADELPHIA: [
     '33',
     '39',
     '41',
     '42',
     '43',
     '48',
     '62',
     '63',
     '64',
     '66',
     '68',
     '71',
     '72',
     '73',
     '74',
     '75',
     '76',
     '77',
     '81',
     '82',
     '83',
     '84',
     '85',
     '86',
     '87',
     '88',
     '91',
     '92',
     '93',
     '98',
     '99',
    ],
    SMALL_BUSINESS_ADMINISTRATION: ['31'],
   };
   return {
    validate: function (n) {
     if (n.value === '') return { meta: null, valid: !0 };
     if (!/^[0-9]{2}-?[0-9]{7}$/.test(n.value))
      return { meta: null, valid: !1 };
     var o = ''.concat(n.value.substr(0, 2));
     for (var i in a)
      if (a[i].indexOf(o) !== -1) return { meta: { campus: i }, valid: !0 };
     return { meta: null, valid: !1 };
    },
   };
  };
 });
});
export default r();
