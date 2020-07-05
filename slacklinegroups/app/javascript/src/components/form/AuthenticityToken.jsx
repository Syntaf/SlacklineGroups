import React from 'react';

const AuthenticityToken = ({ csrfToken }) => (
  <input type="hidden" name="authenticity_token" value={csrfToken} readOnly={true} />
);

export default AuthenticityToken;
