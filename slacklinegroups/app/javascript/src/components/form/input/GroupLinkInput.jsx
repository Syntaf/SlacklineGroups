import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const GroupLinkInput = ({value, onChange, error}) => {
  return (
    <FormControl className="formControl">
      <TextField value={value} error={error} onChange={onChange} label="Link" />
    </FormControl>
  );
};

export default GroupLinkInput;
