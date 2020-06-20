import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import MapConfigFactory from './MapConfigFactory';

const Map = ({ groups }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken = MapConfigFactory.ACCESS_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/syntaf/ckbmvh7lj1slr1inwsw3c4k4t',
        center: [0, 35],
        zoom: 1.75
      });

      map.on('load', () => { map.resize(); });

      setMap(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    const addGroupsToMap = (groups, map) => {
      
      MapConfigFactory
        .initializeSource(map, groups)
        .createClusters(map)
        .createClusterLabels(map)
        .createGroupPoints(map);

    };
    if (map && groups.length) addGroupsToMap(groups, map);
  }, [map, groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;