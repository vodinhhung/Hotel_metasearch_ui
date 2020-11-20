import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  UIManager,
  LayoutAnimation,
} from "react-native";
import HotelGrid from "@components/Hotel/HotelGrid";
import { connect } from "react-redux";
import {
  setSearchParams,
  getSearchHotelByFilter,
} from "@redux/actions/hotelAction";
import moment from "moment";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SearchBody = ({
  getSearchHotelByFilter,
  hotelLists = { items: null },
  page,
  setSearchParams,
  route,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = React.useRef();
  const hotelCard = (hotel) => {
    return (
      <View style={styles.cardWrapper}>
        <HotelGrid hotel={hotel} />
      </View>
    );
  };
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [hotelLists]);
  const fetchMore = () => {
    setSearchParams({ page: page + 1 });
    console.log("Fetch More");
    getSearchHotelByFilter({ merge: true });
  };
  const toTop = () => {
    // use current
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
  };
  if (route?.params?.scrollToTop) {
    route.params.scrollToTop = false;
    toTop();
  }
  return (
    <FlatList
      ref={flatListRef}
      keyExtractor={(item, index) => item.id.toString()}
      extraData={hotelLists?.items}
      data={hotelLists?.items}
      renderItem={({ item }) => hotelCard(item)}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 500);
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
          }}
          // Android offset for RefreshControl
          // progressViewOffset={HEADER_MAX_HEIGHT}
        />
      }
      ListFooterComponent={<ActivityIndicator size="large" />}
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
    page: state?.hotelSearchingByFilter?.params?.page,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSearchHotelByFilter: (params) =>
      dispatch(getSearchHotelByFilter(params)),
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBody);
