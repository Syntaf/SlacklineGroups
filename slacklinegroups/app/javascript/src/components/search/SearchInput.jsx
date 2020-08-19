import React, { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import { InputAdornment, CircularProgress } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({ isFetching, onQuery }) => {
  const endAdornment = (
    <InputAdornment position='end'>
      { isFetching ? (
        <CircularProgress className='loading' size='20px' />
      ) : (
        <SearchIcon />
      )}
    </InputAdornment>
  );

  const inputProps = {
    disableUnderline: true,
    endAdornment: endAdornment
  };

  return (
    <TextField
      className='searchBar'
      label=''
      onChange={(e) => {onQuery(e.target.value)}}
      placeholder='Name or Location'
      InputProps={inputProps}/>
  )
}

export default SearchInput;
