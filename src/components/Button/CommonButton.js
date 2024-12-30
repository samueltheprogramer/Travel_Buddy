import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { BackArrowIcon } from "../../../assets/svg";

const CommonButton = ({
  customButtonStyle,
  buttonText,
  customButtonTextStyle,
  onPress = () => {},
  isContinueButton = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, customButtonStyle]}
      onPress={onPress}
    >
      <View style={styles.buttonInnerView}>
        <Text style={[styles.buttonText, customButtonTextStyle]}>
          {buttonText}
        </Text>
        {isContinueButton && (
          <View style={styles.rotateTheIcon}>
            <BackArrowIcon />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    width: s(136),
    height: mvs(44),
    borderRadius: mvs(20),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    ...FONTS.button2,
    color: COLORS.white,
    fontWeight: "medium",
  },
  rotateTheIcon: {
    transform: [{ rotate: "180deg" }], // Rotates the text 180 degrees
  },
  buttonInnerView: {
    flexDirection: "row",
    gap: s(17),
  },
});

export default CommonButton;
