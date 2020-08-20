/**
 * Base class which defines basic functionality for any given layer on the map.
 */
class Layer
{
  // Supported events that a layer can subscribe to by overriding 'get subscribedEvents()'
  static get CLICK () { return 'click'; }
  static get ZOOMEND () { return 'zoomend'; }
  static get MOUSE_ENTER () { return 'mouseenter'; }
  static get MOUSE_LEAVE () { return 'mouseleave'; }

  get layerId () { throw new Error('layerId must be defined'); }
  get subscribedEvents () { throw new Error('You must define what events the layer should subscribe to. Return [] in the case of no events'); }
  get transitionProperties () { throw new Error('You must define what properties contain transitions. Return [] in the case of no transitions'); }

  /**
   * Returns a configuration object to be used my mapboxgl.Map#addLayer
   * 
   * @param {string} sourceId the unique ID of the source to be used
   * @returns {Object}
   * 
   * @see https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer
   */
  config(sourceId) { throw new Error('config() must be implemented'); }

  /**
   * Returns the desired value of a paint property at the end of it's transition.
   *
   * @param {string} transitionProperty the name of the paint property
   */
  getTransition(transitionProperty) { throw new Error('getTransition() must be implemented when transition properties are defined'); }

  /**
   * Function factory for delegating events to handlers defined in a layer
   *
   * @param {string} eventType 
   * @param {mapboxgl.Map} map 
   */
  getEventHandler(eventType, map) {
    if (!this.subscribedEvents.includes(eventType)) {
      throw new Error(`Layer ${this.layerId} is attempting to handle an event it does not subscribe to: ${eventType}`);
    }

    switch (eventType) {
      case Layer.CLICK:
        return this.handleClick.bind(this, map);
      case Layer.ZOOMEND:
        return this.handleZoomEnd.bind(this, map);
      case Layer.MOUSE_ENTER:
        return this.handleMouseEnter.bind(this, map);
      case Layer.MOUSE_LEAVE:
        return this.handleMouseLeave.bind(this, map);
    }
  }

  /**
   * Handler called when 'get subscribedEvents()' contains Layer.CLICK
   *
   * @param {mapboxgl.Map} map 
   * @param {Object} event
   */
  handleClick(map, event) { throw new Error('handleClick() must be implemented when subscribed'); }

  /**
   * Handler called when 'get subscribedEvents()' contains Layer.ZOOMEND
   *
   * @param {mapboxgl.Map} map 
   * @param {Object} event 
   */
  handleZoomEnd(map, event) { throw new Error('handleZoomEnd() must be implemented when subscribed'); }

  /**
   * Handler called when 'get subscribedEvents()' containers Layer.MOUSE_ENTER
   *
   * @param {mapboxgl.Map} map 
   * @param {Object} event 
   */
  handleMouseEnter(map, event) { throw new Error('handleMouseEnter() must be implemented when subscribed'); }
  
  /**
   * Handler called when 'get subscribedEvents()' containers Layer.MOUSE_LEAVE
   *
   * @param {mapboxgl.Map} map 
   * @param {Object} event 
   */
  handleMouseLeave(map, event) { throw new Error('handleMouseLeave() must be implemented when subscribed'); }

  _getFeaturesForEvent(map, event) {
    if (!('point' in event)) return null;

    const features = map.queryRenderedFeatures(event.point);

    return features.filter(x => x.layer.id === this.layerId);
  }
}

export default Layer;