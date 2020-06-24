import Layer from './Layer';

class ClusterLabelLayer extends Layer
{
  get layerId () { return 'cluster-label-layer'; }
  get subscribedEvents () { return []; }

  config(sourceId) {
    return {
      'id': this.layerId,
      'type': 'symbol',
      'source': sourceId,
      'filter': ['has', 'point_count'],
      'layout': {
        'text-font': ['League Mono Regular'],
        'text-field': '{point_count_abbreviated}',
        'text-size': 16
      },
      'paint': {
        'text-color': '#272727'
      }
    }
  }
}

export default ClusterLabelLayer;