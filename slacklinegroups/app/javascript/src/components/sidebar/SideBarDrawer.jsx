import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const SideBarDrawer = props => {
  const ANCHOR = 'left';

  const [menuVisible, setMenuVisibility] = React.useState(false);

  const openMenu = (event) => {
    setMenuVisibility(true);
  }

  const closeMenu = (event) => {
    setMenuVisibility(false);
  }

  return (
    <React.Fragment>
      <Button onClick={openMenu} size='small' aria-label="Open menu">
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        className='sidebar'
        anchor={ANCHOR}
        open={menuVisible}
        onClose={closeMenu}
        onOpen={openMenu}>
        {props.children}
      </SwipeableDrawer>
    </React.Fragment>)
}

export default SideBarDrawer;