import { MapboxOptions } from 'mapbox-gl';
export type MapStyleNameType =
 | 'neshanVector'
 | 'neshanVectorNight'
 | 'neshanRaster'
 | 'neshanRasterNight';
export interface MapTypePropertiesModel {
 title: string;
 styleName: string;
 img: string;
}
export type MapTypesModel = {
 [key in MapStyleNameType]: MapTypePropertiesModel;
};
export declare const mapTypeProperties: MapTypesModel;
export type MapStylesModel = {
 [key in MapStyleNameType]: MapStyleNameType;
};
export declare const mapTypes: MapStylesModel;
export type CornerPositions =
 | 'top-right'
 | 'top-left'
 | 'bottom-right'
 | 'bottom-left';
export interface ControllerOptionsModel {
 show: boolean;
 position?: CornerPositions;
}
export declare const poiControllerOptions: ControllerOptionsModel;
export declare const trafficControllerOptions: ControllerOptionsModel;
export declare const mapTypeControllerOptions: ControllerOptionsModel;
export interface MapBoxSKDOptionsModel extends MapboxOptions {
 mapKey: string;
 poi?: boolean;
 traffic?: boolean;
 scale?: number;
 mapType?: MapStyleNameType;
 poiControllerOptions?: ControllerOptionsModel;
 trafficControllerOptions?: ControllerOptionsModel;
 mapTypeControllerOptions?: ControllerOptionsModel;
 isTouchPlatform?: boolean;
}
export declare const mapOptions: Omit<MapBoxSKDOptionsModel, 'container'>;
