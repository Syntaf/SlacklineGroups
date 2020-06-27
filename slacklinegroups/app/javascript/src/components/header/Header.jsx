import React from 'react';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Header = props => (
  <Paper className="header" square={true}>
    <Button href="/" underline="none" color="primary">
      <KeyboardBackspaceIcon color="primary" />
      <h4>Back to Map</h4>
    </Button>
  </Paper>
);

export default Header;