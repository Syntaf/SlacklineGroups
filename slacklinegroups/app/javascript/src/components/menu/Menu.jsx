import React from 'react';

import Divider from '@material-ui/core/Divider';

import ChatIcon from '@material-ui/icons/Chat';
import PublicIcon from '@material-ui/icons/Public';
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';

import VerticalDrawer from './components/VerticalDrawer';
import MenuLinks from './components/MenuLinks';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';

const Menu = props => {
  const aboveDividerLinks = [
    {
      'text': 'Slackchat',
      'icon': <ChatIcon fontSize='small'/>,
      'link': 'https://www.facebook.com/groups/slackchat?src=slacklinegroups'
    },
    {
      'text': 'Find slackline spots',
      'icon': <PublicIcon fontSize='small'/>,
      'link': 'https://slackmap.com/?src=slacklinegroups'
    }
  ];

  const belowDividerLinks = [
    {
      'text': 'Submit new group',
      'icon': <MailIcon fontSize='small'/>,
      'link': '/groups/new'
    },
    {
      'text': "What's slacklining?",
      'icon': <HelpIcon fontSize='small'/>,
      'link': 'https://slackline.us/what-is-slacklining/?src=slacklinegroups'
    },
    {
      'text': 'About this site',
      'icon': <CodeIcon fontSize='small'/>,
      'link': '/about'
    }
  ];

  return (
    <VerticalDrawer>
      <MenuHeader />
      <MenuLinks links={aboveDividerLinks} className='aboveDividerList'/>
      <Divider />
      <MenuLinks links={belowDividerLinks} className='belowDividerList'/>
      <MenuFooter />
    </VerticalDrawer>
  );
};

export default Menu;