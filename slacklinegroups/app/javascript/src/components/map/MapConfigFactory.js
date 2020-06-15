export default {
  /**
   * Converts an array of slackline groups to Mapbox features
   *
   * @param {Array} groups 
   */
  createFeatures (groups) {
    const features = groups.map((group) => ({
        'type': 'Feature',
        'properties': {
          'title': group.name
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [
            group.location.lat,
            group.location.lon
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
      'circle-color': {
        'property': 'point_count',
        'type': 'interval',
        'stops': [
          [0, '#E9E308'],
          [5, '#BD64DB'],
          [10, '#1B8328'],
          [25, '#E96619'],
          [50, '#E9160C'],
        ]
      },
      'circle-radius': {
        'property': 'point_count',
        'type': 'interval',
        'stops': [
          [0, 15],
          [5, 20],
          [10, 20],
          [25, 30],
          [50, 30],
        ]
      }
    };
  },
};