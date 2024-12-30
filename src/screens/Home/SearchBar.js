import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { mvs, s } from "react-native-size-matters";
import { COLORS, FONTS } from "../../constants";
import CommonButton from "../../components/Button/CommonButton";
import {
  CalenderIcon,
  FilterIcon,
  GuestIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "../../../assets/svg";

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <SearchIcon />
          <TextInput
            placeholder="Location"
            placeholderTextColor={COLORS.black}
            style={styles.input}
          />
        </View>
        <FilterIcon />
      </View>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <CalenderIcon />
          <Text style={styles.dateText}>July 08 - July 15 </Text>
        </View>
      </View>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <GuestIcon />
          <Text style={styles.dateText}>2 Guests </Text>
        </View>
        <View style={styles.innerView}>
          <MinusIcon />
          <View style={styles.divider}></View>
          <PlusIcon />
        </View>
      </View>
      <CommonButton buttonText={"Search"} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    marginHorizontal: s(20),
    marginVertical: mvs(10),
    gap: mvs(10),
  },
  inputField: {
    backgroundColor: COLORS.white,
    height: mvs(42.5),
    borderRadius: mvs(10),
    paddingHorizontal: s(20),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  innerView: { flexDirection: "row", alignItems: "center", gap: s(10) },
  input: {
    ...FONTS.body1,
    color: COLORS.black,

    width: s(200),
  },
  dateText: {
    ...FONTS.body1,
    color: COLORS.black,
  },
  divider: {
    width: s(1.5),
    height: mvs(30),

    backgroundColor: COLORS.text1,
    flexDirection: "column",
  },
});

export default SearchBar;
