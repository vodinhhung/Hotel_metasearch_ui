import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
const images = {
  tripILogo: require("@assets/icons/default_avatar.png"),
};
const Avatar = ({ avatar, color = "#026E6E" }) => {
  console.log(avatar);
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={[styles.imageStyle, { tintColor: color }]}
        source={avatar || images.tripILogo }
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

export default Avatar;
