import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getScaleSizeOfImage } from "../../../lib/utils/image-size-resolver";
const images = {
  agoda: require("../../../assets/icons/agoda-logo.png"),
  booking: require("../../../assets/icons/booking.png"),
  luxstay: require("../../../assets/icons/luxstay-icon.png"),
  traveloka: require("../../../assets/icons/traveloka-logo.png")
};
const HotelPlatform = ({ type, color = "black" }) => {
  const renderIcon = () => {
    switch (type) {
      case "luxstay":
        return (
          <Image style={styles.luxStayStyle} source={images.luxstay} />
        );
      case "agoda":
        return (
          <Image style={styles.agodaStyle} source={images.agoda} />
        );
      case "booking":
        return (
          <Image style={styles.bookingStyle} source={images.booking} />
        );
      case "traveloka":
        return (
          <Image style={styles.travelokaStyle} source={images.traveloka} />
        );
      default:
        return (
          <AntDesign
            style={styles.iconStyle}
            name="wifi"
            size={24}
            color={color}
          />
        );
    }
  };
  const renderTitle = () => {
    let text = "";
    switch (type) {
      case "luxstay":
        text = "Luxstay";
        break;
      case "agoda":
        text = "Agoda";
        break;
      case "booking":
        text = "Booking";
        break;
      case "traveloka":
        text = "Traveloka";
      default:
        break;
    }
    return <Text style={styles.titleStyle}>{text}</Text>;
  };
  return (
    <View style={styles.container}>
      {renderIcon()}
      {renderTitle()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingRight: 5,
  },
  titleStyle: {
    paddingLeft: 10,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
  agodaStyle: {
    ...getScaleSizeOfImage(images.agoda, 60),
  },
  bookingStyle: {
    ...getScaleSizeOfImage(images.booking, 90),
  },
  luxStayStyle: {
    ...getScaleSizeOfImage(images.luxstay, 90),
    tintColor: "#333"
  },
  travelokaStyle: {
    ...getScaleSizeOfImage(images.traveloka, 90),
  }
});
export default HotelPlatform;
