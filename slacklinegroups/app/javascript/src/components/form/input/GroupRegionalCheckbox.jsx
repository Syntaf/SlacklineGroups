import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GroupRegionalCheckbox = props => {
  return (
    <FormControlLabel
      className="formControl checkbox"
      control={
        <Checkbox
          checked={props.checked}
          onChange={props.onChange}
          color="primary"
        />
      }
      label="Regional Group"
    />
  );
};

export default GroupRegionalCheckbox;