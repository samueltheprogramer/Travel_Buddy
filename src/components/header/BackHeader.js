import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BackArrowIcon, HeartIcon, ShareIcon } from "../../../assets/svg";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/searchBarDetailsSlice";
import { Ionicons } from "@expo/vector-icons";

const BackHeader = ({ isProfileScreen = false }) => {
  const [isToggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();
  const flilterdLocationDetails = useSelector(
    (state) => state.searchBarDetails.flilterdLocationDetails
  );
  const adLocationDetails = useSelector(
    (state) => state.searchBarDetails.adLocationDetails
  );
  const locationDetails = useSelector(
    (state) => state.searchBarDetails.locationDetails
  );
  const navigation = useNavigation();

  const addFavourite = () => {
    setIsToggle(!isToggle);
    dispatch(
      toggleFavorite(
        flilterdLocationDetails.length !== 0
          ? flilterdLocationDetails[0].location
          : adLocationDetails.location
      )
    );
  };
  console.log("djvfjdvf", locationDetails);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        onPress={() => navigation.goBack()}
      >
        <BackArrowIcon fill={isProfileScreen ? "black" : "#FFFBFE"} />
      </TouchableOpacity>
      <View style={styles.heartAndShareIon}>
        {isProfileScreen ? (
          <TouchableOpacity>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        ) : (
          <>
            <ShareIcon />
            <TouchableOpacity onPress={addFavourite}>
              <HeartIcon fill={isToggle ? "red" : "white"} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: mvs(64),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(20),
    position: "absolute",
    zIndex: 30,
    left: 0,
    right: 0,
  },
  heartAndShareIon: { flexDirection: "row", gap: s(24) },
  signOutText: {
    ...FONTS.h6,
    color: "red",
  },
});

export default BackHeader;
