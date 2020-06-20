import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import MapConfigFactory from './MapConfigFactory';

const Map = ({ groups }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      mapboxgl.accessToken = MapConfigFactory.ACCESS_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/syntaf/ckbmvh7lj1slr1inwsw3c4k4t',
        center: [0, 35],
        zoom: 1.75
      });

      map.on('load', () => { map.resize(); });

      setMap(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    const addGroupsToMap = (groups, map) => {
      const features = MapConfigFactory.createFeatures(groups);

      map.addSource('group-clusters', {
        ...features,
        'cluster': true,
        'clusterRadius': MapConfigFactory.CLUSTER_SIZE
      });

      map.addLayer({
        'id': 'clusters',
        'type': 'circle',
        'source': 'group-clusters',
        'filter': ['has', 'point_count'],
        'paint': MapConfigFactory.getClusterPaintConfig()
      });

      map.addLayer({
        'id': 'cluster-labels',
        'type': 'symbol',
        'source': 'group-clusters',
        'filter': ['has', 'point_count'],
        'layout': {
          'text-field': '{point_count_abbreviated}',
          'text-size': 14
        },
        'paint': {
          'text-color': '#272727'
        }
      })

      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'group-clusters',
        'filter': ['!', ['has', 'point_count']],
        'layout': {
          'icon-image': 'slackgroup',
          'icon-size': 1
        }
      })
    };
    if (map && groups.length) addGroupsToMap(groups, map);
  }, [map, groups]);

  return (
    <div id='map' ref={el => (mapContainer.current = el)}></div>
  );
};

export default Map;