import React from 'react';

import { coordToDMS } from '@mapbox/sexagesimal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const LatitudeInput = ({value, error, readOnly}) => {
  const toDMS = function (value) {
    const DmsObject = coordToDMS(value, 'lat');

    return `${DmsObject.whole}° ${DmsObject.minutes}′ ${DmsObject.seconds}″ ${DmsObject.dir}'`;
  };

  const text = value ? toDMS(value) : '';

  return (
    <FormControl className="formControl">
      <TextField
        value={text}
        className="readOnlyField"
        error={error}
        label="Latitude"
        InputProps={{
          readOnly: readOnly
        }}
        inputProps={{
          tabIndex: -1
        }}
      />
    </FormControl>
  );
}

export default LatitudeInput;
