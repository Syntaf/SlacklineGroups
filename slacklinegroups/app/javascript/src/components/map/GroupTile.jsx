import React from 'react';
import Card from '@material-ui/core/Card';

const GroupTile = React.forwardRef((props, ref) => {
  return (
    <Card ref={ref} raised={true}>
      <h1>Group {props.hello}</h1>
    </Card>
  );
});

export default GroupTile;