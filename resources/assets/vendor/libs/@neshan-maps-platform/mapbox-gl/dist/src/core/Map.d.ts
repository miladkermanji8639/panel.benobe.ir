import {
 MapBoxSKDOptionsModel,
 MapStyleNameType,
 CornerPositions,
 ControllerOptionsModel,
} from '../parameters/parameters';
import { AnyLayer, AnySourceData, Style } from 'mapbox-gl';
export type PoiTrafficTileType = 'poi' | 'traffic';
export type SetStyleOptionsModel = {
 diff?: boolean | undefined;
 localIdeographFontFamily?: string | undefined;
};
/**
 * customized mapboxgl Map class
 *
 * @constructor
 */
export default class SDKMap extends mapboxgljs.Map {
 #private;
 /**
  * Object of maptypes with the same key and value
  */
 static mapTypes: Readonly<import('../parameters/parameters').MapStylesModel>;
 /**
  * Constructor options
  */
 static options: Readonly<Omit<MapBoxSKDOptionsModel, 'container'>>;
 /**
  * Map Html Element
  */
 get container(): any;
 /**
  * If map is loaded.
  */
 get mounted(): boolean;
 /**
  * Is it a touch platform or desktop?
  */
 get isTouchPlatform(): boolean;
 /**
  * Updates class and controller shape after device type change.
  */
 set isTouchPlatform(value: boolean);
 /**
  * Current type of the map.
  */
 get mapType(): MapStyleNameType;
 /**
  * Traffic Layer Display Status
  */
 get trafficLayer(): boolean;
 /**
  * Poi Layer Display Status
  */
 get poiLayer(): boolean;
 /**
  * Poi Controller Display Status
  */
 get poiControllerStatus(): ControllerOptionsModel;
 /**
  * Traffic Controller Display Status
  */
 get trafficControllerStatus(): ControllerOptionsModel;
 get mapTypeControllerStatus(): ControllerOptionsModel;
 /**
  * Creates the map.
  * Sets the map type.
  * Sets the device type and the controllers based on that.
  * Scales the map if necessary.
  * Sets api keys to the localStorage.
  * @param options
  * @constructor
  * @extends mapboxgljs.Map
  */
 constructor(options: MapBoxSKDOptionsModel);
 addSource(id: string, source: AnySourceData): this;
 removeSource(id: string): this;
 addLayer(layer: AnyLayer): this;
 removeLayer(id: string): this;
 /**
  * Sets type of displaying map
  * and handles what UI changes should take place afterward
  */
 setStyle(style: Style | string, options?: SetStyleOptionsModel): this;
 setMapType(mapType?: MapStyleNameType, options?: SetStyleOptionsModel): void;
 getScale(): number;
 setScale(value: number): void;
 /**
  * Adds traffic control
  * @param {CornerPositions} position - Desired Position to add the control to.
  */
 addTrafficControl(position: CornerPositions): void;
 /**
  * Removes the traffic control from map
  */
 removeTrafficControl(): void;
 /**
  * Adds poi control
  * @param {CornerPositions} position - Desired Position to add the control to.
  */
 addPoiControl(position: CornerPositions): void;
 /**
  * Removes the poi control from map
  */
 removePoiControl(): void;
 /**
  * Adds map types switcher control
  * @param {CornerPositions} position - Desired Position to add the control to.
  */
 addMapTypeControl(position: CornerPositions): void;
 /**
  * Removes the map types switcher control from map
  */
 removeMapTypeControl(): void;
 /**
  * Toggles the traffic layer whether it should be displayed or not in case of not sending any value.
  * Or sets the traffic layer as what the sent value is.
  * @param {Boolean} value
  */
 toggleTrafficLayer(value?: boolean): void;
 /**
  * Toggles the poi layer whether it should be displayed or not in case of not sending any value.
  * Or sets the poi layer as what the sent value is.
  * @param {Boolean} value
  */
 togglePoiLayer(value?: boolean): void;
 /**
  * Changes map type switcher tile image and text,
  * based on corresponding style name,
  * for desktop view.
  * @param {MapStyleNameType } styleName
  */
 setDesktopLayersTileProps(styleName?: MapStyleNameType): void;
 /**
  * handles how and whether map type switcher popup should be displayed or hidden,
  * based on given value and device type.
  * @param {Boolean} value
  */
 toggleMapTypeSwitcherPopup(value?: boolean): void;
 /**
  * Sets the position and display status of map types switcher controller
  * @param {ControllerOptionsModel} mapTypeControllerOptions
  */
 setMapTypeControlOptions(
  mapTypeControllerOptions?: ControllerOptionsModel,
 ): void;
}
