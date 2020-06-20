export default {
  ACCESS_TOKEN: 'pk.eyJ1Ijoic3ludGFmIiwiYSI6ImNqM2Z2bzZhbTAxZWwycW4wcmI5cjk4MW0ifQ.YOd5yuJfLARC2oOfqY-KoA',
  CLUSTER_SIZE: 35,
  SOURCE_ID: 'group-clusters',

  /**
   * Initializes the map source with groups fetched during page-load. Additionally
   * configures any additional map assets like group markers
   *
   * @param {Object} map 
   * @param {Array} groups
   */
  initializeSource (map, groups) {
    const features = this.createFeatures(groups);

    map.addSource(this.SOURCE_ID, {
      ...features,
      'cluster': true,
      'clusterRadius': this.CLUSTER_SIZE
    });

    return this;
  },

  /**
   * Creates a map layer containing clusters of groups
   *
   * @param {Object} map 
   */
  createClusters (map) {
    map.addLayer({
      'id': 'clusters',
      'type': 'circle',
      'source': this.SOURCE_ID,
      'filter': ['has', 'point_count'],
      'paint': {
        'circle-opacity': 0.8,
        'circle-stroke-color': '#fff',
        'circle-stroke-width': 2,
        'circle-color': {
          'property': 'point_count',
          'type': 'interval',
          'stops': [
            [0, '#D9F3EC'],
            [5, '#E2F2DA'],
            [10, '#E7D1CD'],
            [25, '#D3C0DB'],
            [50, '#B3CFCF'],
          ]
        },
        'circle-radius': {
          'property': 'point_count',
          'type': 'interval',
          'stops': [
            [0, this.CLUSTER_SIZE],
            [5, this.CLUSTER_SIZE],
            [10, this.CLUSTER_SIZE],
            [25, this.CLUSTER_SIZE],
            [50, this.CLUSTER_SIZE],
          ]
        }
      }
    });

    return this;
  },

  /**
   * Creates labels for displaying the count of groups within clusters
   *
   * @param {Object} map 
   */
  createClusterLabels (map) {
    map.addLayer({
      'id': 'cluster-labels',
      'type': 'symbol',
      'source': this.SOURCE_ID,
      'filter': ['has', 'point_count'],
      'layout': {
        'text-font': ['League Mono Regular'],
        'text-field': '{point_count_abbreviated}',
        'text-size': 16
      },
      'paint': {
        'text-color': '#272727'
      }
    });

    return this;
  },

  /**
   * Creates a layer of markers for each individual group to be displayed
   * when the group is no longer clustered together with other groups.
   *
   * @param {Object} map
   */
  createGroupPoints (map) {
    map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'group-clusters',
      'filter': ['!', ['has', 'point_count']],
      'layout': {
        'icon-image': 'slackgroup',
        'icon-size': 1
      }
    });

    return this;
  },

  /**
   * Converts an array of slackline groups to Mapbox features
   *
   * @param {Array} groups 
   */
  createFeatures (groups) {
    const features = groups.map((group) => ({
        'type': 'Feature',
        'properties': {
          'title': group.name,
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

    return {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': features
      }
    }
  }
};