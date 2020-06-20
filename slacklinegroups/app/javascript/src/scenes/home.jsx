import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchMapGroups } from '../actions/map';

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';

const Home = ({dispatch, isFetching, groups, assets}) => {

  useEffect(() => {
    function fetchGroupsForMap() {
      dispatch(fetchMapGroups());
    }

    fetchGroupsForMap();
  }, []);

  return (
    <React.Fragment>
      <MapNavigationBar disabled={isFetching} />
      <Map groups={groups} />
    </React.Fragment>
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