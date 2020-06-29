import React from 'react';

/**
 * @param {string} size one of 'small' (780px), 'medium' (1000px) , 'large' (1200px)
 */
const ContentContainer = ({ size, classes, children }) => (
  <div className={['contentContainer', size].join(' ')} className='test'>
    {children}
  </div>
);

export default ContentContainer;