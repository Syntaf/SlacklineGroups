import Layer from './layers/Layer';

/**
 * Manages adding a given {Layer} instance to a map and hooking
 * up any event handlers that the layer might subscribe to.
 */
class LayerManager
{
  /**
   * 
   * @param {mapboxgl.Map} map 
   */
  constructor(map) {
    this.map = map;
  }

  /**
   * Add a layer to the map and subscribe to any events defined
   *
   * @param {string} sourceId 
   * @param {Layer} layer 
   */
  addLayer(sourceId, layer) {
    this.map.addLayer(layer.config(sourceId));

    for (const eventType of layer.subscribedEvents) {
      this.map.on(eventType, layer.layerId, layer.getEventHandler(eventType, this.map));
    }
  }
}

export default LayerManager;