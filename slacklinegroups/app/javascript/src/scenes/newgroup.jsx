import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { submitGroup } from '../actions/newgroup';
import Paper from '@material-ui/core/Paper';

import ErrorLabel from '../components/form/ErrorLabel';
import GroupForm from '../components/form/GroupForm';
import ContentContainer from '../components/container/ContentContainer';
import Map from '../components/map/Map';
import Header from '../components/header/Header';

import useMap from '../hooks/UseMap';

const NewGroup = ({ dispatch, isFetching, submitted, errors, csrf }) => {
  const [mapRef, mapManager] = useMap();
  const [coordinates, setCoordinates] = useState({lat: '', lng: ''});

  useEffect(() => {
    if (mapManager) {
      mapManager.test(setCoordinates);
    }
  }, [mapManager]);

  const submit = (request) => {
    dispatch(submitGroup(request));
  };

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
        <Paper elevation={1}>
          <Map ref={mapRef} />
        </Paper>
        <ErrorLabel active={errors?.location} className="mapErrorLabel">
          Please select a location on the map
        </ErrorLabel>
      </ContentContainer>
      <ContentContainer size="large" className="formContent">
        <GroupForm
          csrf={csrf}
          lat={coordinates.lat}
          lng={coordinates.lng}
          errors={errors}
          submitFn={submit}
        />
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
