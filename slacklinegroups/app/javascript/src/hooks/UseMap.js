import { useState, useRef, useEffect } from 'react';
import MapManagerFactory from '../lib/map/MapManagerFactory';

/**
 * React hook for rendering a map onto a page. Returns a reference that must
 * be forwarded to a component via ref={mapRef}, as well as a manager for the map
 * which can be used to visualize & add layers to a map.
 * 
 * @returns {Array}
 */
const useMap = () => {
  const mapRef = useRef(null);
  const [mapManager, setMapManager] = useState(null);

  useEffect(() => { setMapManager(MapManagerFactory.create(mapRef)) }, []);

  return [mapRef, mapManager];
};

export default useMap;
