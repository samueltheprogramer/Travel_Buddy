import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BackArrowIcon, HeartIcon, ShareIcon } from "../../../assets/svg";
import { COLORS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { useNavigation } from "expo-router";

const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        onPress={() => navigation.goBack()}
      >
        <BackArrowIcon />
      </TouchableOpacity>
      <View style={styles.heartAndShareIon}>
        <ShareIcon />
        <HeartIcon />
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
});

export default BackHeader;
