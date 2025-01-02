var d = (o, i) => () => (i || o((i = { exports: {} }).exports, i), i.exports);
var m = d((g, c) => {
 /* flatpickr v4.3.2, @license MIT */ (function (o, i) {
  typeof g == 'object' && typeof c < 'u'
   ? (c.exports = i())
   : typeof define == 'function' && define.amd
     ? define(i)
     : (o.confirmDatePlugin = i());
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
***************************************************************************** */ var o =
    Object.assign ||
    function (t) {
     for (var e, n = 1, l = arguments.length; n < l; n++) {
      e = arguments[n];
      for (var r in e)
       Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
     }
     return t;
    },
   i = {
    confirmIcon:
     "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
    confirmText: 'OK ',
    showAlways: !1,
    theme: 'light',
   };
  function u(s) {
   var t = o({}, i, s),
    e;
   return function (n) {
    return n.config.noCalendar || n.isMobile
     ? {}
     : o(
        {
         onKeyDown: function (l, r, f, a) {
          n.config.enableTime && a.key === 'Tab' && a.target === n.amPM
           ? (a.preventDefault(), e.focus())
           : a.key === 'Enter' && a.target === e && n.close();
         },
         onReady: function () {
          (e = n._createElement(
           'div',
           'flatpickr-confirm ' +
            (t.showAlways ? 'visible' : '') +
            ' ' +
            t.theme +
            'Theme',
           t.confirmText,
          )),
           (e.tabIndex = -1),
           (e.innerHTML += t.confirmIcon),
           e.addEventListener('click', n.close),
           n.calendarContainer.appendChild(e);
         },
        },
        t.showAlways
         ? {}
         : {
            onChange: function (l, r) {
             var f = n.config.enableTime || n.config.mode === 'multiple';
             if (r && !n.config.inline && f) return e.classList.add('visible');
             e.classList.remove('visible');
            },
           },
       );
   };
  }
  return u;
 });
});
export default m();
