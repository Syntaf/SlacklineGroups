import React from 'react';

import AuthenticityToken from './AuthenticityToken';

const GroupForm = props => {
  return (
    <form>
      <AuthenticityToken csrfToken={props.csrf} />
    </form>
  );
};

export default GroupForm;
