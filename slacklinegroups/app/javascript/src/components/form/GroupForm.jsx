import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import AuthorEmailInput from './input/AuthorEmailInput';
import GroupNameInput from './input/GroupNameInput';
import GroupRegionalCheckbox from './input/GroupRegionalCheckbox';
import GroupTypeSelect from './input/GroupTypeSelect';
import GroupLinkInput from './input/GroupLinkInput';
import LatitudeInput from './input/LatitudeInput';
import LongitudeInput from './input/LongitudeInput';
import SubmitGroupButton from './input/SubmitGroupButton';
import AuthenticityToken from './AuthenticityToken';

import NewGroupRequest from '../../lib/group/NewGroupRequest';

const GroupForm = ({ csrf, lat, lng, errors, submitFn }) => {
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');
  const [groupLink, setGroupLink] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [isRegional, setIsRegional] = useState(false);

  const onSubmit = () => {
    const request = new NewGroupRequest(groupName, groupType, groupLink, authorEmail, isRegional, csrf);

    submitFn(request);
  };

  return (
    <form action="/groups/new" className="groupForm"> 
      <AuthenticityToken csrfToken={csrf} />
      <Grid container spacing={5}>
        <Grid item md={6} xs={12} className="formTile">
          <GroupNameInput
            value={groupName}
            error={'name' in errors}
            onChange={(event) => {setGroupName(event.target.value);}}
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <LatitudeInput value="40&deg; 42&prime; 45.72&Prime; N" readOnly={true} />
        </Grid>
        <Grid item md={3} xs={6}>
          <LongitudeInput value="72&deg; 0&prime; 21.24&Prime; W" readOnly={true} />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <GroupTypeSelect
            value={groupType}
            error={'type' in errors}
            onChange={(event) => {setGroupType(event.target.value);}}
          />
        </Grid>
        <Grid item md={6} xs={12} className="formTile checkboxControl">
          <GroupRegionalCheckbox
            checked={isRegional}
            onChange={(event) => {setIsRegional(event.target.checked); }}
          />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <GroupLinkInput
            value={groupLink}
            error={'info.link' in errors}
            onChange={(event) => {setGroupLink(event.target.value);}}
          />
        </Grid>
        <Grid item md={6} xs={12} className="formTile">
          <AuthorEmailInput
            value={authorEmail}
            error={'submitter.email' in errors}
            onChange={(event) => {setAuthorEmail(event.target.value); }}
          />
        </Grid>
        <Grid container item md={12} justify="center" className="formTile">
          <Grid item md={4} xs={12}>
            <SubmitGroupButton onClick={onSubmit} />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default GroupForm;
