import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const GroupNameInput = ({value, onChange, error}) => {
  return (
    <FormControl className="formControl">
      <TextField value={value} onChange={onChange} error={error} label="Name" />
    </FormControl>
  );
};

export default GroupNameInput;