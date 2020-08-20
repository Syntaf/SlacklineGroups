import Layer from './layers/Layer';

/**
 * Manages adding a given {Layer} instance to a map and hooking
 * up any event handlers that the layer might subscribe to.
 */
class LayerManager
{
  /**
   * @param {mapboxgl.Map} map 
   */
  constructor(map) {
    this.map = map;
    this.layers = [];
  }

  /**
   * Add a layer to the map and subscribe to any events defined
   *
   * @param {string} sourceId 
   * @param {Layer} layer 
   */
  addLayer(sourceId, layer) {
    this.map.addLayer(layer.config(sourceId));

    for (const transitionProperty of layer.transitionProperties) {
      this.map.setPaintProperty(layer.layerId, transitionProperty, layer.getTransition(transitionProperty));
    }

    for (const eventType of layer.subscribedEvents) {
      this.map.on(eventType, layer.layerId, layer.getEventHandler(eventType, this.map));
    }

    this.layers[layer.layerId] = layer;
  }

  getLayer(layerId) {
    return this.layers[layerId];
  }
}

export default LayerManager;