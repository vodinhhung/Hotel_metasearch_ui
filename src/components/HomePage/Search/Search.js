import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, View, TextInput } from "react-native";
import TripIcon from "../../Commom/TripIcon";

const Search = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TripIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Search;
