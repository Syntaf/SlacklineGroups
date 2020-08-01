import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

const LatitudeInput = ({value, error, readOnly}) => {
  return (
    <FormControl className="formControl">
      <TextField
        value={value}
        error={error}
        label="Latitude"
        InputProps={{
          readOnly: readOnly
        }}
      />
    </FormControl>
  );
}

export default LatitudeInput;
