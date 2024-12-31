import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { BackHeader, Container } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { StarRatingIcon } from "../../../assets/svg";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
  {
    location: "Dubai",
    imageURL: "https://picsum.photos/seed/picsum/500/500",
    rattings: "4.9",
  },
];

const Profile = () => {
  const renderFavouriteLocationItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.grayFill,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ flexDirection: "row", gap: s(10), alignItems: "center" }}
        >
          <Image
            style={{ height: mvs(50), width: mvs(50), borderRadius: mvs(5) }}
            source={{ uri: item.imageURL }}
          />
          <View>
            <Text>{item.location}</Text>
            <Text>
              {item.rattings} <StarRatingIcon />
            </Text>
          </View>
        </View>
        <Ionicons name="close" />
      </View>
    );
  };

  return (
    <Container style={styles.mainContaier}>
      <BackHeader isProfileScreen={true} />
      <View style={styles.profileDetailsView}>
        <View
          style={{
            //backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            width: s(250),
          }}
        >
          <Image
            style={styles.profileImage}
            source={{ uri: "https://picsum.photos/seed/picsum/500/500" }}
          />
          <Text style={styles.detailsText} numberOfLines={1}>
            <Text style={styles.boldText}>Name :</Text> Dravid
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            <Text style={styles.boldText}>Gmail :</Text> Dravid@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.favouriteLocationView}>
        <Text style={styles.favouriteHeaderTitle}>Favourite Locations</Text>
        <FlatList
          data={data}
          renderItem={renderFavouriteLocationItem}
          contentContainerStyle={styles.CCS}
          ItemSeparatorComponent={<View style={{ height: mvs(10) }}></View>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContaier: {
    backgroundColor: COLORS.primary,
  },
  profileDetailsView: {
    height: mvs(300),
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  favouriteLocationView: {
    flex: 1,
    backgroundColor: COLORS.grayFill,
    borderTopRightRadius: mvs(30),
    borderTopLeftRadius: mvs(30),
    marginTop: mvs(-30),
  },
  profileImage: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: 99,
    marginBottom: mvs(10),
  },
  boldText: {
    ...FONTS.h4,
    color: COLORS.black,
  },
  detailsText: {
    textAlign: "center",
    ...FONTS.h4,
    color: COLORS.text1,
  },
  favouriteHeaderTitle: {
    ...FONTS.h4,
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: mvs(20),
  },
  CCS: {
    paddingHorizontal: s(40),
  },
});

export default Profile;
