import React from 'react';
import Card from '@material-ui/core/Card';

const GroupTile = props => {
  return (
    <Card raised={true}>
      <h1>Group {props.hello}</h1>
    </Card>
  );
};

export default GroupTile;