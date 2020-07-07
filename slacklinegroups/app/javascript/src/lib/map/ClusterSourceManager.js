/**
 * Manages the creation of any cluster sources for the map. Transforms
 * basic group objects to map features that will belong to the source
 * being created
 */
class ClusterSourceManager
{
  static get CLUSTER_SIZE () { return 35; }

  /**
   * @param {mapboxgl.Map} map 
   */
  constructor(map) {
    this.map = map;
  }

  /**
   * Creates a source using a collection of groups and uses sourceId as
   * the unique identifier
   *
   * @param {string} sourceId 
   * @param {Array} groups a collection of groups fetched from the /groups endpoint
   */
  createSource(sourceId, groups) {
    this.map.addSource(sourceId, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: this._createFeatures(groups)
      },
      cluster: true,
      clusterRadius: ClusterSourceManager.CLUSTER_SIZE
    });
  }

  _createFeatures(groups) {
    return groups.map((group) => ({
      'type': 'Feature',
      'properties': {
        'title': group.name,
        'type': this._formatGroupType(group.type),
        'link': group?.info.link,
        'is_regional': group?.info.is_regional
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          group.location.lon,
          group.location.lat
        ]
      }
    }));
  }

  _formatGroupType (type) {
    return type.replace('_', ' ');
  }
}

export default ClusterSourceManager;