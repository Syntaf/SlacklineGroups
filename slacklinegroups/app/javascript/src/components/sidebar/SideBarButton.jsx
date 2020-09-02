import React from 'react';

import Divider from '@material-ui/core/Divider';

import ChatIcon from '@material-ui/icons/Chat';
import CodeIcon from '@material-ui/icons/Code';
import FaceIcon from '@material-ui/icons/Face';
import HelpIcon from '@material-ui/icons/Help';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';

import SideBarDrawer from './SideBarDrawer';
import SideBarLinks from './SideBarLinks';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

const SideBarButton = props => {
  const aboveDividerLinks = [
    {
      'text': 'Slackchat',
      'icon': <ChatIcon fontSize='small'/>,
      'link': 'https://www.facebook.com/groups/slackchat?src=slacklinegroups',
      'newTab': true
    },
    {
      'text': 'Find slackline spots',
      'icon': <PublicIcon fontSize='small'/>,
      'link': 'https://slackmap.com/?src=slacklinegroups',
      'newTab': true
    }
  ];

  const belowDividerLinks = [
    {
      'text': 'Submit new group',
      'icon': <MailIcon fontSize='small'/>,
      'link': '/groups/new',
      'newTab': false 
    },
    {
      'text': "What's slacklining?",
      'icon': <HelpIcon fontSize='small'/>,
      'link': 'https://slackline.us/what-is-slacklining/?src=slacklinegroups',
      'newTab': true
    },
    {
      'text': 'Embed this map',
      'icon': <CodeIcon fontSize='small'/>,
      'link': '/develop',
      'newTab': false
    },
    {
      'text': 'About this site',
      'icon': <FaceIcon fontSize='small'/>,
      'link': '/about',
      'newTab': false
    }
  ];

  return (
    <SideBarDrawer>
      <SideBarHeader />

      <SideBarLinks links={aboveDividerLinks} className='aboveDividerList'/>
      <Divider />
      <SideBarLinks links={belowDividerLinks} className='belowDividerList'/>

      <SideBarFooter />
    </SideBarDrawer>
  );
};

export default SideBarButton;