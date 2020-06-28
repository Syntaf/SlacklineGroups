import React from 'react';

import Divider from '@material-ui/core/Divider';

import ChatIcon from '@material-ui/icons/Chat';
import PublicIcon from '@material-ui/icons/Public';
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';

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
      'text': 'About this site',
      'icon': <CodeIcon fontSize='small'/>,
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