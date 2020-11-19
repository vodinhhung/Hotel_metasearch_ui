import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
const HotelService = ({ type, color = "#666" }) => {
  const { colors } = useTheme();
  const renderIcon = () => {
    switch (type) {
      case "wifi":
        return (
          <AntDesign
            style={styles.iconStyle}
            name="wifi"
            size={24}
            color="white"
          />
        );
      case "car_park":
        return (
          <FontAwesome
            style={styles.iconStyle}
            name="car"
            size={24}
            color="white"
          />
        );
      case "deposit":
        return (
          <FontAwesome5
            name="money-check-alt"
            style={styles.iconStyle}
            name="local-airport"
            size={24}
            color="white"
          />
        );
      case "airport":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="local-airport"
            size={24}
            color="white"
          />
        );
      case "restaurant":
        return (
          <Ionicons
            style={styles.iconStyle}
            name="md-restaurant"
            size={24}
            color="white"
          />
        );
      case "baby_service":
        return (
          <FontAwesome5
            style={styles.iconStyle}
            name="baby-carriage"
            size={24}
            color="white"
          />
        );
      case "bar":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="local-bar"
            size={24}
            color="white"
          />
        );
      case "laundry":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="local-laundry-service"
            size={24}
            color="white"
          />
        );
      case "tour":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="card-travel"
            size={24}
            color="white"
          />
        );
      case "spa":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="spa"
            size={24}
            color="white"
          />
        );
      case "pool":
        return (
          <MaterialIcons
            style={styles.iconStyle}
            name="pool"
            size={24}
            color="white"
          />
        );

      case "person":
        return (
          <FontAwesome
            style={styles.iconStyle}
            name="group"
            size={24}
            color="white"
          />
        );
      default:
        return null;
    }
  };
  const renderTitle = () => {
    let text = "";
    switch (type) {
      case "wifi":
        text = "Free Wifi";
        break;
      case "deposit":
        text = "Deposit";
        break;
      case "car_park":
        text = "Parking";
        break;
      case "airport":
        text = "Airport";
        break;
      case "restaurant":
        text = "Restaurant";
        break;
      case "baby_service":
        text = "Baby Care";
        break;
      case "bar":
        text = "Bar";
        break;
      case "laundry":
        text = "Laundry";
        break;
      case "tour":
        text = "Tour";
        break;
      case "spa":
        text = "Spa";
        break;
      case "pool":
        text = "Pool";
        break;

      case "person":
        text = "Tối đa ... người";
        break;
      default:
        break;
    }
    return <Text style={styles.titleStyle}>{text}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={[{ backgroundColor: colors.primary }, styles.ServiceStyle]}>
        {renderIcon()}
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderTitle()}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ServiceStyle: {
    borderRadius: 360,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {},
});
export default HotelService;
