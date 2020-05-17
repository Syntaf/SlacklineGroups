import React from 'react'
import Menu from '../components/menu/Menu';

const Home = props => {
    return (
      <div className='home'>
        <Menu />
        <p>This is outside the menu</p>
      </div>
    );
};

export default Home;