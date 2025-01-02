import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import CommonButton from "../../components/Button/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const HappyJourny = () => {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(5); // Set initial countdown value
  const searchDetails = useSelector(
    (state) => state.searchBarDetails.searchDetails
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigation.navigate("Tabs"); // Redirect to Home after countdown
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <Container style={styles.mainContainer}>
      <TouchableOpacity onPress={() => console.log(searchDetails)}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerText}>
          Happy Journy
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: mvs(1),
          width: s(200),
          alignSelf: "center",
          borderRadius: 10,
          padding: mvs(10),
          marginTop: mvs(25),
          marginBottom: mvs(50),
        }}
      >
        <Text
          style={{ textAlign: "center", ...FONTS.h3, marginBottom: mvs(10) }}
        >
          Trip Details
        </Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: s(60) }}>Location</Text>
            <Text style={{}}>
              :{"   "}
              {searchDetails?.location}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: s(60) }}>Date</Text>
            <Text style={{}}>
              :{"   "} {searchDetails?.startDate} - {searchDetails?.endDate}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: s(60) }}>Guests</Text>
            <Text style={{}}>
              :{"   "} {searchDetails?.guestsNo}
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ ...FONTS.h4, textAlign: "center", marginBottom: mvs(5) }}>
        Redirect to Home in{" "}
      </Text>
      <View
        style={{
          borderRadius: 99,
          // borderWidth: 1,
          alignSelf: "center",
          width: mvs(100),
          height: mvs(100),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            ...FONTS.h1,
          }}
        >
          {countdown}s
        </Text>
      </View>
      <CommonButton
        isBackButton
        buttonText={"Back"}
        customButtonStyle={{ position: "absolute", bottom: mvs(20) }}
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
  },
  headerText: {
    ...FONTS.h1,
    fontSize: mvs(100),
    marginTop: mvs(30),
    color: COLORS.text1,
  },
});

export default HappyJourny;
