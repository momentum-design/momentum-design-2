import React from 'react';

const PageHeader = ({ title, lead }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{lead}</h4>
    </div>
  );
};

export default PageHeader;
