(function () {
 const e = document.querySelector('.dNum'),
  r = document.querySelector('.fNum'),
  n = document.querySelector('.fCurrency'),
  u = document.querySelector('.fBytes'),
  t = document.querySelector('.fPercent'),
  f = document.querySelector('.fTime'),
  m = document.querySelector('.fExponential');
 e && (e.innerHTML = numeral(974).value()),
  r && (r.innerHTML = numeral(1230974).format('0.0a')),
  n && (n.innerHTML = numeral(1000.234).format('$0,0.000')),
  u && (u.innerHTML = numeral(3467479682787).format('0.000ib')),
  t && (t.innerHTML = numeral(0.974878234).format('0.000%')),
  f && (f.innerHTML = numeral(63846).format('00:00:00')),
  m && (m.innerHTML = numeral(1123456789).format('0,0e+0'));
})();
