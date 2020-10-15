import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TripIcon from "../../Common/TripIcon";
import TripIconSmall from "../../Common/TripIconSmall";

const SearchBody = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    flex: 2,
  },
  input: {
    flex: 2,
  },
  logoIcon: {
    flexDirection: "row",
    flex: 8,
  },
});

export default SearchBody;
