import React, { useState, useEffect, useRef } from 'react';

import MapManagerFactory from './MapManagerFactory';

const Map = ({ groups }) => {
  const [mapManager, setMapManager] = useState(null);
  const mapContainer = useRef(null);

  /** Create and render the map without any visualizations initially */
  useEffect(() => { if (!mapManager) setMapManager(MapManagerFactory.create(mapContainer)); }, [mapManager]);

  /** Add necessary sources, layers, and interaction handlers once groups have been received */
  useEffect(() => { if (mapManager && groups.length) mapManager.visualize(groups) }, [mapManager, groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;