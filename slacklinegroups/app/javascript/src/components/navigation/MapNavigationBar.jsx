import React from 'react';

import Card from '@material-ui/core/Card';

import SideBarButton from '../sidebar/SideBarButton';
import SearchInput from '../search/SearchInput';

const MapNavigationBar = props => {
  return (
    <Card className="mapNavigationBar">
      <SideBarButton />
      <SearchInput />
    </Card>
  );
};

export default MapNavigationBar;