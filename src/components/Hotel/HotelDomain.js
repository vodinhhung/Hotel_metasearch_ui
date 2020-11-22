import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
const images = {
  agoda: require("@assets/icons/agoda-logo.png"),
  booking: require("@assets/icons/booking.png"),
  luxstay: require("@assets/icons/luxstay-icon.png"),
  traveloka: require("@assets/icons/traveloka-logo.png"),
  expedia: require("@assets/icons/expedia.png"),
};
const HotelDomain = ({ type, color = "black", url, price }) => {
  const renderIcon = () => {
    switch (type) {
      case "Luxstay":
        return (
          <View style={styles.iconStyle}>
            <Image style={styles.luxStayStyle} source={images.luxstay} />
          </View>
        );
      case "Agoda":
        return (
          <View style={styles.iconStyle}>
            <Image style={styles.agodaStyle} source={images.agoda} />
          </View>
        );
      case "Booking":
        return (
          <View style={styles.iconStyle}>
            <Image style={styles.bookingStyle} source={images.booking} />
          </View>
        );
      case "Traveloka":
        return (
          <View style={styles.iconStyle}>
            <Image style={styles.travelokaStyle} source={images.traveloka} />
          </View>
        );
      case "Expedia":
        return (
          <View style={styles.iconStyle}>
            <Image style={styles.expediaStyle} source={images.expedia} />
          </View>
        );
      default:
        return null;
    }
  };
  return <View style={styles.container}>{renderIcon()}</View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },

  agodaStyle: {
    ...getScaleSizeOfImage(images.agoda, 60),
    alignItems: "center",
    justifyContent: "center",
  },
  bookingStyle: {
    ...getScaleSizeOfImage(images.booking, 90),
    alignItems: "center",
    justifyContent: "center",
  },
  luxStayStyle: {
    ...getScaleSizeOfImage(images.luxstay, 90),
    alignItems: "center",
    justifyContent: "center",
    tintColor: "#333",
  },
  travelokaStyle: {
    ...getScaleSizeOfImage(images.traveloka, 90),
    alignItems: "center",
    justifyContent: "center",
  },
  expediaStyle: {
    ...getScaleSizeOfImage(images.expedia, 60),
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HotelDomain;
