import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
const images = {
  star: require("@assets/icons/star.png"),
};
import { setSearchParams } from "@redux/actions/hotelAction";
const StarHotelIcon = ({ index, star, setSearchParams }) => {
  return (
    <TouchableHighlight
      style={{
        overflow: "hidden",
        borderRadius: 7,
        padding: 5,
        backgroundColor: index === star ? "#DDDDDD" : null,
      }}
      underlayColor="#DDDDDD"
      onPress={() => {
        setSearchParams({ star: index });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "200" }}>{index}</Text>
        <Image style={styles.imageStyle} source={images.star} />
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    ...getScaleSizeOfImage(images.star, 30),
  },
});
function mapStateToProps(state) {
  return {
    star: state.hotelSearchingByFilter.params.star,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StarHotelIcon);
