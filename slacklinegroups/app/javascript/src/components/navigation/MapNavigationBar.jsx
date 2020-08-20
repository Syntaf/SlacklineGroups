import React from 'react';

import Card from '@material-ui/core/Card';
import Slide from '@material-ui/core/Slide';

import SideBarButton from '../sidebar/SideBarButton';
import SearchInput from '../search/SearchInput';

const MapNavigationBar = ({ disabled, groups, onGroupSelect }) => {
  return (
    <Slide in={true} direction="right">
      <Card className="mapNavigationBar">
        <SideBarButton />
        <SearchInput disabled={disabled} groups={groups} onGroupSelect={onGroupSelect} />
      </Card>
    </Slide>
  );
};

export default MapNavigationBar;