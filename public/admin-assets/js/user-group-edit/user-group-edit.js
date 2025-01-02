document.addEventListener('DOMContentLoaded', function () {
 const setActiveTab = (tabId) => {
  const tabs = ['r1', 'r2'];
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
  .querySelector("a[href='#r1-tab']")
  .addEventListener('click', function () {
   setActiveTab('r1');
  });

 document
  .querySelector("a[href='#r2-tab']")
  .addEventListener('click', function () {
   setActiveTab('r2');
  });
});
