import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const GroupTypeSelect = props => {
  return (
    <FormControl className="formControl">
      <InputLabel>Group Type</InputLabel>
      <Select value={props.value} onChange={props.onChange}>
        <MenuItem value="facebook_group">Facebook Group</MenuItem>
        <MenuItem value="facebook_page">Facebook Page</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
  )
};

export default GroupTypeSelect;