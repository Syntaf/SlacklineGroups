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

    this.map.on('click', MapConfigFactory.MARKER_LAYER, this.createPopupOnClick.bind(this));

    return this;
  },

  createPopupOnClick(clickEvent) {
    const cords = clickEvent.features[0].geometry.coordinates;

    new mapboxGl.Popup()
      .setLngLat(cords)
      .setHTML(ReactDOMServer.renderToString(< GroupTile />))
      .addTo(this.map);
  },

  handleClusterClicks () {
    return this;
  },
};
