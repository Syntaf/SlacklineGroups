import React, { useRef } from 'react';

import Card from '@material-ui/core/Card';
import Slide from '@material-ui/core/Slide';

import SideBarButton from '../sidebar/SideBarButton';
import SearchInput from '../search/SearchInput';
import SearchResults from '../search/SearchResults';

const MapNavigationBar = ({ isFetching, onQuery, searchResults }) => {
  const anchorRef = useRef(null);

  return (
    <Slide in={true} direction="right">
      <Card className="mapNavigationBar" ref={anchorRef}>
        <SideBarButton />
        <SearchInput isFetching={isFetching} onQuery={onQuery} />
        <SearchResults groups={searchResults} anchorRef={anchorRef} />
      </Card>
    </Slide>
  );
};

export default MapNavigationBar;