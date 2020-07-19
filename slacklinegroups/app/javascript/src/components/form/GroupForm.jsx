import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import AuthorEmailInput from './input/AuthorEmailInput';
import GroupNameInput from './input/GroupNameInput';
import GroupRegionalCheckbox from './input/GroupRegionalCheckbox';
import GroupTypeSelect from './input/GroupTypeSelect';
import GroupLinkInput from './input/GroupLinkInput';
import SubmitGroupButton from './input/SubmitGroupButton';
import AuthenticityToken from './AuthenticityToken';

import NewGroupRequest from '../../lib/group/NewGroupRequest';

const GroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');
  const [groupLink, setGroupLink] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [isRegional, setIsRegional] = useState(false);

  const submit = () => {
    let request = new NewGroupRequest(groupName, groupType, groupLink, authorEmail, isRegional, props.csrf);

    fetch('/groups/validate', request.asRequestInit())
      .then(response => response.json())
      .then(json => { console.log(json); });
  };

  return (
    <form action="/groups/new" className="groupForm"> 
      <AuthenticityToken csrfToken={props.csrf} />
      <Grid container spacing={5}>
        <Grid item md={6} xs={12} className="formTile">
          <GroupNameInput value={groupName} onChange={(event) => {setGroupName(event.target.value);}} />
        </Grid>
        <Grid item md={3} xs={12} className="formTile">
          <GroupTypeSelect value={groupType} onChange={(event) => {setGroupType(event.target.value);}} />
        </Grid>
        <Grid item md={3} xs={12} className="formTile checkboxControl">
          <GroupRegionalCheckbox checked={isRegional} onChange={(event) => {setIsRegional(event.target.checked); }} />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <GroupLinkInput value={groupLink} onChange={(event) => {setGroupLink(event.target.value);}} />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <AuthorEmailInput value={authorEmail} onChange={(event) => {setAuthorEmail(event.target.value); }} />
        </Grid>
        <Grid container item md={12} justify="center" className="formTile">
          <Grid item md={4} xs={12}>
            <SubmitGroupButton onClick={submit} />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default GroupForm;
