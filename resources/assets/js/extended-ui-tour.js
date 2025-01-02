/**
 * Tour
 */

'use strict';

(function () {
 const startBtn = document.querySelector('#shepherd-example');

 function setupTour(tour) {
  const backBtnClass =
    'btn btn-sm btn-label-secondary md-btn-flat waves-effect waves-light',
   nextBtnClass = 'btn btn-sm btn-primary btn-next waves-effect waves-light';
  tour.addStep({
   title: 'نوار ابزار',
   text: 'این یک نوار ناوربری است',
   attachTo: { element: '.navbar', on: 'bottom' },
   buttons: [
    {
     action: tour.cancel,
     classes: backBtnClass,
     text: 'ردشدن',
    },
    {
     text: 'بعدی',
     classes: nextBtnClass,
     action: tour.next,
    },
   ],
  });
  tour.addStep({
   title: 'کارت',
   text: 'این یک کارت است',
   attachTo: { element: '.tour-card', on: 'top' },
   buttons: [
    {
     text: 'ردشدن',
     classes: backBtnClass,
     action: tour.cancel,
    },
    {
     text: 'قبلی',
     classes: backBtnClass,
     action: tour.back,
    },
    {
     text: 'بعدی',
     classes: nextBtnClass,
     action: tour.next,
    },
   ],
  });
  tour.addStep({
   title: 'فــوتر',
   text: 'این یک فــوتر است',
   attachTo: { element: '.footer', on: 'top' },
   buttons: [
    {
     text: 'ردشدن',
     classes: backBtnClass,
     action: tour.cancel,
    },
    {
     text: 'قبلی',
     classes: backBtnClass,
     action: tour.back,
    },
    {
     text: 'بعدی',
     classes: nextBtnClass,
     action: tour.next,
    },
   ],
  });
  tour.addStep({
   title: 'لایسنس',
   text: 'اینجا کلیک کنید',
   attachTo: { element: '.footer-link', on: 'top' },
   buttons: [
    {
     text: 'قبلی',
     classes: backBtnClass,
     action: tour.back,
    },
    {
     text: 'اتمام',
     classes: nextBtnClass,
     action: tour.cancel,
    },
   ],
  });

  return tour;
 }

 if (startBtn) {
  // On start tour button click
  startBtn.onclick = function () {
   const tourVar = new Shepherd.Tour({
    defaultStepOptions: {
     scrollTo: false,
     cancelIcon: {
      enabled: true,
     },
    },
    useModalOverlay: true,
   });

   setupTour(tourVar).start();
  };
 }

 // ! Documentation Tour only
 const startBtnDocs = document.querySelector('#shepherd-docs-example');

 function setupTourDocs(tour) {
  const backBtnClass =
    'btn btn-sm btn-label-secondary md-btn-flat waves-effect waves-light',
   nextBtnClass = 'btn btn-sm btn-primary btn-next waves-effect waves-light';
  tour.addStep({
   title: 'نوار ابزار',
   text: 'این یک نوار ابزار است',
   attachTo: { element: '.navbar', on: 'bottom' },
   buttons: [
    {
     action: tour.cancel,
     classes: backBtnClass,
     text: 'ردشدن',
    },
    {
     text: 'بعدی',
     classes: nextBtnClass,
     action: tour.next,
    },
   ],
  });
  tour.addStep({
   title: 'فــوتر',
   text: 'این یک فــوتر است',
   attachTo: { element: '.footer', on: 'top' },
   buttons: [
    {
     text: 'ردشدن',
     classes: backBtnClass,
     action: tour.cancel,
    },
    {
     text: 'قبلی',
     classes: backBtnClass,
     action: tour.back,
    },
    {
     text: 'بعدی',
     classes: nextBtnClass,
     action: tour.next,
    },
   ],
  });
  tour.addStep({
   title: 'لینک‌های سوشال مدیا',
   text: 'برای به اشتراک گذاری در سوشال مدیا کلیک کنید',
   attachTo: { element: '.footer-link', on: 'top' },
   buttons: [
    {
     text: 'قبلی',
     classes: backBtnClass,
     action: tour.back,
    },
    {
     text: 'اتمام',
     classes: nextBtnClass,
     action: tour.cancel,
    },
   ],
  });

  return tour;
 }

 if (startBtnDocs) {
  // On start tour button click
  startBtnDocs.onclick = function () {
   const tourDocsVar = new Shepherd.Tour({
    defaultStepOptions: {
     scrollTo: false,
     cancelIcon: {
      enabled: true,
     },
    },
    useModalOverlay: true,
   });

   setupTourDocs(tourDocsVar).start();
  };
 }
})();
