import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const GroupLinkInput = props => {
  return (
    <FormControl className="formControl">
      <TextField value={props.value} onChange={props.onChange} label="Link" />
    </FormControl>
  );
};

export default GroupLinkInput;
