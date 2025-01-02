import '../assets/styles/controls.scss';
import SDKMap from './Map';
/**
 * Basic custom mapbox control
 */
declare class Control {
 map: SDKMap;
 container: HTMLDivElement;
 onAdd(map: SDKMap): HTMLDivElement;
 onRemove(): void;
}
/**
 * Traffic control with html dom tree created and appended to it's container.
 */
export declare class TrafficControl extends Control {
 onAdd(map: SDKMap): HTMLDivElement;
}
/**
 * Poi control with html dom tree created and appended to it's container.
 */
export declare class PoiControl extends Control {
 onAdd(map: SDKMap): HTMLDivElement;
}
/**
 * Map types switcher control with html dom tree created and appended to it's container.
 */
export declare class MapTypeControl extends Control {
 onAdd(map: SDKMap): HTMLDivElement;
 onRemove(): void;
 /**
  * Creates toggle button that handles overlay toggling.
  */
 createToggleButton(map: SDKMap): HTMLDivElement;
 /**
  * Creates overlay containing style and layer selections.
  */
 createOverlay(map: SDKMap): HTMLDivElement;
 /**
  * Creates a wrapper div for style tiles and their classed in overlay element.
  */
 createStylesWrapper(map: SDKMap): HTMLDivElement;
 /**
  * Creates a wrapper div for layers tiles and their classed in overlay element.
  */
 createLayersWrapper(map: SDKMap): HTMLDivElement;
 /**
  *
  * @param {String} imgSrc - Source of the desired image for tile.
  * @param {String} descText - Text for tile description (e.g. it's name).
  * @param {Function} clickEventCallback - Callback after clicking on tile.
  * @param {String[]} classList - Array of classes for tile.
  * @returns {HTMLDivElement}
  */
 tileGenerator(
  imgSrc: string,
  descText: string,
  clickEventCallback: EventListenerOrEventListenerObject,
  classList: string[],
 ): HTMLDivElement;
}
export {};
