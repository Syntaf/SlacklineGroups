import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import Home from '../scenes/home';

const store = configureStore();

const HomeContainer = ({ selectedGroup, pageConfig }) => (
  <Provider store={store}>
    <Home selectedGroup={selectedGroup} pageConfig={pageConfig} />
  </Provider>
);

export default HomeContainer;