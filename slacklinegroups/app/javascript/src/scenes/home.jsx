import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux';
import { fetchMapGroups } from '../actions/map';
import useMap from '../hooks/UseMap';

import ClusterLayer from '../lib/map/layers/ClusterLayer';
import ClusterLabelLayer from '../lib/map/layers/ClusterLabelLayer';
import GroupMarkerLayer from '../lib/map/layers/GroupMarkerLayer';
import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';
import MapControlsContainer from '../components/map/MapControlsContainer';
import MapResetButton from '../components/navigation/MapResetButton';
import SyntheticGroupClickEvent from '../lib/map/events/SyntheticGroupClickEvent';

const Home = ({dispatch, isFetching, groups, initialGroup, _assets}) => {
  const [mapRef, mapManager] = useMap();

  const flyToGroup = (group) => {
    if (!mapManager) return;

    mapManager.generateSyntheticClick('group-marker-layer', new SyntheticGroupClickEvent(group));
  }

  /** Fetch groups on initial component load */
  useEffect(() => { dispatch(fetchMapGroups()); }, []);

  /** Add necessary sources, layers, and interaction handlers once groups have been received */
  useEffect(() => {
    if (!mapManager || !groups.length) return;

    mapManager.visualize(groups)
              .with(new ClusterLayer())
              .with(new ClusterLabelLayer())
              .with(new GroupMarkerLayer());

    if (initialGroup) {
      flyToGroup(initialGroup);
    }

  }, [mapManager, groups]);

  return (
    <Map ref={mapRef} >
      <MapControlsContainer>
        <MapNavigationBar disabled={isFetching} groups={groups} onGroupSelect={flyToGroup} />
        <MapResetButton mapManager={mapManager} />
      </MapControlsContainer>
    </Map>
  );
};

function mapStateToProps(state) {
  const { map } = state;
  const { isFetching, groups } = map;

  return {
    isFetching,
    groups
  };
}

export default connect(mapStateToProps)(Home);