import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import HotelGrid from "@components/Hotel/HotelGrid";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getSearchHotelAction } from "@redux/actions/hotelAction";

const SearchBody = ({
  getSearchHotel,
  searchHotels = { items: [] },
  hotels = { items: [] },
}) => {
  useEffect(() => {
    getSearchHotel("test");
  }, []);
  // console.log(hotels);
  return (
    <ScrollView>
      <View style={styles.container}>
        {hotels?.items.map((item, index) => {
          console.log(item);
          return (
            <View key={index} style={styles.cardWrapper}>
              {/* {console.log(item)} */}
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
  // alert(`${JSON.stringify(state.hotelSearchingByFilter)}`);
  return {
    searchHotels: state.hotelSearching.searchHotels,
    hotels: state.hotelSearchingByFilter.searchHotels,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSearchHotel: (params) => dispatch(getSearchHotelAction(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBody);
