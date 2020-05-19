import React from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const MenuFooter = props => {
  return (
    <Grid className='footer' container spacing={3}>
      <Grid item xs>
        <Link href="#">
          <FacebookIcon />
        </Link>
      </Grid>
      <Grid item xs>
<a className="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
      </Grid>
      <Grid item xs>
        <Link href="#" color='inherit'>
          <LinkedInIcon />
        </Link>
      </Grid>
    </Grid>
  )
};

export default MenuFooter;