import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import Home from '../scenes/home';

const store = configureStore();

const HomeContainer = ({ assets, initialGroup }) => (
  <Provider store={store}>
    <Home assets={assets} initialGroup={initialGroup} />
  </Provider>
);

export default HomeContainer;