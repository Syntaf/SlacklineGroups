import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import MapConfigFactory from './MapConfigFactory';

const Map = props => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken = MapConfigFactory.ACCESS_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/syntaf/cjcwnx5yv0dx32sry8tx10buw',
        center: [0, 35],
        zoom: 1.75
      });

      setMap(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    const addGroupsToMapFunctionFactory = (groups, map) => {
      return () => {
        map.resize();

        const features = MapConfigFactory.createFeatures(groups);
  
        map.addSource('group-points', features);
        map.addSource('group-clusters', {
          ...features,
          'cluster': true,
          'clusterMaxZoom': 5,
          'clusterRadius': 25
        });
  
        map.addLayer({
          'id': 'clusters',
          'type': 'circle',
          'source': 'group-points',
          'filter': ['has', 'point_count'],
          'paint': MapConfigFactory.getClusterPaintConfig()
        });

        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'group-points',
          'filter': ['all', ['!has', 'point_count'], ['==', 'is_regional', false]],
          'layout': {
            'icon-image': 'slackgroup',
            'icon-size': 1
          }
        })
      };
    }

    if (map && props.groups.length) map.on('load', addGroupsToMapFunctionFactory(props.groups, map));
  }, [map, props.groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;