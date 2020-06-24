import Layer from "./Layer";
import ClusterSourceManager from '../managers/ClusterSourceManager';

class ClusterLayer extends Layer
{
  get layerId () { return 'cluster-layer'; }
  get subscribedEvents () { return [ Layer.CLICK, Layer.ZOOMEND ]; }

  config (sourceId) {
    return {
      'id': this.layerId,
      'type': 'circle',
      'source': sourceId,
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
            [0, ClusterSourceManager.CLUSTER_SIZE],
            [5, ClusterSourceManager.CLUSTER_SIZE],
            [10, ClusterSourceManager.CLUSTER_SIZE],
            [25, ClusterSourceManager.CLUSTER_SIZE],
            [50, ClusterSourceManager.CLUSTER_SIZE],
          ]
        }
      }
    }
  }

  handleClick (map, event) {
    map.flyTo({
      center: [0, 0]
    }, {source: this.layerId});
  }

  handleZoomEnd(map, event) {
    if (event.source === this.layerId) {
      console.log('hello there!');
    }
  }
}

export default ClusterLayer;