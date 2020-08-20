import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux';
import { fetchMapGroups, queryGroups } from '../actions/map';
import { debounce, throttle } from 'underscore';

import useMap from '../hooks/UseMap';
import useDelayedCallback from '../hooks/UseDelayedCallback';

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';
import MapControlsContainer from '../components/map/MapControlsContainer';
import MapResetButton from '../components/navigation/MapResetButton';
import ClusterLayer from '../lib/map/layers/ClusterLayer';
import ClusterLabelLayer from '../lib/map/layers/ClusterLabelLayer';
import GroupMarkerLayer from '../lib/map/layers/GroupMarkerLayer';
import GroupQueryRequest from '../lib/group/GroupQueryRequest';

const Home = ({dispatch, isFetching, groups, searchResults, _assets}) => {
  const [mapRef, mapManager] = useMap();

  /** Dispatch requests for group queries after debouncing & throttling */
  const onQuery = useDelayedCallback(
    q => dispatch(queryGroups(new GroupQueryRequest(q))),
    500,
    [dispatch]
  );

  /** Fetch groups on initial component load */
  useEffect(() => { dispatch(fetchMapGroups()); }, []);

  /** Add necessary sources, layers, and interaction handlers once groups have been received */
  useEffect(() => {
    if (!mapManager || !groups.length) return;

    mapManager.visualize(groups)
              .with(new ClusterLayer())
              .with(new ClusterLabelLayer())
              .with(new GroupMarkerLayer());

  }, [mapManager, groups]);

  return (
    <Map ref={mapRef} >
      <MapControlsContainer>
        <MapNavigationBar disabled={isFetching} onQuery={onQuery} />
        <MapResetButton mapManager={mapManager} />
      </MapControlsContainer>
    </Map>
  );
};

function mapStateToProps(state) {
  const { map } = state;
  const { isFetching, groups, searchResults } = map;

  return {
    isFetching,
    groups,
    searchResults
  };
}

export default connect(mapStateToProps)(Home);