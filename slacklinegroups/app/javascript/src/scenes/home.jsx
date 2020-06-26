import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux';

import { fetchMapGroups } from '../actions/map';

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';
import MapManagerFactory from '../lib/map/MapManagerFactory';
import MapControlsContainer from '../components/map/MapControlsContainer';

const Home = ({dispatch, isFetching, groups, assets}) => {
  const mapContainer = useRef(null);
  const [mapManager, setMapManager] = useState(null);

  /** Fetch groups on initial component load */
  useEffect(() => { dispatch(fetchMapGroups()); }, []);

  /** Create and render the map without any visualizations initially */
  useEffect(() => { if (!mapManager) setMapManager(MapManagerFactory.create(mapContainer)); }, [mapManager]);

  /** Add necessary sources, layers, and interaction handlers once groups have been received */
  useEffect(() => { if (mapManager && groups.length) mapManager.visualize(groups); }, [mapManager, groups]);

  return (
    <Map ref={mapContainer} >
      <MapControlsContainer>
        <MapNavigationBar disabled={isFetching} />
        <div class="homeButton"></div>
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