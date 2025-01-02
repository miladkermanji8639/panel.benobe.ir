var Xn = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var Yn = Xn((Qn, t) => {
 /* flatpickr v4.3.2, @license MIT */ (function (r, e) {
  typeof Qn == 'object' && typeof t < 'u'
   ? (t.exports = e())
   : typeof define == 'function' && define.amd
     ? define(e)
     : (r.index = e());
 })(void 0, function () {
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var r =
    Object.assign ||
    function (a) {
     for (var i, o = 1, qn = arguments.length; o < qn; o++) {
      i = arguments[o];
      for (var d in i)
       Object.prototype.hasOwnProperty.call(i, d) && (a[d] = i[d]);
     }
     return a;
    },
   e =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   s = {
    weekdays: {
     shorthand: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
     longhand: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
     ],
    },
    months: {
     shorthand: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
     longhand: [
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
    },
   };
  (e.l10ns.ar = s), e.l10ns;
  var l =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   u = {
    weekdays: {
     shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Неделя',
      'Понеделник',
      'Вторник',
      'Сряда',
      'Четвъртък',
      'Петък',
      'Събота',
     ],
    },
    months: {
     shorthand: [
      'Яну',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Юни',
      'Юли',
      'Авг',
      'Сеп',
      'Окт',
      'Ное',
      'Дек',
     ],
     longhand: [
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
    },
   };
  (l.l10ns.bg = u), l.l10ns;
  var f =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   h = {
    weekdays: {
     shorthand: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
     longhand: [
      'রবিবার',
      'সোমবার',
      'মঙ্গলবার',
      'বুধবার',
      'বৃহস্পতিবার',
      'শুক্রবার',
      'শনিবার',
     ],
    },
    months: {
     shorthand: [
      'জানু',
      'ফেব্রু',
      'মার্চ',
      'এপ্রিল',
      'মে',
      'জুন',
      'জুলাই',
      'আগ',
      'সেপ্টে',
      'অক্টো',
      'নভে',
      'ডিসে',
     ],
     longhand: [
      'জানুয়ারী',
      'ফেব্রুয়ারী',
      'মার্চ',
      'এপ্রিল',
      'মে',
      'জুন',
      'জুলাই',
      'আগস্ট',
      'সেপ্টেম্বর',
      'অক্টোবর',
      'নভেম্বর',
      'ডিসেম্বর',
     ],
    },
   };
  (f.l10ns.bn = h), f.l10ns;
  var w =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   p = {
    weekdays: {
     shorthand: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
     longhand: [
      'Diumenge',
      'Dilluns',
      'Dimarts',
      'Dimecres',
      'Dijous',
      'Divendres',
      'Dissabte',
     ],
    },
    months: {
     shorthand: [
      'Gen',
      'Febr',
      'Març',
      'Abr',
      'Maig',
      'Juny',
      'Jul',
      'Ag',
      'Set',
      'Oct',
      'Nov',
      'Des',
     ],
     longhand: [
      'Gener',
      'Febrer',
      'Març',
      'Abril',
      'Maig',
      'Juny',
      'Juliol',
      'Agost',
      'Setembre',
      'Octubre',
      'Novembre',
      'Desembre',
     ],
    },
    ordinal: function (n) {
     var a = n % 100;
     if (a > 3 && a < 21) return 'è';
     switch (a % 10) {
      case 1:
       return 'r';
      case 2:
       return 'n';
      case 3:
       return 'r';
      case 4:
       return 't';
      default:
       return 'è';
     }
    },
    firstDayOfWeek: 1,
   };
  (w.l10ns.cat = p), w.l10ns;
  var k =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   g = {
    weekdays: {
     shorthand: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
     longhand: [
      'Neděle',
      'Pondělí',
      'Úterý',
      'Středa',
      'Čtvrtek',
      'Pátek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Led',
      'Ún',
      'Bře',
      'Dub',
      'Kvě',
      'Čer',
      'Čvc',
      'Srp',
      'Zář',
      'Říj',
      'Lis',
      'Pro',
     ],
     longhand: [
      'Leden',
      'Únor',
      'Březen',
      'Duben',
      'Květen',
      'Červen',
      'Červenec',
      'Srpen',
      'Září',
      'Říjen',
      'Listopad',
      'Prosinec',
     ],
    },
    rangeSeparator: ' do ',
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
   };
  (k.l10ns.cs = g), k.l10ns;
  var c =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   v = {
    weekdays: {
     shorthand: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
     longhand: [
      'Dydd Sul',
      'Dydd Llun',
      'Dydd Mawrth',
      'Dydd Mercher',
      'Dydd Iau',
      'Dydd Gwener',
      'Dydd Sadwrn',
     ],
    },
    months: {
     shorthand: [
      'Ion',
      'Chwef',
      'Maw',
      'Ebr',
      'Mai',
      'Meh',
      'Gorff',
      'Awst',
      'Medi',
      'Hyd',
      'Tach',
      'Rhag',
     ],
     longhand: [
      'Ionawr',
      'Chwefror',
      'Mawrth',
      'Ebrill',
      'Mai',
      'Mehefin',
      'Gorffennaf',
      'Awst',
      'Medi',
      'Hydref',
      'Tachwedd',
      'Rhagfyr',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function (n) {
     return n === 1
      ? 'af'
      : n === 2
        ? 'ail'
        : n === 3 || n === 4
          ? 'ydd'
          : n === 5 || n === 6
            ? 'ed'
            : (n >= 7 && n <= 10) || n == 12 || n == 15 || n == 18 || n == 20
              ? 'fed'
              : n == 11 || n == 13 || n == 14 || n == 16 || n == 17 || n == 19
                ? 'eg'
                : n >= 21 && n <= 39
                  ? 'ain'
                  : '';
    },
   };
  (c.l10ns.cy = v), c.l10ns;
  var b =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   m = {
    weekdays: {
     shorthand: ['søn', 'man', 'tir', 'ons', 'tors', 'fre', 'lør'],
     longhand: [
      'søndag',
      'mandag',
      'tirsdag',
      'onsdag',
      'torsdag',
      'fredag',
      'lørdag',
     ],
    },
    months: {
     shorthand: [
      'jan',
      'feb',
      'mar',
      'apr',
      'maj',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec',
     ],
     longhand: [
      'januar',
      'februar',
      'marts',
      'april',
      'maj',
      'juni',
      'juli',
      'august',
      'september',
      'oktober',
      'november',
      'december',
     ],
    },
    ordinal: function () {
     return '.';
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' til ',
    weekAbbreviation: 'uge',
   };
  (b.l10ns.da = m), b.l10ns;
  var y =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   S = {
    weekdays: {
     shorthand: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
     longhand: [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'KW',
    rangeSeparator: ' bis ',
    scrollTitle: 'Zum Ändern scrollen',
    toggleTitle: 'Zum Umschalten klicken',
   };
  (y.l10ns.de = S), y.l10ns;
  var M = {
    weekdays: {
     shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
     longhand: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (n) {
     var a = n % 100;
     if (a > 3 && a < 21) return 'th';
     switch (a % 10) {
      case 1:
       return 'st';
      case 2:
       return 'nd';
      case 3:
       return 'rd';
      default:
       return 'th';
     }
    },
    rangeSeparator: ' to ',
    weekAbbreviation: 'Wk',
    scrollTitle: 'Scroll to increment',
    toggleTitle: 'Click to toggle',
    amPM: ['AM', 'PM'],
   },
   D =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   J = {
    firstDayOfWeek: 1,
    rangeSeparator: ' ĝis ',
    weekAbbreviation: 'Sem',
    scrollTitle: 'Rulumu por pligrandigi la valoron',
    toggleTitle: 'Klaku por ŝalti',
    weekdays: {
     shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Ĵaŭ', 'Ven', 'Sab'],
     longhand: [
      'dimanĉo',
      'lundo',
      'mardo',
      'merkredo',
      'ĵaŭdo',
      'vendredo',
      'sabato',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Aŭg',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
      'januaro',
      'februaro',
      'marto',
      'aprilo',
      'majo',
      'junio',
      'julio',
      'aŭgusto',
      'septembro',
      'oktobro',
      'novembro',
      'decembro',
     ],
    },
    ordinal: function () {
     return '-a';
    },
   };
  (D.l10ns.eo = J), D.l10ns;
  var T =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   A = {
    weekdays: {
     shorthand: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
     longhand: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
     ],
    },
    months: {
     shorthand: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
     ],
     longhand: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
     ],
    },
    ordinal: function () {
     return 'º';
    },
    firstDayOfWeek: 1,
   };
  (T.l10ns.es = A), T.l10ns;
  var O =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   j = {
    weekdays: {
     shorthand: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
     longhand: [
      'Pühapäev',
      'Esmaspäev',
      'Teisipäev',
      'Kolmapäev',
      'Neljapäev',
      'Reede',
      'Laupäev',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
    weekAbbreviation: 'Näd',
    rangeSeparator: ' kuni ',
    scrollTitle: 'Keri, et suurendada',
    toggleTitle: 'Klõpsa, et vahetada',
   };
  (O.l10ns.et = j), O.l10ns;
  var P =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   N = {
    weekdays: {
     shorthand: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
     longhand: [
      'یک‌شنبه',
      'دوشنبه',
      'سه‌شنبه',
      'چهارشنبه',
      'پنچ‌شنبه',
      'جمعه',
      'شنبه',
     ],
    },
    months: {
     shorthand: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
     ],
     longhand: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
     ],
    },
    ordinal: function () {
     return '';
    },
    amPM: ['صبح', 'بعدازظهر'],
   };
  (P.l10ns.fa = N), P.l10ns;
  var $ =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   F = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
     longhand: [
      'Sunnuntai',
      'Maanantai',
      'Tiistai',
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    ordinal: function () {
     return '.';
    },
   };
  ($.l10ns.fi = F), $.l10ns;
  var z =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   W = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
     longhand: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
     ],
    },
    months: {
     shorthand: [
      'Janv',
      'Févr',
      'Mars',
      'Avr',
      'Mai',
      'Juin',
      'Juil',
      'Août',
      'Sept',
      'Oct',
      'Nov',
      'Déc',
     ],
     longhand: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
     ],
    },
    ordinal: function (n) {
     return n > 1 ? 'ème' : 'er';
    },
    rangeSeparator: ' au ',
    weekAbbreviation: 'Sem',
    scrollTitle: 'Défiler pour augmenter la valeur',
    toggleTitle: 'Cliquer pour basculer',
   };
  (z.l10ns.fr = W), z.l10ns;
  var L =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   K = {
    weekdays: {
     shorthand: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά'],
     longhand: [
      'Κυριακή',
      'Δευτέρα',
      'Τρίτη',
      'Τετάρτη',
      'Πέμπτη',
      'Παρασκευή',
      'Σάββατο',
     ],
    },
    months: {
     shorthand: [
      'Ιαν',
      'Φεβ',
      'Μάρ',
      'Απρ',
      'Μάι',
      'Ιού',
      'Ιού',
      'Αύγ',
      'Σεπ',
      'Οκτ',
      'Νοέ',
      'Δεκ',
     ],
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
    weekAbbreviation: 'Εβδ',
    rangeSeparator: ' έως ',
    scrollTitle: 'Μετακυλήστε για προσαύξηση',
    toggleTitle: 'Κάντε κλικ για αλλαγή',
    amPM: ['ΠΜ', 'ΜΜ'],
   };
  (L.l10ns.gr = K), L.l10ns;
  var E =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   G = {
    weekdays: {
     shorthand: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז'],
     longhand: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    },
    months: {
     shorthand: [
      'ינו׳',
      'פבר׳',
      'מרץ',
      'אפר׳',
      'מאי',
      'יוני',
      'יולי',
      'אוג׳',
      'ספט׳',
      'אוק׳',
      'נוב׳',
      'דצמ׳',
     ],
     longhand: [
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
    },
   };
  (E.l10ns.he = G), E.l10ns;
  var C =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   H = {
    weekdays: {
     shorthand: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
     longhand: [
      'रविवार',
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरुवार',
      'शुक्रवार',
      'शनिवार',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
   };
  (C.l10ns.hi = H), C.l10ns;
  var V =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   R = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
     longhand: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
   };
  (V.l10ns.hr = R), V.l10ns;
  var I =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   B = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Szo'],
     longhand: [
      'Vasárnap',
      'Hétfő',
      'Kedd',
      'Szerda',
      'Csütörtök',
      'Péntek',
      'Szombat',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    ordinal: function () {
     return '.';
    },
    weekAbbreviation: 'Hét',
    scrollTitle: 'Görgessen',
    toggleTitle: 'Kattintson a váltáshoz',
   };
  (I.l10ns.hu = B), I.l10ns;
  var U =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Q = {
    weekdays: {
     shorthand: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
     longhand: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
     ],
     longhand: [
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
      'November',
      'Desember',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  (U.l10ns.id = Q), U.l10ns;
  var x =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Z = {
    weekdays: {
     shorthand: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
     longhand: [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '°';
    },
    rangeSeparator: ' al ',
    weekAbbreviation: 'Se',
    scrollTitle: 'Scrolla per aumentare',
    toggleTitle: 'Clicca per cambiare',
   };
  (x.l10ns.it = Z), x.l10ns;
  var _ =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   q = {
    weekdays: {
     shorthand: ['日', '月', '火', '水', '木', '金', '土'],
     longhand: [
      '日曜日',
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
   };
  (_.l10ns.ja = q), _.l10ns;
  var X =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Y = {
    weekdays: {
     shorthand: ['일', '월', '화', '수', '목', '금', '토'],
     longhand: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    ordinal: function () {
     return '일';
    },
   };
  (X.l10ns.ko = Y), X.l10ns;
  var nn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   en = {
    weekdays: {
     shorthand: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
     longhand: [
      'Sekmadienis',
      'Pirmadienis',
      'Antradienis',
      'Trečiadienis',
      'Ketvirtadienis',
      'Penktadienis',
      'Šeštadienis',
     ],
    },
    months: {
     shorthand: [
      'Sau',
      'Vas',
      'Kov',
      'Bal',
      'Geg',
      'Bir',
      'Lie',
      'Rgp',
      'Rgs',
      'Spl',
      'Lap',
      'Grd',
     ],
     longhand: [
      'Sausis',
      'Vasaris',
      'Kovas',
      'Balandis',
      'Gegužė',
      'Birželis',
      'Liepa',
      'Rugpjūtis',
      'Rugsėjis',
      'Spalis',
      'Lapkritis',
      'Gruodis',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '-a';
    },
    weekAbbreviation: 'Sav',
    scrollTitle: 'Keisti laiką pelės rateliu',
    toggleTitle: 'Perjungti laiko formatą',
   };
  (nn.l10ns.lt = en), nn.l10ns;
  var an =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   rn = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Sv', 'P', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
     longhand: [
      'Svētdiena',
      'Pirmdiena',
      'Otrdiena',
      'Trešdiena',
      'Ceturtdiena',
      'Piektdiena',
      'Sestdiena',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Mai',
      'Apr',
      'Jūn',
      'Jūl',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
     ],
     longhand: [
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
    },
    rangeSeparator: ' līdz ',
   };
  (an.l10ns.lv = rn), an.l10ns;
  var on =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   dn = {
    weekdays: {
     shorthand: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Са'],
     longhand: [
      'Недела',
      'Понеделник',
      'Вторник',
      'Среда',
      'Четврток',
      'Петок',
      'Сабота',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'Нед.',
    rangeSeparator: ' до ',
   };
  (on.l10ns.mk = dn), on.l10ns;
  var tn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   sn = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя', 'Ня'],
     longhand: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
    },
    months: {
     shorthand: [
      '1-р сар',
      '2-р сар',
      '3-р сар',
      '4-р сар',
      '5-р сар',
      '6-р сар',
      '7-р сар',
      '8-р сар',
      '9-р сар',
      '10-р сар',
      '11-р сар',
      '12-р сар',
     ],
     longhand: [
      'Нэгдүгээр сар',
      'Хоёрдугаар сар',
      'Гуравдугаар сар',
      'Дөрөвдүгээр сар',
      'Тавдугаар сар',
      'Зургаадугаар сар',
      'Долдугаар сар',
      'Наймдугаар сар',
      'Есдүгээр сар',
      'Аравдугаар сар',
      'Арваннэгдүгээр сар',
      'Арванхоёрдугаар сар',
     ],
    },
    rangeSeparator: '-с ',
   };
  (tn.l10ns.mn = sn), tn.l10ns;
  var xn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Zn = {
    weekdays: {
     shorthand: ['Min', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
     longhand: [
      'Minggu',
      'Isnin',
      'Selasa',
      'Rabu',
      'Khamis',
      'Jumaat',
      'Sabtu',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  xn.l10ns;
  var ln =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   un = {
    weekdays: {
     shorthand: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
     longhand: [
      'တနင်္ဂနွေ',
      'တနင်္လာ',
      'အင်္ဂါ',
      'ဗုဒ္ဓဟူး',
      'ကြာသပတေး',
      'သောကြာ',
      'စနေ',
     ],
    },
    months: {
     shorthand: [
      'ဇန်',
      'ဖေ',
      'မတ်',
      'ပြီ',
      'မေ',
      'ဇွန်',
      'လိုင်',
      'သြ',
      'စက်',
      'အောက်',
      'နို',
      'ဒီ',
     ],
     longhand: [
      'ဇန်နဝါရီ',
      'ဖေဖော်ဝါရီ',
      'မတ်',
      'ဧပြီ',
      'မေ',
      'ဇွန်',
      'ဇူလိုင်',
      'သြဂုတ်',
      'စက်တင်ဘာ',
      'အောက်တိုဘာ',
      'နိုဝင်ဘာ',
      'ဒီဇင်ဘာ',
     ],
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  (ln.l10ns.my = un), ln.l10ns;
  var fn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   hn = {
    weekdays: {
     shorthand: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
     longhand: [
      'zondag',
      'maandag',
      'dinsdag',
      'woensdag',
      'donderdag',
      'vrijdag',
      'zaterdag',
     ],
    },
    months: {
     shorthand: [
      'jan',
      'feb',
      'mrt',
      'apr',
      'mei',
      'jun',
      'jul',
      'aug',
      'sept',
      'okt',
      'nov',
      'dec',
     ],
     longhand: [
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
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'wk',
    rangeSeparator: ' tot ',
    scrollTitle: 'Scroll voor volgende / vorige',
    toggleTitle: 'Klik om te wisselen',
    ordinal: function (n) {
     return n === 1 || n === 8 || n >= 20 ? 'ste' : 'de';
    },
   };
  (fn.l10ns.nl = hn), fn.l10ns;
  var wn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   pn = {
    weekdays: {
     shorthand: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
     longhand: [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
     ],
    },
    months: {
     shorthand: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Des',
     ],
     longhand: [
      'Januar',
      'Februar',
      'Mars',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Desember',
     ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' til ',
    weekAbbreviation: 'Uke',
    scrollTitle: 'Scroll for å endre',
    toggleTitle: 'Klikk for å veksle',
    ordinal: function () {
     return '.';
    },
   };
  (wn.l10ns.no = pn), wn.l10ns;
  var kn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   gn = {
    weekdays: {
     shorthand: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨਿੱਚਰ'],
     longhand: [
      'ਐਤਵਾਰ',
      'ਸੋਮਵਾਰ',
      'ਮੰਗਲਵਾਰ',
      'ਬੁੱਧਵਾਰ',
      'ਵੀਰਵਾਰ',
      'ਸ਼ੁੱਕਰਵਾਰ',
      'ਸ਼ਨਿੱਚਰਵਾਰ',
     ],
    },
    months: {
     shorthand: [
      'ਜਨ',
      'ਫ਼ਰ',
      'ਮਾਰ',
      'ਅਪ੍ਰੈ',
      'ਮਈ',
      'ਜੂਨ',
      'ਜੁਲਾ',
      'ਅਗ',
      'ਸਤੰ',
      'ਅਕ',
      'ਨਵੰ',
      'ਦਸੰ',
     ],
     longhand: [
      'ਜਨਵਰੀ',
      'ਫ਼ਰਵਰੀ',
      'ਮਾਰਚ',
      'ਅਪ੍ਰੈਲ',
      'ਮਈ',
      'ਜੂਨ',
      'ਜੁਲਾਈ',
      'ਅਗਸਤ',
      'ਸਤੰਬਰ',
      'ਅਕਤੂਬਰ',
      'ਨਵੰਬਰ',
      'ਦਸੰਬਰ',
     ],
    },
   };
  (kn.l10ns.pa = gn), kn.l10ns;
  var cn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   vn = {
    weekdays: {
     shorthand: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
     longhand: [
      'Niedziela',
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
      'Sty',
      'Lut',
      'Mar',
      'Kwi',
      'Maj',
      'Cze',
      'Lip',
      'Sie',
      'Wrz',
      'Paź',
      'Lis',
      'Gru',
     ],
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
   };
  (cn.l10ns.pl = vn), cn.l10ns;
  var bn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   mn = {
    weekdays: {
     shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
     longhand: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    rangeSeparator: ' até ',
   };
  (bn.l10ns.pt = mn), bn.l10ns;
  var yn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Sn = {
    weekdays: {
     shorthand: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sam'],
     longhand: [
      'Duminică',
      'Luni',
      'Marți',
      'Miercuri',
      'Joi',
      'Vineri',
      'Sâmbătă',
     ],
    },
    months: {
     shorthand: [
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
      'Noi',
      'Dec',
     ],
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '';
    },
   };
  (yn.l10ns.ro = Sn), yn.l10ns;
  var Mn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Dn = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
     ],
    },
    months: {
     shorthand: [
      'Янв',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
     ],
     longhand: [
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
    },
    rangeSeparator: ' — ',
    scrollTitle: 'Прокрутите для увеличения',
    toggleTitle: 'Нажмите для переключения',
   };
  (Mn.l10ns.ru = Dn), Mn.l10ns;
  var Jn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Tn = {
    weekdays: {
     shorthand: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
     longhand: [
      'ඉරිදා',
      'සඳුදා',
      'අඟහරුවාදා',
      'බදාදා',
      'බ්‍රහස්පතින්දා',
      'සිකුරාදා',
      'සෙනසුරාදා',
     ],
    },
    months: {
     shorthand: [
      'ජන',
      'පෙබ',
      'මාර්',
      'අප්‍රේ',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝ',
      'සැප්',
      'ඔක්',
      'නොවැ',
      'දෙසැ',
     ],
     longhand: [
      'ජනවාරි',
      'පෙබරවාරි',
      'මාර්තු',
      'අප්‍රේල්',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝස්තු',
      'සැප්තැම්බර්',
      'ඔක්තෝබර්',
      'නොවැම්බර්',
      'දෙසැම්බර්',
     ],
    },
   };
  (Jn.l10ns.si = Tn), Jn.l10ns;
  var An =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   On = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Ut', 'Str', 'Štv', 'Pia', 'Sob'],
     longhand: [
      'Nedeľa',
      'Pondelok',
      'Utorok',
      'Streda',
      'Štvrtok',
      'Piatok',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
      'Január',
      'Február',
      'Marec',
      'Apríl',
      'Máj',
      'Jún',
      'Júl',
      'August',
      'September',
      'Október',
      'November',
      'December',
     ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' do ',
    ordinal: function () {
     return '.';
    },
   };
  (An.l10ns.sk = On), An.l10ns;
  var jn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Pn = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
     longhand: [
      'Nedelja',
      'Ponedeljek',
      'Torek',
      'Sreda',
      'Četrtek',
      'Petek',
      'Sobota',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' do ',
    ordinal: function () {
     return '.';
    },
   };
  (jn.l10ns.sl = Pn), jn.l10ns;
  var Nn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   $n = {
    weekdays: {
     shorthand: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
     longhand: [
      'E Diel',
      'E Hënë',
      'E Martë',
      'E Mërkurë',
      'E Enjte',
      'E Premte',
      'E Shtunë',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
   };
  (Nn.l10ns.sq = $n), Nn.l10ns;
  var Fn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   zn = {
    weekdays: {
     shorthand: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
     longhand: [
      'Nedelja',
      'Ponedeljak',
      'Utorak',
      'Sreda',
      'Četvrtak',
      'Petak',
      'Subota',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    weekAbbreviation: 'Ned.',
    rangeSeparator: ' do ',
   };
  (Fn.l10ns.sr = zn), Fn.l10ns;
  var Wn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Ln = {
    firstDayOfWeek: 1,
    weekAbbreviation: 'v',
    weekdays: {
     shorthand: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
     longhand: [
      'Söndag',
      'Måndag',
      'Tisdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lördag',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    ordinal: function () {
     return '.';
    },
   };
  (Wn.l10ns.sv = Ln), Wn.l10ns;
  var Kn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   En = {
    weekdays: {
     shorthand: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
     longhand: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' ถึง ',
    scrollTitle: 'เลื่อนเพื่อเพิ่มหรือลด',
    toggleTitle: 'คลิกเพื่อเปลี่ยน',
    ordinal: function () {
     return '';
    },
   };
  (Kn.l10ns.th = En), Kn.l10ns;
  var Gn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Cn = {
    weekdays: {
     shorthand: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
     longhand: [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    firstDayOfWeek: 1,
    ordinal: function () {
     return '.';
    },
    rangeSeparator: ' - ',
    weekAbbreviation: 'Hf',
    scrollTitle: 'Artırmak için kaydırın',
    toggleTitle: 'Aç/Kapa',
    amPM: ['ÖÖ', 'ÖS'],
   };
  (Gn.l10ns.tr = Cn), Gn.l10ns;
  var Hn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Vn = {
    firstDayOfWeek: 1,
    weekdays: {
     shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
     longhand: [
      'Неділя',
      'Понеділок',
      'Вівторок',
      'Середа',
      'Четвер',
      "П'ятниця",
      'Субота',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
   };
  (Hn.l10ns.uk = Vn), Hn.l10ns;
  var Rn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   In = {
    weekdays: {
     shorthand: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
     longhand: [
      'Chủ nhật',
      'Thứ hai',
      'Thứ ba',
      'Thứ tư',
      'Thứ năm',
      'Thứ sáu',
      'Thứ bảy',
     ],
    },
    months: {
     shorthand: [
      'Th1',
      'Th2',
      'Th3',
      'Th4',
      'Th5',
      'Th6',
      'Th7',
      'Th8',
      'Th9',
      'Th10',
      'Th11',
      'Th12',
     ],
     longhand: [
      'Tháng một',
      'Tháng hai',
      'Tháng ba',
      'Tháng tư',
      'Tháng năm',
      'Tháng sáu',
      'Tháng bảy',
      'Tháng tám',
      'Tháng chín',
      'Tháng mười',
      'Tháng 11',
      'Tháng 12',
     ],
    },
    firstDayOfWeek: 1,
   };
  (Rn.l10ns.vn = In), Rn.l10ns;
  var Bn =
    typeof window < 'u' && window.flatpickr !== void 0
     ? window.flatpickr
     : { l10ns: {} },
   Un = {
    weekdays: {
     shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     longhand: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
     ],
    },
    months: {
     shorthand: [
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
     longhand: [
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
    },
    rangeSeparator: ' 至 ',
    weekAbbreviation: '周',
    scrollTitle: '滚动切换',
    toggleTitle: '点击切换 12/24 小时时制',
   };
  (Bn.l10ns.zh = Un), Bn.l10ns;
  var _n = {
   ar: s,
   bg: u,
   bn: h,
   cat: p,
   cs: g,
   cy: v,
   da: m,
   de: S,
   default: r({}, M),
   en: M,
   eo: J,
   es: A,
   et: j,
   fa: N,
   fi: F,
   fr: W,
   gr: K,
   he: G,
   hi: H,
   hr: R,
   hu: B,
   id: Q,
   it: Z,
   ja: q,
   ko: Y,
   lt: en,
   lv: rn,
   mk: dn,
   mn: sn,
   ms: Zn,
   my: un,
   nl: hn,
   no: pn,
   pa: gn,
   pl: vn,
   pt: mn,
   ro: Sn,
   ru: Dn,
   si: Tn,
   sk: On,
   sl: Pn,
   sq: $n,
   sr: zn,
   sv: Ln,
   th: En,
   tr: Cn,
   uk: Vn,
   vn: In,
   zh: Un,
  };
  return _n;
 });
});
export default Yn();
