import React, { useEffect, useState } from "react";
import { View, Button, Platform, Text, TouchableOpacity } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, FONTS } from "../../constants";
import { useDispatch } from "react-redux";
import { setEndDate, setStartDate } from "../../redux/searchBarDetailsSlice";

const DateTimePicker = ({ isStartDate = false }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    // Update the date state
    setDate(new Date(currentDate.setHours(0, 0, 0, 0)));
  };

  const showPicker = () => {
    setShow(true);
  };

  // Format to show "Jan 01"
  const getFormattedDate = (date) => {
    const options = { month: "short" }; // e.g., "Jan"
    const month = date.toLocaleDateString(undefined, options);
    const day = date.getDate().toString().padStart(2, "0"); // Ensure day is 2 digits
    return `${month} ${day}`;
  };

  isStartDate
    ? dispatch(setStartDate(getFormattedDate(date)))
    : dispatch(setEndDate(getFormattedDate(date)));

  return (
    <View>
      {show && (
        <RNDateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          // Restrict selection to the year 2025
          minimumDate={new Date(2025, 0, 1)} // Jan 1, 2025
          maximumDate={new Date(2025, 11, 31)} // Dec 31, 2025
        />
      )}
      {/* Display the formatted month and date */}
      <TouchableOpacity onPress={showPicker}>
        <Text
          style={{
            ...FONTS.body1,
            color: COLORS.black,
          }}
        >
          {getFormattedDate(date)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;
