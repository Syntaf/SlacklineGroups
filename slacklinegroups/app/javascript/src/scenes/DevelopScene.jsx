import React from 'react';
import Gist from 'super-react-gist';

import Header from '../components/header/Header';
import ContentContainer from '../components/container/ContentContainer';

const DevelopScene = ({ baseApiUrl, exampleGroup }) => {
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
        <p>
          Embedding SlacklineGroups is a breeze with iFrames. The following snippet shows a minimal
          example that can be used anywhere to embed SlacklineGroups:
        </p>
        <Gist url='https://gist.github.com/Syntaf/cfe90956f7326f815d5d117539bf62f4' />
        <span className="note">
          Note: Don't forget to use <strong>{baseApiUrl}</strong> as the src attribute domain
        </span>
        <iframe src={baseApiUrl} width="100%" height="500px" />
      </ContentContainer>
      <ContentContainer className="groupViewSection" size="small">
        <h1>Showing a specific group</h1>
        <p>
          If you'd like to show a specific group on load, you can use the URL of that group (replacing
          the domain with <strong>{baseApiUrl}</strong>)
        </p>
        <Gist url='https://gist.github.com/Syntaf/43e9311c954f7690d91917da2989dab9' />
        <iframe src={`${baseApiUrl}/groups/${exampleGroup.slug}?showHomeButton=false&showSearchBar=false`} width="100%" height="500px" />
      </ContentContainer>
      <ContentContainer className="optionsSection" size="small">
        <h1>Customizing the map</h1>
        <p>
          A number of custom options are available if desired, and can be specified as URL parameters
          <em> e.g. https://api.slacklinegroups.com?showHome=false&center[0]=12.56&center[1]=35.0</em>
        </p>
        <ul>
          <li>
            <strong>showSearchBar:</strong> <em>[true/false]</em>
            <p>default: <em>true</em></p>
            <p>Sets the visibility of the search bar. When set to <em>false</em>, the home button will be shifted left</p>
          </li>
          <li>
            <strong>showHomeButton:</strong> <em>[true/false]</em>
            <p>default: <em>true</em></p>
            <p>Sets the visibility of the home button</p>
          </li>
          <li>
            <strong>center:</strong> <em>Array(2) of form [longitude, latitude]</em>
            <p>default: <em>[0, 35]</em></p>
            <p>Specifies the starting center point of the map. Use the form <em>center[0]=custom-lon&center[1]=custom-lat to pass the values as an array.</em></p>
          </li>
          <li>
            <strong>zoom:</strong> <em>number</em>
            <p>default: <em>1.75</em></p>
            <p>Specifies the starting zoom level of the map. A higher value results in a closer zoom</p>
          </li>
        </ul>
      </ContentContainer>
    </React.Fragment>
  );
};

export default DevelopScene;
