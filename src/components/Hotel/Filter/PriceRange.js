import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { convertCurrency } from "@lib/utils/hotel";
import { connect } from "react-redux";
import { setSearchParams } from "@redux/actions/hotelAction";

const PriceRange = ({ setSearchParams, priceFrom, priceTo }) => {
  const [piceToState, setPriceToState] = useState(priceTo);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Tối đa {convertCurrency(15000000)}</Text>
      </View>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={priceFrom}
        maximumValue={15000000}
        minimumTrackTintColor="#208838"
        maximumTrackTintColor="#CCC"
        step={10000}
        value={piceToState}
        onValueChange={(value) => {
          setSearchParams({ priceFrom: 50000 });
          setSearchParams({ priceTo: value });
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{convertCurrency(priceFrom)}</Text>
        {!!priceTo && <Text>{convertCurrency(priceTo)}</Text>}
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    priceFrom: state.hotelSearchingByFilter.params.priceFrom,
    priceTo: state.hotelSearchingByFilter.params.priceTo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceRange);
