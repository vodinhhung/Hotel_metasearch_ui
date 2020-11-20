import React from "react";
import StarHotelIcon from "./StarHotelIcon";
import { connect } from "react-redux";
import { View } from "react-native";
const StarHotel = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}
    >
      <StarHotelIcon index={1} />
      <StarHotelIcon index={2} />
      <StarHotelIcon index={3} />
      <StarHotelIcon index={4} />
      <StarHotelIcon index={5} />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    star: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(StarHotel);
