import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const GroupTypeSelect = ({value, onChange, error}) => {
  return (
    <FormControl className="formControl">
      <InputLabel>Group Type</InputLabel>
      <NativeSelect value={value} error={error} onChange={onChange}>
        <option value=""></option>
        <option value="facebook_group">Facebook Group</option>
        <option value="facebook_page">Facebook Page</option>
        <option value="other">Other</option>
      </NativeSelect>
    </FormControl>
  )
};

export default GroupTypeSelect;