import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchMapGroups } from '../actions';

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';

const Home = props => {

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchMapGroups());
  }, []);

  return (
    <React.Fragment>
      <MapNavigationBar />
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