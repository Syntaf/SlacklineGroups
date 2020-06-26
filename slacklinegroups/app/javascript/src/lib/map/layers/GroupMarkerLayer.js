import Layer from './Layer';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import mapboxgl from 'mapbox-gl';
import GroupTile from '../../../components/map/GroupTile';

/**
 * Layer responsible for showing individual group markers on the map which
 * do not reside in any clusters.
 * 
 * Clicking on a marker in this layer will generate a map#flyTo event, and
 * create a popup above the marker once the flying has concluded.
 */
class GroupMarkerLayer extends Layer
{
  get GROUP_VIEW_ZOOM () { return 12; }

  get layerId () { return 'group-marker-layer'; }
  get subscribedEvents () { return [ Layer.CLICK, Layer.ZOOMEND ]; }

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

  handleClick(map, event) {
    const cords = event.features[0].geometry.coordinates;
    const properties = event.features[0].properties;
    const desiredZoom = this._calculateZoomTo(map);

    map.flyTo({
      center: cords,
      offset: [0, 200],
      speed: 2,
      zoom: desiredZoom
    }, { source: this.layerId, cords: cords, properties: properties});
  }

  handleZoomEnd(map, event) {
    if (!('source' in event) || event.source !== this.layerId) return;

    const { cords, properties } = event;
    const { title, type, link } = properties;

    new mapboxgl.Popup({ offset: 15, maxWidth: '440px' })
      .setLngLat(cords)
      .setHTML(ReactDOMServer.renderToString(
        <GroupTile groupName={title} groupType={type} link={link} />
      ))
      .addTo(map);
  }

  _calculateZoomTo (map) {
    const currentZoom = map.getZoom();

    if (currentZoom > 7) return currentZoom;

    return this.GROUP_VIEW_ZOOM;
  }
}

export default GroupMarkerLayer;