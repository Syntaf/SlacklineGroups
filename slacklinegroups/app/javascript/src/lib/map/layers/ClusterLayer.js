import Layer from "./Layer";
import ClusterSourceManager from '../ClusterSourceManager';

/**
 * Layer responsible for showing clusters of slackline groups and handling
 * interactions made on the clusters (specifically, clicks)
 */
class ClusterLayer extends Layer
{
  get layerId () { return 'cluster-layer'; }
  get subscribedEvents () { return [ Layer.CLICK, Layer.MOUSE_ENTER, Layer.MOUSE_LEAVE ]; }
  get transitionProperties () { return ['circle-opacity', 'circle-stroke-opacity']; }

  config(sourceId) {
    return {
      'id': this.layerId,
      'type': 'circle',
      'source': sourceId,
      'filter': ['has', 'point_count'],
      'paint': {
        'circle-opacity': 0,
        'circle-opacity-transition': { duration: 1000 },
        'circle-stroke-color': '#fff',
        'circle-stroke-width': 2,
        'circle-stroke-opacity': 0,
        'circle-stroke-opacity-transition': { duration: 1000 },
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

  getTransition(transitionProperty) {
    switch (transitionProperty) {
      case 'circle-opacity':
        return 0.8;
      case 'circle-stroke-opacity':
        return 1;
    }
  }

  handleClick (map, event) {
    map.flyTo({
      center: event.lngLat,
      zoom: map.getZoom() + 1.75
    });
  }

  handleMouseEnter(map, event) {
    map.getCanvas().style.cursor = 'pointer';
  }

  handleMouseLeave(map, event) {
    map.getCanvas().style.cursor = '';
  }
}

export default ClusterLayer;