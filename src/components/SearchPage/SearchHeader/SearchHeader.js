import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Input, Text } from "react-native-elements";

import { MaterialIcons } from "@expo/vector-icons";
import TripIconSmall from "../../Common/TripIconSmall";

const SearchHeader = ({ navigation, route }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <MaterialIcons
          style={styles.backIcon}
          name="arrow-back"
          size={32}
          color="gray"
        />
        <View style={[styles.input, { height: 40 }]}>
          <Input
            onChangeText={(text) => {}}
            // value={value}
          />
        </View>
        <View style={styles.logoIcon}>
          <TripIconSmall />
        </View>
      </View>
      <View style={[styles.container, styles.filterContainer]}>
        <Text style={styles.titleFilter}>Some more filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 4,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // height: 20
  },
  backIcon: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  input: {
    flex: 15,
    alignItems: "center",
  },
  logoIcon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
  },
  titleFilter: {
    textDecorationColor: "#ddd",
    textDecorationLine: "underline",
  },
});

export default SearchHeader;
