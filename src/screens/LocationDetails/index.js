import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useCallback } from "react";
import { BackHeader, Container } from "../../components";
import LocationDetailsHeader from "./LocationDetailsHeader";
import LocationDetailsBody from "./LocationDetailsBody";
import { locationDetailsData } from "./sampleData";

const LocationDetails = () => {
  return (
    <Container>
      <StatusBar />
      <BackHeader />
      <LocationDetailsHeader locationDetailsData={locationDetailsData} />
      <LocationDetailsBody locationDetailsData={locationDetailsData} />
    </Container>
  );
};

export default LocationDetails;
