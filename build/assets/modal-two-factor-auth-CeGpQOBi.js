document.addEventListener('DOMContentLoaded', function (o) {
 (function () {
  const e = document.querySelectorAll('#twoFactorAuthInputSms');
  e &&
   e.forEach(function (n) {
    new Cleave(n, { phone: !0, phoneRegionCode: 'US' });
   });
 })();
});
