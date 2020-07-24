import ClusterLayer from './layers/ClusterLayer';
import ClusterLabelLayer from './layers/ClusterLabelLayer';
import GroupMarkerLayer from './layers/GroupMarkerLayer';

import ClusterSourceManager from './ClusterSourceManager';
import LayerManager from './LayerManager';
import Layer from './layers/Layer';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

/**
 * Manages the creation of various visualization layers on the map as well as all
 * interactions that may occur within the map's canvas.
 */
class MapManager
{
  static get defaultView () { return { center: [0, 35], zoom: 1.75 }; }
  get SOURCE_ID() { return 'group-clusters'; }

  /**
   * Initializes a map manager instance for creating group layers and handling interactions
   *
   * @param {React.MutableRefObject} mapContainer 
   * @param {ClusterSourceManager} sourceManager
   * @param {LayerManager} layerManager
   */
  constructor(map, sourceManager, layerManager) {
    this.map = map;
    this.sourceManager = sourceManager;
    this.layerManager = layerManager;

    this.map.on('load', () => { this.map.resize() });
  }

  /**
   * Visualize and hook in all necessary UI interactions on the map
   *
   * @param {Array} groups
   * @returns {MapManager}
   */
  visualize(groups) {
    this.sourceManager.createSource(this.SOURCE_ID, groups);

    return this;
  }

  test() {
    this.map.addControl((new MapboxDraw({
      displayControlsDefault: false,
      defaultMode: 'draw_point',
      controls: { point: 'point' }
    })), 'top-left');
  }

  /**
   * Visualize the map using the given layer
   * 
   * @param {Layer} layer
   * @returns {MapManager}
   */
  with(layer) {
    this.layerManager.addLayer(this.SOURCE_ID, layer);

    return this;
  }

  resetView() {
    this.map.fire(GroupMarkerLayer.CLEAR_GROUP_TILES);
    this.map.flyTo({...MapManager.defaultView, speed: 2});
  }
}

export default MapManager;