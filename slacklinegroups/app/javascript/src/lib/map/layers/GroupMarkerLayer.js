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
  static get CLEAR_GROUP_TILES () { return 'removeGroupTiles'; }
  get GROUP_VIEW_ZOOM () { return 12; }

  get layerId () { return 'group-marker-layer'; }
  get subscribedEvents () { return [ Layer.CLICK, Layer.ZOOMEND, Layer.MOUSE_ENTER, Layer.MOUSE_LEAVE ]; }
  get transitionProperties () { return []; }

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
    const feature = event.features[0];
    const lngLat = [feature.properties.lng, feature.properties.lat];
    const desiredZoom = this._calculateZoomTo(map);

    if (map.getZoom() === desiredZoom)
      this._createGroupTile(map, lngLat, feature.properties);
    else
      map.flyTo(
        {
          center: lngLat,
          offset: [0, 200],
          speed: 2,
          zoom: desiredZoom
        },
        {
          source: this.layerId,
          lngLat: lngLat,
          properties: feature.properties
        }
      );
  }

  handleZoomEnd(map, event) {
    if (!('source' in event) || event.source !== this.layerId) return;

    const { lngLat, properties } = event;

    this._createGroupTile(map, lngLat, properties);
  }

  handleMouseEnter(map, event) {
    map.getCanvas().style.cursor = 'pointer';
  }

  handleMouseLeave(map, event) {
    map.getCanvas().style.cursor = '';
  }

  _createGroupTile (map, lngLat, properties) {
    const { title, type, link } = properties;
    
    const groupTile = new mapboxgl.Popup({ offset: 15, maxWidth: '440px' })
      .setLngLat(lngLat)
      .setHTML(ReactDOMServer.renderToString(
        <GroupTile groupName={title} groupType={type} link={link} />
      ))
      .addTo(map);

    map.once(GroupMarkerLayer.CLEAR_GROUP_TILES, () => { console.log('ok'); groupTile.remove(); });
  }

  _calculateZoomTo (map) {
    const currentZoom = map.getZoom();

    if (currentZoom > 7) return currentZoom;

    return this.GROUP_VIEW_ZOOM;
  }
}

export default GroupMarkerLayer;