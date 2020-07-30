import React from 'react';

const Map = React.forwardRef((props, ref) => (
  <React.Fragment>
    <div id='map' ref={el => (ref.current = el)}>
      {props.children}
    </div>
  </React.Fragment>
));

export default Map;
