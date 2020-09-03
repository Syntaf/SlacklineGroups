import React from 'react';
import Gist from 'super-react-gist';

import Header from '../components/header/Header';
import ContentContainer from '../components/container/ContentContainer';

const DevelopScene = () => {
  return (
    <React.Fragment>
      <Header title="// SlacklineGroups" />
      <ContentContainer size="medium">
        <div className="heroSection">
          <h1><span>Embed</span> SlacklineGroups anywhere</h1>
          <h3>Don't pay a dime while helping grow the community</h3>
        </div>
      </ContentContainer>
      <ContentContainer className="tutorialSection" size="small">
        <h1>No-JS Embedding with iFrames</h1>
        <p>Embedding SlacklineGroups is a breeze with iFrames</p>
        <Gist url='https://gist.github.com/Syntaf/cfe90956f7326f815d5d117539bf62f4' />
        <iframe src="http://api.localhost:3001" width="500px" height="500px" />
      </ContentContainer>
    </React.Fragment>
  );
};

export default DevelopScene;
