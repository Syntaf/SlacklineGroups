import Layer from "./Layer";
import ClusterSourceManager from '../managers/ClusterSourceManager';

class ClusterLayer extends Layer
{
  get layerId () { return 'cluster-layer'; }

  config (sourceId) {
    return {
      'id': 'clusters',
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
}

export default ClusterLayer;