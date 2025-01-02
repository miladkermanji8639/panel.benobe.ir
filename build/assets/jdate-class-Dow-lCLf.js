var _ = window.Date;
function w(t) {
 return t.replace(/[۰-۹]/g, function (i) {
  return String.fromCharCode(i.charCodeAt(0) - 1728);
 });
}
function h(t) {
 return t < 10 ? '0' + t : t;
}
function g(t, i, r) {
 if (i > 12 || i <= 0) {
  var e = Math.floor((i - 1) / 12);
  (t += e), (i = i - e * 12);
 }
 return persian_to_jd(t, i, r);
}
function j(t, i) {
 var r =
   /^(\d|\d\d|\d\d\d\d)(?:([-\/])(\d{1,2})(?:\2(\d|\d\d|\d\d\d\d))?)?(([ T])(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
  e = r.exec(t);
 if (e) {
  var s = e[2],
   u = e[6],
   o = +e[1],
   a = +e[3] || 1,
   d = +e[4] || 1,
   T = s != '/' && e[6] != ' ',
   U = +e[7] || 0,
   D = +e[8] || 0,
   M = +e[9] || 0,
   S = +('0.' + (e[10] || '0')) * 1e3,
   C = e[11],
   y = T && (C || !e[5]),
   v = (e[12] == '-' ? -1 : 1) * ((+e[13] || 0) * 60 + (+e[14] || 0));
  if (!((C || u == 'T') && !T) && d >= 1e3 != o >= 1e3) {
   if (d >= 1e3) {
    if (s == '-') return;
    (d = +e[1]), (o = d);
   }
   if (i) {
    var p = jd_to_gregorian(g(o, a, d));
    (o = p[0]), (a = p[1]), (d = p[2]);
   }
   var f = new _(o, a - 1, d, U, D, M, S);
   return (
    y && f.setUTCMinutes(f.getUTCMinutes() - f.getTimezoneOffset() + v), f
   );
  }
 }
}
function n(t, i, r, e, s, u, o) {
 if (typeof t == 'string') {
  if (((this._d = j(w(t), !0)), !this._d)) throw 'Cannot parse date string';
 } else if (arguments.length == 0) this._d = new _();
 else if (arguments.length == 1) this._d = new _(t instanceof n ? t._d : t);
 else {
  var a = jd_to_gregorian(g(t, (i || 0) + 1, r || 1));
  this._d = new _(a[0], a[1] - 1, a[2], e || 0, s || 0, u || 0, o || 0);
 }
 (this._date = this._d),
  (this._cached_date_ts = null),
  (this._cached_date = [0, 0, 0]),
  (this._cached_utc_date_ts = null),
  (this._cached_utc_date = [0, 0, 0]);
}
n.prototype = {
 _persianDate: function () {
  return (
   this._cached_date_ts != +this._d &&
    ((this._cached_date_ts = +this._d),
    (this._cached_date = jd_to_persian(
     gregorian_to_jd(
      this._d.getFullYear(),
      this._d.getMonth() + 1,
      this._d.getDate(),
     ),
    ))),
   this._cached_date
  );
 },
 _persianUTCDate: function () {
  return (
   this._cached_utc_date_ts != +this._d &&
    ((this._cached_utc_date_ts = +this._d),
    (this._cached_utc_date = jd_to_persian(
     gregorian_to_jd(
      this._d.getUTCFullYear(),
      this._d.getUTCMonth() + 1,
      this._d.getUTCDate(),
     ),
    ))),
   this._cached_utc_date
  );
 },
 _setPersianDate: function (t, i, r) {
  var e = this._persianDate();
  (e[t] = i), r !== void 0 && (e[2] = r);
  var s = jd_to_gregorian(g(e[0], e[1], e[2]));
  this._d.setFullYear(s[0]), this._d.setMonth(s[1] - 1, s[2]);
 },
 _setUTCPersianDate: function (t, i, r) {
  var e = this._persianUTCDate();
  r !== void 0 && (e[2] = r), (e[t] = i);
  var s = jd_to_gregorian(g(e[0], e[1], e[2]));
  this._d.setUTCFullYear(s[0]), this._d.setUTCMonth(s[1] - 1, s[2]);
 },
};
n.prototype.getDate = function () {
 return this._persianDate()[2];
};
n.prototype.getMonth = function () {
 return this._persianDate()[1] - 1;
};
n.prototype.getFullYear = function () {
 return this._persianDate()[0];
};
n.prototype.getUTCDate = function () {
 return this._persianUTCDate()[2];
};
n.prototype.getUTCMonth = function () {
 return this._persianUTCDate()[1] - 1;
};
n.prototype.getUTCFullYear = function () {
 return this._persianUTCDate()[0];
};
n.prototype.setDate = function (t) {
 this._setPersianDate(2, t);
};
n.prototype.setFullYear = function (t) {
 this._setPersianDate(0, t);
};
n.prototype.setMonth = function (t, i) {
 this._setPersianDate(1, t + 1, i);
};
n.prototype.setUTCDate = function (t) {
 this._setUTCPersianDate(2, t);
};
n.prototype.setUTCFullYear = function (t) {
 this._setUTCPersianDate(0, t);
};
n.prototype.setUTCMonth = function (t, i) {
 this._setUTCPersianDate(1, t + 1, i);
};
n.prototype.toLocaleString = function () {
 return (
  this.getFullYear() +
  '/' +
  h(this.getMonth() + 1) +
  '/' +
  h(this.getDate()) +
  ' ' +
  h(this.getHours()) +
  ':' +
  h(this.getMinutes()) +
  ':' +
  h(this.getSeconds())
 );
};
n.now = _.now;
n.parse = function (t) {
 new n(t).getTime();
};
n.UTC = function (t, i, r, e, s, u, o) {
 var a = jd_to_gregorian(g(t, i + 1, r || 1));
 return _.UTC(a[0], a[1] - 1, a[2], e || 0, s || 0, u || 0, o || 0);
};
var c,
 l =
  'getHours getMilliseconds getMinutes getSeconds getTime getUTCDay getUTCHours getTimezoneOffset getUTCMilliseconds getUTCMinutes getUTCSeconds setHours setMilliseconds setMinutes setSeconds setTime setUTCHours setUTCMilliseconds setUTCMinutes setUTCSeconds toDateString toISOString toJSON toString toLocaleDateString toLocaleTimeString toTimeString toUTCString valueOf getDay'.split(
   ' ',
  ),
 m = function (t) {
  return function () {
   return this._d[t].apply(this._d, arguments);
  };
 };
for (c = 0; c < l.length; c++) n.prototype[l[c]] = m(l[c]);
window.JDate = n;
