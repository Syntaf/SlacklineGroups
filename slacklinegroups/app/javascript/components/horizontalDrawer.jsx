import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

const HorizontalDrawer = props => {
  const ANCHOR = 'left';

  const [menuVisible, setMenuVisibility] = React.useState(false);

  const openMenu = (event) => {
    // if (event && event.type === 'keydown' && )

    setMenuVisibility(true);
  }

  const closeMenu = (event) => {
    setMenuVisibility(false);
  }

  return (
    <React.Fragment>
      <Button onClick={openMenu}>MENU</Button>
      <SwipeableDrawer
        anchor={ANCHOR}
        open={menuVisible}
        onClose={closeMenu}
        onOpen={openMenu}
      >
        {props.children}
      </SwipeableDrawer>
    </React.Fragment>)
}

export default HorizontalDrawer;