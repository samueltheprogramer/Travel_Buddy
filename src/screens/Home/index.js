import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Container, HomeHeader } from "../../components";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants";
import LocationPreview from "./LocationPreview";
import { mvs } from "react-native-size-matters";
import SearchBar from "./SearchBar";

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.mainContainer}>
      <StatusBar style="auto" backgroundColor={COLORS.primary} />
      <View>
        <HomeHeader />
        <SearchBar />
      </View>
      <LocationPreview />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
  },
});

export default Home;