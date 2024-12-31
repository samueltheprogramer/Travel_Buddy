import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { mvs, s } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { LocationnIcon } from "../../assets/svg";
import { COLORS } from "../constants/theme";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.grayFill }}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              hitSlop={{ left: 150, right: 150 }}
              key={index}
              onPress={onPress}
              style={[styles.tab, isFocused && { backgroundColor: "white" }]}
            >
              {/* <Text
              style={[styles.tabLabel, isFocused && styles.tabLabelFocused]}
            >
              {label}
            </Text> */}
              {label === "Home" ? (
                <Ionicons
                  name={isFocused ? "home" : "home-outline"}
                  size={mvs(20)}
                  color={isFocused ? "#18C0C1" : "white"}
                />
              ) : (
                <Ionicons
                  name={isFocused ? "person" : "person-outline"}
                  size={mvs(20)}
                  color={isFocused ? "#18C0C1" : "white"}
                />
              )}
            </TouchableOpacity>
          );
        })}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.grayFill,
              borderTopLeftRadius: mvs(30),
              borderTopRightRadius: mvs(30),
              height: mvs(4),
              width: mvs(8),
            }}
          ></View>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: mvs(7),
            alignItems: "center",
          }}
        >
          <LocationnIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(20),
    backgroundColor: COLORS.customTabFill,
    margin: mvs(10),
    height: mvs(71),
    borderRadius: mvs(30),
  },
  tab: {
    padding: mvs(12),

    borderRadius: mvs(99),
  },
  tabFocused: {
    borderBottomWidth: 2,
    borderBottomColor: "#673ab7",
  },
  tabLabel: {
    color: "#222",
  },
  tabLabelFocused: {
    color: "#673ab7",
  },
});

export default CustomTabBar;
