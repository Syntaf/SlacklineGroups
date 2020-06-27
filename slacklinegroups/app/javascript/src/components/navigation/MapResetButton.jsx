import React from 'react';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import HomeIcon from '@material-ui/icons/Home';

const MapResetButton = ({ mapManager }) => {
  const resetMap = () => {
    if (mapManager) mapManager.resetView();
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <Fab size="small" color="primary" className="resetButton" onClick={resetMap}>
        <HomeIcon />
      </Fab>
    </Zoom>
  );
};

export default MapResetButton;