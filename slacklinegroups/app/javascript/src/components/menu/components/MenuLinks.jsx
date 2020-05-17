import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';



const MenuLinks = props => {
  const buildLink = (idx,item) => (
    <ListItem key={idx} className='listItem' href={item.link} button>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text}/>
    </ListItem>
  );

  return (
    <List className={['list', props.className].join(' ')}>
      {
        props.links.map(buildLink)
      }
    </List>
  );
};

export default MenuLinks;

{/* <List className='menuList'>
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
      </List> */}