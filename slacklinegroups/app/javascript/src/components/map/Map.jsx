import React from 'react';

const Map = React.forwardRef((props, ref) => (
  <React.Fragment>
    <div id='map' ref={el => (ref.current = el)}></div>
    {props.children}
  </React.Fragment>
));

export default Map;
