import React from "react";
import { connect } from "react-redux";
import { Chip } from "react-native-paper";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
import { facilitiesData } from "@lib/utils/facilityHotel";
const images = {
  star: require("@assets/icons/star.png"),
};
import { setSearchParams } from "@redux/actions/hotelAction";
const Facility = ({ index, facilities, setSearchParams }) => {
  console.log(facilities);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      extraData={[...facilities]}
      horizontal={true}
      data={facilitiesData}
      renderItem={({ item, index }) => {
        return (
          <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
            <Chip
              style={{ flexDirection: "column", alignItems: "center" }}
              onPress={() => {
                const newFacilities = [...facilities];
                newFacilities[index] = !newFacilities[index];
                setSearchParams({
                  facility: newFacilities,
                });
              }}
              avatar={<Image style={styles.imageStyle} source={item.image} />}
              selected={facilities[index]}
            >
              <Text
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                {" " + item.description}
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
    facilities: state.hotelSearchingByFilter.params.facility,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Facility);
