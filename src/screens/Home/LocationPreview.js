import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { mvs, s } from "react-native-size-matters";
import { COLORS, FONTS } from "../../constants";
import { DiscountBG, DiscountCouponIcon } from "../../../assets/svg";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByLocationName,
  resetFilter,
} from "../../redux/searchBarDetailsSlice";

const LocationPreview = () => {
  const dispatch = useDispatch();
  const flilterdLocationDetails = useSelector(
    (state) => state.searchBarDetails.flilterdLocationDetails
  );
  const adLocationDetails = useSelector(
    (state) => state.searchBarDetails.adLocationDetails
  );

  const navigation = useNavigation();
  const [showReadMore, setShowReadMore] = useState(false);
  const handleTextLayout = (e) => {
    const { lines } = e.nativeEvent;
    if (lines.length > 4) {
      setShowReadMore(true);
    } else {
      setShowReadMore(false);
    }
  };

  console.log(adLocationDetails);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("LocationDetails")}
      activeOpacity={0.7}
      style={styles.mainContainer}
    >
      <View style={styles.location_image_card}>
        <Image
          style={styles.location_image}
          source={{
            uri:
              flilterdLocationDetails.length !== 0
                ? flilterdLocationDetails[0]?.mainImage
                : adLocationDetails?.mainImage,
          }}
          resizeMode="stretch"
        />
        <View style={styles.discount_View}>
          <DiscountBG />
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",

              right: s(31),
              bottom: mvs(8),

              flexDirection: "row",
              gap: s(12),
              // backgroundColor: "red",
            }}
          >
            <Text style={styles.discountText}>
              {flilterdLocationDetails.length !== 0
                ? flilterdLocationDetails[0]?.discount
                : adLocationDetails?.discount}
            </Text>
            <DiscountCouponIcon />
          </View>
        </View>
        <View
          style={{
            position: "absolute",

            backgroundColor: COLORS.secondary,
            borderBottomRightRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: s(75),
              textAlign: "center",
              color: COLORS.white,
              ...FONTS.body6,
            }}
          >
            Top Rated
          </Text>
        </View>
      </View>
      <View style={styles.location_details}>
        <Text style={styles.detail_text}>DETAILS</Text>
        <View>
          <Text
            style={styles.details}
            numberOfLines={4}
            onTextLayout={handleTextLayout}
          >
            {flilterdLocationDetails.length !== 0
              ? flilterdLocationDetails[0]?.details
              : adLocationDetails?.details}
          </Text>
          {showReadMore && (
            <Text
              style={{
                ...FONTS.body2,
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: COLORS.grayFill,
                paddingRight: s(20),
              }}
            >
              {"  "}... Read More
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.grayFill,
    // flex: 1,
    padding: mvs(20),
    paddingBottom: mvs(10),
    gap: mvs(20),
    borderTopLeftRadius: mvs(30),
    borderTopRightRadius: mvs(30),
  },
  location_image_card: {
    borderRadius: mvs(25),
    overflow: "hidden",
    position: "relative",
  },
  location_image: {
    // flex: 1,
    flexDirection: "row",
    borderRadius: mvs(25),
    height: 200,
    // margin: mvs(20),
  },
  location_details: {
    gap: mvs(10),
  },
  detail_text: {
    ...FONTS.button2,
    lineHeight: mvs(20),
    fontWeight: "medium",
  },
  details: {
    ...FONTS.body2,
    lineHeight: mvs(20),
    fontWeight: "Regular",
    color: COLORS.text1,
  },
  discount_View: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },

  discountText: {
    ...FONTS.body1,
    color: COLORS.white,
    fontWeight: "regular",
    textAlign: "center",
  },
});

export default LocationPreview;
