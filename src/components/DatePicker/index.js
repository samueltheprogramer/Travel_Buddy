import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { FONTS, COLORS } from "../../constants/theme"; // Adjust the import path as needed

const DateTimePicker = ({ value, onChange }) => {
  const [show, setShow] = useState(false);

  const showPicker = () => {
    setShow(true);
  };

  const handleChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      onChange(event, selectedDate);
    }
  };

  const getFormattedDate = (date) => {
    const options = { month: "short" }; // e.g., "Jan"
    const month = date.toLocaleDateString(undefined, options);
    const day = date.getDate().toString().padStart(2, "0"); // Ensure day is 2 digits
    return `${month} ${day}`;
  };
  return (
    <View>
      {show && (
        <RNDateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={handleChange}
          minimumDate={new Date(2025, 0, 1)} // Jan 1, 2025
          maximumDate={new Date(2025, 11, 31)} // Dec 31, 2025
        />
      )}
      <TouchableOpacity onPress={showPicker}>
        <Text
          style={{
            ...FONTS.body1,
            color: COLORS.black,
          }}
        >
          {getFormattedDate(value)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;
