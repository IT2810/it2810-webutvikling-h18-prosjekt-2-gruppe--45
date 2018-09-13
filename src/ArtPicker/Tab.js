import React from 'react';

const Tab = ({ name, className, ...rest }) => (
  <div className={`tab ${className}`} {...rest}>
    {name}
  </div>
);

export default Tab;
