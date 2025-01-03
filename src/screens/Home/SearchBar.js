import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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

import DateTimePicker from "../../components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByLocationName,
  setSearchDetails,
} from "../../redux/searchBarDetailsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [guestsNo, setGuestsNo] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  /*  const getFormattedDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }; */

  const getFormattedDate = (date) => {
    const options = { month: "short" }; // e.g., "Jan"
    const month = date.toLocaleDateString(undefined, options);
    const day = date.getDate().toString().padStart(2, "0"); // Ensure day is 2 digits
    return `${month} ${day}`;
  };

  const handleSearch = () => {
    dispatch(
      setSearchDetails({
        location,
        guestsNo,
        startDate: getFormattedDate(startDate),
        endDate: getFormattedDate(endDate),
      })
    );
    dispatch(filterByLocationName(location));
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <SearchIcon />
          <TextInput
            placeholder="Location"
            placeholderTextColor={COLORS.black}
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <FilterIcon />
      </View>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <CalenderIcon />
          <View
            style={{ flexDirection: "row", gap: s(6), alignItems: "center" }}
          >
            <DateTimePicker
              value={startDate}
              onChange={(event, date) => setStartDate(date)}
            />

            <View
              style={{
                width: s(6),
                height: mvs(1.5),
                backgroundColor: "black",
              }}
            ></View>
            <DateTimePicker
              value={endDate}
              onChange={(event, date) => setEndDate(date)}
            />
          </View>
        </View>
      </View>
      <View style={styles.inputField}>
        <View style={styles.innerView}>
          <GuestIcon />
          <Text style={styles.dateText}>{guestsNo} Guests </Text>
        </View>
        <View style={styles.innerView}>
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onPress={() => setGuestsNo(guestsNo > 0 ? guestsNo - 1 : 0)}
          >
            <MinusIcon />
          </TouchableOpacity>
          <View style={styles.divider}></View>
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onPress={() => setGuestsNo(guestsNo + 1)}
          >
            <PlusIcon />
          </TouchableOpacity>
        </View>
      </View>
      <CommonButton buttonText={"Search"} onPress={handleSearch} />
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
