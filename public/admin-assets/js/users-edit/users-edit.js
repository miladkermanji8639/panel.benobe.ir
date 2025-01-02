document.addEventListener('DOMContentLoaded', function () {
 const setActiveTab = (tabId) => {
  const tabs = ['userinfo', 'bank', 'charge'];
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
  .querySelector("a[href='#userinfo-tab']")
  .addEventListener('click', function () {
   setActiveTab('userinfo');
  });

 document
  .querySelector("a[href='#bank-tab']")
  .addEventListener('click', function () {
   setActiveTab('bank');
  });
 document
  .querySelector("a[href='#charge-tab']")
  .addEventListener('click', function () {
   setActiveTab('charge');
  });
});
