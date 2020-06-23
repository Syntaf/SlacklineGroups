class LayerManager
{
  constructor(map) {
    this.map = map;
  }

  addLayer(sourceId, layer) {
    this.map.addLayer(layer.config(sourceId));
  }
}

export default LayerManager;