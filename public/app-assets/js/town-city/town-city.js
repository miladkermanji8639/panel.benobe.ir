let modal_title = $('#modal-title');
let choose_town_txt = $('#choose-town-txt');
let top_search_modal = $('.top-search-modal');
let most_city_search = $('.most-city-search');
let town_list_txt = $('.town-list-txt');
let town_cards = $('#town-cards');
let city_cards = $('#city-cards');
let city_card = $('#city-cards');
let town_input_modal = $('#town-input-modal');
let city_input_modal = $('#city-input-modal');
let back_to_town = $('.back-to-town');
let city_cards_container = $('.city-cards-container');
let my_txt_search_input = $('#my-txt-search-input');
let my_city_name = $('.my-city-name');
// متغیری برای نگهداری شهرهای فیلتر شده بر اساس استان انتخاب شده
let filteredCities = [];
// نمایش شهرهای مربوط به استان انتخاب شده
function showCities(provinceId) {
 $('.town-card').addClass('d-none');
 $('#city-cards').removeClass('d-none');
 $('#town-list-header').text('لیست شهر ها');
 $('.back-to-town').removeClass('d-none');
 $('#city-input-modal').removeClass('d-none');
 $('#town-input-modal').addClass('d-none');
 // بازگشت به انتخاب استان
 $(back_to_town).click(function (e) {
  e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
  city_cards.addClass('d-none');
  town_cards.removeClass('d-none');
  choose_town_txt.text('انتخاب استان');
  most_city_search.removeClass('d-none');
  town_list_txt.removeClass('d-none');
  back_to_town.addClass('d-none');
  city_cards.addClass('d-none');
  city_input_modal.addClass('d-none');
  town_input_modal.removeClass('d-none');
  $('.town-card').removeClass('d-none');
 });
 // دریافت لیست شهرها از پایگاه داده بر اساس استان
 function fetchCitiesFromDatabase() {
  fetch(`/cities/${provinceId}`)
   .then((res) => {
    if (!res.ok) {
     throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
   })
   .then((cities) => {
    filteredCities = cities; // ذخیره شهرهای مربوط به استان
    displayCities(cities);
   })
   .catch((error) => console.error('Unable to fetch data:', error));
 }
 // نمایش شهرها در صفحه
 function displayCities(cities) {
  const myCityContent = document.getElementById('city-cards');
  myCityContent.innerHTML = ''; // پاک کردن کارت‌های قبلی شهرها
  // ایجاد کارت‌های شهر
  const cityCardsContainer = document.createElement('div');
  cityCardsContainer.classList.add('city-cards-container');
  cityCardsContainer.setAttribute('id', 'c-' + provinceId);
  cities.forEach((city) => {
   const cityCard = document.createElement('div');
   cityCard.classList.add('city-card', 'd-flex', 'justify-content-between');
   cityCard.setAttribute('data-dismiss', 'modal');
   cityCard.setAttribute('data-city-id', city.id);
   cityCard.setAttribute('aria-label', 'Close');
   const cityLink = document.createElement('a');
   cityLink.href = '#';
   cityLink.classList.add(
    'text-decoration-none',
    'text-dark',
    'fw-light',
    'my-city-name',
   );
   cityLink.textContent = city.name;
   const arrowIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
   );
   arrowIcon.setAttribute('fill', '#c4c4c4');
   arrowIcon.setAttribute('viewBox', '0 0 24 24');
   arrowIcon.classList.add('drdr-icon', 'slider-arrow-next');
   arrowIcon.setAttribute('width', '20');
   arrowIcon.setAttribute('height', '20');
   const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
   path.setAttribute(
    'd',
    'M15 18.5h-.006a.47.47 0 0 1-.344-.15l-6-6a.48.48 0 0 1-.001-.7l6-6a.495.495 0 0 1 .7.7L9.709 12l5.64 5.65a.48.48 0 0 1 .001.7.47.47 0 0 1-.344.15H15z',
   );
   arrowIcon.appendChild(path);
   cityCard.appendChild(cityLink);
   cityCard.appendChild(arrowIcon);
   cityCardsContainer.appendChild(cityCard);
  });
  myCityContent.appendChild(cityCardsContainer);
 }
 fetchCitiesFromDatabase();
}
// جستجو در لیست شهرهای فیلتر شده بر اساس استان
my_txt_search_input.on('input', function () {
 let searchValue = $(this).val().toLowerCase();
 if (searchValue === '') {
  // اگر ورودی جستجو خالی باشد، تمام شهرهای استان انتخاب شده را نمایش بده
  displayCities(filteredCities);
 } else {
  // فیلتر کردن شهرها بر اساس مقدار جستجو
  let filteredResults = filteredCities.filter((city) =>
   city.name.toLowerCase().includes(searchValue),
  );
  displayCities(filteredResults);
 }
});
function hideShowElements(isCitySelected) {
 city_cards.toggleClass('d-none', !isCitySelected);
 town_input_modal.toggleClass('d-none', isCitySelected);
 city_input_modal.toggleClass('d-none', !isCitySelected);
 most_city_search.toggleClass('d-none', isCitySelected);
 town_list_txt.toggleClass('d-none', isCitySelected);
 back_to_town.toggleClass('d-none', !isCitySelected);
 town_cards.toggleClass('d-none', isCitySelected);
}
// برای کلیک روی هر استان
for (let i = 0; i < 1140; i++) {
 $('#t-' + i).click(function (e) {
  choose_town_txt.text('انتخاب شهر');
  hideShowElements(true);
 });
}
// نمایش نام شهر انتخاب شده در ورودی‌ها
document.addEventListener('DOMContentLoaded', function () {
 const cityCards = document.querySelectorAll('.city-card');
 const searchInput = document.getElementById('my-txt-search-input');
 const searchInputHeader = document.getElementById(
  'my-txt-search-input-header',
 );
 const modal = $('#exampleModal-top-search-main');

 // بارگذاری نام شهر و cityId از localStorage
 const selectedCity = localStorage.getItem('selectedCity');
 const selectedCityId = localStorage.getItem('selectedCityId');

 if (selectedCity && searchInput) {
  searchInput.textContent = selectedCity; // یا innerText بسته به نیاز
  searchInput.dataset.cityId = selectedCityId;
 }
 if (selectedCity && searchInputHeader) {
  searchInputHeader.textContent = selectedCity; // یا innerText بسته به نیاز
  searchInputHeader.dataset.cityId = selectedCityId;
 }

 cityCards.forEach((card) => {
  $(document).on('click', '.city-card', function (event) {
   event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
   const cityName = this.dataset.cityName || event.target.textContent; // اگر cityName موجود نبود از متن استفاده میکنیم
   const cityId = this.dataset.cityId;

   // ذخیره نام شهر و cityId در localStorage
   localStorage.setItem('selectedCity', cityName);
   localStorage.setItem('selectedCityId', cityId);

   let elements = document.querySelectorAll(
    '#my-txt-search-input, #my-txt-search-input-header',
   );
   elements.forEach((element) => {
    if (element) {
     element.textContent = cityName; // از cityName برای نمایش استفاده میکنیم
     element.dataset.cityId = cityId; // تنظیم cityId
    }
    console.log(cityName);
    $('#exampleModal-top-search-main').css({ display: 'none' });
    $('.modal-backdrop.show').css({ '--bs-backdrop-opacity': '0' });
    $('.modal-backdrop').css({ position: 'static' });
   });
  });
 });
});
