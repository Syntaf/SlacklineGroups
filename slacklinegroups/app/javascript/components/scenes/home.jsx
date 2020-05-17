import React from 'react'
import HorizontalDrawer from '../horizontalDrawer';

const Home = props => {
    return (
      <div>
        <HorizontalDrawer>
            <h2>Hello this is a menu</h2>
        </HorizontalDrawer>
        <p>This is outside the menu</p>
      </div>
    );
};

export default Home;