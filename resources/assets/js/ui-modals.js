/**
 * UI Modals
 */

'use strict';

(function () {
 const flatpickrDate = document.querySelector('#flatpickr-date-1');
 const flatpickrDate2 = document.querySelector('#flatpickr-date-2');
 const flatpickrDate3 = document.querySelector('#flatpickr-date-3');
 const flatpickrDate4 = document.querySelector('#flatpickr-date-4');
 const flatpickrDate5 = document.querySelector('#flatpickr-date-5');
 const flatpickrDate6 = document.querySelector('#flatpickr-date-6');
 const flatpickrDate7 = document.querySelector('#flatpickr-date-7');
 const flatpickrDate8 = document.querySelector('#flatpickr-date-8');
 // Date
 if (flatpickrDate) {
  flatpickrDate.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate2) {
  flatpickrDate2.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate3) {
  flatpickrDate3.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate4) {
  flatpickrDate4.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate5) {
  flatpickrDate5.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate6) {
  flatpickrDate6.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate7) {
  flatpickrDate7.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 if (flatpickrDate8) {
  flatpickrDate8.flatpickr({
   monthSelectorType: 'static',
   locale: 'fa',
   altFormat: 'Y/m/d',
  });
 }

 // Animation Dropdown
 const animationDropdown = document.querySelector('#animation-dropdown'),
  animationModal = document.querySelector('#animationModal');
 if (animationDropdown) {
  animationDropdown.onchange = function () {
   animationModal.classList = '';
   animationModal.classList.add('modal', 'animate__animated', this.value);
  };
 }

 // On hiding modal, remove iframe video/audio to stop playing
 const youTubeModal = document.querySelector('#youTubeModal'),
  youTubeModalVideo = youTubeModal.querySelector('iframe');
 youTubeModal.addEventListener('hidden.bs.modal', function () {
  youTubeModalVideo.setAttribute('src', '');
 });

 // Function to get and auto play youTube video
 const autoPlayYouTubeModal = function () {
  const modalTriggerList = [].slice.call(
   document.querySelectorAll('[data-bs-toggle="modal"]'),
  );
  modalTriggerList.map(function (modalTriggerEl) {
   modalTriggerEl.onclick = function () {
    const theModal = this.getAttribute('data-bs-target'),
     videoSRC = this.getAttribute('data-theVideo'),
     videoSRCauto = `${videoSRC}?autoplay=1`,
     modalVideo = document.querySelector(`${theModal} iframe`);
    if (modalVideo) {
     modalVideo.setAttribute('src', videoSRCauto);
    }
   };
  });
 };

 // Calling function on load
 autoPlayYouTubeModal();

 // Onboarding modal carousel height animation
 document.querySelectorAll('.carousel').forEach((carousel) => {
  carousel.addEventListener('slide.bs.carousel', (event) => {
   // ! Todo: Convert to JS (animation) (jquery)
   var nextH = $(event.relatedTarget).height();
   $(carousel).find('.active.carousel-item').parent().animate(
    {
     height: nextH,
    },
    500,
   );
  });
 });
})();
