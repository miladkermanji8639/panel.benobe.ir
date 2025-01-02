var f = (h, y) => () => (y || h((y = { exports: {} }).exports, y), y.exports);
var k = f((Y, p) => {
 (function (h, y) {
  typeof Y == 'object' && typeof p == 'object'
   ? (p.exports = y(require('moment'), require('fullcalendar')))
   : typeof define == 'function' && define.amd
     ? define(['moment', 'fullcalendar'], y)
     : typeof Y == 'object'
       ? y(require('moment'), require('fullcalendar'))
       : y(h.moment, h.FullCalendar);
 })(typeof self < 'u' ? self : void 0, function (h, y) {
  return (function (o) {
   function s(a) {
    if (t[a]) return t[a].exports;
    var e = (t[a] = { i: a, l: !1, exports: {} });
    return o[a].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
   }
   var t = {};
   return (
    (s.m = o),
    (s.c = t),
    (s.d = function (a, e, n) {
     s.o(a, e) ||
      Object.defineProperty(a, e, { configurable: !1, enumerable: !0, get: n });
    }),
    (s.n = function (a) {
     var e =
      a && a.__esModule
       ? function () {
          return a.default;
         }
       : function () {
          return a;
         };
     return s.d(e, 'a', e), e;
    }),
    (s.o = function (a, e) {
     return Object.prototype.hasOwnProperty.call(a, e);
    }),
    (s.p = ''),
    s((s.s = 438))
   );
  })([
   function (o, s) {
    o.exports = h;
   },
   function (o, s) {
    o.exports = y;
   },
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(72);
    var a = t(1);
    a.datepickerLocale('af', 'af', {
     closeText: 'Selekteer',
     prevText: 'Vorige',
     nextText: 'Volgende',
     currentText: 'Vandag',
     monthNames: [
      'Januarie',
      'Februarie',
      'Maart',
      'April',
      'Mei',
      'Junie',
      'Julie',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'Desember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mrt',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Des',
     ],
     dayNames: [
      'Sondag',
      'Maandag',
      'Dinsdag',
      'Woensdag',
      'Donderdag',
      'Vrydag',
      'Saterdag',
     ],
     dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
     dayNamesMin: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('af', {
      buttonText: {
       year: 'Jaar',
       month: 'Maand',
       week: 'Week',
       day: 'Dag',
       list: 'Agenda',
      },
      allDayHtml: 'Heeldag',
      eventLimitText: 'Addisionele',
      noEventsMessage: 'Daar is geen gebeurtenisse nie',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('af', {
      months:
       'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
      weekdays:
       'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
      weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
      weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
      meridiemParse: /vm|nm/i,
      isPM: function (e) {
       return /^nm$/i.test(e);
      },
      meridiem: function (e, n, d) {
       return e < 12 ? (d ? 'vm' : 'VM') : d ? 'nm' : 'NM';
      },
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Vandag om] LT',
       nextDay: '[Môre om] LT',
       nextWeek: 'dddd [om] LT',
       lastDay: '[Gister om] LT',
       lastWeek: '[Laas] dddd [om] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'oor %s',
       past: '%s gelede',
       s: "'n paar sekondes",
       ss: '%d sekondes',
       m: "'n minuut",
       mm: '%d minute',
       h: "'n uur",
       hh: '%d ure',
       d: "'n dag",
       dd: '%d dae',
       M: "'n maand",
       MM: '%d maande',
       y: "'n jaar",
       yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
       return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de');
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(74);
    var a = t(1);
    a.datepickerLocale('ar-dz', 'ar-DZ', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'جانفي',
      'فيفري',
      'مارس',
      'أفريل',
      'ماي',
      'جوان',
      'جويلية',
      'أوت',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 6,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-dz', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ar-dz', {
      months:
       'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      monthsShort:
       'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[اليوم على الساعة] LT',
       nextDay: '[غدا على الساعة] LT',
       nextWeek: 'dddd [على الساعة] LT',
       lastDay: '[أمس على الساعة] LT',
       lastWeek: 'dddd [على الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'في %s',
       past: 'منذ %s',
       s: 'ثوان',
       ss: '%d ثانية',
       m: 'دقيقة',
       mm: '%d دقائق',
       h: 'ساعة',
       hh: '%d ساعات',
       d: 'يوم',
       dd: '%d أيام',
       M: 'شهر',
       MM: '%d أشهر',
       y: 'سنة',
       yy: '%d سنوات',
      },
      week: { dow: 0, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(76);
    var a = t(1);
    a.datepickerLocale('ar-kw', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-kw', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ar-kw', {
      months:
       'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
        '_',
       ),
      monthsShort:
       'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
        '_',
       ),
      weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[اليوم على الساعة] LT',
       nextDay: '[غدا على الساعة] LT',
       nextWeek: 'dddd [على الساعة] LT',
       lastDay: '[أمس على الساعة] LT',
       lastWeek: 'dddd [على الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'في %s',
       past: 'منذ %s',
       s: 'ثوان',
       ss: '%d ثانية',
       m: 'دقيقة',
       mm: '%d دقائق',
       h: 'ساعة',
       hh: '%d ساعات',
       d: 'يوم',
       dd: '%d أيام',
       M: 'شهر',
       MM: '%d أشهر',
       y: 'سنة',
       yy: '%d سنوات',
      },
      week: { dow: 0, doy: 12 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(78);
    var a = t(1);
    a.datepickerLocale('ar-ly', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-ly', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
       1: '1',
       2: '2',
       3: '3',
       4: '4',
       5: '5',
       6: '6',
       7: '7',
       8: '8',
       9: '9',
       0: '0',
      },
      n = function (m) {
       return m === 0
        ? 0
        : m === 1
          ? 1
          : m === 2
            ? 2
            : m % 100 >= 3 && m % 100 <= 10
              ? 3
              : m % 100 >= 11
                ? 4
                : 5;
      },
      d = {
       s: [
        'أقل من ثانية',
        'ثانية واحدة',
        ['ثانيتان', 'ثانيتين'],
        '%d ثوان',
        '%d ثانية',
        '%d ثانية',
       ],
       m: [
        'أقل من دقيقة',
        'دقيقة واحدة',
        ['دقيقتان', 'دقيقتين'],
        '%d دقائق',
        '%d دقيقة',
        '%d دقيقة',
       ],
       h: [
        'أقل من ساعة',
        'ساعة واحدة',
        ['ساعتان', 'ساعتين'],
        '%d ساعات',
        '%d ساعة',
        '%d ساعة',
       ],
       d: [
        'أقل من يوم',
        'يوم واحد',
        ['يومان', 'يومين'],
        '%d أيام',
        '%d يومًا',
        '%d يوم',
       ],
       M: [
        'أقل من شهر',
        'شهر واحد',
        ['شهران', 'شهرين'],
        '%d أشهر',
        '%d شهرا',
        '%d شهر',
       ],
       y: [
        'أقل من عام',
        'عام واحد',
        ['عامان', 'عامين'],
        '%d أعوام',
        '%d عامًا',
        '%d عام',
       ],
      },
      i = function (m) {
       return function (_, u, l, M) {
        var c = n(_),
         L = d[m][n(_)];
        return c === 2 && (L = L[u ? 0 : 1]), L.replace(/%d/i, _);
       };
      },
      r = [
       'يناير',
       'فبراير',
       'مارس',
       'أبريل',
       'مايو',
       'يونيو',
       'يوليو',
       'أغسطس',
       'سبتمبر',
       'أكتوبر',
       'نوفمبر',
       'ديسمبر',
      ];
     return a.defineLocale('ar-ly', {
      months: r,
      monthsShort: r,
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'D/‏M/‏YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /ص|م/,
      isPM: function (m) {
       return m === 'م';
      },
      meridiem: function (m, _, u) {
       return m < 12 ? 'ص' : 'م';
      },
      calendar: {
       sameDay: '[اليوم عند الساعة] LT',
       nextDay: '[غدًا عند الساعة] LT',
       nextWeek: 'dddd [عند الساعة] LT',
       lastDay: '[أمس عند الساعة] LT',
       lastWeek: 'dddd [عند الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'بعد %s',
       past: 'منذ %s',
       s: i('s'),
       ss: i('s'),
       m: i('m'),
       mm: i('m'),
       h: i('h'),
       hh: i('h'),
       d: i('d'),
       dd: i('d'),
       M: i('M'),
       MM: i('M'),
       y: i('y'),
       yy: i('y'),
      },
      preparse: function (m) {
       return m.replace(/،/g, ',');
      },
      postformat: function (m) {
       return m
        .replace(/\d/g, function (_) {
         return e[_];
        })
        .replace(/,/g, '،');
      },
      week: { dow: 6, doy: 12 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(80);
    var a = t(1);
    a.datepickerLocale('ar-ma', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-ma', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ar-ma', {
      months:
       'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
        '_',
       ),
      monthsShort:
       'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
        '_',
       ),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[اليوم على الساعة] LT',
       nextDay: '[غدا على الساعة] LT',
       nextWeek: 'dddd [على الساعة] LT',
       lastDay: '[أمس على الساعة] LT',
       lastWeek: 'dddd [على الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'في %s',
       past: 'منذ %s',
       s: 'ثوان',
       ss: '%d ثانية',
       m: 'دقيقة',
       mm: '%d دقائق',
       h: 'ساعة',
       hh: '%d ساعات',
       d: 'يوم',
       dd: '%d أيام',
       M: 'شهر',
       MM: '%d أشهر',
       y: 'سنة',
       yy: '%d سنوات',
      },
      week: { dow: 6, doy: 12 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(82);
    var a = t(1);
    a.datepickerLocale('ar-sa', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-sa', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
       1: '١',
       2: '٢',
       3: '٣',
       4: '٤',
       5: '٥',
       6: '٦',
       7: '٧',
       8: '٨',
       9: '٩',
       0: '٠',
      },
      n = {
       '١': '1',
       '٢': '2',
       '٣': '3',
       '٤': '4',
       '٥': '5',
       '٦': '6',
       '٧': '7',
       '٨': '8',
       '٩': '9',
       '٠': '0',
      };
     return a.defineLocale('ar-sa', {
      months:
       'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      monthsShort:
       'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /ص|م/,
      isPM: function (d) {
       return d === 'م';
      },
      meridiem: function (d, i, r) {
       return d < 12 ? 'ص' : 'م';
      },
      calendar: {
       sameDay: '[اليوم على الساعة] LT',
       nextDay: '[غدا على الساعة] LT',
       nextWeek: 'dddd [على الساعة] LT',
       lastDay: '[أمس على الساعة] LT',
       lastWeek: 'dddd [على الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'في %s',
       past: 'منذ %s',
       s: 'ثوان',
       ss: '%d ثانية',
       m: 'دقيقة',
       mm: '%d دقائق',
       h: 'ساعة',
       hh: '%d ساعات',
       d: 'يوم',
       dd: '%d أيام',
       M: 'شهر',
       MM: '%d أشهر',
       y: 'سنة',
       yy: '%d سنوات',
      },
      preparse: function (d) {
       return d
        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (i) {
         return n[i];
        })
        .replace(/،/g, ',');
      },
      postformat: function (d) {
       return d
        .replace(/\d/g, function (i) {
         return e[i];
        })
        .replace(/,/g, '،');
      },
      week: { dow: 0, doy: 6 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(84);
    var a = t(1);
    a.datepickerLocale('ar-tn', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar-tn', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ar-tn', {
      months:
       'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      monthsShort:
       'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
        '_',
       ),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[اليوم على الساعة] LT',
       nextDay: '[غدا على الساعة] LT',
       nextWeek: 'dddd [على الساعة] LT',
       lastDay: '[أمس على الساعة] LT',
       lastWeek: 'dddd [على الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'في %s',
       past: 'منذ %s',
       s: 'ثوان',
       ss: '%d ثانية',
       m: 'دقيقة',
       mm: '%d دقائق',
       h: 'ساعة',
       hh: '%d ساعات',
       d: 'يوم',
       dd: '%d أيام',
       M: 'شهر',
       MM: '%d أشهر',
       y: 'سنة',
       yy: '%d سنوات',
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(86);
    var a = t(1);
    a.datepickerLocale('ar', 'ar', {
     closeText: 'إغلاق',
     prevText: '&#x3C;السابق',
     nextText: 'التالي&#x3E;',
     currentText: 'اليوم',
     monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
     dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
     weekHeader: 'أسبوع',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ar', {
      buttonText: { month: 'شهر', week: 'أسبوع', day: 'يوم', list: 'أجندة' },
      allDayText: 'اليوم كله',
      eventLimitText: 'أخرى',
      noEventsMessage: 'أي أحداث لعرض',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
       1: '١',
       2: '٢',
       3: '٣',
       4: '٤',
       5: '٥',
       6: '٦',
       7: '٧',
       8: '٨',
       9: '٩',
       0: '٠',
      },
      n = {
       '١': '1',
       '٢': '2',
       '٣': '3',
       '٤': '4',
       '٥': '5',
       '٦': '6',
       '٧': '7',
       '٨': '8',
       '٩': '9',
       '٠': '0',
      },
      d = function (_) {
       return _ === 0
        ? 0
        : _ === 1
          ? 1
          : _ === 2
            ? 2
            : _ % 100 >= 3 && _ % 100 <= 10
              ? 3
              : _ % 100 >= 11
                ? 4
                : 5;
      },
      i = {
       s: [
        'أقل من ثانية',
        'ثانية واحدة',
        ['ثانيتان', 'ثانيتين'],
        '%d ثوان',
        '%d ثانية',
        '%d ثانية',
       ],
       m: [
        'أقل من دقيقة',
        'دقيقة واحدة',
        ['دقيقتان', 'دقيقتين'],
        '%d دقائق',
        '%d دقيقة',
        '%d دقيقة',
       ],
       h: [
        'أقل من ساعة',
        'ساعة واحدة',
        ['ساعتان', 'ساعتين'],
        '%d ساعات',
        '%d ساعة',
        '%d ساعة',
       ],
       d: [
        'أقل من يوم',
        'يوم واحد',
        ['يومان', 'يومين'],
        '%d أيام',
        '%d يومًا',
        '%d يوم',
       ],
       M: [
        'أقل من شهر',
        'شهر واحد',
        ['شهران', 'شهرين'],
        '%d أشهر',
        '%d شهرا',
        '%d شهر',
       ],
       y: [
        'أقل من عام',
        'عام واحد',
        ['عامان', 'عامين'],
        '%d أعوام',
        '%d عامًا',
        '%d عام',
       ],
      },
      r = function (_) {
       return function (u, l, M, c) {
        var L = d(u),
         T = i[_][d(u)];
        return L === 2 && (T = T[l ? 0 : 1]), T.replace(/%d/i, u);
       };
      },
      m = [
       'يناير',
       'فبراير',
       'مارس',
       'أبريل',
       'مايو',
       'يونيو',
       'يوليو',
       'أغسطس',
       'سبتمبر',
       'أكتوبر',
       'نوفمبر',
       'ديسمبر',
      ];
     return a.defineLocale('ar', {
      months: m,
      monthsShort: m,
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
       '_',
      ),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'D/‏M/‏YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /ص|م/,
      isPM: function (_) {
       return _ === 'م';
      },
      meridiem: function (_, u, l) {
       return _ < 12 ? 'ص' : 'م';
      },
      calendar: {
       sameDay: '[اليوم عند الساعة] LT',
       nextDay: '[غدًا عند الساعة] LT',
       nextWeek: 'dddd [عند الساعة] LT',
       lastDay: '[أمس عند الساعة] LT',
       lastWeek: 'dddd [عند الساعة] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'بعد %s',
       past: 'منذ %s',
       s: r('s'),
       ss: r('s'),
       m: r('m'),
       mm: r('m'),
       h: r('h'),
       hh: r('h'),
       d: r('d'),
       dd: r('d'),
       M: r('M'),
       MM: r('M'),
       y: r('y'),
       yy: r('y'),
      },
      preparse: function (_) {
       return _.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (u) {
        return n[u];
       }).replace(/،/g, ',');
      },
      postformat: function (_) {
       return _.replace(/\d/g, function (u) {
        return e[u];
       }).replace(/,/g, '،');
      },
      week: { dow: 6, doy: 12 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(88);
    var a = t(1);
    a.datepickerLocale('be', 'be', {
     closeText: 'Зачыніць',
     prevText: '&#x3C;Папярэд',
     nextText: 'След&#x3E;',
     currentText: 'Сёння',
     monthNames: [
      'Студзень',
      'Люты',
      'Сакавік',
      'Красавік',
      'Трав',
      'Чэрвень',
      'Ліпень',
      'Жнівень',
      'Верасень',
      'Кастрычнік',
      'Лістапад',
      'Снежань',
     ],
     monthNamesShort: [
      'Студ',
      'Лют',
      'Сак',
      'Крас',
      'Трав',
      'Чэрв',
      'Ліп',
      'Жнів',
      'Вер',
      'Каст',
      'Ліст',
      'Снеж',
     ],
     dayNames: [
      'нядзеля',
      'панядзелак',
      'аўторак',
      'серада',
      'чацвер',
      'пятніца',
      'субота',
     ],
     dayNamesShort: ['ндз', 'пнд', 'аўт', 'срд', 'чцв', 'птн', 'сбт'],
     dayNamesMin: ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб'],
     weekHeader: 'Ндз',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('be', {
      buttonText: {
       month: 'Месяц',
       week: 'Тыдзень',
       day: 'Дзень',
       list: 'Парадак дня',
      },
      allDayHtml: 'Увесь<br />дзень',
      eventLimitText: function (e) {
       return '+ яшчэ ' + e;
      },
      noEventsMessage: 'Няма падзей для адлюстравання',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(d, i) {
      var r = d.split('_');
      return i % 10 == 1 && i % 100 != 11
       ? r[0]
       : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
         ? r[1]
         : r[2];
     }
     function n(d, i, r) {
      var m = {
       ss: i ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
       mm: i ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
       hh: i ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
       dd: 'дзень_дні_дзён',
       MM: 'месяц_месяцы_месяцаў',
       yy: 'год_гады_гадоў',
      };
      return r === 'm'
       ? i
         ? 'хвіліна'
         : 'хвіліну'
       : r === 'h'
         ? i
           ? 'гадзіна'
           : 'гадзіну'
         : d + ' ' + e(m[r], +d);
     }
     return a.defineLocale('be', {
      months: {
       format:
        'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
         '_',
        ),
       standalone:
        'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
         '_',
        ),
      },
      monthsShort:
       'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
      weekdays: {
       format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split(
        '_',
       ),
       standalone:
        'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
       isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
      },
      weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY г.',
       LLL: 'D MMMM YYYY г., HH:mm',
       LLLL: 'dddd, D MMMM YYYY г., HH:mm',
      },
      calendar: {
       sameDay: '[Сёння ў] LT',
       nextDay: '[Заўтра ў] LT',
       lastDay: '[Учора ў] LT',
       nextWeek: function () {
        return '[У] dddd [ў] LT';
       },
       lastWeek: function () {
        switch (this.day()) {
         case 0:
         case 3:
         case 5:
         case 6:
          return '[У мінулую] dddd [ў] LT';
         case 1:
         case 2:
         case 4:
          return '[У мінулы] dddd [ў] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'праз %s',
       past: '%s таму',
       s: 'некалькі секунд',
       m: n,
       mm: n,
       h: n,
       hh: n,
       d: 'дзень',
       dd: n,
       M: 'месяц',
       MM: n,
       y: 'год',
       yy: n,
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM: function (d) {
       return /^(дня|вечара)$/.test(d);
      },
      meridiem: function (d, i, r) {
       return d < 4 ? 'ночы' : d < 12 ? 'раніцы' : d < 17 ? 'дня' : 'вечара';
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function (d, i) {
       switch (i) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
         return (d % 10 != 2 && d % 10 != 3) || d % 100 == 12 || d % 100 == 13
          ? d + '-ы'
          : d + '-і';
        case 'D':
         return d + '-га';
        default:
         return d;
       }
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(90);
    var a = t(1);
    a.datepickerLocale('bg', 'bg', {
     closeText: 'затвори',
     prevText: '&#x3C;назад',
     nextText: 'напред&#x3E;',
     nextBigText: '&#x3E;&#x3E;',
     currentText: 'днес',
     monthNames: [
      'Януари',
      'Февруари',
      'Март',
      'Април',
      'Май',
      'Юни',
      'Юли',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
     ],
     monthNamesShort: [
      'Яну',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Юни',
      'Юли',
      'Авг',
      'Сеп',
      'Окт',
      'Нов',
      'Дек',
     ],
     dayNames: [
      'Неделя',
      'Понеделник',
      'Вторник',
      'Сряда',
      'Четвъртък',
      'Петък',
      'Събота',
     ],
     dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
     dayNamesMin: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Съ'],
     weekHeader: 'Wk',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('bg', {
      buttonText: {
       month: 'Месец',
       week: 'Седмица',
       day: 'Ден',
       list: 'График',
      },
      allDayText: 'Цял ден',
      eventLimitText: function (e) {
       return '+още ' + e;
      },
      noEventsMessage: 'Няма събития за показване',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('bg', {
      months:
       'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
        '_',
       ),
      monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
      weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split(
       '_',
      ),
      weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'D.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY H:mm',
       LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[Днес в] LT',
       nextDay: '[Утре в] LT',
       nextWeek: 'dddd [в] LT',
       lastDay: '[Вчера в] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
         case 3:
         case 6:
          return '[Миналата] dddd [в] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[Миналия] dddd [в] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'след %s',
       past: 'преди %s',
       s: 'няколко секунди',
       ss: '%d секунди',
       m: 'минута',
       mm: '%d минути',
       h: 'час',
       hh: '%d часа',
       d: 'ден',
       dd: '%d дена',
       M: 'месец',
       MM: '%d месеца',
       y: 'година',
       yy: '%d години',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function (e) {
       var n = e % 10,
        d = e % 100;
       return e === 0
        ? e + '-ев'
        : d === 0
          ? e + '-ен'
          : d > 10 && d < 20
            ? e + '-ти'
            : n === 1
              ? e + '-ви'
              : n === 2
                ? e + '-ри'
                : n === 7 || n === 8
                  ? e + '-ми'
                  : e + '-ти';
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(92);
    var a = t(1);
    a.datepickerLocale('bs', 'bs', {
     closeText: 'Zatvori',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Danas',
     monthNames: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'August',
      'Septembar',
      'Oktobar',
      'Novmbar',
      'Decembar',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
     dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
     dayNamesMin: ['Ne', 'Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su'],
     weekHeader: 'Sed',
     dateFormat: 'dd.mm.yy.',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('bs', {
      buttonText: {
       prev: 'Prošli',
       next: 'Sljedeći',
       month: 'Mjesec',
       week: 'Sedmica',
       day: 'Dan',
       list: 'Raspored',
      },
      allDayText: 'Cijeli dan',
      eventLimitText: function (e) {
       return '+ još ' + e;
      },
      noEventsMessage: 'Nema događaja za prikazivanje',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i) {
      var r = n + ' ';
      switch (i) {
       case 'ss':
        return (r +=
         n === 1
          ? 'sekunda'
          : n === 2 || n === 3 || n === 4
            ? 'sekunde'
            : 'sekundi');
       case 'm':
        return d ? 'jedna minuta' : 'jedne minute';
       case 'mm':
        return (r +=
         n === 1
          ? 'minuta'
          : n === 2 || n === 3 || n === 4
            ? 'minute'
            : 'minuta');
       case 'h':
        return d ? 'jedan sat' : 'jednog sata';
       case 'hh':
        return (r +=
         n === 1 ? 'sat' : n === 2 || n === 3 || n === 4 ? 'sata' : 'sati');
       case 'dd':
        return (r += n === 1 ? 'dan' : 'dana');
       case 'MM':
        return (r +=
         n === 1
          ? 'mjesec'
          : n === 2 || n === 3 || n === 4
            ? 'mjeseca'
            : 'mjeseci');
       case 'yy':
        return (r +=
         n === 1
          ? 'godina'
          : n === 2 || n === 3 || n === 4
            ? 'godine'
            : 'godina');
      }
     }
     return a.defineLocale('bs', {
      months:
       'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
        '_',
       ),
      monthsShort:
       'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[danas u] LT',
       nextDay: '[sutra u] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[u] [nedjelju] [u] LT';
         case 3:
          return '[u] [srijedu] [u] LT';
         case 6:
          return '[u] [subotu] [u] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[u] dddd [u] LT';
        }
       },
       lastDay: '[jučer u] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
         case 3:
          return '[prošlu] dddd [u] LT';
         case 6:
          return '[prošle] [subote] [u] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[prošli] dddd [u] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: 'prije %s',
       s: 'par sekundi',
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: 'dan',
       dd: e,
       M: 'mjesec',
       MM: e,
       y: 'godinu',
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(94);
    var a = t(1);
    a.datepickerLocale('ca', 'ca', {
     closeText: 'Tanca',
     prevText: 'Anterior',
     nextText: 'Següent',
     currentText: 'Avui',
     monthNames: [
      'gener',
      'febrer',
      'març',
      'abril',
      'maig',
      'juny',
      'juliol',
      'agost',
      'setembre',
      'octubre',
      'novembre',
      'desembre',
     ],
     monthNamesShort: [
      'gen',
      'feb',
      'març',
      'abr',
      'maig',
      'juny',
      'jul',
      'ag',
      'set',
      'oct',
      'nov',
      'des',
     ],
     dayNames: [
      'diumenge',
      'dilluns',
      'dimarts',
      'dimecres',
      'dijous',
      'divendres',
      'dissabte',
     ],
     dayNamesShort: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
     dayNamesMin: ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'],
     weekHeader: 'Set',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ca', {
      buttonText: { month: 'Mes', week: 'Setmana', day: 'Dia', list: 'Agenda' },
      allDayText: 'Tot el dia',
      eventLimitText: 'més',
      noEventsMessage: 'No hi ha esdeveniments per mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ca', {
      months: {
       standalone:
        'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split(
         '_',
        ),
       format:
        "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
         '_',
        ),
       isFormat: /D[oD]?(\s)+MMMM/,
      },
      monthsShort:
       'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
      weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
      weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM [de] YYYY',
       ll: 'D MMM YYYY',
       LLL: 'D MMMM [de] YYYY [a les] H:mm',
       lll: 'D MMM YYYY, H:mm',
       LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
       llll: 'ddd D MMM YYYY, H:mm',
      },
      calendar: {
       sameDay: function () {
        return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
       },
       nextDay: function () {
        return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
       },
       nextWeek: function () {
        return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
       },
       lastDay: function () {
        return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
       },
       lastWeek: function () {
        return (
         '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT'
        );
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: "d'aquí %s",
       past: 'fa %s',
       s: 'uns segons',
       ss: '%d segons',
       m: 'un minut',
       mm: '%d minuts',
       h: 'una hora',
       hh: '%d hores',
       d: 'un dia',
       dd: '%d dies',
       M: 'un mes',
       MM: '%d mesos',
       y: 'un any',
       yy: '%d anys',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal: function (e, n) {
       var d =
        e === 1 ? 'r' : e === 2 ? 'n' : e === 3 ? 'r' : e === 4 ? 't' : 'è';
       return (n !== 'w' && n !== 'W') || (d = 'a'), e + d;
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(96);
    var a = t(1);
    a.datepickerLocale('cs', 'cs', {
     closeText: 'Zavřít',
     prevText: '&#x3C;Dříve',
     nextText: 'Později&#x3E;',
     currentText: 'Nyní',
     monthNames: [
      'leden',
      'únor',
      'březen',
      'duben',
      'květen',
      'červen',
      'červenec',
      'srpen',
      'září',
      'říjen',
      'listopad',
      'prosinec',
     ],
     monthNamesShort: [
      'led',
      'úno',
      'bře',
      'dub',
      'kvě',
      'čer',
      'čvc',
      'srp',
      'zář',
      'říj',
      'lis',
      'pro',
     ],
     dayNames: [
      'neděle',
      'pondělí',
      'úterý',
      'středa',
      'čtvrtek',
      'pátek',
      'sobota',
     ],
     dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
     dayNamesMin: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
     weekHeader: 'Týd',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('cs', {
      buttonText: { month: 'Měsíc', week: 'Týden', day: 'Den', list: 'Agenda' },
      allDayText: 'Celý den',
      eventLimitText: function (e) {
       return '+další: ' + e;
      },
      noEventsMessage: 'Žádné akce k zobrazení',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(_) {
      return _ > 1 && _ < 5 && ~~(_ / 10) != 1;
     }
     function n(_, u, l, M) {
      var c = _ + ' ';
      switch (l) {
       case 's':
        return u || M ? 'pár sekund' : 'pár sekundami';
       case 'ss':
        return u || M ? c + (e(_) ? 'sekundy' : 'sekund') : c + 'sekundami';
       case 'm':
        return u ? 'minuta' : M ? 'minutu' : 'minutou';
       case 'mm':
        return u || M ? c + (e(_) ? 'minuty' : 'minut') : c + 'minutami';
       case 'h':
        return u ? 'hodina' : M ? 'hodinu' : 'hodinou';
       case 'hh':
        return u || M ? c + (e(_) ? 'hodiny' : 'hodin') : c + 'hodinami';
       case 'd':
        return u || M ? 'den' : 'dnem';
       case 'dd':
        return u || M ? c + (e(_) ? 'dny' : 'dní') : c + 'dny';
       case 'M':
        return u || M ? 'měsíc' : 'měsícem';
       case 'MM':
        return u || M ? c + (e(_) ? 'měsíce' : 'měsíců') : c + 'měsíci';
       case 'y':
        return u || M ? 'rok' : 'rokem';
       case 'yy':
        return u || M ? c + (e(_) ? 'roky' : 'let') : c + 'lety';
      }
     }
     var d =
       'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split(
        '_',
       ),
      i = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
      r = [
       /^led/i,
       /^úno/i,
       /^bře/i,
       /^dub/i,
       /^kvě/i,
       /^(čvn|červen$|června)/i,
       /^(čvc|červenec|července)/i,
       /^srp/i,
       /^zář/i,
       /^říj/i,
       /^lis/i,
       /^pro/i,
      ],
      m =
       /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
     return a.defineLocale('cs', {
      months: d,
      monthsShort: i,
      monthsRegex: m,
      monthsShortRegex: m,
      monthsStrictRegex:
       /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex:
       /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
      weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
      weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd D. MMMM YYYY H:mm',
       l: 'D. M. YYYY',
      },
      calendar: {
       sameDay: '[dnes v] LT',
       nextDay: '[zítra v] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[v neděli v] LT';
         case 1:
         case 2:
          return '[v] dddd [v] LT';
         case 3:
          return '[ve středu v] LT';
         case 4:
          return '[ve čtvrtek v] LT';
         case 5:
          return '[v pátek v] LT';
         case 6:
          return '[v sobotu v] LT';
        }
       },
       lastDay: '[včera v] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return '[minulou neděli v] LT';
         case 1:
         case 2:
          return '[minulé] dddd [v] LT';
         case 3:
          return '[minulou středu v] LT';
         case 4:
         case 5:
          return '[minulý] dddd [v] LT';
         case 6:
          return '[minulou sobotu v] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: 'před %s',
       s: n,
       ss: n,
       m: n,
       mm: n,
       h: n,
       hh: n,
       d: n,
       dd: n,
       M: n,
       MM: n,
       y: n,
       yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(98);
    var a = t(1);
    a.datepickerLocale('da', 'da', {
     closeText: 'Luk',
     prevText: '&#x3C;Forrige',
     nextText: 'Næste&#x3E;',
     currentText: 'Idag',
     monthNames: [
      'Januar',
      'Februar',
      'Marts',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
     ],
     dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
     dayNamesMin: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
     weekHeader: 'Uge',
     dateFormat: 'dd-mm-yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('da', {
      buttonText: { month: 'Måned', week: 'Uge', day: 'Dag', list: 'Agenda' },
      allDayText: 'Hele dagen',
      eventLimitText: 'flere',
      noEventsMessage: 'Ingen arrangementer at vise',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('da', {
      months:
       'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
        '_',
       ),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY HH:mm',
       LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
       sameDay: '[i dag kl.] LT',
       nextDay: '[i morgen kl.] LT',
       nextWeek: 'på dddd [kl.] LT',
       lastDay: '[i går kl.] LT',
       lastWeek: '[i] dddd[s kl.] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'om %s',
       past: '%s siden',
       s: 'få sekunder',
       ss: '%d sekunder',
       m: 'et minut',
       mm: '%d minutter',
       h: 'en time',
       hh: '%d timer',
       d: 'en dag',
       dd: '%d dage',
       M: 'en måned',
       MM: '%d måneder',
       y: 'et år',
       yy: '%d år',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(100);
    var a = t(1);
    a.datepickerLocale('de-at', 'de', {
     closeText: 'Schließen',
     prevText: '&#x3C;Zurück',
     nextText: 'Vor&#x3E;',
     currentText: 'Heute',
     monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
     ],
     dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     weekHeader: 'KW',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('de-at', {
      buttonText: {
       year: 'Jahr',
       month: 'Monat',
       week: 'Woche',
       day: 'Tag',
       list: 'Terminübersicht',
      },
      allDayText: 'Ganztägig',
      eventLimitText: function (e) {
       return '+ weitere ' + e;
      },
      noEventsMessage: 'Keine Ereignisse anzuzeigen',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i, r) {
      var m = {
       m: ['eine Minute', 'einer Minute'],
       h: ['eine Stunde', 'einer Stunde'],
       d: ['ein Tag', 'einem Tag'],
       dd: [n + ' Tage', n + ' Tagen'],
       M: ['ein Monat', 'einem Monat'],
       MM: [n + ' Monate', n + ' Monaten'],
       y: ['ein Jahr', 'einem Jahr'],
       yy: [n + ' Jahre', n + ' Jahren'],
      };
      return d ? m[i][0] : m[i][1];
     }
     return a.defineLocale('de-at', {
      months:
       'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
        '_',
       ),
      monthsShort:
       'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY HH:mm',
       LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[heute um] LT [Uhr]',
       sameElse: 'L',
       nextDay: '[morgen um] LT [Uhr]',
       nextWeek: 'dddd [um] LT [Uhr]',
       lastDay: '[gestern um] LT [Uhr]',
       lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
       future: 'in %s',
       past: 'vor %s',
       s: 'ein paar Sekunden',
       ss: '%d Sekunden',
       m: e,
       mm: '%d Minuten',
       h: e,
       hh: '%d Stunden',
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(102);
    var a = t(1);
    a.datepickerLocale('de-ch', 'de', {
     closeText: 'Schließen',
     prevText: '&#x3C;Zurück',
     nextText: 'Vor&#x3E;',
     currentText: 'Heute',
     monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
     ],
     dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     weekHeader: 'KW',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('de-ch', {
      buttonText: {
       year: 'Jahr',
       month: 'Monat',
       week: 'Woche',
       day: 'Tag',
       list: 'Terminübersicht',
      },
      allDayText: 'Ganztägig',
      eventLimitText: function (e) {
       return '+ weitere ' + e;
      },
      noEventsMessage: 'Keine Ereignisse anzuzeigen',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i, r) {
      var m = {
       m: ['eine Minute', 'einer Minute'],
       h: ['eine Stunde', 'einer Stunde'],
       d: ['ein Tag', 'einem Tag'],
       dd: [n + ' Tage', n + ' Tagen'],
       M: ['ein Monat', 'einem Monat'],
       MM: [n + ' Monate', n + ' Monaten'],
       y: ['ein Jahr', 'einem Jahr'],
       yy: [n + ' Jahre', n + ' Jahren'],
      };
      return d ? m[i][0] : m[i][1];
     }
     return a.defineLocale('de-ch', {
      months:
       'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
        '_',
       ),
      monthsShort:
       'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY HH:mm',
       LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[heute um] LT [Uhr]',
       sameElse: 'L',
       nextDay: '[morgen um] LT [Uhr]',
       nextWeek: 'dddd [um] LT [Uhr]',
       lastDay: '[gestern um] LT [Uhr]',
       lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
       future: 'in %s',
       past: 'vor %s',
       s: 'ein paar Sekunden',
       ss: '%d Sekunden',
       m: e,
       mm: '%d Minuten',
       h: e,
       hh: '%d Stunden',
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(104);
    var a = t(1);
    a.datepickerLocale('de', 'de', {
     closeText: 'Schließen',
     prevText: '&#x3C;Zurück',
     nextText: 'Vor&#x3E;',
     currentText: 'Heute',
     monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mär',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
     ],
     dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     weekHeader: 'KW',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('de', {
      buttonText: {
       year: 'Jahr',
       month: 'Monat',
       week: 'Woche',
       day: 'Tag',
       list: 'Terminübersicht',
      },
      allDayText: 'Ganztägig',
      eventLimitText: function (e) {
       return '+ weitere ' + e;
      },
      noEventsMessage: 'Keine Ereignisse anzuzeigen',
      dayOfMonthFormat: 'ddd DD.MM.',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i, r) {
      var m = {
       m: ['eine Minute', 'einer Minute'],
       h: ['eine Stunde', 'einer Stunde'],
       d: ['ein Tag', 'einem Tag'],
       dd: [n + ' Tage', n + ' Tagen'],
       M: ['ein Monat', 'einem Monat'],
       MM: [n + ' Monate', n + ' Monaten'],
       y: ['ein Jahr', 'einem Jahr'],
       yy: [n + ' Jahre', n + ' Jahren'],
      };
      return d ? m[i][0] : m[i][1];
     }
     return a.defineLocale('de', {
      months:
       'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
        '_',
       ),
      monthsShort:
       'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY HH:mm',
       LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[heute um] LT [Uhr]',
       sameElse: 'L',
       nextDay: '[morgen um] LT [Uhr]',
       nextWeek: 'dddd [um] LT [Uhr]',
       lastDay: '[gestern um] LT [Uhr]',
       lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
       future: 'in %s',
       past: 'vor %s',
       s: 'ein paar Sekunden',
       ss: '%d Sekunden',
       m: e,
       mm: '%d Minuten',
       h: e,
       hh: '%d Stunden',
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(106);
    var a = t(1);
    a.datepickerLocale('el', 'el', {
     closeText: 'Κλείσιμο',
     prevText: 'Προηγούμενος',
     nextText: 'Επόμενος',
     currentText: 'Σήμερα',
     monthNames: [
      'Ιανουάριος',
      'Φεβρουάριος',
      'Μάρτιος',
      'Απρίλιος',
      'Μάιος',
      'Ιούνιος',
      'Ιούλιος',
      'Αύγουστος',
      'Σεπτέμβριος',
      'Οκτώβριος',
      'Νοέμβριος',
      'Δεκέμβριος',
     ],
     monthNamesShort: [
      'Ιαν',
      'Φεβ',
      'Μαρ',
      'Απρ',
      'Μαι',
      'Ιουν',
      'Ιουλ',
      'Αυγ',
      'Σεπ',
      'Οκτ',
      'Νοε',
      'Δεκ',
     ],
     dayNames: [
      'Κυριακή',
      'Δευτέρα',
      'Τρίτη',
      'Τετάρτη',
      'Πέμπτη',
      'Παρασκευή',
      'Σάββατο',
     ],
     dayNamesShort: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
     dayNamesMin: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
     weekHeader: 'Εβδ',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('el', {
      buttonText: {
       month: 'Μήνας',
       week: 'Εβδομάδα',
       day: 'Ημέρα',
       list: 'Ατζέντα',
      },
      allDayText: 'Ολοήμερο',
      eventLimitText: 'περισσότερα',
      noEventsMessage: 'Δεν υπάρχουν γεγονότα για να εμφανιστεί',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n) {
      return (
       (typeof Function < 'u' && n instanceof Function) ||
       Object.prototype.toString.call(n) === '[object Function]'
      );
     }
     return a.defineLocale('el', {
      monthsNominativeEl:
       'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
        '_',
       ),
      monthsGenitiveEl:
       'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
        '_',
       ),
      months: function (n, d) {
       return n
        ? typeof d == 'string' && /D/.test(d.substring(0, d.indexOf('MMMM')))
          ? this._monthsGenitiveEl[n.month()]
          : this._monthsNominativeEl[n.month()]
        : this._monthsNominativeEl;
      },
      monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split(
       '_',
      ),
      weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(
       '_',
      ),
      weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
      weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
      meridiem: function (n, d, i) {
       return n > 11 ? (i ? 'μμ' : 'ΜΜ') : i ? 'πμ' : 'ΠΜ';
      },
      isPM: function (n) {
       return (n + '').toLowerCase()[0] === 'μ';
      },
      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY h:mm A',
       LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendarEl: {
       sameDay: '[Σήμερα {}] LT',
       nextDay: '[Αύριο {}] LT',
       nextWeek: 'dddd [{}] LT',
       lastDay: '[Χθες {}] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 6:
          return '[το προηγούμενο] dddd [{}] LT';
         default:
          return '[την προηγούμενη] dddd [{}] LT';
        }
       },
       sameElse: 'L',
      },
      calendar: function (n, d) {
       var i = this._calendarEl[n],
        r = d && d.hours();
       return (
        e(i) && (i = i.apply(d)), i.replace('{}', r % 12 == 1 ? 'στη' : 'στις')
       );
      },
      relativeTime: {
       future: 'σε %s',
       past: '%s πριν',
       s: 'λίγα δευτερόλεπτα',
       ss: '%d δευτερόλεπτα',
       m: 'ένα λεπτό',
       mm: '%d λεπτά',
       h: 'μία ώρα',
       hh: '%d ώρες',
       d: 'μία μέρα',
       dd: '%d μέρες',
       M: 'ένας μήνας',
       MM: '%d μήνες',
       y: 'ένας χρόνος',
       yy: '%d χρόνια',
      },
      dayOfMonthOrdinalParse: /\d{1,2}η/,
      ordinal: '%dη',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(108);
    var a = t(1);
    a.datepickerLocale('en-au', 'en-AU', {
     closeText: 'Done',
     prevText: 'Prev',
     nextText: 'Next',
     currentText: 'Today',
     monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
     ],
     dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
     dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('en-au');
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('en-au', {
      months:
       'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays:
       'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY h:mm A',
       LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
       sameDay: '[Today at] LT',
       nextDay: '[Tomorrow at] LT',
       nextWeek: 'dddd [at] LT',
       lastDay: '[Yesterday at] LT',
       lastWeek: '[Last] dddd [at] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'in %s',
       past: '%s ago',
       s: 'a few seconds',
       ss: '%d seconds',
       m: 'a minute',
       mm: '%d minutes',
       h: 'an hour',
       hh: '%d hours',
       d: 'a day',
       dd: '%d days',
       M: 'a month',
       MM: '%d months',
       y: 'a year',
       yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e +
        (~~((e % 100) / 10) == 1
         ? 'th'
         : n === 1
           ? 'st'
           : n === 2
             ? 'nd'
             : n === 3
               ? 'rd'
               : 'th')
       );
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }),
     t(110),
     t(1).locale('en-ca');
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('en-ca', {
      months:
       'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays:
       'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'YYYY-MM-DD',
       LL: 'MMMM D, YYYY',
       LLL: 'MMMM D, YYYY h:mm A',
       LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      calendar: {
       sameDay: '[Today at] LT',
       nextDay: '[Tomorrow at] LT',
       nextWeek: 'dddd [at] LT',
       lastDay: '[Yesterday at] LT',
       lastWeek: '[Last] dddd [at] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'in %s',
       past: '%s ago',
       s: 'a few seconds',
       ss: '%d seconds',
       m: 'a minute',
       mm: '%d minutes',
       h: 'an hour',
       hh: '%d hours',
       d: 'a day',
       dd: '%d days',
       M: 'a month',
       MM: '%d months',
       y: 'a year',
       yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e +
        (~~((e % 100) / 10) == 1
         ? 'th'
         : n === 1
           ? 'st'
           : n === 2
             ? 'nd'
             : n === 3
               ? 'rd'
               : 'th')
       );
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(112);
    var a = t(1);
    a.datepickerLocale('en-gb', 'en-GB', {
     closeText: 'Done',
     prevText: 'Prev',
     nextText: 'Next',
     currentText: 'Today',
     monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
     ],
     dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
     dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('en-gb');
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('en-gb', {
      months:
       'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays:
       'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Today at] LT',
       nextDay: '[Tomorrow at] LT',
       nextWeek: 'dddd [at] LT',
       lastDay: '[Yesterday at] LT',
       lastWeek: '[Last] dddd [at] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'in %s',
       past: '%s ago',
       s: 'a few seconds',
       ss: '%d seconds',
       m: 'a minute',
       mm: '%d minutes',
       h: 'an hour',
       hh: '%d hours',
       d: 'a day',
       dd: '%d days',
       M: 'a month',
       MM: '%d months',
       y: 'a year',
       yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e +
        (~~((e % 100) / 10) == 1
         ? 'th'
         : n === 1
           ? 'st'
           : n === 2
             ? 'nd'
             : n === 3
               ? 'rd'
               : 'th')
       );
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }),
     t(114),
     t(1).locale('en-ie');
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('en-ie', {
      months:
       'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays:
       'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Today at] LT',
       nextDay: '[Tomorrow at] LT',
       nextWeek: 'dddd [at] LT',
       lastDay: '[Yesterday at] LT',
       lastWeek: '[Last] dddd [at] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'in %s',
       past: '%s ago',
       s: 'a few seconds',
       ss: '%d seconds',
       m: 'a minute',
       mm: '%d minutes',
       h: 'an hour',
       hh: '%d hours',
       d: 'a day',
       dd: '%d days',
       M: 'a month',
       MM: '%d months',
       y: 'a year',
       yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e +
        (~~((e % 100) / 10) == 1
         ? 'th'
         : n === 1
           ? 'st'
           : n === 2
             ? 'nd'
             : n === 3
               ? 'rd'
               : 'th')
       );
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(116);
    var a = t(1);
    a.datepickerLocale('en-nz', 'en-NZ', {
     closeText: 'Done',
     prevText: 'Prev',
     nextText: 'Next',
     currentText: 'Today',
     monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
     ],
     dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
     dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('en-nz');
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('en-nz', {
      months:
       'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays:
       'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY h:mm A',
       LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
       sameDay: '[Today at] LT',
       nextDay: '[Tomorrow at] LT',
       nextWeek: 'dddd [at] LT',
       lastDay: '[Yesterday at] LT',
       lastWeek: '[Last] dddd [at] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'in %s',
       past: '%s ago',
       s: 'a few seconds',
       ss: '%d seconds',
       m: 'a minute',
       mm: '%d minutes',
       h: 'an hour',
       hh: '%d hours',
       d: 'a day',
       dd: '%d days',
       M: 'a month',
       MM: '%d months',
       y: 'a year',
       yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e +
        (~~((e % 100) / 10) == 1
         ? 'th'
         : n === 1
           ? 'st'
           : n === 2
             ? 'nd'
             : n === 3
               ? 'rd'
               : 'th')
       );
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(118);
    var a = t(1);
    a.datepickerLocale('es-do', 'es', {
     closeText: 'Cerrar',
     prevText: '&#x3C;Ant',
     nextText: 'Sig&#x3E;',
     currentText: 'Hoy',
     monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
     ],
     monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
     ],
     dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
     ],
     dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
     dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('es-do', {
      buttonText: { month: 'Mes', week: 'Semana', day: 'Día', list: 'Agenda' },
      allDayHtml: 'Todo<br/>el día',
      eventLimitText: 'más',
      noEventsMessage: 'No hay eventos para mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e =
       'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      d = [
       /^ene/i,
       /^feb/i,
       /^mar/i,
       /^abr/i,
       /^may/i,
       /^jun/i,
       /^jul/i,
       /^ago/i,
       /^sep/i,
       /^oct/i,
       /^nov/i,
       /^dic/i,
      ],
      i =
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
     return a.defineLocale('es-do', {
      months:
       'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
        '_',
       ),
      monthsShort: function (r, m) {
       return r ? (/-MMM-/.test(m) ? n[r.month()] : e[r.month()]) : e;
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex:
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex:
       /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
       '_',
      ),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'DD/MM/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY h:mm A',
       LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
      },
      calendar: {
       sameDay: function () {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextDay: function () {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextWeek: function () {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastDay: function () {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastWeek: function () {
        return (
         '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT'
        );
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'en %s',
       past: 'hace %s',
       s: 'unos segundos',
       ss: '%d segundos',
       m: 'un minuto',
       mm: '%d minutos',
       h: 'una hora',
       hh: '%d horas',
       d: 'un día',
       dd: '%d días',
       M: 'un mes',
       MM: '%d meses',
       y: 'un año',
       yy: '%d años',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(120);
    var a = t(1);
    a.datepickerLocale('es-us', 'es', {
     closeText: 'Cerrar',
     prevText: '&#x3C;Ant',
     nextText: 'Sig&#x3E;',
     currentText: 'Hoy',
     monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
     ],
     monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
     ],
     dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
     ],
     dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
     dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('es-us', {
      buttonText: { month: 'Mes', week: 'Semana', day: 'Día', list: 'Agenda' },
      allDayHtml: 'Todo<br/>el día',
      eventLimitText: 'más',
      noEventsMessage: 'No hay eventos para mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e =
       'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      d = [
       /^ene/i,
       /^feb/i,
       /^mar/i,
       /^abr/i,
       /^may/i,
       /^jun/i,
       /^jul/i,
       /^ago/i,
       /^sep/i,
       /^oct/i,
       /^nov/i,
       /^dic/i,
      ],
      i =
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
     return a.defineLocale('es-us', {
      months:
       'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
        '_',
       ),
      monthsShort: function (r, m) {
       return r ? (/-MMM-/.test(m) ? n[r.month()] : e[r.month()]) : e;
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex:
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex:
       /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
       '_',
      ),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'h:mm A',
       LTS: 'h:mm:ss A',
       L: 'MM/DD/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY h:mm A',
       LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
      },
      calendar: {
       sameDay: function () {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextDay: function () {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextWeek: function () {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastDay: function () {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastWeek: function () {
        return (
         '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT'
        );
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'en %s',
       past: 'hace %s',
       s: 'unos segundos',
       ss: '%d segundos',
       m: 'un minuto',
       mm: '%d minutos',
       h: 'una hora',
       hh: '%d horas',
       d: 'un día',
       dd: '%d días',
       M: 'un mes',
       MM: '%d meses',
       y: 'un año',
       yy: '%d años',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 0, doy: 6 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(122);
    var a = t(1);
    a.datepickerLocale('es', 'es', {
     closeText: 'Cerrar',
     prevText: '&#x3C;Ant',
     nextText: 'Sig&#x3E;',
     currentText: 'Hoy',
     monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
     ],
     monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
     ],
     dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
     ],
     dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
     dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('es', {
      buttonText: { month: 'Mes', week: 'Semana', day: 'Día', list: 'Agenda' },
      allDayHtml: 'Todo<br/>el día',
      eventLimitText: 'más',
      noEventsMessage: 'No hay eventos para mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e =
       'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      d = [
       /^ene/i,
       /^feb/i,
       /^mar/i,
       /^abr/i,
       /^may/i,
       /^jun/i,
       /^jul/i,
       /^ago/i,
       /^sep/i,
       /^oct/i,
       /^nov/i,
       /^dic/i,
      ],
      i =
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
     return a.defineLocale('es', {
      months:
       'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
        '_',
       ),
      monthsShort: function (r, m) {
       return r ? (/-MMM-/.test(m) ? n[r.month()] : e[r.month()]) : e;
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex:
       /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex:
       /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split(
       '_',
      ),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY H:mm',
       LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
      },
      calendar: {
       sameDay: function () {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextDay: function () {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       nextWeek: function () {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastDay: function () {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
       },
       lastWeek: function () {
        return (
         '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT'
        );
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'en %s',
       past: 'hace %s',
       s: 'unos segundos',
       ss: '%d segundos',
       m: 'un minuto',
       mm: '%d minutos',
       h: 'una hora',
       hh: '%d horas',
       d: 'un día',
       dd: '%d días',
       M: 'un mes',
       MM: '%d meses',
       y: 'un año',
       yy: '%d años',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 1, doy: 4 },
      invalidDate: 'Fecha invalida',
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(124);
    var a = t(1);
    a.datepickerLocale('et', 'et', {
     closeText: 'Sulge',
     prevText: 'Eelnev',
     nextText: 'Järgnev',
     currentText: 'Täna',
     monthNames: [
      'Jaanuar',
      'Veebruar',
      'Märts',
      'Aprill',
      'Mai',
      'Juuni',
      'Juuli',
      'August',
      'September',
      'Oktoober',
      'November',
      'Detsember',
     ],
     monthNamesShort: [
      'Jaan',
      'Veebr',
      'Märts',
      'Apr',
      'Mai',
      'Juuni',
      'Juuli',
      'Aug',
      'Sept',
      'Okt',
      'Nov',
      'Dets',
     ],
     dayNames: [
      'Pühapäev',
      'Esmaspäev',
      'Teisipäev',
      'Kolmapäev',
      'Neljapäev',
      'Reede',
      'Laupäev',
     ],
     dayNamesShort: [
      'Pühap',
      'Esmasp',
      'Teisip',
      'Kolmap',
      'Neljap',
      'Reede',
      'Laup',
     ],
     dayNamesMin: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
     weekHeader: 'näd',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('et', {
      buttonText: {
       month: 'Kuu',
       week: 'Nädal',
       day: 'Päev',
       list: 'Päevakord',
      },
      allDayText: 'Kogu päev',
      eventLimitText: function (e) {
       return '+ veel ' + e;
      },
      noEventsMessage: 'Kuvamiseks puuduvad sündmused',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i, r) {
      var m = {
       s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
       ss: [n + 'sekundi', n + 'sekundit'],
       m: ['ühe minuti', 'üks minut'],
       mm: [n + ' minuti', n + ' minutit'],
       h: ['ühe tunni', 'tund aega', 'üks tund'],
       hh: [n + ' tunni', n + ' tundi'],
       d: ['ühe päeva', 'üks päev'],
       M: ['kuu aja', 'kuu aega', 'üks kuu'],
       MM: [n + ' kuu', n + ' kuud'],
       y: ['ühe aasta', 'aasta', 'üks aasta'],
       yy: [n + ' aasta', n + ' aastat'],
      };
      return d ? (m[i][2] ? m[i][2] : m[i][1]) : r ? m[i][0] : m[i][1];
     }
     return a.defineLocale('et', {
      months:
       'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split(
        '_',
       ),
      monthsShort:
       'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
      weekdays:
       'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split(
        '_',
       ),
      weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
      weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[Täna,] LT',
       nextDay: '[Homme,] LT',
       nextWeek: '[Järgmine] dddd LT',
       lastDay: '[Eile,] LT',
       lastWeek: '[Eelmine] dddd LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s pärast',
       past: '%s tagasi',
       s: e,
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: e,
       dd: '%d päeva',
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(126);
    var a = t(1);
    a.datepickerLocale('eu', 'eu', {
     closeText: 'Egina',
     prevText: '&#x3C;Aur',
     nextText: 'Hur&#x3E;',
     currentText: 'Gaur',
     monthNames: [
      'urtarrila',
      'otsaila',
      'martxoa',
      'apirila',
      'maiatza',
      'ekaina',
      'uztaila',
      'abuztua',
      'iraila',
      'urria',
      'azaroa',
      'abendua',
     ],
     monthNamesShort: [
      'urt.',
      'ots.',
      'mar.',
      'api.',
      'mai.',
      'eka.',
      'uzt.',
      'abu.',
      'ira.',
      'urr.',
      'aza.',
      'abe.',
     ],
     dayNames: [
      'igandea',
      'astelehena',
      'asteartea',
      'asteazkena',
      'osteguna',
      'ostirala',
      'larunbata',
     ],
     dayNamesShort: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'ol.', 'lr.'],
     dayNamesMin: ['ig', 'al', 'ar', 'az', 'og', 'ol', 'lr'],
     weekHeader: 'As',
     dateFormat: 'yy-mm-dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('eu', {
      buttonText: {
       month: 'Hilabetea',
       week: 'Astea',
       day: 'Eguna',
       list: 'Agenda',
      },
      allDayHtml: 'Egun<br/>osoa',
      eventLimitText: 'gehiago',
      noEventsMessage: 'Ez dago ekitaldirik erakusteko',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('eu', {
      months:
       'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
        '_',
       ),
      monthsShort:
       'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
      monthsParseExact: !0,
      weekdays:
       'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split(
        '_',
       ),
      weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
      weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY-MM-DD',
       LL: 'YYYY[ko] MMMM[ren] D[a]',
       LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
       LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
       l: 'YYYY-M-D',
       ll: 'YYYY[ko] MMM D[a]',
       lll: 'YYYY[ko] MMM D[a] HH:mm',
       llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
      },
      calendar: {
       sameDay: '[gaur] LT[etan]',
       nextDay: '[bihar] LT[etan]',
       nextWeek: 'dddd LT[etan]',
       lastDay: '[atzo] LT[etan]',
       lastWeek: '[aurreko] dddd LT[etan]',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s barru',
       past: 'duela %s',
       s: 'segundo batzuk',
       ss: '%d segundo',
       m: 'minutu bat',
       mm: '%d minutu',
       h: 'ordu bat',
       hh: '%d ordu',
       d: 'egun bat',
       dd: '%d egun',
       M: 'hilabete bat',
       MM: '%d hilabete',
       y: 'urte bat',
       yy: '%d urte',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(128);
    var a = t(1);
    a.datepickerLocale('fa', 'fa', {
     closeText: 'بستن',
     prevText: '&#x3C;قبلی',
     nextText: 'بعدی&#x3E;',
     currentText: 'امروز',
     monthNames: [
      'ژانویه',
      'فوریه',
      'مارس',
      'آوریل',
      'مه',
      'ژوئن',
      'ژوئیه',
      'اوت',
      'سپتامبر',
      'اکتبر',
      'نوامبر',
      'دسامبر',
     ],
     monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
     ],
     dayNames: [
      'يکشنبه',
      'دوشنبه',
      'سه‌شنبه',
      'چهارشنبه',
      'پنجشنبه',
      'جمعه',
      'شنبه',
     ],
     dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
     dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
     weekHeader: 'هف',
     dateFormat: 'yy/mm/dd',
     firstDay: 6,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('fa', {
      buttonText: { month: 'ماه', week: 'هفته', day: 'روز', list: 'برنامه' },
      allDayText: 'تمام روز',
      eventLimitText: function (e) {
       return 'بیش از ' + e;
      },
      noEventsMessage: 'هیچ رویدادی به نمایش',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
       1: '۱',
       2: '۲',
       3: '۳',
       4: '۴',
       5: '۵',
       6: '۶',
       7: '۷',
       8: '۸',
       9: '۹',
       0: '۰',
      },
      n = {
       '۱': '1',
       '۲': '2',
       '۳': '3',
       '۴': '4',
       '۵': '5',
       '۶': '6',
       '۷': '7',
       '۸': '8',
       '۹': '9',
       '۰': '0',
      };
     return a.defineLocale('fa', {
      months:
       'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
        '_',
       ),
      monthsShort:
       'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
        '_',
       ),
      weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
      weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split(
       '_',
      ),
      weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      meridiemParse: /قبل از ظهر|بعد از ظهر/,
      isPM: function (d) {
       return /بعد از ظهر/.test(d);
      },
      meridiem: function (d, i, r) {
       return d < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
      },
      calendar: {
       sameDay: '[امروز ساعت] LT',
       nextDay: '[فردا ساعت] LT',
       nextWeek: 'dddd [ساعت] LT',
       lastDay: '[دیروز ساعت] LT',
       lastWeek: 'dddd [پیش] [ساعت] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'در %s',
       past: '%s پیش',
       s: 'چند ثانیه',
       ss: '%d ثانیه',
       m: 'یک دقیقه',
       mm: '%d دقیقه',
       h: 'یک ساعت',
       hh: '%d ساعت',
       d: 'یک روز',
       dd: '%d روز',
       M: 'یک ماه',
       MM: '%d ماه',
       y: 'یک سال',
       yy: '%d سال',
      },
      preparse: function (d) {
       return d
        .replace(/[۰-۹]/g, function (i) {
         return n[i];
        })
        .replace(/،/g, ',');
      },
      postformat: function (d) {
       return d
        .replace(/\d/g, function (i) {
         return e[i];
        })
        .replace(/,/g, '،');
      },
      dayOfMonthOrdinalParse: /\d{1,2}م/,
      ordinal: '%dم',
      week: { dow: 6, doy: 12 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(130);
    var a = t(1);
    a.datepickerLocale('fi', 'fi', {
     closeText: 'Sulje',
     prevText: '&#xAB;Edellinen',
     nextText: 'Seuraava&#xBB;',
     currentText: 'Tänään',
     monthNames: [
      'Tammikuu',
      'Helmikuu',
      'Maaliskuu',
      'Huhtikuu',
      'Toukokuu',
      'Kesäkuu',
      'Heinäkuu',
      'Elokuu',
      'Syyskuu',
      'Lokakuu',
      'Marraskuu',
      'Joulukuu',
     ],
     monthNamesShort: [
      'Tammi',
      'Helmi',
      'Maalis',
      'Huhti',
      'Touko',
      'Kesä',
      'Heinä',
      'Elo',
      'Syys',
      'Loka',
      'Marras',
      'Joulu',
     ],
     dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
     dayNames: [
      'Sunnuntai',
      'Maanantai',
      'Tiistai',
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai',
     ],
     dayNamesMin: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
     weekHeader: 'Vk',
     dateFormat: 'd.m.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('fi', {
      buttonText: {
       month: 'Kuukausi',
       week: 'Viikko',
       day: 'Päivä',
       list: 'Tapahtumat',
      },
      allDayText: 'Koko päivä',
      eventLimitText: 'lisää',
      noEventsMessage: 'Ei näytettäviä tapahtumia',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(r, m, _, u) {
      var l = '';
      switch (_) {
       case 's':
        return u ? 'muutaman sekunnin' : 'muutama sekunti';
       case 'ss':
        return u ? 'sekunnin' : 'sekuntia';
       case 'm':
        return u ? 'minuutin' : 'minuutti';
       case 'mm':
        l = u ? 'minuutin' : 'minuuttia';
        break;
       case 'h':
        return u ? 'tunnin' : 'tunti';
       case 'hh':
        l = u ? 'tunnin' : 'tuntia';
        break;
       case 'd':
        return u ? 'päivän' : 'päivä';
       case 'dd':
        l = u ? 'päivän' : 'päivää';
        break;
       case 'M':
        return u ? 'kuukauden' : 'kuukausi';
       case 'MM':
        l = u ? 'kuukauden' : 'kuukautta';
        break;
       case 'y':
        return u ? 'vuoden' : 'vuosi';
       case 'yy':
        l = u ? 'vuoden' : 'vuotta';
      }
      return (l = n(r, u) + ' ' + l);
     }
     function n(r, m) {
      return r < 10 ? (m ? i[r] : d[r]) : r;
     }
     var d =
       'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(
        ' ',
       ),
      i = [
       'nolla',
       'yhden',
       'kahden',
       'kolmen',
       'neljän',
       'viiden',
       'kuuden',
       d[7],
       d[8],
       d[9],
      ];
     return a.defineLocale('fi', {
      months:
       'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
        '_',
       ),
      monthsShort:
       'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split(
        '_',
       ),
      weekdays:
       'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
        '_',
       ),
      weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
      weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
      longDateFormat: {
       LT: 'HH.mm',
       LTS: 'HH.mm.ss',
       L: 'DD.MM.YYYY',
       LL: 'Do MMMM[ta] YYYY',
       LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
       LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
       l: 'D.M.YYYY',
       ll: 'Do MMM YYYY',
       lll: 'Do MMM YYYY, [klo] HH.mm',
       llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
      },
      calendar: {
       sameDay: '[tänään] [klo] LT',
       nextDay: '[huomenna] [klo] LT',
       nextWeek: 'dddd [klo] LT',
       lastDay: '[eilen] [klo] LT',
       lastWeek: '[viime] dddd[na] [klo] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s päästä',
       past: '%s sitten',
       s: e,
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(132);
    var a = t(1);
    a.datepickerLocale('fr-ca', 'fr-CA', {
     closeText: 'Fermer',
     prevText: 'Précédent',
     nextText: 'Suivant',
     currentText: "Aujourd'hui",
     monthNames: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
     ],
     monthNamesShort: [
      'janv.',
      'févr.',
      'mars',
      'avril',
      'mai',
      'juin',
      'juil.',
      'août',
      'sept.',
      'oct.',
      'nov.',
      'déc.',
     ],
     dayNames: [
      'dimanche',
      'lundi',
      'mardi',
      'mercredi',
      'jeudi',
      'vendredi',
      'samedi',
     ],
     dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
     dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     weekHeader: 'Sem.',
     dateFormat: 'yy-mm-dd',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('fr-ca', {
      buttonText: {
       year: 'Année',
       month: 'Mois',
       week: 'Semaine',
       day: 'Jour',
       list: 'Mon planning',
      },
      allDayHtml: 'Toute la<br/>journée',
      eventLimitText: 'en plus',
      noEventsMessage: 'Aucun événement à afficher',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('fr-ca', {
      months:
       'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
        '_',
       ),
      monthsShort:
       'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
       '_',
      ),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY-MM-DD',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Aujourd’hui à] LT',
       nextDay: '[Demain à] LT',
       nextWeek: 'dddd [à] LT',
       lastDay: '[Hier à] LT',
       lastWeek: 'dddd [dernier à] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dans %s',
       past: 'il y a %s',
       s: 'quelques secondes',
       ss: '%d secondes',
       m: 'une minute',
       mm: '%d minutes',
       h: 'une heure',
       hh: '%d heures',
       d: 'un jour',
       dd: '%d jours',
       M: 'un mois',
       MM: '%d mois',
       y: 'un an',
       yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function (e, n) {
       switch (n) {
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
         return e + (e === 1 ? 'er' : 'e');
        case 'w':
        case 'W':
         return e + (e === 1 ? 're' : 'e');
       }
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(134);
    var a = t(1);
    a.datepickerLocale('fr-ch', 'fr-CH', {
     closeText: 'Fermer',
     prevText: '&#x3C;Préc',
     nextText: 'Suiv&#x3E;',
     currentText: 'Courant',
     monthNames: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
     ],
     monthNamesShort: [
      'janv.',
      'févr.',
      'mars',
      'avril',
      'mai',
      'juin',
      'juil.',
      'août',
      'sept.',
      'oct.',
      'nov.',
      'déc.',
     ],
     dayNames: [
      'dimanche',
      'lundi',
      'mardi',
      'mercredi',
      'jeudi',
      'vendredi',
      'samedi',
     ],
     dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
     dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     weekHeader: 'Sm',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('fr-ch', {
      buttonText: {
       year: 'Année',
       month: 'Mois',
       week: 'Semaine',
       day: 'Jour',
       list: 'Mon planning',
      },
      allDayHtml: 'Toute la<br/>journée',
      eventLimitText: 'en plus',
      noEventsMessage: 'Aucun événement à afficher',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('fr-ch', {
      months:
       'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
        '_',
       ),
      monthsShort:
       'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
       '_',
      ),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Aujourd’hui à] LT',
       nextDay: '[Demain à] LT',
       nextWeek: 'dddd [à] LT',
       lastDay: '[Hier à] LT',
       lastWeek: 'dddd [dernier à] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dans %s',
       past: 'il y a %s',
       s: 'quelques secondes',
       ss: '%d secondes',
       m: 'une minute',
       mm: '%d minutes',
       h: 'une heure',
       hh: '%d heures',
       d: 'un jour',
       dd: '%d jours',
       M: 'un mois',
       MM: '%d mois',
       y: 'un an',
       yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function (e, n) {
       switch (n) {
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
         return e + (e === 1 ? 'er' : 'e');
        case 'w':
        case 'W':
         return e + (e === 1 ? 're' : 'e');
       }
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(136);
    var a = t(1);
    a.datepickerLocale('fr', 'fr', {
     closeText: 'Fermer',
     prevText: 'Précédent',
     nextText: 'Suivant',
     currentText: "Aujourd'hui",
     monthNames: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
     ],
     monthNamesShort: [
      'janv.',
      'févr.',
      'mars',
      'avr.',
      'mai',
      'juin',
      'juil.',
      'août',
      'sept.',
      'oct.',
      'nov.',
      'déc.',
     ],
     dayNames: [
      'dimanche',
      'lundi',
      'mardi',
      'mercredi',
      'jeudi',
      'vendredi',
      'samedi',
     ],
     dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
     dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     weekHeader: 'Sem.',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('fr', {
      buttonText: {
       year: 'Année',
       month: 'Mois',
       week: 'Semaine',
       day: 'Jour',
       list: 'Mon planning',
      },
      allDayHtml: 'Toute la<br/>journée',
      eventLimitText: 'en plus',
      noEventsMessage: 'Aucun événement à afficher',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('fr', {
      months:
       'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
        '_',
       ),
      monthsShort:
       'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
       '_',
      ),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Aujourd’hui à] LT',
       nextDay: '[Demain à] LT',
       nextWeek: 'dddd [à] LT',
       lastDay: '[Hier à] LT',
       lastWeek: 'dddd [dernier à] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dans %s',
       past: 'il y a %s',
       s: 'quelques secondes',
       ss: '%d secondes',
       m: 'une minute',
       mm: '%d minutes',
       h: 'une heure',
       hh: '%d heures',
       d: 'un jour',
       dd: '%d jours',
       M: 'un mois',
       MM: '%d mois',
       y: 'un an',
       yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
      ordinal: function (e, n) {
       switch (n) {
        case 'D':
         return e + (e === 1 ? 'er' : '');
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
         return e + (e === 1 ? 'er' : 'e');
        case 'w':
        case 'W':
         return e + (e === 1 ? 're' : 'e');
       }
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(138);
    var a = t(1);
    a.datepickerLocale('gl', 'gl', {
     closeText: 'Pechar',
     prevText: '&#x3C;Ant',
     nextText: 'Seg&#x3E;',
     currentText: 'Hoxe',
     monthNames: [
      'Xaneiro',
      'Febreiro',
      'Marzo',
      'Abril',
      'Maio',
      'Xuño',
      'Xullo',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Decembro',
     ],
     monthNamesShort: [
      'Xan',
      'Feb',
      'Mar',
      'Abr',
      'Mai',
      'Xuñ',
      'Xul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Domingo',
      'Luns',
      'Martes',
      'Mércores',
      'Xoves',
      'Venres',
      'Sábado',
     ],
     dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mér', 'Xov', 'Ven', 'Sáb'],
     dayNamesMin: ['Do', 'Lu', 'Ma', 'Mé', 'Xo', 'Ve', 'Sá'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('gl', {
      buttonText: { month: 'Mes', week: 'Semana', day: 'Día', list: 'Axenda' },
      allDayHtml: 'Todo<br/>o día',
      eventLimitText: 'máis',
      noEventsMessage: 'Non hai eventos para amosar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('gl', {
      months:
       'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split(
        '_',
       ),
      monthsShort:
       'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY H:mm',
       LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
      },
      calendar: {
       sameDay: function () {
        return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
       },
       nextDay: function () {
        return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
       },
       nextWeek: function () {
        return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
       },
       lastDay: function () {
        return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
       },
       lastWeek: function () {
        return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: function (e) {
        return e.indexOf('un') === 0 ? 'n' + e : 'en ' + e;
       },
       past: 'hai %s',
       s: 'uns segundos',
       ss: '%d segundos',
       m: 'un minuto',
       mm: '%d minutos',
       h: 'unha hora',
       hh: '%d horas',
       d: 'un día',
       dd: '%d días',
       M: 'un mes',
       MM: '%d meses',
       y: 'un ano',
       yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(140);
    var a = t(1);
    a.datepickerLocale('he', 'he', {
     closeText: 'סגור',
     prevText: '&#x3C;הקודם',
     nextText: 'הבא&#x3E;',
     currentText: 'היום',
     monthNames: [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
     ],
     monthNamesShort: [
      'ינו',
      'פבר',
      'מרץ',
      'אפר',
      'מאי',
      'יוני',
      'יולי',
      'אוג',
      'ספט',
      'אוק',
      'נוב',
      'דצמ',
     ],
     dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
     dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", 'שבת'],
     dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", 'שבת'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !0,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('he', {
      buttonText: { month: 'חודש', week: 'שבוע', day: 'יום', list: 'סדר יום' },
      allDayText: 'כל היום',
      eventLimitText: 'אחר',
      noEventsMessage: 'אין אירועים להצגה',
      weekNumberTitle: 'שבוע',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('he', {
      months:
       'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split(
        '_',
       ),
      monthsShort:
       'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
      weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
      weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
      weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D [ב]MMMM YYYY',
       LLL: 'D [ב]MMMM YYYY HH:mm',
       LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
       l: 'D/M/YYYY',
       ll: 'D MMM YYYY',
       lll: 'D MMM YYYY HH:mm',
       llll: 'ddd, D MMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[היום ב־]LT',
       nextDay: '[מחר ב־]LT',
       nextWeek: 'dddd [בשעה] LT',
       lastDay: '[אתמול ב־]LT',
       lastWeek: '[ביום] dddd [האחרון בשעה] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'בעוד %s',
       past: 'לפני %s',
       s: 'מספר שניות',
       ss: '%d שניות',
       m: 'דקה',
       mm: '%d דקות',
       h: 'שעה',
       hh: function (e) {
        return e === 2 ? 'שעתיים' : e + ' שעות';
       },
       d: 'יום',
       dd: function (e) {
        return e === 2 ? 'יומיים' : e + ' ימים';
       },
       M: 'חודש',
       MM: function (e) {
        return e === 2 ? 'חודשיים' : e + ' חודשים';
       },
       y: 'שנה',
       yy: function (e) {
        return e === 2
         ? 'שנתיים'
         : e % 10 == 0 && e !== 10
           ? e + ' שנה'
           : e + ' שנים';
       },
      },
      meridiemParse:
       /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function (e) {
       return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
      },
      meridiem: function (e, n, d) {
       return e < 5
        ? 'לפנות בוקר'
        : e < 10
          ? 'בבוקר'
          : e < 12
            ? d
              ? 'לפנה"צ'
              : 'לפני הצהריים'
            : e < 18
              ? d
                ? 'אחה"צ'
                : 'אחרי הצהריים'
              : 'בערב';
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(142);
    var a = t(1);
    a.datepickerLocale('hi', 'hi', {
     closeText: 'बंद',
     prevText: 'पिछला',
     nextText: 'अगला',
     currentText: 'आज',
     monthNames: [
      'जनवरी ',
      'फरवरी',
      'मार्च',
      'अप्रेल',
      'मई',
      'जून',
      'जूलाई',
      'अगस्त ',
      'सितम्बर',
      'अक्टूबर',
      'नवम्बर',
      'दिसम्बर',
     ],
     monthNamesShort: [
      'जन',
      'फर',
      'मार्च',
      'अप्रेल',
      'मई',
      'जून',
      'जूलाई',
      'अग',
      'सित',
      'अक्ट',
      'नव',
      'दि',
     ],
     dayNames: [
      'रविवार',
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरुवार',
      'शुक्रवार',
      'शनिवार',
     ],
     dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
     dayNamesMin: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
     weekHeader: 'हफ्ता',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('hi', {
      buttonText: {
       month: 'महीना',
       week: 'सप्ताह',
       day: 'दिन',
       list: 'कार्यसूची',
      },
      allDayText: 'सभी दिन',
      eventLimitText: function (e) {
       return '+अधिक ' + e;
      },
      noEventsMessage: 'कोई घटनाओं को प्रदर्शित करने के लिए',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
       1: '१',
       2: '२',
       3: '३',
       4: '४',
       5: '५',
       6: '६',
       7: '७',
       8: '८',
       9: '९',
       0: '०',
      },
      n = {
       '१': '1',
       '२': '2',
       '३': '3',
       '४': '4',
       '५': '5',
       '६': '6',
       '७': '7',
       '८': '8',
       '९': '9',
       '०': '0',
      };
     return a.defineLocale('hi', {
      months:
       'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split(
        '_',
       ),
      monthsShort:
       'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split(
       '_',
      ),
      weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat: {
       LT: 'A h:mm बजे',
       LTS: 'A h:mm:ss बजे',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY, A h:mm बजे',
       LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
      },
      calendar: {
       sameDay: '[आज] LT',
       nextDay: '[कल] LT',
       nextWeek: 'dddd, LT',
       lastDay: '[कल] LT',
       lastWeek: '[पिछले] dddd, LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s में',
       past: '%s पहले',
       s: 'कुछ ही क्षण',
       ss: '%d सेकंड',
       m: 'एक मिनट',
       mm: '%d मिनट',
       h: 'एक घंटा',
       hh: '%d घंटे',
       d: 'एक दिन',
       dd: '%d दिन',
       M: 'एक महीने',
       MM: '%d महीने',
       y: 'एक वर्ष',
       yy: '%d वर्ष',
      },
      preparse: function (d) {
       return d.replace(/[१२३४५६७८९०]/g, function (i) {
        return n[i];
       });
      },
      postformat: function (d) {
       return d.replace(/\d/g, function (i) {
        return e[i];
       });
      },
      meridiemParse: /रात|सुबह|दोपहर|शाम/,
      meridiemHour: function (d, i) {
       return (
        d === 12 && (d = 0),
        i === 'रात'
         ? d < 4
           ? d
           : d + 12
         : i === 'सुबह'
           ? d
           : i === 'दोपहर'
             ? d >= 10
               ? d
               : d + 12
             : i === 'शाम'
               ? d + 12
               : void 0
       );
      },
      meridiem: function (d, i, r) {
       return d < 4
        ? 'रात'
        : d < 10
          ? 'सुबह'
          : d < 17
            ? 'दोपहर'
            : d < 20
              ? 'शाम'
              : 'रात';
      },
      week: { dow: 0, doy: 6 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(144);
    var a = t(1);
    a.datepickerLocale('hr', 'hr', {
     closeText: 'Zatvori',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Danas',
     monthNames: [
      'Siječanj',
      'Veljača',
      'Ožujak',
      'Travanj',
      'Svibanj',
      'Lipanj',
      'Srpanj',
      'Kolovoz',
      'Rujan',
      'Listopad',
      'Studeni',
      'Prosinac',
     ],
     monthNamesShort: [
      'Sij',
      'Velj',
      'Ožu',
      'Tra',
      'Svi',
      'Lip',
      'Srp',
      'Kol',
      'Ruj',
      'Lis',
      'Stu',
      'Pro',
     ],
     dayNames: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
     dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
     dayNamesMin: ['Ne', 'Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su'],
     weekHeader: 'Tje',
     dateFormat: 'dd.mm.yy.',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('hr', {
      buttonText: {
       prev: 'Prijašnji',
       next: 'Sljedeći',
       month: 'Mjesec',
       week: 'Tjedan',
       day: 'Dan',
       list: 'Raspored',
      },
      allDayText: 'Cijeli dan',
      eventLimitText: function (e) {
       return '+ još ' + e;
      },
      noEventsMessage: 'Nema događaja za prikaz',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i) {
      var r = n + ' ';
      switch (i) {
       case 'ss':
        return (r +=
         n === 1
          ? 'sekunda'
          : n === 2 || n === 3 || n === 4
            ? 'sekunde'
            : 'sekundi');
       case 'm':
        return d ? 'jedna minuta' : 'jedne minute';
       case 'mm':
        return (r +=
         n === 1
          ? 'minuta'
          : n === 2 || n === 3 || n === 4
            ? 'minute'
            : 'minuta');
       case 'h':
        return d ? 'jedan sat' : 'jednog sata';
       case 'hh':
        return (r +=
         n === 1 ? 'sat' : n === 2 || n === 3 || n === 4 ? 'sata' : 'sati');
       case 'dd':
        return (r += n === 1 ? 'dan' : 'dana');
       case 'MM':
        return (r +=
         n === 1
          ? 'mjesec'
          : n === 2 || n === 3 || n === 4
            ? 'mjeseca'
            : 'mjeseci');
       case 'yy':
        return (r +=
         n === 1
          ? 'godina'
          : n === 2 || n === 3 || n === 4
            ? 'godine'
            : 'godina');
      }
     }
     return a.defineLocale('hr', {
      months: {
       format:
        'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
         '_',
        ),
       standalone:
        'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
         '_',
        ),
      },
      monthsShort:
       'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays:
       'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'Do MMMM YYYY',
       LLL: 'Do MMMM YYYY H:mm',
       LLLL: 'dddd, Do MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[danas u] LT',
       nextDay: '[sutra u] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[u] [nedjelju] [u] LT';
         case 3:
          return '[u] [srijedu] [u] LT';
         case 6:
          return '[u] [subotu] [u] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[u] dddd [u] LT';
        }
       },
       lastDay: '[jučer u] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return '[prošlu] [nedjelju] [u] LT';
         case 3:
          return '[prošlu] [srijedu] [u] LT';
         case 6:
          return '[prošle] [subote] [u] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[prošli] dddd [u] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: 'prije %s',
       s: 'par sekundi',
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: 'dan',
       dd: e,
       M: 'mjesec',
       MM: e,
       y: 'godinu',
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(146);
    var a = t(1);
    a.datepickerLocale('hu', 'hu', {
     closeText: 'bezár',
     prevText: 'vissza',
     nextText: 'előre',
     currentText: 'ma',
     monthNames: [
      'Január',
      'Február',
      'Március',
      'Április',
      'Május',
      'Június',
      'Július',
      'Augusztus',
      'Szeptember',
      'Október',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Már',
      'Ápr',
      'Máj',
      'Jún',
      'Júl',
      'Aug',
      'Szep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Vasárnap',
      'Hétfő',
      'Kedd',
      'Szerda',
      'Csütörtök',
      'Péntek',
      'Szombat',
     ],
     dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
     dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
     weekHeader: 'Hét',
     dateFormat: 'yy.mm.dd.',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '',
    }),
     a.locale('hu', {
      buttonText: { month: 'Hónap', week: 'Hét', day: 'Nap', list: 'Napló' },
      allDayText: 'Egész nap',
      eventLimitText: 'további',
      noEventsMessage: 'Nincs megjeleníthető esemény',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(i, r, m, _) {
      var u = i;
      switch (m) {
       case 's':
        return _ || r ? 'néhány másodperc' : 'néhány másodperce';
       case 'ss':
        return u + (_ || r) ? ' másodperc' : ' másodperce';
       case 'm':
        return 'egy' + (_ || r ? ' perc' : ' perce');
       case 'mm':
        return u + (_ || r ? ' perc' : ' perce');
       case 'h':
        return 'egy' + (_ || r ? ' óra' : ' órája');
       case 'hh':
        return u + (_ || r ? ' óra' : ' órája');
       case 'd':
        return 'egy' + (_ || r ? ' nap' : ' napja');
       case 'dd':
        return u + (_ || r ? ' nap' : ' napja');
       case 'M':
        return 'egy' + (_ || r ? ' hónap' : ' hónapja');
       case 'MM':
        return u + (_ || r ? ' hónap' : ' hónapja');
       case 'y':
        return 'egy' + (_ || r ? ' év' : ' éve');
       case 'yy':
        return u + (_ || r ? ' év' : ' éve');
      }
      return '';
     }
     function n(i) {
      return (i ? '' : '[múlt] ') + '[' + d[this.day()] + '] LT[-kor]';
     }
     var d =
      'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(
       ' ',
      );
     return a.defineLocale('hu', {
      months:
       'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split(
        '_',
       ),
      monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split(
       '_',
      ),
      weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split(
       '_',
      ),
      weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
      weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'YYYY.MM.DD.',
       LL: 'YYYY. MMMM D.',
       LLL: 'YYYY. MMMM D. H:mm',
       LLLL: 'YYYY. MMMM D., dddd H:mm',
      },
      meridiemParse: /de|du/i,
      isPM: function (i) {
       return i.charAt(1).toLowerCase() === 'u';
      },
      meridiem: function (i, r, m) {
       return i < 12 ? (m === !0 ? 'de' : 'DE') : m === !0 ? 'du' : 'DU';
      },
      calendar: {
       sameDay: '[ma] LT[-kor]',
       nextDay: '[holnap] LT[-kor]',
       nextWeek: function () {
        return n.call(this, !0);
       },
       lastDay: '[tegnap] LT[-kor]',
       lastWeek: function () {
        return n.call(this, !1);
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s múlva',
       past: '%s',
       s: e,
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(148);
    var a = t(1);
    a.datepickerLocale('id', 'id', {
     closeText: 'Tutup',
     prevText: '&#x3C;mundur',
     nextText: 'maju&#x3E;',
     currentText: 'hari ini',
     monthNames: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'Nopember',
      'Desember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agus',
      'Sep',
      'Okt',
      'Nop',
      'Des',
     ],
     dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
     dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'kam', 'Jum', 'Sab'],
     dayNamesMin: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'jm', 'Sb'],
     weekHeader: 'Mg',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('id', {
      buttonText: {
       month: 'Bulan',
       week: 'Minggu',
       day: 'Hari',
       list: 'Agenda',
      },
      allDayHtml: 'Sehari<br/>penuh',
      eventLimitText: 'lebih',
      noEventsMessage: 'Tidak ada acara untuk ditampilkan',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('id', {
      months:
       'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
      weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
       LT: 'HH.mm',
       LTS: 'HH.mm.ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY [pukul] HH.mm',
       LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === 'pagi'
         ? e
         : n === 'siang'
           ? e >= 11
             ? e
             : e + 12
           : n === 'sore' || n === 'malam'
             ? e + 12
             : void 0
       );
      },
      meridiem: function (e, n, d) {
       return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
      },
      calendar: {
       sameDay: '[Hari ini pukul] LT',
       nextDay: '[Besok pukul] LT',
       nextWeek: 'dddd [pukul] LT',
       lastDay: '[Kemarin pukul] LT',
       lastWeek: 'dddd [lalu pukul] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dalam %s',
       past: '%s yang lalu',
       s: 'beberapa detik',
       ss: '%d detik',
       m: 'semenit',
       mm: '%d menit',
       h: 'sejam',
       hh: '%d jam',
       d: 'sehari',
       dd: '%d hari',
       M: 'sebulan',
       MM: '%d bulan',
       y: 'setahun',
       yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(150);
    var a = t(1);
    a.datepickerLocale('is', 'is', {
     closeText: 'Loka',
     prevText: '&#x3C; Fyrri',
     nextText: 'Næsti &#x3E;',
     currentText: 'Í dag',
     monthNames: [
      'Janúar',
      'Febrúar',
      'Mars',
      'Apríl',
      'Maí',
      'Júní',
      'Júlí',
      'Ágúst',
      'September',
      'Október',
      'Nóvember',
      'Desember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maí',
      'Jún',
      'Júl',
      'Ágú',
      'Sep',
      'Okt',
      'Nóv',
      'Des',
     ],
     dayNames: [
      'Sunnudagur',
      'Mánudagur',
      'Þriðjudagur',
      'Miðvikudagur',
      'Fimmtudagur',
      'Föstudagur',
      'Laugardagur',
     ],
     dayNamesShort: ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau'],
     dayNamesMin: ['Su', 'Má', 'Þr', 'Mi', 'Fi', 'Fö', 'La'],
     weekHeader: 'Vika',
     dateFormat: 'dd.mm.yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('is', {
      buttonText: {
       month: 'Mánuður',
       week: 'Vika',
       day: 'Dagur',
       list: 'Dagskrá',
      },
      allDayHtml: 'Allan<br/>daginn',
      eventLimitText: 'meira',
      noEventsMessage: 'Engir viðburðir til að sýna',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(d) {
      return d % 100 == 11 || d % 10 != 1;
     }
     function n(d, i, r, m) {
      var _ = d + ' ';
      switch (r) {
       case 's':
        return i || m ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
       case 'ss':
        return e(d) ? _ + (i || m ? 'sekúndur' : 'sekúndum') : _ + 'sekúnda';
       case 'm':
        return i ? 'mínúta' : 'mínútu';
       case 'mm':
        return e(d)
         ? _ + (i || m ? 'mínútur' : 'mínútum')
         : i
           ? _ + 'mínúta'
           : _ + 'mínútu';
       case 'hh':
        return e(d)
         ? _ + (i || m ? 'klukkustundir' : 'klukkustundum')
         : _ + 'klukkustund';
       case 'd':
        return i ? 'dagur' : m ? 'dag' : 'degi';
       case 'dd':
        return e(d)
         ? i
           ? _ + 'dagar'
           : _ + (m ? 'daga' : 'dögum')
         : i
           ? _ + 'dagur'
           : _ + (m ? 'dag' : 'degi');
       case 'M':
        return i ? 'mánuður' : m ? 'mánuð' : 'mánuði';
       case 'MM':
        return e(d)
         ? i
           ? _ + 'mánuðir'
           : _ + (m ? 'mánuði' : 'mánuðum')
         : i
           ? _ + 'mánuður'
           : _ + (m ? 'mánuð' : 'mánuði');
       case 'y':
        return i || m ? 'ár' : 'ári';
       case 'yy':
        return e(d)
         ? _ + (i || m ? 'ár' : 'árum')
         : _ + (i || m ? 'ár' : 'ári');
      }
     }
     return a.defineLocale('is', {
      months:
       'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split(
        '_',
       ),
      monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
      weekdays:
       'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split(
        '_',
       ),
      weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
      weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY [kl.] H:mm',
       LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
      },
      calendar: {
       sameDay: '[í dag kl.] LT',
       nextDay: '[á morgun kl.] LT',
       nextWeek: 'dddd [kl.] LT',
       lastDay: '[í gær kl.] LT',
       lastWeek: '[síðasta] dddd [kl.] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'eftir %s',
       past: 'fyrir %s síðan',
       s: n,
       ss: n,
       m: n,
       mm: n,
       h: 'klukkustund',
       hh: n,
       d: n,
       dd: n,
       M: n,
       MM: n,
       y: n,
       yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(152);
    var a = t(1);
    a.datepickerLocale('it', 'it', {
     closeText: 'Chiudi',
     prevText: '&#x3C;Prec',
     nextText: 'Succ&#x3E;',
     currentText: 'Oggi',
     monthNames: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
     ],
     monthNamesShort: [
      'Gen',
      'Feb',
      'Mar',
      'Apr',
      'Mag',
      'Giu',
      'Lug',
      'Ago',
      'Set',
      'Ott',
      'Nov',
      'Dic',
     ],
     dayNames: [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
     ],
     dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
     dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('it', {
      buttonText: {
       month: 'Mese',
       week: 'Settimana',
       day: 'Giorno',
       list: 'Agenda',
      },
      allDayHtml: 'Tutto il<br/>giorno',
      eventLimitText: function (e) {
       return '+altri ' + e;
      },
      noEventsMessage: 'Non ci sono eventi da visualizzare',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('it', {
      months:
       'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
        '_',
       ),
      monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
      weekdays:
       'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
      weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
      weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: function () {
        return (
         '[Oggi a' +
         (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
         ']LT'
        );
       },
       nextDay: function () {
        return (
         '[Domani a' +
         (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
         ']LT'
        );
       },
       nextWeek: function () {
        return (
         'dddd [a' +
         (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
         ']LT'
        );
       },
       lastDay: function () {
        return (
         '[Ieri a' +
         (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
         ']LT'
        );
       },
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return (
           '[La scorsa] dddd [a' +
           (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
           ']LT'
          );
         default:
          return (
           '[Lo scorso] dddd [a' +
           (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
           ']LT'
          );
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: function (e) {
        return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
       },
       past: '%s fa',
       s: 'alcuni secondi',
       ss: '%d secondi',
       m: 'un minuto',
       mm: '%d minuti',
       h: "un'ora",
       hh: '%d ore',
       d: 'un giorno',
       dd: '%d giorni',
       M: 'un mese',
       MM: '%d mesi',
       y: 'un anno',
       yy: '%d anni',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(154);
    var a = t(1);
    a.datepickerLocale('ja', 'ja', {
     closeText: '閉じる',
     prevText: '&#x3C;前',
     nextText: '次&#x3E;',
     currentText: '今日',
     monthNames: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
     ],
     monthNamesShort: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
     ],
     dayNames: [
      '日曜日',
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日',
     ],
     dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
     dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
     weekHeader: '週',
     dateFormat: 'yy/mm/dd',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '年',
    }),
     a.locale('ja', {
      buttonText: { month: '月', week: '週', day: '日', list: '予定リスト' },
      allDayText: '終日',
      eventLimitText: function (e) {
       return '他 ' + e + ' 件';
      },
      noEventsMessage: '表示する予定はありません',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ja', {
      eras: [
       {
        since: '2019-05-01',
        offset: 1,
        name: '令和',
        narrow: '㋿',
        abbr: 'R',
       },
       {
        since: '1989-01-08',
        until: '2019-04-30',
        offset: 1,
        name: '平成',
        narrow: '㍻',
        abbr: 'H',
       },
       {
        since: '1926-12-25',
        until: '1989-01-07',
        offset: 1,
        name: '昭和',
        narrow: '㍼',
        abbr: 'S',
       },
       {
        since: '1912-07-30',
        until: '1926-12-24',
        offset: 1,
        name: '大正',
        narrow: '㍽',
        abbr: 'T',
       },
       {
        since: '1873-01-01',
        until: '1912-07-29',
        offset: 6,
        name: '明治',
        narrow: '㍾',
        abbr: 'M',
       },
       {
        since: '0001-01-01',
        until: '1873-12-31',
        offset: 1,
        name: '西暦',
        narrow: 'AD',
        abbr: 'AD',
       },
       {
        since: '0000-12-31',
        until: -1 / 0,
        offset: 1,
        name: '紀元前',
        narrow: 'BC',
        abbr: 'BC',
       },
      ],
      eraYearOrdinalRegex: /(元|\d+)年/,
      eraYearOrdinalParse: function (e, n) {
       return n[1] === '元' ? 1 : parseInt(n[1] || e, 10);
      },
      months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
       '_',
      ),
      weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
      weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
      weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY/MM/DD',
       LL: 'YYYY年M月D日',
       LLL: 'YYYY年M月D日 HH:mm',
       LLLL: 'YYYY年M月D日 dddd HH:mm',
       l: 'YYYY/MM/DD',
       ll: 'YYYY年M月D日',
       lll: 'YYYY年M月D日 HH:mm',
       llll: 'YYYY年M月D日(ddd) HH:mm',
      },
      meridiemParse: /午前|午後/i,
      isPM: function (e) {
       return e === '午後';
      },
      meridiem: function (e, n, d) {
       return e < 12 ? '午前' : '午後';
      },
      calendar: {
       sameDay: '[今日] LT',
       nextDay: '[明日] LT',
       nextWeek: function (e) {
        return e.week() !== this.week() ? '[来週]dddd LT' : 'dddd LT';
       },
       lastDay: '[昨日] LT',
       lastWeek: function (e) {
        return this.week() !== e.week() ? '[先週]dddd LT' : 'dddd LT';
       },
       sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}日/,
      ordinal: function (e, n) {
       switch (n) {
        case 'y':
         return e === 1 ? '元年' : e + '年';
        case 'd':
        case 'D':
        case 'DDD':
         return e + '日';
        default:
         return e;
       }
      },
      relativeTime: {
       future: '%s後',
       past: '%s前',
       s: '数秒',
       ss: '%d秒',
       m: '1分',
       mm: '%d分',
       h: '1時間',
       hh: '%d時間',
       d: '1日',
       dd: '%d日',
       M: '1ヶ月',
       MM: '%dヶ月',
       y: '1年',
       yy: '%d年',
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(156);
    var a = t(1);
    a.datepickerLocale('ka', 'ka', {
     closeText: 'დახურვა',
     prevText: 'წინა',
     nextText: 'შემდეგი',
     currentText: 'დღეს',
     monthNames: [
      'იანვარი',
      'თებერვალი',
      'მარტი',
      'აპრილი',
      'მაისი',
      'ივნისი',
      'ივლისი',
      'აგვისტო',
      'სექტემბერი',
      'ოქტომბერი',
      'ნოემბერი',
      'დეკემბერი',
     ],
     monthNamesShort: [
      'იან',
      'თებ',
      'მარ',
      'აპრ',
      'მაი',
      'ივნ',
      'ივლ',
      'აგვ',
      'სექ',
      'ოქტ',
      'ნოე',
      'დეკ',
     ],
     dayNames: [
      'კვირა',
      'ორშაბათი',
      'სამშაბათი',
      'ოთხშაბათი',
      'ხუთშაბათი',
      'პარასკევი',
      'შაბათი',
     ],
     dayNamesShort: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
     dayNamesMin: ['კვ', 'ორ', 'სა', 'ოთ', 'ხუ', 'პა', 'შა'],
     weekHeader: 'კვ',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ka', {
      buttonText: {
       month: 'თვე',
       week: 'კვირა',
       day: 'დღე',
       list: 'დღის წესრიგი',
      },
      allDayText: 'მთელი დღე',
      eventLimitText: function (e) {
       return '+ კიდევ ' + e;
      },
      noEventsMessage: 'ღონისძიებები არ არის',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ka', {
      months:
       'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
        '_',
       ),
      monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
      weekdays: {
       standalone:
        'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split(
         '_',
        ),
       format:
        'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split(
         '_',
        ),
       isFormat: /(წინა|შემდეგ)/,
      },
      weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
      weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[დღეს] LT[-ზე]',
       nextDay: '[ხვალ] LT[-ზე]',
       lastDay: '[გუშინ] LT[-ზე]',
       nextWeek: '[შემდეგ] dddd LT[-ზე]',
       lastWeek: '[წინა] dddd LT-ზე',
       sameElse: 'L',
      },
      relativeTime: {
       future: function (e) {
        return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function (n, d, i) {
         return i === 'ი' ? d + 'ში' : d + i + 'ში';
        });
       },
       past: function (e) {
        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
         ? e.replace(/(ი|ე)$/, 'ის წინ')
         : /წელი/.test(e)
           ? e.replace(/წელი$/, 'წლის წინ')
           : e;
       },
       s: 'რამდენიმე წამი',
       ss: '%d წამი',
       m: 'წუთი',
       mm: '%d წუთი',
       h: 'საათი',
       hh: '%d საათი',
       d: 'დღე',
       dd: '%d დღე',
       M: 'თვე',
       MM: '%d თვე',
       y: 'წელი',
       yy: '%d წელი',
      },
      dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
      ordinal: function (e) {
       return e === 0
        ? e
        : e === 1
          ? e + '-ლი'
          : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
            ? 'მე-' + e
            : e + '-ე';
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(158);
    var a = t(1);
    a.datepickerLocale('kk', 'kk', {
     closeText: 'Жабу',
     prevText: '&#x3C;Алдыңғы',
     nextText: 'Келесі&#x3E;',
     currentText: 'Бүгін',
     monthNames: [
      'Қаңтар',
      'Ақпан',
      'Наурыз',
      'Сәуір',
      'Мамыр',
      'Маусым',
      'Шілде',
      'Тамыз',
      'Қыркүйек',
      'Қазан',
      'Қараша',
      'Желтоқсан',
     ],
     monthNamesShort: [
      'Қаң',
      'Ақп',
      'Нау',
      'Сәу',
      'Мам',
      'Мау',
      'Шіл',
      'Там',
      'Қыр',
      'Қаз',
      'Қар',
      'Жел',
     ],
     dayNames: [
      'Жексенбі',
      'Дүйсенбі',
      'Сейсенбі',
      'Сәрсенбі',
      'Бейсенбі',
      'Жұма',
      'Сенбі',
     ],
     dayNamesShort: ['жкс', 'дсн', 'ссн', 'срс', 'бсн', 'жма', 'снб'],
     dayNamesMin: ['Жк', 'Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн'],
     weekHeader: 'Не',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('kk', {
      buttonText: {
       month: 'Ай',
       week: 'Апта',
       day: 'Күн',
       list: 'Күн тәртібі',
      },
      allDayText: 'Күні бойы',
      eventLimitText: function (e) {
       return '+ тағы ' + e;
      },
      noEventsMessage: 'Көрсету үшін оқиғалар жоқ',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
      0: '-ші',
      1: '-ші',
      2: '-ші',
      3: '-ші',
      4: '-ші',
      5: '-ші',
      6: '-шы',
      7: '-ші',
      8: '-ші',
      9: '-шы',
      10: '-шы',
      20: '-шы',
      30: '-шы',
      40: '-шы',
      50: '-ші',
      60: '-шы',
      70: '-ші',
      80: '-ші',
      90: '-шы',
      100: '-ші',
     };
     return a.defineLocale('kk', {
      months:
       'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split(
        '_',
       ),
      monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
      weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split(
       '_',
      ),
      weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
      weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Бүгін сағат] LT',
       nextDay: '[Ертең сағат] LT',
       nextWeek: 'dddd [сағат] LT',
       lastDay: '[Кеше сағат] LT',
       lastWeek: '[Өткен аптаның] dddd [сағат] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s ішінде',
       past: '%s бұрын',
       s: 'бірнеше секунд',
       ss: '%d секунд',
       m: 'бір минут',
       mm: '%d минут',
       h: 'бір сағат',
       hh: '%d сағат',
       d: 'бір күн',
       dd: '%d күн',
       M: 'бір ай',
       MM: '%d ай',
       y: 'бір жыл',
       yy: '%d жыл',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
      ordinal: function (n) {
       var d = n % 10,
        i = n >= 100 ? 100 : null;
       return n + (e[n] || e[d] || e[i]);
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(160);
    var a = t(1);
    a.datepickerLocale('ko', 'ko', {
     closeText: '닫기',
     prevText: '이전달',
     nextText: '다음달',
     currentText: '오늘',
     monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
     ],
     monthNamesShort: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
     ],
     dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
     ],
     dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
     dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
     weekHeader: '주',
     dateFormat: 'yy. m. d.',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '년',
    }),
     a.locale('ko', {
      buttonText: { month: '월', week: '주', day: '일', list: '일정목록' },
      allDayText: '종일',
      eventLimitText: '개',
      noEventsMessage: '일정이 없습니다',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ko', {
      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split(
       '_',
      ),
      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
      weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
      longDateFormat: {
       LT: 'A h:mm',
       LTS: 'A h:mm:ss',
       L: 'YYYY.MM.DD.',
       LL: 'YYYY년 MMMM D일',
       LLL: 'YYYY년 MMMM D일 A h:mm',
       LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
       l: 'YYYY.MM.DD.',
       ll: 'YYYY년 MMMM D일',
       lll: 'YYYY년 MMMM D일 A h:mm',
       llll: 'YYYY년 MMMM D일 dddd A h:mm',
      },
      calendar: {
       sameDay: '오늘 LT',
       nextDay: '내일 LT',
       nextWeek: 'dddd LT',
       lastDay: '어제 LT',
       lastWeek: '지난주 dddd LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s 후',
       past: '%s 전',
       s: '몇 초',
       ss: '%d초',
       m: '1분',
       mm: '%d분',
       h: '한 시간',
       hh: '%d시간',
       d: '하루',
       dd: '%d일',
       M: '한 달',
       MM: '%d달',
       y: '일 년',
       yy: '%d년',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
      ordinal: function (e, n) {
       switch (n) {
        case 'd':
        case 'D':
        case 'DDD':
         return e + '일';
        case 'M':
         return e + '월';
        case 'w':
        case 'W':
         return e + '주';
        default:
         return e;
       }
      },
      meridiemParse: /오전|오후/,
      isPM: function (e) {
       return e === '오후';
      },
      meridiem: function (e, n, d) {
       return e < 12 ? '오전' : '오후';
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(162);
    var a = t(1);
    a.datepickerLocale('lb', 'lb', {
     closeText: 'Fäerdeg',
     prevText: 'Zréck',
     nextText: 'Weider',
     currentText: 'Haut',
     monthNames: [
      'Januar',
      'Februar',
      'Mäerz',
      'Abrëll',
      'Mee',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mäe',
      'Abr',
      'Mee',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Sonndeg',
      'Méindeg',
      'Dënschdeg',
      'Mëttwoch',
      'Donneschdeg',
      'Freideg',
      'Samschdeg',
     ],
     dayNamesShort: ['Son', 'Méi', 'Dën', 'Mët', 'Don', 'Fre', 'Sam'],
     dayNamesMin: ['So', 'Mé', 'Dë', 'Më', 'Do', 'Fr', 'Sa'],
     weekHeader: 'W',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('lb', {
      buttonText: {
       month: 'Mount',
       week: 'Woch',
       day: 'Dag',
       list: 'Terminiwwersiicht',
      },
      allDayText: 'Ganzen Dag',
      eventLimitText: 'méi',
      noEventsMessage: 'Nee Evenementer ze affichéieren',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(r, m, _, u) {
      var l = {
       m: ['eng Minutt', 'enger Minutt'],
       h: ['eng Stonn', 'enger Stonn'],
       d: ['een Dag', 'engem Dag'],
       M: ['ee Mount', 'engem Mount'],
       y: ['ee Joer', 'engem Joer'],
      };
      return m ? l[_][0] : l[_][1];
     }
     function n(r) {
      return i(r.substr(0, r.indexOf(' '))) ? 'a ' + r : 'an ' + r;
     }
     function d(r) {
      return i(r.substr(0, r.indexOf(' '))) ? 'viru ' + r : 'virun ' + r;
     }
     function i(r) {
      if (((r = parseInt(r, 10)), isNaN(r))) return !1;
      if (r < 0) return !0;
      if (r < 10) return 4 <= r && r <= 7;
      if (r < 100) {
       var m = r % 10,
        _ = r / 10;
       return i(m === 0 ? _ : m);
      }
      if (r < 1e4) {
       for (; r >= 10; ) r /= 10;
       return i(r);
      }
      return (r /= 1e3), i(r);
     }
     return a.defineLocale('lb', {
      months:
       'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(
        '_',
       ),
      monthsShort:
       'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays:
       'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split(
        '_',
       ),
      weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm [Auer]',
       LTS: 'H:mm:ss [Auer]',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm [Auer]',
       LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
      },
      calendar: {
       sameDay: '[Haut um] LT',
       sameElse: 'L',
       nextDay: '[Muer um] LT',
       nextWeek: 'dddd [um] LT',
       lastDay: '[Gëschter um] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 2:
         case 4:
          return '[Leschten] dddd [um] LT';
         default:
          return '[Leschte] dddd [um] LT';
        }
       },
      },
      relativeTime: {
       future: n,
       past: d,
       s: 'e puer Sekonnen',
       ss: '%d Sekonnen',
       m: e,
       mm: '%d Minutten',
       h: e,
       hh: '%d Stonnen',
       d: e,
       dd: '%d Deeg',
       M: e,
       MM: '%d Méint',
       y: e,
       yy: '%d Joer',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(164);
    var a = t(1);
    a.datepickerLocale('lt', 'lt', {
     closeText: 'Uždaryti',
     prevText: '&#x3C;Atgal',
     nextText: 'Pirmyn&#x3E;',
     currentText: 'Šiandien',
     monthNames: [
      'Sausis',
      'Vasaris',
      'Kovas',
      'Balandis',
      'Gegužė',
      'Birželis',
      'Liepa',
      'Rugpjūtis',
      'Rugsėjis',
      'Spalis',
      'Lapkritis',
      'Gruodis',
     ],
     monthNamesShort: [
      'Sau',
      'Vas',
      'Kov',
      'Bal',
      'Geg',
      'Bir',
      'Lie',
      'Rugp',
      'Rugs',
      'Spa',
      'Lap',
      'Gru',
     ],
     dayNames: [
      'sekmadienis',
      'pirmadienis',
      'antradienis',
      'trečiadienis',
      'ketvirtadienis',
      'penktadienis',
      'šeštadienis',
     ],
     dayNamesShort: ['sek', 'pir', 'ant', 'tre', 'ket', 'pen', 'šeš'],
     dayNamesMin: ['Se', 'Pr', 'An', 'Tr', 'Ke', 'Pe', 'Še'],
     weekHeader: 'SAV',
     dateFormat: 'yy-mm-dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '',
    }),
     a.locale('lt', {
      buttonText: {
       month: 'Mėnuo',
       week: 'Savaitė',
       day: 'Diena',
       list: 'Darbotvarkė',
      },
      allDayText: 'Visą dieną',
      eventLimitText: 'daugiau',
      noEventsMessage: 'Nėra įvykių rodyti',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(_, u, l, M) {
      return u ? 'kelios sekundės' : M ? 'kelių sekundžių' : 'kelias sekundes';
     }
     function n(_, u, l, M) {
      return u ? i(l)[0] : M ? i(l)[1] : i(l)[2];
     }
     function d(_) {
      return _ % 10 == 0 || (_ > 10 && _ < 20);
     }
     function i(_) {
      return m[_].split('_');
     }
     function r(_, u, l, M) {
      var c = _ + ' ';
      return _ === 1
       ? c + n(_, u, l[0], M)
       : u
         ? c + (d(_) ? i(l)[1] : i(l)[0])
         : M
           ? c + i(l)[1]
           : c + (d(_) ? i(l)[1] : i(l)[2]);
     }
     var m = {
      ss: 'sekundė_sekundžių_sekundes',
      m: 'minutė_minutės_minutę',
      mm: 'minutės_minučių_minutes',
      h: 'valanda_valandos_valandą',
      hh: 'valandos_valandų_valandas',
      d: 'diena_dienos_dieną',
      dd: 'dienos_dienų_dienas',
      M: 'mėnuo_mėnesio_mėnesį',
      MM: 'mėnesiai_mėnesių_mėnesius',
      y: 'metai_metų_metus',
      yy: 'metai_metų_metus',
     };
     return a.defineLocale('lt', {
      months: {
       format:
        'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
         '_',
        ),
       standalone:
        'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
         '_',
        ),
       isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
      },
      monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
      weekdays: {
       format:
        'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split(
         '_',
        ),
       standalone:
        'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
         '_',
        ),
       isFormat: /dddd HH:mm/,
      },
      weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
      weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY-MM-DD',
       LL: 'YYYY [m.] MMMM D [d.]',
       LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
       LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
       l: 'YYYY-MM-DD',
       ll: 'YYYY [m.] MMMM D [d.]',
       lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
       llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
      },
      calendar: {
       sameDay: '[Šiandien] LT',
       nextDay: '[Rytoj] LT',
       nextWeek: 'dddd LT',
       lastDay: '[Vakar] LT',
       lastWeek: '[Praėjusį] dddd LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'po %s',
       past: 'prieš %s',
       s: e,
       ss: r,
       m: n,
       mm: r,
       h: n,
       hh: r,
       d: n,
       dd: r,
       M: n,
       MM: r,
       y: n,
       yy: r,
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function (_) {
       return _ + '-oji';
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(166);
    var a = t(1);
    a.datepickerLocale('lv', 'lv', {
     closeText: 'Aizvērt',
     prevText: 'Iepr.',
     nextText: 'Nāk.',
     currentText: 'Šodien',
     monthNames: [
      'Janvāris',
      'Februāris',
      'Marts',
      'Aprīlis',
      'Maijs',
      'Jūnijs',
      'Jūlijs',
      'Augusts',
      'Septembris',
      'Oktobris',
      'Novembris',
      'Decembris',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jūn',
      'Jūl',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'svētdiena',
      'pirmdiena',
      'otrdiena',
      'trešdiena',
      'ceturtdiena',
      'piektdiena',
      'sestdiena',
     ],
     dayNamesShort: ['svt', 'prm', 'otr', 'tre', 'ctr', 'pkt', 'sst'],
     dayNamesMin: ['Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'Ss'],
     weekHeader: 'Ned.',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('lv', {
      buttonText: {
       month: 'Mēnesis',
       week: 'Nedēļa',
       day: 'Diena',
       list: 'Dienas kārtība',
      },
      allDayText: 'Visu dienu',
      eventLimitText: function (e) {
       return '+vēl ' + e;
      },
      noEventsMessage: 'Nav notikumu',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(m, _, u) {
      return u
       ? _ % 10 == 1 && _ % 100 != 11
         ? m[2]
         : m[3]
       : _ % 10 == 1 && _ % 100 != 11
         ? m[0]
         : m[1];
     }
     function n(m, _, u) {
      return m + ' ' + e(r[u], m, _);
     }
     function d(m, _, u) {
      return e(r[u], m, _);
     }
     function i(m, _) {
      return _ ? 'dažas sekundes' : 'dažām sekundēm';
     }
     var r = {
      ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
      m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
      mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
      h: 'stundas_stundām_stunda_stundas'.split('_'),
      hh: 'stundas_stundām_stunda_stundas'.split('_'),
      d: 'dienas_dienām_diena_dienas'.split('_'),
      dd: 'dienas_dienām_diena_dienas'.split('_'),
      M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
      MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
      y: 'gada_gadiem_gads_gadi'.split('_'),
      yy: 'gada_gadiem_gads_gadi'.split('_'),
     };
     return a.defineLocale('lv', {
      months:
       'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split(
        '_',
       ),
      monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
      weekdays:
       'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split(
        '_',
       ),
      weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY.',
       LL: 'YYYY. [gada] D. MMMM',
       LLL: 'YYYY. [gada] D. MMMM, HH:mm',
       LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
      },
      calendar: {
       sameDay: '[Šodien pulksten] LT',
       nextDay: '[Rīt pulksten] LT',
       nextWeek: 'dddd [pulksten] LT',
       lastDay: '[Vakar pulksten] LT',
       lastWeek: '[Pagājušā] dddd [pulksten] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'pēc %s',
       past: 'pirms %s',
       s: i,
       ss: n,
       m: d,
       mm: n,
       h: d,
       hh: n,
       d,
       dd: n,
       M: d,
       MM: n,
       y: d,
       yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(168);
    var a = t(1);
    a.datepickerLocale('mk', 'mk', {
     closeText: 'Затвори',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Денес',
     monthNames: [
      'Јануари',
      'Февруари',
      'Март',
      'Април',
      'Мај',
      'Јуни',
      'Јули',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
     ],
     monthNamesShort: [
      'Јан',
      'Фев',
      'Мар',
      'Апр',
      'Мај',
      'Јун',
      'Јул',
      'Авг',
      'Сеп',
      'Окт',
      'Ное',
      'Дек',
     ],
     dayNames: [
      'Недела',
      'Понеделник',
      'Вторник',
      'Среда',
      'Четврток',
      'Петок',
      'Сабота',
     ],
     dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сре', 'Чет', 'Пет', 'Саб'],
     dayNamesMin: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Са'],
     weekHeader: 'Сед',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('mk', {
      buttonText: {
       month: 'Месец',
       week: 'Недела',
       day: 'Ден',
       list: 'График',
      },
      allDayText: 'Цел ден',
      eventLimitText: function (e) {
       return '+повеќе ' + e;
      },
      noEventsMessage: 'Нема настани за прикажување',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('mk', {
      months:
       'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split(
        '_',
       ),
      monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
      weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split(
       '_',
      ),
      weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
      weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'D.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY H:mm',
       LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[Денес во] LT',
       nextDay: '[Утре во] LT',
       nextWeek: '[Во] dddd [во] LT',
       lastDay: '[Вчера во] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
         case 3:
         case 6:
          return '[Изминатата] dddd [во] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[Изминатиот] dddd [во] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'за %s',
       past: 'пред %s',
       s: 'неколку секунди',
       ss: '%d секунди',
       m: 'една минута',
       mm: '%d минути',
       h: 'еден час',
       hh: '%d часа',
       d: 'еден ден',
       dd: '%d дена',
       M: 'еден месец',
       MM: '%d месеци',
       y: 'една година',
       yy: '%d години',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function (e) {
       var n = e % 10,
        d = e % 100;
       return e === 0
        ? e + '-ев'
        : d === 0
          ? e + '-ен'
          : d > 10 && d < 20
            ? e + '-ти'
            : n === 1
              ? e + '-ви'
              : n === 2
                ? e + '-ри'
                : n === 7 || n === 8
                  ? e + '-ми'
                  : e + '-ти';
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(170);
    var a = t(1);
    a.datepickerLocale('ms-my', 'ms', {
     closeText: 'Tutup',
     prevText: '&#x3C;Sebelum',
     nextText: 'Selepas&#x3E;',
     currentText: 'hari ini',
     monthNames: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mac',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Ogo',
      'Sep',
      'Okt',
      'Nov',
      'Dis',
     ],
     dayNames: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
     dayNamesShort: ['Aha', 'Isn', 'Sel', 'Rab', 'kha', 'Jum', 'Sab'],
     dayNamesMin: ['Ah', 'Is', 'Se', 'Ra', 'Kh', 'Ju', 'Sa'],
     weekHeader: 'Mg',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ms-my', {
      buttonText: {
       month: 'Bulan',
       week: 'Minggu',
       day: 'Hari',
       list: 'Agenda',
      },
      allDayText: 'Sepanjang hari',
      eventLimitText: function (e) {
       return 'masih ada ' + e + ' acara';
      },
      noEventsMessage: 'Tiada peristiwa untuk dipaparkan',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ms-my', {
      months:
       'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
       LT: 'HH.mm',
       LTS: 'HH.mm.ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY [pukul] HH.mm',
       LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === 'pagi'
         ? e
         : n === 'tengahari'
           ? e >= 11
             ? e
             : e + 12
           : n === 'petang' || n === 'malam'
             ? e + 12
             : void 0
       );
      },
      meridiem: function (e, n, d) {
       return e < 11
        ? 'pagi'
        : e < 15
          ? 'tengahari'
          : e < 19
            ? 'petang'
            : 'malam';
      },
      calendar: {
       sameDay: '[Hari ini pukul] LT',
       nextDay: '[Esok pukul] LT',
       nextWeek: 'dddd [pukul] LT',
       lastDay: '[Kelmarin pukul] LT',
       lastWeek: 'dddd [lepas pukul] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dalam %s',
       past: '%s yang lepas',
       s: 'beberapa saat',
       ss: '%d saat',
       m: 'seminit',
       mm: '%d minit',
       h: 'sejam',
       hh: '%d jam',
       d: 'sehari',
       dd: '%d hari',
       M: 'sebulan',
       MM: '%d bulan',
       y: 'setahun',
       yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(172);
    var a = t(1);
    a.datepickerLocale('ms', 'ms', {
     closeText: 'Tutup',
     prevText: '&#x3C;Sebelum',
     nextText: 'Selepas&#x3E;',
     currentText: 'hari ini',
     monthNames: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mac',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Ogo',
      'Sep',
      'Okt',
      'Nov',
      'Dis',
     ],
     dayNames: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
     dayNamesShort: ['Aha', 'Isn', 'Sel', 'Rab', 'kha', 'Jum', 'Sab'],
     dayNamesMin: ['Ah', 'Is', 'Se', 'Ra', 'Kh', 'Ju', 'Sa'],
     weekHeader: 'Mg',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ms', {
      buttonText: {
       month: 'Bulan',
       week: 'Minggu',
       day: 'Hari',
       list: 'Agenda',
      },
      allDayText: 'Sepanjang hari',
      eventLimitText: function (e) {
       return 'masih ada ' + e + ' acara';
      },
      noEventsMessage: 'Tiada peristiwa untuk dipaparkan',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('ms', {
      months:
       'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
        '_',
       ),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
       LT: 'HH.mm',
       LTS: 'HH.mm.ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY [pukul] HH.mm',
       LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === 'pagi'
         ? e
         : n === 'tengahari'
           ? e >= 11
             ? e
             : e + 12
           : n === 'petang' || n === 'malam'
             ? e + 12
             : void 0
       );
      },
      meridiem: function (e, n, d) {
       return e < 11
        ? 'pagi'
        : e < 15
          ? 'tengahari'
          : e < 19
            ? 'petang'
            : 'malam';
      },
      calendar: {
       sameDay: '[Hari ini pukul] LT',
       nextDay: '[Esok pukul] LT',
       nextWeek: 'dddd [pukul] LT',
       lastDay: '[Kelmarin pukul] LT',
       lastWeek: 'dddd [lepas pukul] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'dalam %s',
       past: '%s yang lepas',
       s: 'beberapa saat',
       ss: '%d saat',
       m: 'seminit',
       mm: '%d minit',
       h: 'sejam',
       hh: '%d jam',
       d: 'sehari',
       dd: '%d hari',
       M: 'sebulan',
       MM: '%d bulan',
       y: 'setahun',
       yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(174);
    var a = t(1);
    a.datepickerLocale('nb', 'nb', {
     closeText: 'Lukk',
     prevText: '&#xAB;Forrige',
     nextText: 'Neste&#xBB;',
     currentText: 'I dag',
     monthNames: [
      'januar',
      'februar',
      'mars',
      'april',
      'mai',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'desember',
     ],
     monthNamesShort: [
      'jan',
      'feb',
      'mar',
      'apr',
      'mai',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'des',
     ],
     dayNamesShort: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
     dayNames: [
      'søndag',
      'mandag',
      'tirsdag',
      'onsdag',
      'torsdag',
      'fredag',
      'lørdag',
     ],
     dayNamesMin: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
     weekHeader: 'Uke',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('nb', {
      buttonText: { month: 'Måned', week: 'Uke', day: 'Dag', list: 'Agenda' },
      allDayText: 'Hele dagen',
      eventLimitText: 'til',
      noEventsMessage: 'Ingen hendelser å vise',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('nb', {
      months:
       'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
        '_',
       ),
      monthsShort:
       'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY [kl.] HH:mm',
       LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
       sameDay: '[i dag kl.] LT',
       nextDay: '[i morgen kl.] LT',
       nextWeek: 'dddd [kl.] LT',
       lastDay: '[i går kl.] LT',
       lastWeek: '[forrige] dddd [kl.] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'om %s',
       past: '%s siden',
       s: 'noen sekunder',
       ss: '%d sekunder',
       m: 'ett minutt',
       mm: '%d minutter',
       h: 'en time',
       hh: '%d timer',
       d: 'en dag',
       dd: '%d dager',
       M: 'en måned',
       MM: '%d måneder',
       y: 'ett år',
       yy: '%d år',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(176);
    var a = t(1);
    a.datepickerLocale('nl-be', 'nl-BE', {
     closeText: 'Sluiten',
     prevText: '←',
     nextText: '→',
     currentText: 'Vandaag',
     monthNames: [
      'januari',
      'februari',
      'maart',
      'april',
      'mei',
      'juni',
      'juli',
      'augustus',
      'september',
      'oktober',
      'november',
      'december',
     ],
     monthNamesShort: [
      'jan',
      'feb',
      'mrt',
      'apr',
      'mei',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec',
     ],
     dayNames: [
      'zondag',
      'maandag',
      'dinsdag',
      'woensdag',
      'donderdag',
      'vrijdag',
      'zaterdag',
     ],
     dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
     dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('nl-be', {
      buttonText: { month: 'Maand', week: 'Week', day: 'Dag', list: 'Agenda' },
      allDayText: 'Hele dag',
      eventLimitText: 'extra',
      noEventsMessage: 'Geen evenementen om te laten zien',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
       '_',
      ),
      n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      d = [
       /^jan/i,
       /^feb/i,
       /^maart|mrt.?$/i,
       /^apr/i,
       /^mei$/i,
       /^jun[i.]?$/i,
       /^jul[i.]?$/i,
       /^aug/i,
       /^sep/i,
       /^okt/i,
       /^nov/i,
       /^dec/i,
      ],
      i =
       /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
     return a.defineLocale('nl-be', {
      months:
       'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
        '_',
       ),
      monthsShort: function (r, m) {
       return r ? (/-MMM-/.test(m) ? n[r.month()] : e[r.month()]) : e;
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex:
       /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex:
       /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      weekdays:
       'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[vandaag om] LT',
       nextDay: '[morgen om] LT',
       nextWeek: 'dddd [om] LT',
       lastDay: '[gisteren om] LT',
       lastWeek: '[afgelopen] dddd [om] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'over %s',
       past: '%s geleden',
       s: 'een paar seconden',
       ss: '%d seconden',
       m: 'één minuut',
       mm: '%d minuten',
       h: 'één uur',
       hh: '%d uur',
       d: 'één dag',
       dd: '%d dagen',
       M: 'één maand',
       MM: '%d maanden',
       y: 'één jaar',
       yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (r) {
       return r + (r === 1 || r === 8 || r >= 20 ? 'ste' : 'de');
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(178);
    var a = t(1);
    a.datepickerLocale('nl', 'nl', {
     closeText: 'Sluiten',
     prevText: '←',
     nextText: '→',
     currentText: 'Vandaag',
     monthNames: [
      'januari',
      'februari',
      'maart',
      'april',
      'mei',
      'juni',
      'juli',
      'augustus',
      'september',
      'oktober',
      'november',
      'december',
     ],
     monthNamesShort: [
      'jan',
      'feb',
      'mrt',
      'apr',
      'mei',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec',
     ],
     dayNames: [
      'zondag',
      'maandag',
      'dinsdag',
      'woensdag',
      'donderdag',
      'vrijdag',
      'zaterdag',
     ],
     dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
     dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
     weekHeader: 'Wk',
     dateFormat: 'dd-mm-yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('nl', {
      buttonText: {
       year: 'Jaar',
       month: 'Maand',
       week: 'Week',
       day: 'Dag',
       list: 'Agenda',
      },
      allDayText: 'Hele dag',
      eventLimitText: 'extra',
      noEventsMessage: 'Geen evenementen om te laten zien',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
       '_',
      ),
      n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      d = [
       /^jan/i,
       /^feb/i,
       /^maart|mrt.?$/i,
       /^apr/i,
       /^mei$/i,
       /^jun[i.]?$/i,
       /^jul[i.]?$/i,
       /^aug/i,
       /^sep/i,
       /^okt/i,
       /^nov/i,
       /^dec/i,
      ],
      i =
       /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
     return a.defineLocale('nl', {
      months:
       'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
        '_',
       ),
      monthsShort: function (r, m) {
       return r ? (/-MMM-/.test(m) ? n[r.month()] : e[r.month()]) : e;
      },
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex:
       /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex:
       /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      weekdays:
       'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD-MM-YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[vandaag om] LT',
       nextDay: '[morgen om] LT',
       nextWeek: 'dddd [om] LT',
       lastDay: '[gisteren om] LT',
       lastWeek: '[afgelopen] dddd [om] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'over %s',
       past: '%s geleden',
       s: 'een paar seconden',
       ss: '%d seconden',
       m: 'één minuut',
       mm: '%d minuten',
       h: 'één uur',
       hh: '%d uur',
       d: 'één dag',
       dd: '%d dagen',
       M: 'één maand',
       MM: '%d maanden',
       y: 'één jaar',
       yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (r) {
       return r + (r === 1 || r === 8 || r >= 20 ? 'ste' : 'de');
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(180);
    var a = t(1);
    a.datepickerLocale('nn', 'nn', {
     closeText: 'Lukk',
     prevText: '&#xAB;Førre',
     nextText: 'Neste&#xBB;',
     currentText: 'I dag',
     monthNames: [
      'januar',
      'februar',
      'mars',
      'april',
      'mai',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'desember',
     ],
     monthNamesShort: [
      'jan',
      'feb',
      'mar',
      'apr',
      'mai',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'des',
     ],
     dayNamesShort: ['sun', 'mån', 'tys', 'ons', 'tor', 'fre', 'lau'],
     dayNames: [
      'sundag',
      'måndag',
      'tysdag',
      'onsdag',
      'torsdag',
      'fredag',
      'laurdag',
     ],
     dayNamesMin: ['su', 'må', 'ty', 'on', 'to', 'fr', 'la'],
     weekHeader: 'Veke',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('nn', {
      buttonText: { month: 'Månad', week: 'Veke', day: 'Dag', list: 'Agenda' },
      allDayText: 'Heile dagen',
      eventLimitText: 'til',
      noEventsMessage: 'Ingen hendelser å vise',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('nn', {
      months:
       'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
        '_',
       ),
      monthsShort:
       'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
      weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
      weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY [kl.] H:mm',
       LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
       sameDay: '[I dag klokka] LT',
       nextDay: '[I morgon klokka] LT',
       nextWeek: 'dddd [klokka] LT',
       lastDay: '[I går klokka] LT',
       lastWeek: '[Føregåande] dddd [klokka] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'om %s',
       past: '%s sidan',
       s: 'nokre sekund',
       ss: '%d sekund',
       m: 'eit minutt',
       mm: '%d minutt',
       h: 'ein time',
       hh: '%d timar',
       d: 'ein dag',
       dd: '%d dagar',
       M: 'ein månad',
       MM: '%d månader',
       y: 'eit år',
       yy: '%d år',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(182);
    var a = t(1);
    a.datepickerLocale('pl', 'pl', {
     closeText: 'Zamknij',
     prevText: '&#x3C;Poprzedni',
     nextText: 'Następny&#x3E;',
     currentText: 'Dziś',
     monthNames: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
     ],
     monthNamesShort: [
      'Sty',
      'Lu',
      'Mar',
      'Kw',
      'Maj',
      'Cze',
      'Lip',
      'Sie',
      'Wrz',
      'Pa',
      'Lis',
      'Gru',
     ],
     dayNames: [
      'Niedziela',
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota',
     ],
     dayNamesShort: ['Nie', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So'],
     dayNamesMin: ['N', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
     weekHeader: 'Tydz',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('pl', {
      buttonText: {
       month: 'Miesiąc',
       week: 'Tydzień',
       day: 'Dzień',
       list: 'Plan dnia',
      },
      allDayText: 'Cały dzień',
      eventLimitText: 'więcej',
      noEventsMessage: 'Brak wydarzeń do wyświetlenia',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(r) {
      return r % 10 < 5 && r % 10 > 1 && ~~(r / 10) % 10 != 1;
     }
     function n(r, m, _) {
      var u = r + ' ';
      switch (_) {
       case 'ss':
        return u + (e(r) ? 'sekundy' : 'sekund');
       case 'm':
        return m ? 'minuta' : 'minutę';
       case 'mm':
        return u + (e(r) ? 'minuty' : 'minut');
       case 'h':
        return m ? 'godzina' : 'godzinę';
       case 'hh':
        return u + (e(r) ? 'godziny' : 'godzin');
       case 'MM':
        return u + (e(r) ? 'miesiące' : 'miesięcy');
       case 'yy':
        return u + (e(r) ? 'lata' : 'lat');
      }
     }
     var d =
       'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
        '_',
       ),
      i =
       'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
        '_',
       );
     return a.defineLocale('pl', {
      months: function (r, m) {
       return r
        ? m === ''
          ? '(' + i[r.month()] + '|' + d[r.month()] + ')'
          : /D MMMM/.test(m)
            ? i[r.month()]
            : d[r.month()]
        : d;
      },
      monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
      weekdays:
       'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
      weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
      weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Dziś o] LT',
       nextDay: '[Jutro o] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[W niedzielę o] LT';
         case 2:
          return '[We wtorek o] LT';
         case 3:
          return '[W środę o] LT';
         case 6:
          return '[W sobotę o] LT';
         default:
          return '[W] dddd [o] LT';
        }
       },
       lastDay: '[Wczoraj o] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return '[W zeszłą niedzielę o] LT';
         case 3:
          return '[W zeszłą środę o] LT';
         case 6:
          return '[W zeszłą sobotę o] LT';
         default:
          return '[W zeszły] dddd [o] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: '%s temu',
       s: 'kilka sekund',
       ss: n,
       m: n,
       mm: n,
       h: n,
       hh: n,
       d: '1 dzień',
       dd: '%d dni',
       M: 'miesiąc',
       MM: n,
       y: 'rok',
       yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(184);
    var a = t(1);
    a.datepickerLocale('pt-br', 'pt-BR', {
     closeText: 'Fechar',
     prevText: '&#x3C;Anterior',
     nextText: 'Próximo&#x3E;',
     currentText: 'Hoje',
     monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
     ],
     monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
     ],
     dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('pt-br', {
      buttonText: {
       month: 'Mês',
       week: 'Semana',
       day: 'Dia',
       list: 'Compromissos',
      },
      allDayText: 'dia inteiro',
      eventLimitText: function (e) {
       return 'mais +' + e;
      },
      noEventsMessage: 'Não há eventos para mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('pt-br', {
      months:
       'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
        '_',
       ),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays:
       'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split(
        '_',
       ),
      weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
       LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
      },
      calendar: {
       sameDay: '[Hoje às] LT',
       nextDay: '[Amanhã às] LT',
       nextWeek: 'dddd [às] LT',
       lastDay: '[Ontem às] LT',
       lastWeek: function () {
        return this.day() === 0 || this.day() === 6
         ? '[Último] dddd [às] LT'
         : '[Última] dddd [às] LT';
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'em %s',
       past: 'há %s',
       s: 'poucos segundos',
       ss: '%d segundos',
       m: 'um minuto',
       mm: '%d minutos',
       h: 'uma hora',
       hh: '%d horas',
       d: 'um dia',
       dd: '%d dias',
       M: 'um mês',
       MM: '%d meses',
       y: 'um ano',
       yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(186);
    var a = t(1);
    a.datepickerLocale('pt', 'pt', {
     closeText: 'Fechar',
     prevText: 'Anterior',
     nextText: 'Seguinte',
     currentText: 'Hoje',
     monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
     ],
     monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
     ],
     dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
     ],
     dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     weekHeader: 'Sem',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('pt', {
      buttonText: { month: 'Mês', week: 'Semana', day: 'Dia', list: 'Agenda' },
      allDayText: 'Todo o dia',
      eventLimitText: 'mais',
      noEventsMessage: 'Não há eventos para mostrar',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('pt', {
      months:
       'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
        '_',
       ),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays:
       'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
        '_',
       ),
      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D [de] MMMM [de] YYYY',
       LLL: 'D [de] MMMM [de] YYYY HH:mm',
       LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Hoje às] LT',
       nextDay: '[Amanhã às] LT',
       nextWeek: 'dddd [às] LT',
       lastDay: '[Ontem às] LT',
       lastWeek: function () {
        return this.day() === 0 || this.day() === 6
         ? '[Último] dddd [às] LT'
         : '[Última] dddd [às] LT';
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'em %s',
       past: 'há %s',
       s: 'segundos',
       ss: '%d segundos',
       m: 'um minuto',
       mm: '%d minutos',
       h: 'uma hora',
       hh: '%d horas',
       d: 'um dia',
       dd: '%d dias',
       M: 'um mês',
       MM: '%d meses',
       y: 'um ano',
       yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(188);
    var a = t(1);
    a.datepickerLocale('ro', 'ro', {
     closeText: 'Închide',
     prevText: '&#xAB; Luna precedentă',
     nextText: 'Luna următoare &#xBB;',
     currentText: 'Azi',
     monthNames: [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
     ],
     monthNamesShort: [
      'Ian',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Iun',
      'Iul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Duminică',
      'Luni',
      'Marţi',
      'Miercuri',
      'Joi',
      'Vineri',
      'Sâmbătă',
     ],
     dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
     dayNamesMin: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
     weekHeader: 'Săpt',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ro', {
      buttonText: {
       prev: 'precedentă',
       next: 'următoare',
       month: 'Lună',
       week: 'Săptămână',
       day: 'Zi',
       list: 'Agendă',
      },
      allDayText: 'Toată ziua',
      eventLimitText: function (e) {
       return '+alte ' + e;
      },
      noEventsMessage: 'Nu există evenimente de afișat',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i) {
      var r = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani',
       },
       m = ' ';
      return (
       (n % 100 >= 20 || (n >= 100 && n % 100 == 0)) && (m = ' de '),
       n + m + r[i]
      );
     }
     return a.defineLocale('ro', {
      months:
       'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
        '_',
       ),
      monthsShort:
       'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
      weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
      weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY H:mm',
       LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[azi la] LT',
       nextDay: '[mâine la] LT',
       nextWeek: 'dddd [la] LT',
       lastDay: '[ieri la] LT',
       lastWeek: '[fosta] dddd [la] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'peste %s',
       past: '%s în urmă',
       s: 'câteva secunde',
       ss: e,
       m: 'un minut',
       mm: e,
       h: 'o oră',
       hh: e,
       d: 'o zi',
       dd: e,
       M: 'o lună',
       MM: e,
       y: 'un an',
       yy: e,
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(190);
    var a = t(1);
    a.datepickerLocale('ru', 'ru', {
     closeText: 'Закрыть',
     prevText: '&#x3C;Пред',
     nextText: 'След&#x3E;',
     currentText: 'Сегодня',
     monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
     ],
     monthNamesShort: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
     ],
     dayNames: [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
     ],
     dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
     dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     weekHeader: 'Нед',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('ru', {
      buttonText: {
       month: 'Месяц',
       week: 'Неделя',
       day: 'День',
       list: 'Повестка дня',
      },
      allDayText: 'Весь день',
      eventLimitText: function (e) {
       return '+ ещё ' + e;
      },
      noEventsMessage: 'Нет событий для отображения',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(i, r) {
      var m = i.split('_');
      return r % 10 == 1 && r % 100 != 11
       ? m[0]
       : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
         ? m[1]
         : m[2];
     }
     function n(i, r, m) {
      var _ = {
       ss: r ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
       mm: r ? 'минута_минуты_минут' : 'минуту_минуты_минут',
       hh: 'час_часа_часов',
       dd: 'день_дня_дней',
       MM: 'месяц_месяца_месяцев',
       yy: 'год_года_лет',
      };
      return m === 'm' ? (r ? 'минута' : 'минуту') : i + ' ' + e(_[m], +i);
     }
     var d = [
      /^янв/i,
      /^фев/i,
      /^мар/i,
      /^апр/i,
      /^ма[йя]/i,
      /^июн/i,
      /^июл/i,
      /^авг/i,
      /^сен/i,
      /^окт/i,
      /^ноя/i,
      /^дек/i,
     ];
     return a.defineLocale('ru', {
      months: {
       format:
        'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
         '_',
        ),
       standalone:
        'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
         '_',
        ),
      },
      monthsShort: {
       format:
        'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split(
         '_',
        ),
       standalone:
        'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split(
         '_',
        ),
      },
      weekdays: {
       standalone:
        'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
         '_',
        ),
       format:
        'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split(
         '_',
        ),
       isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/,
      },
      weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      monthsParse: d,
      longMonthsParse: d,
      shortMonthsParse: d,
      monthsRegex:
       /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsShortRegex:
       /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsStrictRegex:
       /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
      monthsShortStrictRegex:
       /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY г.',
       LLL: 'D MMMM YYYY г., H:mm',
       LLLL: 'dddd, D MMMM YYYY г., H:mm',
      },
      calendar: {
       sameDay: '[Сегодня, в] LT',
       nextDay: '[Завтра, в] LT',
       lastDay: '[Вчера, в] LT',
       nextWeek: function (i) {
        if (i.week() === this.week())
         return this.day() === 2 ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
        switch (this.day()) {
         case 0:
          return '[В следующее] dddd, [в] LT';
         case 1:
         case 2:
         case 4:
          return '[В следующий] dddd, [в] LT';
         case 3:
         case 5:
         case 6:
          return '[В следующую] dddd, [в] LT';
        }
       },
       lastWeek: function (i) {
        if (i.week() === this.week())
         return this.day() === 2 ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
        switch (this.day()) {
         case 0:
          return '[В прошлое] dddd, [в] LT';
         case 1:
         case 2:
         case 4:
          return '[В прошлый] dddd, [в] LT';
         case 3:
         case 5:
         case 6:
          return '[В прошлую] dddd, [в] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'через %s',
       past: '%s назад',
       s: 'несколько секунд',
       ss: n,
       m: n,
       mm: n,
       h: 'час',
       hh: n,
       d: 'день',
       dd: n,
       M: 'месяц',
       MM: n,
       y: 'год',
       yy: n,
      },
      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM: function (i) {
       return /^(дня|вечера)$/.test(i);
      },
      meridiem: function (i, r, m) {
       return i < 4 ? 'ночи' : i < 12 ? 'утра' : i < 17 ? 'дня' : 'вечера';
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function (i, r) {
       switch (r) {
        case 'M':
        case 'd':
        case 'DDD':
         return i + '-й';
        case 'D':
         return i + '-го';
        case 'w':
        case 'W':
         return i + '-я';
        default:
         return i;
       }
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(192);
    var a = t(1);
    a.datepickerLocale('sk', 'sk', {
     closeText: 'Zavrieť',
     prevText: '&#x3C;Predchádzajúci',
     nextText: 'Nasledujúci&#x3E;',
     currentText: 'Dnes',
     monthNames: [
      'január',
      'február',
      'marec',
      'apríl',
      'máj',
      'jún',
      'júl',
      'august',
      'september',
      'október',
      'november',
      'december',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Máj',
      'Jún',
      'Júl',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'nedeľa',
      'pondelok',
      'utorok',
      'streda',
      'štvrtok',
      'piatok',
      'sobota',
     ],
     dayNamesShort: ['Ned', 'Pon', 'Uto', 'Str', 'Štv', 'Pia', 'Sob'],
     dayNamesMin: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pia', 'So'],
     weekHeader: 'Ty',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sk', {
      buttonText: {
       month: 'Mesiac',
       week: 'Týždeň',
       day: 'Deň',
       list: 'Rozvrh',
      },
      allDayText: 'Celý deň',
      eventLimitText: function (e) {
       return '+ďalšie: ' + e;
      },
      noEventsMessage: 'Žiadne akcie na zobrazenie',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(r) {
      return r > 1 && r < 5;
     }
     function n(r, m, _, u) {
      var l = r + ' ';
      switch (_) {
       case 's':
        return m || u ? 'pár sekúnd' : 'pár sekundami';
       case 'ss':
        return m || u ? l + (e(r) ? 'sekundy' : 'sekúnd') : l + 'sekundami';
       case 'm':
        return m ? 'minúta' : u ? 'minútu' : 'minútou';
       case 'mm':
        return m || u ? l + (e(r) ? 'minúty' : 'minút') : l + 'minútami';
       case 'h':
        return m ? 'hodina' : u ? 'hodinu' : 'hodinou';
       case 'hh':
        return m || u ? l + (e(r) ? 'hodiny' : 'hodín') : l + 'hodinami';
       case 'd':
        return m || u ? 'deň' : 'dňom';
       case 'dd':
        return m || u ? l + (e(r) ? 'dni' : 'dní') : l + 'dňami';
       case 'M':
        return m || u ? 'mesiac' : 'mesiacom';
       case 'MM':
        return m || u ? l + (e(r) ? 'mesiace' : 'mesiacov') : l + 'mesiacmi';
       case 'y':
        return m || u ? 'rok' : 'rokom';
       case 'yy':
        return m || u ? l + (e(r) ? 'roky' : 'rokov') : l + 'rokmi';
      }
     }
     var d =
       'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split(
        '_',
       ),
      i = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
     return a.defineLocale('sk', {
      months: d,
      monthsShort: i,
      weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split(
       '_',
      ),
      weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
      weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[dnes o] LT',
       nextDay: '[zajtra o] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[v nedeľu o] LT';
         case 1:
         case 2:
          return '[v] dddd [o] LT';
         case 3:
          return '[v stredu o] LT';
         case 4:
          return '[vo štvrtok o] LT';
         case 5:
          return '[v piatok o] LT';
         case 6:
          return '[v sobotu o] LT';
        }
       },
       lastDay: '[včera o] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return '[minulú nedeľu o] LT';
         case 1:
         case 2:
          return '[minulý] dddd [o] LT';
         case 3:
          return '[minulú stredu o] LT';
         case 4:
         case 5:
          return '[minulý] dddd [o] LT';
         case 6:
          return '[minulú sobotu o] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: 'pred %s',
       s: n,
       ss: n,
       m: n,
       mm: n,
       h: n,
       hh: n,
       d: n,
       dd: n,
       M: n,
       MM: n,
       y: n,
       yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(194);
    var a = t(1);
    a.datepickerLocale('sl', 'sl', {
     closeText: 'Zapri',
     prevText: '&#x3C;Prejšnji',
     nextText: 'Naslednji&#x3E;',
     currentText: 'Trenutni',
     monthNames: [
      'Januar',
      'Februar',
      'Marec',
      'April',
      'Maj',
      'Junij',
      'Julij',
      'Avgust',
      'September',
      'Oktober',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Avg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Nedelja',
      'Ponedeljek',
      'Torek',
      'Sreda',
      'Četrtek',
      'Petek',
      'Sobota',
     ],
     dayNamesShort: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
     dayNamesMin: ['Ne', 'Po', 'To', 'Sr', 'Če', 'Pe', 'So'],
     weekHeader: 'Teden',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sl', {
      buttonText: {
       month: 'Mesec',
       week: 'Teden',
       day: 'Dan',
       list: 'Dnevni red',
      },
      allDayText: 'Ves dan',
      eventLimitText: 'več',
      noEventsMessage: 'Ni dogodkov za prikaz',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(n, d, i, r) {
      var m = n + ' ';
      switch (i) {
       case 's':
        return d || r ? 'nekaj sekund' : 'nekaj sekundami';
       case 'ss':
        return (m +=
         n === 1
          ? d
            ? 'sekundo'
            : 'sekundi'
          : n === 2
            ? d || r
              ? 'sekundi'
              : 'sekundah'
            : n < 5
              ? d || r
                ? 'sekunde'
                : 'sekundah'
              : 'sekund');
       case 'm':
        return d ? 'ena minuta' : 'eno minuto';
       case 'mm':
        return (m +=
         n === 1
          ? d
            ? 'minuta'
            : 'minuto'
          : n === 2
            ? d || r
              ? 'minuti'
              : 'minutama'
            : n < 5
              ? d || r
                ? 'minute'
                : 'minutami'
              : d || r
                ? 'minut'
                : 'minutami');
       case 'h':
        return d ? 'ena ura' : 'eno uro';
       case 'hh':
        return (m +=
         n === 1
          ? d
            ? 'ura'
            : 'uro'
          : n === 2
            ? d || r
              ? 'uri'
              : 'urama'
            : n < 5
              ? d || r
                ? 'ure'
                : 'urami'
              : d || r
                ? 'ur'
                : 'urami');
       case 'd':
        return d || r ? 'en dan' : 'enim dnem';
       case 'dd':
        return (m +=
         n === 1
          ? d || r
            ? 'dan'
            : 'dnem'
          : n === 2
            ? d || r
              ? 'dni'
              : 'dnevoma'
            : d || r
              ? 'dni'
              : 'dnevi');
       case 'M':
        return d || r ? 'en mesec' : 'enim mesecem';
       case 'MM':
        return (m +=
         n === 1
          ? d || r
            ? 'mesec'
            : 'mesecem'
          : n === 2
            ? d || r
              ? 'meseca'
              : 'mesecema'
            : n < 5
              ? d || r
                ? 'mesece'
                : 'meseci'
              : d || r
                ? 'mesecev'
                : 'meseci');
       case 'y':
        return d || r ? 'eno leto' : 'enim letom';
       case 'yy':
        return (m +=
         n === 1
          ? d || r
            ? 'leto'
            : 'letom'
          : n === 2
            ? d || r
              ? 'leti'
              : 'letoma'
            : n < 5
              ? d || r
                ? 'leta'
                : 'leti'
              : d || r
                ? 'let'
                : 'leti');
      }
     }
     return a.defineLocale('sl', {
      months:
       'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
        '_',
       ),
      monthsShort:
       'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split(
       '_',
      ),
      weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
      weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD. MM. YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[danes ob] LT',
       nextDay: '[jutri ob] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[v] [nedeljo] [ob] LT';
         case 3:
          return '[v] [sredo] [ob] LT';
         case 6:
          return '[v] [soboto] [ob] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[v] dddd [ob] LT';
        }
       },
       lastDay: '[včeraj ob] LT',
       lastWeek: function () {
        switch (this.day()) {
         case 0:
          return '[prejšnjo] [nedeljo] [ob] LT';
         case 3:
          return '[prejšnjo] [sredo] [ob] LT';
         case 6:
          return '[prejšnjo] [soboto] [ob] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[prejšnji] dddd [ob] LT';
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'čez %s',
       past: 'pred %s',
       s: e,
       ss: e,
       m: e,
       mm: e,
       h: e,
       hh: e,
       d: e,
       dd: e,
       M: e,
       MM: e,
       y: e,
       yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(196);
    var a = t(1);
    a.datepickerLocale('sq', 'sq', {
     closeText: 'mbylle',
     prevText: '&#x3C;mbrapa',
     nextText: 'Përpara&#x3E;',
     currentText: 'sot',
     monthNames: [
      'Janar',
      'Shkurt',
      'Mars',
      'Prill',
      'Maj',
      'Qershor',
      'Korrik',
      'Gusht',
      'Shtator',
      'Tetor',
      'Nëntor',
      'Dhjetor',
     ],
     monthNamesShort: [
      'Jan',
      'Shk',
      'Mar',
      'Pri',
      'Maj',
      'Qer',
      'Kor',
      'Gus',
      'Sht',
      'Tet',
      'Nën',
      'Dhj',
     ],
     dayNames: [
      'E Diel',
      'E Hënë',
      'E Martë',
      'E Mërkurë',
      'E Enjte',
      'E Premte',
      'E Shtune',
     ],
     dayNamesShort: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
     dayNamesMin: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
     weekHeader: 'Ja',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sq', {
      buttonText: { month: 'Muaj', week: 'Javë', day: 'Ditë', list: 'Listë' },
      allDayHtml: 'Gjithë<br/>ditën',
      eventLimitText: function (e) {
       return '+më tepër ' + e;
      },
      noEventsMessage: 'Nuk ka evente për të shfaqur',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('sq', {
      months:
       'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split(
        '_',
       ),
      monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
      weekdays:
       'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
      weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
      weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
      weekdaysParseExact: !0,
      meridiemParse: /PD|MD/,
      isPM: function (e) {
       return e.charAt(0) === 'M';
      },
      meridiem: function (e, n, d) {
       return e < 12 ? 'PD' : 'MD';
      },
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Sot në] LT',
       nextDay: '[Nesër në] LT',
       nextWeek: 'dddd [në] LT',
       lastDay: '[Dje në] LT',
       lastWeek: 'dddd [e kaluar në] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'në %s',
       past: '%s më parë',
       s: 'disa sekonda',
       ss: '%d sekonda',
       m: 'një minutë',
       mm: '%d minuta',
       h: 'një orë',
       hh: '%d orë',
       d: 'një ditë',
       dd: '%d ditë',
       M: 'një muaj',
       MM: '%d muaj',
       y: 'një vit',
       yy: '%d vite',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(198);
    var a = t(1);
    a.datepickerLocale('sr-cyrl', 'sr', {
     closeText: 'Затвори',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Данас',
     monthNames: [
      'Јануар',
      'Фебруар',
      'Март',
      'Април',
      'Мај',
      'Јун',
      'Јул',
      'Август',
      'Септембар',
      'Октобар',
      'Новембар',
      'Децембар',
     ],
     monthNamesShort: [
      'Јан',
      'Феб',
      'Мар',
      'Апр',
      'Мај',
      'Јун',
      'Јул',
      'Авг',
      'Сеп',
      'Окт',
      'Нов',
      'Дец',
     ],
     dayNames: [
      'Недеља',
      'Понедељак',
      'Уторак',
      'Среда',
      'Четвртак',
      'Петак',
      'Субота',
     ],
     dayNamesShort: ['Нед', 'Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб'],
     dayNamesMin: ['Не', 'По', 'Ут', 'Ср', 'Че', 'Пе', 'Су'],
     weekHeader: 'Сед',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sr-cyrl', {
      buttonText: {
       prev: 'Претходна',
       next: 'следећи',
       month: 'Месец',
       week: 'Недеља',
       day: 'Дан',
       list: 'Планер',
      },
      allDayText: 'Цео дан',
      eventLimitText: function (e) {
       return '+ још ' + e;
      },
      noEventsMessage: 'Нема догађаја за приказ',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
      words: {
       ss: ['секунда', 'секунде', 'секунди'],
       m: ['један минут', 'једне минуте'],
       mm: ['минут', 'минуте', 'минута'],
       h: ['један сат', 'једног сата'],
       hh: ['сат', 'сата', 'сати'],
       dd: ['дан', 'дана', 'дана'],
       MM: ['месец', 'месеца', 'месеци'],
       yy: ['година', 'године', 'година'],
      },
      correctGrammaticalCase: function (n, d) {
       return n === 1 ? d[0] : n >= 2 && n <= 4 ? d[1] : d[2];
      },
      translate: function (n, d, i) {
       var r = e.words[i];
       return i.length === 1
        ? d
          ? r[0]
          : r[1]
        : n + ' ' + e.correctGrammaticalCase(n, r);
      },
     };
     return a.defineLocale('sr-cyrl', {
      months:
       'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split(
        '_',
       ),
      monthsShort:
       'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split(
       '_',
      ),
      weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
      weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[данас у] LT',
       nextDay: '[сутра у] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[у] [недељу] [у] LT';
         case 3:
          return '[у] [среду] [у] LT';
         case 6:
          return '[у] [суботу] [у] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[у] dddd [у] LT';
        }
       },
       lastDay: '[јуче у] LT',
       lastWeek: function () {
        return [
         '[прошле] [недеље] [у] LT',
         '[прошлог] [понедељка] [у] LT',
         '[прошлог] [уторка] [у] LT',
         '[прошле] [среде] [у] LT',
         '[прошлог] [четвртка] [у] LT',
         '[прошлог] [петка] [у] LT',
         '[прошле] [суботе] [у] LT',
        ][this.day()];
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'за %s',
       past: 'пре %s',
       s: 'неколико секунди',
       ss: e.translate,
       m: e.translate,
       mm: e.translate,
       h: e.translate,
       hh: e.translate,
       d: 'дан',
       dd: e.translate,
       M: 'месец',
       MM: e.translate,
       y: 'годину',
       yy: e.translate,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(200);
    var a = t(1);
    a.datepickerLocale('sr', 'sr-SR', {
     closeText: 'Zatvori',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Danas',
     monthNames: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Jun',
      'Jul',
      'Avgust',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Avg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNames: [
      'Nedelja',
      'Ponedeljak',
      'Utorak',
      'Sreda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
     dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
     dayNamesMin: ['Ne', 'Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su'],
     weekHeader: 'Sed',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sr', {
      buttonText: {
       prev: 'Prethodna',
       next: 'Sledeći',
       month: 'Mеsеc',
       week: 'Nеdеlja',
       day: 'Dan',
       list: 'Planеr',
      },
      allDayText: 'Cеo dan',
      eventLimitText: function (e) {
       return '+ još ' + e;
      },
      noEventsMessage: 'Nеma događaja za prikaz',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
      words: {
       ss: ['sekunda', 'sekunde', 'sekundi'],
       m: ['jedan minut', 'jedne minute'],
       mm: ['minut', 'minute', 'minuta'],
       h: ['jedan sat', 'jednog sata'],
       hh: ['sat', 'sata', 'sati'],
       dd: ['dan', 'dana', 'dana'],
       MM: ['mesec', 'meseca', 'meseci'],
       yy: ['godina', 'godine', 'godina'],
      },
      correctGrammaticalCase: function (n, d) {
       return n === 1 ? d[0] : n >= 2 && n <= 4 ? d[1] : d[2];
      },
      translate: function (n, d, i) {
       var r = e.words[i];
       return i.length === 1
        ? d
          ? r[0]
          : r[1]
        : n + ' ' + e.correctGrammaticalCase(n, r);
      },
     };
     return a.defineLocale('sr', {
      months:
       'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
        '_',
       ),
      monthsShort:
       'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split(
       '_',
      ),
      weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D. MMMM YYYY',
       LLL: 'D. MMMM YYYY H:mm',
       LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
       sameDay: '[danas u] LT',
       nextDay: '[sutra u] LT',
       nextWeek: function () {
        switch (this.day()) {
         case 0:
          return '[u] [nedelju] [u] LT';
         case 3:
          return '[u] [sredu] [u] LT';
         case 6:
          return '[u] [subotu] [u] LT';
         case 1:
         case 2:
         case 4:
         case 5:
          return '[u] dddd [u] LT';
        }
       },
       lastDay: '[juče u] LT',
       lastWeek: function () {
        return [
         '[prošle] [nedelje] [u] LT',
         '[prošlog] [ponedeljka] [u] LT',
         '[prošlog] [utorka] [u] LT',
         '[prošle] [srede] [u] LT',
         '[prošlog] [četvrtka] [u] LT',
         '[prošlog] [petka] [u] LT',
         '[prošle] [subote] [u] LT',
        ][this.day()];
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'za %s',
       past: 'pre %s',
       s: 'nekoliko sekundi',
       ss: e.translate,
       m: e.translate,
       mm: e.translate,
       h: e.translate,
       hh: e.translate,
       d: 'dan',
       dd: e.translate,
       M: 'mesec',
       MM: e.translate,
       y: 'godinu',
       yy: e.translate,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(202);
    var a = t(1);
    a.datepickerLocale('sv', 'sv', {
     closeText: 'Stäng',
     prevText: '&#xAB;Förra',
     nextText: 'Nästa&#xBB;',
     currentText: 'Idag',
     monthNames: [
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December',
     ],
     monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     dayNamesShort: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
     dayNames: [
      'Söndag',
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lördag',
     ],
     dayNamesMin: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
     weekHeader: 'v. ',
     dateFormat: 'yy-mm-dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('sv', {
      buttonText: {
       month: 'Månad',
       week: 'Vecka',
       day: 'Dag',
       list: 'Program',
      },
      allDayText: 'Heldag',
      eventLimitText: 'till',
      noEventsMessage: 'Inga händelser att visa',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('sv', {
      months:
       'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
        '_',
       ),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
      weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
      weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY-MM-DD',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY [kl.] HH:mm',
       LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
       lll: 'D MMM YYYY HH:mm',
       llll: 'ddd D MMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Idag] LT',
       nextDay: '[Imorgon] LT',
       lastDay: '[Igår] LT',
       nextWeek: '[På] dddd LT',
       lastWeek: '[I] dddd[s] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'om %s',
       past: 'för %s sedan',
       s: 'några sekunder',
       ss: '%d sekunder',
       m: 'en minut',
       mm: '%d minuter',
       h: 'en timme',
       hh: '%d timmar',
       d: 'en dag',
       dd: '%d dagar',
       M: 'en månad',
       MM: '%d månader',
       y: 'ett år',
       yy: '%d år',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
      ordinal: function (e) {
       var n = e % 10;
       return (
        e + (~~((e % 100) / 10) == 1 ? ':e' : n === 1 || n === 2 ? ':a' : ':e')
       );
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(204);
    var a = t(1);
    a.datepickerLocale('th', 'th', {
     closeText: 'ปิด',
     prevText: '&#xAB;&#xA0;ย้อน',
     nextText: 'ถัดไป&#xA0;&#xBB;',
     currentText: 'วันนี้',
     monthNames: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
     ],
     monthNamesShort: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.',
     ],
     dayNames: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
     ],
     dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
     dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
     weekHeader: 'Wk',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('th', {
      buttonText: {
       month: 'เดือน',
       week: 'สัปดาห์',
       day: 'วัน',
       list: 'แผนงาน',
      },
      allDayText: 'ตลอดวัน',
      eventLimitText: 'เพิ่มเติม',
      noEventsMessage: 'ไม่มีกิจกรรมที่จะแสดง',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('th', {
      months:
       'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
        '_',
       ),
      monthsShort:
       'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split(
        '_',
       ),
      monthsParseExact: !0,
      weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
      weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
      weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
       LT: 'H:mm',
       LTS: 'H:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY เวลา H:mm',
       LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
      isPM: function (e) {
       return e === 'หลังเที่ยง';
      },
      meridiem: function (e, n, d) {
       return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
      },
      calendar: {
       sameDay: '[วันนี้ เวลา] LT',
       nextDay: '[พรุ่งนี้ เวลา] LT',
       nextWeek: 'dddd[หน้า เวลา] LT',
       lastDay: '[เมื่อวานนี้ เวลา] LT',
       lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: 'อีก %s',
       past: '%sที่แล้ว',
       s: 'ไม่กี่วินาที',
       ss: '%d วินาที',
       m: '1 นาที',
       mm: '%d นาที',
       h: '1 ชั่วโมง',
       hh: '%d ชั่วโมง',
       d: '1 วัน',
       dd: '%d วัน',
       M: '1 เดือน',
       MM: '%d เดือน',
       y: '1 ปี',
       yy: '%d ปี',
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(206);
    var a = t(1);
    a.datepickerLocale('tr', 'tr', {
     closeText: 'kapat',
     prevText: '&#x3C;geri',
     nextText: 'ileri&#x3e',
     currentText: 'bugün',
     monthNames: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
     ],
     monthNamesShort: [
      'Oca',
      'Şub',
      'Mar',
      'Nis',
      'May',
      'Haz',
      'Tem',
      'Ağu',
      'Eyl',
      'Eki',
      'Kas',
      'Ara',
     ],
     dayNames: [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
     ],
     dayNamesShort: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
     dayNamesMin: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
     weekHeader: 'Hf',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('tr', {
      buttonText: {
       next: 'ileri',
       month: 'Ay',
       week: 'Hafta',
       day: 'Gün',
       list: 'Ajanda',
      },
      allDayText: 'Tüm gün',
      eventLimitText: 'daha fazla',
      noEventsMessage: 'Gösterilecek etkinlik yok',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     var e = {
      1: "'inci",
      5: "'inci",
      8: "'inci",
      70: "'inci",
      80: "'inci",
      2: "'nci",
      7: "'nci",
      20: "'nci",
      50: "'nci",
      3: "'üncü",
      4: "'üncü",
      100: "'üncü",
      6: "'ncı",
      9: "'uncu",
      10: "'uncu",
      30: "'uncu",
      60: "'ıncı",
      90: "'ıncı",
     };
     return a.defineLocale('tr', {
      months:
       'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
        '_',
       ),
      monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
      weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split(
       '_',
      ),
      weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
      weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY',
       LLL: 'D MMMM YYYY HH:mm',
       LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[bugün saat] LT',
       nextDay: '[yarın saat] LT',
       nextWeek: '[gelecek] dddd [saat] LT',
       lastDay: '[dün] LT',
       lastWeek: '[geçen] dddd [saat] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s sonra',
       past: '%s önce',
       s: 'birkaç saniye',
       ss: '%d saniye',
       m: 'bir dakika',
       mm: '%d dakika',
       h: 'bir saat',
       hh: '%d saat',
       d: 'bir gün',
       dd: '%d gün',
       M: 'bir ay',
       MM: '%d ay',
       y: 'bir yıl',
       yy: '%d yıl',
      },
      ordinal: function (n, d) {
       switch (d) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
         return n;
        default:
         if (n === 0) return n + "'ıncı";
         var i = n % 10,
          r = (n % 100) - i,
          m = n >= 100 ? 100 : null;
         return n + (e[i] || e[r] || e[m]);
       }
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(208);
    var a = t(1);
    a.datepickerLocale('uk', 'uk', {
     closeText: 'Закрити',
     prevText: '&#x3C;',
     nextText: '&#x3E;',
     currentText: 'Сьогодні',
     monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
     ],
     monthNamesShort: [
      'Січ',
      'Лют',
      'Бер',
      'Кві',
      'Тра',
      'Чер',
      'Лип',
      'Сер',
      'Вер',
      'Жов',
      'Лис',
      'Гру',
     ],
     dayNames: [
      'неділя',
      'понеділок',
      'вівторок',
      'середа',
      'четвер',
      'п’ятниця',
      'субота',
     ],
     dayNamesShort: ['нед', 'пнд', 'вів', 'срд', 'чтв', 'птн', 'сбт'],
     dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     weekHeader: 'Тиж',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('uk', {
      buttonText: {
       month: 'Місяць',
       week: 'Тиждень',
       day: 'День',
       list: 'Порядок денний',
      },
      allDayText: 'Увесь день',
      eventLimitText: function (e) {
       return '+ще ' + e + '...';
      },
      noEventsMessage: 'Немає подій для відображення',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     function e(r, m) {
      var _ = r.split('_');
      return m % 10 == 1 && m % 100 != 11
       ? _[0]
       : m % 10 >= 2 && m % 10 <= 4 && (m % 100 < 10 || m % 100 >= 20)
         ? _[1]
         : _[2];
     }
     function n(r, m, _) {
      var u = {
       ss: m ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
       mm: m ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
       hh: m ? 'година_години_годин' : 'годину_години_годин',
       dd: 'день_дні_днів',
       MM: 'місяць_місяці_місяців',
       yy: 'рік_роки_років',
      };
      return _ === 'm'
       ? m
         ? 'хвилина'
         : 'хвилину'
       : _ === 'h'
         ? m
           ? 'година'
           : 'годину'
         : r + ' ' + e(u[_], +r);
     }
     function d(r, m) {
      var _,
       u = {
        nominative:
         'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative:
         'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive:
         'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_'),
       };
      return r === !0
       ? u.nominative.slice(1, 7).concat(u.nominative.slice(0, 1))
       : r
         ? ((_ = /(\[[ВвУу]\]) ?dddd/.test(m)
            ? 'accusative'
            : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(m)
              ? 'genitive'
              : 'nominative'),
           u[_][r.day()])
         : u.nominative;
     }
     function i(r) {
      return function () {
       return r + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
      };
     }
     return a.defineLocale('uk', {
      months: {
       format:
        'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
         '_',
        ),
       standalone:
        'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
         '_',
        ),
      },
      monthsShort:
       'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
      weekdays: d,
      weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD.MM.YYYY',
       LL: 'D MMMM YYYY р.',
       LLL: 'D MMMM YYYY р., HH:mm',
       LLLL: 'dddd, D MMMM YYYY р., HH:mm',
      },
      calendar: {
       sameDay: i('[Сьогодні '),
       nextDay: i('[Завтра '),
       lastDay: i('[Вчора '),
       nextWeek: i('[У] dddd ['),
       lastWeek: function () {
        switch (this.day()) {
         case 0:
         case 3:
         case 5:
         case 6:
          return i('[Минулої] dddd [').call(this);
         case 1:
         case 2:
         case 4:
          return i('[Минулого] dddd [').call(this);
        }
       },
       sameElse: 'L',
      },
      relativeTime: {
       future: 'за %s',
       past: '%s тому',
       s: 'декілька секунд',
       ss: n,
       m: n,
       mm: n,
       h: 'годину',
       hh: n,
       d: 'день',
       dd: n,
       M: 'місяць',
       MM: n,
       y: 'рік',
       yy: n,
      },
      meridiemParse: /ночі|ранку|дня|вечора/,
      isPM: function (r) {
       return /^(дня|вечора)$/.test(r);
      },
      meridiem: function (r, m, _) {
       return r < 4 ? 'ночі' : r < 12 ? 'ранку' : r < 17 ? 'дня' : 'вечора';
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
      ordinal: function (r, m) {
       switch (m) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
         return r + '-й';
        case 'D':
         return r + '-го';
        default:
         return r;
       }
      },
      week: { dow: 1, doy: 7 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(210);
    var a = t(1);
    a.datepickerLocale('vi', 'vi', {
     closeText: 'Đóng',
     prevText: '&#x3C;Trước',
     nextText: 'Tiếp&#x3E;',
     currentText: 'Hôm nay',
     monthNames: [
      'Tháng Một',
      'Tháng Hai',
      'Tháng Ba',
      'Tháng Tư',
      'Tháng Năm',
      'Tháng Sáu',
      'Tháng Bảy',
      'Tháng Tám',
      'Tháng Chín',
      'Tháng Mười',
      'Tháng Mười Một',
      'Tháng Mười Hai',
     ],
     monthNamesShort: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
     ],
     dayNames: [
      'Chủ Nhật',
      'Thứ Hai',
      'Thứ Ba',
      'Thứ Tư',
      'Thứ Năm',
      'Thứ Sáu',
      'Thứ Bảy',
     ],
     dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
     dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
     weekHeader: 'Tu',
     dateFormat: 'dd/mm/yy',
     firstDay: 0,
     isRTL: !1,
     showMonthAfterYear: !1,
     yearSuffix: '',
    }),
     a.locale('vi', {
      buttonText: {
       month: 'Tháng',
       week: 'Tuần',
       day: 'Ngày',
       list: 'Lịch biểu',
      },
      allDayText: 'Cả ngày',
      eventLimitText: function (e) {
       return '+ thêm ' + e;
      },
      noEventsMessage: 'Không có sự kiện để hiển thị',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('vi', {
      months:
       'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
        '_',
       ),
      monthsShort:
       'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
      monthsParseExact: !0,
      weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split(
       '_',
      ),
      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysParseExact: !0,
      meridiemParse: /sa|ch/i,
      isPM: function (e) {
       return /^ch$/i.test(e);
      },
      meridiem: function (e, n, d) {
       return e < 12 ? (d ? 'sa' : 'SA') : d ? 'ch' : 'CH';
      },
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'DD/MM/YYYY',
       LL: 'D MMMM [năm] YYYY',
       LLL: 'D MMMM [năm] YYYY HH:mm',
       LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
       l: 'DD/M/YYYY',
       ll: 'D MMM YYYY',
       lll: 'D MMM YYYY HH:mm',
       llll: 'ddd, D MMM YYYY HH:mm',
      },
      calendar: {
       sameDay: '[Hôm nay lúc] LT',
       nextDay: '[Ngày mai lúc] LT',
       nextWeek: 'dddd [tuần tới lúc] LT',
       lastDay: '[Hôm qua lúc] LT',
       lastWeek: 'dddd [tuần trước lúc] LT',
       sameElse: 'L',
      },
      relativeTime: {
       future: '%s tới',
       past: '%s trước',
       s: 'vài giây',
       ss: '%d giây',
       m: 'một phút',
       mm: '%d phút',
       h: 'một giờ',
       hh: '%d giờ',
       d: 'một ngày',
       dd: '%d ngày',
       M: 'một tháng',
       MM: '%d tháng',
       y: 'một năm',
       yy: '%d năm',
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function (e) {
       return e;
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(212);
    var a = t(1);
    a.datepickerLocale('zh-cn', 'zh-CN', {
     closeText: '关闭',
     prevText: '&#x3C;上月',
     nextText: '下月&#x3E;',
     currentText: '今天',
     monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     monthNamesShort: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
     ],
     dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
     weekHeader: '周',
     dateFormat: 'yy-mm-dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '年',
    }),
     a.locale('zh-cn', {
      buttonText: { month: '月', week: '周', day: '日', list: '日程' },
      allDayText: '全天',
      eventLimitText: function (e) {
       return '另外 ' + e + ' 个';
      },
      noEventsMessage: '没有事件显示',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('zh-cn', {
      months:
       '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_',
       ),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
       '_',
      ),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY/MM/DD',
       LL: 'YYYY年M月D日',
       LLL: 'YYYY年M月D日Ah点mm分',
       LLLL: 'YYYY年M月D日ddddAh点mm分',
       l: 'YYYY/M/D',
       ll: 'YYYY年M月D日',
       lll: 'YYYY年M月D日 HH:mm',
       llll: 'YYYY年M月D日dddd HH:mm',
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === '凌晨' || n === '早上' || n === '上午'
         ? e
         : n === '下午' || n === '晚上'
           ? e + 12
           : e >= 11
             ? e
             : e + 12
       );
      },
      meridiem: function (e, n, d) {
       var i = 100 * e + n;
       return i < 600
        ? '凌晨'
        : i < 900
          ? '早上'
          : i < 1130
            ? '上午'
            : i < 1230
              ? '中午'
              : i < 1800
                ? '下午'
                : '晚上';
      },
      calendar: {
       sameDay: '[今天]LT',
       nextDay: '[明天]LT',
       nextWeek: '[下]ddddLT',
       lastDay: '[昨天]LT',
       lastWeek: '[上]ddddLT',
       sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
      ordinal: function (e, n) {
       switch (n) {
        case 'd':
        case 'D':
        case 'DDD':
         return e + '日';
        case 'M':
         return e + '月';
        case 'w':
        case 'W':
         return e + '周';
        default:
         return e;
       }
      },
      relativeTime: {
       future: '%s后',
       past: '%s前',
       s: '几秒',
       ss: '%d 秒',
       m: '1 分钟',
       mm: '%d 分钟',
       h: '1 小时',
       hh: '%d 小时',
       d: '1 天',
       dd: '%d 天',
       M: '1 个月',
       MM: '%d 个月',
       y: '1 年',
       yy: '%d 年',
      },
      week: { dow: 1, doy: 4 },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(214);
    var a = t(1);
    a.datepickerLocale('zh-hk', 'zh-HK', {
     closeText: '關閉',
     prevText: '&#x3C;上月',
     nextText: '下月&#x3E;',
     currentText: '今天',
     monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     monthNamesShort: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
     ],
     dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
     weekHeader: '周',
     dateFormat: 'yy/mm/dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '年',
    }),
     a.locale('zh-hk', {
      buttonText: { month: '月', week: '週', day: '天', list: '活動列表' },
      allDayText: '整天',
      eventLimitText: '顯示更多',
      noEventsMessage: '没有任何活動',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('zh-hk', {
      months:
       '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_',
       ),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
       '_',
      ),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY/MM/DD',
       LL: 'YYYY年M月D日',
       LLL: 'YYYY年M月D日 HH:mm',
       LLLL: 'YYYY年M月D日dddd HH:mm',
       l: 'YYYY/M/D',
       ll: 'YYYY年M月D日',
       lll: 'YYYY年M月D日 HH:mm',
       llll: 'YYYY年M月D日dddd HH:mm',
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === '凌晨' || n === '早上' || n === '上午'
         ? e
         : n === '中午'
           ? e >= 11
             ? e
             : e + 12
           : n === '下午' || n === '晚上'
             ? e + 12
             : void 0
       );
      },
      meridiem: function (e, n, d) {
       var i = 100 * e + n;
       return i < 600
        ? '凌晨'
        : i < 900
          ? '早上'
          : i < 1200
            ? '上午'
            : i === 1200
              ? '中午'
              : i < 1800
                ? '下午'
                : '晚上';
      },
      calendar: {
       sameDay: '[今天]LT',
       nextDay: '[明天]LT',
       nextWeek: '[下]ddddLT',
       lastDay: '[昨天]LT',
       lastWeek: '[上]ddddLT',
       sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function (e, n) {
       switch (n) {
        case 'd':
        case 'D':
        case 'DDD':
         return e + '日';
        case 'M':
         return e + '月';
        case 'w':
        case 'W':
         return e + '週';
        default:
         return e;
       }
      },
      relativeTime: {
       future: '%s後',
       past: '%s前',
       s: '幾秒',
       ss: '%d 秒',
       m: '1 分鐘',
       mm: '%d 分鐘',
       h: '1 小時',
       hh: '%d 小時',
       d: '1 天',
       dd: '%d 天',
       M: '1 個月',
       MM: '%d 個月',
       y: '1 年',
       yy: '%d 年',
      },
     });
    });
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 }), t(216);
    var a = t(1);
    a.datepickerLocale('zh-tw', 'zh-TW', {
     closeText: '關閉',
     prevText: '&#x3C;上月',
     nextText: '下月&#x3E;',
     currentText: '今天',
     monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     monthNamesShort: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
     ],
     dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
     ],
     dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
     weekHeader: '周',
     dateFormat: 'yy/mm/dd',
     firstDay: 1,
     isRTL: !1,
     showMonthAfterYear: !0,
     yearSuffix: '年',
    }),
     a.locale('zh-tw', {
      buttonText: { month: '月', week: '週', day: '天', list: '活動列表' },
      allDayText: '整天',
      eventLimitText: '顯示更多',
      noEventsMessage: '没有任何活動',
     });
   },
   function (o, s, t) {
    (function (a, e) {
     e(t(0));
    })(0, function (a) {
     return a.defineLocale('zh-tw', {
      months:
       '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_',
       ),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
       '_',
      ),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
       LT: 'HH:mm',
       LTS: 'HH:mm:ss',
       L: 'YYYY/MM/DD',
       LL: 'YYYY年M月D日',
       LLL: 'YYYY年M月D日 HH:mm',
       LLLL: 'YYYY年M月D日dddd HH:mm',
       l: 'YYYY/M/D',
       ll: 'YYYY年M月D日',
       lll: 'YYYY年M月D日 HH:mm',
       llll: 'YYYY年M月D日dddd HH:mm',
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, n) {
       return (
        e === 12 && (e = 0),
        n === '凌晨' || n === '早上' || n === '上午'
         ? e
         : n === '中午'
           ? e >= 11
             ? e
             : e + 12
           : n === '下午' || n === '晚上'
             ? e + 12
             : void 0
       );
      },
      meridiem: function (e, n, d) {
       var i = 100 * e + n;
       return i < 600
        ? '凌晨'
        : i < 900
          ? '早上'
          : i < 1130
            ? '上午'
            : i < 1230
              ? '中午'
              : i < 1800
                ? '下午'
                : '晚上';
      },
      calendar: {
       sameDay: '[今天] LT',
       nextDay: '[明天] LT',
       nextWeek: '[下]dddd LT',
       lastDay: '[昨天] LT',
       lastWeek: '[上]dddd LT',
       sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function (e, n) {
       switch (n) {
        case 'd':
        case 'D':
        case 'DDD':
         return e + '日';
        case 'M':
         return e + '月';
        case 'w':
        case 'W':
         return e + '週';
        default:
         return e;
       }
      },
      relativeTime: {
       future: '%s後',
       past: '%s前',
       s: '幾秒',
       ss: '%d 秒',
       m: '1 分鐘',
       mm: '%d 分鐘',
       h: '1 小時',
       hh: '%d 小時',
       d: '1 天',
       dd: '%d 天',
       M: '1 個月',
       MM: '%d 個月',
       y: '1 年',
       yy: '%d 年',
      },
     });
    });
   },
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   ,
   function (o, s, t) {
    t(71),
     t(73),
     t(75),
     t(77),
     t(79),
     t(81),
     t(83),
     t(85),
     t(87),
     t(89),
     t(91),
     t(93),
     t(95),
     t(97),
     t(99),
     t(101),
     t(103),
     t(105),
     t(107),
     t(109),
     t(111),
     t(113),
     t(115),
     t(117),
     t(119),
     t(121),
     t(123),
     t(125),
     t(127),
     t(129),
     t(131),
     t(133),
     t(135),
     t(137),
     t(139),
     t(141),
     t(143),
     t(145),
     t(147),
     t(149),
     t(151),
     t(153),
     t(155),
     t(157),
     t(159),
     t(161),
     t(163),
     t(165),
     t(167),
     t(169),
     t(171),
     t(173),
     t(175),
     t(177),
     t(179),
     t(181),
     t(183),
     t(185),
     t(187),
     t(189),
     t(191),
     t(193),
     t(195),
     t(197),
     t(199),
     t(201),
     t(203),
     t(205),
     t(207),
     t(209),
     t(211),
     t(213),
     t(215),
     (o.exports = t(439));
   },
   function (o, s, t) {
    Object.defineProperty(s, '__esModule', { value: !0 });
    var a = t(0),
     e = t(1);
    a.locale('en'),
     e.locale('en'),
     window.jQuery.datepicker &&
      window.jQuery.datepicker.setDefaults(
       window.jQuery.datepicker.regional[''],
      );
   },
  ]);
 });
});
export default k();
