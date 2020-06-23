import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import MapConfigFactory from "./MapConfigFactory";
import mapboxGl from "mapbox-gl";
import GroupTile from "./GroupTile";

export default {
  with (map) {
    this.map = map;

    return this;
  },

  handleMarkerClicks () {
    if (!this.map) throw new Error('Use with() before calling handlers');

    this.map.on('mouseenter', MapConfigFactory.MARKER_LAYER, this.setCursorToPointer.bind(this));
    this.map.on('mouseleave', MapConfigFactory.MARKER_LAYER, this.resetCursor.bind(this));
    this.map.on('click', MapConfigFactory.MARKER_LAYER, this.createPopupOnClick.bind(this));

    return this;
  },

  createPopupOnClick(clickEvent) {
    const cords = clickEvent.features[0].geometry.coordinates; 
    const {title, type, link} = clickEvent.features[0].properties;

    new mapboxGl.Popup({ offset: 15, maxWidth: '440px' })
      .setLngLat(cords)
      .setHTML(ReactDOMServer.renderToString(< GroupTile groupName={title} groupType={type} link={link} />))
      .addTo(this.map);
  },

  handleClusterClicks () {
    if (!this.map) throw new Error('Use with() before calling handlers');

    this.map.on('mouseenter', MapConfigFactory.CLUSTER_LAYER, this.setCursorToPointer.bind(this));
    this.map.on('mouseleave', MapConfigFactory.CLUSTER_LAYER, this.resetCursor.bind(this));
    this.map.on('click', MapConfigFactory.CLUSTER_LAYER, this.zoomToCluster.bind(this));

    return this;
  },

  zoomToCluster (clickEvent) {
    const pointCount = clickEvent.features[0].properties.point_count;
    const cords = clickEvent.features[0].geometry.coordinates;

    this.map.flyTo({
      center: clickEvent.lngLat,
      zoom: this.map.getZoom() + 2
    });
  },

  setCursorToPointer () {
    this.map.getCanvas().style.cursor = 'pointer';
  },

  resetCursor () {
    this.map.getCanvas().style.cursor = '';
  },

  
};
