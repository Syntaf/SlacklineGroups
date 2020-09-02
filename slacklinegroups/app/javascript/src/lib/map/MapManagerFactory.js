import mapboxgl from 'mapbox-gl';

import MapManager from './MapManager';
import ClusterSourceManager from './ClusterSourceManager';
import LayerManager from './LayerManager';

/**
 * Factory class for creating instances of MapManager to be used in a react component
 */
class MapManagerFactory
{
  static get ACCESS_TOKEN() { return 'pk.eyJ1Ijoic3ludGFmIiwiYSI6ImNqM2Z2bzZhbTAxZWwycW4wcmI5cjk4MW0ifQ.YOd5yuJfLARC2oOfqY-KoA'; }
  static get STYLE_URL() { return 'mapbox://styles/syntaf/ckdwal60b1odw1aqmo9e5ag0n?optimize=true'; }

  /**
   * Initializes and instance of MapManager along with it's dependencies
   *
   * @param {React.MutableRefObject} mapContainer
   */
  static create(mapContainer, mapCenter, zoomLevel) {
    mapboxgl.accessToken = MapManagerFactory.ACCESS_TOKEN;
  
    const customView = {};

    if (mapCenter) customView.center = mapCenter;
    if (zoomLevel) customView.zoom = zoomLevel;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: MapManagerFactory.STYLE_URL,
      ...Object.assign(MapManager.defaultView, customView)
    });

    return new MapManager(
      map,
      new ClusterSourceManager(map),
      new LayerManager(map)
    );
  }
}


export default MapManagerFactory;