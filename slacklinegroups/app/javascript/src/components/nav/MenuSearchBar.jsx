import React from 'react'

import Card from '@material-ui/core/Card';

import Menu from '../menu/Menu';
import SearchInput from '../search/SearchInput';

const MenuSearchBar = props => {
  return (
    <Card id='MenuSearchBar'>
      <Menu />
      <SearchInput />
    </Card>
  );
};

export default MenuSearchBar;