import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const Container = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.mainContainer, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Container;
