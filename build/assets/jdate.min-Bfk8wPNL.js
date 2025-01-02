(function () {
 function l(t, e) {
  return t - e * Math.floor(t / e);
 }
 function a(t, e, o) {
  return (
   17214245e-1 +
   365 * (t - 1) +
   Math.floor((t - 1) / 4) +
   -Math.floor((t - 1) / 100) +
   Math.floor((t - 1) / 400) +
   Math.floor(
    (367 * e - 362) / 12 +
     (2 >= e ? 0 : t % 4 != 0 || (t % 100 == 0 && t % 400 != 0) ? -2 : -1) +
     o,
   )
  );
 }
 function d(t) {
  var e, o, n, r;
  return (
   (t = Math.floor(t - 0.5) + 0.5),
   (e = t - 17214255e-1),
   (o = Math.floor(e / 146097)),
   (n = l(e, 146097)),
   (e = Math.floor(n / 36524)),
   (r = l(n, 36524)),
   (n = Math.floor(r / 1461)),
   (r = Math.floor(l(r, 1461) / 365)),
   (o = 400 * o + 100 * e + 4 * n + r),
   e != 4 && r != 4 && o++,
   (e = Math.floor(
    (12 *
     (t -
      a(o, 1, 1) +
      (t < a(o, 3, 1)
       ? 0
       : o % 4 != 0 || (o % 100 == 0 && o % 400 != 0)
         ? 2
         : 1)) +
     373) /
     367,
   )),
   [o, e, t - a(o, e, 1) + 1]
  );
 }
 function g(t, e, o) {
  var n;
  return (
   (t -= 0 <= t ? 474 : 473),
   (n = 474 + l(t, 2820)),
   o +
    (7 >= e ? 31 * (e - 1) : 30 * (e - 1) + 6) +
    Math.floor((682 * n - 110) / 2816) +
    365 * (n - 1) +
    1029983 * Math.floor(t / 2820) +
    19483195e-1
  );
 }
 function F(t) {
  var e, o, n;
  return (
   (t = Math.floor(t) + 0.5),
   (o = t - g(475, 1, 1)),
   (e = Math.floor(o / 1029983)),
   (n = l(o, 1029983)),
   n == 1029982
    ? (o = 2820)
    : ((o = Math.floor(n / 366)),
      (n = l(n, 366)),
      (o = Math.floor((2134 * o + 2816 * n + 2815) / 1028522) + o + 1)),
   (e = o + 2820 * e + 474),
   0 >= e && e--,
   (o = t - g(e, 1, 1) + 1),
   (o = 186 >= o ? Math.ceil(o / 31) : Math.ceil((o - 6) / 30)),
   [e, o, t - g(e, o, 1) + 1]
  );
 }
 var c = window.Date;
 function z(t) {
  return t.replace(/[\u06f0-\u06f9]/g, function (e) {
   return String.fromCharCode(e.charCodeAt(0) - 1728);
  });
 }
 function M(t) {
  return 10 > t ? '0' + t : t;
 }
 function p(t, e, o) {
  if (12 < e || 0 >= e) {
   var n = Math.floor((e - 1) / 12);
   (t += n), (e -= 12 * n);
  }
  return g(t, e, o);
 }
 function i(t, e, o, n, r, D, w) {
  if (typeof t == 'string') {
   var u;
   t: {
    u = z(t);
    var s =
     /^(\d|\d\d|\d\d\d\d)(?:([-\/])(\d{1,2})(?:\2(\d|\d\d|\d\d\d\d))?)?(([ T])(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|([+-])(\d{2})(?::?(\d{2}))?)?)?$/.exec(
      u,
     );
    if (s) {
     var m = s[2],
      L = s[6],
      f = +s[1],
      Y = +s[3] || 1,
      h = +s[4] || 1,
      H = m != '/' && s[6] != ' ',
      A = +s[7] || 0,
      J = +s[8] || 0,
      N = +s[9] || 0,
      q = 1e3 * +('0.' + (s[10] || '0')),
      O = s[11];
     u = H && (O || !s[5]);
     var x = (s[12] == '-' ? -1 : 1) * (60 * (+s[13] || 0) + (+s[14] || 0));
     if (((!O && L != 'T') || H) && 1e3 <= h != 1e3 <= f) {
      if (1e3 <= h) {
       if (m == '-') {
        u = void 0;
        break t;
       }
       f = h = +s[1];
      }
      (s = d(p(f, Y, h))),
       (f = s[0]),
       (Y = s[1]),
       (h = s[2]),
       (f = new c(f, Y - 1, h, A, J, N, q)),
       u && f.setUTCMinutes(f.getUTCMinutes() - f.getTimezoneOffset() + x),
       (u = f);
      break t;
     }
    }
    u = void 0;
   }
   if (((this.a = u), !this.a)) throw 'Cannot parse date string';
  } else
   arguments.length == 0
    ? (this.a = new c())
    : arguments.length == 1
      ? (this.a = new c(t instanceof i ? t.a : t))
      : ((u = d(p(t, (e || 0) + 1, o || 1))),
        (this.a = new c(u[0], u[1] - 1, u[2], n || 0, r || 0, D || 0, w || 0)));
  (this._date = this.a),
   (this.c = null),
   (this.b = [0, 0, 0]),
   (this.e = null),
   (this.d = [0, 0, 0]);
 }
 i.prototype = {};
 function v(t, e, o, n) {
  var r = C(t);
  n !== void 0 && (r[2] = n),
   (r[e] = o),
   (e = d(p(r[0], r[1], r[2]))),
   t.a.setUTCFullYear(e[0]),
   t.a.setUTCMonth(e[1] - 1, e[2]);
 }
 function y(t, e, o, n) {
  var r = U(t);
  (r[e] = o),
   n !== void 0 && (r[2] = n),
   (e = d(p(r[0], r[1], r[2]))),
   t.a.setFullYear(e[0]),
   t.a.setMonth(e[1] - 1, e[2]);
 }
 function C(t) {
  return (
   t.e != +t.a &&
    ((t.e = +t.a),
    (t.d = F(
     a(t.a.getUTCFullYear(), t.a.getUTCMonth() + 1, t.a.getUTCDate()),
    ))),
   t.d
  );
 }
 function U(t) {
  return (
   t.c != +t.a &&
    ((t.c = +t.a),
    (t.b = F(a(t.a.getFullYear(), t.a.getMonth() + 1, t.a.getDate())))),
   t.b
  );
 }
 (i.prototype.getDate = function () {
  return U(this)[2];
 }),
  (i.prototype.getMonth = function () {
   return U(this)[1] - 1;
  }),
  (i.prototype.getFullYear = function () {
   return U(this)[0];
  }),
  (i.prototype.getUTCDate = function () {
   return C(this)[2];
  }),
  (i.prototype.getUTCMonth = function () {
   return C(this)[1] - 1;
  }),
  (i.prototype.getUTCFullYear = function () {
   return C(this)[0];
  }),
  (i.prototype.setDate = function (t) {
   y(this, 2, t);
  }),
  (i.prototype.setFullYear = function (t) {
   y(this, 0, t);
  }),
  (i.prototype.setMonth = function (t, e) {
   y(this, 1, t + 1, e);
  }),
  (i.prototype.setUTCDate = function (t) {
   v(this, 2, t);
  }),
  (i.prototype.setUTCFullYear = function (t) {
   v(this, 0, t);
  }),
  (i.prototype.setUTCMonth = function (t, e) {
   v(this, 1, t + 1, e);
  }),
  (i.prototype.toLocaleString = function () {
   return (
    this.getFullYear() +
    '/' +
    M(this.getMonth() + 1) +
    '/' +
    M(this.getDate()) +
    ' ' +
    M(this.getHours()) +
    ':' +
    M(this.getMinutes()) +
    ':' +
    M(this.getSeconds())
   );
  }),
  (i.now = c.now),
  (i.parse = function (t) {
   new i(t).getTime();
  }),
  (i.UTC = function (t, e, o, n, r, D, w) {
   return (
    (t = d(p(t, e + 1, o || 1))),
    c.UTC(t[0], t[1] - 1, t[2], n || 0, r || 0, D || 0, w || 0)
   );
  });
 var T,
  S =
   'getHours getMilliseconds getMinutes getSeconds getTime getUTCDay getUTCHours getTimezoneOffset getUTCMilliseconds getUTCMinutes getUTCSeconds setHours setMilliseconds setMinutes setSeconds setTime setUTCHours setUTCMilliseconds setUTCMinutes setUTCSeconds toDateString toISOString toJSON toString toLocaleDateString toLocaleTimeString toTimeString toUTCString valueOf getDay'.split(
    ' ',
   );
 function E() {
  var t = S[T];
  return function () {
   return this.a[t].apply(this.a, arguments);
  };
 }
 for (T = 0; T < S.length; T++) i.prototype[S[T]] = E();
 window.JDate = i;
})();
