import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const GroupNameInput = props => {
  return (
    <FormControl className="formControl">
      <TextField value={props.value} onChange={props.onChange} label="Name" />
    </FormControl>
  );
};

export default GroupNameInput;