import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import HotelGrid from "@components/Hotel/HotelGrid";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getSearchHotelAction } from "@redux/actions/hotelAction";

const SearchBody = ({ getSearchHotel, searchHotels = { items: [] } }) => {
  useEffect(() => {
    getSearchHotel("test");
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {searchHotels?.items.map((item, index) => {
          console.log(item);
          return (
            <View key={index} style={styles.cardWrapper}>
              <HotelGrid hotel={item} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  backIcon: {
    flex: 2,
  },
  input: {
    flex: 2,
  },
  logoIcon: {
    flexDirection: "row",
    flex: 8,
  },
  cardWrapper: {
    // flexBasis: "50%",
    flexDirection: "row",
    padding: 0,
    marginBottom: 10,
  },
});
function mapStateToProps(state) {
  // console.log(state);
  return {
    searchHotels: state.hotelSearching.searchHotels,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSearchHotel: (params) => dispatch(getSearchHotelAction(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBody);
