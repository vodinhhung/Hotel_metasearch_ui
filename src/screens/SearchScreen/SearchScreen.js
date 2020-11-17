import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { StyleSheet, View, TextInput } from "react-native";
import SearchHeader from "@components/Search/SearchHeader/SearchHeader";
import SearchBody from "@components/Search/SearchBody/SearchBody";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Input, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import TripIconSmall from "@components/Common/TripIconSmall";
import StatusBar from "@components/Common/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSearchHotelByFilter } from "@redux/actions/hotelAction";
import { connect } from "react-redux";
const SearchPage = ({ route, getSearchHotelByFilter }) => {
  useEffect(() => {
    console.log(route);
    getSearchHotelByFilter({ destination: "" });
  });
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar colors={colors} />
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons
                name="arrow-back"
                size={25}
                style={styles.backIcon}
                color="#007BFF"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={[styles.bigTitle2, { alignSelf: "center" }]}>
            Search
          </Text>
        </View>
        <View style={styles.headerRight}>
          {/* {userInfo ? (
            <Avatar.Image
              size={35}
              source={{ uri: userInfo.picture.data.url }}
            />
          ) : null} */}
        </View>
      </SafeAreaView>
      {/* <View style={styles.searchHeader}>
        <View style={styles.headerWrapper}>
          <View style={styles.backIcon}>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" size={30} color="white" />
            </TouchableHighlight>
          </View>
          <View style={[styles.titleDes]}>
            <Text
              style={{ fontSize: 24, color: "white", fontWeight: "normal" }}
            >
              {route.params.destination}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Feather
              name="filter"
              size={24}
              color="#fff"
              onPress={() =>
                navigation.navigate("SearchFilterScreen", {
                  destination: `${route.params.destination}`,
                })
              }
            />
          </View>
        </View>
      </View> */}
      <View style={styles.searchBody}>
        <SearchBody />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    flexDirection: "row",
  },
  headerLeft: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  headerTitle: {
    flex: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  headerRight: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  backIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleDes: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  searchHeader: {
    height: 80,
  },
  searchBody: {
    flex: 1,
    flexDirection: "row",
  },
  bigTitle2: {
    fontSize: 20,
    fontWeight: "500",
  },
});

function mapStateToProps(dispatch) {
  return { getSearchHotelByFilter: (params) => dispatch(getSearchHotelByFilter(params)) };
}
export default connect(null, mapStateToProps)(SearchPage);
