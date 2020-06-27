import ClusterLayer from './layers/ClusterLayer';
import ClusterLabelLayer from './layers/ClusterLabelLayer';
import GroupMarkerLayer from './layers/GroupMarkerLayer';

import ClusterSourceManager from './ClusterSourceManager';
import LayerManager from './LayerManager';

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
   */
  visualize(groups) {
    this.sourceManager.createSource(this.SOURCE_ID, groups);

    this.layerManager.addLayer(this.SOURCE_ID, new ClusterLayer());
    this.layerManager.addLayer(this.SOURCE_ID, new ClusterLabelLayer());
    this.layerManager.addLayer(this.SOURCE_ID, new GroupMarkerLayer());
  }

  resetView() {
    this.map.flyTo({...MapManager.defaultView, speed: 2});
  }
}

export default MapManager;