import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchMapGroups } from '../actions/map';

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';

const Home = props => {

  // Fetch groups asynchronously on page load
  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchMapGroups());
  }, []);

  return (
    <React.Fragment>
      <MapNavigationBar disabled={props.isFetching} />
      <Map />
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