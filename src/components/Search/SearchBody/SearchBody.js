import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import HotelGrid from "@components/Hotel/HotelGrid";
import { connect } from "react-redux";
import { getSearchHotelByFilter } from "@redux/actions/hotelAction";

const SearchBody = ({
  getSearchHotelByFilter,
  hotelLists = { items: null },
}) => {
  useEffect(() => {
    getSearchHotelByFilter();
  }, []);
  const hotelCard = (hotel) => {
    return (
      <View style={styles.cardWrapper}>
        <HotelGrid hotel={hotel} />
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      extraData={hotelLists?.items}
      data={hotelLists?.items}
      renderItem={({item}) => hotelCard(item)}
    ></FlatList>
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
    hotelLists: state?.hotelSearchingByFilter?.searchHotels,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSearchHotelByFilter: (params) =>
      dispatch(getSearchHotelByFilter(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBody);
