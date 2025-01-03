import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BackHeader, Container } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { mvs, s } from "react-native-size-matters";
import { StarRatingIcon } from "../../../assets/svg";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/searchBarDetailsSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const locationDetails = useSelector(
    (state) => state.searchBarDetails.locationDetails
  );
  const flilterdLocationDetails = useSelector(
    (state) => state.searchBarDetails.flilterdLocationDetails
  );
  const adLocationDetails = useSelector(
    (state) => state.searchBarDetails.adLocationDetails
  );
  const favoriteLocationdeatils = locationDetails.filter(
    (item) => item.isFavourite === true
  );

  const RemoveFavourite = (locationName) => {
    console.log("first");
    dispatch(toggleFavorite(locationName));
  };

  console.log("data --->", favoriteLocationdeatils);

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
            source={{ uri: item.mainImage }}
          />
          <View>
            <Text>{item.location}</Text>
            <Text>
              {item.rattings} <StarRatingIcon />
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => RemoveFavourite(item.location)}>
          <Ionicons name="close" />
        </TouchableOpacity>
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
            source={{
              uri: "https://t3.ftcdn.net/jpg/10/58/16/08/240_F_1058160846_MxdSa2GeeVAF5A7Zt9X7Bp0dq0mlzeDe.jpg",
            }}
          />
          <Text style={styles.detailsText} numberOfLines={1}>
            <Text style={styles.boldText}>Name :</Text> User001
          </Text>
          <Text style={styles.detailsText} numberOfLines={1}>
            <Text style={styles.boldText}>Gmail :</Text> User001@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.favouriteLocationView}>
        <Text style={styles.favouriteHeaderTitle}>
          {`Favourite Locationsds (${favoriteLocationdeatils.length})`}
        </Text>
        <FlatList
          data={favoriteLocationdeatils}
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
