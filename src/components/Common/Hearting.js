import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
const Hearting = ({ hotel }) => {
  return (
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare}>
        <AntDesign name="hearto" size={24} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: "transparent",
  },
  talkBubbleSquare: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#6665",
    borderRadius: 20,
  },
});
export default Hearting;
