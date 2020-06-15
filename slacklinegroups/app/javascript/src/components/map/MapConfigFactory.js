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
  }
};