import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const SubmitGroupButton = props => {
  return (
    <FormControl className="formControl">
      <Button color="secondary" variant="contained">
        Submit Group
      </Button>
    </FormControl>
  );
};

export default SubmitGroupButton;
