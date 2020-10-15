import React, { useState } from "react";

import { StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TripIconSmall from "../../Common/TripIconSmall";

const SearchHeader = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.backIcon}
        name="arrow-back"
        size={24}
        color="gray"
      />
      <TextInput
        style={[styles.input, { height: 40 }]}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <View style={styles.logoIcon}>
        <TripIconSmall />
      </View>
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
    paddingLeft: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    borderColor: "yellow",
    flex: 10,
  },
  logoIcon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
  },
});

export default SearchHeader;
