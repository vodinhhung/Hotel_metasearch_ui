import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { StyleSheet, View, TextInput, Text } from "react-native";
import SearchHeader from "@components/Search/SearchHeader/SearchHeader";
import SearchBody from "@components/Search/SearchBody/SearchBody";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import TripIconSmall from "@components/Common/TripIconSmall";
import StatusBar from "@components/Common/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getSearchHotelByFilter,
  setSearchParams,
} from "@redux/actions/hotelAction";
import { connect } from "react-redux";
import moment from "moment";

const SearchPage = ({
  getSearchHotelByFilter,
  setSearchParams,
  destination,
  route,
}) => {
  useEffect(() => {
    setSearchParams({
      star: null,
      priceFrom: null,
      priceTo: null,
      dateFrom: moment(),
      dateTo: moment().add(1, "days"),
      facility: null,
      page: 1,
    });
    getSearchHotelByFilter();
    // setSearchParams;
  }, []);

  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar colors={colors} />
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View>
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={[styles.bigTitle2, { alignSelf: "center" }]}>
            {destination}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.navigate("SearchFilterScreen", {});
            }}
          >
            <Feather name="filter" size={24} color="#007BFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.searchBody}>
        <SearchBody route={route} />
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

function mapDispatchToProps(dispatch) {
  return {
    getSearchHotelByFilter: (params) =>
      dispatch(getSearchHotelByFilter(params)),
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
function mapStateToProps(state) {
  return {
    destination: state.hotelSearchingByFilter.params.destination,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
