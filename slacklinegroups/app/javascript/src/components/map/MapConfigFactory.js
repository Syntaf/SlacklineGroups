export default {
  ACCESS_TOKEN: 'pk.eyJ1Ijoic3ludGFmIiwiYSI6ImNqM2Z2bzZhbTAxZWwycW4wcmI5cjk4MW0ifQ.YOd5yuJfLARC2oOfqY-KoA',
  CLUSTER_SIZE: 35,

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
  },

  getClusterPaintConfig () {
    return {
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
    };
  },
};