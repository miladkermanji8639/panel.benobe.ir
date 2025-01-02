$(document).ready(function () {
 const DOMElements = document.querySelectorAll('.timepicker-ui');
 const options = {
  clockType: '24h',
 };

 DOMElements.forEach((element) => {
  const newTimepicker = new window.tui.TimepickerUI(element, options);
  newTimepicker.create();
 });
});
