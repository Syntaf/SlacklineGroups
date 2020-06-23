class ClusterSourceManager
{
  static get CLUSTER_SIZE () { return 35; }

  constructor(map) {
    this.map = map;
  }

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
        'link': group.info.link,
        'is_regional': group.info.is_regional
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