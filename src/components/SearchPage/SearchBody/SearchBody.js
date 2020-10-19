import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import HotelGrid from "../../Hotel/HotelGrid";
import { ScrollView } from "react-native-gesture-handler";

const SearchBody = () => {
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
