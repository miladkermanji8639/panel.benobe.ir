/**
 * Logistic Fleet
 */
('use strict');

import '@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';

(function () {
 //Selecting Sidebar Accordion for perfect scroll
 var sidebarAccordionBody = $('.logistics-fleet-sidebar-body');

 //Perfect Scrollbar for Sidebar Accordion
 if (sidebarAccordionBody.length) {
  new PerfectScrollbar(sidebarAccordionBody[0], {
   wheelPropagation: false,
   suppressScrollX: true,
  });
 }

 //!YOUR_NESHAN_ACCESS_TOKEN_HERE!
 var token = 'web.66443c7abc6f47238f1da31d3756713c';

 const map = new nmp_mapboxgl.Map({
  mapType: document
   .getElementsByTagName('html')[0]
   .classList.contains('dark-style')
   ? nmp_mapboxgl.Map.mapTypes.neshanVectorNight
   : nmp_mapboxgl.Map.mapTypes.neshanVector,
  container: 'map',
  zoom: 11,
  pitch: 0,
  center: [51.37549646004389, 35.7450415883314],
  minZoom: 2,
  maxZoom: 21,
  trackResize: true,
  mapKey: token,
  poi: true,
  traffic: false,
  mapTypeControllerStatus: {
   show: true,
   position: 'bottom-left',
  },
 });

 const geojson = {
  type: 'FeatureCollection',
  features: [
   {
    type: 'Feature',
    properties: {
     iconSize: [20, 42],
     message: '1',
    },
    geometry: {
     type: 'Point',
     coordinates: [51.35652981610107, 35.79110483776484],
    },
   },
   {
    type: 'Feature',
    properties: {
     iconSize: [20, 42],
     message: '2',
    },
    geometry: {
     type: 'Point',
     coordinates: [51.28186648647485, 35.71586131209857],
    },
   },
   {
    type: 'Feature',
    properties: {
     iconSize: [20, 42],
     message: '3',
    },
    geometry: {
     type: 'Point',
     coordinates: [51.33431135866669, 35.69948247397586],
    },
   },
   {
    type: 'Feature',
    properties: {
     iconSize: [20, 42],
     message: '4',
    },
    geometry: {
     type: 'Point',
     coordinates: [51.42041184764934, 35.75664809079808],
    },
   },
  ],
 };

 // Add markers to the map and thier functionality
 for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement('div');
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  el.className = 'marker';
  el.insertAdjacentHTML(
   'afterbegin',
   '<img src="' +
    assetsPath +
    'img/illustrations/fleet-car.png" alt="Fleet Car" width="20" class="rounded-3" id="carFleet-' +
    marker.properties.message +
    '">',
  );
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.cursor = 'pointer';

  // Add markers to the map.
  new nmp_mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

  // Select Accordion for respective Marker
  const element = document.getElementById('fl-' + marker.properties.message);

  // Select Car for respective Marker
  const car = document.getElementById('carFleet-' + marker.properties.message);

  element.addEventListener('click', function () {
   const focusedElement = document.querySelector('.marker-focus');

   if (Helpers._hasClass('active', element)) {
    //fly to location
    map.flyTo({
     center:
      geojson.features[marker.properties.message - 1].geometry.coordinates,
     zoom: 16,
    });
    // Remove marker-focus from other marked cars
    focusedElement && Helpers._removeClass('marker-focus', focusedElement);
    Helpers._addClass('marker-focus', car);
   } else {
    //remove marker-focus if not active
    Helpers._removeClass('marker-focus', car);
   }
  });
 }

 //For selecting default car location
 const defCar = document.getElementById('carFleet-1');
 Helpers._addClass('marker-focus', defCar);
})();
