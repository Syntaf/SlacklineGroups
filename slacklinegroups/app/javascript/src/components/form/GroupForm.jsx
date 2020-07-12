import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import GroupNameInput from './input/GroupNameInput';
import GroupTypeSelect from './input/GroupTypeSelect';
import AuthenticityToken from './AuthenticityToken';

const GroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');

  return (
    <form action="/groups/new" className="groupForm"> 
      <AuthenticityToken csrfToken={props.csrf} />
      <Grid container spacing={5}>
        <Grid item md={6} xs={12} className="formTile">
          <GroupNameInput value={groupName} onChange={(event) => {setGroupName(event.target.value);}} />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <GroupTypeSelect value={groupType} onChange={(event) => {setGroupType(event.target.value);}} />
        </Grid>
      </Grid>
    </form>
  );
};

export default GroupForm;
