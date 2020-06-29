import React, { useEffect, useState, useRef } from 'react';

import ContentContainer from '../components/container/ContentContainer';
import Map from '../components/map/Map';
import Header from '../components/header/Header';

import MapManagerFactory from '../lib/map/MapManagerFactory';

const NewGroup = props => {
  const mapContainer = useRef(null);
  const [mapManager, setMapManager] = useState(null);

  useEffect(() => { if (!mapManager) setMapManager(MapManagerFactory.create(mapContainer)); }, [mapManager]);

  return (
    <React.Fragment>
      <Header showSiteName={true} />
      <ContentContainer size="medium">
        <Map ref={mapContainer} />
      </ContentContainer>
    </React.Fragment>
  );
};

export default NewGroup;
