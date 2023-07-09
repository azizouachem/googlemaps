import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 800px;
  height: 500px;
`;

const center = {
  lat: 37.7749, // Replace with the latitude of your desired center location
  lng: -122.4194, // Replace with the longitude of your desired center location
};

const LandingPage = () => {
  return (
    <Container>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <MapContainer>
          <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={10} />
        </MapContainer>
      </LoadScript>
    </Container>
  );
};

export default LandingPage;
