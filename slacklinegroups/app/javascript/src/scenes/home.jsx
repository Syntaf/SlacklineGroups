import React from 'react'

import Map from '../components/map/Map';
import MapNavigationBar from '../components/navigation/MapNavigationBar';

const Home = props => {
    return (
      <React.Fragment>
        <MapNavigationBar />
        <Map />
      </React.Fragment>
    );
};

export default Home;