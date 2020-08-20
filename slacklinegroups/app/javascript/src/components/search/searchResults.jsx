import React from 'react';

import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';

const SearchResults = ({ groups, anchorRef }) => {
    

  const open = Boolean(groups.length);

  return anchorRef.current ? (
      <Popper open={open} anchorEl={anchorRef.current} className="searchResults">
        <Card>
          <List>
            {groups.map(result => (
              <ListItem button key={result.slug}>
                <ListItemText primary={result.name} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Popper>
    ) : null;
};

export default SearchResults;