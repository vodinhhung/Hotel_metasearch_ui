import React from "react";
import { StyleSheet, View, Text } from "react-native";
const ReviewScore = ({rating}) => {
  if(rating < 0) return null;
  return (
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare}>
        <Text numberOfLines={1} style={{ flex: 1, textAlign: "center", color: "white", fontWeight: "800", fontSize: 16 }}>{rating}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 30,
    backgroundColor: "#128496",
    borderRadius: 5,
  },
});
export default ReviewScore;
