import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import CommonButton from "../../components/Button/CommonButton";
import { useNavigation } from "@react-navigation/native";

const LocationDetailsBody = ({ locationDetailsData }) => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(1);
  const [showReadMore, setShowReadMore] = useState(false);
  const [expandText, setExpandText] = useState(false);
  const handleTextLayout = (e) => {
    const { lines } = e.nativeEvent;
    if (lines.length > 3) {
      setShowReadMore(true);
    } else {
      setShowReadMore(false);
    }
  };

  const handleContinue = () => {
    if (selectedTab === 3) {
      navigation.navigate("HappyJourny");
    } else {
      setSelectedTab(selectedTab + 1);
      setExpandText(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabView}>
        <CommonButton
          customButtonStyle={[
            styles.tabButtonStyle,
            selectedTab === 1 && styles.activeTab,
          ]}
          customButtonTextStyle={styles.tabButtonText}
          buttonText="Hotels"
          onPress={() => setSelectedTab(1)}
        />
        <CommonButton
          customButtonStyle={[
            styles.tabButtonStyle,
            selectedTab === 2 && styles.activeTab,
          ]}
          customButtonTextStyle={styles.tabButtonText}
          buttonText="Foods"
          onPress={() => setSelectedTab(2)}
        />
        <CommonButton
          customButtonStyle={[
            styles.tabButtonStyle,
            selectedTab === 3 && styles.activeTab,
          ]}
          customButtonTextStyle={styles.tabButtonText}
          buttonText="Activities"
          onPress={() => setSelectedTab(3)}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imagesView}>
          <Image
            style={styles.image}
            source={
              selectedTab === 1
                ? { uri: locationDetailsData.hotels.images[0] }
                : selectedTab === 2
                ? { uri: locationDetailsData.foods.images[0] }
                : selectedTab === 3
                ? { uri: locationDetailsData.activities.images[0] }
                : null
            }
            resizeMode="stretch"
          />
          <View>
            <Image
              style={styles.image}
              source={
                selectedTab === 1
                  ? { uri: locationDetailsData.hotels.images[1] }
                  : selectedTab === 2
                  ? { uri: locationDetailsData.foods.images[1] }
                  : selectedTab === 3
                  ? { uri: locationDetailsData.activities.images[1] }
                  : null
              }
              resizeMode="stretch"
            />
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                position: "absolute",
                inset: 1,
                borderRadius: mvs(20),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.button1, color: COLORS.white }}>10+</Text>
            </View>
          </View>
        </View>
        <View style={styles.location_details}>
          <Text style={styles.detail_text}>DETAILS</Text>
          <View>
            <Text
              style={styles.details}
              numberOfLines={expandText ? undefined : 3}
              onTextLayout={handleTextLayout}
            >
              {selectedTab === 1
                ? locationDetailsData.hotels.details
                : selectedTab === 2
                ? locationDetailsData.foods.details
                : selectedTab === 3
                ? locationDetailsData.activities.details
                : null}
            </Text>
            {showReadMore && !expandText && (
              <TouchableOpacity onPress={() => setExpandText(!expandText)}>
                <Text
                  style={{
                    ...FONTS.body2,
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    backgroundColor: COLORS.primary,
                    paddingRight: s(20),
                  }}
                >
                  {"  "}... Read More
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.continueButtonStle}>
        <CommonButton
          isContinueButton={true}
          buttonText={"Continue"}
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: mvs(30),
    borderTopRightRadius: mvs(30),
    marginTop: mvs(-30),
    paddingVertical: mvs(26),
    paddingHorizontal: s(20),
  },
  tabView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: mvs(20),
  },
  tabButtonStyle: {
    width: s(99),
    height: mvs(40),
    backgroundColor: COLORS.white,
  },
  tabButtonText: {
    ...FONTS.button2,
    color: COLORS.black,
  },
  activeTab: {
    backgroundColor: COLORS.grayFill2,
  },
  imagesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: mvs(14),
  },
  image: {
    height: mvs(187),
    width: s(136),
    borderRadius: mvs(20),
  },
  location_details: {
    gap: mvs(10),
    marginTop: mvs(10),
  },
  detail_text: {
    ...FONTS.button2,
    lineHeight: mvs(20),
    fontWeight: "medium",
  },
  details: {
    ...FONTS.body2,
    lineHeight: mvs(20),
    fontWeight: "Regular",
    color: COLORS.text1,
  },
  continueButtonStle: {
    position: "absolute",
    bottom: mvs(0),
    backgroundColor: COLORS.primary,
    left: 0,
    right: 0,
    paddingVertical: mvs(20),
  },
});

export default LocationDetailsBody;
