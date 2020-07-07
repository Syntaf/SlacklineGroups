import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const GroupNameInput = props => {
  return (
    <FormControl>
      <InputLabel>Group Name</InputLabel>
      <Input id="group-name" onChange={props.onChange} />
    </FormControl>
  );
};

export default GroupNameInput;