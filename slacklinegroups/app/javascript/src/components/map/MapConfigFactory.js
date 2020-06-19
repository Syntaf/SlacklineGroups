export default {
  ACCESS_TOKEN: 'pk.eyJ1Ijoic3ludGFmIiwiYSI6ImNqM2Z2bzZhbTAxZWwycW4wcmI5cjk4MW0ifQ.YOd5yuJfLARC2oOfqY-KoA',

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
          [0, 25],
          [5, 25],
          [10, 25],
          [25, 25],
          [50, 25],
        ]
      }
    };
  },
};