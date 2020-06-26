import React from 'react';

const Map = React.forwardRef((props, ref) => (
    <div id='map' ref={el => (ref.current = el)}></div>
));

export default Map;
