import React from 'react';

const ErrorLabel = ({ active, className, children }) => (
  <p className={className}>
    { active ? children : ''}
  </p>
);

export default ErrorLabel;