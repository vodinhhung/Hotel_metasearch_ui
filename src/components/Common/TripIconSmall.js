import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getScaleSizeOfImage } from "../../lib/utils/image-size-resolver";
const images = {
  tripILogoSmall: require("../../../assets/icons/tripi-logo-small.png"),
};
const TripIconSmall = () => {
  return <Image style={styles.imageStyle} source={images.tripILogoSmall} />;
};
const styles = StyleSheet.create({
  imageStyle: {
    ...getScaleSizeOfImage(images.tripILogoSmall, 30),
  },
});

export default TripIconSmall;
