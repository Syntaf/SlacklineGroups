import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const LongitudeInput = ({value, error, readOnly}) => {
  return (
    <FormControl className="formControl">
      <TextField
        value={value}
        error={error}
        label="Longitude"
        InputProps={{
          readOnly: readOnly  
        }}
      />
    </FormControl>
  );
}

export default LongitudeInput;
