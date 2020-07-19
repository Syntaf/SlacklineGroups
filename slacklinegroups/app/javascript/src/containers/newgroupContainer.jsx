import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import NewGroup from '../scenes/newgroup';

const store = configureStore();

const NewGroupContainer = ({ assets, csrf }) => (
  <Provider store={store}>
    <NewGroup assets={assets} csrf={csrf} />
  </Provider>
);

export default NewGroupContainer;