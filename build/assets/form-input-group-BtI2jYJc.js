(function () {
 const a = $('.speech-to-text');
 if (a.length) {
  var e = e || webkitSpeechRecognition;
  if (e != null) {
   var s = new e(),
    t = !1;
   a.on('click', function () {
    const u = $(this);
    (s.onspeechstart = function () {
     t = !0;
    }),
     t === !1 && s.start(),
     (s.onerror = function (f) {
      t = !1;
     }),
     (s.onresult = function (f) {
      u.closest('.form-send-message')
       .find('.message-input')
       .val(f.results[0][0].transcript);
     }),
     (s.onspeechend = function (f) {
      (t = !1), s.stop();
     });
   });
  }
 }
})();