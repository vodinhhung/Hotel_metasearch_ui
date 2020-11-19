import React, { useEffect} from "react";
import { connect } from "react-redux";
import { Chip } from "react-native-paper";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
import { facilitiesData } from "@lib/utils/facilityHotel";
const images = {
  star: require("@assets/icons/star.png"),
};
import { setSearchParams } from "@redux/actions/hotelAction";
const FilterSelected = ({
  index,
  facilities,
  setSearchParams,
  searchParams,
}) => {
  const searchParamsConvert = Object.keys(searchParams).map((key) => [
    key,
    searchParams[key],
  ]);
  const mergeItemList = [
    ...facilitiesData.map((item) => ({
      ...item,
      isFacility: true,
    })),
    ...searchParamsConvert,
  ];
  
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      extraData={facilities}
      horizontal={true}
      data={mergeItemList}
      renderItem={({ item, index }) => {
        if (index < 10 && !facilities[index]) {
          return null;
        } else if (index > 9) {
          switch (item[0]) {
            case "dateFrom":
            case "dateTo":
            case "priceFrom":
            case "priceFrom":
            case "facility":
            case "destination":
            case "page":
              return null;
          }
          if (!item[1]) return null;
        }
        return (
          <View key={index} style={{ paddingBottom: 15, paddingLeft: 16 }}>
            <Chip
              icon="close"
              style={{ flexDirection: "column", alignItems: "center" }}
              onPress={() => {}}
            >
              <Text
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                {(item?.isFacility && facilitiesData[index].description) ||
                  item[0] + ": " + item[1]}
              </Text>
            </Chip>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    ...getScaleSizeOfImage(images.star, 30),
    tintColor: "#208838",
  },
});
function mapStateToProps(state) {
  return {
    facilities: state.hotelSearchingByFilter.params.facility ?? [],
    searchParams: state.hotelSearchingByFilter.params,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterSelected);
