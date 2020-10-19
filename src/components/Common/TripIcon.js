import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getScaleSizeOfImage } from "../../../lib/utils/image-size-resolver";
const images = {
  tripILogo: require("../../../assets/icons/tripi-logo.png"),
};
const TripIcon = ({color = "#026E6E"}) => {
  return <Image style={[styles.imageStyle, {tintColor: color}]} source={images.tripILogo} />;
};
const styles = StyleSheet.create({
    imageStyle: {
      ...getScaleSizeOfImage(images.tripILogo,75),
    },
});

export default TripIcon;
