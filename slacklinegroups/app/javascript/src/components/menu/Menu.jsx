import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import HelpIcon from '@material-ui/icons/Help';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import ChatIcon from '@material-ui/icons/Chat';
import CodeIcon from '@material-ui/icons/Code';

import VerticalDrawer from './VerticalDrawer';

const Menu = props => {
  return (
    <VerticalDrawer>
      <List className='menuList'>
        <ListItem className='menuListItem' button>
          <ListItemIcon>
            <ChatIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Slackchat' />
        </ListItem>
        <ListItem className='menuListItem' button>
          <ListItemIcon>
            <PublicIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Find slackline spots' />
        </ListItem>
      </List>
      <Divider />
      <List className='menuList'>
        <ListItem className='menuListItem' button>
          <ListItemIcon>
            <MailIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Submit a new group' />
        </ListItem>
        <ListItem className='menuListItem' button>
          <ListItemIcon>
            <HelpIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary="What's slacklining?" />
        </ListItem>
        <ListItem className='menuListItem' button>
          <ListItemIcon>
            <CodeIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary="About this site" />
        </ListItem> 
      </List>
    </VerticalDrawer>
  );
};

export default Menu;