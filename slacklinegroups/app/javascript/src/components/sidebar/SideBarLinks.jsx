import React from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

const SideBarLinks = props => {
  const buildLink = (item, idx) => (
    <ListItem key={idx} className='listItem' button>
      <Link href={item.link} underline="none" rel={item.newTab ? 'noopener' : null} target={item.newTab ? '_blank' : ''}>
        <ListItemIcon className='listIcon'>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text}/>
      </Link>
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

export default SideBarLinks;
