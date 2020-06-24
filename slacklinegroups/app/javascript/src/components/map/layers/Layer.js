class Layer
{
  // Events
  static get CLICK () { return 'click'; }
  static get ZOOMEND () { return 'zoomend'; }

  get layerId () { throw new Error('layerId must be defined'); }
  get subscribedEvents () { throw new Error('You must define what events the layer should subscribe to. Return [] in the case of no events'); }

  config (sourceId) { throw new Error('config() must be implemented'); }

  getEventHandler(eventType, map) {
    if (!this.subscribedEvents.includes(eventType)) {
      throw new Error(`Layer ${this.layerId} is attempting to handle an event it does not subscribe to: ${eventType}`);
    }

    switch (eventType) {
      case Layer.CLICK:
        return this.handleClick.bind(this, map);
      case Layer.ZOOMEND:
        return this.handleZoomEnd.bind(this, map);
    }
  }

  handleClick(map, event) { throw new Error('handleClick() must be implemented when subscribed'); }
  handleZoomEnd(map, event) { throw new Error('handleZoomEnd() must be implemented when subscribed'); }
}

export default Layer;