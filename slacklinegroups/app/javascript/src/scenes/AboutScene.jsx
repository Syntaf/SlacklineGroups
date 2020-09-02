import React from 'react';
import GitHubButton from 'react-github-btn';

import ContentContainer from '../components/container/ContentContainer';
import Header from '../components/header/Header';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

const AboutScene = ({ assets }) => {
  const techTiles = assets.tech.map((techAssetUrl) => (
    <Grid item className="techTile" key={techAssetUrl} lg={2} md={3} xs={6}>
      <img src={techAssetUrl} height="50"/>
    </Grid>
  ));

  return (
    <React.Fragment>
      <Header title="SlacklineGroups" />
      <ContentContainer size="medium">
        <div className="heroSection">
          <h1><span>SlacklineGroups</span> is making the world of slack smaller</h1>
          <h3>Serving the community since 2017, SlacklineGroups helps people find local groups and connect with other slackliners across the globe</h3>
        </div>
      </ContentContainer>
      <ContentContainer size="medium">
        <Grid className="gridContainer" container spacing={0}>
          <Grid className="gridTile" item xs={12} sm={4}>
            <Paper className="tile" variant="outlined" square>
              <h4>Open Source</h4>
              <p>Built for the future and completely free. Forever.</p>
            </Paper>
          </Grid>
          <Grid className="gridTile" item xs={12} sm={4}>
            <Paper className="tile" variant="outlined" square>
              <h4>Community Moderated</h4>
              <p>Group submissions are curated and reviewed to ensure a high quality map</p>
            </Paper>
          </Grid>
          <Grid className="gridTile" item xs={12} sm={4}>
            <Paper className="tile" variant="outlined" square>
              <h4>Embeddable</h4>
              <p>Add a SlacklineGroups map to any site using the developer API</p>
            </Paper>
          </Grid>
        </Grid>
      </ContentContainer>
      <ContentContainer size="medium">
        <div className="excerpt">
          <p>
            SlacklineGroups is developed and managed by <a href="https://www.linkedin.com/in/grant-mercer-82a52097/" target="_blank">Grant Mercer</a>, an avid
            slackliner, climber, and programming enthusiast. This project is a gift to the community, aimed at making slacklining more accessible to everyone. 
            Walking one some wiggly one-inch webbing is definitely fun, but enjoying that process with a community makes it all the better.
          </p>
          <p>
            This site wouldn't be much more than an empty map if it weren't for the valuable data contributions from:
          </p>
          <ul>
            <li>Everyone who contributed to the <a href="https://www.facebook.com/groups/slackchat/files">Slackchat Group Document</a></li>
            <li>Ryan Jenks from <a href="https://www.slackline.com/">slackline.com</a></li>
          </ul>
          <div className="line"></div>
        </div>
      </ContentContainer>
      <ContentContainer className="technology" size="medium">
        <span><em>Built with</em></span>
        <Grid className="technologyGrid" container spacing={0}>
          {techTiles}
        </Grid>
      </ContentContainer>
      <ContentContainer className="extra" size="medium">
        <Grid container spacing={0}>
          <Grid className="hostedTile" item xs={12} md={6}>
            <div className="imgWrapper">
              <img src={assets.k8s} />
            </div>
          </Grid>
          <Grid className="contributeTile" item xs={12} md={6}>
            <GitHubIcon />
            <GitHubButton href="https://github.com/syntaf/vigilant-broccoli/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork syntaf/vigilant-brocolli on GitHub">Contribute</GitHubButton>
            <GitHubButton href="https://github.com/syntaf/vigilant-broccoli" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star syntaf/vigilant-brocolli on GitHub">Star</GitHubButton>
          </Grid>
        </Grid>
      </ContentContainer>
    </React.Fragment>
  );
};

export default AboutScene;