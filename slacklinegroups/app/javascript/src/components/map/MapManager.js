import ClusterLayer from './layers/ClusterLayer';
import ClusterLabelLayer from './layers/ClusterLabelLayer';
import GroupMarkerLayer from './layers/GroupMarkerLayer';

/**
 * Manages the creation of various visualization layers on the map as well as all
 * interactions that may occur within the map's canvas.
 */
class MapManager
{
  get SOURCE_ID() { return 'group-clusters'; }

  /**
   * Initializes a map manager instance for creating group layers and handling interactions
   *
   * @param {React.MutableRefObject} mapContainer 
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


}

export default MapManager;