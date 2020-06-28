import React, { useEffect } from 'react';
import Header from '../components/header/Header';

import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const About = ({ assets }) => {
  const techTiles = assets.tech.map((techAssetUrl) => (
    <GridListTile key={techAssetUrl}>
      <img src={techAssetUrl} className="no" />
    </GridListTile>
  ));

  return (
    <React.Fragment>
      <Header />
      <div className="heroSection">
        <h1><span>SlacklineGroups</span> is making the world of slack smaller</h1>
        <h3>Serving the community since 2017, SlacklineGroups helps people find local groups and connect with other slackliners across the globe</h3>
      </div>
      <GridList spacing={0} cols={3} className="tiles">
        <GridListTile>
          <Paper variant="outlined" square>
            <h4>Open Source</h4>
            <p>Built for the future and completely free. Forever.</p>
          </Paper>
        </GridListTile>
        <GridListTile>
          <Paper variant="outlined" square>
            <h4>Community Moderated</h4>
            <p>Group submissions are curated and reviewed to ensure a high quality map</p>
          </Paper>
        </GridListTile>
        <GridListTile>
          <Paper variant="outlined" square>
            <h4>Embeddable</h4>
            <p>Add a SlacklineGroups map to any site using the developer API</p>
          </Paper>
        </GridListTile>
      </GridList>
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
      <div className="tech">
        <span><em>Built with</em></span>
      <GridList spacing={0} cellHeight={50} cols={6}>
          {techTiles}
        </GridList>
      </div>
    </React.Fragment>
  );
};

export default About;