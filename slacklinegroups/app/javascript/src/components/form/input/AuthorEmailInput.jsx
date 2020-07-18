import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const AuthorEmailInput = props => {
  return (
    <FormControl className="formControl">
      <TextField value={props.value} onChange={props.onChange} label="Email" />
    </FormControl>
  );
}

export default AuthorEmailInput;
