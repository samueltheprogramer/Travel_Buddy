import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { mvs } from "react-native-size-matters";

import { s } from "react-native-size-matters";
import { StarRatingIcon } from "../../../assets/svg";
import { COLORS, FONTS } from "../../constants";
import { useSelector } from "react-redux";
import { filterByLocationName } from "../../redux/searchBarDetailsSlice";

const LocationDetailsHeader = ({ locationDetailsData }) => {
  const flilterdLocationDetails = useSelector(
    (state) => state.searchBarDetails.flilterdLocationDetails
  );
  const adLocationDetails = useSelector(
    (state) => state.searchBarDetails.adLocationDetails
  );

  console.log("ghgg --->", adLocationDetails);
  return (
    <View>
      <ImageBackground
        style={styles.loactionImageBG}
        source={{
          uri:
            flilterdLocationDetails.length !== 0
              ? flilterdLocationDetails[0].mainImage
              : adLocationDetails.mainImage,
        }}
        resizeMode="stretch"
      >
        <Text style={styles.loactionName} numberOfLines={1}>
          {flilterdLocationDetails.length !== 0
            ? flilterdLocationDetails[0].location
            : adLocationDetails.location}
        </Text>
        <Text style={styles.countryName} numberOfLines={1}>
          {flilterdLocationDetails.length !== 0
            ? flilterdLocationDetails[0].country
            : adLocationDetails.country}
        </Text>
        <View style={styles.rattingView}>
          <Text style={styles.rattingText} numberOfLines={1}>
            {flilterdLocationDetails.length !== 0
              ? flilterdLocationDetails[0].rattings
              : adLocationDetails.rattings}
          </Text>
          <StarRatingIcon />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loactionImageBG: {
    height: mvs(260),
    justifyContent: "center",
    alignItems: "center",
    gap: mvs(8),
  },
  loactionName: {
    ...FONTS.body1,
    fontSize: mvs(34),
    color: COLORS.white,
  },
  countryName: {
    ...FONTS.body3,
    color: COLORS.white,
  },
  rattingView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: s(5),
    height: mvs(28),
    width: s(80),
    backgroundColor: COLORS.white,
    borderRadius: mvs(25),
  },
  rattingText: {
    ...FONTS.subtitle3,
    color: COLORS.black,
  },
});

export default LocationDetailsHeader;
