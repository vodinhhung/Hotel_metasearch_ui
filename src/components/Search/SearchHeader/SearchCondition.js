import React, { useState } from "react";
import { Card, Divider } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { renderSortName } from "@lib/utils/resolver";
const HotelCondition = ({ dateFrom, dateTo, sort }) => {
  const navigation = useNavigation();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  return (
    <View style={styles.cardWrapper}>
      <Card
        onPress={() => {
          navigation.navigate("SearchFilterScreen", {});
          // setVisible(true);
        }}
        // style={styles.cardStyle}
      >
        {/* <Text>Hello</Text> */}
        <View style={styles.cardBody}>
          <View style={styles.wrapperContent}>
            <View style={{ flex: 17 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="calendar" size={18} color="#19A2B8" />
                <Text style={styles.thinFont}> Dates</Text>
              </View>
              <Divider />
              <View style={{ flexDirection: "row" }}>
                <Text numberOfLines={1}>
                  {moment(dateFrom).format("ll")} -{" "}
                  {moment(dateTo).format("ll")}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="sort" size={18} color="#19A2B8" />
                <Text style={styles.thinFont}>Sort by</Text>
              </View>
              <Divider />
              <View style={{ flexDirection: "row" }}>
                <Text numberOfLines={1}>{renderSortName(sort)}</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  heartingStyle: {
    top: 10,
    right: 10,
    zIndex: 1,
    position: "absolute",
  },
  ratingStyle: {
    top: 10,
    left: 10,
    zIndex: 1,
    position: "absolute",
  },
  cardWrapper: {
    marginHorizontal: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    zIndex: -1,
  },
  cardStyle: {
    marginVertical: 5,
    elevation: 3,
    // overflow: "hidden",
    position: "relative",
    flex: 1,
    flexDirection: "column",
    padding: 0,
    borderRadius: 10,
  },
  wrapperContent: {
    flexDirection: "row",
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  priceStyle: { color: "#007BFF", fontWeight: "300", fontSize: 20 },
  cardContent: {
    flex: 1,
    flexDirection: "row",
  },
  priceContent: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingRight: 5,
  },
  secondaryColor: {
    color: "#555",
  },
  thinFont: {
    fontFamily: "OpenSans-Regular",
  },
});

function mapStateToProps(state) {
  // alert(`${JSON.stringify(state.hotelSearchingByFilter)}`);
  return {
    dateTo: state.hotelSearchingByFilter.params.dateTo,
    dateFrom: state.hotelSearchingByFilter.params.dateFrom,
    sort: state.hotelSearchingByFilter.params.sort,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchHotelByFilter: (params) =>
      dispatch(getSearchHotelByFilter(params)),
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HotelCondition);
