import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getScaleSizeOfImage } from "@lib/utils/image-size-resolver";
import OpenURL from "../Common/OpenURL";
import { convertCurrency } from "@lib/utils/hotel";
import { colors } from "react-native-elements";
const images = {
  agoda: require("@assets/icons/agoda-logo.png"),
  booking: require("@assets/icons/booking.png"),
  luxstay: require("@assets/icons/luxstay-icon.png"),
  traveloka: require("@assets/icons/traveloka-logo.png"),
  expedia: require("@assets/icons/expedia.png"),
};
const HotelPlatform = ({ type, color = "black", url, price }) => {
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
        break;
      case "Expedia":
        text = "Expedia";
        break;
      default:
        break;
    }
    return (
      <OpenURL title={type} url={url}>
        <View style={styles.titleStyle}>
          <Text style={styles.title}>{text}</Text>
        </View>
      </OpenURL>
    );
  };

  const renderValue = () => {
    let text = "";
    switch (type) {
      case "Luxstay":
        price.map((item, index) => {
          if (item?.platform == type) {
            return (text = item.value);
          }
        });
      case "Agoda":
        price.map((item, index) => {
          if (item?.platform == type) {
            return (text = item.value);
          }
        });
      case "Booking":
        price.map((item, index) => {
          if (item?.platform == type) {
            return (text = item.value);
          }
        });
      case "Traveloka":
        price.map((item, index) => {
          if (item?.platform == type) {
            return (text = item.value);
          }
        });
      case "Expedia":
        price.map((item, index) => {
          if (item?.platform == type) {
            return (text = item.value);
          }
        });
      default:
        break;
    }
    return (
      <View style={styles.priceS}>
        <Text style={styles.priceStyle}>{`${
          text != 0 ? convertCurrency(text) : "Updating"
        }`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderValue()}
      {renderIcon()}
      {renderTitle()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  title: {
    padding: 5,
    fontWeight: "800",
    color: colors.success,
  },
  titleStyle: {
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    color: colors.success,
    opacity: 0.2,
  },
  priceStyle: {
    color: colors.error,
    fontWeight: "800",
    fontSize: 16,
  },
  priceS: {
    opacity: 0.5,
    marginRight: 8,
    marginLeft: 8,
    justifyContent: "center",
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
export default HotelPlatform;
