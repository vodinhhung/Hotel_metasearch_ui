import React from "react";
import { StyleSheet, View, Text } from "react-native";
const Rating = ({rating}) => {
  return (
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare}>
        <Text style={{ flex: 1, textAlign: "center", color: "white", marginLeft:4, fontWeight: "500" }}>{rating}</Text>
      </View>
      <View style={styles.talkBubbleTriangle} />
    </View>
  );
};
const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: "transparent",
  },
  talkBubbleSquare: {
    display: "flex",
    justifyContent: "center",
    width: 30,
    height: 20,
    backgroundColor: "#0F8FE5",
    borderRadius: 5,
  },
  talkBubbleTriangle: {
    position: "absolute",
    left: -6,
    top: 1,
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 3,
    borderRightWidth: 8,
    borderRightColor: "#0F8FE5",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
});
export default Rating;
