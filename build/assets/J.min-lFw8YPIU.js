(function (f) {
 function l(t) {
  return t && typeof t == 'object' && 'default' in t ? t : { default: t };
 }
 var e = l(f);
 function n(t) {
  '@babel/helpers - typeof';
  return (
   (n =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
     ? function (o) {
        return typeof o;
       }
     : function (o) {
        return o &&
         typeof Symbol == 'function' &&
         o.constructor === Symbol &&
         o !== Symbol.prototype
         ? 'symbol'
         : typeof o;
       }),
   n(t)
  );
 }
 var u = FormValidation.formValidation,
  a = e.default.fn.jquery.split(' ')[0].split('.');
 if ((+a[0] < 2 && +a[1] < 9) || (+a[0] == 1 && +a[1] == 9 && +a[2] < 1))
  throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
 e.default.fn.formValidation = function (t) {
  var o = arguments;
  return this.each(function () {
   var i = e.default(this),
    r = i.data('formValidation'),
    y = n(t) === 'object' && t;
   r ||
    ((r = u(this, y)), i.data('formValidation', r).data('FormValidation', r)),
    typeof t == 'string' && r[t].apply(r, Array.prototype.slice.call(o, 1));
  });
 };
})(jQuery);
