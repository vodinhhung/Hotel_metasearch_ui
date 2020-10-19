import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const HotelService = ({ type, color = "gray" }) => {
  const renderIcon = () => {
    switch (type) {
      case "wifi":
        return <AntDesign style={styles.iconStyle} name="wifi" size={24} color={color} />;
      case "break-fast":
        return <MaterialIcons style={styles.iconStyle} name="free-breakfast" size={24} color={color} />;
      case "person":
        return <FontAwesome style={styles.iconStyle} name="group" size={24} color={color} />;
      default:
        return <AntDesign style={styles.iconStyle} name="wifi" size={24} color={color} />;
    }
  };
  const renderTitle = () => {
    let text = "";
    switch (type) {
      case "wifi":
        text = "Miễn phí wifi";
        break;
      case "break-fast":
        text = "Miễn phí ăn sáng";
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
      {renderIcon()}
      {renderTitle()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  iconStyle: {
    paddingRight: 5,
  },
  titleStyle: {
    paddingLeft: 5
  }
});
export default HotelService;
