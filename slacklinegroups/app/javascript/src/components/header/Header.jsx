import React from 'react';

import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Header = ({ showSiteName }) => {
  const title = showSiteName ? (
    <h1 className="title">SlacklineGroups</h1>
  ) : null;

  return (
    <Paper className="header" square={true}>
      <GridList cellHeight={70} cols={3}>
        <GridListTile>
          <Button href="/" underline="none" color="primary">
            <KeyboardBackspaceIcon color="primary" />
            <h4>Back to Map</h4>
          </Button>
        </GridListTile>
        <GridListTile className="titleTile">
          {title}
        </GridListTile>
      </GridList>
    </Paper>
  );

};

export default Header;