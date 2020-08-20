import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, CircularProgress } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({ disabled, groups }) => {
  const endAdornment = (
    <InputAdornment position='end'>
      { disabled ? (
        <CircularProgress className='loading' size='20px' />
      ): (
        <SearchIcon />
      )}
    </InputAdornment>
  );

  const inputProps = {
    disableUnderline: true,
    endAdornment: endAdornment,
  };

  return (
    <Autocomplete
      id="SearchGroupsInput"
      className='searchBar'
      freeSolo={true}
      debug={true}
      options={groups.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Group Name'
          InputProps={{...params.InputProps, ...inputProps}}
        />
      )}
    />
  )
}

export default SearchInput;
