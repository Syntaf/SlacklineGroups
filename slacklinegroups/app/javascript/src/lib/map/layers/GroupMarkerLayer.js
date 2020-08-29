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
  static get FLY_TO_GROUP () { return 'flyToGroup'; }
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
    if (this.groupTile) this._removeGroupTile();

    const feature = event.features[0];
    const lngLat = [feature.properties.lng, feature.properties.lat];

    if (this.isCoordinateInView(map, lngLat) && this.hasSufficientZoomLevel(map)) {
      this._createGroupTile(map, lngLat, feature.properties);
    }

    map.flyTo(
      {
        center: lngLat,
        offset: [0, 200],
        speed: 2,
        zoom: this.GROUP_VIEW_ZOOM
      },
      {
        source: this.layerId,
        lngLat: lngLat,
        properties: feature.properties
      }
    );

    this._updateUrl(`/groups/${feature.properties.slug}`);
  }

  handleZoomEnd(map, event) {
    if (!('source' in event) || event.source !== this.layerId) return;

    const { lngLat, properties } = event;

    this._createGroupTile(map, lngLat, properties);
  }

  handleMouseEnter(map, _event) {
    map.getCanvas().style.cursor = 'pointer';
  }

  handleMouseLeave(map, _event) {
    map.getCanvas().style.cursor = '';
  }

  _createGroupTile (map, lngLat, properties) {
    const { title, type, link } = properties;
    
    this.groupTile = new mapboxgl.Popup({ offset: 15, maxWidth: '440px' })
      .setLngLat(lngLat)
      .setHTML(ReactDOMServer.renderToString(
        <GroupTile groupName={title} groupType={type} link={link} />
      ))
      .addTo(map);

    this.groupTile.on('close', () => { this._updateUrl('/'); });

    map.once(GroupMarkerLayer.CLEAR_GROUP_TILES, this._removeGroupTile.bind(this));
  }

  _removeGroupTile() {
    this.groupTile.remove();
    this._updateUrl('/');
  }

  _updateUrl(url) {
    window.history.replaceState({}, '', url);
  }

  /**
   * Determines if a LngLat pair lies within the current visual bounds of the map1
   * @param {mapboxgl.Map} map 
   * @param {Array} lngLat 
   */
  isCoordinateInView (map, lngLat) {
    return map.getBounds().contains(lngLat);
  }

  /**
   * Defines whether the click event will zoom or create a popup immediately
   */
  hasSufficientZoomLevel (map) {
    return map.getZoom() >= 7;
  }
}

export default GroupMarkerLayer;