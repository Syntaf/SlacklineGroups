import React from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import GithubButton from 'react-github-btn';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const MenuFooter = props => {
  return (
    <Grid className='footer' container spacing={3}>
      <Grid item xs>
        <Link href="https://www.facebook.com/slacklinegroups" target="_blank" className="facebookLink">
          <FacebookIcon />
        </Link>
      </Grid>
      <Grid item xs>
        <GithubButton
          href="https://github.com/Syntaf/vigilant-broccoli"
          data-size="large"
          data-icon="octicon-star"
          aria-label="Star Syntaf/Slacklinegroups on Github"
          data-show-count="true">Star</GithubButton>
      </Grid>
      <Grid item xs>
        <Link href="https://www.linkedin.com/in/grant-mercer-82a52097/" target="_blank" className="linkedinLink">
          <LinkedInIcon />
        </Link>
      </Grid>
    </Grid>
  )
};

export default MenuFooter;