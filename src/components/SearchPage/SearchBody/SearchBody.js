import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HotelGrid from "../../Hotel/HotelGrid";
import TripIcon from "../../Common/TripIcon";
import TripIconSmall from "../../Common/TripIconSmall";
import { ScrollView } from "react-native-gesture-handler";

const SearchBody = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
        <View style={styles.cardWrapper}>
          <HotelGrid />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
  cardWrapper: {
    flexBasis: "50%",
    flexDirection: "row",
    padding: 0,
    marginBottom: 10,
  },
});

export default SearchBody;
