import React from 'react';

import Card from '@material-ui/core/Card';
import Slide from '@material-ui/core/Slide';

const MapNavigationBar = (props) => {
  return (
    <Slide in={true} direction="right">
      <Card className="mapNavigationBar">
        {props.children}
      </Card>
    </Slide>
  );
};

export default MapNavigationBar;