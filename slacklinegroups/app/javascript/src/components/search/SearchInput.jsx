import React, { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import { InputAdornment, CircularProgress } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const SearchInput = props => {
  const startAdornment = props.disabled ? (
    <InputAdornment position='start' className='loadingContainer'>
      <CircularProgress className='loading' size='20px' />
    </InputAdornment>
  ) : null;

  const endAdornment = (
    <InputAdornment position='end'>
      <SearchIcon />
    </InputAdornment>
  );

  const inputProps = {
    disableUnderline: true,
    endAdornment: endAdornment,
    startAdornment: startAdornment
  };

  return (
    <TextField
      className='searchBar'
      label=''
      disabled={props.disabled}
      onChange={(e) => {props.onQuery(e.target.value)}}
      placeholder='Name or Location'
      InputProps={inputProps}/>
  )
}

export default SearchInput;
