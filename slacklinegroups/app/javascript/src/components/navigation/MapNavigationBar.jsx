import React from 'react';

import Card from '@material-ui/core/Card';

import SideBarButton from '../sidebar/SideBarButton';
import SearchInput from '../search/SearchInput';

const MapNavigationBar = props => {
  return (
    <Card className="mapNavigationBar">
      <SideBarButton />
      <SearchInput disabled={props.disabled} />
    </Card>
  );
};

export default MapNavigationBar;