import React, { useState } from 'react';

import GroupNameInput from './input/GroupNameInput';

import AuthenticityToken from './AuthenticityToken';

const GroupForm = props => {
  const [groupName, setGroupName] = useState(null);

  return (
    <form action="/groups/new"> 
      <AuthenticityToken csrfToken={props.csrf} />
      <GroupNameInput onChange={setGroupName} />
    </form>
  );
};

export default GroupForm;
