# Neshan Map Platform --- پلتفرم نقشه نشان -- mapbox-gl SDK

<br />

## Quick Start --- راه‌اندازی سریع

- create account and generate an API-KEY for web sdk : [Neshan Platform Website](https://platform.neshan.org/)

- add js/css

  - using CDN (without bundler)

    nmp_mapboxgl obj will be available in window

    ```html
    <!-- better to be added into head -->
    <link
     rel="stylesheet"
     href="https://static.neshan.org/sdk/mapboxgl/v1.13.2/neshan-sdk/v1.1.1/index.css"
    />

    <!-- make sure this script is loaded before initializing map (using defer, onload event, etc) -->
    <script src="https://static.neshan.org/sdk/mapboxgl/v1.13.2/neshan-sdk/v1.1.1/index.js"></script>
    ```

  - using bundlers (webpack, rollup)

    ```shell
    // using npm
    npm i @neshan-maps-platform/mapbox-gl

    // using yarn
    yarn add @neshan-maps-platform/mapbox-gl
    ```

    import assets

    ```javascript
    import '@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css';
    import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';
    // or
    require('@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css');
    const nmp_mapboxgl = require('@neshan-maps-platform/mapbox-gl');
    ```

- add map wrapper element

  ```html
  <div id="map"></div>
  ```

- define proper width/height for your wrapper

  ```css
  body {
   height: 100vh;
   width: 100vw;
   margin: 0;
  }

  #map {
   height: 100%;
   width: 100%;
  }
  ```

- initialize Map
  ```javascript
  const map = new nmp_mapboxgl.Map({
   mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
   container: 'map',
   zoom: 11,
   pitch: 0,
   center: [51.389, 35.6892],
   minZoom: 2,
   maxZoom: 21,
   trackResize: true,
   mapKey: '[YOUR_NESHAN_PLATFORM_WEB_MAP_API_KEY]',
   poi: false,
   traffic: false,
  });
  ```

## ATTENTION

The nmp_mapboxgl obj is the same as mapboxgl obj defined in mapboxgl-js-v1.13.2 docs.

It only has some extra modules that make it possible to:

- load Neshan Platform Maps
- use custom features like mapTypeSwitcher (more cool stuff will be released soon)

## Docs and Samples --- مستندات و مثال ها

لطفا به آدرس های زیر مراجعه کنید

[Neshan Platform Website ( https://platform.neshan.org )](https://platform.neshan.org)

[mapboxgl-js map api ( https://docs.mapbox.com/mapbox-gl-js/api/map )](https://docs.mapbox.com/mapbox-gl-js/api/map)

[mapboxgl-js examples ( https://docs.mapbox.com/mapbox-gl-js/example )](https://docs.mapbox.com/mapbox-gl-js/example)
