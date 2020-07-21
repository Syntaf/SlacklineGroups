import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const AuthorEmailInput = ({value, onChange, error}) => {
  return (
    <FormControl className="formControl">
      <TextField value={value} error={error} onChange={onChange} label="Email" />
    </FormControl>
  );
}

export default AuthorEmailInput;
