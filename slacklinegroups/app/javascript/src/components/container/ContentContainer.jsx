import React from 'react';

import Paper from '@material-ui/core/Paper';

/**
 * @param {string} size one of 'small' (780px), 'medium' (1000px) , 'large' (1200px)
 */
const ContentContainer = ({ size, className, children }) => (
  <div className={`contentContainer ${size ? size : ''} ${className ? className : ''}`} >
    {children}
  </div>
);

export default ContentContainer;