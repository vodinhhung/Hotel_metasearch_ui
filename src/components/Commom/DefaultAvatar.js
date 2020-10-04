import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getScaleSizeOfImage } from "../../../lib/utils/image-size-resolver";
const images = {
  tripILogo: require("../../../assets/icons/default_avatar.png"),
};
const DefaultAvatar = ({ color = "#026E6E" }) => {
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={[styles.imageStyle, { tintColor: color }]}
        source={images.tripILogo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    ...getScaleSizeOfImage(images.tripILogo, 75),
  },
  imageWrapper: {
    overflow: "hidden",
  },
});

export default DefaultAvatar;
