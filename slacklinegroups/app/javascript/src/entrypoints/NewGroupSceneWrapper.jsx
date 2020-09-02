import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import NewGroupScene from '../scenes/NewGroupScene';

const store = configureStore();

const NewGroupSceneWrapper = ({ assets, csrf }) => (
  <Provider store={store}>
    <NewGroupScene assets={assets} csrf={csrf} />
  </Provider>
);

export default NewGroupSceneWrapper;