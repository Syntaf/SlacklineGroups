import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { submitGroup } from '../actions/newgroup';

import Paper from '@material-ui/core/Paper';

import ErrorLabel from '../components/form/ErrorLabel';
import GroupForm from '../components/form/GroupForm';
import ContentContainer from '../components/container/ContentContainer';
import Map from '../components/map/Map';
import Header from '../components/header/Header';

import MapManagerFactory from '../lib/map/MapManagerFactory';

const NewGroup = ({ dispatch, isFetching, submitted, errors, csrf }) => {
  const mapContainer = useRef(null);
  const [mapManager, setMapManager] = useState(null);

  const submit = (request) => {
    dispatch(submitGroup(request));
  };

  useEffect(() => { if (!mapManager) setMapManager(MapManagerFactory.create(mapContainer)); }, [mapManager]);

  return (
    <React.Fragment>
      <Header showSiteName={true} />
      <ContentContainer size="large" className="belowHeaderContent">
        <p>
          To submit a new group for approval, fill out all fields and select a location for 
          your group on the map below.
        </p>
      </ContentContainer>
      <ContentContainer size="large" className="mapContent">
      <Paper elevation={1} className={errors?.location ? 'error' : ''}>
        <Map ref={mapContainer} />
      </Paper>
        { errors?.location ? <ErrorLabel text="Please select a location on the map" className="mapErrorLabel" /> : '' }
      </ContentContainer>
      <ContentContainer size="large" className="formContent">
        <GroupForm csrf={csrf} errors={errors} submitFn={submit} />
      </ContentContainer>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { newgroup } = state;
  const { isFetching, submitted, errors } = newgroup;

  return {
    isFetching,
    submitted,
    errors
  };
}

export default connect(mapStateToProps)(NewGroup);
