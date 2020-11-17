import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const TitleHeader = ({ avatar, color = "#026E6E" }) => {
  console.log(avatar);
  return (
    <View style={styles.imageWrapper}>
      <Text>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default TitleHeader;
