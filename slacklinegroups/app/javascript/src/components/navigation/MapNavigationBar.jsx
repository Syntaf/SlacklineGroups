import React from 'react';

import Card from '@material-ui/core/Card';
import Slide from '@material-ui/core/Slide';

import SideBarButton from '../sidebar/SideBarButton';
import SearchInput from '../search/SearchInput';

const MapNavigationBar = props => {
  return (
    <Slide in={true} direction="right">
      <Card className="mapNavigationBar">
        <SideBarButton />
        <SearchInput disabled={props.disabled} />
      </Card>
    </Slide>
  );
};

export default MapNavigationBar;