import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { BadgeRoundIcon, BellIcon } from "../../../assets/svg";

const HomeHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.userImage}
        source={{
          uri: "https://t3.ftcdn.net/jpg/10/58/16/08/240_F_1058160846_MxdSa2GeeVAF5A7Zt9X7Bp0dq0mlzeDe.jpg",
        }}
      />
      <Text numberOfLines={1} style={styles.headerText}>
        Hello, User001
      </Text>
      <View style={styles.notifivationIcon}>
        <BellIcon />
        <View style={styles.badgeIcon}>
          <BadgeRoundIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    marginHorizontal: s(20),
    marginTop: mvs(14),
    marginBottom: mvs(21),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: mvs(36),
    height: mvs(36),
    borderRadius: 50,
  },
  headerText: {
    ...FONTS.subtitle1,
    color: COLORS.black,
    fontSize: mvs(16),
    fontWeight: "bold",
    textAlign: "center",
    width: s(150),
  },
  notifivationIcon: {
    width: mvs(36),
    height: mvs(36),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  badgeIcon: {
    position: "absolute",
    left: mvs(18.24),
    top: mvs(8.8),
  },
});

export default HomeHeader;
