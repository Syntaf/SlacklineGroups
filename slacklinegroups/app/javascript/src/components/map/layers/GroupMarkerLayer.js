import Layer from './Layer';

class GroupMarkerLayer extends Layer
{
  get layerId () { return 'group-marker-layer'; }
  get subscribedEvents () { return []; }

  config (sourceId) {
    return {
      'id': this.layerId,
      'type': 'symbol',
      'source': sourceId,
      'filter': ['!', ['has', 'point_count']],
      'layout': {
        'icon-image': 'slackgroup',
        'icon-size': 1
      }
    }
  }
}

export default GroupMarkerLayer;