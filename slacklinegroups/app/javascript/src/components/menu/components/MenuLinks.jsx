import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';

const MenuLinks = props => {
  const buildLink = (item, idx) => (
    <ListItem key={idx} className='listItem' href={item.link} button>
      <ListItemIcon className='listIcon'>{item.icon}</ListItemIcon>
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
