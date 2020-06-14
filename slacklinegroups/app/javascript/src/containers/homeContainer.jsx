import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import Home from '../scenes/home';

const store = configureStore();

const HomeContainer = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default HomeContainer;