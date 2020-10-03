import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Search from "./Search/Search";

const MainHomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
      </View>
      <View style={styles.bodyContainer}>
        <Text>Main Body</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerContainer: {
    height: 80,
    flexDirection: "row",
  },
  bodyContainer: {
    flex: 1
  }
});

export default MainHomePage;
