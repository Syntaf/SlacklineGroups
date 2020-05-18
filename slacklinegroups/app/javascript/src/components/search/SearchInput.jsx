import React from 'react';

import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const SearchInput = props => {
  return (
    <TextField
      className='searchBar'
      label=''
      placeholder='Name or Location'
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )    
      }}/>
  )
}

export default SearchInput;
