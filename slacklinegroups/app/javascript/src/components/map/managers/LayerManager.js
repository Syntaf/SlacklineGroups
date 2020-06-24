class LayerManager
{
  constructor(map) {
    this.map = map;
  }

  addLayer(sourceId, layer) {
    this.map.addLayer(layer.config(sourceId));

    for (const eventType of layer.subscribedEvents) {
      this.map.on(eventType, layer.layerId, layer.getEventHandler(eventType, this.map));
    }
  }
}

export default LayerManager;