import React, { useState, useEffect, useRef } from 'react';

import MapConfigFactory from './MapConfigFactory';
import MapInteractions from './MapInteractions';

const Map = ({ groups }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = MapConfigFactory.createMap(mapContainer); 

      map.on('load', () => {
        map.resize();
      });

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
        .createGroupMarkers(map)
      
      MapInteractions.with(map)
        .handleMarkerClicks()
        .handleClusterClicks();
    };

    if (map && groups.length) addGroupsToMap(groups, map);
  }, [map, groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;