import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Container } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { GoogleIcon } from "../../../assets/svg";

const Auth = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <Container style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.appName}>Travel Buddy</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab(1)}
              style={[styles.tab, selectedTab === 1 ? styles.activeTab : ""]}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 1 ? styles.activeTabText : "",
                ]}
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab(2)}
              style={[styles.tab, selectedTab === 2 ? styles.activeTab : ""]}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 2 ? styles.activeTabText : "",
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.inputField}>
            <View style={styles.googleIcon}>
              <GoogleIcon />
            </View>
            <Text style={styles.authText}>
              {selectedTab === 1 ? "Sign up with google" : "Login with google"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.termsAndCondition}>
          <Text style={{ textAlign: "center", color: COLORS.text1 }}>
            By signing in, you agree to the
          </Text>
          <View style={{ flexDirection: "row", gap: s(5) }}>
            <Text
              style={{
                ...FONTS.h6,
                textAlign: "center",
                color: COLORS.black,
                borderBottomWidth: mvs(1),
              }}
            >
              Terms of Service
            </Text>
            <Text
              style={{
                ...FONTS.h6,
                color: COLORS.text1,
              }}
            >
              and
            </Text>
            <Text
              style={{
                ...FONTS.h6,
                textAlign: "center",
                color: COLORS.black,
                borderBottomWidth: mvs(1),
              }}
            >
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
  },
  topContainer: {
    height: mvs(150),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.grayFill,
    borderTopRightRadius: mvs(30),
    borderTopLeftRadius: mvs(30),
    marginTop: mvs(-30),
    paddingHorizontal: s(16),
    paddingVertical: mvs(40),
    justifyContent: "space-between",
  },
  appName: {
    ...FONTS.h1,
    fontSize: mvs(30),
    textAlign: "center",
    marginTop: mvs(-30),
  },
  tabContainer: {
    height: mvs(50),
    backgroundColor: COLORS.grayFill2,
    borderRadius: mvs(6),
    padding: mvs(5),
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: COLORS.grayFill,
    borderRadius: mvs(6),
  },
  tabText: {
    ...FONTS.h6,
    fontWeight: "900",
  },
  activeTabText: {
    color: COLORS.secondary,
  },
  inputField: {
    height: mvs(45),
    backgroundColor: COLORS.grayFill,
    elevation: 5,
    borderRadius: mvs(6),
    marginTop: mvs(30),
    justifyContent: "center",
    alignItems: "center",
  },
  authText: {
    ...FONTS.h5,
  },
  googleIcon: {
    position: "absolute",
    left: s(16),
  },
  termsAndCondition: {
    alignSelf: "center",
    gap: mvs(2),
  },
});
export default Auth;
