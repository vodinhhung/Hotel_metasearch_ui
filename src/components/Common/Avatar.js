import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
const images = {
  tripILogo: require("@assets/icons/default_avatar.png"),
};
const AvatarCommon = ({ avatar, size=50 }) => {
  return (
    <Avatar.Image
      style={{ backgroundColor: "white" }}
      size={size}
      source={avatar.uri ? avatar : images.tripILogo}
    />
  );
};

export default AvatarCommon;
