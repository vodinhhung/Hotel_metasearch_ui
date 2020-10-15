import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, View,Text, TextInput } from "react-native";
const HotelDetail = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default HotelDetail;
