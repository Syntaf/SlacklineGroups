import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import MapConfigFactory from './MapConfigFactory';

const Map = props => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3ludGFmIiwiYSI6ImNqM2Z2bzZhbTAxZWwycW4wcmI5cjk4MW0ifQ.YOd5yuJfLARC2oOfqY-KoA';

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 5
      });

      setMap(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (map && props.groups.length) {
      map.on('load', () => {
        map.resize();

        map.addSource('groups', MapConfigFactory.createFeatures(props.groups));
      });
      
    }
  }, [map, props.groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;