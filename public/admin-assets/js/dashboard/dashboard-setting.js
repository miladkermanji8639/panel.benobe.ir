document.addEventListener('DOMContentLoaded', function () {
 const setActiveTab = (tabId) => {
  const tabs = [
   'dashboard',
   'seo',
   'payment',
   'sms',
   'callmee',
   'program',
   'user',
   'sec',
   'files',
   'mail',
   'contact',
  ];
  tabs.forEach((tab) => {
   const tabElement = document.getElementById(tab + '-tab');
   if (tab === tabId) {
    tabElement.classList.add('active');
    document
     .querySelector("a[href='#" + tab + "-tab']")
     .parentNode.classList.add('active');
   } else {
    tabElement.classList.remove('active');
    document
     .querySelector("a[href='#" + tab + "-tab']")
     .parentNode.classList.remove('active');
   }
  });
 };

 document
  .querySelector("a[href='#dashboard-tab']")
  .addEventListener('click', function () {
   setActiveTab('dashboard');
  });

 document
  .querySelector("a[href='#seo-tab']")
  .addEventListener('click', function () {
   setActiveTab('seo');
  });
 document
  .querySelector("a[href='#payment-tab']")
  .addEventListener('click', function () {
   setActiveTab('payment');
  });
 document
  .querySelector("a[href='#sms-tab']")
  .addEventListener('click', function () {
   setActiveTab('sms');
  });
 document
  .querySelector("a[href='#callmee-tab']")
  .addEventListener('click', function () {
   setActiveTab('callmee');
  });
 document
  .querySelector("a[href='#program-tab']")
  .addEventListener('click', function () {
   setActiveTab('program');
  });
 document
  .querySelector("a[href='#user-tab']")
  .addEventListener('click', function () {
   setActiveTab('user');
  });
 document
  .querySelector("a[href='#sec-tab']")
  .addEventListener('click', function () {
   setActiveTab('sec');
  });
 document
  .querySelector("a[href='#files-tab']")
  .addEventListener('click', function () {
   setActiveTab('files');
  });
 document
  .querySelector("a[href='#mail-tab']")
  .addEventListener('click', function () {
   setActiveTab('mail');
  });
 document
  .querySelector("a[href='#contact-tab']")
  .addEventListener('click', function () {
   setActiveTab('contact');
  });
});
