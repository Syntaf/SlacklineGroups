import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ContentContainer from '../container/ContentContainer';

const Header = ({ title }) => {
  const titleElement = title ? (
    <a href="/"><h1 className="title">{title}</h1></a>
  ) : null;

  return (
    <Paper className="header" square={true}>
      <Grid className="headerGrid" container spacing={0}>
        <Grid item className="buttonTile" sm={4}>
          <Button href="/" underline="none" color="primary">
            <KeyboardBackspaceIcon color="primary" />
            <h4>Back to Map</h4>
          </Button>
        </Grid>
        <Grid item className="titleTile" sm={4} xs={12}>
          {titleElement}
        </Grid>
      </Grid>
    </Paper>
  );

};

export default Header;