import React from 'react';
import Card from '@material-ui/core/Card';

const GroupTile = ({ groupName, groupType, link}) => {
  return (
    <React.Fragment>
      <div className="header">
        <h1>{groupName}</h1>
      </div>
      <div className="groupContent">
        <ul>
          <li>
            <p className="label">Page Type:</p>
            <span>{groupType}</span>
          </li>
        </ul>
        <div className="imagePlaceholder">
          <p>Images coming soon</p>
        </div>
        <div className="links">
          <a className="groupLink" target="_blank" href={link}>Go to Group</a>
          <a href="">Report an issue</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroupTile;