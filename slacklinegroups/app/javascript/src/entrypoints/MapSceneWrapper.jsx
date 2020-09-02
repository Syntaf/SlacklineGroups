import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import MapScene from '../scenes/MapScene';

const store = configureStore();

const MapSceneWrapper = ({ selectedGroup, mapConfig }) => (
  <Provider store={store}>
    <MapScene selectedGroup={selectedGroup} mapConfig={mapConfig} />
  </Provider>
);

export default MapSceneWrapper;