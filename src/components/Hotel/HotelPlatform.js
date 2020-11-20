import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
import OpenURL from "../Common/OpenURL";
const images = {
  agoda: require("@assets/icons/agoda-logo.png"),
  booking: require("@assets/icons/booking.png"),
  luxstay: require("@assets/icons/luxstay-icon.png"),
  traveloka: require("@assets/icons/traveloka-logo.png"),
};
const HotelPlatform = ({ type, color = "black", url }) => {
  const renderIcon = () => {
    switch (type) {
      case "luxstay":
        return <Image style={styles.luxStayStyle} source={images.luxstay} />;
      case "agoda":
        return <Image style={styles.agodaStyle} source={images.agoda} />;
      case "booking":
        return <Image style={styles.bookingStyle} source={images.booking} />;
      case "traveloka":
        return (
          <Image style={styles.travelokaStyle} source={images.traveloka} />
        );
      default:
        return null;
    }
  };
  const renderTitle = () => {

    let text = "";
    switch (type) {
      case "Luxstay":
        text = "Luxstay";
        break;
      case "Agoda":
        text = "Agoda";
        break;
      case "Booking":
        text = "Booking";
        break;
      case "Traveloka":
        text = "Traveloka";
      default:
        break;
    }
    return (
      <OpenURL title={type} url={url}>
          <Text style={styles.titleStyle}>{text}</Text>
      </OpenURL>
    );
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
    color: "black",
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
    tintColor: "#333",
  },
  travelokaStyle: {
    ...getScaleSizeOfImage(images.traveloka, 90),
  },
});
export default HotelPlatform;
