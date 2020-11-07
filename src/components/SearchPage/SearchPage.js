import React, { useState } from "react";
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./Search";
import { StyleSheet, View, TextInput } from "react-native";
import SearchHeader from "./SearchHeader/SearchHeader";
import SearchBody from "./SearchBody/SearchBody";
import { StatusBar } from "expo-status-bar";
const SearchPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.searchHeader}>
        <SearchHeader />
      </View>
      <View style={styles.searchBody}>
        <SearchBody />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  },
  searchHeader: {
    height: 80,
  },
  searchBody: {
    flex: 1,
    flexDirection: "row",
  },
});

export default SearchPage;
