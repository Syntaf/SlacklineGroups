class Layer
{
  get layerId () { throw new Error('layerId must be defined'); }

  config (sourceId) { throw new Error('getConfig() must be implemented'); }
}

export default Layer;