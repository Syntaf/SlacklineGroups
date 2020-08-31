import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import Home from '../scenes/home';

const store = configureStore();

const HomeContainer = ({ selectedGroup, mapConfig }) => (
  <Provider store={store}>
    <Home selectedGroup={selectedGroup} mapConfig={mapConfig} />
  </Provider>
);

export default HomeContainer;