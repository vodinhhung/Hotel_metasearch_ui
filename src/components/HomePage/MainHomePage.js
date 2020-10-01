import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Search from "./Search/Search";

const MainHomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Search />
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
    flex: 1,
    flexDirection: "row",
  },
});

export default MainHomePage;
